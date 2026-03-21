import type { Language } from '@/context/LanguageContext';

interface SectionItem {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface ContactBlock {
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  locationText: string;
}

interface LegalPageContent {
  title: string;
  updatedAt: string;
  intro: string[];
  sections: SectionItem[];
  contactTitle: string;
  contactIntro: string;
  contact: ContactBlock;
  footerNote: string;
}

export const cookiesPolicyContent: Record<Language, LegalPageContent> = {
  es: {
    title: 'Politica de Cookies',
    updatedAt: 'Ultima actualizacion: 5 de marzo de 2026',
    intro: [
      'Esta Politica de Cookies explica como BackupTecno utiliza cookies y tecnologias similares para reconocer a los visitantes del sitio web.',
      'Tambien describe que tipos de cookies usamos, por que las usamos y como puedes gestionar tus preferencias.',
    ],
    sections: [
      {
        title: '1. ¿Que son las cookies?',
        paragraphs: [
          'Las cookies son pequenos archivos de datos que se guardan en tu navegador al visitar un sitio web.',
          'Pueden ser cookies de primera parte (propias del sitio) o de terceros (servicios externos).',
        ],
      },
      {
        title: '2. ¿Por que usamos cookies?',
        bullets: [
          'Para el funcionamiento tecnico del sitio',
          'Para recordar preferencias de usuario',
          'Para analitica y mejora de experiencia',
          'Para fines publicitarios cuando corresponda',
        ],
      },
      {
        title: '3. ¿Como puedes controlarlas?',
        paragraphs: [
          'Puedes aceptar o rechazar cookies desde el banner y desde la configuracion de tu navegador.',
          'Las cookies estrictamente necesarias no pueden desactivarse sin afectar funciones basicas.',
        ],
      },
      {
        title: '4. Otras tecnologias de seguimiento',
        paragraphs: [
          'Podemos usar tecnologias como web beacons o pixeles para medir trafico y rendimiento de campanas.',
          'Estas tecnologias suelen apoyarse en cookies para operar correctamente.',
        ],
      },
      {
        title: '5. Publicidad y terceros',
        paragraphs: [
          'Algunos terceros pueden usar cookies para mostrar publicidad relevante basada en navegacion.',
          'No compartimos datos personales directos sin base legal o consentimiento.',
        ],
      },
      {
        title: '6. Actualizaciones de esta politica',
        paragraphs: [
          'Podemos actualizar este documento por cambios tecnicos, legales o regulatorios.',
          'Te recomendamos revisarlo periodicamente.',
        ],
      },
    ],
    contactTitle: '¿Donde obtener mas informacion?',
    contactIntro: 'Si tienes dudas sobre el uso de cookies, puedes contactarnos:',
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'Telefono/WhatsApp',
      locationLabel: 'Direccion',
      locationText: 'Barrio Sarmiento, Cordoba, Argentina (5000)',
    },
    footerNote: 'Esta politica puede actualizarse sin previo aviso para cumplir con normativa vigente.',
  },
  en: {
    title: 'Cookie Policy',
    updatedAt: 'Last updated: March 5, 2026',
    intro: [
      'This Cookie Policy explains how BackupTecno uses cookies and similar technologies to recognize website visitors.',
      'It also describes what cookies we use, why we use them, and how you can manage your preferences.',
    ],
    sections: [
      {
        title: '1. What are cookies?',
        paragraphs: [
          'Cookies are small data files stored in your browser when you visit a website.',
          'They may be first-party cookies (set by us) or third-party cookies (set by external services).',
        ],
      },
      {
        title: '2. Why do we use cookies?',
        bullets: [
          'To ensure technical operation of the site',
          'To remember user preferences',
          'For analytics and user experience improvements',
          'For advertising purposes when applicable',
        ],
      },
      {
        title: '3. How can you control them?',
        paragraphs: [
          'You can accept or reject cookies from the banner and from your browser settings.',
          'Strictly necessary cookies cannot be disabled without affecting core functionality.',
        ],
      },
      {
        title: '4. Other tracking technologies',
        paragraphs: [
          'We may use web beacons or pixels to measure traffic and campaign performance.',
          'These technologies often rely on cookies to function correctly.',
        ],
      },
      {
        title: '5. Advertising and third parties',
        paragraphs: [
          'Some third parties may use cookies to provide relevant ads based on browsing behavior.',
          'We do not share directly identifying personal data without legal basis or consent.',
        ],
      },
      {
        title: '6. Updates to this policy',
        paragraphs: [
          'We may update this policy due to technical, legal, or regulatory changes.',
          'We recommend reviewing it regularly.',
        ],
      },
    ],
    contactTitle: 'Where can you get more information?',
    contactIntro: 'If you have questions about cookies, contact us:',
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'Phone/WhatsApp',
      locationLabel: 'Address',
      locationText: 'Barrio Sarmiento, Cordoba, Argentina (5000)',
    },
    footerNote: 'This policy may be updated without prior notice to comply with current regulations.',
  },
  pt: {
    title: 'Politica de Cookies',
    updatedAt: 'Ultima atualizacao: 5 de marco de 2026',
    intro: [
      'Esta Politica de Cookies explica como a BackupTecno usa cookies e tecnologias semelhantes para reconhecer visitantes do site.',
      'Tambem descreve quais cookies usamos, por que usamos e como voce pode gerenciar preferencias.',
    ],
    sections: [
      {
        title: '1. O que sao cookies?',
        paragraphs: [
          'Cookies sao pequenos arquivos de dados armazenados no navegador quando voce visita um site.',
          'Podem ser cookies proprios (primeira parte) ou de terceiros (servicos externos).',
        ],
      },
      {
        title: '2. Por que usamos cookies?',
        bullets: [
          'Para funcionamento tecnico do site',
          'Para lembrar preferencias do usuario',
          'Para analise e melhoria da experiencia',
          'Para fins publicitarios quando aplicavel',
        ],
      },
      {
        title: '3. Como controlar cookies?',
        paragraphs: [
          'Voce pode aceitar ou recusar cookies pelo banner e pela configuracao do navegador.',
          'Cookies estritamente necessarios nao podem ser desativados sem impactar funcionalidades basicas.',
        ],
      },
      {
        title: '4. Outras tecnologias de rastreamento',
        paragraphs: [
          'Podemos usar web beacons ou pixels para medir trafego e desempenho de campanhas.',
          'Essas tecnologias normalmente dependem de cookies para funcionar corretamente.',
        ],
      },
      {
        title: '5. Publicidade e terceiros',
        paragraphs: [
          'Alguns terceiros podem usar cookies para exibir anuncios relevantes com base na navegacao.',
          'Nao compartilhamos dados pessoais identificaveis sem base legal ou consentimento.',
        ],
      },
      {
        title: '6. Atualizacoes desta politica',
        paragraphs: [
          'Podemos atualizar esta politica por mudancas tecnicas, legais ou regulatorias.',
          'Recomendamos revisar este documento periodicamente.',
        ],
      },
    ],
    contactTitle: 'Onde obter mais informacoes?',
    contactIntro: 'Se voce tiver duvidas sobre cookies, entre em contato:',
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'Telefone/WhatsApp',
      locationLabel: 'Endereco',
      locationText: 'Barrio Sarmiento, Cordoba, Argentina (5000)',
    },
    footerNote: 'Esta politica pode ser atualizada sem aviso previo para cumprir regulamentacoes vigentes.',
  },
};

