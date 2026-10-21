import React from 'react';
import { Tag, Clock, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US, FACTORY_INFO } from '../data/factoryData';
import { playNeonSelectSound } from '../utils/sound';

export const WhyUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'tag':
        return <Tag className="w-6 h-6 text-yellow-300" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-yellow-300" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-yellow-300" />;
      case 'trophy':
        return <Trophy className="w-6 h-6 text-yellow-300" />;
      default:
        return <Sparkles className="w-6 h-6 text-yellow-300" />;
    }
  };

  return (
    <section className="relative py-20 bg-[#02050c] border-t border-yellow-950/60 overflow-hidden">
      {/* Background Factory Yard with Yellow/Amber Rim Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/factory_yard_night_1791653290351.jpg"
          alt="معمل حدادة فهمي"
          className="w-full h-full object-cover opacity-15 filter contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-[#02050c]/85 to-[#02050c]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Neon Yellow Title Header: — لماذا تختار معمل حدادة فهمي؟ — */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-r from-transparent to-[#FFBE00]"></span>
            <h2 className="neon-title-yellow-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-2 text-center">
              لماذا تختار {FACTORY_INFO.nameAr}؟
            </h2>
            <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-l from-transparent to-[#FFBE00]"></span>
          </div>
          <p className="text-sm sm:text-base text-slate-300">
            شريكك الهندسي المعتمد لتجهيز خطوط كبس البلوك ومحطات الخلط في كركوك وكافة أرجاء العراق
          </p>
        </div>

        {/* 4 Pillars Grid with Neon Yellow Titles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              onClick={() => playNeonSelectSound()}
              className="group p-6 rounded-3xl bg-[#061022]/85 border border-yellow-500/25 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,214,0,0.35)] hover:-translate-y-1.5 cursor-pointer backdrop-blur-md flex flex-col items-center text-center"
            >
              {/* Glowing Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-yellow-950/90 border border-yellow-400/60 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,214,0,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,214,0,0.6)] transition-all">
                {getIcon(item.icon)}
              </div>

              {/* Neon Yellow Title */}
              <h3 className="neon-text-yellow text-lg sm:text-xl font-bold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
