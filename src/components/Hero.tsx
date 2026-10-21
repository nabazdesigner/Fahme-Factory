import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Cog, 
  Wrench, 
  ArrowLeft,
  Sparkles,
  Tag,
  Trophy
} from 'lucide-react';
import { FACTORY_INFO, HERO_BADGES } from '../data/factoryData';
import { FahmeLogo } from './FahmeLogo';
import { playClickSound, playNeonSelectSound } from '../utils/sound';
import { scrollToSectionTitle } from '../utils/scroll';

interface HeroProps {
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
}) => {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'award':
        return <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />;
      case 'tag':
        return <Tag className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />;
      case 'gear':
        return <Cog className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />;
      case 'tool':
        return <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-yellow-300" />;
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-5rem)] landscape:min-h-[calc(100vh-4.5rem)] portrait:min-h-0 flex items-center justify-center overflow-hidden bg-[#030712] py-8 sm:py-10 md:py-12 lg:py-14 2xl:py-16 portrait:py-8 sm:portrait:py-10 md:portrait:py-12 lg:portrait:py-14 hero-mobile-landscape"
    >
      {/* Background Factory Machine Image with Symmetrical Ambient Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_block_machine_1791653257579.jpg"
          alt="معمل حدادة فهمي - كابسات البلوك والخباطات المركزية"
          className="w-full h-full object-cover object-center scale-105 opacity-25 filter brightness-90 contrast-115"
          loading="eager"
        />
        {/* Symmetrical dark vignettes for perfect centering on all screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-[#030712]"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#030712]/50 to-[#030712]/95"></div>
        
        {/* Balanced Golden Ambient Glow Orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[35rem] sm:w-[48rem] lg:w-[60rem] h-[25rem] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-6 left-1/4 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-6 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[95vw] 3xl:max-w-[92vw] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 flex flex-col items-center justify-center text-center safe-pad-x">
        {/* Standard Centered Hero Container across all viewports (Mobile, iPad portrait/landscape, PC, TV) */}
        <div className="flex flex-col items-center justify-center text-center w-full mx-auto">
          
          {/* Official 3D Badge Logo - Always Centered */}
          <div className="mb-4 sm:mb-6 lg:mb-7 flex items-center justify-center mx-auto">
            <FahmeLogo size="md" glow={true} />
          </div>

          {/* Glowing Neon Yellow Main Title: معمل حدادة فهمي */}
          <h1 className="neon-title-yellow-hero text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black tracking-tight leading-[1.2] mb-2.5 sm:mb-3">
            {FACTORY_INFO.nameAr}
          </h1>

          {/* Tagline in Pure White */}
          <p className="text-base xs:text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-extrabold text-white tracking-wide mb-2 sm:mb-3 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {FACTORY_INFO.taglineAr}
          </p>

          {/* English Subtitle */}
          <div className="text-[#FFC400] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-mono font-bold tracking-wider mb-6 sm:mb-8 lg:mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {FACTORY_INFO.subEn}
          </div>

          {/* 6 Feature Badges - Standard Proportional Width for Mobile, iPad, PC & TV */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-3.5 xl:gap-4 2xl:gap-5 w-full mx-auto mb-6 sm:mb-8 lg:mb-8">
            {HERO_BADGES.map((badge) => (
              <div
                key={badge.id}
                onClick={() => playNeonSelectSound()}
                className="group relative flex flex-col items-center justify-center p-3 sm:p-4 lg:p-3.5 xl:p-4.5 2xl:p-6 rounded-2xl bg-[#081224]/85 border border-yellow-500/25 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,214,0,0.35)] cursor-pointer hover:-translate-y-1 backdrop-blur-sm text-center"
              >
                {/* Glowing Yellow Icon Circle */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-11 lg:h-11 xl:w-13 xl:h-13 2xl:w-16 2xl:h-16 rounded-full bg-yellow-950/80 border border-yellow-400/60 flex items-center justify-center mb-2 sm:mb-2.5 shadow-[0_0_15px_rgba(255,214,0,0.3)] group-hover:scale-110 transition-all">
                  {getBadgeIcon(badge.icon)}
                </div>
                
                {/* Badge title in white */}
                <h3 className="text-white text-xs xs:text-sm sm:text-base lg:text-xs xl:text-sm 2xl:text-base font-bold text-center leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {badge.title}
                </h3>
                <span className="text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] 2xl:text-xs text-slate-300 text-center mt-1 hidden sm:block line-clamp-1">
                  {badge.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons: Centered with comfortable headroom above bottom dock */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 lg:gap-6 w-full sm:w-auto mx-auto pb-4 md:pb-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                playClickSound(1800);
                scrollToSectionTitle('contact');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3 sm:px-9 sm:py-3.5 lg:px-10 lg:py-4 2xl:px-12 2xl:py-5 rounded-full text-base sm:text-lg 2xl:text-xl font-black text-white neon-btn-yellow shadow-[0_0_25px_rgba(255,214,0,0.5)] group cursor-pointer hover:scale-105 active:scale-95 transition-transform"
            >
              <span className="drop-shadow-[0_0_6px_#ffffff]">تواصل معنا الآن</span>
              <ArrowLeft className="w-5 h-5 text-yellow-200 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                playClickSound(1500);
                scrollToSectionTitle('gallery');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 lg:px-9 lg:py-4 2xl:px-11 2xl:py-5 rounded-full text-sm sm:text-base 2xl:text-lg font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-yellow-500/30 hover:border-yellow-400 hover:text-yellow-300 transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>استكشف معرض الصور والأعمال</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
