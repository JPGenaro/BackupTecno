import type { Language } from '@/context/LanguageContext';

export interface FAQItem {
  question: string;
  answer: string;
}

export type FAQByCategory = Record<string, FAQItem[]>;

export const faqContentByLanguage: Record<Language, FAQByCategory> = {
  es: {
    servicios: [
      {
        question: '¿Que tecnologias utilizan para el desarrollo web?',
        answer: `Trabajamos con el stack tecnologico mas moderno:

- React y Next.js para frontend moderno
- TypeScript para codigo tipado y seguro
- Node.js en el backend
- Tailwind CSS para diseno responsivo
- PostgreSQL y MongoDB para bases de datos

Seleccionamos las tecnologias segun tus necesidades especificas para garantizar el mejor resultado y maximo rendimiento.`,
      },
      {
        question: '¿Cuanto tiempo toma desarrollar una aplicacion web?',
        answer: `El tiempo depende de la complejidad:

- Sitio web corporativo: 2-4 semanas
- Aplicacion web mediana: 1-3 meses
- Aplicacion compleja: 2-6 meses

Siempre proporcionamos un cronograma detallado en la fase de planificacion para que sepas exactamente que esperar y puedas planificar tu negocio.`,
      },
      {
        question: '¿Desarrollan paginas web personalizadas o utilizan plantillas predisenadas?',
        answer: `100% personalizacion. No usamos plantillas.

Cada proyecto es:
- Disenado desde cero
- Adaptado a tu marca y colores corporativos
- Disenado segun tus objetivos unicos
- Basado en tus requisitos funcionales especificos
- Completamente unico en el mercado

Garantizamos que tu sitio se destaque de la competencia.`,
      },
      {
        question: '¿Ofrecen desarrollo de aplicaciones web ademas de sitios web tradicionales?',
        answer: `Si, ofrecemos desarrollo completo de aplicaciones web empresariales.

Desde proyectos simples como:
- Sitios informativos
- Blogs de empresa

Hasta aplicaciones de alta complejidad como:
- Dashboards de administracion
- Aplicaciones SaaS
- Sistemas de gestion empresarial
- Integraciones con APIs externas
- Plataformas multiusuario`,
      },
      {
        question: '¿Pueden integrar bases de datos en sistemas o paginas web existentes?',
        answer: `Absolutamente. Hacemos integraciones completas de datos.

Nuestros servicios incluyen:
- Integracion de bases de datos en sistemas existentes
- Migraciones de datos complejas
- Consolidacion de multiples fuentes de datos
- Optimizacion de consultas
- Mejora de rendimiento

Trabajamos con PostgreSQL, MongoDB, MySQL y mas.`,
      },
      {
        question: '¿Como es el proceso de desarrollo?',
        answer: `Nuestro proceso es iterativo y profesional:

1. Discovery y planificacion estrategica
   Entendemos tu negocio y objetivos

2. Diseno UX/UI
   Prototipado y aprobacion

3. Desarrollo en sprints agiles
   Entregas parciales cada 2 semanas

4. Testing exhaustivo
   Unitario, integracion, rendimiento y seguridad

5. Despliegue y lanzamiento
   Con soporte durante el rollout

Mantenemos comunicacion constante con avances regulares.`,
      },
    ],
    seguridad: [
      {
        question: '¿Como garantizan la seguridad de las aplicaciones y bases de datos?',
        answer: `Implementamos multiples capas de seguridad:

Encriptacion:
- AES-256 de datos en transito y en reposo
- Certificados SSL/TLS de 256 bits

Autenticacion:
- JWT y OAuth 2.0
- Autenticacion multifactor

Proteccion:
- Contra inyecciones SQL y XSS
- Firewalls y WAF
- Validacion exhaustiva de entrada

Cumplimiento:
- Estandares OWASP TOP 10
- Auditorias regularmente
- Penetration testing trimestral`,
      },
      {
        question: '¿Como protegen la informacion y los datos de los clientes?',
        answer: `La privacidad es nuestra maxima prioridad.

Practicas de proteccion:
- Cumplimiento GDPR y CCPA
- Almacenamiento seguro con redundancia
- Backups automatizados diarios
- Cifrado de datos en reposo
- Registro auditable de accesos

Normativas:
- Normas internacionales de confidencialidad
- Politica de retencion de datos clara
- Derecho al olvido garantizado
- Portabilidad de datos`,
      },
      {
        question: '¿Que informacion personal recopilan de los usuarios?',
        answer: `Solo recopilamos informacion estrictamente necesaria.

Informacion voluntaria:
- Datos de contacto
- Informacion de pago
- Consultas especificas del proyecto

Que NO procesamos:
- Origen racial o etnico
- Orientacion sexual
- Creencias religiosas
- Salud o datos biometricos

Datos tecnicos (solo para mejora):
- Direccion IP anonima
- Navegador y dispositivo
- Ubicacion general`,
      },
      {
        question: '¿Realizan pruebas de seguridad antes de lanzar un proyecto?',
        answer: `Si, realizamos pruebas exhaustivas de seguridad:

Analisis de codigo:
- Testing de penetracion completo
- Analisis de vulnerabilidades automatico
- Revision manual de codigo critico

Pruebas de inyeccion:
- SQL injection
- XSS (cross-site scripting)
- CSRF (cross-site request forgery)
- Command injection

Verificaciones:
- Validacion de autenticacion
- Analisis de dependencias
- Certificados SSL
- Permisos de archivos

Todo antes del lanzamiento oficial.`,
      },
      {
        question: '¿Utilizan cookies y que informacion recopilan?',
        answer: `Usamos cookies de forma responsable.

Cookies esenciales (obligatorias):
- Mantienen la sesion activa
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
- Transparencia total`,
      },
      {
        question: '¿Como se transfiere la informacion internacionalmente?',
        answer: `Maxima seguridad en transferencias internacionales.

Infraestructura:
- Servidores en centros de datos certificados
- Redundancia geografica para disponibilidad
- Almacenamiento distribuido

Seguridad:
- Cifrado en transito (TLS 1.3)
- Cumplimiento regulaciones internacionales
- Proteccion GDPR en todas las regiones

Confiabilidad:
- Uptime garantizado 99.9%
- Monitoreo 24/7
- Disaster recovery plan`,
      },
    ],
    soporte: [
      {
        question: '¿Ofrecen mantenimiento y soporte tecnico despues de entregar el proyecto?',
        answer: `¡Absolutamente! Ofrecemos planes de mantenimiento continuo.

Que incluye:
- Monitoreo del sistema 24/7
- Actualizaciones de seguridad mensuales
- Correccion de bugs con prioridad
- Mejoras de rendimiento continuas
- Implementacion de nuevas funcionalidades

Soporte tecnico:
- Disponible segun tus necesidades
- Respuesta garantizada en 24 horas
- Escalacion para emergencias criticas

Aseguramos tu aplicacion actualizada, segura y optima.`,
      },
      {
        question: '¿Pueden trabajar con nuestro equipo existente?',
        answer: `Si, somos completamente flexibles.

Modelos de trabajo disponibles:
- Integracion con tu equipo interno
- Trabajo completamente independiente
- Modelo hibrido personalizado
- Agile coaching para tu equipo

Nos adaptamos a tu flujo de trabajo.`,
      },
      {
        question: '¿Realizan pruebas antes de lanzar un proyecto?',
        answer: `Si, pruebas exhaustivas en todas las fases.

Testing unitario:
- Cada componente se prueba individualmente
- Cobertura minima del 80%
- Metodos y funciones aisladas

Testing de integracion:
- Interaccion entre modulos
- Conexiones con APIs externas
- Integracion de bases de datos

Testing de rendimiento:
- Carga bajo estres
- Optimizacion de velocidad
- Escalabilidad

Testing de usuario:
- Aceptacion del cliente
- Accesibilidad en navegadores
- Experiencia de usuario`,
      },
    ],
    pagos: [
      {
        question: '¿Que metodos de pago aceptan?',
        answer: `Multiples metodos para tu conveniencia.

Pago en linea (instantaneo):
- PayPal (incluyendo financiamiento)
- Visa
- Mastercard
- Otras tarjetas internacionales

Transferencia bancaria:
- Cta. en Argentina
- Transferencia internacional
- SWIFT disponible

Seguridad:
- Encriptacion SSL 256 bits
- Cumplimiento PCI-DSS
- Sistema de facturacion automatica

Notas:
- Sin comisiones ocultas
- Factura emitida inmediatamente`,
      },
      {
        question: '¿Como funciona el modelo de precios?',
        answer: `Cada proyecto tiene un presupuesto personalizado.

Factores que consideramos:
- Complejidad del proyecto
- Tiempo de desarrollo estimado
- Tecnologias requeridas
- Soporte post-lanzamiento

Formas de pago:
- Pago por hito (inicial 50%, final 50%)
- Planes de financiamiento para grandes proyectos
- Descuentos por pagos anticipados`,
      },
      {
        question: '¿Se pueden hacer cambios durante el proyecto?',
        answer: `Si, pero con proceso controlado.

Cambios menores:
- Ajustes de diseno
- Correcciones de texto
- Cambios de funcionalidades simples
- Incluidos dentro del alcance inicial

Cambios significativos:
- Requieren "change request" formal
- Evaluacion de impacto
- Calculo de costo y tiempo
- Acuerdo escrito actualizado

Proceso:
1. Solicitud del cambio
2. Analisis de impacto
3. Propuesta de precio y timeline
4. Aprobacion del cliente
5. Ejecucion

Flexibilidad garantizada.`,
      },
    ],
    legal: [
      {
        question: '¿Entregan el codigo fuente del proyecto?',
        answer: `Si, completo y documentado.

Recibiras:
- Todo el codigo fuente
- Repositorio Git con historial completo
- Documentacion tecnica del proyecto
- Archivos de configuracion
- Instrucciones de deployment
- API documentation
- Diagrama de arquitectura

Propiedad:
- Ownership total despues del pago
- Puedes modificar libremente
- Puedes contratar otro desarrollador
- Sin restricciones de uso interno

Confianza y transparencia total.`,
      },
      {
        question: '¿Cuales son los derechos de propiedad intelectual?',
        answer: `Clara separacion de derechos:

Tu eres dueno de:
- Codigo de tu proyecto
- Diseno personalizado
- Contenido de tu aplicacion
- Datos de tu negocio

BackupTecno conserva:
- Logo y marca de BackupTecno
- Herramientas propias
- Librerias open source (con licencia)
- Conocimiento adquirido

Queda prohibido:
- Revender o redistribuir como propio
- Copiar sin autorizacion
- Violacion de derechos de terceros
- Sublicenciamiento

Licencia:
- No exclusiva y revocable para funcionar
- Uso interno y comercial permitido`,
      },
      {
        question: '¿Que edad tienen que tener los usuarios?',
        answer: `Terminos de edad claros:

BackupTecno esta destinado a:
- Usuarios mayores de 18 anos
- Empresas registradas legalmente
- Emprendedores con legalidad

Requisitos:
- Capacidad legal para contratar
- No eres menor de edad en tu jurisdiccion
- Aceptacion explicita de terminos

Verificacion:
- Podemos solicitar verificacion de edad
- Cancelacion inmediata si es necesario
- Violacion resulta en suspension

Responsabilidad del usuario: confirmar edad.`,
      },
      {
        question: '¿Cuanto tiempo conservan la informacion de los usuarios?',
        answer: `Politica clara de retencion de datos:

Datos de transacciones:
- Minimo 5 anos (requisitos fiscales)
- Respaldados en archivo seguro
- Accesible para auditorias

Datos de clientes activos:
- Mientras exista relacion comercial
- Mas periodo de archivo de 2 anos

Datos de soporte:
- Conservados por 1 ano despues de cierre
- Para referencia de problemas

Tus derechos:
- Solicitar acceso a tus datos
- Solicitar correccion
- Solicitar eliminacion ("ser olvidado")
- Maximo 30 dias de respuesta`,
      },
      {
        question: '¿Cuales son los derechos de privacidad de los usuarios?',
        answer: `Derechos completos sobre tus datos personales (GDPR):

Derecho de acceso:
- Saber que datos tenemos
- Copia en formato legible
- Explicacion del procesamiento

Derecho de rectificacion:
- Corregir datos incorrectos
- Actualizar informacion desactualizada
- Solicitud sin costo

Derecho de eliminacion:
- "Derecho al olvido"
- Borrar datos personales
- Excepto requisitos legales

Derecho de portabilidad:
- Obtener datos en formato estructurado
- Transferir a otro proveedor

Derecho de oposicion:
- Oponerse a cierto procesamiento
- Detener marketing

Como ejercer: Contacta nuestro equipo legal de datos.`,
      },
      {
        question: '¿Que prohibiciones hay para usar los servicios?',
        answer: `Prohibiciones estrictas de uso:

Actos ilegales prohibidos:
- Uso de forma automatizada o fraudulenta
- Propositos ilegales
- Transmitir malware o virus
- Acceso no autorizado
- Acoso o spam
- Violacion de leyes

Prohibiciones comerciales:
- Revender servicios sin autorizar
- Copiar codigo protegido
- Competencia desleal
- Scraping de datos
- Alteracion de contenido

Consecuencias:
- Suspension inmediata
- Cancelacion de servicio
- Acciones legales
- Recuperacion de danos
- Reporte a autoridades

Cumplimiento obligatorio en todos los servicios.`,
      },
    ],
  },
  en: {
    servicios: [
      {
        question: 'What technologies do you use for web development?',
        answer: `We work with a modern technology stack:

- React and Next.js for modern frontend
- TypeScript for typed and safer code
- Node.js on the backend
- Tailwind CSS for responsive design
- PostgreSQL and MongoDB for databases

We choose technologies based on your specific needs to ensure the best result and top performance.`,
      },
      {
        question: 'How long does it take to build a web application?',
        answer: `Timeline depends on complexity:

- Corporate website: 2-4 weeks
- Medium web app: 1-3 months
- Complex application: 2-6 months

We always provide a clear schedule during planning so you know exactly what to expect.`,
      },
      {
        question: 'Do you build custom websites or use pre-made templates?',
        answer: `100% custom work. We do not use templates.

Every project is:
- Designed from scratch
- Adapted to your brand and identity
- Built for your unique goals
- Based on your functional requirements
- Unique in the market

Your website will stand out from competitors.`,
      },
      {
        question: 'Do you build web applications beyond traditional websites?',
        answer: `Yes. We provide full business web app development.

From simpler projects such as:
- Informational sites
- Company blogs

To high-complexity applications such as:
- Admin dashboards
- SaaS applications
- Business management systems
- External API integrations
- Multi-user platforms`,
      },
      {
        question: 'Can you integrate databases into existing systems or websites?',
        answer: `Absolutely. We handle full data integrations.

Our services include:
- Database integration in existing systems
- Complex data migrations
- Consolidation of multiple data sources
- Query optimization
- Performance improvements

We work with PostgreSQL, MongoDB, MySQL, and more.`,
      },
      {
        question: 'What is your development process?',
        answer: `Our process is iterative and professional:

1. Discovery and strategic planning
   We understand your business and goals

2. UX/UI design
   Prototyping and approval

3. Agile sprint development
   Partial deliveries every 2 weeks

4. Thorough testing
   Unit, integration, performance, and security

5. Deployment and launch
   With support during rollout

We keep constant communication with regular updates.`,
      },
    ],
    seguridad: [
      {
        question: 'How do you guarantee application and database security?',
        answer: `We implement multiple security layers:

Encryption:
- AES-256 for data in transit and at rest
- 256-bit SSL/TLS certificates

Authentication:
- JWT and OAuth 2.0
- Multi-factor authentication

Protection:
- SQL injection and XSS prevention
- Firewalls and WAF
- Strict input validation

Compliance:
- OWASP Top 10 standards
- Regular audits
- Quarterly penetration testing`,
      },
      {
        question: 'How do you protect customer information and data?',
        answer: `Privacy is our highest priority.

Protection practices:
- GDPR and CCPA compliance
- Secure storage with redundancy
- Automated daily backups
- Data-at-rest encryption
- Auditable access logs

Policies:
- International confidentiality standards
- Clear data retention policy
- Right to be forgotten
- Data portability`,
      },
      {
        question: 'What personal information do you collect from users?',
        answer: `We only collect strictly necessary information.

Voluntary information:
- Contact details
- Payment information
- Project-specific inquiries

What we do NOT process:
- Racial or ethnic origin
- Sexual orientation
- Religious beliefs
- Health or biometric data

Technical data (for improvement only):
- Anonymous IP address
- Browser and device
- General location`,
      },
      {
        question: 'Do you run security tests before launching a project?',
        answer: `Yes. We run thorough security testing:

Code analysis:
- Full penetration testing
- Automated vulnerability analysis
- Manual review of critical code

Injection tests:
- SQL injection
- XSS (cross-site scripting)
- CSRF (cross-site request forgery)
- Command injection

Checks:
- Authentication validation
- Dependency analysis
- SSL certificates
- File permissions

All of this is done before launch.`,
      },
      {
        question: 'Do you use cookies and what data do they collect?',
        answer: `We use cookies responsibly.

Essential cookies (required):
- Keep sessions active
- Store preferences
- Enable core functionality

Optional cookies (you can reject):
- Analytics (user behavior)
- Personalized advertising
- Experience improvements

Your control:
- Visible cookie preferences center
- You can reject anytime
- We do not sell data to third parties
- Full transparency`,
      },
      {
        question: 'How is information transferred internationally?',
        answer: `Maximum security for international transfers.

Infrastructure:
- Servers in certified data centers
- Geographic redundancy for availability
- Distributed storage

Security:
- Encryption in transit (TLS 1.3)
- International regulatory compliance
- GDPR-level protection across regions

Reliability:
- 99.9% guaranteed uptime
- 24/7 monitoring
- Disaster recovery plan`,
      },
    ],
    soporte: [
      {
        question: 'Do you provide maintenance and support after delivery?',
        answer: `Absolutely. We offer ongoing maintenance plans.

Included:
- 24/7 system monitoring
- Monthly security updates
- Priority bug fixes
- Continuous performance improvements
- New feature implementation

Support:
- Available based on your needs
- Guaranteed response within 24 hours
- Escalation for critical emergencies

We keep your app updated, secure, and stable.`,
      },
      {
        question: 'Can you work with our existing team?',
        answer: `Yes. We are fully flexible.

Available models:
- Integration with your internal team
- Fully independent delivery
- Custom hybrid model
- Agile coaching for your team

We adapt to your workflow.`,
      },
      {
        question: 'Do you test before launching a project?',
        answer: `Yes, we test thoroughly at every stage.

Unit testing:
- Each component is tested individually
- Minimum 80% coverage
- Isolated methods and functions

Integration testing:
- Interaction between modules
- External API connections
- Database integration

Performance testing:
- Stress/load testing
- Speed optimization
- Scalability validation

User testing:
- Client acceptance
- Browser accessibility
- User experience validation`,
      },
    ],
    pagos: [
      {
        question: 'What payment methods do you accept?',
        answer: `We provide multiple payment options.

Online payment (instant):
- PayPal (including financing)
- Visa
- Mastercard
- Other international cards

Bank transfer:
- Argentina account
- International transfer
- SWIFT available

Security:
- 256-bit SSL encryption
- PCI-DSS compliance
- Automated invoicing system

Notes:
- No hidden fees
- Invoice issued immediately`,
      },
      {
        question: 'How does your pricing model work?',
        answer: `Each project has a custom quote.

Factors considered:
- Project complexity
- Estimated development time
- Required technologies
- Post-launch support

Payment options:
- Milestone payments (50% upfront, 50% final)
- Financing plans for larger projects
- Discounts for early payment`,
      },
      {
        question: 'Can changes be made during the project?',
        answer: `Yes, with a controlled process.

Minor changes:
- Design adjustments
- Text corrections
- Small feature updates
- Included within initial scope

Significant changes:
- Require a formal change request
- Impact evaluation
- Cost and time estimate
- Updated written agreement

Process:
1. Change request
2. Impact analysis
3. Cost and timeline proposal
4. Client approval
5. Execution

Flexibility guaranteed.`,
      },
    ],
    legal: [
      {
        question: 'Do you deliver the project source code?',
        answer: `Yes, complete and documented.

You receive:
- Full source code
- Git repository with full history
- Technical project documentation
- Configuration files
- Deployment instructions
- API documentation
- Architecture diagram

Ownership:
- Full ownership after payment
- You can modify freely
- You can hire another developer
- No restrictions for internal use

Full transparency and trust.`,
      },
      {
        question: 'What are the intellectual property rights?',
        answer: `Clear rights separation:

You own:
- Your project code
- Custom design
- Your application content
- Your business data

BackupTecno keeps:
- BackupTecno brand and logo
- Internal tools
- Open-source libraries (under license)
- Acquired know-how

Prohibited:
- Reselling or redistributing as your own
- Unauthorized copying
- Third-party rights infringement
- Sublicensing

License:
- Non-exclusive and revocable for operation
- Internal and commercial use allowed`,
      },
      {
        question: 'What is the minimum user age?',
        answer: `Clear age terms:

BackupTecno is intended for:
- Users over 18 years old
- Legally registered companies
- Legally compliant entrepreneurs

Requirements:
- Legal capacity to contract
- Not under legal age in your jurisdiction
- Explicit acceptance of terms

Verification:
- We may request age verification
- Immediate cancellation when needed
- Violations may result in suspension

User responsibility: confirm legal age.`,
      },
      {
        question: 'How long do you keep user information?',
        answer: `Clear data retention policy:

Transaction data:
- Minimum 5 years (tax requirements)
- Backed up in secure storage
- Available for audits

Active client data:
- While business relationship exists
- Plus 2-year archive period

Support data:
- Kept for 1 year after closure
- For issue reference

Your rights:
- Request access to your data
- Request correction
- Request deletion (right to be forgotten)
- Maximum 30-day response time`,
      },
      {
        question: 'What privacy rights do users have?',
        answer: `Full rights over personal data (GDPR):

Right of access:
- Know what data we store
- Receive a readable copy
- Understand processing purposes

Right of rectification:
- Correct inaccurate data
- Update outdated information
- No-cost request

Right of deletion:
- Right to be forgotten
- Delete personal data
- Except legal retention obligations

Right of portability:
- Obtain data in structured format
- Transfer to another provider

Right to object:
- Oppose certain processing
- Stop marketing communications

How to exercise rights: contact our data legal team.`,
      },
      {
        question: 'What actions are prohibited when using your services?',
        answer: `Strict usage prohibitions:

Illegal acts prohibited:
- Automated or fraudulent use
- Illegal purposes
- Transmitting malware or viruses
- Unauthorized access
- Harassment or spam
- Legal violations

Commercial prohibitions:
- Reselling services without authorization
- Copying protected code
- Unfair competition
- Data scraping
- Content alteration

Consequences:
- Immediate suspension
- Service cancellation
- Legal action
- Damage recovery
- Reporting to authorities

Compliance is mandatory in all services.`,
      },
    ],
  },
  pt: {
    servicios: [
      {
        question: 'Quais tecnologias voces usam para desenvolvimento web?',
        answer: `Trabalhamos com um stack moderno:

- React e Next.js para frontend moderno
- TypeScript para codigo tipado e seguro
- Node.js no backend
- Tailwind CSS para design responsivo
- PostgreSQL e MongoDB para bancos de dados

Selecionamos as tecnologias de acordo com suas necessidades para garantir o melhor resultado e alto desempenho.`,
      },
      {
        question: 'Quanto tempo leva para desenvolver uma aplicacao web?',
        answer: `O tempo depende da complexidade:

- Site corporativo: 2-4 semanas
- Aplicacao web media: 1-3 meses
- Aplicacao complexa: 2-6 meses

Sempre entregamos um cronograma claro na fase de planejamento.`,
      },
      {
        question: 'Voces desenvolvem sites personalizados ou usam templates prontos?',
        answer: `100% personalizado. Nao usamos templates.

Cada projeto e:
- Desenhado do zero
- Adaptado a sua marca
- Construido para seus objetivos
- Baseado nos requisitos funcionais
- Unico no mercado

Garantimos que seu site se destaque.`,
      },
      {
        question: 'Voces desenvolvem aplicacoes web alem de sites tradicionais?',
        answer: `Sim. Fazemos desenvolvimento completo de aplicacoes web empresariais.

Desde projetos simples como:
- Sites informativos
- Blogs corporativos

Ate aplicacoes complexas como:
- Dashboards administrativos
- Aplicacoes SaaS
- Sistemas de gestao
- Integracoes com APIs externas
- Plataformas multiusuario`,
      },
      {
        question: 'Podem integrar bancos de dados em sistemas ou sites existentes?',
        answer: `Com certeza. Fazemos integracoes completas de dados.

Nossos servicos incluem:
- Integracao de banco de dados em sistemas existentes
- Migracoes complexas de dados
- Consolidacao de multiplas fontes
- Otimizacao de consultas
- Melhoria de desempenho

Trabalhamos com PostgreSQL, MongoDB, MySQL e mais.`,
      },
      {
        question: 'Como funciona o processo de desenvolvimento?',
        answer: `Nosso processo e iterativo e profissional:

1. Discovery e planejamento estrategico
   Entendemos seu negocio e objetivos

2. Design UX/UI
   Prototipacao e aprovacao

3. Desenvolvimento em sprints ageis
   Entregas parciais a cada 2 semanas

4. Testes completos
   Unitario, integracao, desempenho e seguranca

5. Deploy e lancamento
   Com suporte no rollout

Mantemos comunicacao constante com atualizacoes regulares.`,
      },
    ],
    seguridad: [
      {
        question: 'Como garantem a seguranca das aplicacoes e bancos de dados?',
        answer: `Implementamos multiplas camadas de seguranca:

Criptografia:
- AES-256 para dados em transito e em repouso
- Certificados SSL/TLS de 256 bits

Autenticacao:
- JWT e OAuth 2.0
- Autenticacao multifator

Protecao:
- Prevencao contra SQL injection e XSS
- Firewalls e WAF
- Validacao rigorosa de entradas

Conformidade:
- Padroes OWASP Top 10
- Auditorias regulares
- Testes de penetracao trimestrais`,
      },
      {
        question: 'Como protegem as informacoes e dados dos clientes?',
        answer: `Privacidade e nossa maior prioridade.

Praticas de protecao:
- Conformidade com GDPR e CCPA
- Armazenamento seguro com redundancia
- Backups diarios automatizados
- Criptografia de dados em repouso
- Logs auditaveis de acesso

Politicas:
- Padroes internacionais de confidencialidade
- Politica clara de retencao de dados
- Direito ao esquecimento
- Portabilidade de dados`,
      },
      {
        question: 'Que informacoes pessoais voces coletam dos usuarios?',
        answer: `Coletamos apenas o estritamente necessario.

Informacoes voluntarias:
- Dados de contato
- Informacoes de pagamento
- Consultas especificas de projeto

O que NAO processamos:
- Origem racial ou etnica
- Orientacao sexual
- Crencas religiosas
- Dados de saude ou biometricos

Dados tecnicos (apenas melhoria):
- IP anonimo
- Navegador e dispositivo
- Localizacao geral`,
      },
      {
        question: 'Fazem testes de seguranca antes do lancamento?',
        answer: `Sim, realizamos testes completos de seguranca:

Analise de codigo:
- Teste completo de penetracao
- Analise automatica de vulnerabilidades
- Revisao manual de codigo critico

Testes de injecao:
- SQL injection
- XSS (cross-site scripting)
- CSRF (cross-site request forgery)
- Command injection

Verificacoes:
- Validacao de autenticacao
- Analise de dependencias
- Certificados SSL
- Permissoes de arquivo

Tudo isso antes do lancamento oficial.`,
      },
      {
        question: 'Voces usam cookies e quais dados coletam?',
        answer: `Usamos cookies de forma responsavel.

Cookies essenciais (obrigatorios):
- Mantem a sessao ativa
- Guardam preferencias
- Necessarios para funcionalidades

Cookies opcionais (voce pode recusar):
- Analytics (comportamento do usuario)
- Publicidade personalizada
- Melhoria de experiencia

Seu controle:
- Centro de Preferencias de Cookies visivel
- Pode recusar a qualquer momento
- Nao vendemos dados para terceiros
- Transparencia total`,
      },
      {
        question: 'Como a informacao e transferida internacionalmente?',
        answer: `Seguranca maxima nas transferencias internacionais.

Infraestrutura:
- Servidores em datacenters certificados
- Redundancia geografica para disponibilidade
- Armazenamento distribuido

Seguranca:
- Criptografia em transito (TLS 1.3)
- Conformidade com regulacoes internacionais
- Protecao nivel GDPR em todas as regioes

Confiabilidade:
- Uptime garantido de 99.9%
- Monitoramento 24/7
- Plano de disaster recovery`,
      },
    ],
    soporte: [
      {
        question: 'Oferecem manutencao e suporte tecnico apos a entrega?',
        answer: `Com certeza. Oferecemos planos continuos de manutencao.

Inclui:
- Monitoramento 24/7
- Atualizacoes mensais de seguranca
- Correcao prioritaria de bugs
- Melhorias continuas de desempenho
- Implementacao de novas funcionalidades

Suporte tecnico:
- Disponivel conforme sua necessidade
- Resposta garantida em ate 24 horas
- Escalonamento para emergencias criticas

Mantemos sua aplicacao atualizada, segura e estavel.`,
      },
      {
        question: 'Podem trabalhar com nossa equipe atual?',
        answer: `Sim, somos totalmente flexiveis.

Modelos disponiveis:
- Integracao com sua equipe interna
- Entrega totalmente independente
- Modelo hibrido personalizado
- Agile coaching para sua equipe

Nos adaptamos ao seu fluxo de trabalho.`,
      },
      {
        question: 'Realizam testes antes do lancamento?',
        answer: `Sim, realizamos testes completos em todas as fases.

Teste unitario:
- Cada componente e testado individualmente
- Cobertura minima de 80%
- Metodos e funcoes isoladas

Teste de integracao:
- Interacao entre modulos
- Conexoes com APIs externas
- Integracao com banco de dados

Teste de desempenho:
- Testes de carga e estresse
- Otimizacao de velocidade
- Validacao de escalabilidade

Teste de usuario:
- Aceitacao do cliente
- Acessibilidade em navegadores
- Validacao de experiencia de usuario`,
      },
    ],
    pagos: [
      {
        question: 'Quais metodos de pagamento voces aceitam?',
        answer: `Oferecemos multiplas opcoes de pagamento.

Pagamento online (instantaneo):
- PayPal (incluindo financiamento)
- Visa
- Mastercard
- Outros cartoes internacionais

Transferencia bancaria:
- Conta na Argentina
- Transferencia internacional
- SWIFT disponivel

Seguranca:
- Criptografia SSL 256 bits
- Conformidade PCI-DSS
- Sistema automatico de faturamento

Observacoes:
- Sem taxas ocultas
- Fatura emitida imediatamente`,
      },
      {
        question: 'Como funciona o modelo de precos?',
        answer: `Cada projeto tem um orcamento personalizado.

Fatores considerados:
- Complexidade do projeto
- Tempo estimado de desenvolvimento
- Tecnologias necessarias
- Suporte pos-lancamento

Formas de pagamento:
- Pagamento por marcos (50% inicial, 50% final)
- Planos de financiamento para projetos maiores
- Descontos para pagamento antecipado`,
      },
      {
        question: 'E possivel fazer mudancas durante o projeto?',
        answer: `Sim, com processo controlado.

Mudancas menores:
- Ajustes de design
- Correcao de textos
- Mudancas simples de funcionalidade
- Incluidas no escopo inicial

Mudancas significativas:
- Exigem change request formal
- Avaliacao de impacto
- Calculo de custo e prazo
- Atualizacao do acordo por escrito

Processo:
1. Solicitacao de mudanca
2. Analise de impacto
3. Proposta de custo e cronograma
4. Aprovacao do cliente
5. Execucao

Flexibilidade garantida.`,
      },
    ],
    legal: [
      {
        question: 'Voces entregam o codigo-fonte do projeto?',
        answer: `Sim, completo e documentado.

Voce recebe:
- Todo o codigo-fonte
- Repositorio Git com historico completo
- Documentacao tecnica do projeto
- Arquivos de configuracao
- Instrucoes de deploy
- Documentacao da API
- Diagrama de arquitetura

Propriedade:
- Propriedade total apos o pagamento
- Pode modificar livremente
- Pode contratar outro desenvolvedor
- Sem restricoes para uso interno

Transparencia e confianca total.`,
      },
      {
        question: 'Quais sao os direitos de propriedade intelectual?',
        answer: `Separacao clara de direitos:

Voce e dono de:
- Codigo do seu projeto
- Design personalizado
- Conteudo da aplicacao
- Dados do seu negocio

A BackupTecno mantem:
- Marca e logo BackupTecno
- Ferramentas internas
- Bibliotecas open source (com licenca)
- Conhecimento adquirido

Proibido:
- Revender ou redistribuir como proprio
- Copiar sem autorizacao
- Infringir direitos de terceiros
- Sublicenciamento

Licenca:
- Nao exclusiva e revogavel para operacao
- Uso interno e comercial permitido`,
      },
      {
        question: 'Qual a idade minima para usar os servicos?',
        answer: `Termos de idade claros:

A BackupTecno e destinada a:
- Usuarios maiores de 18 anos
- Empresas legalmente registradas
- Empreendedores em conformidade legal

Requisitos:
- Capacidade legal para contratar
- Nao ser menor na sua jurisdicao
- Aceitacao explicita dos termos

Verificacao:
- Podemos solicitar comprovacao de idade
- Cancelamento imediato quando necessario
- Violacoes podem gerar suspensao

Responsabilidade do usuario: confirmar idade legal.`,
      },
      {
        question: 'Por quanto tempo voces armazenam informacoes dos usuarios?',
        answer: `Politica clara de retencao de dados:

Dados de transacoes:
- Minimo de 5 anos (exigencias fiscais)
- Backup em armazenamento seguro
- Disponivel para auditorias

Dados de clientes ativos:
- Enquanto existir relacao comercial
- Mais periodo de arquivo de 2 anos

Dados de suporte:
- Mantidos por 1 ano apos encerramento
- Para referencia de problemas

Seus direitos:
- Solicitar acesso aos dados
- Solicitar correcao
- Solicitar exclusao (direito ao esquecimento)
- Prazo maximo de resposta: 30 dias`,
      },
      {
        question: 'Quais direitos de privacidade os usuarios possuem?',
        answer: `Direitos completos sobre dados pessoais (GDPR):

Direito de acesso:
- Saber quais dados temos
- Receber copia em formato legivel
- Entender o processamento

Direito de retificacao:
- Corrigir dados incorretos
- Atualizar informacoes desatualizadas
- Solicitacao sem custo

Direito de exclusao:
- Direito ao esquecimento
- Excluir dados pessoais
- Exceto obrigacoes legais

Direito de portabilidade:
- Obter dados em formato estruturado
- Transferir para outro provedor

Direito de oposicao:
- Opor-se a determinado processamento
- Parar comunicacoes de marketing

Como exercer: contate nossa equipe legal de dados.`,
      },
      {
        question: 'Quais acoes sao proibidas no uso dos servicos?',
        answer: `Proibicoes estritas de uso:

Atos ilegais proibidos:
- Uso automatizado ou fraudulento
- Finalidades ilegais
- Transmissao de malware ou virus
- Acesso nao autorizado
- Assedio ou spam
- Violacao de leis

Proibicoes comerciais:
- Revenda sem autorizacao
- Copia de codigo protegido
- Concorrencia desleal
- Scraping de dados
- Alteracao de conteudo

Consequencias:
- Suspensao imediata
- Cancelamento do servico
- Acoes legais
- Recuperacao de danos
- Comunicacao a autoridades

Cumprimento obrigatorio em todos os servicos.`,
      },
    ],
  },
};
