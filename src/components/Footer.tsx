import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Mail, Phone, MapPin, ShieldCheck, Facebook, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { EditableLogo } from './EditableLogo';

interface FooterProps {
  lang: Language;
  onOpenRegister: () => void;
  onOpenChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenRegister,
  onOpenChecklist,
}) => {
  const t = translations[lang].footer;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#001A3D] pt-16 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <EditableLogo subTitle="Food Delivery Fleet Management" size="md" />
            </div>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              {t.desc}
            </p>

            <div className="pt-1 flex items-center gap-3 text-gray-500 text-xs">
              <span className="inline-flex items-center gap-1 text-[#25D366] font-bold">
                <ShieldCheck className="w-4 h-4" />
                Verified Legal Partner
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-semibold text-gray-600">Fixed 30 PLN / week</span>
            </div>

            {/* Social Channels Strip */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://wa.me/48883976989"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Direct (+48 883 976 989)"
                className="w-8 h-8 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593489300475"
                target="_blank"
                rel="noopener noreferrer"
                title="Szama Rider on Facebook"
                className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/szamarider/"
                target="_blank"
                rel="noopener noreferrer"
                title="Szama Rider on Instagram (@szamarider)"
                className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-gray-400 font-medium pl-1">
                @szamarider
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-gray-600 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('benefits')}
                  className="hover:text-[#2563EB] transition-colors"
                >
                  Core Benefits & Flat 30 PLN Fee
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('calculator')}
                  className="hover:text-[#2563EB] transition-colors"
                >
                  Net Earnings Calculator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('legalization')}
                  className="hover:text-[#2563EB] transition-colors"
                >
                  Umowa Zlecenie & Karta Pobytu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('how-it-works')}
                  className="hover:text-[#2563EB] transition-colors"
                >
                  3-Step 24h Onboarding
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenChecklist}
                  className="hover:text-[#2563EB] transition-colors"
                >
                  Required Documents Checklist
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-[#2563EB] transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">
              {t.contactUs}
            </h4>
            <ul className="space-y-2.5 text-gray-600">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#001A3D]">+48 883 976 989</div>
                  <div className="text-[11px] text-gray-400">24/7 Dispatch Hotline & WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#001A3D]">kontakt@szamarider.pl</div>
                  <div className="text-[11px] text-gray-400">Contracts, Accounting & ERP Slips</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#001A3D]">Warszawa Hub & Nationwide</div>
                  <div className="text-[11px] text-gray-400">Al. Jerozolimskie, 02-001 Warszawa</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Profiles & CTA (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">
              Get Started
            </h4>
            <a
              href="https://tally.so/r/Y5A4Bz"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-register-cta-btn"
              className="w-full py-2.5 px-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-100 transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>REGISTER NOW (TALLY)</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20want%20to%20apply%20for%20a%20Rental%20Bike%20for%20food%20delivery."
              target="_blank"
              rel="noopener noreferrer"
              id="footer-rental-bike-whatsapp-link"
              className="w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#075E54] font-bold text-[11px] border border-emerald-200 transition-all text-center flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366] fill-current" />
              <span>Rental Bike Apply (WhatsApp)</span>
            </a>

            <div className="pt-1 text-[11px] text-gray-400 space-y-1">
              <div>Supported in 7 languages:</div>
              <div className="text-gray-700 font-semibold">EN • PL • UA • PA • HI • ES • TR</div>
            </div>
          </div>
        </div>

        {/* Legal Baseline & Tax Registration */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>&copy; 2026 Szama Rider. All Rights Reserved.</div>
          <div className="text-center font-mono text-[11px] text-gray-400">
            {t.taxNote}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-gray-700 cursor-pointer">{t.privacy}</span>
            <span>•</span>
            <span className="hover:text-gray-700 cursor-pointer">{t.terms}</span>
            <span>•</span>
            <span className="hover:text-gray-700 cursor-pointer">{t.compliance}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
