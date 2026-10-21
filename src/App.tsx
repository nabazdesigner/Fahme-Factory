import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { 
  setupGlobalSoundListener, 
  isSoundEnabled, 
  setSoundEnabled, 
} from './utils/sound';
import { scrollToSectionTitle } from './utils/scroll';

export default function App() {
  const [soundActive, setSoundActive] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize global sound effect listener on all clickable elements
  useEffect(() => {
    setSoundActive(isSoundEnabled());
    const cleanup = setupGlobalSoundListener();
    return cleanup;
  }, []);

  // Track active section on scroll for neon navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = !soundActive;
    setSoundActive(newState);
    setSoundEnabled(newState);
  };

  const handleExploreGallery = () => {
    scrollToSectionTitle('gallery');
  };

  return (
    <div className="min-h-screen bg-[#02050c] text-slate-100 flex flex-col font-cairo selection:bg-yellow-500/30 selection:text-yellow-200 pb-28 sm:pb-32 lg:pb-0">
      {/* Top Navbar with sound controls & official Fahme Logo */}
      <Navbar
        soundEnabled={soundActive}
        onToggleSound={handleToggleSound}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Machinery & Glowing Yellow Neon Badges */}
        <Hero
          onExploreProducts={handleExploreGallery}
        />

        {/* About Section ("من نحن") */}
        <About />

        {/* Gallery Section ("معرض الصور") with interactive Lightbox */}
        <Gallery />

        {/* Contact & Location Section */}
        <Contact />
      </main>

      {/* Footer with copyright & social links */}
      <Footer />

      {/* Mobile Sticky Action Bar (<15% viewport height, without طلب سعر) */}
      <MobileStickyBar
        soundEnabled={soundActive}
        onToggleSound={handleToggleSound}
      />


    </div>
  );
}
