import React from 'react';
import { MapPin, Phone, Clock, Car, Bus } from 'lucide-react';
import mapLocation from '../assets/images/map_location.png';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const ContactPage = () => {
    const { language } = useLanguage();
    const t = translations[language].contactPage;

    return (
        <div className="pt-24 pb-20 bg-white">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    {t.label}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-meditation-950 mb-8 break-keep">
                    {t.title}
                </h1>
                <div className="w-20 h-1 bg-meditation-300 mx-auto mb-10"></div>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed whitespace-pre-wrap">
                    {t.subtitle}
                </p>
            </section>

            {/* Main Content Info */}
            <section className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left: Map & Address */}
                    <div className="lg:w-1/2">
                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-3xl h-96 mb-8 overflow-hidden shadow-lg relative group">
                            {/* In a real app, this would be a Kakao/Naver Map Embed */}
                            <img
                                src={mapLocation}
                                alt="Location Map"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                                <a
                                    href="http://map.naver.com/p/search/%ED%98%84%EC%A1%B4%EB%AA%85%EC%83%81%EC%84%BC%ED%84%B0/place/1422222547?placePath=%3Fentry%3Dpll&from=nx&fromNxList=true&searchType=place&c=15.00%2C0%2C0%2C0%2Cdh"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-white text-meditation-900 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-meditation-600 hover:text-white transition-all transform hover:-translate-y-1 flex items-center gap-2"
                                >
                                    <MapPin size={18} />
                                    {t.mapBtn}
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-meditation-50 rounded-full flex items-center justify-center text-meditation-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">{t.address.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t.address.content}<br />
                                        <span className="text-sm text-gray-500">{t.address.sub}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-meditation-50 rounded-full flex items-center justify-center text-meditation-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">{t.phone.title}</h3>
                                    <p className="text-gray-600">{t.phone.content}</p>
                                    <p className="text-sm text-gray-400 mt-1 whitespace-pre-wrap">
                                        {t.phone.notice}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Transport Info */}
                    <div className="lg:w-1/2 space-y-10">
                        {/* Public Transport */}
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Bus size={28} className="text-meditation-600" />
                                <h3 className="text-2xl font-bold text-meditation-900">{t.transport.title}</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-meditation-500 rounded-full"></span>
                                        {t.transport.subway}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed pl-4 text-sm whitespace-pre-wrap">
                                        {t.transport.desc}
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl shadow-sm">
                                    <div className="mb-3">
                                        <span className="text-green-600 font-bold text-sm bg-green-100 px-2 py-0.5 rounded mr-2">{t.transport.greenBus}</span>
                                        <span className="font-medium text-gray-700">1111, 1112, 2112</span>
                                    </div>
                                    <div>
                                        <span className="text-green-600 font-bold text-sm bg-green-100 px-2 py-0.5 rounded mr-2">{t.transport.villageBus}</span>
                                        <span className="font-medium text-gray-700">성북 03, 성북 02</span>
                                    </div>
                                </div>

                                <div className="pl-4 border-l-2 border-meditation-200">
                                    <p className="text-sm text-gray-600 whitespace-pre-wrap">
                                        {t.transport.busStop}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Parking Info */}
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Car size={28} className="text-meditation-600" />
                                <h3 className="text-2xl font-bold text-meditation-900">{t.parking.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap">
                                {t.parking.desc}
                            </p>
                            <div className="bg-white p-4 rounded-xl border border-meditation-100 text-sm text-meditation-700 font-medium text-center whitespace-pre-wrap">
                                {t.parking.notice}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
