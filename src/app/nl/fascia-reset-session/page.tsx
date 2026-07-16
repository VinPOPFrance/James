import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { icons } from "@/lib/icons";
import { fasciaNl } from "@/config/content.fascia.nl";
import { businessInfo } from "@/config/business-info";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: fasciaNl.meta.title,
  description: fasciaNl.meta.description,
  alternates: {
    canonical: `${siteConfig.siteUrl}/nl/fascia-reset-session`,
    languages: {
      en: `${siteConfig.siteUrl}/fascia-reset-session`,
      nl: `${siteConfig.siteUrl}/nl/fascia-reset-session`,
      "x-default": `${siteConfig.siteUrl}/fascia-reset-session`,
    },
  },
};

export default function FasciaNlPage() {
  const t = fasciaNl;

  return (
    <PageLayout locale="nl">
      <Reveal>
        <section className="relative overflow-hidden rounded-section border border-hairline bg-ivory px-8 py-16 md:px-14 md:py-20">
          <div className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.hero.eyebrow}</p>
              <h1 className="mb-5 font-voice text-[clamp(2rem,4vw,2.6rem)] font-medium leading-[1.11] text-navy">
                {t.hero.title}
              </h1>
              <p className="mb-8 text-[16px] leading-relaxed text-inkSoft">{t.hero.body}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="card-lift flex h-full flex-col rounded-card border border-hairline bg-white p-7">
                <p className="mb-1 text-[12px] font-medium uppercase tracking-wider text-muted">Snelle spanningsrelease</p>
                <p className="mb-1 text-[1.1rem] font-semibold text-navy">30 minuten</p>
                <p className="mb-3 font-voice text-[2rem] font-medium text-navy">€49</p>
                <p className="mb-6 flex-1 text-[14px] leading-relaxed text-inkSoft">
                  Een gerichte release sessie voor één gebied. Goed als je nieuwsgierig bent en een laagdrempelige eerste stap wilt zetten.
                </p>
                <Button href={businessInfo.bookingUrl} surface="light" variant="primary" external fullWidth>
                  Boek 30 min sessie
                </Button>
              </div>

              <div className="card-lift flex h-full flex-col rounded-card border border-navy bg-navy p-7 text-ivory shadow-[0_20px_50px_-24px_rgba(31,42,60,0.35)]">
                <p className="mb-1 text-[12px] font-medium uppercase tracking-wider text-copper">Volledige eerste ervaring</p>
                <p className="mb-1 text-[1.1rem] font-semibold text-ivory">60 minuten</p>
                <p className="mb-3 font-voice text-[2rem] font-medium text-copper">€90</p>
                <p className="mb-6 flex-1 text-[14px] leading-relaxed text-ivory/75">
                  Een complete analyse, release werk en mini-plan. De beste manier om je lichaam te leren kennen voordat je beslist over het volledige programma.
                </p>
                <Button href={businessInfo.bookingUrl} surface="dark" variant="primary" external fullWidth>
                  Boek 60 min sessie
                </Button>
              </div>

              <div className="card-lift flex h-full flex-col rounded-card border border-sage/30 bg-[#F7F8F4] p-7">
                <p className="mb-1 text-[12px] font-medium uppercase tracking-wider text-sage">12-weken body reset</p>
                <p className="mb-1 text-[1.1rem] font-semibold text-navy">Geïnteresseerd in een 12-weken programma?</p>
                <p className="mb-3 font-voice text-[1.75rem] font-medium text-navy">Meer lezen</p>
                <p className="mb-6 flex-1 text-[14px] leading-relaxed text-inkSoft">
                  Lees meer over onze uitgebreide body reset.
                </p>
                <Button href={t.hero.programCard.href} surface="light" variant="secondary" fullWidth>
                  {t.hero.programCard.cta}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.details.eyebrow}</p>
              <h2 className="mb-4 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.details.title}</h2>
              <p className="text-[15.5px] leading-relaxed text-inkSoft">{t.details.subtitle}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {t.details.items.map((item, i) => (
                <div key={i} className="card-lift rounded-card border border-hairline bg-ivory p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage/15 text-[13px] font-semibold text-sage">
                    0{i + 1}
                  </div>
                  <h3 className="mb-3 text-[1rem] font-semibold text-navy">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-inkSoft">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative overflow-hidden rounded-section bg-[#F1F3F6] px-8 py-14 md:px-12">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.longTermCta.eyebrow}</p>
            <p className="mb-6 text-[16px] leading-relaxed text-inkSoft">{t.longTermCta.body}</p>
            <Button href={t.longTermCta.href} surface="light" variant="primary">
              {t.longTermCta.cta}
            </Button>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div>
                <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.whatIsIt.eyebrow}</p>
                <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.whatIsIt.title}</h2>
                <p className="mb-6 text-[15.5px] leading-relaxed text-inkSoft">{t.whatIsIt.body}</p>
              </div>
              <ul className="space-y-3 pt-8 md:pt-0">
                {t.whatIsIt.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
                    <span className="text-[15px] text-inkSoft">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.for.eyebrow}</p>
            <h2 className="mb-7 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.for.title}</h2>
            <ul className="space-y-4">
              {t.for.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
                  <span className="text-[15.5px] text-inkSoft">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

    </PageLayout>
  );
}
