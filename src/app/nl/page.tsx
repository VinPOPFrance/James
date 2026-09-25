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
          <Hero content={homeNl.hero} />
        </Reveal>

        <div id="hero-sentinel" aria-hidden />

        <Reveal delay={0.05}>
          <ProofBar content={homeNl.proofBar} />
        </Reveal>

        <Reveal>
          <Problem content={homeNl.problem} />
        </Reveal>

        <Reveal>
          <section className="rounded-section border border-copper/30 bg-copper/10 px-6 py-12 text-center md:px-12 md:py-14">
            <p className="mx-auto max-w-2xl font-voice text-[clamp(1.3rem,2.8vw,1.65rem)] font-medium italic leading-snug text-navy">
              Pijn die telkens terugkomt, blijft zelden hetzelfde. Met elk
              jaar dat je wacht, wordt de lijst met dingen die je vermijdt een
              stukje langer.
            </p>
          </section>
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
          <section className="rounded-section border border-copper/30 bg-copper/10 px-6 py-12 text-center md:px-12 md:py-14">
            <p className="mx-auto max-w-2xl font-voice text-[clamp(1.3rem,2.8vw,1.65rem)] font-medium italic leading-snug text-navy">
              Het echte risico is niet deze opflakkering. Het is dat je op je
              65e voorzichtiger bent, afhankelijker van behandelaars, en met
              minder opties dan je nu hebt. Hoe eerder je opbouwt, hoe
              makkelijker het gaat.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <Testimonials content={homeNl.testimonials} />
        </Reveal>

        <Reveal>
          <Fascia content={homeNl.fascia} ctaHref="/nl/fascia-reset-session" />
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
