import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import CookieBanner from "@/components/CookieBanner";
import { ContactProvider } from "@/context/ContactContext";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Backup Tecno | Desarrollo Web & Programación Profesional",
  description: "Desarrollo web innovador con Next.js, React y TypeScript. Soluciones escalables, SEO optimizadas y diseño responsivo. ¡Transformamos tu idea en realidad digital!",
  keywords: ["desarrollo web", "Next.js", "React", "TypeScript", "programación", "diseño web", "SEO", "Argentina"],
  authors: [{ name: "Backup Tecno" }],
  creator: "Backup Tecno",
  publisher: "Backup Tecno",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
    ],
    apple: "/apple-touch-icon.webp",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://backuptecno.com",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://backuptecno.com",
    siteName: "Backup Tecno",
    title: "Backup Tecno | Desarrollo Web Profesional",
    description: "Soluciones de desarrollo web innovadoras con Next.js, React y TypeScript. Creamos aplicaciones web rápidas, seguras y escalables.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Backup Tecno - Desarrollo Web Profesional",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backup Tecno | Desarrollo Web Profesional",
    description: "Soluciones de desarrollo web innovadoras con las mejores tecnologías",
    images: ["/og-image.webp"],
    creator: "@backuptecno",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Backup Tecno",
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://backuptecno.com"),
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#0B1829",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <ContactProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <ContactModal />
            <CookieBanner />
          </ContactProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
