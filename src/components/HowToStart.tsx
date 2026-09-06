import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';

interface HowToStartProps {
  lang: Language;
  onOpenRegister: () => void;
}

export const HowToStart: React.FC<HowToStartProps> = ({ lang, onOpenRegister }) => {
  const t = translations[lang].howItWorks;

  const steps = [
    {
      num: '01',
      category: 'Onboarding',
      title: t.step1Title,
      desc: t.step1Desc,
      timing: 'Takes 2 minutes',
    },
    {
      num: '02',
      category: 'Contract',
      title: t.step2Title,
      desc: t.step2Desc,
      timing: 'Delivered in < 24h',
    },
    {
      num: '03',
      category: 'Payouts',
      title: t.step3Title,
      desc: t.step3Desc,
      timing: 'Weekly every Tuesday',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white text-[#001A3D] scroll-mt-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100">
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#001A3D]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Clean Minimalism Steps Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main 3 Steps Container (8 or 9 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 flex-1">
                  {/* Circular Step Badge */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 bg-gray-50 rounded-full flex flex-col items-center justify-center shrink-0 border border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      STEP
                    </span>
                    <span className="text-2xl font-black text-[#2563EB]">
                      {step.num}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400">
                      {step.category}
                    </h4>
                    <div className="font-bold text-sm text-[#001A3D]">
                      {step.title}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                    <span className="inline-block text-[10px] font-semibold text-[#2563EB]">
                      {step.timing}
                    </span>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block w-px h-20 bg-gray-100 shrink-0"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Quick WhatsApp Action Card in Clean Minimalism (4 cols) */}
          <div className="lg:col-span-4 bg-[#25D366] rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-white shadow-lg shadow-emerald-200">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 fill-white text-transparent" />
              </div>
              <div className="font-bold text-xl sm:text-2xl leading-tight">
                Chat with our onboarding team on WhatsApp
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Direct onboarding assistance in English, Hindi, Ukrainian, Spanish & Turkish.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20want%20to%20start%20delivering."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-white text-[#075E54] hover:bg-emerald-50 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>Start on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Action CTA Button */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://tally.so/r/Y5A4Bz"
            target="_blank"
            rel="noopener noreferrer"
            id="how-it-works-start-step1-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base tracking-wide uppercase shadow-lg shadow-blue-200 active:scale-95 transition-all"
          >
            <span>{t.button}</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          <a
            href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20want%20to%20apply%20for%20a%20Rental%20Bike%20for%20food%20delivery."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#075E54] font-bold text-base border border-emerald-200 transition-all shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] fill-current" />
            <span>Need a Rental Bike? (WhatsApp)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
