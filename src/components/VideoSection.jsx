import React from 'react';

const VideoSection = () => {
    return (
        <section id="center" className="py-20 bg-meditation-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    센터 공식 영상
                </h2>
                <p className="text-meditation-200 mb-12 max-w-2xl mx-auto">
                    고요함 속에서 만나는 진정한 나. 센터의 전경과 분위기를 영상으로 미리 만나보세요.
                </p>

                <div className="max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-meditation-700">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/2557SzvTZJM?rel=0&modestbranding=1"
                        title="Meditation Center Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
