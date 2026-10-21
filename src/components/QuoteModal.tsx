import React, { useState, useEffect } from 'react';
import { X, Calculator, MessageSquare, CheckCircle, Send, Sparkles } from 'lucide-react';
import { PRODUCTS, FACTORY_INFO } from '../data/factoryData';
import { playClickSound, playSuccessSound } from '../utils/sound';

interface QuoteModalProps {
  isOpen: boolean;
  initialProduct?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  initialProduct,
  onClose,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || PRODUCTS[0].name);
  const [quantity, setQuantity] = useState('1000');
  const [unit, setUnit] = useState('قطعة');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('كركوك');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccessSound();
    setSubmitted(true);

    const message = encodeURIComponent(
      `السلام عليكم معمل فهمي حداد،\nأرغب في الحصول على عرض سعر:\n• المنتج: ${selectedProduct}\n• الكمية المطلوبة: ${quantity} ${unit}\n• الاسم: ${customerName}\n• رقم الهاتف: ${phone}\n• المدينة/الموقع: ${city}\n• ملاحظات إضافية: ${notes || 'لا يوجد'}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/9647701514860?text=${message}`, '_blank');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative max-w-xl w-full bg-[#061224] border border-cyan-400/60 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.35)] flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-cyan-950/80 bg-[#040812]">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            <h3 className="neon-text-cyan text-base sm:text-lg font-bold">
              طلب عرض سعر فوري
            </h3>
          </div>
          <button
            onClick={() => {
              playClickSound(1000);
              onClose();
            }}
            className="p-1.5 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-6 text-right">
          {submitted ? (
            <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-400/60 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
              <h4 className="neon-title-hero text-xl font-bold">تم تجهيز طلب عرض السعر!</h4>
              <p className="text-sm text-slate-300">
                جاري فتح تطبيق واتساب للتواصل مباشرة مع إدارة معمل فهمي حداد لتأكيد السعر وموعد التوريد.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-white neon-btn-primary"
              >
                إغلاق النافذة
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  اختر المنتج المطلوب:
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => {
                    playClickSound(1400);
                    setSelectedProduct(e.target.value);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#030713] border border-cyan-500/40 text-cyan-100 text-sm focus:border-cyan-400 focus:outline-none text-right font-semibold"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name} className="bg-[#061224] text-white">
                      {p.name} - ({p.nameEn})
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity & Unit */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    الكمية التقريبية:
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030713] border border-cyan-500/40 text-white text-sm focus:border-cyan-400 focus:outline-none text-right font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    وحدة القياس:
                  </label>
                  <select
                    value={unit}
                    onChange={(e) => {
                      playClickSound(1400);
                      setUnit(e.target.value);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030713] border border-cyan-500/40 text-cyan-100 text-sm focus:border-cyan-400 focus:outline-none text-right"
                  >
                    <option value="قطعة" className="bg-[#061224]">قطعة / بلوكة</option>
                    <option value="متر مربع" className="bg-[#061224]">متر مربع (إنترلوك/بلاط)</option>
                    <option value="متر طولي" className="bg-[#061224]">متر طولي (بردورات)</option>
                    <option value="ماكينة كاملة" className="bg-[#061224]">ماكينة / كابسة</option>
                  </select>
                </div>
              </div>

              {/* Customer Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    اسم العميل أو الشركة:
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="الاسم الكريم"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030713] border border-cyan-500/40 text-white text-sm focus:border-cyan-400 focus:outline-none text-right"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    رقم الهاتف:
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0770xxxxxxx"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030713] border border-cyan-500/40 text-white text-sm focus:border-cyan-400 focus:outline-none text-right font-mono"
                  />
                </div>
              </div>

              {/* Delivery City */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  مكان التوصيل / المشروع:
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="كركوك، أربيل، السليمانية، بغداد..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#030713] border border-cyan-500/40 text-white text-sm focus:border-cyan-400 focus:outline-none text-right"
                />
              </div>

              {/* Extra Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  ملاحظات أو مواصفات خاصة:
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="سماكة معينة، ألوان محددة، أو استفسار عن مواعيد التحميل..."
                  className="w-full px-4 py-2 rounded-xl bg-[#030713] border border-cyan-500/40 text-white text-sm focus:border-cyan-400 focus:outline-none text-right resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-black text-white neon-btn-primary shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-300" />
                  <span>إرسال الطلب ومحادثة المعمل واتساب</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
