import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { icons } from "@/lib/icons";
import { about } from "@/config/content.about.en";
import { businessInfo } from "@/config/business-info";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
};

export default function AboutPage() {
  const t = about;

  return (
    <PageLayout>
      <Reveal>
        <PageHero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          body={t.hero.body}
        />
      </Reveal>

      {/* Story + portrait */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <MediaSlot name="jamesPortrait" className="w-full" />
            <div>
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.story.eyebrow}</p>
              <h2 className="mb-6 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.story.title}</h2>
              <div className="space-y-4">
                {t.story.paragraphs.map((para, i) => (
                  <p key={i} className="text-[15.5px] leading-relaxed text-inkSoft">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Values */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.values.eyebrow}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {t.values.items.map((item, i) => (
                <div key={i} className="rounded-card border border-hairline bg-white p-7">
                  <h3 className="mb-2 text-[1.02rem] font-semibold text-navy">{item.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-inkSoft">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Credentials */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.credentials.eyebrow}</p>
            <ul className="mb-6 space-y-3">
              {t.credentials.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
                  <span className="text-[15px] text-inkSoft">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-muted">{t.credentials.note}</p>
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
