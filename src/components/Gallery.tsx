import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronRight, ChevronLeft, MessageSquare, ZoomIn, Images } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/factoryData';
import { GalleryItem, GalleryItemView } from '../types';
import { playClickSound, playNeonSelectSound } from '../utils/sound';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'كابسات بلوك' | 'قوالب كابسات' | 'خباطات المركزية'>('كابسات بلوك');
  const [selectedMachine, setSelectedMachine] = useState<GalleryItem | null>(null);
  const [currentViewIdx, setCurrentViewIdx] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Category filter tabs: [كابسات بلوك] | [قوالب كابسات] | [خباطات المركزية]
  const filterTabs = [
    { id: 'كابسات بلوك', label: 'كابسات بلوك' },
    { id: 'قوالب كابسات', label: 'قوالب كابسات' },
    { id: 'خباطات المركزية', label: 'خباطات المركزية' },
  ] as const;

  type CategoryType = typeof filterTabs[number]['id'];

  // Filter STRICTLY by active category - Each section has its own 4 distinct items (NO 'all' aggregation)
  const filteredItems = GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleTabClick = (categoryId: CategoryType) => {
    playNeonSelectSound();
    setActiveCategory(categoryId);
  };

  // Open modal for a specific machine starting at view 0
  const handleOpenMachine = (item: GalleryItem) => {
    playNeonSelectSound();
    setSelectedMachine(item);
    setCurrentViewIdx(0);
  };

  const handleCloseModal = () => {
    playClickSound(1000);
    setSelectedMachine(null);
    setCurrentViewIdx(0);
  };

  // Get current machine's 5 views (or fallback to item itself)
  const currentViews: GalleryItemView[] = selectedMachine?.views && selectedMachine.views.length > 0
    ? selectedMachine.views
    : selectedMachine
    ? [{ title: selectedMachine.title, imageUrl: selectedMachine.imageUrl, description: selectedMachine.description }]
    : [];

  const totalViews = currentViews.length;

  // In RTL layout or user preference:
  // User asked: "کاتێک سەهمی لای چەپ داگرێت بچێتە وێنەی دووەم هەمان جیهاز"
  // (When they press the left arrow, go to the 2nd photo of the same machine!)
  const handleNextView = useCallback(() => {
    if (totalViews === 0) return;
    playClickSound(1400);
    setCurrentViewIdx((prev) => (prev + 1) % totalViews);
  }, [totalViews]);

  const handlePrevView = useCallback(() => {
    if (totalViews === 0) return;
    playClickSound(1400);
    setCurrentViewIdx((prev) => (prev - 1 + totalViews) % totalViews);
  }, [totalViews]);

  const handleSelectView = (idx: number) => {
    playClickSound(1200);
    setCurrentViewIdx(idx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNextView();
    } else if (diff < -45) {
      handlePrevView();
    }
    setTouchStartX(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMachine) return;
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowLeft') {
        // User requested left arrow advances to next photo of machine
        handleNextView();
      } else if (e.key === 'ArrowRight') {
        handlePrevView();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMachine, handleNextView, handlePrevView]);

  const activeView = currentViews[currentViewIdx] || {
    title: selectedMachine?.title || '',
    imageUrl: selectedMachine?.imageUrl || '',
    description: selectedMachine?.description || '',
  };

  return (
    <section id="gallery" className="relative py-20 bg-[#030712] border-t border-yellow-950/60 overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Background Yellow Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[96vw] 2xl:max-w-[95vw] 3xl:max-w-[92vw] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 relative z-10 safe-pad-x">
        
        {/* Neon Yellow Title Header: — معرض الصور — */}
        <div className="text-center max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto mb-6 sm:mb-10 md:mb-12 lg:mb-14 2xl:mb-18">
          <div className="flex items-center justify-center gap-2.5 sm:gap-5 md:gap-7">
            <span className="w-6 xs:w-8 sm:w-20 md:w-28 lg:w-40 xl:w-56 h-[2px] bg-gradient-to-r from-transparent to-[#FFBE00] shrink-0"></span>
            <h2 className="neon-title-yellow-hero text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black px-2 sm:px-4 tracking-tight leading-tight whitespace-nowrap">
              معرض الصور
            </h2>
            <span className="w-6 xs:w-8 sm:w-20 md:w-28 lg:w-40 xl:w-56 h-[2px] bg-gradient-to-l from-transparent to-[#FFBE00] shrink-0"></span>
          </div>
          {/* Subtitle in pure crisp white formatted into 2 lines */}
          <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-100 font-bold max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mt-2.5 sm:mt-4 md:mt-5 leading-relaxed md:leading-[1.85] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="block">لقطات ميدانية لنماذج كابسات البلوك، القوالب الهندسية،</span>
            <span className="block">والخباطات المركزية في معمل حدادة فهمي</span>
          </p>

          {/* Category Filter Tabs: Strictly ONE single row on Mobile, iPad & PC as requested */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-6 sm:mt-8 p-1 sm:p-1.5 bg-[#061022]/90 rounded-2xl border border-yellow-500/30 w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto shadow-[0_0_20px_rgba(255,214,0,0.12)]">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full py-2 sm:py-2.5 px-1 xs:px-2 sm:px-4 rounded-xl text-[11px] xs:text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap cursor-pointer flex items-center justify-center ${
                    isActive
                      ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-400/90 shadow-[0_0_15px_rgba(255,214,0,0.4)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid: 4 items per category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenMachine(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#061022]/90 border border-yellow-500/25 hover:border-yellow-400 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,214,0,0.35)] hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Container: Enlarged & Prominent */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/11] min-h-[270px] xs:min-h-[300px] sm:min-h-0 w-full overflow-hidden bg-[#02050c]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022] via-transparent to-transparent opacity-60"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-yellow-500/40 text-[11px] font-bold text-yellow-300 shadow-md">
                  {item.category}
                </div>

                {/* 5-Photo Indicator Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-yellow-400/60 flex items-center gap-1.5 text-xs font-bold text-yellow-300 shadow-[0_0_12px_rgba(255,214,0,0.3)]">
                  <Images className="w-3.5 h-3.5 text-yellow-400" />
                  <span>5 صور تفصيلية</span>
                </div>

                {/* Quick Zoom Icon */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-yellow-950/80 border border-yellow-400/50 flex items-center justify-center text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(255,214,0,0.3)]">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Caption & Description - Streamlined without bottom row */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center text-right border-t border-yellow-950/60">
                <h3 className="neon-text-yellow text-base sm:text-lg font-bold mb-1.5 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal: Strictly focuses on the 5 distinct photos of the clicked item */}
      {selectedMachine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-5 md:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg sm:max-w-3xl md:max-w-4xl lg:max-w-5xl my-auto bg-[#061022] border border-yellow-400/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_25px_rgba(255,214,0,0.25)] flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 border-b border-yellow-950/80 bg-[#02050c] shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm font-mono px-3 py-1 rounded-full bg-yellow-950/90 border border-yellow-400/60 text-yellow-300 font-bold shadow-[0_0_10px_rgba(255,214,0,0.2)]">
                  لقطة {currentViewIdx + 1} من {totalViews}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-300 hidden sm:inline">
                  {selectedMachine.category}
                </span>
                <span className="text-xs text-yellow-400/90 font-medium hidden md:inline">
                  (استعراض زوايا ولقطات المنتج)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCloseModal}
                  className="p-2 sm:p-2.5 rounded-full bg-slate-900 border border-yellow-500/40 text-yellow-300 hover:bg-yellow-950 hover:text-white transition-colors cursor-pointer"
                  aria-label="إغلاق المعرض"
                  title="إغلاق (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display: Responsive height so it never cuts off texts on iPad/landscape or mobile */}
            <div 
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full flex-1 min-h-[190px] max-h-[44vh] sm:max-h-[48vh] md:max-h-[52vh] bg-black/95 flex items-center justify-center overflow-hidden select-none shrink-0"
            >
              <img
                key={activeView.imageUrl}
                src={activeView.imageUrl}
                alt={activeView.title}
                className="w-full h-full max-h-[44vh] sm:max-h-[48vh] md:max-h-[52vh] object-contain select-none animate-in fade-in duration-200"
              />

              {/* Navigation Controls: Left Arrow & Right Arrow */}
              {/* Left Arrow Button: Advances to the next angle/photo */}
              <button
                onClick={handleNextView}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/80 hover:bg-yellow-500 hover:text-black border border-yellow-400/70 text-yellow-300 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 hover:scale-110 active:scale-95"
                title="الصورة التالية (سەهمی چەپ)"
                aria-label="الصورة التالية"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>

              {/* Right Arrow Button: Goes to previous angle/photo */}
              <button
                onClick={handlePrevView}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/80 hover:bg-yellow-500 hover:text-black border border-yellow-400/70 text-yellow-300 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 hover:scale-110 active:scale-95"
                title="الصورة السابقة (سەهمی ڕاست)"
                aria-label="الصورة السابقة"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* 5 Thumbnails Bar: Direct clickable previews of all 5 views */}
            <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#030914] border-t border-b border-yellow-950/60 flex items-center justify-center gap-1.5 sm:gap-3 overflow-x-auto shrink-0">
              {currentViews.map((view, idx) => {
                const isActive = idx === currentViewIdx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectView(idx)}
                    className={`relative rounded-xl overflow-hidden transition-all duration-200 cursor-pointer shrink-0 border ${
                      isActive
                        ? 'border-yellow-400 shadow-[0_0_15px_rgba(255,214,0,0.6)] scale-105 ring-2 ring-yellow-400'
                        : 'border-yellow-900/50 opacity-60 hover:opacity-100 hover:border-yellow-500/60'
                    }`}
                    title={view.title}
                  >
                    <div className="w-14 h-10 sm:w-20 sm:h-12 bg-black">
                      <img
                        src={view.imageUrl}
                        alt={view.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[10px] text-yellow-300 text-center font-bold">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Modal Caption & Actions: Always visible below the image and thumbnails */}
            <div className="p-3.5 sm:p-5 bg-[#040a16] text-right flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0 overflow-y-auto">
              <div className="space-y-1 min-w-0 flex-1">
                <h4 className="neon-text-yellow text-sm sm:text-base md:text-lg font-bold">
                  {selectedMachine.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
                  {selectedMachine.description}
                </p>
              </div>

              <a
                href={`https://wa.me/9647701514860?text=${encodeURIComponent('السلام عليكم معمل حدادة فهمي، استفسار بخصوص: ' + selectedMachine.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound(1600)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-400/70 text-emerald-300 text-xs font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 shrink-0 self-stretch sm:self-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>استفسار عن هذا المنتج</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