export const privacyPolicyContent: Record<Language, LegalPageContent> = {
  es: {
    title: 'Politica de Privacidad',
    updatedAt: 'Ultima actualizacion: 5 de marzo de 2026',
    intro: [
      'Esta Politica de Privacidad explica como recopilamos, usamos, almacenamos y compartimos informacion personal cuando utilizas nuestros servicios.',
      'Al usar nuestro sitio, aceptas las practicas descritas en este aviso y el tratamiento de datos segun legislacion aplicable.',
    ],
    sections: [
      {
        title: '1. Informacion que recopilamos',
        bullets: [
          'Datos de contacto enviados en formularios',
          'Datos tecnicos (IP, navegador, dispositivo, sistema operativo)',
          'Datos de uso y navegacion para analitica',
        ],
      },
      {
        title: '2. Como procesamos tu informacion',
        bullets: [
          'Prestacion y mejora de servicios',
          'Comunicacion comercial y soporte',
          'Prevencion de fraude y seguridad',
          'Cumplimiento de obligaciones legales',
        ],
      },
      {
        title: '3. Comparticion con terceros',
        paragraphs: [
          'Podemos compartir informacion con proveedores tecnologicos, afiliados o socios comerciales cuando sea necesario para operar servicios.',
          'No vendemos informacion personal identificable de nuestros usuarios.',
        ],
      },
      {
        title: '4. Cookies y seguimiento',
        paragraphs: [
          'Usamos cookies y tecnologias similares para funcionalidad, medicion y personalizacion.',
          'Puedes gestionar tus preferencias desde el banner y tu navegador.',
        ],
      },
      {
        title: '5. Transferencias internacionales',
        paragraphs: [
          'Los datos pueden procesarse fuera de tu pais de residencia bajo medidas razonables de proteccion.',
          'Aplicamos salvaguardas apropiadas para garantizar seguridad y cumplimiento.',
        ],
      },
      {
        title: '6. Conservacion de datos',
        paragraphs: [
          'Conservamos datos solo durante el tiempo necesario para fines legales, contractuales y operativos.',
          'Cuando ya no sean necesarios, se eliminan o anonimizan de forma segura.',
        ],
      },
      {
        title: '7. Derechos de privacidad',
        bullets: [
          'Acceso a tus datos',
          'Rectificacion de datos incorrectos',
          'Eliminacion de datos cuando corresponda',
          'Retiro de consentimiento segun normativa aplicable',
        ],
      },
      {
        title: '8. Menores de edad',
        paragraphs: [
          'Nuestros servicios no estan dirigidos a menores de 18 anos.',
          'Si detectamos datos de menores sin autorizacion, procederemos a eliminarlos.',
        ],
      },
      {
        title: '9. Actualizaciones de esta politica',
        paragraphs: [
          'Podemos actualizar este aviso cuando haya cambios legales, operativos o tecnicos relevantes.',
          'La version vigente siempre se publica en esta pagina con fecha de actualizacion.',
        ],
      },
    ],
    contactTitle: '¿Como puedes contactarnos?',
    contactIntro: 'Para consultas sobre privacidad y proteccion de datos, contactanos en:',
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp/Telefono',
      locationLabel: 'Ubicacion',
      locationText: 'Barrio Sarmiento, Cordoba, Argentina (5000)',
    },
    footerNote: 'Esta politica fue adaptada para reflejar buenas practicas de privacidad y cumplimiento.',
  },
  en: {
    title: 'Privacy Policy',
    updatedAt: 'Last updated: March 5, 2026',
    intro: [
      'This Privacy Policy explains how we collect, use, store, and share personal information when you use our services.',
      'By using our website, you accept the practices described in this notice and data processing under applicable laws.',
    ],
    sections: [
      {
        title: '1. Information we collect',
        bullets: [
          'Contact details submitted through forms',
          'Technical data (IP, browser, device, operating system)',
          'Usage and navigation data for analytics',
        ],
      },
      {
        title: '2. How we process your information',
        bullets: [
          'Service delivery and improvement',
          'Commercial communication and support',
          'Fraud prevention and security',
          'Legal compliance',
        ],
      },
      {
        title: '3. Sharing with third parties',
        paragraphs: [
          'We may share information with technology providers, affiliates, or business partners when needed to operate services.',
          'We do not sell personally identifiable user data.',
        ],
      },
      {
        title: '4. Cookies and tracking',
        paragraphs: [
          'We use cookies and similar technologies for functionality, measurement, and personalization.',
          'You can manage preferences from the banner and your browser settings.',
        ],
      },
      {
        title: '5. International transfers',
        paragraphs: [
          'Data may be processed outside your country under reasonable protection measures.',
          'We apply safeguards to ensure security and compliance.',
        ],
      },
      {
        title: '6. Data retention',
        paragraphs: [
          'We retain data only as long as necessary for legal, contractual, and operational purposes.',
          'When no longer needed, data is securely deleted or anonymized.',
        ],
      },
      {
        title: '7. Privacy rights',
        bullets: [
          'Access to your data',
          'Correction of inaccurate data',
          'Deletion when applicable',
          'Withdrawal of consent under applicable law',
        ],
      },
      {
        title: '8. Minors',
        paragraphs: [
          'Our services are not intended for users under 18 years old.',
          'If we detect unauthorized minor data, we will remove it.',
        ],
      },
      {
        title: '9. Policy updates',
        paragraphs: [
          'We may update this policy due to legal, operational, or technical changes.',
          'The current version is always available on this page with update date.',
        ],
      },
    ],
    contactTitle: 'How can you contact us?',
    contactIntro: 'For privacy and data protection inquiries, contact us at:',
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp/Phone',
      locationLabel: 'Location',
      locationText: 'Barrio Sarmiento, Cordoba, Argentina (5000)',
    },
    footerNote: 'This policy was adapted to reflect privacy and compliance best practices.',
  },
  pt: {
    title: 'Politica de Privacidade',
    updatedAt: 'Ultima atualizacao: 5 de marco de 2026',
    intro: [
      'Esta Politica de Privacidade explica como coletamos, usamos, armazenamos e compartilhamos dados pessoais quando voce usa nossos servicos.',
      'Ao usar nosso site, voce aceita as praticas descritas neste aviso e o tratamento de dados conforme legislacao aplicavel.',
    ],
    sections: [
      {
        title: '1. Informacoes que coletamos',
        bullets: [
          'Dados de contato enviados em formularios',
          'Dados tecnicos (IP, navegador, dispositivo, sistema operacional)',
          'Dados de uso e navegacao para analise',
        ],
      },
      {
        title: '2. Como processamos suas informacoes',
        bullets: [
          'Prestacao e melhoria de servicos',
          'Comunicacao comercial e suporte',
          'Prevencao de fraude e seguranca',
          'Cumprimento de obrigacoes legais',
        ],
      },
      {
        title: '3. Compartilhamento com terceiros',
        paragraphs: [
          'Podemos compartilhar informacoes com provedores tecnologicos, afiliados ou parceiros quando necessario para operar servicos.',
          'Nao vendemos dados pessoais identificaveis.',
        ],
      },
      {
        title: '4. Cookies e rastreamento',
        paragraphs: [
          'Usamos cookies e tecnologias semelhantes para funcionalidade, medicao e personalizacao.',
          'Voce pode gerenciar preferencias no banner e no navegador.',
        ],
      },
      {
        title: '5. Transferencias internacionais',
        paragraphs: [
          'Os dados podem ser processados fora do seu pais sob medidas razoaveis de protecao.',
          'Aplicamos salvaguardas para garantir seguranca e conformidade.',
        ],
      },
      {
        title: '6. Retencao de dados',
        paragraphs: [
          'Mantemos dados somente pelo tempo necessario para fins legais, contratuais e operacionais.',
          'Quando nao forem mais necessarios, os dados sao excluidos ou anonimizados com seguranca.',
        ],
      },
      {
        title: '7. Direitos de privacidade',
        bullets: [
          'Acesso aos seus dados',
          'Correcao de dados incorretos',
          'Exclusao quando aplicavel',
          'Retirada de consentimento conforme legislacao',
        ],
      },
      {
        title: '8. Menores de idade',
        paragraphs: [
          'Nossos servicos nao sao destinados a menores de 18 anos.',
          'Se detectarmos dados de menores sem autorizacao, iremos exclui-los.',
        ],
      },
      {
        title: '9. Atualizacoes desta politica',
        paragraphs: [
          'Podemos atualizar esta politica por mudancas legais, operacionais ou tecnicas.',
          'A versao vigente permanece publicada nesta pagina com data de atualizacao.',
        ],
      },
    ],
    contactTitle: 'Como entrar em contato?',
    contactIntro: 'Para duvidas sobre privacidade e protecao de dados, fale conosco em:',
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp/Telefone',
      locationLabel: 'Localizacao',
      locationText: 'Barrio Sarmiento, Cordoba, Argentina (5000)',
    },
    footerNote: 'Esta politica foi adaptada para refletir boas praticas de privacidade e conformidade.',
  },
};

