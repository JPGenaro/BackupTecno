'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProyectosPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const proyectos = [
    {
      id: 1,
      title: "Penicord",
      description: "Plataforma moderna de presentación y portafolio con arquitectura escalable. Sitio web profesional que showcasea servicios y proyectos usando componentes React reutilizables, animaciones fluidas y un diseño completamente responsivo.",
      imagen: "/penicord_fondo.svg",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
      link: "https://penicord.vercel.app/",
      github: "https://github.com/JPGenaro/Penicord",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "Sweet Life - Residencia para Adultos",
      description: "Plataforma web de marketing para residencia de adultos mayores con diseño elegante e intuitivo. Incluye galería visual, descripción de servicios, información de contacto, mapa de ubicación y optimización SEO completa para visibilidad en buscadores.",
      imagen: "/sweet_life_fondo.svg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Google Maps", "SEO Optimizado"],
      link: "https://www.sweetlife.com.ar/",
      github: "https://github.com/JPGenaro/Residencial-para-Adultos",
      color: "from-green-500 to-cyan-500"
    },
    {
      id: 3,
      title: "CarShop - Tienda de Repuestos",
      description: "Plataforma e-commerce full-stack para una tienda especializada en repuestos automotrices. Incluye catálogo productos con búsqueda inteligente, filtros avanzados, fichas técnicas detalladas, carrito de compras, autenticación de usuarios y administración completa de inventario con panel de control.",
      imagen: "/carshop_fondo.svg",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL"],
      link: "https://car-shop-dusky.vercel.app/",
      github: "https://github.com/JPGenaro/CarShop",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B1829] text-white">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        {/* Animated background elements */}
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
            Nuestros Proyectos
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl animate-slide-up">
            Explora algunos de los proyectos más destacados que hemos desarrollado para nuestros clientes
          </p>
        </div>
        
        {/* Diagonal separator */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,0 L1200,100 L1200,100 L0,100 Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <div
              key={proyecto.id}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <a
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-64 overflow-hidden rounded-2xl shadow-lg mb-4 bg-slate-200">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Overlay gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${proyecto.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  
                  {/* Badge flotante */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#0B1829] shadow-lg">
                    Proyecto
                  </div>
                </div>
              </a>

              {/* Card Content */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 group-hover:border-cyan-400 p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1829] mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                  {proyecto.title}
                </h3>
                
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                  {proyecto.description}
                </p>

                {/* Technologies Tags */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Stack Tecnológico</p>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-100 to-cyan-50 text-cyan-700 border border-cyan-200 hover:border-cyan-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <a
                    href={proyecto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
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
