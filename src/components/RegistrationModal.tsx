import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Language, CourierApplication } from '../types';
import { CheckCircle2, Send, Clock, ShieldCheck, Mail, Phone, Sparkles, X, MessageCircle, ExternalLink } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = translations[lang].modals;

  const [formData, setFormData] = useState<CourierApplication>({
    fullName: '',
    email: '',
    phone: '',
    city: 'Warszawa',
    apps: ['Food Delivery Apps', 'Express Delivery'],
    vehicle: 'ebike',
    isStudentUnder26: false,
    needsLegalization: false,
    citizenship: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'app' | 'tally'>('tally');

  if (!isOpen) return null;

  const cities = [
    'Warszawa',
    'Kraków',
    'Wrocław',
    'Gdańsk / Sopot / Gdynia',
    'Poznań',
    'Łódź',
    'Katowice & Silesia',
    'Szczecin',
    'Lublin',
    'Bydgoszcz',
    'Białystok',
  ];

  const appOptions = ['Food Delivery Apps', 'Express Delivery', 'Grocery Delivery', 'All Supported Delivery Apps'];

  const toggleApp = (app: string) => {
    setFormData((prev) => ({
      ...prev,
      apps: prev.apps.includes(app)
        ? prev.apps.filter((a) => a !== app)
        : [...prev.apps, app],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast processing and record into localStorage
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('szama_applications') || '[]');
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('szama_applications', JSON.stringify(stored));
      } catch {
        // ignore
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden my-auto max-h-[92vh] flex flex-col text-[#001A3D]">
        {/* Clean Minimalism Header */}
        <div className="bg-white text-[#001A3D] p-5 sm:p-6 relative border-b border-gray-100">
          <button
            type="button"
            id="close-registration-modal"
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-[#001A3D] p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-green-50 text-[#25D366] border border-green-100">
              24h Digital Activation
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100">
              Fixed 30 PLN / week
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#001A3D]">
            {t.registerTitle}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl">
            {t.registerSubtitle}
          </p>

          {/* Form Mode Toggle & Rental Bike link */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-gray-100">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('tally')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'tally'
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-200'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span>Tally Form</span>
                <span className="text-[10px] bg-green-50 text-[#25D366] font-bold px-1.5 py-0.2 rounded border border-green-100">
                  Official
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('app')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'app'
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-200'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                Direct Form
              </button>
            </div>

            <a
              href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20want%20to%20apply%20for%20a%20Rental%20Bike%20for%20food%20delivery."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-[#075E54] border border-emerald-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
              <span>Rental Bike Apply (WhatsApp)</span>
            </a>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 bg-green-50 text-[#25D366] rounded-2xl flex items-center justify-center mx-auto shadow-inner border border-green-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-[#001A3D]">{t.successTitle}</h4>
              <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                {t.successMessage}
              </p>

              {/* Next Steps */}
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-4 text-left max-w-md mx-auto space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#001A3D]">
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  <span>Next Steps (Within 24 Hours):</span>
                </div>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>Check your email (<strong>{formData.email || 'your inbox'}</strong>) for your official Umowa Zlecenie.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                    <span>Click the platform invitation links for {formData.apps.join(', ') || 'your delivery apps'}.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>Our coordinator will WhatsApp you at <strong>{formData.phone || '+48...'}</strong> to verify setup.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  id="finish-submitted-modal"
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#001A3D] text-white rounded-xl text-sm font-bold hover:bg-blue-950 transition-colors shadow-sm"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : activeTab === 'tally' ? (
            <div className="space-y-4 text-center py-2">
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 text-left text-xs text-blue-900 space-y-2">
                <p className="font-semibold text-sm text-[#001A3D] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  Official Szama Rider Tally Onboarding Portal
                </p>
                <p className="text-gray-600">
                  Fill out our official Tally registration form below or open it in a new window. Direct digital contract (Umowa Zlecenie) and partner activation delivered within 24 hours.
                </p>
              </div>

              <div className="border border-gray-100 rounded-2xl p-4 bg-[#F8FAFC] space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                  <div>
                    <h4 className="font-bold text-[#001A3D] text-sm">Official Tally Registration Form</h4>
                    <p className="text-xs text-gray-500">
                      Link: <span className="font-mono text-blue-600 font-semibold">https://tally.so/r/Y5A4Bz</span>
                    </p>
                  </div>

                  <a
                    href="https://tally.so/r/Y5A4Bz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md shadow-blue-200 transition-all shrink-0"
                  >
                    <span>Open in New Tab</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Embedded Tally iframe */}
                <div className="w-full h-[520px] rounded-xl overflow-hidden border border-gray-200 bg-white shadow-inner">
                  <iframe
                    src="https://tally.so/embed/Y5A4Bz?alignLeft=1&hideTitle=1&transparentBackground=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Szama Rider Official Courier Registration Form"
                    className="w-full h-full"
                  />
                </div>

                <p className="text-[11px] text-gray-400">
                  Prefer a quick local form? Switch to the "Direct Fast Application" tab above.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma / Oleksandr Ivanov"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t.email} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="courier@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
              </div>

              {/* Phone & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+48 883 976 989"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t.city} *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Delivery apps selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  {t.selectApps}
                </label>
                <div className="flex flex-wrap gap-2">
                  {appOptions.map((app) => {
                    const selected = formData.apps.includes(app);
                    return (
                      <button
                        key={app}
                        type="button"
                        onClick={() => toggleApp(app)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                          selected
                            ? 'bg-[#2563EB] text-white border-[#2563EB]'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span>{app}</span>
                        {selected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Vehicle Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t.selectVehicle}
                  </label>
                  <select
                    value={formData.vehicle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        vehicle: e.target.value as CourierApplication['vehicle'],
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  >
                    <option value="ebike">E-Bike / Electric Bicycle</option>
                    <option value="bicycle">Standard Bicycle</option>
                    <option value="scooter">Electric Scooter / Moped</option>
                    <option value="car">Personal Car</option>
                    <option value="need_rental">Need to Rent Fleet Vehicle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Citizenship / Passport Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. India, Ukraine, Turkey, Poland..."
                    value={formData.citizenship}
                    onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
              </div>

              {/* Checkboxes for Student & Legalization */}
              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-2.5 p-3 rounded-2xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.isStudentUnder26}
                    onChange={(e) =>
                      setFormData({ ...formData, isStudentUnder26: e.target.checked })
                    }
                    className="mt-0.5 w-4 h-4 text-[#2563EB] rounded border-gray-300 focus:ring-[#2563EB]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[#001A3D] block">{t.studentStatus}</span>
                    <span className="text-gray-500">
                      Entitles you to 0% Polish personal income tax (Ulga dla młodych).
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-2xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.needsLegalization}
                    onChange={(e) =>
                      setFormData({ ...formData, needsLegalization: e.target.checked })
                    }
                    className="mt-0.5 w-4 h-4 text-[#2563EB] rounded border-gray-300 focus:ring-[#2563EB]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[#001A3D] block">{t.legalHelp}</span>
                    <span className="text-gray-500">
                      We will prepare Załącznik nr 1, work authorization, and book your appointment.
                    </span>
                  </div>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="btn-submit-courier-application"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t.submitting}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.submitApplication}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-4 text-[11px] text-gray-500 mt-2.5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#25D366]" />
                    24h Turnaround Guarantee
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#2563EB]" />
                    Fixed 30 PLN partner fee
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
