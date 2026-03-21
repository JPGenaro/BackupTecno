"use client";

import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';
import { notFoundContent } from '@/utils/sitePagesContent';

export default function NotFound() {
  const { language } = useLanguage();
  const content = notFoundContent[language];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black px-4">
      <div className="text-center max-w-xl">
        {/* Número 404 animado */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg">
            404
          </h1>
        </div>

        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {content.title}
        </h2>

        {/* Descripción */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {content.description}
        </p>

        {/* Decoración visual */}
        <div className="mb-12 flex justify-center gap-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {content.backHome}
          </Link>
        </div>

        {/* Mensaje adicional */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">💡 {content.tipTitle}</span> {content.tipText}
          </p>
        </div>
      </div>
    </div>
  );
}
