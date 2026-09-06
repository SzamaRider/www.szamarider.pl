import React, { useState } from 'react';
import { translations } from '../data/translations';
import { faqData } from '../data/faqData';
import { Language } from '../types';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';

interface FAQProps {
  lang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const t = translations[lang].faq;
  const [openId, setOpenId] = useState<string>('turnaround');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.allCategory },
    { id: 'general', label: 'Onboarding & Start' },
    { id: 'payouts', label: 'Payouts & 30 PLN' },
    { id: 'legal', label: 'Legal & TRC' },
    { id: 'fleet', label: 'Vehicles & Fleet' },
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const qText = (item.question[lang] || item.question.en).toLowerCase();
    const aText = (item.answer[lang] || item.answer.en).toLowerCase();
    const matchesSearch =
      qText.includes(searchQuery.toLowerCase()) || aText.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white text-[#001A3D] scroll-mt-20 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-[#2563EB] border border-blue-100">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#001A3D]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="space-y-4 mb-8">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g. 30 PLN fee, Karta Pobytu, E-bike, Sanepid)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] shadow-2xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#001A3D] text-white shadow-sm'
                    : 'bg-[#F8FAFC] text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-[#F8FAFC] rounded-2xl border border-gray-100 text-gray-500 text-sm">
              No matching questions found. Try searching another term or contact our WhatsApp support!
            </div>
          ) : (
            filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              const question = item.question[lang] || item.question.en;
              const answer = item.answer[lang] || item.answer.en;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm transition-all overflow-hidden hover:border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="font-bold text-base sm:text-lg text-[#001A3D]">
                      {question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                        isOpen
                          ? 'bg-[#2563EB] text-white rotate-180'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions helper box */}
        <div className="mt-12 bg-[#F8FAFC] border border-gray-100 rounded-3xl p-6 sm:p-8 text-center space-y-3">
          <h4 className="font-bold text-[#001A3D] text-base">
            Still have questions about working with Szama Rider?
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
            Our team is available 24/7 in English, Hindi, Ukrainian, Spanish, Turkish, and Polish.
          </p>
          <a
            href="https://wa.me/48883976989?text=Hello%20Szama%20Rider!%20I%20have%20a%20question%20about%20delivering."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-200 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+48 883 976 989)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
