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
          <Hero />
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
          <section className="rounded-section border border-copper/30 bg-copper/10 px-6 py-12 text-center md:px-12 md:py-14">
            <p className="mx-auto max-w-2xl font-voice text-[clamp(1.3rem,2.8vw,1.65rem)] font-medium italic leading-snug text-navy">
              Pain that keeps coming back rarely stays the same. Every year
              you wait, the list of things you avoid gets a little longer.
            </p>
          </section>
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
          <Fascia />
        </Reveal>

        <Reveal>
          <Newsletter />
        </Reveal>

        <Reveal>
          <Fit />
        </Reveal>

        <Reveal>
          <section className="rounded-section border border-copper/30 bg-copper/10 px-6 py-12 text-center md:px-12 md:py-14">
            <p className="mx-auto max-w-2xl font-voice text-[clamp(1.3rem,2.8vw,1.65rem)] font-medium italic leading-snug text-navy">
              The real risk isn&apos;t this flare-up. It&apos;s reaching 65
              more careful, more dependent on clinics, and with fewer options
              than you have today. The earlier you rebuild, the easier it is.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <FinalCta />
        </Reveal>

        <Reveal>
          <Faq />
        </Reveal>

        <Footer locale="en" />
      </main>

      <StickyMobileCta />
    </>
  );
}