export const termsContent: Record<Language, LegalPageContent> = {
  es: {
    title: 'Terminos y Condiciones',
    updatedAt: 'Ultima actualizacion: 4 de marzo de 2026',
    intro: [
      'Al acceder y utilizar este sitio web y nuestros servicios, aceptas estos terminos y condiciones.',
      'Si no estas de acuerdo con alguna disposicion, debes abstenerte de usar la plataforma.',
    ],
    sections: [
      {
        title: '1. Aceptacion y elegibilidad',
        bullets: [
          'Debes ser mayor de 18 anos o tener capacidad legal suficiente',
          'Debes cumplir leyes y regulaciones aplicables',
          'El uso fraudulento o automatizado esta prohibido',
        ],
      },
      {
        title: '2. Alcance del servicio',
        bullets: [
          'Desarrollo web y aplicaciones',
          'Diseno de interfaces UI/UX',
          'Consultoria tecnica y estrategica',
          'Mantenimiento y soporte especializado',
        ],
      },
      {
        title: '3. Propiedad intelectual',
        paragraphs: [
          'El contenido del sitio y materiales desarrollados estan protegidos por derechos de propiedad intelectual.',
          'El cliente recibe licencia de uso segun los terminos del contrato, salvo acuerdo diferente por escrito.',
        ],
      },
      {
        title: '4. Pagos y facturacion',
        paragraphs: [
          'Los proyectos se facturan segun presupuesto y condiciones acordadas por contrato.',
          'El cliente es responsable de proveer datos de pago correctos y actualizados.',
        ],
      },
      {
        title: '5. Reembolsos',
        paragraphs: [
          'Los reembolsos dependen del estado del proyecto y de lo pactado contractualmente.',
          'En servicios ya entregados conforme alcance, no aplica devolucion salvo acuerdo expreso.',
        ],
      },
      {
        title: '6. Actividades prohibidas',
        bullets: [
          'Acceso no autorizado, scraping o hacking',
          'Redistribucion no autorizada de codigo',
          'Uso ilegal, fraudulento o malicioso',
          'Intentos de eludir medidas de seguridad',
        ],
      },
      {
        title: '7. Limitacion de responsabilidad',
        paragraphs: [
          'Los servicios se prestan bajo los limites y garantias definidos en contrato.',
          'No asumimos responsabilidad por danos indirectos fuera del alcance legal permitido.',
        ],
      },
      {
        title: '8. Ley aplicable y jurisdiccion',
        paragraphs: [
          'Estos terminos se rigen por las leyes de la Republica Argentina.',
          'Las controversias se someten a jurisdiccion competente en Cordoba, Argentina.',
        ],
      },
      {
        title: '9. Modificaciones',
        paragraphs: [
          'Podemos actualizar estos terminos por razones legales u operativas.',
          'La version vigente estara disponible en esta pagina.',
        ],
      },
    ],
    contactTitle: 'Contacto',
    contactIntro: 'Para consultas sobre estos terminos, puedes comunicarte en:',
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp/Telefono',
      locationLabel: 'Ubicacion',
      locationText: 'Barrio Sarmiento, Cordoba, Argentina (5000)',
    },
    footerNote: 'Estos terminos pueden modificarse en cualquier momento para reflejar cambios legales y operativos.',
  },
  en: {
    title: 'Terms and Conditions',
    updatedAt: 'Last updated: March 4, 2026',
    intro: [
      'By accessing and using this website and our services, you agree to these terms and conditions.',
      'If you do not agree with any clause, you should not use the platform.',
    ],
    sections: [
      {
        title: '1. Acceptance and eligibility',
        bullets: [
          'You must be at least 18 years old or have legal capacity',
          'You must comply with applicable laws and regulations',
          'Fraudulent or automated use is prohibited',
        ],
      },
      {
        title: '2. Service scope',
        bullets: [
          'Web and application development',
          'UI/UX interface design',
          'Technical and strategic consulting',
          'Specialized maintenance and support',
        ],
      },
      {
        title: '3. Intellectual property',
        paragraphs: [
          'Website content and developed materials are protected by intellectual property rights.',
          'The client receives a usage license under contract terms unless otherwise agreed in writing.',
        ],
      },
      {
        title: '4. Payments and billing',
        paragraphs: [
          'Projects are billed according to quotation and contractual conditions.',
          'The client is responsible for providing accurate and updated payment information.',
        ],
      },
      {
        title: '5. Refunds',
        paragraphs: [
          'Refunds depend on project status and contractual terms.',
          'For delivered services within agreed scope, refunds do not apply unless explicitly agreed.',
        ],
      },
      {
        title: '6. Prohibited activities',
        bullets: [
          'Unauthorized access, scraping, or hacking',
          'Unauthorized redistribution of code',
          'Illegal, fraudulent, or malicious use',
          'Attempts to bypass security measures',
        ],
      },
      {
        title: '7. Limitation of liability',
        paragraphs: [
          'Services are provided under limits and warranties defined in contract.',
          'We are not liable for indirect damages beyond legally permitted scope.',
        ],
      },
      {
        title: '8. Governing law and jurisdiction',
        paragraphs: [
          'These terms are governed by the laws of Argentina.',
          'Disputes are submitted to competent jurisdiction in Cordoba, Argentina.',
        ],
      },
      {
        title: '9. Updates',
        paragraphs: [
          'We may update these terms for legal or operational reasons.',
          'The current version will remain published on this page.',
        ],
      },
    ],
    contactTitle: 'Contact',
    contactIntro: 'For inquiries about these terms, contact us at:',
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp/Phone',
      locationLabel: 'Location',
      locationText: 'Barrio Sarmiento, Cordoba, Argentina (5000)',
    },
    footerNote: 'These terms may be updated at any time to reflect legal and operational changes.',
  },
  pt: {
    title: 'Termos e Condicoes',
    updatedAt: 'Ultima atualizacao: 4 de marco de 2026',
    intro: [
      'Ao acessar e utilizar este site e nossos servicos, voce concorda com estes termos e condicoes.',
      'Se nao concordar com alguma clausula, nao deve utilizar a plataforma.',
    ],
    sections: [
      {
        title: '1. Aceitacao e elegibilidade',
        bullets: [
          'Voce deve ter pelo menos 18 anos ou capacidade legal',
          'Deve cumprir leis e regulamentos aplicaveis',
          'Uso fraudulento ou automatizado e proibido',
        ],
      },
      {
        title: '2. Escopo do servico',
        bullets: [
          'Desenvolvimento web e aplicacoes',
          'Design de interfaces UI/UX',
          'Consultoria tecnica e estrategica',
          'Manutencao e suporte especializado',
        ],
      },
      {
        title: '3. Propriedade intelectual',
        paragraphs: [
          'Conteudo do site e materiais desenvolvidos sao protegidos por direitos de propriedade intelectual.',
          'O cliente recebe licenca de uso conforme contrato, salvo acordo escrito em contrario.',
        ],
      },
      {
        title: '4. Pagamentos e faturamento',
        paragraphs: [
          'Os projetos sao faturados conforme proposta e condicoes contratuais.',
          'O cliente e responsavel por fornecer dados de pagamento corretos e atualizados.',
        ],
      },
      {
        title: '5. Reembolsos',
        paragraphs: [
          'Reembolsos dependem do status do projeto e do contrato aplicavel.',
          'Para servicos entregues conforme escopo acordado, nao ha reembolso salvo acordo expresso.',
        ],
      },
      {
        title: '6. Atividades proibidas',
        bullets: [
          'Acesso nao autorizado, scraping ou hacking',
          'Redistribuicao nao autorizada de codigo',
          'Uso ilegal, fraudulento ou malicioso',
          'Tentativas de burlar medidas de seguranca',
        ],
      },
      {
        title: '7. Limitacao de responsabilidade',
        paragraphs: [
          'Os servicos sao prestados com limites e garantias definidos em contrato.',
          'Nao assumimos responsabilidade por danos indiretos alem do permitido por lei.',
        ],
      },
      {
        title: '8. Lei aplicavel e jurisdicao',
        paragraphs: [
          'Estes termos sao regidos pelas leis da Republica Argentina.',
          'Disputas serao submetidas a jurisdicao competente em Cordoba, Argentina.',
        ],
      },
      {
        title: '9. Atualizacoes',
        paragraphs: [
          'Podemos atualizar estes termos por motivos legais ou operacionais.',
          'A versao vigente permanecera publicada nesta pagina.',
        ],
      },
    ],
    contactTitle: 'Contato',
    contactIntro: 'Para duvidas sobre estes termos, entre em contato em:',
    contact: {
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp/Telefone',
      locationLabel: 'Localizacao',
      locationText: 'Barrio Sarmiento, Cordoba, Argentina (5000)',
    },
    footerNote: 'Estes termos podem ser atualizados a qualquer momento para refletir mudancas legais e operacionais.',
  },
};
