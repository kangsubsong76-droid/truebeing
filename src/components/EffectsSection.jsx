import React from 'react';

import effect1 from '../assets/images/effect_1.jpg';
import effect2 from '../assets/images/effect_1_new.png';
import effect3 from '../assets/images/effect_relations_v2.png';
import effect4 from '../assets/images/effect_insomnia_new.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const EffectsSection = () => {
    const { language } = useLanguage();
    const t = translations[language].effects;

    // Use translated items but map them to images by index
    const images = [effect1, effect2, effect3, effect4];

    // Create effects array by merging translation data with images
    const effects = t.items.map((item, index) => ({
        ...item,
        image: images[index]
    }));

    return (
        <section id="about" className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-meditation-900 mb-10 md:mb-16 break-keep">
                    {t.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {effects.map((effect, index) => (
                        <div key={index} className="group rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-56 md:h-64 overflow-hidden bg-meditation-100 relative">
                                {/* Placeholder for image if not yet generated */}
                                <img
                                    src={effect.image}
                                    alt={effect.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    style={{ filter: index === 1 ? 'brightness(1.2)' : 'none' }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://placehold.co/400x600/top'; // Fallback
                                        e.target.style.display = 'none'; // Hide broken image if fallback fails or just show div
                                        e.target.nextSibling.style.display = 'flex'; // Show placeholder div
                                    }}
                                />
                                <div className="absolute inset-0 bg-meditation-200 flex items-center justify-center text-meditation-400" style={{ display: 'none' }}>
                                    Image Loading...
                                </div>
                            </div>
                            <div className="p-5 md:p-6 bg-white border border-meditation-100 rounded-b-2xl">
                                <h3 className="text-lg md:text-xl font-bold text-meditation-800 mb-2 md:mb-3">{effect.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                                    {effect.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EffectsSection;
