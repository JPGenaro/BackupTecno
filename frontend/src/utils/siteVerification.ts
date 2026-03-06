/**
 * Configuración de Verificación de Sitios Web
 * 
 * Este archivo contiene códigos de verificación y configuraciones para:
 * - Google Search Console
 * - Microsoft Bing Webmaster Tools
 * - Otros servicios de verificación de sitios
 * 
 * Instrucciones:
 * 1. Reemplaza los valores "YOUR_..." con los códigos reales obtenidos de cada servicio
 * 2. El código será usado en /src/components/SEOHead.tsx
 */

export const siteVerification = {
  // Google Search Console
  // Obtén esto en: https://search.google.com/search-console
  google: "YOUR_GOOGLE_VERIFICATION_CODE",

  // Microsoft Bing Webmaster Tools
  // Obtén esto en: https://www.bing.com/webmasters
  microsoft: "YOUR_MSVALIDATE_CODE",

  // Yandex (si quieres optimizar para Rusia/Ex-URSS)
  // Obtén esto en: https://webmaster.yandex.com/
  yandex: "YOUR_YANDEX_VERIFICATION_CODE",
};

export const siteConfig = {
  // URL base del sitio
  baseUrl: "https://backuptecno.com",

  // Email de contacto para soporte/problemas
  contactEmail: "contacto@backuptecno.com",

  // Teléfono de contacto
  contactPhone: "+54-9-3513021607",

  // País/Región
  country: "AR",

  // Idioma principal
  language: "es",

  // Nombre de la organización
  organizationName: "Backup Tecno",

  // Redes sociales
  socialProfiles: {
    twitter: "https://twitter.com/backuptecno",
    linkedin: "https://www.linkedin.com/company/backuptecno",
    github: "https://github.com/backuptecno",
    facebook: "https://www.facebook.com/backuptecno",
  },

  // Horarios de operación (formato iCal)
  businessHours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-15:00",
    sunday: "closed",
  },
};
