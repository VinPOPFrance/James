"use client";

import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/config/content.en";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import type { DeepLoosen } from "@/types/content";

type PhasesContent = DeepLoosen<typeof home.phases>;

const phaseColor: Record<string, string> = {
  sage: "bg-sage text-white",
  copper: "bg-copper text-white",
  navy: "bg-navy text-ivory",
};

export function Phases({ content }: { content?: PhasesContent }) {
  const t = content ?? home.phases;
  const reduce = useReducedMotion();

  return (
    <section className="rounded-section border border-hairline bg-ivory px-6 py-14 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
          {t.eyebrow}
        </p>
        <h2 className="mb-12 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
          {t.title}
        </h2>

        <RevealGroup className="relative grid gap-6 md:grid-cols-3">
          {/* Connecting line (desktop only) — reveals left-to-right on scroll */}
          <motion.div
            className="pointer-events-none absolute left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] top-5 hidden h-[2px] origin-left bg-gradient-to-r from-sage via-copper to-navy md:block"
            initial={reduce ? undefined : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {t.items.map((phase) => (
            <RevealItem
              key={phase.n}
              className="card-lift relative rounded-card border border-hairline bg-white p-7 text-left"
            >
              <div
                className={`relative z-10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-semibold ${phaseColor[phase.color]}`}
              >
                {phase.n}
              </div>
              <p className="mb-1 text-[12px] font-medium text-muted">{phase.weeks}</p>
              <h3 className="mb-2 text-[1rem] font-semibold text-navy">{phase.title}</h3>
              <p className="text-[14px] leading-relaxed text-inkSoft">{phase.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
