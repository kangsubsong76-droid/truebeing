import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const VideoSection = () => {
    const { language } = useLanguage();
    const t = translations[language].video;

    return (
        <section id="center" className="py-20 bg-meditation-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t.title}
                </h2>
                <p className="text-meditation-200 mb-12 max-w-2xl mx-auto break-keep whitespace-pre-wrap">
                    {t.desc}
                </p>

                <div className="max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-meditation-700">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/2557SzvTZJM?rel=0&modestbranding=1"
                        title="Meditation Center Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
