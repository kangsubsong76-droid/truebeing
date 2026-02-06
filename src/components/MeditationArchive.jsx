import React from 'react';
import archiveMystery from '../assets/images/archive_mystery.png';
import archiveUniverse from '../assets/images/archive_universe.jpg';
import archiveFood from '../assets/images/archive_food.jpg';
import archiveSuffering from '../assets/images/archive_suffering.png';
import archiveSpiritual2 from '../assets/images/archive_spiritual_2.png';
import archiveLandscape from '../assets/images/archive_landscape.jpg';
import archiveRoom from '../assets/images/archive_room.jpg';
import archiveSand from '../assets/images/archive_sand.png';
import archiveTogether from '../assets/images/archive_together.png';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const MeditationArchive = () => {
    const { language } = useLanguage();
    const t = translations[language].archive;

    const archiveImages = [
        [archiveMystery, archiveUniverse, archiveFood],
        [archiveSuffering, archiveSpiritual2, archiveLandscape],
        [archiveRoom, archiveSand, archiveTogether]
    ];

    const archiveLinks = [
        [
            "https://cafe.naver.com/f-e/cafes/19337483/articles/5469?menuid=67&referrerAllArticles=false",
            "https://cafe.naver.com/f-e/cafes/19337483/articles/4988?menuid=67&referrerAllArticles=false",
            "https://cafe.naver.com/f-e/cafes/19337483/articles/4504?menuid=67&referrerAllArticles=false"
        ],
        [
            "https://cafe.naver.com/f-e/cafes/19337483/articles/5354?boardtype=L&menuid=8&referrerAllArticles=false",
            "https://cafe.naver.com/f-e/cafes/19337483/articles/4555?boardtype=L&menuid=8&referrerAllArticles=false",
            "https://cafe.naver.com/f-e/cafes/19337483/articles/4545?boardtype=L&menuid=8&referrerAllArticles=false"
        ],
        [
            "https://cafe.naver.com/f-e/cafes/19337483/articles/4565?menuid=36&referrerAllArticles=false",
            "https://cafe.naver.com/f-e/cafes/19337483/articles/4526?menuid=36&referrerAllArticles=false",
            "https://cafe.naver.com/f-e/cafes/19337483/articles/4513?menuid=36&referrerAllArticles=false"
        ]
    ];

    const sectionColors = ["text-orange-900", "text-purple-900", "text-green-900"];

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
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {t.subtitle}
                </p>
            </section>

            {/* Content Display */}
            <section className="container mx-auto px-6 max-w-6xl">
                <div className="space-y-20">
                    {t.sections.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                            <div className="mb-8 border-l-4 border-meditation-400 pl-4">
                                <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${sectionColors[sectionIdx]}`}>{section.title}</h2>
                                <p className="text-gray-500 text-sm md:text-base">{section.description}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item, itemIdx) => (
                                    <a
                                        key={itemIdx}
                                        href={archiveLinks[sectionIdx][itemIdx]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer block h-full flex flex-col"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={archiveImages[sectionIdx][itemIdx]}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-meditation-700 transition-colors line-clamp-2">{item.title}</h3>
                                            <span className="inline-block text-meditation-600 font-medium text-sm group-hover:translate-x-1 transition-transform mt-auto">
                                                {t.viewMore}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MeditationArchive;
