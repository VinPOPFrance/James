"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type FaqContent = DeepLoosen<typeof home.faq>;

export function Faq({ content }: { content?: FaqContent }) {
  const t = content ?? home.faq;
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

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
          {t.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-[15px] font-medium text-navy transition-colors group-hover:text-copper">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted transition-transform duration-300 group-hover:text-copper ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? undefined : { height: 0, opacity: 0 }}
                      animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[14.5px] leading-relaxed text-inkSoft">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
