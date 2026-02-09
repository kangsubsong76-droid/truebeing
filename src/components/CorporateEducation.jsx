import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Mail, Phone, ExternalLink } from 'lucide-react';
// Images
// Images
import roadmapImg from '../assets/기업/로드맵.png';
import asanaRoadmapImg from '../assets/기업/아사나코스.jpg';
import necessityStats from '../assets/기업/명상의 필요성.png';
import necessityDiagram from '../assets/기업/기대효과.png';

// Case Study Images (from src/assets/기업/)
import anyang1 from '../assets/기업/안양과천1.png';
import anyang2 from '../assets/기업/안양과천2.jpg';
import anyang3 from '../assets/기업/안양과천3.jpg';

import kookmin1 from '../assets/기업/국민대1.JPG';
import kookmin2 from '../assets/기업/국민대2.JPG';
import kookmin3 from '../assets/기업/국민대3.JPG';
import kookmin4 from '../assets/기업/국민대4.JPG';

import hyecho1 from '../assets/기업/혜초1.png';
import hyecho2 from '../assets/기업/혜초2.png';

const CorporateEducation = () => {
    const { language } = useLanguage();
    // Safely access the corporate data, easing development if keys are missing during hot-reload
    const t = translations[language]?.corporate || {};

    const casesImages = {
        "anyang_1": anyang1,
        "anyang_2": anyang2,
        "anyang_3": anyang3,
        "kookmin_1": kookmin1,
        "kookmin_2": kookmin2,
        "kookmin_3": kookmin3,
        "kookmin_4": kookmin4,
        "hyecho_1": hyecho1,
        "hyecho_2": hyecho2
    };

    return (
        <div className="pt-32 md:pt-40 pb-20 bg-white">
            {/* 1. Header & Intro */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    {t.label}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-meditation-950 mb-8 break-keep">
                    {t.title}
                </h1>

                <div className="w-20 h-1 bg-meditation-300 mx-auto mt-10"></div>
            </section>

            {/* 2. Necessity & Effects Section */}
            <section className="container mx-auto px-6 max-w-6xl mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-meditation-900 mb-8">
                        {t.necessity?.title}
                    </h2>
                    <p className="text-lg text-gray-700 whitespace-pre-wrap leading-relaxed break-keep max-w-4xl mx-auto">
                        {t.necessity?.desc}
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Part 1: Why it's needed (Stats/Burnout) */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl md:text-2xl font-bold text-meditation-800 mb-6 uppercase tracking-wide">
                            명상의 필요성
                        </h3>
                        {/* Mobile Swipe Hint */}
                        <p className="text-sm text-meditation-500 mb-2 md:hidden">← 좌우로 밀어서 보세요 →</p>
                        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-x-auto overflow-y-hidden p-2 scrollbar-thin scrollbar-thumb-meditation-200">
                            <img
                                src={necessityStats}
                                alt="명상의 필요성"
                                className="min-w-[600px] md:min-w-0 w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Part 2: Expected Effects (Triangle) */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl md:text-2xl font-bold text-meditation-800 mb-6 uppercase tracking-wide">
                            기대효과
                        </h3>
                        {/* Mobile Swipe Hint */}
                        <p className="text-sm text-meditation-500 mb-2 md:hidden">← 좌우로 밀어서 보세요 →</p>
                        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-x-auto overflow-y-hidden p-2 scrollbar-thin scrollbar-thumb-meditation-200">
                            <img
                                src={necessityDiagram}
                                alt="기대효과"
                                className="min-w-[600px] md:min-w-0 w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Meditation Roadmap Section */}
            <section className="bg-gray-50 py-20 mb-20">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-meditation-900 mb-4">
                        {t.roadmap?.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{t.roadmap?.desc}</p>
                    {/* Mobile Swipe Hint */}
                    <p className="text-sm text-meditation-500 mb-4 md:hidden">← 좌우로 밀어서 보세요 →</p>
                    <div className="bg-white rounded-2xl shadow-lg p-2 md:p-8 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-meditation-200">
                        <img
                            src={roadmapImg}
                            alt="Meditation Roadmap"
                            className="min-w-[700px] md:min-w-0 w-full h-auto object-contain max-h-[800px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* 4. Cases Section */}
            <section className="bg-meditation-950/5 py-20 mb-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-meditation-900 mb-16 text-center">
                        {t.cases?.title}
                    </h2>
                    <div className="flex flex-col gap-24">
                        {t.cases?.list?.map((item, idx) => (
                            <div key={idx} className="w-full">
                                <h3 className="text-2xl font-bold text-meditation-800 mb-8 text-center md:text-left border-l-4 border-meditation-500 pl-4">
                                    {item.title}
                                </h3>
                                {/* Conditional Layout for Anyang Case */}
                                {item.title.includes("안양과천") || item.title.includes("Anyang") ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:min-h-[600px]">
                                        {/* Left: Large Full Shot Image */}
                                        <div className="w-full h-[400px] md:h-full rounded-xl overflow-hidden shadow-md">
                                            <img
                                                src={casesImages[item.imgs[0]] || roadmapImg}
                                                alt={`${item.title} 1`}
                                                className="w-full h-full object-cover object-center scale-[1.25] hover:scale-[1.3] transition-transform duration-500 brightness-110 contrast-105"
                                            />
                                        </div>
                                        {/* Right: Two Stacked Wide Images */}
                                        <div className="flex flex-col gap-4 h-[400px] md:h-full">
                                            <div className="w-full h-1/2 rounded-xl overflow-hidden shadow-md">
                                                <img
                                                    src={casesImages[item.imgs[1]] || roadmapImg}
                                                    alt={`${item.title} 2`}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-110 contrast-105"
                                                />
                                            </div>
                                            <div className="w-full h-1/2 rounded-xl overflow-hidden shadow-md">
                                                <img
                                                    src={casesImages[item.imgs[2]] || roadmapImg}
                                                    alt={`${item.title} 3`}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-110 contrast-105"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {item.imgs?.map((imgKey, imgIdx) => (
                                            <div key={imgIdx} className="overflow-hidden rounded-xl shadow-md h-64 md:h-80 bg-gray-200">
                                                <img
                                                    src={casesImages[imgKey] || roadmapImg}
                                                    alt={`${item.title} ${imgIdx + 1}`}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-110 contrast-105"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Press Section */}
            <section className="container mx-auto px-6 max-w-4xl mb-24">
                <h2 className="text-3xl font-bold text-meditation-900 mb-10 text-center">
                    {t.press?.title}
                </h2>
                <div className="space-y-4">
                    {t.press?.list?.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-meditation-300 transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <ExternalLink className="w-5 h-5 text-meditation-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-lg text-gray-800 font-medium group-hover:text-meditation-700 break-keep">
                                    {item.title}
                                </span>
                            </div>
                            <p className="text-sm text-gray-400 mt-2 pl-9 break-all">
                                {item.url}
                            </p>
                        </a>
                    ))}
                </div>
            </section>

            {/* 6. Process Section */}
            <section className="bg-meditation-50 py-20 mb-20">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-meditation-900 mb-16">
                        {t.process?.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.process?.steps?.map((step, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-meditation-200"></div>
                                <h3 className="text-xl font-bold text-meditation-800 mb-6 font-serif">
                                    {step.num}
                                </h3>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap break-keep text-sm md:text-base">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Contact Section */}
            <section className="container mx-auto px-6 mb-20">
                <div className="bg-meditation-900 text-white rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
                    <h2 className="text-3xl font-bold mb-8">{t.contact?.title}</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-center">
                        <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-full hover:bg-white/20 transition-colors">
                            <Phone className="w-6 h-6 text-meditation-200" />
                            <div className="flex flex-col items-start">
                                <span className="text-xs text-meditation-200 uppercase tracking-widest font-semibold mb-1">
                                    {language === 'ko' ? '전화 상담' : 'Inquiry'}
                                </span>
                                <span className="text-xl font-bold tracking-wide">{t.contact?.tel}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-full hover:bg-white/20 transition-colors">
                            <Mail className="w-6 h-6 text-meditation-200" />
                            <div className="flex flex-col items-start">
                                <span className="text-xs text-meditation-200 uppercase tracking-widest font-semibold mb-1">
                                    Email
                                </span>
                                <span className="text-base md:text-xl font-medium tracking-wide">{t.contact?.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CorporateEducation;
