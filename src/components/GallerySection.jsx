import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import gallery1 from '../assets/images/gallery_1.png';
import gallery2 from '../assets/images/gallery_2.png';
import gallery3 from '../assets/images/gallery_3.png';
import gallery4 from '../assets/images/gallery_4.png';
import gallery5 from '../assets/images/gallery_5.png';
import gallery6 from '../assets/images/gallery_6.JPG';
import gallery7 from '../assets/images/gallery_7.JPG';

const classImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery1, // Repeat
    gallery2, // Repeat
    gallery3, // Repeat
];

const GallerySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + 1 > classImages.length - itemsToShow ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? classImages.length - itemsToShow : prev - 1
        );
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [itemsToShow]);

    return (
        <section id="archive" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-meditation-900 mb-16">
                    다양한 수업 전경
                </h2>

                <div className="relative max-w-6xl mx-auto">
                    {/* Slider Container */}
                    <div className="overflow-hidden px-4 md:px-0">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
                            }}
                        >
                            {classImages.map((src, index) => (
                                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-md">
                                        <img
                                            src={src}
                                            alt={`Class scene ${index + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'text-gray-400');
                                                e.target.parentElement.innerText = 'Image Loading...';
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white text-meditation-800 transition-all z-10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white text-meditation-800 transition-all z-10"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
