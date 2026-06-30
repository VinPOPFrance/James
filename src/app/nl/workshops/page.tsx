import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { icons } from "@/lib/icons";
import { workshopsNl } from "@/config/content.workshops.nl";
import { businessInfo } from "@/config/business-info";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: workshopsNl.meta.title,
  description: workshopsNl.meta.description,
  alternates: {
    canonical: `${siteConfig.siteUrl}/nl/workshops`,
    languages: {
      en: `${siteConfig.siteUrl}/workshops`,
      nl: `${siteConfig.siteUrl}/nl/workshops`,
      "x-default": `${siteConfig.siteUrl}/workshops`,
    },
  },
};

export default function WorkshopsNlPage() {
  const t = workshopsNl;

  return (
    <PageLayout locale="nl">
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-16 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.hero.eyebrow}</p>
            <h1 className="mb-5 font-voice text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-snug text-navy">{t.hero.title}</h1>
            <p className="mb-8 text-[16px] leading-relaxed text-inkSoft">{t.hero.body}</p>
            <Button href={`mailto:${businessInfo.email}`} surface="light" variant="primary">{t.hero.ctaPrimary}</Button>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div>
                <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.what.eyebrow}</p>
                <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.what.title}</h2>
                <p className="text-[15.5px] leading-relaxed text-inkSoft">{t.what.body}</p>
              </div>
              <ul className="space-y-3">
                {t.what.points.map((point, i) => (
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
        <section className="rounded-section border border-hairline bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.formats.eyebrow}</p>
            <h2 className="mb-8 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.formats.title}</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {t.formats.items.map((format, i) => (
                <div key={i} className="rounded-card border border-hairline bg-white p-7">
                  <p className="mb-1 text-[12px] font-medium text-muted">{format.dur}</p>
                  <h3 className="mb-3 text-[1rem] font-semibold text-navy">{format.title}</h3>
                  <p className="text-[14px] leading-relaxed text-inkSoft">{format.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13px] text-muted">{t.note}</p>
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
            <Button href={`mailto:${businessInfo.email}`} surface="dark" variant="primary">{t.finalCta.primary}</Button>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
