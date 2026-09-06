import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Menu, X, ChevronDown } from 'lucide-react';
import { EditableLogo } from './EditableLogo';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenRegister?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[lang].nav;

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
    { code: 'uk', label: 'Українська', flag: '🇺🇦' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ (Punjabi)', flag: '🇮🇳' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  const navLinks = [
    { href: '#fleet-management', label: 'Fleet Management' },
    { href: '#benefits', label: t.benefits },
    { href: '#calculator', label: t.calculator },
    { href: '#legalization', label: t.legalization },
    { href: '#how-it-works', label: t.howItWorks },
    { href: '#support', label: t.support },
    { href: '#who-we-are', label: t.whoWeAre },
    { href: '#faq', label: t.faq },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm text-[#001A3D] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <EditableLogo subTitle="Food Delivery Fleet Management" size="md" />
          </div>

          {/* Menu: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#001A3D]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#2563EB] transition-colors py-1 relative"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Option & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Language Option Selector */}
            <div className="relative">
              <button
                type="button"
                id="language-switcher-button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 text-xs font-semibold text-[#001A3D] transition-colors shadow-2xs"
                aria-expanded={langDropdownOpen}
                aria-label="Select Language"
              >
                <span className="text-base leading-none">{currentLangObj.flag}</span>
                <span className="text-xs uppercase font-bold text-gray-700">
                  {currentLangObj.code}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {/* Language Dropdown */}
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-[#001A3D] rounded-2xl shadow-xl border border-gray-100 py-1.5 z-50 animate-fade-in">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">
                    Language Selection
                  </div>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        onLanguageChange(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-gray-50 transition-colors ${
                        lang === l.code ? 'bg-blue-50/70 font-bold text-[#2563EB]' : 'text-gray-700'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-base">{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {lang === l.code && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Menu: Mobile Hamburger Button */}
            <button
              type="button"
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#001A3D] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu: Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in text-[#001A3D]">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#2563EB] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

