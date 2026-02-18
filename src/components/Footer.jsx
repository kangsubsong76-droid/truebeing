import React from 'react';
import { Instagram, Youtube, Coffee, FileText, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer id="contact" className="bg-meditation-950 text-meditation-200 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">{t.title}</h3>
                        <p className="leading-relaxed opacity-80 text-sm md:text-base whitespace-pre-wrap mb-6">
                            {t.desc}
                        </p>
                        <a
                            href="/notice"
                            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-meditation-200 transition-all border-b border-white/20 pb-1 hover:border-meditation-200"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-meditation-400"></span>
                            공지사항 (Notice)
                        </a>
                        <br />
                        <a
                            href="/admin-cms"
                            className="inline-flex items-center gap-2 text-[10px] font-bold text-white/40 hover:text-emerald-500 transition-all mt-4 mb-2"
                        >
                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                            내부관리페이지
                        </a>
                    </div>
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-bold text-white mb-4 md:mb-6">{t.contactTitle}</h4>
                        <ul className="space-y-3 md:space-y-4 opacity-80 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                                <span className="mt-0.5 whitespace-pre-wrap">{t.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 shrink-0" />
                                <span>010-3188-3105</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 shrink-0" />
                                <span>truebeing-meditation@naver.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-bold text-white mb-4 md:mb-6">{t.followTitle}</h4>
                        {/* Mobile: Grid 2 cols, Desktop: Flex col */}
                        <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:space-y-4">
                            <a
                                href="https://www.instagram.com/truebeing_meditation/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition-colors opacity-80 hover:opacity-100 p-2 md:p-0 bg-meditation-900 md:bg-transparent rounded-lg md:rounded-none"
                            >
                                <Instagram className="w-5 h-5 shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm md:text-base">Instagram</span>
                                    <span className="text-xs hidden md:inline">@truebeing_meditation</span>
                                </div>
                            </a>
                            <a
                                href="https://cafe.naver.com/bhakti"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition-colors opacity-80 hover:opacity-100 p-2 md:p-0 bg-meditation-900 md:bg-transparent rounded-lg md:rounded-none"
                            >
                                <Coffee className="w-5 h-5 shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm md:text-base">Naver Cafe</span>
                                    <span className="text-xs hidden md:inline">현존명상센터 카페</span>
                                </div>
                            </a>
                            <a
                                href="https://blog.naver.com/truebeing-meditation"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition-colors opacity-80 hover:opacity-100 p-2 md:p-0 bg-meditation-900 md:bg-transparent rounded-lg md:rounded-none"
                            >
                                <FileText className="w-5 h-5 shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm md:text-base">Blog</span>
                                    <span className="text-xs hidden md:inline">네이버 블로그</span>
                                </div>
                            </a>
                            <a
                                href="https://www.youtube.com/@truebeing-meditation"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition-colors opacity-80 hover:opacity-100 p-2 md:p-0 bg-meditation-900 md:bg-transparent rounded-lg md:rounded-none"
                            >
                                <Youtube className="w-5 h-5 shrink-0" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm md:text-base">YouTube</span>
                                    <span className="text-xs hidden md:inline">현존명상센터 공식채널</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-meditation-800 pt-8 text-center text-xs md:text-sm opacity-60">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>{t.copyright}</p>
                        <p>{t.businessInfo}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
