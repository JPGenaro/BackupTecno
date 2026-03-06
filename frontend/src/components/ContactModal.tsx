'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useContact } from '@/context/ContactContext';

export default function ContactModal() {
  const { isOpen, closeContact } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCenterNotification, setShowCenterNotification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        // Mostrar notificación centrada por 5 segundos y cerrar modal después
        setShowCenterNotification(true);
        setTimeout(() => {
          setShowCenterNotification(false);
          setSubmitStatus('idle');
          closeContact();
        }, 5000);
      } else {
        const error = await response.json();
        setSubmitStatus('error');
        setErrorMessage(error.message || 'Error al enviar el formulario');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Por favor intenta nuevamente.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {showCenterNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-60 pointer-events-none">
          <div className="pointer-events-auto bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl shadow-lg px-5 py-4 max-w-sm w-full mx-4 text-left flex items-start gap-3 ring-1 ring-white/10">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="11" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                <path d="M7 12.5l2.5 2.5L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-white">Petición enviada correctamente!</p>
              <p className="text-xs text-white/90 mt-1">Gracias. Nos contactaremos pronto.</p>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo_real_no_fake_A.png"
              alt="Backup Tecno Logo"
              width={36}
              height={36}
            />
            <h2 className="text-2xl font-bold">Contactános</h2>
          </div>
          <button
            onClick={closeContact}
            className="text-white hover:text-gray-200 transition-colors"
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

        {/* Content */}
        <div className="p-6">
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✓ Mensaje enviado correctamente. Nos contactaremos pronto.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              ✗ {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-gray-900 placeholder-gray-400"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-gray-900 placeholder-gray-400"
                placeholder="tu@email.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-gray-900 placeholder-gray-400"
                placeholder="+54 9 ..."
              />
            </div>

            {/* Asunto */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-gray-900 placeholder-gray-400"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none text-gray-900 placeholder-gray-400"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            {/* Botones */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={closeContact}
                className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isLoading || submitStatus === 'success'}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar'
                )}
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            También puedes contactarnos por WhatsApp: <span className="font-semibold">+54 9 3513021607</span>
          </p>
        </div>
      </div>
    </div>
  );
}
