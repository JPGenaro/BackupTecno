'use client';

import Link from "next/link";
import Image from 'next/image';
import { useContact } from '@/context/ContactContext';

const WhatsAppIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Footer() {
  const { openContact } = useContact();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Sobre Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    // Contact will be handled specially below to open the contact modal
  ];


  const contactInfo = [
    { icon: "📧", label: "Email", value: "backup.tecno9@gmail.com" },
    { icon: "📍", label: "Ubicación", value: "Córdoba, Argentina" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Brand Section */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo_real_no_fake_A.webp"
                alt="Backup Tecno Logo"
                width={48}
                height={48}
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Backup Tecno
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
              Soluciones web innovadoras y desarrollo de excelencia para transformar tu negocio digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={openContact}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contacto Rápido</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="text-sm">
                  <div className="flex flex-col items-center md:flex-row md:items-start gap-2">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-gray-500 text-xs">{item.label}</p>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Networks */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Redes Sociales</h4>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                href="https://wa.me/5493513021607?text=Hola%20Backup%20Tecno!%20Me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-green-500 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <WhatsAppIcon />
              </Link>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Contáctanos por WhatsApp para más información sobre nuestros servicios.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-center md:justify-between items-center">
          <div className="text-gray-500 text-sm text-center md:text-left">
            <p>
              © {currentYear} <span className="text-blue-400 font-semibold">Backup Tecno</span>. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-end">
            <Link
              href="/politica-privacidad"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos-condiciones"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              Términos de Servicio
            </Link>
            <Link
              href="/politica-cookies"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>

        {/* Design Credit */}
        <div className="text-center mt-6 pt-6 border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            Diseñado y desarrollado con ❤️ por <span className="text-blue-400">Backup Tecno</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
