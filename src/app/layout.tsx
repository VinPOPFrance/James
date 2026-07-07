import type { Metadata } from "next";
import { Suspense } from "react";
import { Fraunces, Inter } from "next/font/google";
import { home } from "@/config/content.en";
import { businessInfo } from "@/config/business-info";
import { siteConfig } from "@/config/site-config";
import { TrackingScripts } from "@/components/analytics/TrackingScripts";
import "./globals.css";

const voice = Fraunces({ subsets: ["latin"], variable: "--font-voice", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: businessInfo.brandName,
  founder: {
    "@type": "Person",
    name: businessInfo.founderName,
  },
  url: siteConfig.siteUrl,
  telephone: businessInfo.phoneDisplay,
  email: businessInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    postalCode: businessInfo.address.postalCode,
    addressCountry: businessInfo.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Rotterdam" },
    { "@type": "Country", name: "Netherlands" },
  ],
  sameAs: [
    businessInfo.socials.instagram,
    businessInfo.socials.linkedin,
    businessInfo.socials.youtube,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${voice.variable} ${sans.variable}`}>
      <body className="font-sans">
        {children}
        <Suspense fallback={null}>
          <TrackingScripts />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
