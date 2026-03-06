import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Backup Tecno - Portafolio de Desarrollos Web",
  description: "Explora nuestro portafolio de proyectos exitosos. Aplicaciones web, e-commerce, plataformas SaaS y más. Casos de éxito con Next.js, React y TypeScript.",
  keywords: ["proyectos", "portafolio", "casos de éxito", "aplicaciones web", "e-commerce"],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://backuptecno.com/proyectos",
    siteName: "Backup Tecno",
    title: "Proyectos | Backup Tecno - Portafolio de Desarrollos",
    description: "Descubre nuestros proyectos realizados: aplicaciones web, e-commerce y plataformas SaaS exitosas.",
    images: [
      {
        url: "/og-proyectos.webp",
        width: 1200,
        height: 630,
        alt: "Proyectos de Backup Tecno",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos | Backup Tecno",
    description: "Conoce nuestros proyectos y casos de éxito",
    images: ["/og-proyectos.webp"],
  },
};

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
