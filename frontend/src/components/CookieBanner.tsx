'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/utils/translations';

const COOKIE_CONSENT_KEY = 'cookieConsent';
const CONSENT_EXPIRATION_MS = 1000 * 60 * 60 * 24 * 180; // 6 months

type StoredConsent =
  | boolean
  | {
      accepted: boolean;
      timestamp: number;
    };

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);

      if (raw === null) {
        setCookieConsent(false);
      } else if (raw === 'true' || raw === '1') {
        // Migrate legacy values to timestamped format.
        window.localStorage.setItem(
          COOKIE_CONSENT_KEY,
          JSON.stringify({ accepted: true, timestamp: Date.now() }),
        );
        setCookieConsent(true);
      } else if (raw === 'false' || raw === '0') {
        setCookieConsent(false);
      } else {
        const parsed = JSON.parse(raw) as StoredConsent;

        if (typeof parsed === 'boolean') {
          if (parsed) {
            window.localStorage.setItem(
              COOKIE_CONSENT_KEY,
              JSON.stringify({ accepted: true, timestamp: Date.now() }),
            );
          }
          setCookieConsent(parsed);
        } else if (parsed && typeof parsed === 'object' && parsed.accepted) {
          const hasExpired = Date.now() - parsed.timestamp >= CONSENT_EXPIRATION_MS;

          if (hasExpired) {
            window.localStorage.removeItem(COOKIE_CONSENT_KEY);
            setCookieConsent(false);
          } else {
            setCookieConsent(true);
          }
        } else {
          setCookieConsent(false);
        }
      }
    } catch {
      // If value is malformed, reset to a safe default.
      window.localStorage.removeItem(COOKIE_CONSENT_KEY);
      setCookieConsent(false);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const persistConsent = (value: boolean) => {
    setCookieConsent(value);

    if (value) {
      window.localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({ accepted: true, timestamp: Date.now() }),
      );
    } else {
      window.localStorage.removeItem(COOKIE_CONSENT_KEY);
    }
  };

  const handleClose = () => {
    persistConsent(true);
  };

  if (!isLoaded || cookieConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t-2 border-cyan-500 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-300">
            {t(language, 'cookiesBanner.text')}{' '}
            <Link href="/politica-privacidad" className="text-cyan-400 hover:text-cyan-300 underline">
              {t(language, 'cookiesBanner.privacy')}
            </Link>
            ,{' '}
            <Link href="/terminos-condiciones" className="text-cyan-400 hover:text-cyan-300 underline">
              {t(language, 'cookiesBanner.terms')}
            </Link>
            {' '}{t(language, 'cookiesBanner.and')}{' '}
            <Link href="/politica-cookies" className="text-cyan-400 hover:text-cyan-300 underline">
              {t(language, 'cookiesBanner.cookies')}
            </Link>
            .
          </p>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors"
        >
          {t(language, 'cookiesBanner.accept')}
        </button>
        <button
          onClick={handleClose}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-2"
          aria-label={t(language, 'cookiesBanner.close')}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
