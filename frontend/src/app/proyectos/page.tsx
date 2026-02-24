'use client';

import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';

type Project = {
  title: string;
  description: string;
  img: string;
  stack: string[];
};

export default function ProyectosPage() {
  const [open, setOpen] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Plataforma eCommerce',
      description: 'Tienda online con panel administrativo y pasarela de pagos.',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop',
      stack: ['Next.js', 'React', 'PostgreSQL']
    },
    {
      title: 'Dashboard Analítico',
      description: 'Visualización de métricas en tiempo real y dashboards personalizados.',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=80&auto=format&fit=crop',
      stack: ['React', 'TypeScript', 'Node.js']
    },
    {
      title: 'App de Reservas',
      description: 'Sistema de reservas con integración de calendarios y notificaciones.',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80&auto=format&fit=crop',
      stack: ['React', 'GraphQL', 'MongoDB']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1829] mb-4">Proyectos Anteriores</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">Selección de trabajos anteriores con imágenes, descripción y el stack técnico usado.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={p.title} style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s both` }}>
              <ProjectCard project={p} onOpen={(proj) => setOpen(proj)} />
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 scale-100">
            <div className="w-full h-64 bg-center bg-cover" style={{ backgroundImage: `url(${open.img})` }} />
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="md:flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{open.title}</h2>
                  <p className="text-slate-600 mt-3 md:mt-4">{open.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {open.stack.map(s => (
                      <span key={s} className="text-xs md:text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <button onClick={() => setOpen(null)} className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition">Cerrar ✕</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
