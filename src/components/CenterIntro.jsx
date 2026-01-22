import React from 'react';
import gallery3 from '../assets/images/gallery_3.jpg';
import gallery2 from '../assets/images/gallery_2.jpg';
import instructorSuri from '../assets/images/instructor_suri.png';
import instructorZero from '../assets/images/instructor_zero.png';
import instructorHeogong from '../assets/images/instructor_heogong.png';

const CenterIntro = () => {
    return (
        <div className="pt-16 md:pt-24 pb-12 md:pb-20 bg-white">
            {/* Header */}
            <section className="container mx-auto px-6 mb-12 md:mb-20 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    ABOUT US
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-meditation-950 mb-6 md:mb-8 break-keep">
                    명상센터 소개
                </h1>
                <div className="w-20 h-1 bg-meditation-300 mx-auto"></div>
            </section>

            {/* Philosophy Section */}
            <section className="container mx-auto px-6 max-w-4xl mb-20 md:mb-32">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-meditation-900 mb-4 md:mb-6 leading-tight break-keep">
                        "마음의 본질을 꿰뚫는<br className="md:hidden" /> 과학적인 명상"
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                        현존명상센터는 막연한 위로가 아닌,<br className="hidden md:block" />
                        마음의 메커니즘을 정확히 이해하고 근본으로부터 자유로워지는 길을 안내합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-meditation-50 p-6 md:p-8 rounded-3xl text-center hover:shadow-lg transition-transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-meditation-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl">🌱</div>
                        <h3 className="font-bold text-lg md:text-xl text-meditation-900 mb-3 md:mb-4 break-keep">2009년 설립</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            오랜 시간 검증된<br />정통 명상 교육 기관
                        </p>
                    </div>
                    <div className="bg-meditation-50 p-6 md:p-8 rounded-3xl text-center hover:shadow-lg transition-transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-meditation-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl">🧘</div>
                        <h3 className="font-bold text-lg md:text-xl text-meditation-900 mb-3 md:mb-4 break-keep">정통 사마타</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            마음의 실체를 통찰하며,<br />진아, 순수의식을 지향
                        </p>
                    </div>
                    <div className="bg-meditation-50 p-6 md:p-8 rounded-3xl text-center hover:shadow-lg transition-transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-meditation-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl">🌲</div>
                        <h3 className="font-bold text-lg md:text-xl text-meditation-900 mb-3 md:mb-4 break-keep">성북동 확장이전</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            2024년 8월,<br />도심속 골목안 아늑한 명상 공간
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Profile */}
            <section className="bg-meditation-900 text-white py-16 md:py-24 mb-20 md:mb-32">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="w-full md:w-1/3 max-w-sm">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 shadow-2xl border-4 border-meditation-800">
                                {/* Placeholder for Founder Image */}
                                <img
                                    src={gallery2}
                                    alt="현존 유경 대표"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <span className="inline-block px-3 py-1 bg-meditation-700 text-meditation-100 text-xs font-bold rounded-full mb-4">FOUNDER</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2 break-keep">현존 유경</h2>
                            <p className="text-meditation-300 text-base md:text-lg mb-6 md:mb-8">Master Yoo-kyung</p>

                            <blockquote className="border-l-4 border-meditation-500 pl-4 md:pl-6 italic text-gray-300 mb-6 md:mb-8 leading-relaxed text-base md:text-lg text-left">
                                "저의 오랜 수행 끝에 마주한 것은 고통 없는 완전한 자유였습니다.<br className="hidden md:block" />
                                그 현존(Truebeing)의 빛을 여러분과 나누고 싶습니다."
                            </blockquote>

                            <p className="text-gray-300 leading-relaxed mb-6 font-light text-left">
                                어린 시절부터 이어진 신체적, 심리적 고통을 극복하기 위해 요가와 명상을 시작했습니다.
                                끈질긴 수행 끝에 마음이 사라지고 의식만 남는 '현존' 상태를 체험한 후,
                                이를 체계적인 교육 프로그램으로 정립하여 현존명상센터를 설립했습니다.
                            </p>
                            <ul className="space-y-2 text-sm text-meditation-200 text-left">
                                <li>• 현존명상센터 대표</li>
                                <li>• 사마타 명상 및 지도자 과정(Master Class) 전담 지도</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructors */}
            <section className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-meditation-900 mb-10 md:mb-16 break-keep">함께하는 지도자들</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {/* Instructor 1 */}
                    <div className="text-center group">
                        <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:border-meditation-200 transition-all">
                            <img src={instructorSuri} alt="수리 선생님" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">수리 (Suri)</h3>
                        <p className="text-meditation-600 text-sm font-medium mb-4">아사나 명상 지도자</p>
                        <p className="text-gray-600 text-sm leading-relaxed px-4">
                            "몸을 통해 마음을 봅니다."<br />
                            따뜻하고 섬세한 지도로 몸의 균형과 마음의 안정을 찾아드립니다.
                        </p>
                    </div>

                    {/* Instructor 2 */}
                    <div className="text-center group">
                        <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:border-meditation-200 transition-all">
                            <img src={instructorZero} alt="제로 선생님" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">제로 (Zero)</h3>
                        <p className="text-meditation-600 text-sm font-medium mb-4">아사나 명상 지도자</p>
                        <p className="text-gray-600 text-sm leading-relaxed px-4">
                            "비움의 미학을 실천합니다."<br />
                            복잡한 생각을 내려놓고 0(Zero)의 상태로 돌아가는 시간을 안내합니다.
                        </p>
                    </div>

                    {/* Instructor 3 */}
                    <div className="text-center group">
                        <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:border-meditation-200 transition-all">
                            <img src={instructorHeogong} alt="허공 선생님" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">허공 (Heogong)</h3>
                        <p className="text-meditation-600 text-sm font-medium mb-4">아사나 명상 지도자</p>
                        <p className="text-gray-600 text-sm leading-relaxed px-4">
                            "무한한 가능성을 엽니다."<br />
                            닫힌 마음을 열고 허공처럼 넓은 의식의 확장을 경험하게 돕습니다.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CenterIntro;
