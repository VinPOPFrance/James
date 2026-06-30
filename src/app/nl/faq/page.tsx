"use client";

import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { faqPageNl } from "@/config/content.faq.nl";
import { businessInfo } from "@/config/business-info";

export default function FaqNlPage() {
  const t = faqPageNl;
  const [open, setOpen] = useState<string | null>(null);

  return (
    <PageLayout locale="nl">
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-16 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-5 font-voice text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-snug text-navy">
              {t.hero.title}
            </h1>
            <p className="text-[16px] leading-relaxed text-inkSoft">{t.hero.body}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-2xl space-y-10">
            {t.categories.map((cat) => (
              <div key={cat.title}>
                <h2 className="mb-5 font-voice text-[1.2rem] font-medium text-navy">{cat.title}</h2>
                <div className="divide-y divide-hairline rounded-card border border-hairline">
                  {cat.items.map((item) => {
                    const id = `${cat.title}::${item.q}`;
                    const isOpen = open === id;
                    return (
                      <div key={item.q}>
                        <button
                          className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                          onClick={() => setOpen(isOpen ? null : id)}
                          aria-expanded={isOpen}
                        >
                          <span className="text-[15px] font-medium text-navy">{item.q}</span>
                          <span className="shrink-0 text-[20px] font-light text-muted">{isOpen ? "−" : "+"}</span>
                        </button>
                        {isOpen && (
                          <div className="border-t border-hairline bg-ivory px-6 pb-5 pt-4">
                            <p className="text-[14.5px] leading-relaxed text-inkSoft">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
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
            <Button href={businessInfo.bookingUrl} surface="dark" variant="primary" external>{t.finalCta.primary}</Button>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
