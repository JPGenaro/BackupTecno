// Structured Data (JSON-LD) para SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Backup Tecno',
  url: 'https://backuptecno.com',
  logo: 'https://backuptecno.com/logo_real_no_fake_A.webp',
  description: 'Desarrollo web innovador con Next.js, React y TypeScript. Soluciones escalables y SEO optimizadas.',
  sameAs: [
    'https://www.linkedin.com/company/backuptecno',
    'https://github.com/backuptecno',
    'https://twitter.com/backuptecno',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Sales',
    email: 'contacto@backuptecno.com',
    telephone: '+54-9-3513021607',
    areaServed: 'AR',
    availableLanguage: 'es',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
  },
};

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Backup Tecno',
  image: 'https://backuptecno.com/og-image.webp',
  description: 'Empresa de desarrollo web profesional con experiencia en Next.js, React y TypeScript',
  url: 'https://backuptecno.com',
  telephone: '+54-9-3513021607',
  email: 'contacto@backuptecno.com',
  priceRange: '$$',
  areaServed: 'AR',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '15',
  },
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Desarrollo Web Profesional',
  description: 'Servicios completos de desarrollo web con tecnologías modernas',
  provider: {
    '@type': 'Organization',
    name: 'Backup Tecno',
    url: 'https://backuptecno.com',
  },
  areaServed: 'AR',
  availableLanguage: 'es',
  offers: [
    {
      '@type': 'Offer',
      name: 'Desarrollo Web Completo',
    },
    {
      '@type': 'Offer',
      name: 'Diseño UI/UX',
    },
    {
      '@type': 'Offer',
      name: 'APIs REST',
    },
    {
      '@type': 'Offer',
      name: 'DevOps',
    },
  ],
};

export const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Backup Tecno',
  applicationCategory: 'WebDevelopment',
  offers: {
    '@type': 'Offer',
    price: 'Consultar',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '15',
  },
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
