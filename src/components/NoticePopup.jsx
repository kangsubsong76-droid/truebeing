import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { X, ExternalLink, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const NoticePopup = () => {
    const { language } = useLanguage();
    const t = translations[language].popup;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const lastClosed = localStorage.getItem('notice_popup_closed');
        const today = new Date().toDateString();

        if (lastClosed !== today) {
            // Delay showing the popup for a smoother entrance
            const timer = setTimeout(() => setIsOpen(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = (stopShowingToday = false) => {
        if (stopShowingToday) {
            localStorage.setItem('notice_popup_closed', new Date().toDateString());
        }
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-slide-up">
                {/* Header with gradient */}
                <div className="bg-gradient-to-br from-meditation-900 to-meditation-800 p-8 text-white relative">
                    <button
                        onClick={() => closePopup()}
                        className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-2xl mb-6">
                        <Bell className="w-6 h-6 text-meditation-100" />
                    </div>

                    <h2 className="text-2xl font-bold mb-2 break-keep">{t.title}</h2>
                    <p className="text-meditation-200 text-sm font-medium tracking-wide">{t.date}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="bg-meditation-50 p-6 rounded-2xl mb-8 border border-meditation-100">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-[0.95rem] break-keep">
                            {t.content}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Link
                            to="/notice"
                            onClick={() => closePopup()}
                            className="flex items-center justify-center gap-2 w-full py-4 bg-meditation-600 hover:bg-meditation-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-meditation-200"
                        >
                            {t.linkMsg}
                            <ExternalLink className="w-4 h-4" />
                        </Link>

                        <div className="flex justify-center mt-2">
                            <button
                                onClick={() => closePopup(true)}
                                className="text-sm text-gray-400 hover:text-meditation-600 transition-colors py-2 px-4 underline underline-offset-4 decoration-gray-200"
                            >
                                {t.closeMsg}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticePopup;
