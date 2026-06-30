import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
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
        <PageHero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          body={t.hero.body}
          ctaPrimary={{ label: t.hero.ctaPrimary, href: businessInfo.bookingUrl, external: true }}
          ctaSecondary={{ label: t.hero.ctaSecondary, href: businessInfo.bookingUrl, external: true }}
        />
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
        <section className="rounded-section bg-[#F1F3F6] px-8 py-14 md:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.tiers.eyebrow}</p>
            <h2 className="mb-8 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.tiers.title}</h2>
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              {t.tiers.items.map((tier, i) => (
                <div key={i} className={`rounded-card p-7 ${tier.dark ? "bg-navy text-ivory" : "border border-hairline bg-white"}`}>
                  <p className={`mb-1 text-[12px] font-medium uppercase tracking-wider ${tier.dark ? "text-copper" : "text-muted"}`}>{tier.sub}</p>
                  <p className={`mb-1 text-[1.1rem] font-semibold ${tier.dark ? "text-ivory" : "text-navy"}`}>{tier.dur}</p>
                  <p className={`mb-3 font-voice text-[2rem] font-medium ${tier.dark ? "text-copper" : "text-navy"}`}>{tier.price}</p>
                  <p className={`text-[14px] leading-relaxed ${tier.dark ? "text-ivory/70" : "text-inkSoft"}`}>{tier.body}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] leading-relaxed text-muted">{t.tiers.note}</p>
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

      <Reveal>
        <section className="relative overflow-hidden rounded-section bg-navy px-8 py-14 md:px-12">
          <div className="pointer-events-none absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-copper/15 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-copper/20">
              <icons.shield size={28} className="text-copper" />
            </div>
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.promise.badge}</p>
            <p className="text-[16px] leading-relaxed text-ivory">{t.promise.body}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-navy to-navy-light px-8 py-20 md:px-14">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-voice text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium leading-snug text-ivory">{t.finalCta.title}</h2>
            <p className="mb-8 text-[16px] text-ivory/70">{t.finalCta.body}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={businessInfo.bookingUrl} surface="dark" variant="primary" external>{t.finalCta.primary}</Button>
              <Button href={businessInfo.bookingUrl} surface="dark" variant="secondary" external>{t.finalCta.secondary}</Button>
            </div>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
