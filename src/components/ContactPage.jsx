import React from 'react';
import { MapPin, Phone, Clock, Car, Bus } from 'lucide-react';
import mapLocation from '../assets/images/map_location.png';

const ContactPage = () => {
    return (
        <div className="pt-24 pb-20 bg-white">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    LOCATION
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-meditation-950 mb-8">
                    오시는 길
                </h1>
                <div className="w-20 h-1 bg-meditation-300 mx-auto mb-10"></div>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    성북동의 고요한 골목 끝,<br />
                    현존명상센터에서 여러분을 기다립니다.
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
                                alt="오시는 길 지도"
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
                                    네이버 지도 보기
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-meditation-50 rounded-full flex items-center justify-center text-meditation-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">주소</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        서울시 성북구 성북로 15길 15-2 (2F)<br />
                                        <span className="text-sm text-gray-500">(최순우 옛집 골목 안)</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-meditation-50 rounded-full flex items-center justify-center text-meditation-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">연락처</h3>
                                    <p className="text-gray-600">010-3188-3105</p>
                                    <p className="text-sm text-gray-400 mt-1">
                                        * 수업 중에는 통화가 어려울 수 있습니다.<br />
                                        문자를 남겨주시면 확인 후 연락드리겠습니다.
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
                                <h3 className="text-2xl font-bold text-meditation-900">대중교통 이용안내</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-meditation-500 rounded-full"></span>
                                        지하철 + 버스 환승
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed pl-4 text-sm">
                                        <strong>4호선 한성대입구역 6번 출구</strong>로 나오신 후,<br />
                                        전방 버스 정류장에서 아래 버스로 환승하세요.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl shadow-sm">
                                    <div className="mb-3">
                                        <span className="text-green-600 font-bold text-sm bg-green-100 px-2 py-0.5 rounded mr-2">지선버스</span>
                                        <span className="font-medium text-gray-700">1111, 1112, 2112번</span>
                                    </div>
                                    <div>
                                        <span className="text-green-600 font-bold text-sm bg-green-100 px-2 py-0.5 rounded mr-2">마을버스</span>
                                        <span className="font-medium text-gray-700">성북 03, 성북 02번</span>
                                    </div>
                                </div>

                                <div className="pl-4 border-l-2 border-meditation-200">
                                    <p className="text-sm text-gray-600">
                                        <strong>'홍익대부속중고등학교 입구'</strong> 정거장 하차<br />
                                        → 최순우 옛집 방향으로 도보 3분
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Parking Info */}
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Car size={28} className="text-meditation-600" />
                                <h3 className="text-2xl font-bold text-meditation-900">주차 안내</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                건물 바로 앞에 <strong>1~2대 주차 가능</strong>합니다.<br />
                                성북동 골목 특성상 주차 공간이 협소할 수 있습니다.
                            </p>
                            <div className="bg-white p-4 rounded-xl border border-meditation-100 text-sm text-meditation-700 font-medium text-center">
                                📢 주차 시 차량 앞 유리창에<br />
                                '현존명상 + 연락처'를 반드시 기재해주세요.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
