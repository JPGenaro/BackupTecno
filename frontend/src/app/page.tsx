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
      <header style={{ marginBottom: "30px", borderBottom: "2px solid #333", paddingBottom: "20px" }}>
        <h1 style={{ color: "#000" }}>🎉 Backup Tecno - Página de Prueba</h1>
        <p style={{ color: "#333", fontSize: "16px" }}>Bienvenido al frontend del proyecto</p>
      </header>

      <main>
        <section style={{ marginBottom: "40px" }}>
          <h2>📝 Mensaje Importante</h2>
          <div style={{ backgroundColor: "#e8f4f8", padding: "15px", borderRadius: "5px", marginTop: "10px", border: "2px solid #2196F3" }}>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#000" }}>
              <strong>Esto es una página de prueba que sirve para cuando trabajen no encuentren todo vacío. Gracias.</strong>
            </p>
            <p style={{ fontSize: "14px", color: "#333", marginTop: "10px" }}>
              Esta página es solo un placeholder para facilitar el desarrollo. Siéntete libre de reemplazar este contenido
              con la estructura y componentes que necesites.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>🚀 Lo que puedes hacer desde aquí:</h2>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#000" }}>
            <li>Crear nuevas páginas en la carpeta <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>app/</code></li>
            <li>Importar componentes desde <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/components/</code></li>
            <li>Usar custom hooks de <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/hooks/</code></li>
            <li>Definir tipos en <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/types/</code></li>
            <li>Agregar utilidades en <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/utils/</code></li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>📦 Contenido Disponible</h2>
          <div style={{ backgroundColor: "#fff3cd", padding: "15px", borderRadius: "5px", border: "2px solid #ffc107" }}>
            <h3 style={{ color: "#000" }}>Componentes de Ejemplo:</h3>
            <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#333" }}>
              <li><code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/components/Button.tsx</code> - Botón básico con Tailwind</li>
            </ul>

            <h3 style={{ marginTop: "15px", color: "#000" }}>Custom Hooks:</h3>
            <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#333" }}>
              <li><code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/hooks/useLocalStorage.ts</code> - Hook para almacenamiento local</li>
            </ul>

            <h3 style={{ marginTop: "15px", color: "#000" }}>Tipos Definidos:</h3>
            <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#333" }}>
              <li><code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/types/index.ts</code> - User, Project, etc.</li>
            </ul>

            <h3 style={{ marginTop: "15px", color: "#000" }}>Funciones Útiles:</h3>
            <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#333" }}>
              <li><code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/utils/helpers.ts</code> - formatDate(), truncateText(), etc.</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>📚 Recursos Útiles</h2>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#000" }}>
            <li>Next.js: <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontWeight: "bold" }}>nextjs.org/docs</a></li>
            <li>React: <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontWeight: "bold" }}>react.dev</a></li>
            <li>Tailwind CSS: <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontWeight: "bold" }}>tailwindcss.com</a></li>
            <li>TypeScript: <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc", fontWeight: "bold" }}>typescriptlang.org</a></li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>🛠️ Comandos Comunes</h2>
          <div style={{ backgroundColor: "#d4edda", padding: "15px", borderRadius: "5px", fontFamily: "monospace", border: "2px solid #28a745" }}>
            <p style={{ color: "#000" }}><strong>Desarrollo:</strong> npm run dev</p>
            <p style={{ color: "#000" }}><strong>Build:</strong> npm run build</p>
            <p style={{ color: "#000" }}><strong>Producción:</strong> npm start</p>
            <p style={{ color: "#000" }}><strong>Linting:</strong> npm run lint</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>📋 Info del Proyecto</h2>
          <div style={{ backgroundColor: "#f3e5f5", padding: "15px", borderRadius: "5px", border: "2px solid #9c27b0" }}>
            <p style={{ color: "#000" }}><strong>Empresa:</strong> Backup Tecno</p>
            <p style={{ color: "#000" }}><strong>Tecnologías:</strong> Next.js 16, React 19, TypeScript 5, Tailwind CSS 4</p>
            <p style={{ color: "#000" }}><strong>Estado:</strong> ✅ Listo para desarrollo</p>
            <p style={{ color: "#000" }}><strong>Versión:</strong> 0.1.0</p>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>💡 Tips</h2>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", color: "#000" }}>
            <li>El servidor hot-reload es automático con <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>npm run dev</code></li>
            <li>Usa Tailwind CSS para estilos (clases de utilidad)</li>
            <li>Crea componentes reutilizables en <code style={{ backgroundColor: "#e0e0e0", padding: "2px 5px", borderRadius: "3px" }}>src/components/</code></li>
            <li>Define tipos en TypeScript para mejor IDE support</li>
            <li>Mantén el código limpio siguiendo las reglas de ESLint</li>
          </ul>
        </section>

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

        <footer style={{ 
          marginTop: "60px", 
          paddingTop: "20px", 
          borderTop: "2px solid #333", 
          textAlign: "center", 
          color: "#333",
          fontSize: "14px"
        }}>
          <p>Backup Tecno © 2026 | Página de prueba - Siéntete libre de modificar todo esto 🚀</p>
        </footer>
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
