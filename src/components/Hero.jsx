import React from 'react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section id="home" className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Abstract calm background */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-meditation-200 blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-meditation-300 blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-meditation-900 mb-6 md:mb-8 leading-tight break-keep">
                    {t.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 md:mb-12 font-light leading-relaxed whitespace-pre-wrap">
                    {t.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="https://booking.naver.com/booking/6/bizes/1195282/items/6387204?area=ple&lang=ko&startDate=2026-01-28&theme=place"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-8 py-3 md:px-10 md:py-4 bg-meditation-700 text-white font-medium rounded-full shadow-lg hover:bg-meditation-800 transition-all hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                    >
                        {t.cta}
                    </a>
                    <Link
                        to="/corporate-education"
                        className="inline-block px-8 py-3 md:px-10 md:py-4 bg-white text-meditation-700 font-medium rounded-full shadow-lg border border-meditation-200 hover:border-meditation-300 hover:bg-meditation-50 transition-all hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                    >
                        {t.corporateBtn || "기업 교육 문의"}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
