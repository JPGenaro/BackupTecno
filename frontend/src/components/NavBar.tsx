'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContact } from '@/context/ContactContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { openContact } = useContact();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/nosotros', label: 'Nosotros' },
  ];

  const isActive = (href: string) => {
    if (href.includes('#')) {
      return false;
    }
    return pathname === href;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-blue-100/60 bg-slate-50/95 backdrop-blur-md shadow-[0_10px_30px_rgba(11,24,41,0.10)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-18 py-3">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 text-xl md:text-2xl font-bold text-[#0B1829] transition-colors"
          >
            <Image 
              src="/logo_real_no_fake_A.png" 
              alt="Backup Tecno Logo"
              width={32}
              height={32}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <span className="hidden sm:inline bg-gradient-to-r from-[#0B1829] to-blue-700 bg-clip-text text-transparent">
              Backup Tecno
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors duration-300 relative group ${
                  isActive(link.href)
                    ? 'text-blue-700'
                    : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-blue-700 transform transition-transform duration-300 ${
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button
              onClick={openContact}
              className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col items-center space-y-1.5 p-2 text-[#0B1829] hover:text-blue-700 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 transform ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 transform ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-blue-100/80">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-300 border-l-2 ${
                    isActive(link.href)
                      ? 'text-blue-700 bg-blue-50 border-blue-500'
                      : 'text-slate-700 hover:bg-blue-50 border-transparent hover:border-blue-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  closeMenu();
                  openContact();
                }}
                className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Contactar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
