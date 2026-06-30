/**
 * REFERENCE layout — wire your two fonts here.
 * Swap Fraunces / Inter for your chosen pair; keep the CSS variable names.
 */
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { home } from "@/config/content.en";
import "./globals.css";

const voice = Fraunces({ subsets: ["latin"], variable: "--font-voice", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${voice.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
