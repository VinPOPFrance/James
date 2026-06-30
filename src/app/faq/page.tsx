"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { faqPage } from "@/config/content.faq.en";

export default function FaqPage() {
  const t = faqPage;
  const [open, setOpen] = useState<string | null>("0-0");

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <PageLayout>
      <Reveal>
        <PageHero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          body={t.hero.body}
        />
      </Reveal>

      {t.categories.map((cat, ci) => (
        <Reveal key={ci}>
          <section className="rounded-section border border-hairline bg-ivory px-8 py-12 md:px-12">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-6 text-[1rem] font-semibold uppercase tracking-wider text-navy">{cat.title}</h2>
              <div className="divide-y divide-hairline">
                {cat.items.map((item, qi) => {
                  const id = `${ci}-${qi}`;
                  return (
                    <div key={qi}>
                      <button
                        className="flex w-full items-center justify-between py-5 text-left"
                        onClick={() => toggle(id)}
                        aria-expanded={open === id}
                      >
                        <span className="pr-4 text-[15px] font-medium text-navy">{item.q}</span>
                        <ChevronDown
                          size={18}
                          className={`shrink-0 text-muted transition-transform duration-200 ${open === id ? "rotate-180" : ""}`}
                        />
                      </button>
                      {open === id && (
                        <p className="pb-5 text-[14.5px] leading-relaxed text-inkSoft">{item.a}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </Reveal>
      ))}

      <Reveal>
        <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-navy to-navy-light px-8 py-20 md:px-14">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-voice text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium leading-snug text-ivory">{t.finalCta.title}</h2>
            <p className="mb-8 text-[16px] text-ivory/70">{t.finalCta.body}</p>
            <Button href="/book" surface="dark" variant="primary">{t.finalCta.primary}</Button>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
