import React, { useEffect } from 'react';
import gallery1 from '../assets/images/gallery_1.png';
import gallery5 from '../assets/images/gallery_5.png';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const ClassDetail = () => {
    const { pathname } = useLocation();
    const { language } = useLanguage();
    const t = translations[language].classDetail;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="pt-24 pb-20 bg-white">
            {/* Header */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    {t.label}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-meditation-950 mb-8 break-keep">
                    {t.title}
                </h1>
                <div className="w-20 h-1 bg-meditation-300 mx-auto"></div>
            </section>

            {/* Program 1: Small Group */}
            <section className="container mx-auto px-6 max-w-5xl mb-24">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                            {/* Placeholder for class image */}
                            <img
                                src={gallery1}
                                alt="Small Group Class"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-meditation-100 text-meditation-700 text-xs font-bold rounded-full">{t.class1.tags[0]}</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">{t.class1.tags[1]}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-meditation-900 mb-6">{t.class1.title}</h2>
                        <p className="text-gray-700 leading-relaxed mb-6 break-keep whitespace-pre-wrap">
                            {t.class1.desc}
                        </p>

                        <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 text-meditation-800">{t.class1.structureTitle}</h3>
                            <ul className="space-y-3 text-gray-700">
                                {t.class1.structure.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-meditation-500 rounded-full mt-2 shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {t.class1.notes.map((note, idx) => (
                            <p key={idx} className="text-sm text-gray-500 mb-2">{note}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program 2: 1:1 Private */}
            <section className="bg-meditation-50 py-20 mb-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="max-w-4xl mx-auto">
                        <div className="w-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-meditation-600 text-white text-xs font-bold rounded-full">{t.class2.tags[0]}</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-bold rounded-full">{t.class2.tags[1]}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-meditation-900 mb-6">{t.class2.title}</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 break-keep whitespace-pre-wrap">
                                {t.class2.desc}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {t.class2.checks.map((check, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-meditation-200 flex items-center justify-center text-meditation-700 text-sm">✓</div>
                                        <span>{check}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program 3: Leader Course */}
            <section className="container mx-auto px-6 max-w-4xl mb-24 text-center">
                <h2 className="text-3xl font-bold text-meditation-900 mb-10">{t.masterClass.title}</h2>
                <div className="bg-white border border-meditation-200 rounded-3xl p-10 hover:shadow-xl transition-shadow">
                    <div className="mb-6">
                        <span className="text-meditation-500 font-bold tracking-wider">{t.masterClass.duration}</span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-2">{t.masterClass.subTitle}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto break-keep whitespace-pre-wrap">
                        {t.masterClass.desc}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
                        {t.masterClass.benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700">
                                • {benefit}
                            </div>
                        ))}
                    </div>
                    <button disabled className="px-8 py-3 border border-gray-300 text-gray-400 rounded-full cursor-not-allowed">
                        {t.masterClass.btn}
                    </button>
                </div>
            </section>

            {/* Class Schedule */}
            <section className="container mx-auto px-6 max-w-6xl mb-24">
                <h2 className="text-3xl font-bold text-center text-meditation-900 mb-12">{t.schedule.title}</h2>
                <div className="overflow-x-auto">
                    <div className="min-w-[800px] border-t-2 border-meditation-900">
                        {/* Header Row */}
                        <div className="grid grid-cols-8 border-b border-gray-200 bg-gray-50 text-center font-bold text-gray-700">
                            {t.schedule.days.map((day, idx) => (
                                <div key={idx} className={`p-4 ${idx < 7 ? 'border-r border-gray-100' : ''}`}>{day}</div>
                            ))}
                        </div>

                        {/* Row 1: 9:00 - 10:30 */}
                        <div className="grid grid-cols-8 border-b border-gray-200 text-sm h-32">
                            <div className="p-2 border-r border-gray-100 flex items-center justify-center font-medium bg-gray-50 text-gray-600 whitespace-pre-wrap text-center">
                                {t.schedule.rows.row1}
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Mon */}
                            <div className="border-r border-gray-100"></div> {/* Tue */}
                            <div className="border-r border-gray-100"></div> {/* Wed */}
                            <div className="border-r border-gray-100"></div> {/* Thu */}
                            <div className="border-r border-gray-100"></div> {/* Fri */}
                            <div className="p-1 border-r border-gray-100">   {/* Sat */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.asana}</span>
                                    <span className="text-xs">{t.schedule.items.suri}</span>
                                </div>
                            </div>
                            <div className="p-1">                            {/* Sun */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.asana}</span>
                                    <span className="text-xs">{t.schedule.items.heogong}</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: 11:00 - 12:30 */}
                        <div className="grid grid-cols-8 border-b border-gray-200 text-sm h-32">
                            <div className="p-2 border-r border-gray-100 flex items-center justify-center font-medium bg-gray-50 text-gray-600 whitespace-pre-wrap text-center">
                                {t.schedule.rows.row2}
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Mon */}
                            <div className="p-1 border-r border-gray-100">   {/* Tue */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.asana}</span>
                                    <span className="text-xs">{t.schedule.items.zero}</span>
                                </div>
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Wed */}
                            <div className="border-r border-gray-100"></div> {/* Thu */}
                            <div className="p-1 border-r border-gray-100">   {/* Fri */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.asana}</span>
                                    <span className="text-xs">{t.schedule.items.suri}</span>
                                </div>
                            </div>
                            <div className="p-1 border-r border-gray-100">   {/* Sat */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.asana}</span>
                                    <span className="text-xs">{t.schedule.items.suri}</span>
                                </div>
                            </div>
                            <div className="p-1">                            {/* Sun */}
                                <div className="h-full bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.asana}</span>
                                    <span className="text-xs">{t.schedule.items.suri}</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: PM 1:00 - 2:30 / 1:00 - 3:00 */}
                        <div className="grid grid-cols-8 border-b border-gray-200 text-sm h-32">
                            <div className="p-2 border-r border-gray-100 flex items-center justify-center font-medium bg-gray-50 text-gray-600 whitespace-pre-wrap text-center">
                                {t.schedule.rows.row3}
                            </div>
                            <div className="p-1 border-r border-gray-100">   {/* Mon */}
                                <div className="h-full bg-meditation-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.samatha}</span>
                                    <span className="text-xs">{t.schedule.items.yookyung}</span>
                                </div>
                            </div>
                            <div className="p-1 border-r border-gray-100">   {/* Tue */}
                                <div className="h-full bg-gray-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.leader}</span>
                                    <span className="text-xs">1:00~3:00</span>
                                </div>
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Wed */}
                            <div className="p-1 border-r border-gray-100">   {/* Thu */}
                                <div className="h-full bg-meditation-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.samatha}</span>
                                    <span className="text-xs">{t.schedule.items.yookyung}</span>
                                </div>
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Fri */}
                            <div className="p-1 border-r border-gray-100">   {/* Sat */}
                                <div className="h-full bg-gray-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.leader}</span>
                                    <span className="text-xs">1:00~3:00</span>
                                </div>
                            </div>
                            <div className="p-1">                            {/* Sun */}
                                <div className="h-full bg-gray-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold">{t.schedule.items.leader}</span>
                                    <span className="text-xs">1:00~3:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 4: Afternoon & Evening */}
                        <div className="grid grid-cols-8 border-b border-gray-200 text-sm h-40">
                            <div className="p-2 border-r border-gray-100 flex items-center justify-center font-medium bg-gray-50 text-gray-600 whitespace-pre-wrap text-center">
                                {t.schedule.rows.row4}
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Mon */}
                            <div className="p-1 border-r border-gray-100 flex flex-col gap-1 justify-center">   {/* Tue */}
                                <div className="h-20 bg-meditation-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold text-xs">{t.schedule.items.samatha}</span>
                                    <span className="text-[10px]">5:00~6:30<br />{t.schedule.items.yookyung}</span>
                                </div>
                            </div>
                            <div className="p-1 border-r border-gray-100 flex flex-col justify-end pb-2">   {/* Wed */}
                                <div className="h-20 bg-meditation-500/80 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold text-xs">{t.schedule.items.asana}</span>
                                    <span className="text-[10px]">7:00~8:30<br />{t.schedule.items.suri}</span>
                                </div>
                            </div>
                            <div className="p-1 border-r border-gray-100 flex flex-col justify-center">   {/* Thu */}
                                <div className="h-20 bg-gray-700 text-white rounded p-2 flex flex-col justify-center items-center text-center">
                                    <span className="font-bold text-xs">{t.schedule.items.leader}</span>
                                    <span className="text-[10px]">5:30~7:30</span>
                                </div>
                            </div>
                            <div className="border-r border-gray-100"></div> {/* Fri */}
                            <div className="border-r border-gray-100"></div> {/* Sat */}
                            <div></div>                                      {/* Sun */}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-meditation-500/80"></div>
                        <span>{t.schedule.legend[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-meditation-700"></div>
                        <span>{t.schedule.legend[1]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gray-700"></div>
                        <span>{t.schedule.legend[2]}</span>
                    </div>
                </div>
            </section>

            {/* Footer Info */}
            <div className="text-center text-gray-500 text-sm pb-10">
                <p>{t.schedule.contact}</p>
            </div>
        </div>
    );
};

export default ClassDetail;
