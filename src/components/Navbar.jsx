import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import logoNavV3 from '../assets/logo_nav_v3.png';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].nav;

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

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: t.home, path: '/' },
        { name: t.about, path: '/about' },
        { name: t.classes, path: '/classes' },
        { name: t.intro, path: '/intro' },
        { name: t.corporate, path: '/corporate-education' },
        { name: t.archive, path: '/archive' },
        { name: t.contact, path: '/contact' },
    ];

    const isHome = location.pathname === '/';

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}
            style={!isScrolled && !isOpen && isHome ? { mixBlendMode: 'multiply' } : {}}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img
                        src={logoNavV3}
                        alt="현존명상센터"
                        className="h-12 w-auto object-contain"
                        style={{ filter: 'contrast(1.1) brightness(1.1)' }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium hover:text-meditation-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-semibold tracking-wider ${isScrolled
                            ? 'border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-800'
                            : 'border-gray-400 text-gray-800 hover:border-gray-600 hover:text-gray-900'
                            }`}
                        aria-label="Toggle Language"
                    >
                        <Globe size={14} />
                        <span>{language === 'ko' ? 'EN' : 'KR'}</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-xs font-bold text-gray-700 border border-gray-300 px-2 py-1 rounded"
                    >
                        {language === 'ko' ? 'EN' : 'KR'}
                    </button>
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
                    <div className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-gray-800 hover:text-meditation-700 hover:bg-meditation-50 font-medium py-3 px-8 transition-colors text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
