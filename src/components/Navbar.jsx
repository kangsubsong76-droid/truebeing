import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoNavV3 from '../assets/logo_nav_v3.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

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
        { name: 'Home', path: '/' },
        { name: '올바른 명상이란?', path: '/about' },
        { name: '수업안내', path: '/classes' },
        { name: '명상센터소개', path: '/intro' },
        { name: '명상아카이브', path: '/archive' },
        { name: 'Contact', path: '/contact' },
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
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium hover:text-meditation-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
                        >
                            {link.name}
                        </Link>
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
                            <Link
                                key={link.name}
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
