'use client';

import { useLanguage } from '@/context/LanguageContext';
import { cookiesPolicyContent } from '@/utils/legalPagesContent';

export default function PoliticaCookies() {
  const { language } = useLanguage();
  const content = cookiesPolicyContent[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-lg p-8 md:p-12">
          <div className="space-y-8">
            <div className="border-b border-blue-500/20 pb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
                  {content.title}
                </span>
              </h1>
              <p className="text-slate-400">{content.updatedAt}</p>
            </div>

            <section className="space-y-4">
              {content.intro.map((paragraph) => (
                <p key={paragraph} className="text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>

            {content.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-300">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-cyan-300">{content.contactTitle}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">{content.contactIntro}</p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded p-6 space-y-3">
                <div>
                  <p className="text-slate-200 font-semibold mb-1">{content.contact.emailLabel}:</p>
                  <a href="mailto:backup.tecno9@gmail.com" className="text-sky-400 hover:text-sky-300 transition">
                    backup.tecno9@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-slate-200 font-semibold mb-1">{content.contact.phoneLabel}:</p>
                  <a
                    href="https://wa.me/543512644334"
                    className="text-sky-400 hover:text-sky-300 transition"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    +54 9 351 2644334
                  </a>
                </div>
                <div>
                  <p className="text-slate-200 font-semibold mb-1">{content.contact.locationLabel}:</p>
                  <p className="text-slate-300">{content.contact.locationText}</p>
                </div>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-blue-500/20 text-slate-400 text-sm space-y-2">
              <p>© {new Date().getFullYear()} BackupTecno. All rights reserved.</p>
              <p>{content.footerNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
