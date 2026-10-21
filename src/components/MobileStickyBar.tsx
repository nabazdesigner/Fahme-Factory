import React from 'react';
import { Phone, MessageSquare, MapPin, Volume2, VolumeX } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';
import { playClickSound } from '../utils/sound';
import { scrollToSectionTitle } from '../utils/scroll';

interface MobileStickyBarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#02050c]/98 backdrop-blur-lg border-t border-yellow-500/40 px-3 pt-3.5 sm:pt-4 md:pt-4.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-[0_-5px_25px_rgba(255,214,0,0.15)] safe-pad-x">
      <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto grid grid-cols-4 gap-2 sm:gap-3 items-center">
        
        {/* WhatsApp Direct */}
        <a
          href={FACTORY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playClickSound(1500)}
          className="flex flex-col items-center justify-center py-2 px-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-xs font-bold active:scale-95 hover:scale-105 transition-transform"
        >
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mb-1" />
          <span>واتساب</span>
        </a>

        {/* Direct Call / Contact Section */}
        <button
          onClick={(e) => {
            e.preventDefault();
            playClickSound(1500);
            scrollToSectionTitle('contact-card');
          }}
          className="flex flex-col items-center justify-center py-2 px-1.5 rounded-xl bg-yellow-950/70 border border-yellow-400/40 text-yellow-300 text-[10px] sm:text-xs font-bold active:scale-95 hover:scale-105 transition-transform cursor-pointer"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mb-1" />
          <span>اتصال</span>
        </button>

        {/* Location / Contact */}
        <button
          onClick={(e) => {
            e.preventDefault();
            playClickSound(1500);
            scrollToSectionTitle('contact');
          }}
          className="flex flex-col items-center justify-center py-2 px-1.5 rounded-xl bg-slate-900 border border-yellow-500/30 text-yellow-200 text-[10px] sm:text-xs font-bold active:scale-95 hover:scale-105 transition-transform cursor-pointer"
        >
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mb-1" />
          <span>الموقع</span>
        </button>

        {/* Sound FX Toggle on Mobile, iPad, PC, TV */}
        <button
          onClick={() => {
            onToggleSound();
            playClickSound(1600);
          }}
          className={`flex flex-col items-center justify-center py-2 px-1.5 rounded-xl border text-[10px] sm:text-xs font-bold active:scale-95 hover:scale-105 transition-transform cursor-pointer ${
            soundEnabled
              ? 'bg-yellow-950/80 border-yellow-400 text-yellow-300 shadow-[0_0_10px_rgba(255,214,0,0.3)]'
              : 'bg-slate-900/80 border-slate-700 text-slate-400'
          }`}
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mb-1 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mb-1" />
          )}
          <span>{soundEnabled ? 'صوت: فعّال' : 'صوت: صامت'}</span>
        </button>

      </div>
    </div>
  );
};
