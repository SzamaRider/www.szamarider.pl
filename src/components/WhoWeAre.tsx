import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Server, Wrench, HeartHandshake, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

interface WhoWeAreProps {
  lang: Language;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ lang }) => {
  const t = translations[lang].whoWeAre;

  const cities = [
    { name: 'Warszawa', tag: 'Central Fleet Hub' },
    { name: 'Kraków', tag: 'Fleet & Service Station' },
    { name: 'Wrocław', tag: 'Service & Dispatch' },
    { name: 'Gdańsk / Trójmiasto', tag: 'Courier Desk' },
    { name: 'Poznań', tag: 'Active Station' },
    { name: 'Łódź', tag: 'Active Station' },
    { name: 'Katowice & Silesia', tag: 'Regional Desk' },
  ];

  return (
    <section id="who-we-are" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#001A3D] scroll-mt-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100">
            <Server className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#001A3D]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Core Pillars Cards in Clean Minimalism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* Card 1: Enterprise ERP */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#001A3D] group-hover:text-[#2563EB] transition-colors">
                {t.card1Title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t.card1Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>Direct platform API sync</span>
            </div>
          </div>

          {/* Card 2: Fleet Maintenance & Hubs */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#001A3D] group-hover:text-[#2563EB] transition-colors">
                {t.card2Title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t.card2Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>Full maintenance included</span>
            </div>
          </div>

          {/* Card 3: Community & Ethics */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#001A3D] group-hover:text-[#2563EB] transition-colors">
                {t.card3Title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t.card3Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>Courier dignity & fair terms</span>
            </div>
          </div>
        </div>

        {/* City Presence Strip in Clean Minimalism */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
              <h4 className="text-lg font-bold text-[#001A3D]">
                {t.presenceTitle}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Servicing couriers locally with physical fleet dispatch, equipment distribution, and contract signing.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB]">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>Registered Polish Fleet • NIP: 1133210688 • REGON: 545547185</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-gray-200 transition-colors flex items-center gap-3"
              >
                <MapPin className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <div className="font-bold text-sm text-[#001A3D]">{city.name}</div>
                  <div className="text-[10px] text-gray-400">{city.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
