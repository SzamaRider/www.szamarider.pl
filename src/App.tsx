import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FleetManagement } from './components/FleetManagement';
import { Benefits } from './components/Benefits';
import { EarningsCalculator } from './components/EarningsCalculator';
import { Legalization } from './components/Legalization';
import { Support } from './components/Support';
import { HowToStart } from './components/HowToStart';
import { WhoWeAre } from './components/WhoWeAre';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { RegistrationModal } from './components/RegistrationModal';
import { DocumentChecklistModal } from './components/DocumentChecklistModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  // Initialize saved language or default to 'en'
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('szama_lang') as Language;
      if (savedLang && ['en', 'pl', 'uk', 'hi', 'es', 'pa'].includes(savedLang)) {
        setLang(savedLang);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleOpenRegister = () => {
    window.open('https://tally.so/r/Y5A4Bz', '_blank', 'noopener,noreferrer');
  };

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('szama_lang', newLang);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#001A3D] selection:bg-[#2563EB] selection:text-white font-sans antialiased">
      {/* Global Header */}
      <Header
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenRegister={handleOpenRegister}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenRegister={handleOpenRegister}
          onOpenChecklist={() => setIsChecklistOpen(true)}
        />

        {/* Dedicated Food Delivery Fleet Management Section */}
        <FleetManagement
          lang={lang}
          onOpenRegister={handleOpenRegister}
        />

        {/* 2. Core Benefits Grid */}
        <Benefits
          lang={lang}
          onOpenRegister={handleOpenRegister}
        />

        {/* Interactive Earnings Estimator */}
        <EarningsCalculator
          lang={lang}
          onOpenRegister={handleOpenRegister}
        />

        {/* 3. Legalization Package Section */}
        <Legalization
          lang={lang}
          onOpenRegister={handleOpenRegister}
          onOpenChecklist={() => setIsChecklistOpen(true)}
        />

        {/* 4. Multilingual 24/7 Support Section */}
        <Support lang={lang} />

        {/* 5. 3-Step Courier Onboarding Journey */}
        <HowToStart
          lang={lang}
          onOpenRegister={handleOpenRegister}
        />

        {/* 7. Who We Are & ERP Infrastructure */}
        <WhoWeAre lang={lang} />

        {/* 6. Interactive FAQ Accordion */}
        <FAQ lang={lang} />
      </main>

      {/* Global Rich Footer */}
      <Footer
        lang={lang}
        onOpenRegister={handleOpenRegister}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Persistent Floating WhatsApp Widget */}
      <WhatsAppWidget lang={lang} />

      {/* Interactive Registration / Tally Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        lang={lang}
      />

      {/* Interactive Document Checklist Modal */}
      <DocumentChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        lang={lang}
        onOpenRegister={handleOpenRegister}
      />
    </div>
  );
}
