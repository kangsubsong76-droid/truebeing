# Cloudflare Pages 배포 가이드

Cloudflare Pages는 Vercel만큼이나 쉽고 빠른 정적 사이트 호스팅 서비스입니다.
GitHub에 코드가 올라가 있다면, 아래 절차대로 진행하시면 됩니다.

## 1. Cloudflare 접속 및 로그인
1. [Cloudflare 대시보드](https://dash.cloudflare.   com/)에 접속하여 로그인합니다.
2. 왼쪽 메뉴에서 **"Workers & Pages"**를 클릭합니다.
3. **"Create Application"** (또는 애플리케이션 생성) 버튼을 클릭합니다.
4. **"Pages"** 탭을 선택하고 **"Connect to Git"**을 누릅니다.

## 2. GitHub 저장소 연결
1. GitHub 계정을 연동합니다 (처음이라면 권한 승인이 필요합니다).
2. 방금 올린 저장소(`truebeing-meditation` 등)를 선택하고 **"Begin setup"**을 클릭합니다.

## 3. 빌드 설정 (가장 중요!)
설정 화면에서 아래 항목들을 확인해 주세요. Vite 프로젝트라면 보통 자동으로 잡힙니다.

- **Project name**: 원하는 이름 (사이트 주소가 됩니다. 예: `truebeing-meditation.pages.dev`)
- **Production branch**: `main`
- **Framework preset**: **`Vite`** (또는 `React`) 선택
- **Build command**: `npm run build` (자동 입력됨)
- **Build output directory**: `dist` (자동 입력됨)

*만약 `Vite` 프리셋이 없다면 수동으로 입력하세요:*
- Build command: `npm run build`
- Build output directory: `dist`

## 4. How to Update Your Website

Cloudflare Pages automatically deploys your site whenever you push changes to the `main` branch of your GitHub repository.

To update your live site:

1.  **Make changes** to your code locally.
2.  **Open your terminal** and run the following commands:

    ```bash
    # Stage all changes
    git add .

    # Commit changes with a message describing what you did
    git commit -m "Update homepage text"

    # Push to GitHub
    git push
    ```

3.  **Wait a moment**: Cloudflare will detect the new commit, build your site, and deploy the updates automatically (usually takes 1-2 minutes).

## 5. 배포 시작
1. 맨 아래 **"Save and Deploy"** 버튼을 클릭합니다.
2. "Building..." 화면이 나오며 배포가 진행됩니다 (약 1~2분 소요).
3. 완료되면 **"Continue to project"**를 누르고, 상단의 사이트 링크(`https://....pages.dev`)를 클릭하여 접속을 확인합니다.

---

### 참고: 도메인 연결
나중에 개인 도메인(예: `truebeing.com`)을 연결하고 싶다면, Pages 프로젝트 대시보드의 **"Custom domains"** 탭에서 설정할 수 있습니다.
