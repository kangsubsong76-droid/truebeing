import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import EffectsSection from './components/EffectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProgramSection from './components/ProgramSection';
import VideoSection from './components/VideoSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import AboutMeditation from './components/AboutMeditation';
import ClassDetail from './components/ClassDetail';
import CenterIntro from './components/CenterIntro';
import MeditationArchive from './components/MeditationArchive';
import ContactPage from './components/ContactPage';
import CorporateEducation from './components/CorporateEducation';
import NoticePage from './components/NoticePage';
import NoticePopup from './components/NoticePopup';

import { LanguageProvider } from './contexts/LanguageContext';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <LanguageProvider>
            <div className="font-sans antialiased text-gray-900 bg-white">
                <ScrollToTop />
                <Navbar />
                <NoticePopup />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <Introduction />
                                <EffectsSection />
                                <TestimonialsSection />
                                <ProgramSection />
                                <VideoSection />
                                <GallerySection />
                            </>
                        } />
                        <Route path="/about" element={<AboutMeditation />} />
                        <Route path="/classes" element={<ClassDetail />} />
                        <Route path="/intro" element={<CenterIntro />} />
                        <Route path="/archive" element={<MeditationArchive />} />
                        <Route path="/corporate-education" element={<CorporateEducation />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/notice" element={<NoticePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
