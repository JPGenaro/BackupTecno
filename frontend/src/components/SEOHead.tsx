import type { Metadata, ReactNode } from "next";
import React from "react";
import SchemaOrg from "@/components/SchemaOrg";
import { organizationSchema, businessSchema } from "@/utils/seoSchemas";
import { siteVerification } from "@/utils/siteVerification";

/**
 * Componente para verificación de sitios y schema global
 * Se puede usar en layout.tsx o page.tsx como Server Component
 */
export function SEOHead(): ReactNode {
  return (
    <>
      {/* Google Site Verification */}
      {siteVerification.google && siteVerification.google !== "YOUR_GOOGLE_VERIFICATION_CODE" && (
        <meta name="google-site-verification" content={siteVerification.google} />
      )}

      {/* Microsoft Site Verification */}
      {siteVerification.microsoft && siteVerification.microsoft !== "YOUR_MSVALIDATE_CODE" && (
        <meta name="msvalidate.01" content={siteVerification.microsoft} />
      )}

      {/* Yandex Site Verification */}
      {siteVerification.yandex && siteVerification.yandex !== "YOUR_YANDEX_VERIFICATION_CODE" && (
        <meta name="yandex-verification" content={siteVerification.yandex} />
      )}

      {/* Preconnect a recursos externos importantes */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* OpenSearch Descriptor */}
      <link rel="search" type="application/opensearchdescription+xml" title="Backup Tecno" href="/opensearch.xml" />

      {/* Schema.org Structured Data */}
      <SchemaOrg schema={organizationSchema} />
      <SchemaOrg schema={businessSchema} />
    </>
  );
}

/**
 * Configuración de metadatos estándar reutilizables
 */
export const defaultMetadataConfig: Partial<Metadata> = {
  metadataBase: new URL("https://backuptecno.com"),
  alternates: {
    canonical: "https://backuptecno.com",
    languages: {
      es: "https://backuptecno.com/es",
      "es-AR": "https://backuptecno.com/es-AR",
    },
  },
};
