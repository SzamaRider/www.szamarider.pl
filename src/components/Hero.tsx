import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { EditableImage } from './EditableImage';
import { ArrowRight, Calculator, FileCheck, CheckCircle2, MessageCircle, ExternalLink, MapPin, Shield } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenRegister: () => void;
  onOpenChecklist: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenRegister,
  onOpenChecklist,
}) => {
  const t = translations[lang].hero;
  const [heroCardTab, setHeroCardTab] = useState<'settlement' | 'earnings'>('settlement');

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const platforms = [
    { name: 'Multi-App Fleet Support', badge: 'All Apps' },
    { name: 'Unified Weekly Settlements', badge: 'Automated' },
    { name: 'Single 30 PLN Partner Fee', badge: 'Fixed' },
    { name: 'Bikes & E-Vehicles Rental', badge: 'Equipped' },
    { name: '24-Hour Fast Onboarding', badge: 'Guaranteed' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] text-[#001A3D] pt-10 sm:pt-14 pb-16 lg:pb-20 border-b border-gray-100">
      {/* Subtle clean ambient accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Narrative & Clean Minimalism CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tag Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                <span>{t.badge}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200 shadow-2xs">
                <Shield className="w-3 h-3 text-emerald-600" />
                <span>NIP: 1133210688 • REGON: 545547185</span>
              </div>
            </div>

            {/* Primary Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#001A3D]">
                <span>{t.titlePrimary} </span>
                <span className="text-[#2563EB]">{t.titleAccent}</span>
              </h1>
            </div>

            {/* Narrative Subheading */}
            <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-xl font-normal">
              {t.subheading}
            </p>

            {/* High-Conversion CTAs */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="https://tally.so/r/Y5A4Bz"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-primary-register-btn"
                  className="px-7 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base tracking-wide uppercase shadow-lg shadow-blue-200 active:scale-[0.98] transition-all flex items-center gap-2 group"
                >
                  <span>{t.ctaPrimary}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct WhatsApp Rental Bike Apply Button */}
                <a
                  href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20want%20to%20apply%20for%20a%20Rental%20Bike%20for%20food%20delivery."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-rental-bike-whatsapp-btn"
                  className="px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#075E54] font-bold text-base border-2 border-emerald-200 hover:border-emerald-300 transition-all flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] fill-current" />
                  <span>Rent a Bike (WhatsApp)</span>
                </a>

                <button
                  type="button"
                  id="hero-calculator-btn"
                  onClick={scrollToCalculator}
                  className="px-5 py-4 rounded-xl bg-white hover:bg-gray-50 text-[#001A3D] font-bold text-base border-2 border-gray-200 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Calculator className="w-5 h-5 text-[#2563EB]" />
                  <span>{t.ctaSecondary}</span>
                </button>

                <button
                  type="button"
                  id="hero-doc-checklist-btn"
                  onClick={onOpenChecklist}
                  className="px-4 py-4 rounded-xl text-gray-500 hover:text-[#2563EB] font-semibold text-sm transition-all flex items-center gap-1.5"
                >
                  <FileCheck className="w-4 h-4 text-gray-400" />
                  <span>{t.ctaDocuments}</span>
                </button>
              </div>

              {/* Activation SLA Promise */}
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>{t.activationPromise}</span>
              </div>
            </div>

            {/* Supported Platforms Strip */}
            <div className="pt-4 border-t border-gray-100 space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block">
                {t.supportedPlatforms}
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {platforms.map((p) => (
                  <div
                    key={p.name}
                    className="px-3.5 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-700 flex items-center gap-2 shadow-2xs hover:border-gray-300 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                    <span>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalism Partner Settlement Card & Photo Block */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft emerald ambient blur behind card */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#25D366]/15 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none"></div>

              {/* Clean Minimalism Main Settlement Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-2xl relative z-10 space-y-5">
                {/* Switcher tabs */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setHeroCardTab('settlement')}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        heroCardTab === 'settlement'
                          ? 'bg-white text-[#001A3D] shadow-xs'
                          : 'text-gray-500 hover:text-[#001A3D]'
                      }`}
                    >
                      Fixed Fee
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroCardTab('earnings')}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        heroCardTab === 'earnings'
                          ? 'bg-white text-[#2563EB] shadow-xs'
                          : 'text-gray-500 hover:text-[#2563EB]'
                      }`}
                    >
                      Weekly Payout Sample
                    </button>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#075E54] border border-emerald-200">
                    2026 Fleet Terms
                  </span>
                </div>

                {heroCardTab === 'settlement' ? (
                  <>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">
                        Fleet Management Settlement
                      </div>
                      <div className="text-4xl sm:text-5xl font-black text-[#001A3D] tracking-tight">
                        30 PLN <span className="text-lg sm:text-xl text-gray-400 font-normal">/week</span>
                      </div>
                    </div>

                    {/* Feature Bullet List */}
                    <ul className="space-y-3.5 border-t border-gray-100 pt-5">
                      <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                        <span>Fixed Fee - No Percentage or Hidden Deductions</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                        <span>Weekly Direct Bank Transfers (Every Tuesday)</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                        <span>Automated Monthly Pay Slips via Email</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                        <span>Legal Umowa Zlecenie & TRC Immigration Ready</span>
                      </li>
                    </ul>
                  </>
                ) : (
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase font-bold text-gray-400">Sample Active Week</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">35 hrs delivered</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2.5 text-xs">
                      <div className="flex justify-between font-semibold text-gray-700">
                        <span>Gross Courier Earnings:</span>
                        <span className="font-bold text-[#001A3D]">1,950.00 PLN</span>
                      </div>
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>Platform Commission Cut:</span>
                        <span className="font-bold">0.00 PLN (0%)</span>
                      </div>
                      <div className="flex justify-between text-gray-600 font-semibold">
                        <span>Szama Rider Fleet Fee:</span>
                        <span className="font-bold text-[#2563EB]">-30.00 PLN</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200 flex justify-between items-baseline">
                        <span className="font-bold text-[#001A3D]">Tuesday Net Transfer:</span>
                        <span className="text-xl font-black text-emerald-600">1,920.00 PLN</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-400 text-center">
                      Students under 26 enjoy 0% income tax in Poland. Non-students receive full ZUS registration.
                    </p>
                  </div>
                )}

                {/* Interactive Custom Cover Photo block */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="rounded-2xl overflow-hidden border border-gray-100 relative group">
                    <EditableImage
                      storageKey="hero_cover"
                      defaultSrc="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80"
                      alt="Szama Rider Courier in Warsaw Poland"
                      className="w-full h-44 sm:h-48 object-cover"
                      badgeLabel="Change Cover Photo"
                    />
                    <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                        Warszawa & Nationwide Fleet
                      </span>
                      <span className="text-[#2563EB] font-bold text-[11px]">
                        24H SLA Guaranteed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Metrics Counter Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-[#2563EB]">
              {t.statActivation}
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-600 mt-1">
              {t.statActivationLabel}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-[#25D366]">
              {t.statFee}
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-600 mt-1">
              {t.statFeeLabel}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-[#001A3D]">
              {t.statLanguages}
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-600 mt-1">
              {t.statLanguagesLabel}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl sm:text-3xl font-black text-[#2563EB]">
              {t.statLegal}
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-600 mt-1">
              {t.statLegalLabel}
            </div>
          </div>
        </div>

        {/* Nationwide Polish Cities Strip */}
        <div className="mt-6 bg-white border border-gray-200/70 rounded-2xl p-3 sm:p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#001A3D]">
            <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
            <span>Active Fleet Operations Across Poland:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-gray-600">
            {[
              'Warszawa',
              'Kraków',
              'Wrocław',
              'Gdańsk',
              'Poznań',
              'Łódź',
              'Katowice',
              'Szczecin',
              'Lublin',
              'Bydgoszcz',
            ].map((city, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 bg-[#F8FAFC] border border-gray-200/70 px-2.5 py-1 rounded-lg hover:border-blue-300 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
