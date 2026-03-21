import type { Language } from '@/context/LanguageContext';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  color: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface TeamValue {
  title: string;
  description: string;
}

export const servicesPageContent: Record<Language, {
  heroTitle: string;
  heroSubtitle: string;
  learnMore: string;
  processTitle: string;
  processSubtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  services: ServiceItem[];
  steps: ProcessStep[];
}> = {
  es: {
    heroTitle: 'Nuestros Servicios',
    heroSubtitle: 'Soluciones web completas y personalizadas para tu negocio',
    learnMore: 'Conocer mas',
    processTitle: 'Nuestro Proceso',
    processSubtitle: 'Un enfoque metodologico y transparente para asegurar tu exito',
    ctaTitle: '¿Listo para llevar tu proyecto al siguiente nivel?',
    ctaSubtitle: 'Nuestro equipo de expertos esta aqui para ayudarte a alcanzar tus objetivos',
    ctaButton: 'Solicitar Consulta Gratuita',
    services: [
      {
        title: 'Desarrollo Web Completo',
        description: 'Creamos aplicaciones web modernas, rapidas y escalables utilizando React, Next.js, TypeScript y las ultimas tecnologias del mercado.',
        icon: '🚀',
        features: ['Aplicaciones web responsivas', 'Progressive Web Apps (PWA)', 'E-commerce personalizados', 'Plataformas SaaS'],
      },
      {
        title: 'Diseno UI/UX',
        description: 'Disenamos interfaces intuitivas y atractivas que proporcionan la mejor experiencia de usuario posible en todas las plataformas.',
        icon: '🎨',
        features: ['Diseno de interfaces modernas', 'Prototipado y wireframing', 'User research y testing', 'Diseno responsivo'],
      },
      {
        title: 'Consultoria Tecnologica',
        description: 'Asesoramiento estrategico en arquitectura de software, eleccion de tecnologias y optimizacion de procesos de desarrollo.',
        icon: '💡',
        features: ['Auditoria de codigo', 'Seleccion de stack tecnologico', 'Optimizacion de rendimiento', 'Mentoring tecnico'],
      },
      {
        title: 'Mantenimiento y Soporte',
        description: 'Mantenimiento continuo de tus aplicaciones con actualizaciones, correccion de bugs y mejoras de seguridad.',
        icon: '🔧',
        features: ['Actualizaciones de seguridad', 'Correccion de bugs', 'Optimizacion de base de datos', 'Monitoreo 24/7'],
      },
      {
        title: 'Integracion de APIs',
        description: 'Integramos sistemas externos, APIs y servicios de terceros en tu aplicacion de forma segura y eficiente.',
        icon: '🔗',
        features: ['Integracion de pagos', 'APIs de redes sociales', 'Servicios en la nube', 'Webhooks y automatizacion'],
      },
      {
        title: 'Optimizacion SEO y Performance',
        description: 'Optimizamos tu sitio web para mejor posicionamiento en buscadores y maximo rendimiento de usuario.',
        icon: '⚡',
        features: ['SEO tecnico', 'Optimizacion de velocidad', 'Core Web Vitals', 'Analisis y reportes'],
      },
    ],
    steps: [
      { number: '01', title: 'Discovery', description: 'Entendemos tus necesidades y objetivos' },
      { number: '02', title: 'Planificacion', description: 'Disenamos la estrategia y arquitectura' },
      { number: '03', title: 'Desarrollo', description: 'Construimos con codigo de excelencia' },
      { number: '04', title: 'Lanzamiento', description: 'Deployment y soporte continuo' },
    ],
  },
  en: {
    heroTitle: 'Our Services',
    heroSubtitle: 'Complete and tailored web solutions for your business',
    learnMore: 'Learn More',
    processTitle: 'Our Process',
    processSubtitle: 'A transparent and methodical approach to ensure your success',
    ctaTitle: 'Ready to take your project to the next level?',
    ctaSubtitle: 'Our expert team is here to help you achieve your goals',
    ctaButton: 'Request Free Consultation',
    services: [
      {
        title: 'Full Web Development',
        description: 'We build modern, fast, and scalable web applications using React, Next.js, TypeScript, and the latest technologies.',
        icon: '🚀',
        features: ['Responsive web applications', 'Progressive Web Apps (PWA)', 'Custom e-commerce', 'SaaS platforms'],
      },
      {
        title: 'UI/UX Design',
        description: 'We design intuitive and attractive interfaces that provide the best possible user experience across all platforms.',
        icon: '🎨',
        features: ['Modern interface design', 'Prototyping and wireframing', 'User research and testing', 'Responsive design'],
      },
      {
        title: 'Technology Consulting',
        description: 'Strategic guidance on software architecture, technology selection, and development process optimization.',
        icon: '💡',
        features: ['Code audit', 'Technology stack selection', 'Performance optimization', 'Technical mentoring'],
      },
      {
        title: 'Maintenance and Support',
        description: 'Continuous maintenance for your applications with updates, bug fixes, and security improvements.',
        icon: '🔧',
        features: ['Security updates', 'Bug fixing', 'Database optimization', '24/7 monitoring'],
      },
      {
        title: 'API Integration',
        description: 'We integrate external systems, APIs, and third-party services into your app securely and efficiently.',
        icon: '🔗',
        features: ['Payment integration', 'Social media APIs', 'Cloud services', 'Webhooks and automation'],
      },
      {
        title: 'SEO and Performance Optimization',
        description: 'We optimize your website for better search visibility and maximum performance.',
        icon: '⚡',
        features: ['Technical SEO', 'Speed optimization', 'Core Web Vitals', 'Analytics and reporting'],
      },
    ],
    steps: [
      { number: '01', title: 'Discovery', description: 'We understand your needs and goals' },
      { number: '02', title: 'Planning', description: 'We design strategy and architecture' },
      { number: '03', title: 'Development', description: 'We build with high-quality code' },
      { number: '04', title: 'Launch', description: 'Deployment and continuous support' },
    ],
  },
  pt: {
    heroTitle: 'Nossos Servicos',
    heroSubtitle: 'Solucoes web completas e personalizadas para o seu negocio',
    learnMore: 'Saiba Mais',
    processTitle: 'Nosso Processo',
    processSubtitle: 'Uma abordagem transparente e metodologica para garantir seu sucesso',
    ctaTitle: 'Pronto para levar seu projeto ao proximo nivel?',
    ctaSubtitle: 'Nossa equipe especialista esta aqui para ajudar voce a atingir seus objetivos',
    ctaButton: 'Solicitar Consulta Gratuita',
    services: [
      {
        title: 'Desenvolvimento Web Completo',
        description: 'Criamos aplicacoes web modernas, rapidas e escalaveis usando React, Next.js, TypeScript e tecnologias atuais.',
        icon: '🚀',
        features: ['Aplicacoes web responsivas', 'Progressive Web Apps (PWA)', 'E-commerce personalizado', 'Plataformas SaaS'],
      },
      {
        title: 'Design UI/UX',
        description: 'Desenhamos interfaces intuitivas e atraentes com a melhor experiencia de usuario em todas as plataformas.',
        icon: '🎨',
        features: ['Design de interfaces modernas', 'Prototipagem e wireframing', 'Pesquisa e testes de usuario', 'Design responsivo'],
      },
      {
        title: 'Consultoria Tecnologica',
        description: 'Consultoria estrategica em arquitetura de software, escolha de tecnologias e otimizacao de processos.',
        icon: '💡',
        features: ['Auditoria de codigo', 'Escolha de stack tecnologico', 'Otimizacao de desempenho', 'Mentoria tecnica'],
      },
      {
        title: 'Manutencao e Suporte',
        description: 'Manutencao continua de aplicacoes com atualizacoes, correcao de bugs e melhorias de seguranca.',
        icon: '🔧',
        features: ['Atualizacoes de seguranca', 'Correcao de bugs', 'Otimizacao de banco de dados', 'Monitoramento 24/7'],
      },
      {
        title: 'Integracao de APIs',
        description: 'Integramos sistemas externos, APIs e servicos de terceiros com seguranca e eficiencia.',
        icon: '🔗',
        features: ['Integracao de pagamentos', 'APIs de redes sociais', 'Servicos em nuvem', 'Webhooks e automacao'],
      },
      {
        title: 'Otimizacao de SEO e Performance',
        description: 'Otimizamos seu site para melhorar posicionamento e desempenho maximo.',
        icon: '⚡',
        features: ['SEO tecnico', 'Otimizacao de velocidade', 'Core Web Vitals', 'Analise e relatorios'],
      },
    ],
    steps: [
      { number: '01', title: 'Discovery', description: 'Entendemos suas necessidades e objetivos' },
      { number: '02', title: 'Planejamento', description: 'Desenhamos estrategia e arquitetura' },
      { number: '03', title: 'Desenvolvimento', description: 'Construimos com codigo de excelencia' },
      { number: '04', title: 'Lancamento', description: 'Deploy e suporte continuo' },
    ],
  },
};

