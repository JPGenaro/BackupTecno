import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://backuptecno.com';
  const baseUrl = configuredUrl.replace(/\/$/, '').replace('://www.', '://');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
