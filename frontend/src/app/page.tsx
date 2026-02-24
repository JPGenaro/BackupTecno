'use client';

import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué tecnologías utilizan para el desarrollo web?",
      answer: "Trabajamos con el stack tecnológico más moderno: React, Next.js, TypeScript, Node.js, Tailwind CSS, y bases de datos como PostgreSQL y MongoDB. Seleccionamos las tecnologías según las necesidades específicas de cada proyecto para garantizar el mejor resultado."
    },
    {
      question: "¿Cuánto tiempo toma desarrollar una aplicación web?",
      answer: "El tiempo de desarrollo depende de la complejidad y alcance del proyecto. Un sitio web corporativo puede tomar 2-4 semanas, mientras que aplicaciones web complejas pueden requerir 2-6 meses. Siempre proporcionamos un cronograma detallado en la fase de planificación."
    },
    {
      question: "¿Ofrecen mantenimiento después del lanzamiento?",
      answer: "¡Absolutamente! Ofrecemos planes de mantenimiento continuo que incluyen actualizaciones de seguridad, corrección de bugs, mejoras de rendimiento y nuevas funcionalidades. Nos aseguramos de que tu aplicación se mantenga actualizada y funcionando de manera óptima."
    },
    {
      question: "¿Pueden trabajar con nuestro equipo existente?",
      answer: "Sí, somos flexibles en nuestra forma de trabajo. Podemos integrarnos con tu equipo interno, trabajar de manera completamente independiente, o cualquier modelo híbrido que funcione mejor para tu proyecto. Utilizamos metodologías ágiles y herramientas de colaboración modernas."
    },
    {
      question: "¿Entregan el código fuente del proyecto?",
      answer: "Por supuesto. Al finalizar el proyecto, recibes todo el código fuente, documentación completa, y ownership total de tu aplicación. Creemos en la transparencia y en que nuestros clientes tengan control completo de su propiedad digital."
    },
    {
      question: "¿Cómo es el proceso de desarrollo?",
      answer: "Seguimos un proceso iterativo: 1) Discovery y planificación, 2) Diseño UX/UI, 3) Desarrollo en sprints, 4) Testing exhaustivo, 5) Despliegue y lanzamiento. Mantenemos comunicación constante y presentamos avances regularmente para asegurar que el producto final supere tus expectativas."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
      <main>
        {/* FAQ Section */}
        <section className="my-20 max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1829] mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-slate-600">
              Encuentra respuestas sobre desarrollo web, tecnologías y nuestro proceso de trabajo
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
                  style={{
                    backgroundColor: openFaq === index ? '#0B1829' : 'white'
                  }}
                >
                  <span 
                    className={`text-lg font-semibold transition-colors duration-300 pr-4 ${
                      openFaq === index ? 'text-cyan-100' : 'text-[#0B1829]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div 
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaq === index 
                        ? 'bg-cyan-500 rotate-180' 
                        : 'bg-slate-200 group-hover:bg-cyan-100'
                    }`}
                  >
                    <svg 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        openFaq === index ? 'text-white' : 'text-slate-600'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: openFaq === index ? '500px' : '0',
                    opacity: openFaq === index ? 1 : 0
                  }}
                >
                  <div className="px-6 py-5 bg-gradient-to-br from-cyan-50 to-slate-50 border-t-2 border-cyan-200">
                    <p className="text-slate-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA después del FAQ */}
          <div className="mt-12 text-center bg-gradient-to-r from-[#0B1829] to-[#153047] rounded-2xl p-10 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-300 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-cyan-100 mb-6 text-lg">
                Nuestro equipo de desarrolladores está listo para convertir tu idea en realidad
              </p>
              <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B1829] px-8 py-3 rounded-full font-bold text-lg hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Hablemos de tu Proyecto
              </button>
            </div>
          </div>
        </section>
      </main>

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
