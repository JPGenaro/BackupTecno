'use client';

import { useEffect, useState } from 'react';

export default function NosotrosPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B1829] text-white">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        {/* Animated server bars background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-32 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-lg animate-pulse-slow"></div>
          <div className="absolute top-10 left-32 w-20 h-40 bg-gradient-to-b from-cyan-300/15 to-transparent rounded-lg animate-pulse-slow delay-200"></div>
          <div className="absolute top-16 left-56 w-24 h-48 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-lg animate-pulse-slow delay-400"></div>
          <div className="absolute top-10 right-56 w-24 h-48 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-lg animate-pulse-slow delay-300"></div>
          <div className="absolute top-16 right-32 w-20 h-40 bg-gradient-to-b from-cyan-300/15 to-transparent rounded-lg animate-pulse-slow delay-500"></div>
          <div className="absolute top-20 right-10 w-16 h-32 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-lg animate-pulse-slow delay-100"></div>
        </div>
        
        <div 
          className={`relative max-w-7xl mx-auto px-6 py-24 md:py-32 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200 animate-fade-in tracking-tight">
            Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl animate-slide-up">
            Creamos experiencias digitales excepcionales con código de excelencia
          </p>
        </div>
        
        {/* Diagonal separator */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,0 L1200,100 L1200,100 L0,100 Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* Historia Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div 
          className={`transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-[#0B1829] to-cyan-500 rounded-full animate-pulse"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1829]">Nuestra Historia</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-cyan-100 hover:border-cyan-300">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                <span className="text-6xl font-bold text-cyan-600 float-left mr-4 mt-2 leading-none">B</span>
                ackupTecno nació en 2025 de la pasión de un grupo de desarrolladores por crear soluciones 
                web innovadoras y de alta calidad. Fundada por programadores que soñaban con transformar ideas 
                en experiencias digitales excepcionales, nuestra empresa surgió en un momento donde la presencia 
                digital se volvía fundamental para el éxito empresarial.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                Desde nuestros inicios, hemos entendido que cada proyecto web es único y requiere un enfoque 
                personalizado. No solo escribimos código, creamos soluciones que impulsan negocios, conectan 
                personas y materializan visiones. Nuestra comprensión profunda de las tecnologías modernas y 
                las mejores prácticas de desarrollo nos permite entregar productos digitales robustos y escalables.
              </p>
              
              <p className="text-slate-700 leading-relaxed text-lg">
                Hoy, BackupTecno es sinónimo de desarrollo web de excelencia. Hemos crecido junto a 
                nuestros clientes, evolucionando con las últimas tecnologías y frameworks para anticiparnos a las 
                tendencias del mercado. Cada proyecto nos ha fortalecido, cada línea de código nos ha inspirado 
                a seguir mejorando nuestro craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Misión */}
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-[#0B1829] to-[#153047] rounded-2xl shadow-2xl p-8 md:p-10 text-white h-full hover:scale-105 transition-transform duration-500 relative overflow-hidden group border-2 border-cyan-500/30">
              <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500 border-2 border-cyan-400/50">
                  <svg className="w-10 h-10 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-100">Nuestra Misión</h2>
                
                <p className="text-cyan-50 leading-relaxed text-lg mb-4">
                  Desarrollar aplicaciones web excepcionales que transformen ideas en realidades digitales 
                  impactantes, utilizando las tecnologías más modernas y las mejores prácticas de programación.
                </p>
                
                <p className="text-cyan-50 leading-relaxed text-lg">
                  Nos comprometemos a entregar código limpio, escalable y mantenible, respaldados por 
                  un equipo de desarrolladores apasionados que entienden que detrás de cada sitio web hay 
                  negocios creciendo, usuarios conectándose y sueños haciéndose realidad.
                </p>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div 
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-2xl shadow-2xl p-8 md:p-10 text-white h-full hover:scale-105 transition-transform duration-500 relative overflow-hidden group border-2 border-cyan-400/40">
              <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500 border-2 border-white/30">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Visión</h2>
                
                <p className="text-cyan-50 leading-relaxed text-lg mb-4">
                  Ser reconocidos como referentes en desarrollo web en América Latina, destacándonos 
                  por nuestra maestría técnica, innovación constante y la capacidad de convertir proyectos 
                  complejos en soluciones elegantes y funcionales.
                </p>
                
                <p className="text-cyan-50 leading-relaxed text-lg">
                  Aspiramos a crear un ecosistema donde la programación de excelencia y el talento creativo 
                  se fusionen para construir el futuro digital, transformando desafíos técnicos en oportunidades 
                  de crecimiento y estableciendo relaciones duraderas basadas en la calidad del código y los resultados medibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div 
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1829] mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              El corazón de BackupTecno late con el talento, la pasión y el compromiso de personas excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Valor Humano */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-cyan-500 group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Desarrolladores Apasionados</h3>
              <p className="text-slate-600 leading-relaxed">
                Nuestro equipo está conformado por programadores que viven y respiran código. Cada desarrollador 
                aporta creatividad, pensamiento crítico y una pasión genuina por resolver problemas complejos 
                con soluciones elegantes. Cultivamos un ambiente de aprendizaje continuo y colaboración.
              </p>
            </div>

            {/* Excelencia Técnica */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-[#0B1829] group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0B1829] to-[#153047] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Stack Tecnológico Moderno</h3>
              <p className="text-slate-600 leading-relaxed">
                Trabajamos con las últimas tecnologías del ecosistema web: React, Next.js, TypeScript, 
                Node.js, y más. Nos mantenemos actualizados con las tendencias del desarrollo, adoptando 
                nuevas herramientas y frameworks cuando aportan valor real a nuestros proyectos.
              </p>
            </div>

            {/* Innovación Continua */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-cyan-600 group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Código de Calidad</h3>
              <p className="text-slate-600 leading-relaxed">
                Nos enorgullece escribir código limpio, bien documentado y mantenible. Aplicamos patrones de 
                diseño, principios SOLID, y realizamos code reviews exhaustivos. Cada proyecto se construye 
                pensando en su escalabilidad, performance y facilidad de mantenimiento a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div 
          className={`transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-[#0B1829] via-[#153047] to-[#0B1829] rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white relative overflow-hidden border-2 border-cyan-500/30">
            <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/10 rounded-full animate-pulse delay-500"></div>
              {/* Server icons */}
              <div className="absolute top-1/4 right-1/4 w-12 h-20 bg-cyan-500/20 rounded-lg animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 left-1/3 w-10 h-16 bg-cyan-500/20 rounded-lg animate-pulse-slow delay-200"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-50">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Transformemos tu idea en una aplicación web excepcional. Hablemos de código.
              </p>
              <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B1829] px-10 py-4 rounded-full font-bold text-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .bg-circuit-pattern {
          background-image: 
            linear-gradient(90deg, rgba(200, 230, 240, 0.03) 1px, transparent 1px),
            linear-gradient(0deg, rgba(200, 230, 240, 0.03) 1px, transparent 1px),
            linear-gradient(45deg, rgba(200, 230, 240, 0.02) 1px, transparent 1px);
          background-size: 30px 30px, 30px 30px, 20px 20px;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
}
