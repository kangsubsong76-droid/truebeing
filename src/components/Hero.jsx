import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center bg-meditation-50 overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Abstract calm background */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-meditation-200 blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-meditation-300 blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-meditation-900 mb-6 md:mb-8 leading-tight break-keep">
                    지금 이 순간,<br />
                    당신의 참된 평화와 만나는 곳
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 md:mb-12 font-light leading-relaxed">
                    성북동의 고요하고 아늑한 명상공간에서 마주하는 진정한 안식.<br className="hidden md:block" />
                    복잡한 일상을 잠시 내려놓고, 온전한 나를 만나보세요.
                </p>
                <a
                    href="https://map.naver.com/p/search/%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0/place/1422222547?placePath=/ticket?entry=pll&from=map&fromPanelNum=2&timestamp=202601220053&locale=ko&svcName=map_pcv5&searchText=%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0&from=nx&fromPanelNum=2&timestamp=202601220053&locale=ko&svcName=map_pcv5&searchText=%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0&fromNxList=true&searchType=place&c=15.00,0,0,0,dh"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-8 py-3 md:px-10 md:py-4 bg-meditation-700 text-white font-medium rounded-full shadow-lg hover:bg-meditation-800 transition-all hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                >
                    방문상담 예약하기
                </a>
            </div>
        </section>
    );
};

export default Hero;
