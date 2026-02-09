import React from 'react';
import gallery3 from '../assets/images/gallery_3.jpg';
import gallery2 from '../assets/images/gallery_2.png';
import instructorYookyungTop from '../assets/images/instructor_yookyung_top.png';
import instructorYookyungBottom from '../assets/images/instructor_yookyung_bottom.png';
import instructorSuriV4 from '../assets/images/instructor_suri_v4.png';
import instructorZeroV2 from '../assets/images/instructor_zero_v2.png';
import instructorHeogong from '../assets/images/instructor_heogong.png';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const CenterIntro = () => {
    const { language } = useLanguage();
    const t = translations[language].centerIntro;

    return (
        <div className="pt-32 md:pt-40 pb-12 md:pb-20 bg-white">
            {/* Header */}
            <section className="container mx-auto px-6 mb-12 md:mb-20 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    {t.label}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-meditation-950 mb-6 md:mb-8 break-keep">
                    {t.title}
                </h1>
                <div className="w-20 h-1 bg-meditation-300 mx-auto"></div>
            </section>

            {/* Philosophy Section */}
            <section className="container mx-auto px-6 max-w-4xl mb-20 md:mb-32">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-meditation-900 mb-4 md:mb-6 leading-tight break-keep whitespace-pre-wrap">
                        {t.philosophy.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light whitespace-pre-wrap">
                        {t.philosophy.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {t.philosophy.items.map((item, idx) => (
                        <div key={idx} className="bg-meditation-50 p-6 md:p-8 rounded-3xl text-center hover:shadow-lg transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-meditation-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl">{item.icon}</div>
                            <h3 className="font-bold text-lg md:text-xl text-meditation-900 mb-3 md:mb-4 break-keep">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed break-keep">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Founder Profile */}
            <section className="bg-meditation-900 text-white py-16 md:py-24 mb-20 md:mb-32">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="w-full md:w-1/3 max-w-sm flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden bg-gray-800 shadow-xl border-4 border-meditation-800">
                                <img
                                    src={instructorYookyungTop}
                                    alt="현존 유경 대표 수업"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden bg-gray-800 shadow-xl border-4 border-meditation-800">
                                <img
                                    src={instructorYookyungBottom}
                                    alt="현존 유경 대표 미소"
                                    className="w-full h-full object-cover opacity-90"
                                    style={{ filter: 'brightness(1.2)' }}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <span className="inline-block px-3 py-1 bg-meditation-700 text-meditation-100 text-xs font-bold rounded-full mb-4">{t.founder.badge}</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2 break-keep">{t.founder.name}</h2>
                            <p className="text-meditation-300 text-base md:text-lg mb-6 md:mb-8">{t.founder.title}</p>

                            <blockquote className="border-l-4 border-meditation-500 pl-4 md:pl-6 italic text-gray-300 mb-6 md:mb-8 leading-relaxed text-base md:text-lg text-left whitespace-pre-wrap">
                                {t.founder.quote}
                            </blockquote>

                            <p className="text-gray-300 leading-relaxed mb-6 font-light text-left break-keep">
                                {t.founder.desc}
                            </p>
                            <ul className="space-y-2 text-sm text-meditation-200 text-left">
                                {t.founder.careers.map((career, idx) => (
                                    <li key={idx}>• {career}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructors */}
            <section className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-meditation-900 mb-10 md:mb-16 break-keep">{t.instructors.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {/* Instructor 1: Suri */}
                    {t.instructors.list.map((instructor, idx) => {
                        const images = [instructorSuriV4, instructorHeogong, instructorZeroV2];
                        const imageStyles = [
                            { filter: 'brightness(1.2) contrast(1.05)', transform: 'scale(1.1)' },
                            {},
                            { filter: 'brightness(0.9)', transform: 'scale(1.05)' }
                        ];

                        return (
                            <div key={idx} className="text-center group">
                                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:border-meditation-200 transition-all">
                                    <img
                                        src={images[idx]}
                                        alt={instructor.name}
                                        className="w-full h-full object-cover"
                                        style={imageStyles[idx]}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                                <p className="text-meditation-600 text-sm font-medium mb-4">{t.instructors.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed px-4 break-keep">
                                    {instructor.quote}<br />
                                    {instructor.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default CenterIntro;
