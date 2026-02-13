import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { ChevronDown, ChevronUp, Bell } from 'lucide-react';

const NoticePage = () => {
    const { language } = useLanguage();
    const t = translations[language].notice;
    const [expandedId, setExpandedId] = useState(t.list[0]?.id || null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
            <section className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block p-3 bg-meditation-50 rounded-2xl text-meditation-600 mb-4">
                        <Bell className="w-6 h-6" />
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-meditation-950 mb-4">
                        {t.title}
                    </h1>
                    <p className="text-gray-600 text-lg">
                        {t.subtitle}
                    </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {t.list.map((item) => (
                        <div
                            key={item.id}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${expandedId === item.id
                                    ? 'border-meditation-300 shadow-md'
                                    : 'border-gray-100 hover:border-meditation-200'
                                }`}
                        >
                            <button
                                onClick={() => toggleExpand(item.id)}
                                className="w-full text-left p-6 md:p-8 flex justify-between items-center group"
                            >
                                <div className="flex-grow pr-4">
                                    <span className="text-sm font-medium text-meditation-500 mb-2 block">{item.date}</span>
                                    <h2 className={`text-lg md:text-xl font-bold transition-colors ${expandedId === item.id ? 'text-meditation-900' : 'text-gray-800'
                                        }`}>
                                        {item.title}
                                    </h2>
                                </div>
                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${expandedId === item.id ? 'bg-meditation-100 text-meditation-600' : 'bg-gray-50 text-gray-400 group-hover:bg-meditation-50'
                                    }`}>
                                    {expandedId === item.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </div>
                            </button>

                            {expandedId === item.id && (
                                <div className="px-6 md:px-8 pb-8 md:pb-10 animate-fade-in">
                                    <div className="w-full h-px bg-gray-100 mb-8"></div>
                                    <div className="prose prose-meditation max-w-none">
                                        <p className="whitespace-pre-wrap text-gray-700 leading-relaxed break-keep">
                                            {item.content}
                                        </p>
                                    </div>
                                    <div className="mt-10 flex justify-end">
                                        <div className="h-1 w-20 bg-meditation-100 rounded-full"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default NoticePage;
