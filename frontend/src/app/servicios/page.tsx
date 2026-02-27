'use client';

import { useEffect, useState } from 'react';

export default function ServiciosPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Desarrollo Web Completo",
      description: "Creamos aplicaciones web modernas, rápidas y escalables utilizando React, Next.js, TypeScript y las últimas tecnologías del mercado.",
      icon: "🚀",
      features: [
        "Aplicaciones web responsivas",
        "Progressive Web Apps (PWA)",
        "E-commerce personalizados",
        "Plataformas SaaS"
      ]
    },
    {
      title: "Diseño UI/UX",
      description: "Diseñamos interfaces intuitivas y atractivas que proporcionan la mejor experiencia de usuario posible en todas las plataformas.",
      icon: "🎨",
      features: [
        "Diseño de interfaces modernas",
        "Prototipado y wireframing",
        "User research y testing",
        "Diseño responsivo"
      ]
    },
    {
      title: "Consultoría Tecnológica",
      description: "Asesoramiento estratégico en arquitectura de software, elección de tecnologías y optimización de procesos de desarrollo.",
      icon: "💡",
      features: [
        "Auditoría de código",
        "Selección de stack tecnológico",
        "Optimización de rendimiento",
        "Mentoring técnico"
      ]
    },
    {
      title: "Mantenimiento y Soporte",
      description: "Mantenimiento continuo de tus aplicaciones con actualizaciones, corrección de bugs y mejoras de seguridad.",
      icon: "🔧",
      features: [
        "Actualizaciones de seguridad",
        "Corrección de bugs",
        "Optimización de base de datos",
        "Monitoreo 24/7"
      ]
    },
    {
      title: "Integración de APIs",
      description: "Integramos sistemas externos, APIs y servicios de terceros en tu aplicación de forma segura y eficiente.",
      icon: "🔗",
      features: [
        "Integración de pagos",
        "APIs de redes sociales",
        "Servicios en la nube",
        "Webhooks y automatización"
      ]
    },
    {
      title: "Optimización SEO y Performance",
      description: "Optimizamos tu sitio web para mejor posicionamiento en buscadores y máximo rendimiento de usuario.",
      icon: "⚡",
      features: [
        "SEO técnico",
        "Optimización de velocidad",
        "Core Web Vitals",
        "Análisis y reportes"
      ]
    }
  ];

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
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl animate-slide-up">
            Soluciones web completas y personalizadas para tu negocio
          </p>
        </div>
        
        {/* Diagonal separator */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,0 L1200,100 L1200,100 L0,100 Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-cyan-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Icon Section */}
              <div className="h-24 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center group-hover:from-cyan-500 group-hover:to-cyan-600 transition-all duration-300">
                <div className="text-5xl">{service.icon}</div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0B1829] mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="px-8 pb-8">
                <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Conocer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1829] mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-lg text-slate-600">
            Un enfoque metodológico y transparente para asegurar tu éxito
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: "01", title: "Discovery", description: "Entendemos tus necesidades y objetivos" },
            { number: "02", title: "Planificación", description: "Diseñamos la estrategia y arquitectura" },
            { number: "03", title: "Desarrollo", description: "Construimos con código de excelencia" },
            { number: "04", title: "Lanzamiento", description: "Deployment y soporte continuo" }
          ].map((step, index) => (
            <div
              key={index}
              className="relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${(index + 6) * 0.1}s both`
              }}
            >
              <div className="bg-white border-2 border-slate-200 hover:border-cyan-400 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600 mb-3">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#0B1829] mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-cyan-400">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#0B1829] to-[#153047] rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </h2>
            <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está aquí para ayudarte a alcanzar tus objetivos
            </p>
            <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B1829] px-10 py-4 rounded-full font-bold text-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
