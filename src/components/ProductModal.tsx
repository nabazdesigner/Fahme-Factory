import React from 'react';
import { X, Check, MessageSquare, Shield, Ruler } from 'lucide-react';
import { Product } from '../types';
import { FACTORY_INFO } from '../data/factoryData';
import { playClickSound } from '../utils/sound';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const waMessage = encodeURIComponent(
    `السلام عليكم معمل حدادة فهمي، أود الاستفسار عن تفاصيل ومواصفات المنتج: ${product.name} (${product.nameEn})`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative max-w-2xl w-full bg-[#061022] border border-yellow-400/60 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,214,0,0.25)] flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-yellow-950/80 bg-[#02050c]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-yellow-300 px-2.5 py-1 rounded-full bg-yellow-950 border border-yellow-500/40">
              {product.nameEn}
            </span>
          </div>
          <button
            onClick={() => {
              playClickSound(1000);
              onClose();
            }}
            className="p-1.5 rounded-full bg-slate-900 border border-yellow-500/40 text-yellow-300 hover:bg-yellow-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 text-right">
          
          {/* Image */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-yellow-500/40 bg-black">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-3 right-4">
              <h3 className="neon-title-yellow-hero text-2xl font-black">{product.name}</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            {product.description}
          </p>

          {/* Specifications Grid */}
          <div className="bg-[#02050c] p-4 rounded-2xl border border-yellow-950 space-y-3">
            <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider flex items-center justify-end gap-1.5">
              <span>المواصفات الفنية والهندسية</span>
              <Ruler className="w-4 h-4 text-yellow-400" />
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#081428] border border-yellow-500/20">
                <span className="text-slate-400 block mb-1">النوع / الأبعاد:</span>
                <span className="font-mono text-white font-bold">{product.specs.dimensions}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#081428] border border-yellow-500/20">
                <span className="text-slate-400 block mb-1">الطاقة / السعة الإنتاجية:</span>
                <span className="text-yellow-300 font-bold">{product.specs.capacity}</span>
              </div>
              {product.specs.power && (
                <div className="p-3 rounded-xl bg-[#081428] border border-yellow-500/20 sm:col-span-2">
                  <span className="text-slate-400 block mb-1">القدرة الحركية والمحركات:</span>
                  <span className="text-slate-200 font-semibold">{product.specs.power}</span>
                </div>
              )}
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2.5 flex items-center justify-end gap-1.5">
              <span>مميزات التصنيع في معمل حدادة فهمي</span>
              <Shield className="w-4 h-4 text-yellow-400" />
            </h4>
            <div className="space-y-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-center justify-end gap-2 text-xs sm:text-sm text-slate-300">
                  <span>{feat}</span>
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions: Clean WhatsApp Action without "طلب سعر" */}
        <div className="p-4 sm:p-5 border-t border-yellow-950/80 bg-[#02050c] flex items-center justify-between">
          <a
            href={`https://wa.me/9647701514860?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound(1600)}
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-400/60 text-emerald-300 text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>استفسار فوري عن هذا المنتج عبر واتساب</span>
          </a>
        </div>

      </div>
    </div>
  );
};
