import React from 'react';

const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    TRUEBEING
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-meditation-950 mb-8 leading-tight break-keep">
                    현존(現存)<br className="hidden md:block" />{/* Mobile: straight text, Desktop: break */}
                    <span className="text-xl md:text-3xl font-light text-meditation-800 mt-2 block">
                        마음이 사라진 찰나
                    </span>
                </h2>
                <div className="w-16 h-1 bg-meditation-300 mx-auto mb-8 md:mb-10"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-8 md:leading-9 font-light">
                    현존명상센터는 <strong>마음의 실체를 통찰하고</strong> 마음으로부터<br className="hidden md:block" />
                    완전히 벗어나는 정통 <strong>사마타 명상 (Samatha)</strong>을 지향합니다.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-8 md:leading-9 font-light mt-6">
                    과거와 미래라는 시간의 흐름이 사라진 <strong>'지금 이 순간'</strong>.<br className="hidden md:block" />
                    그 고요하고 선명한 알아차림(Sati) 속에서<br className="hidden md:block" />
                    우리는 비로소 <strong>참된 나(Truebeing)</strong>와 만납니다.
                </p>
            </div>
        </section>
    );
};

export default Introduction;
