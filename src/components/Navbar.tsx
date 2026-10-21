import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MessageSquare, 
  ChevronLeft
} from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';
import { FahmeLogo } from './FahmeLogo';
import { playClickSound, playNeonSelectSound } from '../utils/sound';
import { scrollToSectionTitle } from '../utils/scroll';

interface NavbarProps {
  soundEnabled?: boolean;
  onToggleSound?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'gallery', label: 'معرض الصور' },
    { id: 'contact', label: 'الموقع والتواصل' },
  ];

  const handleNavClick = (id: string) => {
    playNeonSelectSound();
    setMobileMenuOpen(false);
    // Allow mobile drawer animation to finish closing so layout height settles, then scroll directly to title
    setTimeout(() => {
      scrollToSectionTitle(id);
    }, 60);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030712]/95 backdrop-blur-md border-b border-yellow-500/20 shadow-[0_4px_30px_rgba(255,214,0,0.08)] safe-pad-top">
      {/* Main Navigation Bar - Widened to fill screen on computer with standard padding */}
      <div className="w-full max-w-[96vw] 2xl:max-w-[95vw] 3xl:max-w-[92vw] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-3.5 flex items-center justify-between safe-pad-x compact-on-mobile-landscape">
        
        {/* Brand Zone with Official Fahme Yellow Logo and Spaced Subtitle */}
        <a 
          href="#hero" 
          onClick={() => playNeonSelectSound()}
          className="flex items-center gap-3.5 group"
        >
          {/* Compact Official 3D Badge Logo */}
          <FahmeLogo size="xs" className="w-12 sm:w-14 h-auto group-hover:scale-105 transition-transform" />

          {/* Arabic Title: Pure White, Natural Spacing, Crisp & Bold */}
          <span className="text-white text-xl sm:text-2xl font-black tracking-normal leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] select-none">
            {FACTORY_INFO.nameAr}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-2 py-1 text-sm font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-yellow-300 drop-shadow-[0_0_12px_rgba(255,214,0,0.85)]'
                    : 'text-slate-300 hover:text-yellow-300 hover:drop-shadow-[0_0_8px_rgba(255,214,0,0.5)]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow-400 shadow-[0_0_10px_#ffd600] rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Direct Contact Button (NO "طلب سعر") and Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              playClickSound(1800);
              scrollToSectionTitle('contact');
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white neon-btn-yellow rounded-full uppercase tracking-wider cursor-pointer"
          >
            <span>تواصل معنا</span>
            <ChevronLeft className="w-3.5 h-3.5 text-yellow-200" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              playClickSound(1400);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg bg-yellow-950/40 border border-yellow-500/40 text-yellow-300 hover:bg-yellow-900/40 transition-colors shadow-[0_0_10px_rgba(255,214,0,0.2)]"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030712]/98 border-b border-yellow-500/30 px-4 py-5 shadow-[0_10px_30px_rgba(255,214,0,0.15)] animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-bold text-right transition-all ${
                    isActive
                      ? 'bg-yellow-950/80 text-yellow-300 border border-yellow-400/50 shadow-[0_0_15px_rgba(255,214,0,0.2)]'
                      : 'text-slate-200 hover:bg-slate-900/70 hover:text-yellow-300'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronLeft className="w-4 h-4 text-yellow-400/70" />
                </button>
              );
            })}

            <div className="pt-3 border-t border-yellow-950/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  playClickSound(1800);
                  handleNavClick('contact');
                }}
                className="w-full py-3 text-center text-sm font-bold text-white neon-btn-yellow rounded-xl cursor-pointer"
              >
                تواصل معنا الآن
              </button>

              <a
                href={FACTORY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound(1400)}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>محادثة واتساب مباشرة</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
