import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Clock } from 'lucide-react';
import { Language } from '../types';

interface WhatsAppWidgetProps {
  lang: Language;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    'Hello! I want to start delivering across multiple apps with Szama Rider.',
    'I need help with my Karta Pobytu & Załącznik nr 1.',
    'Can I rent an E-bike from Szama Rider?',
    'Tell me how the 30 PLN weekly fee works.',
  ];

  const handleOpenWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/48883976989?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Pop-up chat box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in text-[#001A3D]">
          {/* Clean Header */}
          <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-base text-white">
                  SR
                </div>
                <span className="w-3 h-3 rounded-full bg-white border-2 border-[#25D366] absolute bottom-0 right-0"></span>
              </div>
              <div>
                <h5 className="font-bold text-sm">Szama Rider Dispatch</h5>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Typically replies in 5 minutes
                </p>
              </div>
            </div>

            <button
              type="button"
              id="close-whatsapp-widget"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#F8FAFC] text-xs">
            {/* Assistant message bubble */}
            <div className="bg-white rounded-2xl rounded-tl-none p-3.5 shadow-sm border border-gray-100 space-y-1.5 max-w-[90%]">
              <span className="font-bold text-[11px] text-[#25D366] block">
                Szama Rider Support 🇵🇱
              </span>
              <p className="text-gray-600 leading-relaxed">
                👋 Hello! How can we assist your courier journey in Poland today? Pick a quick question or message us directly:
              </p>
              <span className="text-[10px] text-gray-400 text-right block">Just now</span>
            </div>

            {/* Quick action chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                Quick Questions:
              </span>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOpenWhatsApp(msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-gray-200 hover:border-[#2563EB] hover:bg-blue-50/50 text-[11px] text-[#001A3D] font-medium transition-colors flex items-center justify-between group shadow-2xs"
                >
                  <span className="truncate">{msg}</span>
                  <Send className="w-3 h-3 text-gray-400 group-hover:text-[#2563EB] shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Direct Action */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between gap-2">
            <a
              href="tel:+48883976989"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-gray-600 hover:text-[#001A3D] rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Call Hotline</span>
            </a>

            <button
              type="button"
              onClick={() => handleOpenWhatsApp('Hello Szama Rider!')}
              className="flex-1 py-2 px-3 bg-[#25D366] hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
              <span>Open WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        id="btn-toggle-whatsapp-floating"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white shadow-xl shadow-emerald-200 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Open WhatsApp Chat"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-transparent" />
        <span className="font-bold text-xs tracking-wide hidden sm:inline">
          WhatsApp 24/7
        </span>
      </button>
    </div>
  );
};
