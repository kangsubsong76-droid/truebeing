import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-meditation-950 text-meditation-200 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">현존명상센터</h3>
                        <p className="leading-relaxed opacity-80 text-sm md:text-base">
                            당신이 진정으로 원하는 삶의 변화,<br />
                            마음에서 벗어난 찰나에서 시작됩니다.<br />
                            참된 나를 회복하는 도심 속 쉼의 공간.
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-bold text-white mb-4 md:mb-6">Contact Us</h4>
                        <ul className="space-y-3 md:space-y-4 opacity-80 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="font-bold w-16 shrink-0">Address</span>
                                <span>서울시 성북구 성북로 15길 15-2 (2F)<br />(최순우 옛집 골목 안)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="font-bold w-16 shrink-0">Tel</span>
                                <span>010-3188-3105</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="font-bold w-16 shrink-0">Email</span>
                                <span>truebeing-meditation@naver.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-bold text-white mb-4 md:mb-6">Follow Us</h4>
                        <div className="flex flex-col space-y-3 md:space-y-4">
                            <a
                                href="https://www.instagram.com/truebeing_meditation/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition-colors opacity-80 hover:opacity-100"
                            >
                                <span className="font-bold">Instagram</span>
                                <span className="text-sm">@truebeing_meditation</span>
                            </a>
                            <a
                                href="https://cafe.naver.com/bhakti"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition-colors opacity-80 hover:opacity-100"
                            >
                                <span className="font-bold">Naver Cafe</span>
                                <span className="text-sm">현존명상센터 카페</span>
                            </a>
                            <a
                                href="https://blog.naver.com/truebeing-meditation"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition-colors opacity-80 hover:opacity-100"
                            >
                                <span className="font-bold">Blog</span>
                                <span className="text-sm">네이버 블로그</span>
                            </a>
                            <a
                                href="https://www.youtube.com/@truebeing-meditation"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 hover:text-white transition-colors opacity-80 hover:opacity-100"
                            >
                                <span className="font-bold">YouTube</span>
                                <span className="text-sm">현존명상센터 공식채널</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-meditation-800 pt-8 text-center text-xs md:text-sm opacity-60">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>&copy; 2024 현존명상센터 (Truebeing Meditation Center). All rights reserved.</p>
                        <p>사업자등록번호 : 391-88-03105 | 현존명상협동조합 (이사장: 우수완)</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
