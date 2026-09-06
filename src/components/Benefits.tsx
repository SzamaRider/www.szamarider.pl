import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Coins, Bike, Landmark, ShieldCheck, FileSpreadsheet, Fuel, Check, ArrowRight, ExternalLink } from 'lucide-react';

interface BenefitsProps {
  lang: Language;
  onOpenRegister: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ lang, onOpenRegister }) => {
  const t = translations[lang].benefits;

  const iconStyles = [
    { box: 'bg-green-50 text-[#25D366]', icon: <Coins className="w-6 h-6" /> },
    { box: 'bg-orange-50 text-orange-500', icon: <Bike className="w-6 h-6" /> },
    { box: 'bg-blue-50 text-[#2563EB]', icon: <Landmark className="w-6 h-6" /> },
    { box: 'bg-blue-50 text-[#2563EB]', icon: <ShieldCheck className="w-6 h-6" /> },
    { box: 'bg-green-50 text-[#25D366]', icon: <FileSpreadsheet className="w-6 h-6" /> },
    { box: 'bg-orange-50 text-orange-500', icon: <Fuel className="w-6 h-6" /> },
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#001A3D] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100">
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#001A3D]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Benefits Grid in Clean Minimalism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {t.items.map((item: any, idx: number) => {
            const style = iconStyles[idx % iconStyles.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-1 group-hover:scale-105 transition-transform ${style.box}`}
                    >
                      {style.icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-gray-50 text-gray-500 border border-gray-100">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#001A3D] group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center text-xs font-semibold text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#25D366]" />
                    Guaranteed by Szama Rider
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight callout banner in Clean Minimalism */}
        <div className="mt-12 bg-white text-[#001A3D] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
              Zero Hidden Surprises
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-[#001A3D] tracking-tight">
              Ready to work with a partner who respects your earnings?
            </h4>
            <p className="text-sm text-gray-500 max-w-xl">
              Get your legal contract via email within 24 hours. Fixed 30 PLN weekly fee and no deductions on your tips.
            </p>
          </div>

          <a
            href="https://tally.so/r/Y5A4Bz"
            target="_blank"
            rel="noopener noreferrer"
            id="benefits-register-cta-btn"
            className="shrink-0 px-7 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-blue-200 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Register in 2 Minutes</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
