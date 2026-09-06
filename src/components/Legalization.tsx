import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Shield, FileCheck, CheckCircle2, ArrowRight, Stamp, UserCheck, ExternalLink } from 'lucide-react';
import { EditableImage } from './EditableImage';

interface LegalizationProps {
  lang: Language;
  onOpenRegister: () => void;
  onOpenChecklist: () => void;
}

export const Legalization: React.FC<LegalizationProps> = ({
  lang,
  onOpenRegister,
  onOpenChecklist,
}) => {
  const t = translations[lang].legalization;

  return (
    <section id="legalization" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#001A3D] scroll-mt-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100">
            <Shield className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#001A3D]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Top Legalization & Immigration Package Photo Upload Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white border border-gray-200/80 rounded-3xl p-3 sm:p-4 shadow-sm">
            <EditableImage
              storageKey="legalization_top_banner"
              defaultSrc="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
              alt="Szama Rider Official Legalization, TRC Karta Pobytu & Mandate Contract Documentation in Poland"
              badgeLabel="Upload Legal Package Photo"
              className="w-full h-52 sm:h-72 rounded-2xl shadow-inner object-cover"
            />
            <div className="flex flex-col sm:flex-row items-center justify-between px-2 pt-3 pb-1 text-xs gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] inline-block"></span>
                <span className="font-bold text-[#001A3D]">Polish Legal & Immigration Documentation Desk</span>
                <span className="text-gray-400 hidden sm:inline">• Official Urząd Wojewódzki filings</span>
              </div>
              <span className="text-[11px] text-gray-400">
                Click camera button to upload legal package documentation photo
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Checklist on left, Official Document Mockup on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Features Checklist (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.features.map((feat: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-green-50 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#001A3D] group-hover:text-[#2563EB] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                id="legalization-checklist-modal-btn"
                onClick={onOpenChecklist}
                className="px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-200 transition-all flex items-center gap-2"
              >
                <FileCheck className="w-4 h-4" />
                <span>{t.checklistBtn}</span>
              </button>

              <a
                href="https://tally.so/r/Y5A4Bz"
                target="_blank"
                rel="noopener noreferrer"
                id="legalization-register-btn"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-[#001A3D] font-bold text-xs sm:text-sm border-2 border-gray-200 transition-all flex items-center gap-2"
              >
                <span>Get Umowa Zlecenie in 24h</span>
                <ExternalLink className="w-4 h-4 text-[#2563EB]" />
              </a>
            </div>
          </div>

          {/* High-Resolution Document / Verification Photo Block (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-2xl space-y-5">
              {/* Top status bar */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
                  <span className="text-xs font-bold text-[#25D366] uppercase tracking-wide">
                    Certified Partner Document
                  </span>
                </div>
                <span className="text-[11px] text-gray-400 font-mono">PL-ZUS-2026</span>
              </div>

              {/* Document Mockup Card */}
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200/80 space-y-4 font-sans text-xs">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-sm text-[#001A3D]">UMOWA ZLECENIE</div>
                    <div className="text-[11px] text-gray-400">Numer: SZM/2026/08942-KR</div>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-green-50 text-[#25D366] font-mono font-bold text-[10px] border border-green-100">
                    STATUS: ACTIVE
                  </div>
                </div>

                {/* Body metadata */}
                <div className="space-y-2 py-2 border-y border-gray-200/80 text-[11px] text-gray-700">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Zleceniodawca (Partner):</span>
                    <span className="font-bold text-[#001A3D]">Szama Rider</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">NIP / REGON:</span>
                    <span className="font-mono text-gray-800">1133210688 / 545547185</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Podstawa prawna:</span>
                    <span className="text-gray-800">Art. 734-751 Kodeksu Cywilnego</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Rozliczenie (Payout):</span>
                    <span className="text-[#25D366] font-bold">Fixed 30 PLN fee / weekly</span>
                  </div>
                </div>

                {/* Stamps / Verification Seals */}
                <div className="pt-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#25D366] flex items-center justify-center text-[#25D366]">
                      <Stamp className="w-4 h-4" />
                    </div>
                    <div className="text-[10px] leading-tight">
                      <div className="font-bold text-[#001A3D]">ZUS & Urząd Skarbowy</div>
                      <div className="text-gray-400">Elektronicznie Podpisano</div>
                    </div>
                  </div>

                  <div className="text-right text-[10px] text-gray-400">
                    <div className="text-[#001A3D] font-bold">24H Delivery SLA</div>
                    <div>Sent to courier email</div>
                  </div>
                </div>
              </div>

              {/* Monthly Pay Slip Note */}
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 flex items-start gap-3 text-xs">
                <UserCheck className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="text-gray-600 leading-relaxed">
                  <strong className="text-[#001A3D] block font-semibold mb-0.5">
                    Official Income Proof for Urząd Wojewódzki
                  </strong>
                  Our automated monthly salary slips and Załącznik nr 1 are formatted to meet all voivodeship standards for temporary residence card (Karta Pobytu) processing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
