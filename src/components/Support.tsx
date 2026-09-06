import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Headphones, MessageCircle, Phone, ArrowUpRight, Clock, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { EditableImage } from './EditableImage';

interface SupportProps {
  lang: Language;
}

export const Support: React.FC<SupportProps> = ({ lang }) => {
  const t = translations[lang].support;

  return (
    <section id="support" className="py-16 sm:py-24 bg-white text-[#001A3D] scroll-mt-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100">
            <Headphones className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#001A3D]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Top Multilingual Support Photo Upload Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-3xl p-3 sm:p-4 shadow-sm">
            <EditableImage
              storageKey="support_multilingual_banner"
              defaultSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Szama Rider 24/7 Multilingual Support & Dispatch Operations in Poland"
              badgeLabel="Upload Support Desk Photo"
              className="w-full h-52 sm:h-72 rounded-2xl shadow-inner object-cover"
            />
            <div className="flex flex-col sm:flex-row items-center justify-between px-2 pt-3 pb-1 text-xs gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                <span className="font-bold text-[#001A3D]">Warsaw Operations & Dispatch Office</span>
                <span className="text-gray-400 hidden sm:inline">• Native speakers on shift 24/7</span>
              </div>
              <span className="text-[11px] text-gray-400">
                Click camera button to upload custom support team photo
              </span>
            </div>
          </div>
        </div>

        {/* 7 Languages Pill Grid */}
        <div className="mb-12">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Direct Native Communication Without Language Barriers
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {t.languages.map((item: any, idx: number) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-full px-4 py-2 border border-gray-200/80 shadow-2xs flex items-center gap-2.5 hover:border-blue-300 transition-all"
              >
                <span className="text-base">{item.flag}</span>
                <span className="font-bold text-xs text-[#001A3D]">{item.name}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-gray-500 border border-gray-200">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Instant Channels Grid: WhatsApp & Phone Hotline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp Card in Signature Emerald */}
          <div className="bg-[#25D366] text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-100 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>Active 24/7 Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {t.whatsappTitle}
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                {t.whatsappSubtitle}
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20want%20to%20register%20as%20a%20courier."
                target="_blank"
                rel="noopener noreferrer"
                id="support-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-white text-[#075E54] hover:bg-emerald-50 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] text-transparent" />
                <span>{t.chatNow} (+48 883 976 989)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Phone Dispatch Card in Signature Navy */}
          <div className="bg-[#001A3D] text-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-gray-300">
                <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>On-Shift Direct Line</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {t.phoneDispatch}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.phoneSubtitle}
              </p>
            </div>

            <div className="pt-6">
              <a
                href="tel:+48883976989"
                id="support-phone-cta"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/50 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{t.callNow}</span>
                <span className="font-mono text-xs text-blue-100">+48 883 976 989</span>
              </a>
            </div>
          </div>
        </div>

        {/* Direct Courier Helpline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.helplineCards.map((card: any, idx: number) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB]">
                  Specialized Desk
                </div>
                <h4 className="text-base font-bold text-[#001A3D]">{card.role}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{card.detail}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center justify-between">
                <span className="font-bold text-sm text-[#001A3D]">{card.contact}</span>
                {card.contact.includes('@') ? (
                  <a
                    href={`mailto:${card.contact}`}
                    className="text-xs font-semibold text-[#2563EB] hover:underline"
                  >
                    Email Desk
                  </a>
                ) : (
                  <a
                    href={`tel:${card.contact.replace(/\s+/g, '')}`}
                    className="text-xs font-semibold text-[#2563EB] hover:underline"
                  >
                    Call Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Official Direct Community & Social Channels */}
        <div className="mt-10 p-6 rounded-3xl bg-[#F8FAFC] border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] inline-block"></span>
              <h4 className="font-bold text-[#001A3D] text-sm">
                Official Szama Rider Community & Registration Channels
              </h4>
            </div>
            <p className="text-xs text-gray-500">
              Connect directly on WhatsApp, Facebook, or Instagram for instant updates and real courier stories.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="https://wa.me/48883976989"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#075E54] border border-emerald-200 text-xs font-bold transition-all shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-transparent" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61593489300475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1E40AF] border border-blue-200 text-xs font-bold transition-all shadow-2xs"
            >
              <Facebook className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/szamarider/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 text-xs font-bold transition-all shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>Instagram (@szamarider)</span>
            </a>

            <a
              href="https://tally.so/r/Y5A4Bz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#001A3D] hover:bg-blue-900 text-white text-xs font-bold transition-all shadow-2xs"
            >
              <span>Tally Form</span>
              <ExternalLink className="w-3 h-3 text-blue-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
