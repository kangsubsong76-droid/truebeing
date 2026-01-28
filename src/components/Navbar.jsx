import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


import logoNav from '../assets/logo_nav_final_v2.png';
import logoNavV3 from '../assets/logo_nav_v3.png';

const Navbar = ({ setView, scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, target) => {
        e.preventDefault();
        if (target === 'about-page') {
            setView('about');
        } else if (target === 'class-page') {
            setView('classes');
        } else if (target === 'intro-page') {
            setView('intro');
        } else if (target === 'archive-page') {
            setView('archive');
        } else if (target === 'contact-page') {
            setView('contact');
        } else if (target === 'home') {
            setView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            scrollToSection(target);
        }
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', target: 'home' },
        { name: '올바른 명상이란?', target: 'about-page' },
        { name: '수업안내', target: 'class-page' },
        { name: '명상센터소개', target: 'intro-page' },
        { name: '명상아카이브', target: 'archive-page' },
        { name: 'Contact', target: 'contact-page' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}
            style={!isScrolled && !isOpen ? { mixBlendMode: 'multiply' } : {}}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center">
                    <img
                        src={logoNavV3}
                        alt="현존명상센터"
                        className="h-12 w-auto object-contain"
                        style={{ filter: 'contrast(1.1) brightness(1.1)' }}
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.target}`}
                            onClick={(e) => handleNavClick(e, link.target)}
                            className={`text-sm font-medium hover:text-meditation-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
                    <div className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.target}`}
                                className="text-gray-800 hover:text-meditation-700 hover:bg-meditation-50 font-medium py-3 px-8 transition-colors text-center"
                                onClick={(e) => handleNavClick(e, link.target)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
