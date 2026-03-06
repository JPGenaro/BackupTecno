import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Backup Tecno - Desarrollo Web Profesional",
  description: "Servicios de desarrollo web: desarrollo web completo, diseño UI/UX, APIs REST, bases de datos, DevOps y mantenimiento. Soluciones con Next.js, React y TypeScript.",
  keywords: ["servicios web", "desarrollo web", "diseño UI/UX", "APIs", "DevOps", "mantenimiento web"],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://backuptecno.com/servicios",
    siteName: "Backup Tecno",
    title: "Servicios | Backup Tecno - Desarrollo Web Profesional",
    description: "Descubre nuestros servicios de desarrollo web: desde desarrollo completo hasta diseño de interfaces y mantenimiento técnico.",
    images: [
      {
        url: "/og-servicios.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de Backup Tecno",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios | Backup Tecno",
    description: "Desarrollo web, diseño UI/UX, APIs, DevOps y más",
    images: ["/og-servicios.webp"],
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
