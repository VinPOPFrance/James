import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { contact } from "@/config/content.contact.en";

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
};

export default function ContactPage() {
  const t = contact;

  return (
    <PageLayout>
      <Reveal>
        <PageHero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          body={t.hero.body}
          ctaPrimary={{ label: "Book a free discovery call", href: "/book" }}
        />
      </Reveal>

      {/* Options */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-5 md:grid-cols-3">
              {t.options.map((opt, i) => (
                <div
                  key={i}
                  className={`rounded-card p-7 ${opt.primary ? "border-2 border-navy bg-ivory" : "border border-hairline bg-white"}`}
                >
                  {opt.primary && (
                    <span className="mb-3 inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-medium text-ivory">
                      Recommended first step
                    </span>
                  )}
                  <p className={`mb-1 text-[12px] font-medium uppercase tracking-wider ${opt.primary ? "text-copper" : "text-muted"}`}>
                    {opt.sub}
                  </p>
                  <h3 className="mb-3 text-[1.05rem] font-semibold text-navy">{opt.title}</h3>
                  <p className="mb-6 text-[14.5px] leading-relaxed text-inkSoft">{opt.body}</p>
                  <Button
                    href={opt.href}
                    surface="light"
                    variant={opt.primary ? "primary" : "secondary"}
                    fullWidth
                  >
                    {opt.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Studio info */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-12 md:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.info.eyebrow}</p>
            <dl className="space-y-3">
              {[
                { label: "Location", value: t.info.location },
                { label: "Languages", value: t.info.languages },
                { label: "Response time", value: t.info.response },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                  <dt className="w-32 shrink-0 text-[13px] font-medium text-muted">{label}</dt>
                  <dd className="text-[15px] text-inkSoft">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[12.5px] leading-relaxed text-muted">{t.info.disclaimer}</p>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
