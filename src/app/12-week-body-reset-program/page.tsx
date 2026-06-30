import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { icons } from "@/lib/icons";
import { program } from "@/config/content.program.en";
import { businessInfo } from "@/config/business-info";
import { media } from "@/config/media.config";
import type { MediaKey } from "@/config/media.config";

export const metadata: Metadata = {
  title: program.meta.title,
  description: program.meta.description,
};

const phaseColor: Record<string, string> = {
  sage: "bg-sage text-white",
  copper: "bg-copper text-white",
  navy: "bg-navy text-ivory",
};

function TestimonialAvatar({ mediaKey, name }: { mediaKey: MediaKey; name: string }) {
  const item = media[mediaKey];
  const initials = name.split(",")[0].trim().split(" ").map((w) => w[0]).join("").slice(0, 2);
  if (!item.src) {
    return (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-[13px] font-semibold text-navy">
        {initials}
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={item.src} alt={item.alt} className="h-11 w-11 shrink-0 rounded-full object-cover" />;
}

export default function ProgramPage() {
  const t = program;

  return (
    <PageLayout>
      <Reveal>
        <PageHero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          body={t.hero.body}
          ctaPrimary={{ label: t.hero.ctaPrimary, href: businessInfo.bookingUrl, external: true }}
          ctaSecondary={{ label: t.hero.ctaSecondary, href: "/fascia-reset-session" }}
        />
      </Reveal>

      {/* Intro */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.intro.eyebrow}</p>
            <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.intro.title}</h2>
            <p className="text-[15.5px] leading-relaxed text-inkSoft">{t.intro.body}</p>
          </div>
        </section>
      </Reveal>

      {/* Phases */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.phases.eyebrow}</p>
            <h2 className="mb-12 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.phases.title}</h2>
            <div className="relative grid gap-6 md:grid-cols-3">
              <div className="pointer-events-none absolute left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] top-5 hidden h-[2px] bg-gradient-to-r from-sage via-copper to-navy md:block" />
              {t.phases.items.map((phase) => (
                <div key={phase.n} className="relative rounded-card border border-hairline bg-white p-7 text-left">
                  <div className={`relative z-10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-semibold ${phaseColor[phase.color]}`}>
                    {phase.n}
                  </div>
                  <p className="mb-1 text-[12px] font-medium text-muted">{phase.weeks}</p>
                  <h3 className="mb-2 text-[1rem] font-semibold text-navy">{phase.title}</h3>
                  <p className="text-[14px] leading-relaxed text-inkSoft">{phase.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Included */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.included.eyebrow}</p>
            <h2 className="mb-8 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.included.title}</h2>
            <div className="mb-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {t.included.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
                  <span className="text-[15px] text-inkSoft">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 rounded-card border border-sage/30 bg-[#F4F6F2] p-5">
              <icons.leaf size={18} className="mt-0.5 shrink-0 text-sage" />
              <p className="text-[14.5px] leading-relaxed text-inkSoft">{t.included.effort}</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Pricing */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.pricing.eyebrow}</p>
            <h2 className="mb-6 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.pricing.title}</h2>
            <div className="mb-5 inline-flex flex-col rounded-card border border-hairline bg-white p-7">
              <span className="mb-1 text-[13px] text-muted">{t.pricing.priceLabel}</span>
              <span className="font-voice text-[2.4rem] font-medium text-navy">{t.pricing.price}</span>
              <span className="text-[13px] text-muted">{t.pricing.priceSub}</span>
            </div>
            <p className="text-[13.5px] leading-relaxed text-muted">{t.pricing.note}</p>
          </div>
        </section>
      </Reveal>

      {/* Fit */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-card border border-sage/40 bg-ivory p-7">
              <h3 className="mb-5 text-[1rem] font-semibold text-navy">{t.fit.forYou.title}</h3>
              <ul className="space-y-3">
                {t.fit.forYou.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
                    <span className="text-[15px] text-inkSoft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-copper/30 bg-ivory p-7">
              <h3 className="mb-5 text-[1rem] font-semibold text-navy">{t.fit.notForYou.title}</h3>
              <ul className="space-y-3">
                {t.fit.notForYou.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <icons.minus size={16} className="mt-0.5 shrink-0 text-copper" />
                    <span className="text-[15px] text-inkSoft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Promise */}
      <Reveal>
        <section className="relative overflow-hidden rounded-section bg-navy px-8 py-14 md:px-12">
          <div className="pointer-events-none absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-copper/15 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-copper/20">
              <icons.shield size={28} className="text-copper" />
            </div>
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.promise.badge}</p>
            <p className="mb-4 text-[16px] leading-relaxed text-ivory">{t.promise.body}</p>
            <p className="text-[13.5px] leading-relaxed text-ivory/60">{t.promise.sub}</p>
          </div>
        </section>
      </Reveal>

      {/* Testimonials */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.testimonials.eyebrow}</p>
            <h2 className="mb-2 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">{t.testimonials.title}</h2>
            <p className="mb-8 rounded-md border border-copper/30 bg-copper/5 px-4 py-2.5 text-[12.5px] text-copper">⚠ {t.testimonials.note}</p>
            <div className="grid gap-5 md:grid-cols-3">
              {t.testimonials.items.map((item, i) => (
                <div key={i} className="rounded-card border border-hairline bg-ivory p-6">
                  <span className="mb-3 inline-block rounded-full border border-hairline bg-white px-3 py-1 text-[11.5px] text-muted">{item.tag}</span>
                  <p className="mb-5 text-[15px] leading-relaxed text-inkSoft">&ldquo;{item.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <TestimonialAvatar mediaKey={item.media as MediaKey} name={item.name} />
                    <div>
                      <p className="text-[14px] font-medium text-navy">{item.name}</p>
                      <p className="text-[12.5px] text-muted">{item.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              <Button href="/faq" surface="dark" variant="secondary">{t.finalCta.secondary}</Button>
            </div>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
