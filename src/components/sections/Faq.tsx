"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { home } from "@/config/content.en";

export function Faq() {
  const t = home.faq;
  const [open, setOpen] = useState(0);

  return (
    <section className="rounded-section border border-hairline bg-ivory px-6 py-14 md:px-12">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
          {t.eyebrow}
        </p>
        <h2 className="mb-8 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
          {t.title}
        </h2>

        <div className="divide-y divide-hairline">
          {t.items.map((item, i) => (
            <div key={i}>
              <button
                className="flex w-full items-center justify-between py-5 text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="pr-4 text-[15px] font-medium text-navy">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-[14.5px] leading-relaxed text-inkSoft">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
