import React, { useState } from 'react';
import archiveCol1 from '../assets/images/archive_col_1.png';
import archiveCol2 from '../assets/images/archive_col_2.png';
import archiveCol3 from '../assets/images/archive_col_3.png';
import archiveCol4 from '../assets/images/archive_col_4.png';

const MeditationArchive = () => {
    const [activeTab, setActiveTab] = useState('columns');

    const columns = [
        {
            id: 1,
            title: "마음의 실체를 본다는 것",
            category: "영성 칼럼",
            date: "2024.01.15",
            summary: "우리가 느끼는 감정은 실재하는가, 아니면 뇌가 만들어낸 신호인가? 마음의 본질을 꿰뚫어 볼 때 비로소 자유가 시작됩니다.",
            summary: "우리가 느끼는 감정은 실재하는가, 아니면 뇌가 만들어낸 신호인가? 마음의 본질을 꿰뚫어 볼 때 비로소 자유가 시작됩니다.",
            image: archiveCol1
        },
        {
            id: 2,
            title: "시간이 사라진 자리, 현존",
            category: "사족 한마디",
            date: "2023.12.20",
            summary: "과거도 미래도 없는 오직 지금 이 순간. 찰나의 기쁨 속에서 만나는 진정한 나 자신에 대한 이야기.",
            summary: "과거도 미래도 없는 오직 지금 이 순간. 찰나의 기쁨 속에서 만나는 진정한 나 자신에 대한 이야기.",
            image: archiveCol2
        },
        {
            id: 3,
            title: "고통은 어디에서 오는가",
            category: "수행 일지",
            date: "2023.11.05",
            summary: "육체적 통증과 심리적 고통의 상관관계를 탐구하며, 명상을 통해 이를 치유해 나가는 과정을 기록합니다.",
            summary: "육체적 통증과 심리적 고통의 상관관계를 탐구하며, 명상을 통해 이를 치유해 나가는 과정을 기록합니다.",
            image: archiveCol3
        },
        {
            id: 4,
            title: "진정한 침묵의 의미",
            category: "영성 칼럼",
            date: "2023.10.12",
            summary: "소리가 없는 것이 침묵이 아닙니다. 내면의 소란스러움이 잠재워진 상태, 그 절대적인 고요함에 대하여.",
            summary: "소리가 없는 것이 침묵이 아닙니다. 내면의 소란스러움이 잠재워진 상태, 그 절대적인 고요함에 대하여.",
            image: archiveCol4
        }
    ];

    const videos = [
        {
            id: 1,
            title: "현존명상센터 공식 소개 영상",
            videoId: "2557SzvTZJM"
        },
        {
            id: 2,
            title: "사마타 명상이란 무엇인가?",
            videoId: "VIDEO_ID_PLACEHOLDER_1" // Placeholder IDs since real ones weren't found
        },
        {
            id: 3,
            title: "초보자를 위한 호흡법 가이드",
            videoId: "VIDEO_ID_PLACEHOLDER_2"
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-white">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    ARCHIVE
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-meditation-950 mb-8">
                    명상 아카이브
                </h1>
                <div className="w-20 h-1 bg-meditation-300 mx-auto mb-10"></div>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    현존 유경 선생님의 영성 칼럼과 수행 기록,<br />
                    그리고 명상의 깊이를 더해줄 영상 자료들을 만나보세요.
                </p>
            </section>

            {/* Tab Navigation */}
            <div className="container mx-auto px-6 mb-12">
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => setActiveTab('columns')}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'columns' ? 'bg-meditation-600 text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                        칼럼 & 에세이
                    </button>
                    <button
                        onClick={() => setActiveTab('videos')}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'videos' ? 'bg-meditation-600 text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                        동영상 강의
                    </button>
                </div>
            </div>

            {/* Content Display */}
            <section className="container mx-auto px-6 max-w-6xl">
                {activeTab === 'columns' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {columns.map((col) => (
                            <div key={col.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={col.image}
                                        alt={col.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-meditation-600 text-xs font-bold uppercase tracking-wider bg-meditation-50 px-3 py-1 rounded-full">{col.category}</span>
                                        <span className="text-gray-400 text-sm">{col.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-meditation-700 transition-colors">{col.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm mb-6 line-clamp-2">
                                        {col.summary}
                                    </p>
                                    <span className="inline-block text-meditation-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                        자세히 보기 →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {videos.map((vid) => (
                            <div key={vid.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                <div className="aspect-video bg-gray-900 relative">
                                    {/* Placeholder Video Embed Logic */}
                                    {vid.videoId === "2557SzvTZJM" ? (
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${vid.videoId}`}
                                            title={vid.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center flex-col text-gray-500">
                                            <div className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center mb-2">▶</div>
                                            <span>Video Coming Soon</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">{vid.title}</h3>
                                    <p className="text-sm text-gray-500">현존명상센터 공식 강의 자료입니다.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default MeditationArchive;
