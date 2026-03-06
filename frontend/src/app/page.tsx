'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { useContact } from '@/context/ContactContext';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('servicios');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openContact } = useContact();

  const faqCategories = [
    { id: 'servicios', label: 'Servicios y Desarrollo' },
    { id: 'seguridad', label: 'Seguridad y Privacidad' },
    { id: 'soporte', label: 'Soporte y Mantenimiento' },
    { id: 'pagos', label: 'Pagos y Facturación' },
    { id: 'legal', label: 'Derechos y Responsabilidades' }
  ];

  const faqs: { [key: string]: Array<{ question: string; answer: string }> } = {
    servicios: [
      {
        question: "¿Qué tecnologías utilizan para el desarrollo web?",
        answer: `Trabajamos con el stack tecnológico más moderno:

- React y Next.js para frontend moderno
- TypeScript para código tipado y seguro
- Node.js en el backend
- Tailwind CSS para diseño responsivo
- PostgreSQL y MongoDB para bases de datos

Seleccionamos las tecnologías según tus necesidades específicas para garantizar el mejor resultado y máximo rendimiento.`
      },
      {
        question: "¿Cuánto tiempo toma desarrollar una aplicación web?",
        answer: `El tiempo depende de la complejidad:

- Sitio web corporativo: 2-4 semanas
- Aplicación web mediana: 1-3 meses  
- Aplicación compleja: 2-6 meses

Siempre proporcionamos un cronograma detallado en la fase de planificación para que sepas exactamente qué esperar y puedas planificar tu negocio.`
      },
      {
        question: "¿Desarrollan páginas web personalizadas o utilizan plantillas prediseñadas?",
        answer: `100% personalización. No usamos plantillas.

Cada proyecto es:
- Diseñado desde cero
- Adaptado a tu marca y colores corporativos
- Diseñado según tus objetivos únicos
- Basado en tus requisitos funcionales específicos
- Completamente único en el mercado

Garantizamos que tu sitio se destaque de la competencia.`
      },
      {
        question: "¿Ofrecen desarrollo de aplicaciones web además de sitios web tradicionales?",
        answer: `Sí, ofrecemos desarrollo completo de aplicaciones web empresariales.

Desde proyectos simples como:
- Sitios informativos
- Blogs de empresa

Hasta aplicaciones de alta complejidad como:
- Dashboards de administración
- Aplicaciones SaaS
- Sistemas de gestión empresarial
- Integraciones con APIs externas
- Plataformas multiusuario`
      },
      {
        question: "¿Pueden integrar bases de datos en sistemas o páginas web existentes?",
        answer: `Absolutamente. Hacemos integraciones completas de datos.

Nuestros servicios incluyen:
- Integración de bases de datos en sistemas existentes
- Migraciones de datos complejas
- Consolidación de múltiples fuentes de datos
- Optimización de consultas
- Mejora de rendimiento

Trabajamos con PostgreSQL, MongoDB, MySQL y más.`
      },
      {
        question: "¿Cómo es el proceso de desarrollo?",
        answer: `Nuestro proceso es iterativo y profesional:

1. Discovery y planificación estratégica
   Entendemos tu negocio y objetivos

2. Diseño UX/UI
   Prototipado y aprobación

3. Desarrollo en sprints ágiles
   Entregas parciales cada 2 semanas

4. Testing exhaustivo
   Unitario, integración, rendimiento y seguridad

5. Despliegue y lanzamiento
   Con soporte durante el rollout

Mantenemos comunicación constante con avances regulares.`
      }
    ],
    seguridad: [
      {
        question: "¿Cómo garantizan la seguridad de las aplicaciones y bases de datos?",
        answer: `Implementamos múltiples capas de seguridad:

Encriptación:
- AES-256 de datos en tránsito y en reposo
- Certificados SSL/TLS de 256 bits

Autenticación:
- JWT y OAuth 2.0
- Autenticación multifactor

Protección:
- Contra inyecciones SQL y XSS
- Firewalls y WAF
- Validación exhaustiva de entrada

Cumplimiento:
- Estándares OWASP TOP 10
- Auditorías regularmente
- Penetration testing trimestral`
      },
      {
        question: "¿Cómo protegen la información y los datos de los clientes?",
        answer: `La privacidad es nuestra máxima prioridad.

Prácticas de protección:
- Cumplimiento GDPR y CCPA
- Almacenamiento seguro con redundancia
- Backups automatizados diarios
- Cifrado de datos en reposo
- Registro auditable de accesos

Normativas:
- Normas internacionales de confidencialidad
- Política de retención de datos clara
- Derecho al olvido garantizado
- Portabilidad de datos`
      },
      {
        question: "¿Qué información personal recopilan de los usuarios?",
        answer: `Solo recopilamos información estrictamente necesaria.

Información voluntaria:
- Datos de contacto
- Información de pago
- Consultas específicas del proyecto

Qué NO procesamos:
- Origen racial o étnico
- Orientación sexual
- Creencias religiosas
- Salud o datos biométricos

Datos técnicos (solo para mejora):
- Dirección IP anónima
- Navegador y dispositivo
- Ubicación general`
      },
      {
        question: "¿Realizan pruebas de seguridad antes de lanzar un proyecto?",
        answer: `Sí, realizamos pruebas exhaustivas de seguridad:

Análisis de código:
- Testing de penetración completo
- Análisis de vulnerabilidades automático
- Revisión manual de código crítico

Pruebas de inyección:
- SQL injection
- XSS (cross-site scripting)
- CSRF (cross-site request forgery)
- Command injection

Verificaciones:
- Validación de autenticación
- Análisis de dependencias
- Certificados SSL
- Permisos de archivos

Todo antes del lanzamiento oficial.`
      },
      {
        question: "¿Utilizan cookies y qué información recopilan?",
        answer: `Usamos cookies de forma responsable.

Cookies esenciales (obligatorias):
- Mantienen la sesión activa
- Permiten guardar preferencias
- Necesarias para funcionalidad

Cookies opcionales (puedes rechazar):
- Analytics (comportamiento de usuario)
- Publicidad personalizada
- Mejora de experiencia

Tu control:
- Centro de Preferencias de Cookies visible
- Puedes rechazar en cualquier momento
- No vendemos datos a terceros
- Transparencia total`
      },
      {
        question: "¿Cómo se transfiere la información internacionalmente?",
        answer: `Máxima seguridad en transferencias internacionales.

Infraestructura:
- Servidores en centros de datos certificados
- Redundancia geográfica para disponibilidad
- Almacenamiento distribuido

Seguridad:
- Cifrado en tránsito (TLS 1.3)
- Cumplimiento regulaciones internacionales
- Protección GDPR en todas las regiones

Confidabilidad:
- Uptime garantizado 99.9%
- Monitoreo 24/7
- Disaster recovery plan`
      }
    ],
    soporte: [
      {
        question: "¿Ofrecen mantenimiento y soporte técnico después de entregar el proyecto?",
        answer: `¡Absolutamente! Ofrecemos planes de mantenimiento continuo.

Qué incluye:
- Monitoreo del sistema 24/7
- Actualizaciones de seguridad mensuales
- Corrección de bugs con prioridad
- Mejoras de rendimiento continuas
- Implementación de nuevas funcionalidades

Soporte técnico:
- Disponible según tus necesidades
- Respuesta garantizada en 24 horas
- Escalación para emergencias críticas

Aseguramos tu aplicación actualizada, segura y óptima.`
      },
      {
        question: "¿Pueden trabajar con nuestro equipo existente?",
        answer: `Sí, somos completamente flexibles.

Modelos de trabajo disponibles:
- Integración con tu equipo interno
- Trabajo completamente independiente
- Modelo híbrido personalizado
- Agile coaching para tu equipo

Herramientas que usamos:
- Git para versionado (GitHub, GitLab)
- Jira para seguimiento de tareas
- Slack para comunicación
- Azure DevOps
- Confluence para documentación

Nos adaptamos a tu flujo de trabajo.`
      },
      {
        question: "¿Realizan pruebas antes de lanzar un proyecto?",
        answer: `Sí, pruebas exhaustivas en todas las fases.

Testing unitario:
- Cada componente se prueba individualmente
- Cobertura mínima del 80%
- Métodos y funciones aisladas

Testing de integración:
- Interacción entre módulos
- Conexiones con APIs externas
- Integración de bases de datos

Testing de rendimiento:
- Carga bajo estrés
- Optimización de velocidad
- Escalabilidad

Testing de usuario:
- Aceptación del cliente
- Accesibilidad en navegadores
- Experiencia de usuario`
      },
      {
        question: "¿Cuál es el tiempo de respuesta para soporte técnico?",
        answer: `Tiempos de respuesta garantizados por plan:

Plan Básico:
- Respuesta: 48 horas
- Ideal para sitios estáticos

Plan Premium:
- Respuesta: 24 horas
- Horas de soporte: 20/mes
- Más frecuente

Plan Enterprise:
- Respuesta: 4 horas
- Soporte prioritario
- Horas ilimitadas

Emergencias críticas:
- Respuesta inmediata 24/7
- Costo adicional
- Garantizado para negocio crítico

Contacto directo con equipo técnico.`
      }
    ],
    pagos: [
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: `Múltiples métodos para tu conveniencia.

Pago en línea (instantáneo):
- PayPal (incluyendo financiamiento)
- Visa
- Mastercard
- Otras tarjetas internacionales

Transferencia bancaria:
- Cta. en Argentina
- Transferencia internacional
- SWIFT disponible

Seguridad:
- Encriptación SSL 256 bits
- Cumplimiento PCI-DSS
- Sistema de facturación automática

Notas:
- Sin comisiones ocultas
- Factura emitida inmediatamente`
      },
      {
        question: "¿Cómo funciona el modelo de precios?",
        answer: `Cada proyecto tiene un presupuesto personalizado.

Factores que consideramos:
- Complejidad del proyecto
- Tiempo de desarrollo estimado
- Tecnologías requeridas
- Soporte post-lanzamiento

Formas de pago:
- Pago por hito (inicial 50%, final 50%)
- Planes de financiamiento para grandes proyectos
- Descuentos por pagos anticipados


`
      },
      {
        question: "¿Se pueden hacer cambios durante el proyecto?",
        answer: `Sí, pero con proceso controlado.

Cambios menores:
- Ajustes de diseño
- Correcciones de texto
- Cambios de funcionalidades simples
- Incluidos dentro del alcance inicial

Cambios significativos:
- Requieren "change request" formal
- Evaluación de impacto
- Cálculo de costo y tiempo
- Acuerdo escrito actualizado

Proceso:
1. Solicitud del cambio
2. Análisis de impacto
3. Propuesta de precio y timeline
4. Aprobación del cliente
5. Ejecución

Flexibilidad garantizada.`
      }
    ],
    legal: [
      {
        question: "¿Entregan el código fuente del proyecto?",
        answer: `Sí, completo y documentado.

Recibiras:
- Todo el código fuente
- Repositorio Git con historial completo
- Documentación técnica del proyecto
- Archivos de configuración
- Instrucciones de deployment
- API documentation
- Diagrama de arquitectura

Propiedad:
- Ownership total después del pago
- Puedes modificar libremente
- Puedes contratar otro desarrollador
- Sin restricciones de uso interno

Confianza y transparencia total.`
      },
      {
        question: "¿Cuáles son los derechos de propiedad intelectual?",
        answer: `Clara separación de derechos:

Tú eres dueño de:
- Código de tu proyecto
- Diseño personalizado
- Contenido de tu aplicación
- Datos de tu negocio

BackupTecno conserva:
- Logo y marca de BackupTecno
- Herramientas propias
- Librerías open source (con licencia)
- Conocimiento adquirido

Queda prohibido:
- Revender o redistribuir como propio
- Copiar sin autorización
- Violación de derechos de terceros
- Sublicenciamiento

Licencia:
- No exclusiva y revocable para funcionar
- Uso interno y comercial permitido`
      },
      {
        question: "¿Qué edad tienen que tener los usuarios?",
        answer: `Términos de edad claros:

BackupTecno está destinado a:
- Usuarios mayores de 18 años
- Empresas registradas legalmente
- Emprendedores con legalidad

Requisitos:
- Capacidad legal para contratar
- No eres menor de edad en tu jurisdicción
- Aceptación explícita de términos

Verificación:
- Podemos solicitar verificación de edad
- Cancelación inmediata si es necesario
- Violación resulta en suspensión

Responsabilidad del usuario: confirmar edad.`
      },
      {
        question: "¿Cuánto tiempo conservan la información de los usuarios?",
        answer: `Política clara de retención de datos:

Datos de transacciones:
- Mínimo 5 años (requisitos fiscales)
- Respaldados en archivo seguro
- Accesible para auditorías

Datos de clientes activos:
- Mientras exista relación comercial
- Más período de archivo de 2 años

Datos de soporte:
- Conservados por 1 año después de cierre
- Para referencia de problemas

Tus derechos:
- Solicitar acceso a tus datos
- Solicitar corrección
- Solicitar eliminación ("ser olvidado")
- Máximo 30 días de respuesta`
      },
      {
        question: "¿Cuáles son los derechos de privacidad de los usuarios?",
        answer: `Derechos completos sobre tus datos personales (GDPR):

Derecho de acceso:
- Saber qué datos tenemos
- Copia en formato legible
- Explicación del procesamiento

Derecho de rectificación:
- Corregir datos incorrectos
- Actualizar información desactualizada
- Solicitud sin costo

Derecho de eliminación:
- "Derecho al olvido"
- Borrar datos personales
- Excepto requisitos legales

Derecho de portabilidad:
- Obtener datos en formato estructurado
- Transferir a otro proveedor

Derecho de oposición:
- Oponerme a cierto procesamiento
- Detener marketing

Cómo ejercer: Contacta nuestro equipo legal de datos.`
      },
      {
        question: "¿Qué prohibiciones hay para usar los servicios?",
        answer: `Prohibiciones estrictas de uso:

Actos ilegales prohibidos:
- Uso de forma automatizada o fraudulenta
- Propósitos ilegales
- Transmitir malware o virus
- Acceso no autorizado
- Acoso o spam
- Violación de leyes

Prohibiciones comerciales:
- Revender servicios sin autorizar
- Copiar código protegido
- Competencia desleal
- Scraping de datos
- Alteración de contenido

Consecuencias:
- Suspensión inmediata
- Cancelación de servicio
- Acciones legales
- Recuperación de daños
- Reporte a autoridades

Cumplimiento obligatorio en todos los servicios.`
      }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <HeroSection />

      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
        <main>
          <section id="faq" className="my-20 max-w-6xl mx-auto px-6 scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1829] mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-slate-600">
                Encuentra respuestas sobre desarrollo web, seguridad, soporte y más
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                    activeCategory === category.id
                      ? 'bg-[#0B1829] text-white shadow-lg shadow-blue-500/50'
                      : 'bg-slate-200 text-[#0B1829] hover:bg-slate-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {faqs[activeCategory].map((faq, index) => (
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
                          strokeWidth={2} 
                          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                        />
                      </svg>
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <div 
                      className="px-6 py-5 bg-slate-50 border-t-2 border-slate-200 leading-relaxed animate-fadeIn space-y-3"
                      style={{
                        animation: `slideDown 0.3s ease-out`
                      }}
                    >
                      <div className="text-slate-700 whitespace-pre-line text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">¿No encontraste lo que buscas?</p>
              <button
                onClick={openContact}
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contáctanos Directamente
              </button>
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
        <Analytics />
      </div>
    </>
  );
}
