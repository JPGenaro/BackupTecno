import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Backup Tecno",
  description: "Lee nuestros términos y condiciones de uso del sitio web y servicios de Backup Tecno.",
  robots: "index, follow, noarchive",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://backuptecno.com/terminos-condiciones",
    siteName: "Backup Tecno",
    title: "Términos y Condiciones | Backup Tecno",
    description: "Términos y condiciones de uso de Backup Tecno",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Términos y Condiciones",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Términos y Condiciones | Backup Tecno",
    description: "Términos y condiciones de Backup Tecno",
  },
};

export default function TerminosCondicionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
