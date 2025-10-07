import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Explorador de Países",
    default: "Explorador de Países",
  },
  description:"Explora, filtra y guarda tus países favoritos del mundo. Consulta información sobre regiones, población y más, con una interfaz moderna y rápida.",

  metadataBase: new URL("https://explorador-de-paises-rb.vercel.app"),
  manifest: "/manifest.webmanifest",
  themeColor: "#0d1333",

  openGraph: {
    title: "Explorador de Países",
    description:
      "Explora, filtra y guarda tus países favoritos del mundo 🌍 con información detallada.",
    url: "https://explorador-de-paises-rb.vercel.app",
    siteName: "Explorador de Países",
    images: [
      {
        url: "https://res.cloudinary.com/doublebl/image/upload/v1759812537/explorador_paises_tkec6u.png",
        width: 1200,
        height: 630,
        alt: "Explorador de Países",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon-192.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-royal-blue-50 min-h-screen w-full flex flex-col items-center text-royal-blue-900 max-[300px]:break-all`}
      >
        <Navbar></Navbar>
        <main className="flex flex-col w-full max-w-[1200px] flex-1 px-5">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
