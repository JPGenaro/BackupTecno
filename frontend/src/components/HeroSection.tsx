'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useContact } from '@/context/ContactContext';

export default function HeroSection() {
  const router = useRouter();
  const { openContact } = useContact();
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1829]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-28 -right-20 w-[28rem] h-[28rem] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[34rem] h-[34rem] -translate-x-1/2 -translate-y-1/2 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.12),transparent_32%)]"></div>
        <div className="absolute inset-0 opacity-[0.18] [background:linear-gradient(120deg,rgba(34,211,238,0.18),transparent_22%,transparent_78%,rgba(14,165,233,0.18))]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Content container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center py-12 sm:py-16 lg:py-24">
          
          {/* Left content */}
          <div className="space-y-8 text-center animate-fadeInLeft">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="animate-bounce" style={{ animationDuration: '3s' }}>
                <Image
                  src="/logo_real_no_fake_A.webp"
                  alt="Backup Tecno Logo"
                  width={80}
                  height={80}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
            
            {/* Main headline */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                <span className="block text-cyan-50/95">Elevá tu presencia digital con</span>
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-cyan-300 to-sky-300 bg-clip-text text-transparent [text-shadow:0_0_18px_rgba(34,211,238,0.32)] tracking-wide">
                  BackupTecno
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-cyan-100 font-light leading-relaxed max-w-3xl mx-auto">
                En <span className="font-bold text-cyan-300">BackupTecno</span> transformamos tus ideas en aplicaciones web modernas, escalables y de alto rendimiento. 
                Nuestro equipo experto te ayudará a alcanzar tus objetivos digitales.
              </p>
            </div>

            {/* Value propositions */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-[#0B1829]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm sm:text-base font-medium">Tecnología de última generación</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-[#0B1829]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm sm:text-base font-medium">Equipos ágiles y experimentados</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-[#0B1829]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm sm:text-base font-medium">Soporte continuo y mantenimiento</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <button
                onClick={openContact}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B1829] font-bold text-lg rounded-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                Comenzar Proyecto
              </button>
              <button 
                onClick={() => router.push('/proyectos')}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-bold text-lg rounded-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 hover:text-cyan-200">
                Ver Portafolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
