import React from 'react';
import { Calendar, Trophy, Quote, CheckCircle2 } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';
import { playNeonSelectSound } from '../utils/sound';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-[#02050e] border-t border-yellow-950/60 overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Ambient Yellow Background Gradients */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[96vw] 2xl:max-w-[95vw] 3xl:max-w-[92vw] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 relative z-10 safe-pad-x">
        
        {/* Neon Yellow Title Header: — من نحن — */}
        <div className="text-center max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-14 lg:mb-16 2xl:mb-20">
          <div className="flex items-center justify-center gap-2.5 sm:gap-5 md:gap-7">
            <span className="w-6 xs:w-8 sm:w-20 md:w-28 lg:w-40 xl:w-56 h-[2px] bg-gradient-to-r from-transparent to-[#FFBE00] shrink-0"></span>
            <h2 className="neon-title-yellow-hero text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black px-2 sm:px-4 tracking-tight leading-tight whitespace-nowrap">
              من نحن
            </h2>
            <span className="w-6 xs:w-8 sm:w-20 md:w-28 lg:w-40 xl:w-56 h-[2px] bg-gradient-to-l from-transparent to-[#FFBE00] shrink-0"></span>
          </div>
          <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-100 font-bold max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mt-2.5 sm:mt-4 md:mt-5 leading-relaxed md:leading-[1.85] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="block">عراقة صناعية رائدة في العراق لتصنيع كابسات البلوك الإنشائية</span>
            <span className="block">والخباطات المركزية وقوالب الفولاذ منذ 2004</span>
          </p>
        </div>

        {/* Top Part: Main Description & Stats Cards */}
        <div className="space-y-6 mb-10">
          {/* Main Description Box */}
          <div className="bg-[#060f20]/85 border border-yellow-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_25px_rgba(255,214,0,0.06)]">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium mb-6 text-right">
              {FACTORY_INFO.description}
            </p>
            <div className="space-y-3 pt-4 border-t border-yellow-950/80">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>تصنيع هندسي لكابسات البلوك الأوتوماتيكية والنصف أوتوماتيكية بمواصفات متينة.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>تجهيز محطات الخباطة المركزية بالكامل مع السايلوات والسيور الناقلة وموازين الركام.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>خراطة وتفصيل قوالب البلوك والإنترلوك والبردورات الفولاذية المعالجة حرارياً.</span>
              </div>
            </div>
          </div>

          {/* Stat Counters: 2004 سنة التأسيس + 22+ سنة من الخبرة والخدمة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Founding Year Card (2004) */}
            <div 
              onClick={() => playNeonSelectSound()}
              className="group p-5 rounded-2xl bg-[#071328] border border-yellow-500/25 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,214,0,0.25)] transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="text-right">
                <span className="font-mono text-3xl sm:text-4xl font-black text-white neon-text-yellow block">
                  {FACTORY_INFO.establishedYear}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-300 block mt-0.5">
                  سنة التأسيس
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-yellow-950/80 border border-yellow-400/50 flex items-center justify-center text-yellow-400 shadow-[0_0_12px_rgba(255,214,0,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
            </div>

            {/* Experience Card (22+ Years) */}
            <div 
              onClick={() => playNeonSelectSound()}
              className="group p-5 rounded-2xl bg-[#071328] border border-yellow-500/25 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,214,0,0.25)] transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="text-right">
                <span 
                  dir="ltr"
                  className="font-mono text-3xl sm:text-4xl font-black text-white neon-text-yellow inline-block"
                >
                  {FACTORY_INFO.experienceYears}+
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-300 block mt-0.5">
                  سنة من الخبرة والخدمة
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-yellow-950/80 border border-yellow-400/50 flex items-center justify-center text-yellow-400 shadow-[0_0_12px_rgba(255,214,0,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Lower Part: Factory Yard Image Card - Widened to fill screen on computer */}
        <div className="relative rounded-3xl overflow-hidden border border-yellow-500/30 shadow-[0_0_35px_rgba(255,214,0,0.18)] group min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[540px] xl:min-h-[600px] w-full">
          <img
            src="/src/assets/images/factory_yard_night_1791653290351.jpg"
            alt="معمل حدادة فهمي"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-85 min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[540px] xl:min-h-[600px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/60 to-transparent"></div>
          
          {/* Quote Container: Aligned strictly to the RIGHT hand side, single line on tablet & computer */}
          <div 
            dir="rtl"
            className="absolute bottom-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-start text-right z-10 w-full"
          >
            {/* Glowing Quote Icon */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-yellow-950/90 border border-yellow-400/60 flex items-center justify-center text-yellow-400 mb-3 sm:mb-4 shadow-[0_0_20px_rgba(255,214,0,0.5)] shrink-0">
              <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Slogan Text: Mobile stays natural wrap, Tablet & Computer become ONE continuous line aligned to right */}
            <blockquote className="text-white text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-black leading-snug mb-2 max-w-full md:max-w-none md:whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] text-right">
              &ldquo;{FACTORY_INFO.quoteSlogan}&rdquo;
            </blockquote>

            {/* Factory Attribution */}
            <p className="text-xs sm:text-sm md:text-base text-yellow-300/90 font-bold text-right">
              {FACTORY_INFO.nameAr} - كركوك
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