export const projectsPageContent: Record<Language, {
  heroTitle: string;
  heroSubtitle: string;
  projectBadge: string;
  stackLabel: string;
  viewProject: string;
  projects: ProjectItem[];
}> = {
  es: {
    heroTitle: 'Nuestros Proyectos',
    heroSubtitle: 'Explora algunos de los proyectos mas destacados que hemos desarrollado para nuestros clientes',
    projectBadge: 'Proyecto',
    stackLabel: 'Stack Tecnologico',
    viewProject: 'Ver Proyecto',
    projects: [
      {
        id: 1,
        title: 'Ruggeri - Taller de Mecanica y Electricidad Automotriz',
        description: 'Plataforma moderna de presentacion y portafolio con arquitectura escalable. Sitio web profesional con componentes reutilizables, animaciones fluidas y diseno responsivo.',
        image: '/ruggeri_fondo.webp',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Storybook'],
        link: 'https://penicord.vercel.app/',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        id: 2,
        title: 'Sweet Life - Residencia para Adultos',
        description: 'Plataforma web de marketing para residencia de adultos mayores con diseno elegante e intuitivo, galeria visual, contacto, mapa y SEO optimizado.',
        image: '/sweet_life_fondo.webp',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Google Maps', 'SEO Optimizado'],
        link: 'https://www.sweetlife.com.ar/',
        color: 'from-green-500 to-cyan-500',
      },
      {
        id: 3,
        title: 'CarShop - Tienda de Repuestos',
        description: 'Plataforma e-commerce full-stack para repuestos automotrices con busqueda inteligente, filtros, carrito, autenticacion y panel de inventario.',
        image: '/carshop_fondo.webp',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Django', 'Django REST Framework', 'PostgreSQL'],
        link: 'https://car-shop-dusky.vercel.app/',
        color: 'from-orange-500 to-red-500',
      },
    ],
  },
  en: {
    heroTitle: 'Our Projects',
    heroSubtitle: 'Explore some of the most relevant projects we have built for our clients',
    projectBadge: 'Project',
    stackLabel: 'Tech Stack',
    viewProject: 'View Project',
    projects: [
      {
        id: 1,
        title: 'Ruggeri - Automotive Workshop',
        description: 'Modern showcase platform with scalable architecture, reusable React components, smooth animations, and responsive design.',
        image: '/ruggeri_fondo.webp',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Storybook'],
        link: 'https://penicord.vercel.app/',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        id: 2,
        title: 'Sweet Life - Senior Residence',
        description: 'Marketing website for a senior residence with elegant design, visual gallery, service details, contact data, map, and SEO optimization.',
        image: '/sweet_life_fondo.webp',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Google Maps', 'SEO Optimized'],
        link: 'https://www.sweetlife.com.ar/',
        color: 'from-green-500 to-cyan-500',
      },
      {
        id: 3,
        title: 'CarShop - Auto Parts Store',
        description: 'Full-stack e-commerce platform for automotive parts with smart search, filters, shopping cart, authentication, and inventory panel.',
        image: '/carshop_fondo.webp',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Django', 'Django REST Framework', 'PostgreSQL'],
        link: 'https://car-shop-dusky.vercel.app/',
        color: 'from-orange-500 to-red-500',
      },
    ],
  },
  pt: {
    heroTitle: 'Nossos Projetos',
    heroSubtitle: 'Explore alguns dos projetos de destaque que desenvolvemos para nossos clientes',
    projectBadge: 'Projeto',
    stackLabel: 'Stack Tecnologico',
    viewProject: 'Ver Projeto',
    projects: [
      {
        id: 1,
        title: 'Ruggeri - Oficina Automotiva',
        description: 'Plataforma moderna de apresentacao com arquitetura escalavel, componentes reutilizaveis, animacoes fluidas e design responsivo.',
        image: '/ruggeri_fondo.webp',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Storybook'],
        link: 'https://penicord.vercel.app/',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        id: 2,
        title: 'Sweet Life - Residencia para Idosos',
        description: 'Plataforma de marketing com design elegante, galeria visual, informacoes de servicos, contato, mapa e SEO otimizado.',
        image: '/sweet_life_fondo.webp',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Google Maps', 'SEO Otimizado'],
        link: 'https://www.sweetlife.com.ar/',
        color: 'from-green-500 to-cyan-500',
      },
      {
        id: 3,
        title: 'CarShop - Loja de Pecas',
        description: 'Plataforma e-commerce full-stack para pecas automotivas com busca inteligente, filtros, carrinho, autenticacao e painel de estoque.',
        image: '/carshop_fondo.webp',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Django', 'Django REST Framework', 'PostgreSQL'],
        link: 'https://car-shop-dusky.vercel.app/',
        color: 'from-orange-500 to-red-500',
      },
    ],
  },
};

