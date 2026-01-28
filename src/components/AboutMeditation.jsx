import effect1 from '../assets/images/effect_1.jpg';

const AboutMeditation = () => {
    return (
        <div className="pt-24 pb-20 bg-white">
            {/* Header Section */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <span className="block text-meditation-600 font-semibold tracking-widest text-sm mb-4">
                    PHILOSOPHY
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-meditation-950 mb-8">
                    올바른 명상이란?
                </h1>
                <div className="w-20 h-1 bg-meditation-300 mx-auto"></div>
            </section>

            {/* Content Section 1: The Nature of Mind */}
            <section className="container mx-auto px-6 max-w-4xl mb-24">
                <div className="bg-meditation-50 rounded-3xl p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-meditation-900 mb-6">
                        마음의 실체를 통찰하다
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed font-light mb-6 break-keep">
                        많은 명상법들이 마음을 편안하게 하거나 긍정적인 생각으로 바꾸는 것을 목표로 합니다.
                        하지만 현존명상센터는 <strong>마음의 본질 자체를 통찰</strong>하는 것에서 시작합니다.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed font-light break-keep">
                        우리의 마음(Mind)은 욕망, 불안, 두려움 등 끊임없는 에너지 파동으로 이루어져 있습니다.
                        이러한 마음을 억지로 누르거나 포장하는 것이 아니라,
                        <strong>마음이라는 현상 자체로부터 완전히 벗어나는 것</strong>이 진정한 자유입니다.
                    </p>
                </div>
            </section>

            {/* Content Section 2: Time and Presence */}
            <section className="container mx-auto px-6 max-w-4xl mb-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-80">
                        <img
                            src={effect1}
                            alt="Meditation Moment"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold text-meditation-900 mb-6">
                            시간의 삭제, 마음에서 벗어난 찰나
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed font-light mb-6 break-keep">
                            마음에서 벗어나는 유일한 통로는 <strong>'시간의 삭제'</strong>입니다.
                            과거에 대한 후회와 미래에 대한 불안은 모두 '시간'이라는 환상 속에서 존재합니다.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed font-light break-keep">
                            사띠(Sati, 알아차림)를 통해 시간의 흐름이 멈추고
                            오직 <strong>'지금 이 순간'</strong>만 남는 찰나.
                            그 순수한 있음의 상태가 바로 <strong>진아, 순수의식상태</strong>입니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section 3: Samatha Meditation */}
            <section className="bg-meditation-900 text-white py-20 rounded-3xl container mx-auto px-6 max-w-5xl text-center">
                <h2 className="text-3xl font-bold mb-8">정통 사마타 명상 (Samatha)</h2>
                <p className="text-xl text-meditation-100 leading-relaxed max-w-3xl mx-auto mb-10 font-light break-keep">
                    올바른 명상은 잠깐의 기분 전환이 아닙니다.
                    에고(Ego)의 소멸이 이루어지고 있는 상태,
                    그 깊고 고요한 침묵 속에서 진정한 나를 만나세요.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                    <div className="bg-meditation-800 p-6 rounded-xl">
                        <h3 className="font-bold text-lg mb-3">1. 알아차림 (Sati)</h3>
                        <p className="text-meditation-200 text-sm break-keep">순간순간 일어나는 마음의 작용을 있는 그대로 관찰하고 깨어있습니다.</p>
                    </div>
                    <div className="bg-meditation-800 p-6 rounded-xl">
                        <h3 className="font-bold text-lg mb-3">2. 몰입 (Samadhi)</h3>
                        <p className="text-meditation-200 text-sm break-keep">대상을 향한 흔들림 없는 집중을 통해 깊은 내면의 고요에 도달합니다.</p>
                    </div>
                    <div className="bg-meditation-800 p-6 rounded-xl">
                        <h3 className="font-bold text-lg mb-3">3. 통찰 (Panna)</h3>
                        <p className="text-meditation-200 text-sm break-keep">현상의 본질을 꿰뚫어 보고 마음의 속박으로부터 자유로워집니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMeditation;
