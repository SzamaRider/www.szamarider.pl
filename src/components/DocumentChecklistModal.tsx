import React, { useState } from 'react';
import { Language } from '../types';
import { FileText, CheckCircle2, Copy, Check, HelpCircle, X, ExternalLink, MessageCircle } from 'lucide-react';

interface DocumentChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenRegister: () => void;
}

export const DocumentChecklistModal: React.FC<DocumentChecklistModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  const [profileType, setProfileType] = useState<'non-eu' | 'ukraine' | 'student' | 'eu'>('non-eu');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const docs = {
    'non-eu': [
      {
        name: 'Valid International Passport',
        requirement: 'Must have at least 6 months validity remaining with clear photo and data page.',
        whoProvides: 'You provide',
        mandatory: true,
      },
      {
        name: 'Legal Stay Document (Visa / TRC / Stamp)',
        requirement: 'National Type D Visa, valid Karta Pobytu, or red stamp in passport confirming submitted application.',
        whoProvides: 'You provide (Szama Rider helps extend)',
        mandatory: true,
      },
      {
        name: 'Polish PESEL Number',
        requirement: 'Personal identification number issued by any municipal town hall (Urząd Dzielnicy/Gminy).',
        whoProvides: 'You provide (Easy 1-day town hall process)',
        mandatory: true,
      },
      {
        name: 'Umowa Zlecenie (Mandate Contract)',
        requirement: 'Official employment contract defining courier mandate and legal working conditions.',
        whoProvides: 'Szama Rider provides within 24 hours',
        mandatory: true,
      },
      {
        name: 'Sanepid Health Clearance / Booklet',
        requirement: 'Orzeczenie do celów sanitarno-epidemiologicznych for transporting packaged food safely.',
        whoProvides: 'Szama Rider coordinates medical booking',
        mandatory: true,
      },
      {
        name: 'Załącznik nr 1 (for Karta Pobytu)',
        requirement: 'Annex 1 certified and signed by Szama Rider confirming guaranteed hours and legal pay.',
        whoProvides: 'Szama Rider provides upon request',
        mandatory: false,
      },
      {
        name: 'Driving License (If delivering by Scooter/Car)',
        requirement: 'Valid EU driving license or international driving permit with certified Polish translation.',
        whoProvides: 'Required only for motorized vehicles',
        mandatory: false,
      },
    ],
    ukraine: [
      {
        name: 'Passport or Ukrainian National ID (Diia)',
        requirement: 'Passport or official proof of crossing border under temporary protection.',
        whoProvides: 'You provide',
        mandatory: true,
      },
      {
        name: 'PESEL UKR (Special Status)',
        requirement: 'PESEL with UKR status confirming legal stay and automatic right to work in Poland.',
        whoProvides: 'You provide',
        mandatory: true,
      },
      {
        name: 'Umowa Zlecenie + Notification to Urząd Pracy',
        requirement: 'Employment contract + mandatory digital filing to Powiatowy Urząd Pracy within 14 days.',
        whoProvides: 'Szama Rider handles automatically',
        mandatory: true,
      },
      {
        name: 'Sanepid Medical Clearance',
        requirement: 'Food handling certificate from certified laboratory / occupational doctor.',
        whoProvides: 'Szama Rider coordinates test',
        mandatory: true,
      },
    ],
    student: [
      {
        name: 'Valid Student ID Card (Legitymacja Studencka)',
        requirement: 'Proof of active enrollment in Polish university or language school up to 26th birthday.',
        whoProvides: 'You provide',
        mandatory: true,
      },
      {
        name: 'Valid Passport & Legal Stay',
        requirement: 'Passport + Student visa or Temporary Residence Card (TRC based on studies).',
        whoProvides: 'You provide',
        mandatory: true,
      },
      {
        name: 'PESEL Number',
        requirement: 'Registration with municipal registry.',
        whoProvides: 'You provide',
        mandatory: true,
      },
      {
        name: 'Umowa Zlecenie (0% Tax / 0% ZUS)',
        requirement: 'Full mandate contract registered under student tax exemption.',
        whoProvides: 'Szama Rider provides within 24h',
        mandatory: true,
      },
      {
        name: 'Sanepid Health Clearance',
        requirement: 'Sanitary booklet for food deliveries.',
        whoProvides: 'Szama Rider arranges',
        mandatory: true,
      },
    ],
    eu: [
      {
        name: 'National ID Card or EU Passport',
        requirement: 'Valid photo identity document from any European Union member state.',
        whoProvides: 'You provide',
        mandatory: true,
      },
      {
        name: 'Polish PESEL Number',
        requirement: 'Standard Polish citizen or EU resident registration.',
        whoProvides: 'You provide',
        mandatory: true,
      },
      {
        name: 'Umowa Zlecenie (Mandate Contract)',
        requirement: 'Full mandate contract with fixed 30 PLN weekly fee.',
        whoProvides: 'Szama Rider delivers in 24h',
        mandatory: true,
      },
      {
        name: 'Sanepid Health Clearance',
        requirement: 'Standard food transport medical certificate.',
        whoProvides: 'Szama Rider provides clinic referral',
        mandatory: true,
      },
    ],
  };

  const copyText = () => {
    const list = docs[profileType]
      .map((d, i) => `${i + 1}. ${d.name} (${d.mandatory ? 'Required' : 'Optional'})\n   - ${d.requirement}\n   - Note: ${d.whoProvides}`)
      .join('\n\n');
    navigator.clipboard.writeText(`Szama Rider Courier Document Checklist:\n\n${list}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden my-auto max-h-[92vh] flex flex-col text-[#001A3D]">
        {/* Modal Top */}
        <div className="bg-white text-[#001A3D] p-5 sm:p-6 relative border-b border-gray-100">
          <button
            type="button"
            id="close-doc-checklist-modal"
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-[#001A3D] p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100">
              Verified Legal Guide
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#001A3D] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#2563EB]" />
            <span>Courier Document Checklist</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Choose your current citizenship or residency status to see the exact paperwork required to deliver legally in Poland.
          </p>

          {/* Profile Switcher Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={() => setProfileType('non-eu')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                profileType === 'non-eu'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-200'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Non-EU Citizens
            </button>
            <button
              type="button"
              onClick={() => setProfileType('ukraine')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                profileType === 'ukraine'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-200'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Ukrainian (PESEL UKR)
            </button>
            <button
              type="button"
              onClick={() => setProfileType('student')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                profileType === 'student'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-200'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Students Under 26 (0% Tax)
            </button>
            <button
              type="button"
              onClick={() => setProfileType('eu')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                profileType === 'eu'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-200'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              EU / Polish Nationals
            </button>
          </div>
        </div>

        {/* Modal List */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {docs[profileType].length} Documents Listed
            </span>
            <button
              type="button"
              onClick={copyText}
              className="flex items-center gap-1.5 text-xs text-[#2563EB] hover:text-blue-800 font-bold transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#25D366]" />
                  <span className="text-[#25D366]">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Checklist</span>
                </>
              )}
            </button>
          </div>

          <div className="space-y-2.5">
            {docs[profileType].map((doc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl border border-gray-100 bg-[#F8FAFC] hover:bg-white hover:border-gray-200 transition-all text-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span className="font-bold text-[#001A3D] text-sm">{doc.name}</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                      doc.mandatory
                        ? 'bg-red-50 text-red-600 border border-red-100'
                        : 'bg-blue-50 text-[#2563EB] border border-blue-100'
                    }`}
                  >
                    {doc.mandatory ? 'Mandatory' : 'Optional / Role-based'}
                  </span>
                </div>
                <p className="text-gray-500 mt-1 pl-6 leading-relaxed">{doc.requirement}</p>
                <div className="mt-2 pl-6 pt-1.5 border-t border-gray-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-gray-400">Source:</span>
                  <span className="font-semibold text-[#2563EB]">{doc.whoProvides}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Help note */}
          <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 text-xs text-blue-900 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-[#001A3D]">Missing a document like Sanepid or Załącznik 1?</span>
              <span className="text-gray-600">
                Don’t wait! Szama Rider assists you directly during onboarding. Register now and our multilingual coordinator will walk you through each step.
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-4 bg-[#F8FAFC] border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-[#001A3D] transition-colors"
          >
            Close
          </button>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20want%20to%20apply%20for%20a%20Rental%20Bike%20for%20food%20delivery."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-[#075E54] border border-emerald-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
              <span>Rental Bike (WhatsApp)</span>
            </a>
            <a
              href="https://tally.so/r/Y5A4Bz"
              target="_blank"
              rel="noopener noreferrer"
              id="checklist-register-now"
              onClick={onClose}
              className="px-5 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-200 transition-all flex items-center gap-1.5"
            >
              <span>Open Tally Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
