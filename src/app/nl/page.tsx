import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import { homeNl } from "@/config/content.nl";
import { Reveal } from "@/components/ui/Reveal";
import { Header } from "@/components/sections/Header";
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
import { Promise } from "@/components/sections/Promise";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCta } from "@/components/sections/StickyMobileCta";

export const metadata: Metadata = {
  title: homeNl.meta.title,
  description: homeNl.meta.description,
  alternates: {
    canonical: `${siteConfig.siteUrl}/nl`,
    languages: {
      en: `${siteConfig.siteUrl}/`,
      nl: `${siteConfig.siteUrl}/nl`,
      "x-default": `${siteConfig.siteUrl}/`,
    },
  },
};

export default function HomeNlPage() {
  return (
    <>
      <Header locale="nl" />

      <main className="mx-auto max-w-6xl space-y-4 px-4 py-4 pb-24 md:pb-4">
        <Reveal>
          <Hero content={homeNl.hero} ctaSecondaryHref="/nl/fascia-reset-session" />
        </Reveal>

        <div id="hero-sentinel" aria-hidden />

        <Reveal delay={0.05}>
          <ProofBar content={homeNl.proofBar} />
        </Reveal>

        <Reveal>
          <Problem content={homeNl.problem} />
        </Reveal>

        <Reveal>
          <QuickFixes content={homeNl.quickFixes} />
        </Reveal>

        <Reveal>
          <Solution content={homeNl.solution} />
        </Reveal>

        <Reveal>
          <Plan content={homeNl.plan} ctaLabel={homeNl.finalCta.primary} />
        </Reveal>

        <Reveal>
          <Newsletter content={homeNl.newsletter} />
        </Reveal>

        <Reveal>
          <Fit content={homeNl.fit} />
        </Reveal>

        <Reveal>
          <Testimonials content={homeNl.testimonials} />
        </Reveal>

        <Reveal>
          <Fascia content={homeNl.fascia} ctaHref="/nl/fascia-reset-session" />
        </Reveal>

        <Reveal>
          <Promise content={homeNl.promise} />
        </Reveal>

        <Reveal>
          <About content={homeNl.about} />
        </Reveal>

        <Reveal>
          <Faq content={homeNl.faq} />
        </Reveal>

        <Reveal>
          <FinalCta content={homeNl.finalCta} />
        </Reveal>

        <Footer locale="nl" />
      </main>

      <StickyMobileCta ctaLabel={homeNl.hero.ctaPrimary} />
    </>
  );
}
