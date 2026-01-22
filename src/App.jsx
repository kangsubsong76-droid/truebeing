import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import EffectsSection from './components/EffectsSection';
import ProgramSection from './components/ProgramSection';
import VideoSection from './components/VideoSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import AboutMeditation from './components/AboutMeditation';

import ClassDetail from './components/ClassDetail';
import CenterIntro from './components/CenterIntro';
import MeditationArchive from './components/MeditationArchive';
import ContactPage from './components/ContactPage';

function App() {
    const [view, setView] = useState('home');

    // Automatically scroll to top when view changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const scrollToSection = (id) => {
        setView('home');
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <Navbar setView={setView} scrollToSection={scrollToSection} />
            <main>
                {view === 'home' ? (
                    <>
                        <Hero />
                        <Introduction />
                        <EffectsSection />
                        <ProgramSection />
                        <VideoSection />
                        <GallerySection />
                    </>
                ) : view === 'about' ? (
                    <AboutMeditation />
                ) : view === 'intro' ? (
                    <CenterIntro />
                ) : view === 'archive' ? (
                    <MeditationArchive />
                ) : view === 'contact' ? (
                    <ContactPage />
                ) : (
                    <ClassDetail />
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;
