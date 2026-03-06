'use client';

import React from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Link from 'next/link';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useLocalStorage('cookieConsent', false);

  const handleClose = () => {
    setCookieConsent(true);
  };

  if (cookieConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t-2 border-cyan-500 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-300">
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación. Al continuar usando nuestro sitio, aceptas nuestros{' '}
            <Link href="/politica-privacidad" className="text-cyan-400 hover:text-cyan-300 underline">
              política de privacidad
            </Link>
            ,{' '}
            <Link href="/terminos-condiciones" className="text-cyan-400 hover:text-cyan-300 underline">
              términos y condiciones
            </Link>
            {' '}y{' '}
            <Link href="/politica-cookies" className="text-cyan-400 hover:text-cyan-300 underline">
              política de cookies
            </Link>
            .
          </p>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-2"
          aria-label="Cerrar"
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
