import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Backup Tecno",
  description: "Conoce cómo usamos cookies en nuestro sitio web y cómo puedes controlarlas.",
  robots: "index, follow, noarchive",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://backuptecno.com/politica-cookies",
    siteName: "Backup Tecno",
    title: "Política de Cookies | Backup Tecno",
    description: "Política de cookies de Backup Tecno",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Política de Cookies",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Política de Cookies | Backup Tecno",
    description: "Política de cookies de Backup Tecno",
  },
};

export default function PoliticaCookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
