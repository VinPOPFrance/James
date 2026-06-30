import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { icons } from "@/lib/icons";
import { workshops } from "@/config/content.workshops.en";

export const metadata: Metadata = {
  title: workshops.meta.title,
  description: workshops.meta.description,
};

export default function WorkshopsPage() {
  const t = workshops;

  return (
    <PageLayout>
      <Reveal>
        <PageHero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          body={t.hero.body}
          ctaPrimary={{ label: t.hero.ctaPrimary, href: "/contact" }}
        />
      </Reveal>

      {/* What it covers */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl grid gap-10 md:grid-cols-2 items-start">
            <div>
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.what.eyebrow}</p>
              <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.what.title}</h2>
              <p className="text-[15.5px] leading-relaxed text-inkSoft">{t.what.body}</p>
            </div>
            <ul className="space-y-3 pt-8 md:pt-0">
              {t.what.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
                  <span className="text-[15px] text-inkSoft">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      {/* Formats */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.formats.eyebrow}</p>
            <h2 className="mb-8 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.formats.title}</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {t.formats.items.map((item, i) => (
                <div key={i} className="rounded-card border border-hairline bg-white p-7">
                  <p className="mb-1 text-[12px] font-medium uppercase tracking-wider text-copper">{item.dur}</p>
                  <h3 className="mb-3 text-[1.02rem] font-semibold text-navy">{item.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-inkSoft">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13.5px] leading-relaxed text-muted">{t.note}</p>
          </div>
        </section>
      </Reveal>

      {/* Final CTA */}
      <Reveal>
        <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-navy to-navy-light px-8 py-20 md:px-14">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-voice text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium leading-snug text-ivory">{t.finalCta.title}</h2>
            <p className="mb-8 text-[16px] text-ivory/70">{t.finalCta.body}</p>
            <Button href="/contact" surface="dark" variant="primary">{t.finalCta.primary}</Button>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
