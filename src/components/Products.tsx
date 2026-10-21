import React, { useState } from 'react';
import { MessageSquare, Info } from 'lucide-react';
import { PRODUCTS } from '../data/factoryData';
import { Product } from '../types';
import { playClickSound, playNeonSelectSound } from '../utils/sound';

interface ProductsProps {
  onSelectProduct: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({
  onSelectProduct,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'block-machines' | 'central-mixers'>('all');

  // Exact categories specified by user (اشكال بلوك removed as requested)
  const filterTabs = [
    { id: 'all', label: 'جميع المنتجات' },
    { id: 'block-machines', label: 'كابسات بلوك' },
    { id: 'central-mixers', label: 'خباطات المركزية' },
  ];

  // Exclude block-shapes products and filter by selected tab
  const baseProducts = PRODUCTS.filter((p: Product) => p.category !== ('block-shapes' as any));

  const filteredProducts = activeCategory === 'all'
    ? baseProducts
    : baseProducts.filter((p: Product) => p.category === activeCategory);

  const handleTabClick = (categoryId: 'all' | 'block-machines' | 'central-mixers') => {
    playNeonSelectSound();
    setActiveCategory(categoryId);
  };

  return (
    <section id="products" className="relative py-20 bg-[#030712] border-t border-yellow-950/60 overflow-hidden">
      {/* Background Yellow Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Neon Yellow Title: — منتجاتنا — */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-r from-transparent to-[#FFBE00]"></span>
            <h2 className="neon-title-yellow-hero text-3xl sm:text-4xl md:text-5xl font-black px-2">
              منتجاتنا
            </h2>
            <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-l from-transparent to-[#FFBE00]"></span>
          </div>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            ننتج مجموعة متكاملة من كابسات البلوك الهيدروليكية، الخباطات المركزية، وصوامع الأسمنت والسايلوات
          </p>

          {/* Filter Tabs matching exact user requirements (اشكال بلوك removed) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#061022]/90 rounded-2xl border border-yellow-500/30 max-w-xl mx-auto shadow-[0_0_15px_rgba(255,214,0,0.1)]">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id as typeof activeCategory)}
                  className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-400/80 shadow-[0_0_15px_rgba(255,214,0,0.35)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product: Product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#061022]/85 border border-yellow-500/25 hover:border-yellow-400 p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,214,0,0.3)] hover:-translate-y-1.5 backdrop-blur-md"
            >
              {/* Product Visual Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#02050c] mb-4 border border-yellow-950 group-hover:border-yellow-500/50 transition-colors">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-transparent to-transparent opacity-60"></div>
                
                {/* Category Tag */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-sm border border-yellow-500/40 text-[11px] font-bold text-yellow-300">
                  {product.category === 'block-machines' 
                    ? 'كابسة بلوك' 
                    : 'خباطة مركزية'}
                </div>
              </div>

              {/* Product Details with Neon Yellow Title */}
              <div className="flex-1 flex flex-col text-right">
                <h3 className="neon-text-yellow text-lg sm:text-xl font-black mb-2 leading-snug">
                  {product.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Specs Summary */}
                <div className="mt-auto pt-3 border-t border-yellow-950/80 space-y-2 text-xs text-slate-400 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-yellow-300 font-semibold text-[11px] truncate max-w-[200px]">
                      {product.specs.capacity}
                    </span>
                    <span className="text-slate-400 shrink-0">المواصفات:</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 text-[11px] truncate max-w-[200px]">
                      {product.specs.dimensions}
                    </span>
                    <span className="text-slate-400 shrink-0">النوع / الحجم:</span>
                  </div>
                </div>
              </div>

              {/* Clean Actions without ANY "طلب سعر" */}
              <div className="flex items-center gap-2 pt-2 border-t border-yellow-950/60">
                {/* Details Button */}
                <button
                  onClick={() => {
                    playNeonSelectSound();
                    onSelectProduct(product);
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-yellow-500/30 hover:border-yellow-400 text-center flex items-center justify-center gap-1.5 transition-all"
                >
                  <Info className="w-4 h-4 text-yellow-400" />
                  <span>عرض المواصفات الفنية</span>
                </button>

                {/* Direct WhatsApp Contact Button */}
                <a
                  href={`https://wa.me/9647701514860?text=${encodeURIComponent('السلام عليكم معمل حدادة فهمي، أرغب في الاستفسار عن: ' + product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound(1600)}
                  className="p-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 transition-colors"
                  title="استفسار مباشر عبر واتساب"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
