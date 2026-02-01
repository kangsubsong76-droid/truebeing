import React from 'react';

import effect1 from '../assets/images/effect_1.jpg';
import effect2 from '../assets/images/effect_1_new.png';
import effect3 from '../assets/images/effect_relations_new.jpg';
import effect4 from '../assets/images/effect_insomnia_new.jpg';

const effects = [
    {
        title: '심신의 안정과 치유',
        description: '스트레스로 지친 마음을 달래고 깊은 내면의 평화를 되찾습니다.',
        image: effect1,
    },
    {
        title: '신체능력 향상',
        description: '바른 자세와 호흡을 통해 신체의 균형을 잡고 활력을 불어넣습니다.',
        image: effect2,
    },
    {
        title: '인간관계 개선',
        description: '자신을 이해하고 타인을 포용하는 마음을 길러 관계를 회복합니다.',
        image: effect3,
    },
    {
        title: '불면증 해소',
        description: '잡념을 비우고 이완된 상태로 이끌어 편안한 숙면을 도와줍니다.',
        image: effect4,
    },
];

const EffectsSection = () => {
    return (
        <section id="about" className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-meditation-900 mb-10 md:mb-16 break-keep">
                    명상의 효과
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
                                    style={{ filter: effect.title === '신체능력 향상' ? 'brightness(1.2)' : 'none' }}
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
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {effect.description}
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
