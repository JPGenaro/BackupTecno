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
      title: "Plataforma E-commerce Premium",
      description: "Tienda online de productos electrónicos con carrito de compras, sistema de pagos integrado y panel administrativo completo.",
      imagen: "https://images.unsplash.com/photo-1571017614386-c1ca9536e406?w=600&h=400&fit=crop",
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      link: "#",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "App Gestión de Proyectos",
      description: "Aplicación colaborativa para gestión de proyectos con tableros Kanban, asignación de tareas y seguimiento en tiempo real.",
      imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Zustand", "CSS Modules"],
      link: "#",
      color: "from-purple-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Dashboard Analytics Avanzado",
      description: "Panel de control analítico con gráficas en tiempo real, exportación de reportes y visualización de datos complejos.",
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Chart.js", "Node.js", "MongoDB", "Tailwind"],
      link: "#",
      color: "from-green-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Red Social de Fotografía",
      description: "Plataforma social especializada en fotógrafos con galería, comentarios, likes y sistema de seguimiento entre usuarios.",
      imagen: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      link: "#",
      color: "from-pink-500 to-cyan-500"
    },
    {
      id: 5,
      title: "SaaS de Automatización Marketing",
      description: "Plataforma SaaS para automatizar campañas de email, gestionar leads y analizar ROI con integraciones de terceros.",
      imagen: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      link: "#",
      color: "from-orange-500 to-cyan-500"
    },
    {
      id: 6,
      title: "Plataforma Learning Online",
      description: "Plataforma educativa con cursos, lecciones interactivas, videos en streaming y sistema de certificados automáticos.",
      imagen: "https://images.unsplash.com/photo-1516534775068-bb6c51482313?w=600&h=400&fit=crop",
      technologies: ["React", "Next.js", "Mux", "Supabase", "Tailwind CSS"],
      link: "#",
      color: "from-indigo-500 to-cyan-500"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <a
              key={proyecto.id}
              href={proyecto.link}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
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

                {/* View Project Link */}
                <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between group/link">
                  <span className="text-sm font-bold text-cyan-600">Ver Proyecto</span>
                  <svg className="w-5 h-5 text-cyan-600 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#0B1829] to-[#153047] rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Tienes un proyecto similar en mente?
            </h2>
            <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
              Cuéntanos tu idea y te ayudaremos a convertirla en una realidad. Tenemos experiencia en proyectos de cualquier escala y complejidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto" className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B1829] px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Iniciar Proyecto
              </a>
              <button className="border-2 border-cyan-400 text-cyan-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300">
                Ver Más Proyectos
              </button>
            </div>
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
