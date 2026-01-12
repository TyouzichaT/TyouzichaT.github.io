import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
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

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "You Zuo | Quant & AI Architect",
  description: "Architecting Financial Intelligence. Bridging traditional finance with AI-driven predictive modeling.",
  keywords: ["quantitative finance", "AI", "financial engineering", "portfolio", "You Zuo"],
  authors: [{ name: "You Zuo" }],
  openGraph: {
    title: "You Zuo | Quant & AI Architect",
    description: "Architecting Financial Intelligence. Bridging traditional finance with AI-driven predictive modeling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} antialiased bg-black text-white selection:bg-blue-500/30 font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
