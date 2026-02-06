import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Introduction = () => {
    const { language } = useLanguage();
    const t = translations[language].introduction;

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4 uppercase">
                    {t.label}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-meditation-950 mb-8 leading-tight break-keep">
                    {t.title}<br className="hidden md:block" />
                    <span className="text-xl md:text-3xl font-light text-meditation-800 mt-2 block">
                        {t.subtitle}
                    </span>
                </h2>
                <div className="w-16 h-1 bg-meditation-300 mx-auto mb-8 md:mb-10"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-8 md:leading-9 font-light whitespace-pre-wrap">
                    {t.desc1}
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-8 md:leading-9 font-light mt-6 whitespace-pre-wrap">
                    {t.desc2}
                </p>
            </div>
        </section>
    );
};

export default Introduction;
