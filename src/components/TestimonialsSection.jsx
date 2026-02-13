import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const TestimonialsSection = () => {
    const { language } = useLanguage();
    const t = translations[language].testimonials;

    if (!t) return null;

    return (
        <section className="py-16 md:py-24 bg-meditation-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-meditation-900 mb-4 break-keep">
                        {t.title}
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-light">
                        {t.subtitle}
                    </p>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 max-w-3xl mx-auto">
                    {t.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-white border border-meditation-200 text-meditation-800 rounded-full text-sm md:text-base font-medium shadow-sm hover:shadow-md transition-shadow cursor-default"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {t.list.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-meditation-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-meditation-100 rounded-full flex items-center justify-center text-meditation-600 font-bold text-lg mr-4">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-meditation-900">{item.author}</h3>
                                    <span className="text-xs text-meditation-400 font-medium uppercase tracking-wider">{item.date}</span>
                                </div>
                            </div>

                            <div className="relative flex-grow">
                                <svg className="absolute -top-4 -left-2 w-8 h-8 text-meditation-100 fill-current" viewBox="0 0 32 32">
                                    <path d="M10 8v8H6v8h8V8h-4zm14 0v8h-4v8h8V8h-4z" />
                                </svg>
                                <p
                                    className="text-gray-600 leading-relaxed relative z-10 break-keep testimonial-text"
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center text-meditation-300">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
