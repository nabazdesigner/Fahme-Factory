import React from 'react';
import { FACTORY_INFO } from '../data/factoryData';
import { playClickSound } from '../utils/sound';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Social Media Channels as specified:
  // YouTube: Official Red (#FF0000)
  // TikTok: Official TikTok styling (Dark with iconic glyph)
  // Facebook: Official Blue (#1877F2)
  // WhatsApp: Official Green (#25D366)
  const socialChannels = [
    {
      name: 'YouTube',
      url: (FACTORY_INFO as any).youtubeUrl || 'https://youtube.com/@fahmehadad4584?si=z80TRopKwrBW-8jM',
      bgColor: 'bg-[#FF0000] border-[#FF0000]',
      shadowColor: 'hover:shadow-[0_0_20px_rgba(255,0,0,0.65)] hover:border-red-400',
      textColor: 'text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: (FACTORY_INFO as any).tiktokUrl || 'https://www.tiktok.com/@fahmehadad?_r=1&_t=ZS-9AT88wwPkFW',
      bgColor: 'bg-[#000000] border-slate-700',
      shadowColor: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:border-white',
      textColor: 'text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: FACTORY_INFO.facebookUrl,
      bgColor: 'bg-[#1877F2] border-[#1877F2]',
      shadowColor: 'hover:shadow-[0_0_20px_rgba(24,119,242,0.65)] hover:border-blue-300',
      textColor: 'text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: FACTORY_INFO.whatsappLink,
      bgColor: 'bg-[#25D366] border-[#25D366]',
      shadowColor: 'hover:shadow-[0_0_20px_rgba(37,211,102,0.65)] hover:border-emerald-300',
      textColor: 'text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#01040a] border-t border-yellow-950/80 px-4 pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-14 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-32 text-xs safe-pad-x safe-pad-bottom">
      <div className="w-full max-w-[96vw] 2xl:max-w-[95vw] 3xl:max-w-[92vw] mx-auto flex flex-col items-center justify-center text-center gap-4 sm:gap-5">
        
        {/* 1. Logos placed ABOVE the text as explicitly requested */}
        <div className="flex items-center justify-center gap-3.5 sm:gap-5 md:gap-6 mb-1">
          {socialChannels.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound(1400)}
              aria-label={social.name}
              title={social.name}
              className={`w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-15 lg:h-15 rounded-full border ${social.bgColor} ${social.textColor} ${social.shadowColor} flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_4px_14px_rgba(0,0,0,0.6)]`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* 2. Two Rows of Text - Sized and Formatted cleanly Row-by-Row on Mobile, iPad, PC & TV */}
        <div className="space-y-2 sm:space-y-3.5 w-full max-w-4xl sm:max-w-5xl md:max-w-6xl 2xl:max-w-7xl mx-auto px-2 sm:px-4 mb-2 lg:mb-4">
          {/* First Row: Golden Title Yellow - Kept together in one line with no orphaned year */}
          <p className="neon-title-yellow-hero text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl 2xl:text-3xl font-black tracking-wide leading-relaxed">
            <span className="whitespace-nowrap inline-block">
              {FACTORY_INFO.nameAr} - جميع الحقوق محفوظة © {currentYear}
            </span>
          </p>

          {/* Second Row: Soft white color, clean continuous row without location */}
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-slate-200 font-bold leading-relaxed max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto">
            <span className="whitespace-nowrap inline-block">
              صناعة كابسات البلوك، الخباطة المركزية، والسايلوات
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};
