import React from 'react';
import gallery1 from '../assets/images/gallery_1.png';
import gallery5 from '../assets/images/gallery_5.png';

const ClassDetail = () => {
    return (
        <div className="pt-24 pb-20 bg-white">
            {/* Header */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    PROGRAMS
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-meditation-950 mb-8">
                    수업 안내
                </h1>
                <div className="w-20 h-1 bg-meditation-300 mx-auto"></div>
            </section>

            {/* Program 1: Small Group */}
            <section className="container mx-auto px-6 max-w-5xl mb-24">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                            {/* Placeholder for class image */}
                            <img
                                src={gallery1}
                                alt="Small Group Class"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-meditation-100 text-meditation-700 text-xs font-bold rounded-full">정규 수업</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">최대 6명</span>
                        </div>
                        <h2 className="text-3xl font-bold text-meditation-900 mb-6">소그룹 명상 수업</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            사마타 명상의 기초부터 심화까지 체계적으로 배우는 정규 과정입니다.
                            소수 정예로 진행되어 깊이 있는 수련이 가능합니다.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 text-meditation-800">수업 구성 (총 90분)</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-meditation-500 rounded-full mt-2"></div>
                                    <span><strong>본 수업 (70분)</strong>: 아사나 명상 & 사마타 명상 수련</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-meditation-500 rounded-full mt-2"></div>
                                    <span><strong>개별 피드백 (20분)</strong>: 질의응답 및 개인별 맞춤 지도</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">* 요일/시간 선택 가능 (주 2~3회), 수시 등록 가능</p>
                        <p className="text-sm text-gray-500">* 공휴일 보강 가능, 결석 시 사전 연락 필수</p>
                    </div>
                </div>
            </section>

            {/* Program 2: 1:1 Private */}
            <section className="bg-meditation-50 py-20 mb-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <div className="lg:w-1/2">
                            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
                                <img
                                    src={gallery5}
                                    alt="Private Session"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-meditation-600 text-white text-xs font-bold rounded-full">Premium</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-bold rounded-full">대표 유경선생님 직강</span>
                            </div>
                            <h2 className="text-3xl font-bold text-meditation-900 mb-6">1:1 개인 명상</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                현존명상센터 대표 유경선생님이 직접 지도하는 프라이빗 세션입니다.
                                명상에 대한 근본적인 개념 정리부터 개인의 심리/신체 상태에 맞춘 구체적인 솔루션을 제공합니다.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-meditation-200 flex items-center justify-center text-meditation-700 text-sm">✓</div>
                                    <span>자율적인 수업 시간 지정 가능</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-meditation-200 flex items-center justify-center text-meditation-700 text-sm">✓</div>
                                    <span>내면의 문제 해결을 위한 심층 상담 병행</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program 3: Leader Course */}
            <section className="container mx-auto px-6 max-w-4xl mb-24 text-center">
                <h2 className="text-3xl font-bold text-meditation-900 mb-10">지도자 과정 (Master Course)</h2>
                <div className="bg-white border border-meditation-200 rounded-3xl p-10 hover:shadow-xl transition-shadow">
                    <div className="mb-6">
                        <span className="text-meditation-500 font-bold tracking-wider">8 MONTHS</span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-2">1:1 도제식 전문가 과정</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                        현존명상의 사마타 명상법과 지도 노하우를 전수받는 전문가 과정입니다.<br />
                        요가 명상 이론, 아사나 실행법, 티칭 스킬 등 지도자로서 갖춰야 할 모든 것을<br />
                        <strong>1:1 도제식 수업</strong>으로 깊이 있게 배웁니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
                        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700">
                            • 사마타 및 일반 수업 무제한 수강
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700">
                            • 요가/명상 지도자 자격증 동시 취득
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700">
                            • 인도 정통 요가 8개 코스 및 경전
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700">
                            • 반다, 쿰바카 등 고급 수련법 지도
                        </div>
                    </div>
                    <button disabled className="px-8 py-3 border border-gray-300 text-gray-400 rounded-full cursor-not-allowed">
                        대면 상담 후 등록 가능
                    </button>
                </div>
            </section>

            {/* Class Schedule */}
            <section className="container mx-auto px-6 max-w-6xl mb-24">
                <h2 className="text-3xl font-bold text-center text-meditation-900 mb-12">수업 시간표</h2>
                <div className="overflow-x-auto">
                    <div className="min-w-[800px] border-t-2 border-meditation-900">
                        {/* Header Row */}
                        <div className="grid grid-cols-8 border-b border-gray-200 bg-gray-50 text-center font-bold text-gray-700">
                            <div className="p-4 border-r border-gray-100">Time</div>
                            <div className="p-4 border-r border-gray-100">월</div>
                            <div className="p-4 border-r border-gray-100">화</div>
                            <div className="p-4 border-r border-gray-100">수</div>
                            <div className="p-4 border-r border-gray-100">목</div>
                            <div className="p-4 border-r border-gray-100">금</div>
                            <div className="p-4 border-r border-gray-100">토</div>
                            <div className="p-4">일</div>
                        </div>

                        {/* Row 1: 9:00 - 10:30 */}
                        <div className="grid grid-cols-8 border-b border-gray-200 text-sm h-32">
                            <div className="p-2 border-r border-gray-100 flex items-center justify-center font-medium bg-gray-50 text-gray-600">
                                AM 9:00<br />~ 10:30
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Mon */}
                            <div className="border-r border-gray-100"></div> {/* Tue */}
                            <div className="border-r border-gray-100"></div> {/* Wed */}
                            <div className="border-r border-gray-100"></div> {/* Thu */}
                            <div className="border-r border-gray-100"></div> {/* Fri */}
                            <div className="p-1 border-r border-gray-100">   {/* Sat */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">아사나명상</span>
                                    <span className="text-xs">(수리)</span>
                                </div>
                            </div>
                            <div className="p-1">                            {/* Sun */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">아사나명상</span>
                                    <span className="text-xs">(허공)</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: 11:00 - 12:30 */}
                        <div className="grid grid-cols-8 border-b border-gray-200 text-sm h-32">
                            <div className="p-2 border-r border-gray-100 flex items-center justify-center font-medium bg-gray-50 text-gray-600">
                                11:00<br />~ 12:30
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Mon */}
                            <div className="p-1 border-r border-gray-100">   {/* Tue */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">아사나명상</span>
                                    <span className="text-xs">(제로)</span>
                                </div>
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Wed */}
                            <div className="border-r border-gray-100"></div> {/* Thu */}
                            <div className="p-1 border-r border-gray-100">   {/* Fri */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">아사나명상</span>
                                    <span className="text-xs">(수리)</span>
                                </div>
                            </div>
                            <div className="p-1 border-r border-gray-100">   {/* Sat */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">아사나명상</span>
                                    <span className="text-xs">(수리)</span>
                                </div>
                            </div>
                            <div className="p-1">                            {/* Sun */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">아사나명상</span>
                                    <span className="text-xs">(수리)</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: PM 1:00 - 2:30 / 1:00 - 3:00 */}
                        <div className="grid grid-cols-8 border-b border-gray-200 text-sm h-32">
                            <div className="p-2 border-r border-gray-100 flex items-center justify-center font-medium bg-gray-50 text-gray-600">
                                PM 1:00<br />~ 2:30 (3:00)
                            </div>
                            <div className="p-1 border-r border-gray-100">   {/* Mon */}
                                <div className="h-full bg-meditation-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">사마타명상</span>
                                    <span className="text-xs">(현존유경)</span>
                                </div>
                            </div>
                            <div className="p-1 border-r border-gray-100">   {/* Tue */}
                                <div className="h-full bg-gray-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">지도자반</span>
                                    <span className="text-xs">1:00~3:00</span>
                                </div>
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Wed */}
                            <div className="p-1 border-r border-gray-100">   {/* Thu */}
                                <div className="h-full bg-meditation-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">사마타명상</span>
                                    <span className="text-xs">(현존유경)</span>
                                </div>
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Fri */}
                            <div className="p-1 border-r border-gray-100">   {/* Sat */}
                                <div className="h-full bg-gray-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">지도자반</span>
                                    <span className="text-xs">1:00~3:00</span>
                                </div>
                            </div>
                            <div className="p-1">                            {/* Sun */}
                                <div className="h-full bg-gray-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">지도자반</span>
                                    <span className="text-xs">1:00~3:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 4: Afternoon & Evening */}
                        <div className="grid grid-cols-8 border-b border-gray-200 text-sm h-40">
                            <div className="p-2 border-r border-gray-100 flex items-center justify-center font-medium bg-gray-50 text-gray-600">
                                오후 &<br />저녁반
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Mon */}
                            <div className="p-1 border-r border-gray-100 flex flex-col gap-1 justify-center">   {/* Tue */}
                                <div className="h-20 bg-meditation-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold text-xs">사마타명상</span>
                                    <span className="text-[10px]">5:00~6:30<br />(현존유경)</span>
                                </div>
                            </div>
                            <div className="p-1 border-r border-gray-100 flex flex-col justify-end pb-2">   {/* Wed */}
                                <div className="h-20 bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold text-xs">아사나명상</span>
                                    <span className="text-[10px]">7:00~8:30<br />(수리)</span>
                                </div>
                            </div>
                            <div className="p-1 border-r border-gray-100 flex flex-col justify-center">   {/* Thu */}
                                <div className="h-20 bg-gray-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold text-xs">지도자반</span>
                                    <span className="text-[10px]">5:30~7:30</span>
                                </div>
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Fri */}
                            <div className="border-r border-gray-100"></div> {/* Sat */}
                            <div></div>                                      {/* Sun */}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-meditation-500/80"></div>
                        <span>아사나 명상 (초급)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-meditation-700"></div>
                        <span>사마타 명상 (심화)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gray-700"></div>
                        <span>지도자 과정 (전문가)</span>
                    </div>
                </div>
            </section>

            {/* Footer Info */}
            <div className="text-center text-gray-500 text-sm pb-10">
                <p>* 수강료 등 상세 문의는 010-3188-3105로 연락 부탁드립니다.</p>
            </div>
        </div>
    );
};

export default ClassDetail;
