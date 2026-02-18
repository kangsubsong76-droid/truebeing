# Google Sheets ↔ Supabase 실시간 동기화 가이드

이 가이드는 구글 시트에 입력된 회원 정보를 Supabase 데이터베이스로 자동 전송하고, 이를 대시보드에 실시간으로 반영하기 위한 설정 방법입니다.

---

## 1. 구글 시트 준비

1.  사용 중인 구글 시트를 엽니다.
2.  첫 번째 행(Header)에 정확한 컬럼 명이 있어야 합니다. (순서는 상관없으나, 아래 이름이 포함되어야 함)
    *   **이름**, **전화번호** (필수)
    *   상태, 성별, 메모, 만기일, 가입일, 주소 등

## 2. Apps Script 작성

1.  구글 시트 상단 메뉴에서 **`확장 프로그램` > `Apps Script`**를 클릭합니다.
2.  기존 코드를 모두 지우고, 아래 코드를 복사해서 붙여넣습니다.

```javascript
// -----------------------------------------------------------
// 🔧 설정 (이 부분을 사용자 환경에 맞게 수정하세요)
// -----------------------------------------------------------
const SUPABASE_URL = 'https://vmtaqvzobbmbwnlmkmub.supabase.cohttps://vmtaqvzobbmbwnlmkmub.supabase.co'; // 본인의 Supabase URL 입력
const SUPABASE_KEY = 'Ysb_publishable_rgVT-MAwdAjQgu2f-t20VQ_LReoC3_4'; // Service Role Key (설정 > API에서 확인 가능)
const TABLE_NAME = 'members'; // 테이블 이름
// -----------------------------------------------------------

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Supabase 동기화')
    .addItem('전체 데이터 동기화', 'syncAllData')
    .addToUi();
}

// 데이터 포맷팅 및 전송 (Upsert)
function syncAllData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  // 컬럼 매핑 (구글시트 헤더명 -> Supabase 컬럼명)
  // 필요에 따라 수정하세요.
  const columnMap = {
    '이름': 'name',
    '이름 (성함)': 'name',
    '성함': 'name',
    '전화번호': 'phone',
    '연락처': 'phone',
    '상태': 'status',
    '성별': 'gender',
    '메모': 'memo',
    '비고': 'memo',
    '만기일': 'end_date',
    '종료일': 'end_date',
    '가입일': 'join_date',
    '등록일': 'join_date',
    '주소': 'address'
  };

  const payload = rows.map(row => {
    let obj = {};
    let hasName = false;
    let hasPhone = false;

    headers.forEach((header, index) => {
      const dbCol = columnMap[header] || columnMap[header.trim()];
      if (dbCol) {
        let value = row[index];
        
        // 날짜 포맷 변환 (YYYY-MM-DD)
        if (value instanceof Date) {
           value = Utilities.formatDate(value, Session.getScriptTimeZone(), "yyyy-MM-dd");
        }
        
        // 전화번호 포맷 통일 (010-1234-5678)
        if (dbCol === 'phone' && value) {
          value = String(value).replace(/[^0-9]/g, '').replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
          hasPhone = true;
        }

        if (dbCol === 'name' && value) hasName = true;
        
        // 빈 값은 null 처리 또는 빈 문자열
        obj[dbCol] = value === "" ? null : value;
      }
    });

    // 필수 값이 없으면 스킵
    if (!hasName || !hasPhone) return null;
    return obj;
  }).filter(item => item !== null);

  if (payload.length === 0) {
    SpreadsheetApp.getUi().alert('전송할 데이터가 없습니다.');
    return;
  }

  // Supabase로 전송 (Batch Upsert)
  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Prefer': 'resolution=merge-duplicates', // 중복 시 업데이트 (Upsert)
      'User-Agent': 'TrueBeing-Sync-Bot/1.0'   // 브라우저로 오인받지 않기 위한 식별자
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}?on_conflict=phone`, options);
    const responseCode = response.getResponseCode();
    
    if (responseCode === 201 || responseCode === 200 || responseCode === 204) {
      // SpreadsheetApp.getUi().alert(`성공! ${payload.length}명의 회원이 동기화되었습니다.`);
      console.log(`성공! ${payload.length}명의 회원이 동기화되었습니다.`);
    } else {
      console.error('에러 발생: ' + response.getContentText());
      SpreadsheetApp.getUi().alert('동기화 실패: ' + response.getContentText());
    }
  } catch (e) {
    console.error(e);
    SpreadsheetApp.getUi().alert('네트워크 오류: ' + e.toString());
  }
}

// 데이터 수정 시 자동 실행 (Trigger용 함수)
function onEditTrigger(e) {
  // 너무 잦은 호출 방지를 위해 간단한 로직만 추가하거나,
  // 변경된 행만 감지해서 보낼 수도 있습니다. 여기서는 전체 동기화를 호출합니다.
  syncAllData();
}
```

## 3. 설정 값 입력

위 코드의 상단 부분에 있는 `SUPABASE_URL`과 `SUPABASE_KEY`를 본인의 프로젝트 정보로 교체하세요.
*   **SUPABASE_URL**: `.env` 파일의 `VITE_SUPABASE_URL` 값
*   **SUPABASE_KEY**: Supabase 대시보드 > Project Settings > API > **`service_role`** key (비밀 키)를 사용해야 쓰기 권한 문제가 없습니다. (`anon` 키 X)

## 4. 트리거 설정 (자동 동기화)

구글 시트가 수정될 때마다 자동으로 동기화되게 하려면:

1.  Apps Script 화면 왼쪽 메뉴에서 **시계 모양 아이콘 (트리거)**를 클릭합니다.
2.  **`트리거 추가`** 버튼을 클릭합니다.
3.  설정:
    *   실행할 함수: `syncAllData` (또는 `onEditTrigger`)
    *   이벤트 소스: **스프레드시트**
    *   이벤트 유형: **수정 시 (On edit)** 또는 **변경 시 (On change)**
4.  저장 버튼을 누르고 권한을 승인합니다.

이제 구글 시트에서 데이터를 수정하면 자동으로 Supabase에 반영되고, Supabase의 실시간(Realtime) 기능을 통해 관리자 대시보드도 즉시 업데이트됩니다.