export const aboutPageContent: Record<Language, {
  heroTitle: string;
  heroSubtitle: string;
  historyTitle: string;
  historyParagraphs: string[];
  missionTitle: string;
  missionParagraphs: string[];
  visionTitle: string;
  visionParagraphs: string[];
  teamTitle: string;
  teamSubtitle: string;
  values: TeamValue[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
}> = {
  es: {
    heroTitle: 'Nosotros',
    heroSubtitle: 'Creamos experiencias digitales excepcionales con codigo de excelencia',
    historyTitle: 'Nuestra Historia',
    historyParagraphs: [
      'ackupTecno nacio en 2025 de la pasion de un grupo de desarrolladores por crear soluciones web innovadoras y de alta calidad. Fundada por programadores que sonaban con transformar ideas en experiencias digitales excepcionales, nuestra empresa surgio en un momento donde la presencia digital se volvia fundamental para el exito empresarial.',
      'Desde nuestros inicios, hemos entendido que cada proyecto web es unico y requiere un enfoque personalizado. No solo escribimos codigo, creamos soluciones que impulsan negocios, conectan personas y materializan visiones. Nuestra comprension profunda de las tecnologias modernas y las mejores practicas de desarrollo nos permite entregar productos digitales robustos y escalables.',
      'Hoy, BackupTecno es sinonimo de desarrollo web. Hemos crecido junto a nuestros clientes, evolucionando con las ultimas tecnologias y frameworks para anticiparnos a las tendencias del mercado. Cada proyecto nos ha fortalecido, cada linea de codigo nos ha inspirado a seguir mejorando nuestro craft.',
    ],
    missionTitle: 'Nuestra Mision',
    missionParagraphs: [
      'Desarrollar aplicaciones web excepcionales que transformen ideas en realidades digitales con tecnologias modernas y buenas practicas.',
      'Entregar codigo limpio, mantenible y escalable, con foco real en resultados para cada cliente.',
    ],
    visionTitle: 'Nuestra Vision',
    visionParagraphs: [
      'Ser referentes en desarrollo web en America Latina por nuestra calidad tecnica, innovacion y compromiso.',
      'Construir un ecosistema donde talento creativo y excelencia tecnica impulsen el crecimiento digital de nuestros clientes.',
    ],
    teamTitle: 'Nuestro Equipo',
    teamSubtitle: 'El corazon de BackupTecno late con talento, pasion y compromiso.',
    values: [
      {
        title: 'Desarrolladores Apasionados',
        description: 'Un equipo que vive el codigo, resuelve problemas complejos y trabaja con colaboracion continua.',
      },
      {
        title: 'Stack Tecnologico Moderno',
        description: 'Trabajamos con tecnologias actuales para construir soluciones estables, seguras y preparadas para crecer.',
      },
      {
        title: 'Codigo de Calidad',
        description: 'Aplicamos buenas practicas, revisiones de codigo y enfoque en mantenibilidad desde el primer dia.',
      },
    ],
    ctaTitle: '¿Tienes un proyecto en mente?',
    ctaSubtitle: 'Transformemos tu idea en una aplicacion web excepcional. Hablemos de codigo.',
    ctaButton: 'Contactanos',
  },
  en: {
    heroTitle: 'About Us',
    heroSubtitle: 'We create exceptional digital experiences with high-quality code',
    historyTitle: 'Our Story',
    historyParagraphs: [
      'ackupTecno was born in 2025 from the passion of a group of developers focused on building innovative, high-quality web solutions. Founded by programmers who dreamed of turning ideas into exceptional digital experiences, our company emerged at a time when digital presence had become essential for business success.',
      'From day one, we have understood that every web project is unique and requires a personalized approach. We do not just write code, we build solutions that drive businesses, connect people, and materialize visions. Our deep understanding of modern technologies and development best practices allows us to deliver robust and scalable digital products.',
      'Today, BackupTecno is synonymous with web development excellence. We have grown alongside our clients, evolving with the latest technologies and frameworks to stay ahead of market trends. Every project has made us stronger, and every line of code has inspired us to keep improving our craft.',
    ],
    missionTitle: 'Our Mission',
    missionParagraphs: [
      'Build exceptional web applications that turn ideas into digital realities using modern technologies and best practices.',
      'Deliver clean, maintainable, and scalable code with a strong focus on business outcomes.',
    ],
    visionTitle: 'Our Vision',
    visionParagraphs: [
      'Become a leading web development company in Latin America through technical quality, innovation, and commitment.',
      'Create an ecosystem where creativity and technical excellence drive our clients digital growth.',
    ],
    teamTitle: 'Our Team',
    teamSubtitle: 'The heart of BackupTecno is built on talent, passion, and commitment.',
    values: [
      {
        title: 'Passionate Developers',
        description: 'A team that lives code, solves complex problems, and collaborates continuously.',
      },
      {
        title: 'Modern Tech Stack',
        description: 'We use current technologies to deliver stable, secure, and scalable products.',
      },
      {
        title: 'Code Quality',
        description: 'We apply best practices, code reviews, and maintainability from day one.',
      },
    ],
    ctaTitle: 'Do you have a project in mind?',
    ctaSubtitle: 'Let us transform your idea into an exceptional web application.',
    ctaButton: 'Contact Us',
  },
  pt: {
    heroTitle: 'Sobre Nos',
    heroSubtitle: 'Criamos experiencias digitais excepcionais com codigo de excelencia',
    historyTitle: 'Nossa Historia',
    historyParagraphs: [
      'ackupTecno nasceu em 2025 da paixao de um grupo de desenvolvedores por criar solucoes web inovadoras e de alta qualidade. Fundada por programadores que sonhavam em transformar ideias em experiencias digitais excepcionais, nossa empresa surgiu em um momento em que a presenca digital se tornou fundamental para o sucesso dos negocios.',
      'Desde o inicio, entendemos que cada projeto web e unico e exige uma abordagem personalizada. Nao apenas escrevemos codigo: criamos solucoes que impulsionam negocios, conectam pessoas e tornam visoes realidade. Nossa compreensao profunda das tecnologias modernas e das melhores praticas de desenvolvimento nos permite entregar produtos digitais robustos e escalaveis.',
      'Hoje, a BackupTecno e sinonimo de excelencia em desenvolvimento web. Crescemos junto com nossos clientes, evoluindo com as tecnologias e frameworks mais atuais para nos anteciparmos as tendencias do mercado. Cada projeto nos fortaleceu, e cada linha de codigo nos inspirou a continuar aprimorando nosso craft.',
    ],
    missionTitle: 'Nossa Missao',
    missionParagraphs: [
      'Desenvolver aplicacoes web excepcionais que transformem ideias em realidades digitais com tecnologias modernas.',
      'Entregar codigo limpo, escalavel e de facil manutencao, com foco em resultados concretos.',
    ],
    visionTitle: 'Nossa Visao',
    visionParagraphs: [
      'Ser referencia em desenvolvimento web na America Latina por qualidade tecnica, inovacao e compromisso.',
      'Construir um ecossistema onde criatividade e excelencia tecnica impulsionem o crescimento digital.',
    ],
    teamTitle: 'Nossa Equipe',
    teamSubtitle: 'O coracao da BackupTecno pulsa com talento, paixao e compromisso.',
    values: [
      {
        title: 'Desenvolvedores Apaixonados',
        description: 'Uma equipe que vive codigo, resolve problemas complexos e colabora continuamente.',
      },
      {
        title: 'Stack Tecnologico Moderno',
        description: 'Usamos tecnologias atuais para construir solucoes estaveis, seguras e escalaveis.',
      },
      {
        title: 'Codigo de Qualidade',
        description: 'Aplicamos boas praticas, code review e foco em manutencao desde o primeiro dia.',
      },
    ],
    ctaTitle: 'Tem um projeto em mente?',
    ctaSubtitle: 'Vamos transformar sua ideia em uma aplicacao web excepcional.',
    ctaButton: 'Fale Conosco',
  },
};

export const notFoundContent: Record<Language, {
  title: string;
  description: string;
  backHome: string;
  tipTitle: string;
  tipText: string;
}> = {
  es: {
    title: 'Pagina no encontrada',
    description: 'Parece que la pagina que buscas no existe. Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.',
    backHome: 'Volver al Inicio',
    tipTitle: 'Consejo:',
    tipText: 'Verifica que la URL sea correcta o usa el menu de navegacion para explorar nuestro contenido.',
  },
  en: {
    title: 'Page not found',
    description: 'It looks like the page you are looking for does not exist. No worries, we can help you find what you need.',
    backHome: 'Back to Home',
    tipTitle: 'Tip:',
    tipText: 'Check that the URL is correct or use the navigation menu to explore our content.',
  },
  pt: {
    title: 'Pagina nao encontrada',
    description: 'Parece que a pagina que voce procura nao existe. Sem problema, podemos ajudar voce a encontrar o que precisa.',
    backHome: 'Voltar ao Inicio',
    tipTitle: 'Dica:',
    tipText: 'Verifique se a URL esta correta ou use o menu de navegacao para explorar nosso conteudo.',
  },
};
