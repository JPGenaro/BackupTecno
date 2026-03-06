import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Backup Tecno - Quiénes Somos",
  description: "Conoce a Backup Tecno, nuestro equipo de expertos en desarrollo web. Somos apasionados por crear soluciones digitales innovadoras con tecnología de punta.",
  keywords: ["quiénes somos", "equipo", "sobre nosotros", "experiencia", "desarrolladores"],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://backuptecno.com/nosotros",
    siteName: "Backup Tecno",
    title: "Nosotros | Backup Tecno - Quiénes Somos",
    description: "Conoce nuestro equipo de expertos en desarrollo web y nuestra misión de crear soluciones digitales innovadoras.",
    images: [
      {
        url: "/og-nosotros.webp",
        width: 1200,
        height: 630,
        alt: "Sobre Backup Tecno",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | Backup Tecno",
    description: "Conoce a nuestro equipo y nuestra historia",
    images: ["/og-nosotros.webp"],
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
