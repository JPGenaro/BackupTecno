'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { useContact } from '@/context/ContactContext';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/utils/translations';
import { faqContentByLanguage } from '@/utils/faqContent';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('servicios');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openContact } = useContact();
  const { language } = useLanguage();

  const faqCategories = [
    { id: 'servicios', label: t(language, 'home.categoryServices') },
    { id: 'seguridad', label: t(language, 'home.categorySecurity') },
    { id: 'soporte', label: t(language, 'home.categorySupport') },
    { id: 'pagos', label: t(language, 'home.categoryPayments') },
    { id: 'legal', label: t(language, 'home.categoryLegal') }
  ];

  const faqs = faqContentByLanguage[language];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <HeroSection />

      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
        <main>
          <section id="faq" className="my-20 max-w-6xl mx-auto px-6 scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1829] mb-4">
                {t(language, 'home.faqTitle')}
              </h2>
              <p className="text-lg text-slate-600">
                {t(language, 'home.faqDescription')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                    activeCategory === category.id
                      ? 'bg-[#0B1829] text-white shadow-lg shadow-blue-500/50'
                      : 'bg-slate-200 text-[#0B1829] hover:bg-slate-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {faqs[activeCategory].map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
                    style={{
                      backgroundColor: openFaq === index ? '#0B1829' : 'white'
                    }}
                  >
                    <span 
                      className={`text-lg font-semibold transition-colors duration-300 pr-4 ${
                        openFaq === index ? 'text-cyan-100' : 'text-[#0B1829]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div 
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFaq === index 
                          ? 'bg-cyan-500 rotate-180' 
                          : 'bg-slate-200 group-hover:bg-cyan-100'
                      }`}
                    >
                      <svg 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openFaq === index ? 'text-white' : 'text-slate-600'
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                        />
                      </svg>
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <div 
                      className="px-6 py-5 bg-slate-50 border-t-2 border-slate-200 leading-relaxed animate-fadeIn space-y-3"
                      style={{
                        animation: `slideDown 0.3s ease-out`
                      }}
                    >
                      <div className="text-slate-700 whitespace-pre-line text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">{t(language, 'home.notFound')}</p>
              <button
                onClick={openContact}
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {t(language, 'home.contactDirect')}
              </button>
            </div>
          </section>
        </main>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        <Analytics />
      </div>
    </>
  );
}
