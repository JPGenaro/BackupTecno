'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1829] via-[#0f1f2e] to-[#1a2f42]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Content container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-24">
          
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left animate-fadeInLeft">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-16 w-auto">
                <Image
                  src="/logo.png"
                  alt="BackupTecno Logo"
                  width={200}
                  height={64}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Soluciones Web{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 animate-pulse">
                  Innovadoras
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-cyan-100 font-light leading-relaxed max-w-lg">
                Transformamos tus ideas en aplicaciones web modernas, escalables y de alto rendimiento. 
                Nuestro equipo experto te ayudará a alcanzar tus objetivos digitales.
              </p>
            </div>

            {/* Value propositions */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3 justify-center lg:justify-start group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-[#0B1829]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm sm:text-base font-medium">Tecnología de última generación</span>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-[#0B1829]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm sm:text-base font-medium">Equipos ágiles y experimentados</span>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-[#0B1829]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm sm:text-base font-medium">Soporte continuo y mantenimiento</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B1829] font-bold text-lg rounded-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50">
                Comenzar Proyecto
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-bold text-lg rounded-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 hover:text-cyan-200">
                Ver Portafolio
              </button>
            </div>
          </div>

          {/* Right side - Decorative element with stats */}
          <div className="hidden lg:flex justify-center items-center animate-fadeInRight">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl border border-cyan-400/30 backdrop-blur-sm"></div>
              
              {/* Stats grid */}
              <div className="relative z-10 grid grid-cols-2 gap-6 p-8 w-full max-w-sm">
                <div className="bg-gradient-to-br from-[#0B1829] to-[#1a2f42] rounded-xl p-6 border border-cyan-400/30 text-center group hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">50+</div>
                  <p className="text-cyan-100 text-sm font-medium">Proyectos Completados</p>
                </div>
                <div className="bg-gradient-to-br from-[#0B1829] to-[#1a2f42] rounded-xl p-6 border border-cyan-400/30 text-center group hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">40+</div>
                  <p className="text-cyan-100 text-sm font-medium">Clientes Satisfechos</p>
                </div>
                <div className="bg-gradient-to-br from-[#0B1829] to-[#1a2f42] rounded-xl p-6 border border-cyan-400/30 text-center group hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">8+</div>
                  <p className="text-cyan-100 text-sm font-medium">Años de Experiencia</p>
                </div>
                <div className="bg-gradient-to-br from-[#0B1829] to-[#1a2f42] rounded-xl p-6 border border-cyan-400/30 text-center group hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">99%</div>
                  <p className="text-cyan-100 text-sm font-medium">Clientes Felices</p>
                </div>
              </div>
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
