import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Backup Tecno",
  description: "Lee nuestra política de privacidad para entender cómo protegemos tus datos personales y qué información recopilamos.",
  robots: "index, follow, noarchive",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://backuptecno.com/politica-privacidad",
    siteName: "Backup Tecno",
    title: "Política de Privacidad | Backup Tecno",
    description: "Política de privacidad de Backup Tecno. Información sobre protección de datos.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Política de Privacidad",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidad | Backup Tecno",
    description: "Política de privacidad de Backup Tecno",
  },
};

export default function PoliticaPrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
