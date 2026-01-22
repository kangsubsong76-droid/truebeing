import React from 'react';

const ProgramSection = () => {
    const consultationUrl = "https://map.naver.com/p/search/%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0/place/1422222547?placePath=/ticket?entry=pll&from=map&fromPanelNum=2&timestamp=202601220053&locale=ko&svcName=map_pcv5&searchText=%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0&from=nx&fromPanelNum=2&timestamp=202601220053&locale=ko&svcName=map_pcv5&searchText=%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0&fromNxList=true&searchType=place&c=15.00,0,0,0,dh";
    const oneDayClassUrl = "https://map.naver.com/p/search/%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0/place/1422222547?placePath=/ticket?entry=pll&from=map&fromPanelNum=2&timestamp=202601220053&locale=ko&svcName=map_pcv5&searchText=%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0&from=nx&fromPanelNum=2&timestamp=202601220053&locale=ko&svcName=map_pcv5&searchText=%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0&fromNxList=true&searchType=place&c=15.00,0,0,0,dh";

    return (
        <section id="program" className="py-16 md:py-20 bg-meditation-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-meditation-900 mb-10 md:mb-16 break-keep">
                    방문 상담 및 체험 프로그램
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-meditation-100 flex flex-col">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-1.5 bg-meditation-100 text-meditation-700 text-sm font-semibold rounded-full mb-4">
                                Premium
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">1:1 맞춤상담 및 체험</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                대표선생님이 직접 1:1 상담 및 명상 체험 후,<br />
                                개인에게 맞는 프로그램으로 안내드려요.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <a
                                href={consultationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 md:py-4 bg-meditation-600 text-white font-medium rounded-xl hover:bg-meditation-700 transition-colors"
                            >
                                예약하기
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-meditation-100 flex flex-col">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-1.5 bg-meditation-100 text-meditation-700 text-sm font-semibold rounded-full mb-4">
                                One Day Class
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">명상 원데이클래스</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                현존명상센터의 원데이 클래스는 명상을 처음 접하는 분부터,<br />
                                나에게 맞는 명상 수업을 경험해보고 싶은 분들을 위한 1회 체험 클래스입니다.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <a
                                href={oneDayClassUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 md:py-4 bg-white border-2 border-meditation-600 text-meditation-600 font-medium rounded-xl hover:bg-meditation-50 transition-colors"
                            >
                                예약하기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramSection;
