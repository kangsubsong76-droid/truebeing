import React from 'react';
import archiveEssay from '../assets/images/archive_essay.png';
import archiveEssay2 from '../assets/images/archive_essay_2.png';
import archiveEssay3 from '../assets/images/archive_essay_3.png';
import archiveSpiritual from '../assets/images/archive_spiritual.png';
import archiveSpiritual2 from '../assets/images/archive_spiritual_2.png';
import archiveSpiritual3 from '../assets/images/archive_spiritual_3.png';
import archiveJournal from '../assets/images/archive_journal.png';
import archiveJournal2 from '../assets/images/archive_journal_2.png';
import archiveJournal3 from '../assets/images/archive_journal_3.png';

const MeditationArchive = () => {
    const archiveSections = [
        {
            title: "유경의 사족한마디",
            description: "일상 속에서 발견하는 소소한 깨달음과 단상들",
            colorClass: "text-orange-900",
            items: [
                {
                    id: 101,
                    link: "https://cafe.naver.com/f-e/cafes/19337483/articles/5469?menuid=67&referrerAllArticles=false",
                    summary: "네이버 카페에서 원문을 확인하세요.",
                    image: archiveEssay,
                    title: "신비현상은 아무런 의미도 없다"
                },
                {
                    id: 102,
                    link: "https://cafe.naver.com/f-e/cafes/19337483/articles/4988?menuid=67&referrerAllArticles=false",
                    summary: "네이버 카페에서 원문을 확인하세요.",
                    image: archiveEssay2,
                    title: "깨어나기 위한 3가지 필수 조건"
                },
                {
                    id: 103,
                    link: "https://cafe.naver.com/f-e/cafes/19337483/articles/4504?menuid=67&referrerAllArticles=false",
                    summary: "네이버 카페에서 원문을 확인하세요.",
                    image: archiveEssay3,
                    title: "음식을 절제하지 않으면 명상 할 수 없다"
                }
            ]
        },
        {
            title: "유경의 영성칼럼",
            description: "마음의 본질과 영적 성장을 위한 깊이 있는 안내서",
            colorClass: "text-purple-900",
            items: [
                {
                    id: 201,
                    link: "https://cafe.naver.com/f-e/cafes/19337483/articles/5354?boardtype=L&menuid=8&referrerAllArticles=false",
                    summary: "네이버 카페에서 원문을 확인하세요.",
                    image: archiveSpiritual,
                    title: "힘든일에 직면했을때"
                },
                {
                    id: 202,
                    link: "https://cafe.naver.com/f-e/cafes/19337483/articles/4555?boardtype=L&menuid=8&referrerAllArticles=false",
                    summary: "네이버 카페에서 원문을 확인하세요.",
                    image: archiveSpiritual2,
                    title: "'현존에 대한 몇가지 오해'"
                },
                {
                    id: 203,
                    link: "https://cafe.naver.com/f-e/cafes/19337483/articles/4545?boardtype=L&menuid=8&referrerAllArticles=false",
                    summary: "네이버 카페에서 원문을 확인하세요.",
                    image: archiveSpiritual3,
                    title: "명상을 하면 삶이 평화로워질까?"
                }
            ]
        },
        {
            title: "유경의 수행일지",
            description: "매일의 수행 속에서 일어나는 변화와 성찰의 기록",
            colorClass: "text-green-900",
            items: [
                {
                    id: 301,
                    link: "https://cafe.naver.com/f-e/cafes/19337483/articles/4565?menuid=36&referrerAllArticles=false",
                    summary: "네이버 카페에서 원문을 확인하세요.",
                    image: archiveJournal,
                    title: "오직 본질로서 거(居)하라"
                },
                {
                    id: 302,
                    link: "https://cafe.naver.com/f-e/cafes/19337483/articles/4526?menuid=36&referrerAllArticles=false",
                    summary: "네이버 카페에서 원문을 확인하세요.",
                    image: archiveJournal2,
                    title: "명상이 무엇인가?"
                },
                {
                    id: 303,
                    link: "https://cafe.naver.com/f-e/cafes/19337483/articles/4513?menuid=36&referrerAllArticles=false",
                    summary: "네이버 카페에서 원문을 확인하세요.",
                    image: archiveJournal3,
                    title: "함께 수행해야 하는 이유"
                }
            ]
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
                    현존 유경 선생님의 영성 칼럼과 수행 기록을 만나보세요.
                </p>
            </section>

            {/* Content Display */}
            <section className="container mx-auto px-6 max-w-6xl">
                <div className="space-y-20">
                    {archiveSections.map((section, idx) => (
                        <div key={idx}>
                            <div className="mb-8 border-l-4 border-meditation-400 pl-4">
                                <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${section.colorClass}`}>{section.title}</h2>
                                <p className="text-gray-500 text-sm md:text-base">{section.description}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((col) => (
                                    <a
                                        key={col.id}
                                        href={col.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer block h-full flex flex-col"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={col.image}
                                                alt={col.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-meditation-700 transition-colors line-clamp-2">{col.title}</h3>
                                            <span className="inline-block text-meditation-600 font-medium text-sm group-hover:translate-x-1 transition-transform mt-auto">
                                                네이버 카페에서 보기 →
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
