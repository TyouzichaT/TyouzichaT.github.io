import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Faculty_Glyphic } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { LanguageProvider } from "../context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const facultyGlyphic = Faculty_Glyphic({
  weight: "400",
  variable: "--font-faculty",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "You Zuo | Fintech Engineer",
  description: "Building software and AI tools for finance.",
  keywords: ["fintech", "AI", "software engineer", "finance", "You Zuo"],
  authors: [{ name: "You Zuo" }],
  openGraph: {
    title: "You Zuo | Fintech Engineer",
    description: "Building software and AI tools for finance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${facultyGlyphic.variable} antialiased bg-white text-black font-sans`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
