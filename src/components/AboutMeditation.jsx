import React from 'react';
import effect1 from '../assets/images/effect_1.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const AboutMeditation = () => {
    const { language } = useLanguage();
    const t = translations[language].aboutMeditation;

    return (
        <div className="pt-24 pb-20 bg-white">
            {/* Header Section */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    {t.label}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-meditation-950 mb-8 break-keep">
                    {t.title}
                </h1>
                <div className="w-20 h-1 bg-meditation-300 mx-auto"></div>
            </section>

            {/* Content Section 1: The Nature of Mind */}
            <section className="container mx-auto px-6 max-w-4xl mb-24">
                <div className="bg-meditation-50 rounded-3xl p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-meditation-900 mb-6 break-keep">
                        {t.section1.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed font-light mb-6 break-keep">
                        {t.section1.desc1}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed font-light break-keep">
                        {t.section1.desc2}
                    </p>
                </div>
            </section>

            {/* Content Section 2: Time and Presence */}
            <section className="container mx-auto px-6 max-w-4xl mb-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-80">
                        <img
                            src={effect1}
                            alt="Meditation Moment"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold text-meditation-900 mb-6 break-keep">
                            {t.section2.title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed font-light mb-6 break-keep">
                            {t.section2.desc1}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed font-light break-keep">
                            {t.section2.desc2}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section 3: Samatha Meditation */}
            <section className="bg-meditation-950 text-white py-24 rounded-3xl container mx-auto px-6 max-w-6xl text-center mb-24 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-meditation-500 rounded-full mix-blend-screen filter blur-[100px]"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px]"></div>
                </div>

                <div className="relative z-10">
                    <span className="text-meditation-300 font-medium tracking-[0.2em] text-sm uppercase mb-3 block">{t.section3.label}</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">{t.section3.title}</h2>
                    <p className="text-xl md:text-2xl text-meditation-100/80 mb-16 font-light">{t.section3.subtitle}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
                        {t.section3.cards.map((card, index) => {
                            const colors = [
                                { border: 'border-blue-200/10', hoverBorder: 'hover:border-blue-300/30', bg: 'from-blue-500/10 to-transparent', hoverBg: 'hover:from-blue-500/20', textNum: 'text-blue-300/10', sub: 'text-blue-300', accent: 'border-blue-400', shadow: 'hover:shadow-blue-900/20' },
                                { border: 'border-purple-200/10', hoverBorder: 'hover:border-purple-300/30', bg: 'from-purple-500/10 to-transparent', hoverBg: 'hover:from-purple-500/20', textNum: 'text-purple-300/10', sub: 'text-purple-300', accent: 'border-purple-400', shadow: 'hover:shadow-purple-900/20' },
                                { border: 'border-emerald-200/10', hoverBorder: 'hover:border-emerald-300/30', bg: 'from-emerald-500/10 to-transparent', hoverBg: 'hover:from-emerald-500/20', textNum: 'text-emerald-300/10', sub: 'text-emerald-300', accent: 'border-emerald-400', shadow: 'hover:shadow-emerald-900/20' }
                            ][index];

                            return (
                                <div key={index} className={`group bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} p-8 md:p-10 rounded-3xl transition-all duration-500 ${colors.hoverBg} ${colors.hoverBorder} hover:-translate-y-2 hover:shadow-2xl ${colors.shadow}`}>
                                    <div className="flex flex-col h-full">
                                        <div className="mb-6 relative">
                                            <span className={`text-6xl md:text-7xl font-serif ${colors.textNum} font-bold absolute top-6 right-0 transition-colors`}>{card.num}</span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 relative z-10">{card.title}</h3>
                                            <span className={`text-sm ${colors.sub} tracking-wider uppercase font-medium relative z-10`}>{card.sub}</span>
                                        </div>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-white/40 to-transparent mb-6 group-hover:w-24 transition-all duration-500"></div>
                                        <div className="text-gray-300 leading-relaxed break-keep font-light text-base md:text-lg">
                                            <p className={`text-white font-bold mb-3 text-lg border-l-2 ${colors.accent} pl-4 py-1 bg-white/5 rounded-r-lg`}>
                                                {card.quote}
                                            </p>
                                            <p>{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Content Section 4: Process of Awakening (Flowering of Consciousness) */}
            <section className="relative py-24 bg-gradient-to-b from-white to-meditation-50 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-meditation-100/40 rounded-full blur-[120px] -z-10"></div>

                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-24 relative">
                        <span className="text-meditation-600 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">{t.section4.label}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-meditation-950 mb-6 font-serif">{t.section4.title}</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                            {t.section4.subtitle}
                        </p>
                    </div>

                    <div className="relative">
                        {/* Central Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-meditation-300 to-transparent md:-translate-x-px h-full"></div>

                        {t.section4.steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            const styles = [
                                { numColor: 'text-slate-400 group-hover:text-slate-600', border: 'border-slate-100', hoverBorder: 'group-hover:border-slate-200', textTitle: 'text-slate-800', badge: 'bg-slate-100 text-slate-600', bar: 'bg-slate-300', boxBorder: 'border-slate-100', hoverBoxBorder: 'group-hover:border-slate-200' },
                                { numColor: 'text-indigo-400 group-hover:text-indigo-600', border: 'border-indigo-100', hoverBorder: 'group-hover:border-indigo-200', textTitle: 'text-indigo-900', badge: 'bg-indigo-50 text-indigo-600', bar: 'bg-indigo-400', boxBorder: 'border-indigo-50', hoverBoxBorder: 'group-hover:border-indigo-100' },
                                { numColor: 'text-amber-400 group-hover:text-amber-600', border: 'border-amber-100', hoverBorder: 'group-hover:border-amber-200', textTitle: 'text-amber-900', badge: 'bg-amber-50 text-amber-600', bar: 'bg-amber-400', boxBorder: 'border-amber-100', hoverBoxBorder: 'group-hover:border-amber-200' }
                            ][index];

                            return (
                                <div key={index} className={`relative flex flex-col ${index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between mb-24 last:mb-0 group`}>
                                    {/* Icon/Marker */}
                                    <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 ${styles.border} shadow-xl flex items-center justify-center z-10 group-hover:scale-110 ${styles.hoverBorder} transition-all duration-500`}>
                                        <span className={`text-2xl font-serif font-bold ${styles.numColor} transition-colors`}>{step.num}</span>
                                    </div>

                                    {/* Content Side */}
                                    <div className={`ml-24 md:ml-0 md:w-[45%] ${index === 1 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                                        <span className={`inline-block px-3 py-1 ${styles.badge} rounded-full text-xs font-bold mb-3`}>{step.step}</span>
                                        <h3 className={`text-2xl md:text-3xl font-bold ${styles.textTitle} mb-2 font-serif transition-colors`}>{step.title} <span className="text-lg font-sans font-normal opacity-60 ml-1">{step.subTitle}</span></h3>
                                        <p className="opacity-70 text-sm font-semibold tracking-wide uppercase mb-4">{step.descTitle}</p>
                                    </div>

                                    {/* Description Box Side */}
                                    <div className={`ml-24 md:ml-0 md:w-[45%] ${index === 1 ? 'md:pr-12' : 'md:pl-12'} mt-6 md:mt-0`}>
                                        <div className={`bg-white p-8 rounded-3xl shadow-sm border ${styles.boxBorder} hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden ${styles.hoverBoxBorder}`}>
                                            <div className={`absolute top-0 left-0 w-1 h-full ${styles.bar}`}></div>
                                            <p className={`text-gray-600 font-light leading-relaxed break-keep ${index === 1 ? 'text-right md:text-left' : ''}`}>
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMeditation;
