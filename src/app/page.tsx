import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { Header } from "@/components/sections/Header";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      en: siteConfig.siteUrl,
      nl: `${siteConfig.siteUrl}/nl`,
      "x-default": siteConfig.siteUrl,
    },
  },
};
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { Problem } from "@/components/sections/Problem";
import { QuickFixes } from "@/components/sections/QuickFixes";
import { Solution } from "@/components/sections/Solution";
import { Plan } from "@/components/sections/Plan";
import { Newsletter } from "@/components/sections/Newsletter";
import { Fit } from "@/components/sections/Fit";
import { Testimonials } from "@/components/sections/Testimonials";
import { Fascia } from "@/components/sections/Fascia";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCta } from "@/components/sections/StickyMobileCta";

export default function HomePage() {
  return (
    <>
      <Header locale="en" />

      <main className="mx-auto max-w-6xl space-y-4 px-4 py-4 pb-24 md:pb-4">
        <Reveal>
          <Hero ctaSecondaryHref="/fascia-reset-session" />
        </Reveal>

        {/* Sentinel: sticky mobile CTA appears once this leaves the viewport */}
        <div id="hero-sentinel" aria-hidden />

        <Reveal delay={0.05}>
          <ProofBar />
        </Reveal>

        <Reveal>
          <Problem />
        </Reveal>

        <Reveal>
          <QuickFixes />
        </Reveal>

        <Reveal>
          <Solution />
        </Reveal>

        <Reveal>
          <Plan />
        </Reveal>

        <Reveal>
          <Newsletter />
        </Reveal>

        <Reveal>
          <Fit />
        </Reveal>

        <Reveal>
          <Testimonials />
        </Reveal>

        <Reveal>
          <Fascia />
        </Reveal>

        <Reveal>
          <Faq />
        </Reveal>

        <Reveal>
          <FinalCta />
        </Reveal>

        <Footer locale="en" />
      </main>

      <StickyMobileCta />
    </>
  );
}
