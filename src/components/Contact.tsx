import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Check, Copy, ExternalLink } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';
import { playClickSound } from '../utils/sound';
import { Location3DMap } from './Location3DMap';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);

  const handlePhoneClick = () => {
    playClickSound(1600);
  };

  const handleEmailClick = () => {
    playClickSound(1600);
  };

  const copyToClipboard = (text: string, type: 'phone' | 'email', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playClickSound(1800);
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="relative py-20 bg-[#02050c] border-t border-yellow-950/60 overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Background Yellow Ambient Glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[96vw] 2xl:max-w-[95vw] 3xl:max-w-[92vw] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 relative z-10 safe-pad-x">
        
        {/* Neon Yellow Title Header: — الموقع والتواصل — */}
        <div className="text-center max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-14 lg:mb-16 2xl:mb-20">
          <div className="flex items-center justify-center gap-2.5 sm:gap-5 md:gap-7">
            <span className="w-6 xs:w-8 sm:w-20 md:w-28 lg:w-40 xl:w-56 h-[2px] bg-gradient-to-r from-transparent to-[#FFBE00] shrink-0"></span>
            <h2 className="neon-title-yellow-hero text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black px-2 sm:px-4 tracking-tight leading-tight whitespace-nowrap">
              الموقع والتواصل
            </h2>
            <span className="w-6 xs:w-8 sm:w-20 md:w-28 lg:w-40 xl:w-56 h-[2px] bg-gradient-to-l from-transparent to-[#FFBE00] shrink-0"></span>
          </div>
          <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-100 font-bold max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mt-2.5 sm:mt-4 md:mt-5 leading-relaxed md:leading-[1.85] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="block">موقعنا في كركوك - حي صناعي لخدمتكم وتجهيز كافة مشاريعكم</span>
            <span className="block">العمرانية بأفضل المواصفات والأسعار المباشرة</span>
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Advanced 3D Interactive Location Map Card with Direct Google Maps Link */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#061022]/90 border border-yellow-500/25 flex flex-col justify-between shadow-[0_0_25px_rgba(255,214,0,0.08)] overflow-hidden">
            {/* Centered Top Title with NO badge and NO icon as requested */}
            <div className="text-center mb-4">
              <h3 className="neon-text-yellow text-lg sm:text-xl font-bold">
                موقع المعمل في كركوك
              </h3>
            </div>

            {/* Advanced 3D Location Map Simulation with Direct Google Maps Navigation */}
            <Location3DMap />

            {/* Bottom info & direct link button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
              <a
                href={FACTORY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound(1400)}
                className="text-xs text-slate-300 hover:text-yellow-300 transition-colors flex items-center gap-2 font-medium"
              >
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{FACTORY_INFO.locationDetails}</span>
              </a>

              <a
                href={FACTORY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound(1400)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-yellow-500/15 hover:bg-yellow-500/25 border border-yellow-500/40 text-yellow-200 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(255,214,0,0.15)] shrink-0"
              >
                <span>فتح في Google Maps</span>
                <Navigation className="w-3.5 h-3.5 text-yellow-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Direct Contact Info (Phone & Email) */}
          <div id="contact-card" className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#061022]/90 border border-yellow-500/25 flex flex-col justify-between shadow-[0_0_25px_rgba(255,214,0,0.08)] scroll-mt-24">
            <div>
              {/* Centered Title with NO 'متاح لخدمتكم' badge as requested */}
              <div className="text-center mb-6">
                <h3 className="neon-text-yellow text-lg sm:text-xl font-bold">
                  الاتصال المباشر والمراسلة
                </h3>
              </div>

              {/* Contact Actions Grid */}
              <div className="space-y-4">
                {/* Official Direct Call Button: Green Icon Circle, Rudaw Bold Font, Exactly 0770 151 4860 */}
                <div className="relative group p-4 rounded-2xl bg-[#081428] border border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all">
                  <a
                    href={`tel:${FACTORY_INFO.phoneRaw}`}
                    target="_top"
                    onClick={handlePhoneClick}
                    title="اضغط للاتصال المباشر برقم الهاتف"
                    className="block cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      {/* Call Icon Button: Official Vibrant Emerald/Green */}
                      <div className="w-11 h-11 rounded-full bg-emerald-500/25 flex items-center justify-center border border-emerald-400/80 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.35)] group-hover:scale-110 group-hover:bg-emerald-500/40 group-hover:border-emerald-300 transition-all shrink-0">
                        <Phone className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                      </div>

                      {/* Rudaw Bold Font for Phone: 0770 151 4860 */}
                      <span 
                        dir="ltr" 
                        style={{ fontFamily: "'Rudaw', sans-serif" }}
                        className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors tracking-wider"
                      >
                        0770 151 4860
                      </span>
                    </div>
                  </a>

                  {/* Action row with direct call link and copy button */}
                  <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-800/80 mt-1">
                    <button
                      type="button"
                      onClick={(e) => copyToClipboard(FACTORY_INFO.phoneRaw, 'phone', e)}
                      className="text-slate-400 hover:text-emerald-300 flex items-center gap-1 transition-colors px-1 py-0.5 rounded cursor-pointer"
                      title="نسخ رقم الهاتف"
                    >
                      {copiedType === 'phone' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">تم النسخ</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>نسخ الرقم</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`tel:${FACTORY_INFO.phoneRaw}`}
                      target="_top"
                      onClick={handlePhoneClick}
                      className="text-slate-400 hover:text-emerald-300 font-medium"
                    >
                      اتصال مباشر / هاتف
                    </a>
                  </div>
                </div>

                {/* Official Gmail Button: Matching Same Font Size as Phone, Rudaw Bold Font, Click opens Gmail */}
                <div className="relative group p-4 rounded-2xl bg-[#081428] border border-red-500/40 hover:border-red-400 hover:shadow-[0_0_20px_rgba(234,67,53,0.35)] transition-all">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${FACTORY_INFO.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleEmailClick}
                    title="اضغط لفتح تطبيق Gmail وإرسال رسالة مباشرة"
                    className="block cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      {/* Official Company Gmail Icon */}
                      <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-red-500/60 group-hover:border-red-400 group-hover:bg-white/20 group-hover:scale-110 shadow-[0_0_12px_rgba(234,67,53,0.3)] transition-all shrink-0">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            fill="#EA4335"
                            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.146C21.69 2.28 24 3.434 24 5.457z"
                          />
                        </svg>
                      </div>

                      {/* EXACT SAME SIZE AS PHONE (text-base sm:text-lg) in Rudaw Bold font */}
                      <span 
                        dir="ltr"
                        style={{ fontFamily: "'Rudaw', sans-serif" }}
                        className="text-base sm:text-lg font-bold text-white group-hover:text-red-300 transition-colors truncate tracking-wide"
                      >
                        {FACTORY_INFO.email}
                      </span>
                    </div>
                  </a>

                  {/* Action row with open in Gmail / default Mail / Copy */}
                  <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-800/80 mt-1">
                    <button
                      type="button"
                      onClick={(e) => copyToClipboard(FACTORY_INFO.email, 'email', e)}
                      className="text-slate-400 hover:text-red-300 flex items-center gap-1 transition-colors px-1 py-0.5 rounded cursor-pointer"
                      title="نسخ البريد الإلكتروني"
                    >
                      {copiedType === 'email' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">تم النسخ</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>نسخ الإيميل</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${FACTORY_INFO.email}`}
                        onClick={() => playClickSound(1600)}
                        className="text-slate-400 hover:text-red-300 text-[10px]"
                        title="فتح في تطبيق البريد العادي"
                      >
                        تطبيق Mail
                      </a>
                      <span className="text-slate-600">|</span>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${FACTORY_INFO.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleEmailClick}
                        className="text-red-400 hover:text-red-300 font-bold flex items-center gap-0.5"
                      >
                        <span>فتح في Gmail</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <a
              href={FACTORY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound(1800)}
              className="mt-6 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-400/60 text-emerald-300 text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>محادثة واتساب سريعة</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
