"use client";

/**
 * REFERENCE SECTION — Hero
 * Shows the exact pattern Claude Code should follow for every other section:
 *  - copy comes from content.en.ts (never hardcoded)
 *  - media comes from <MediaSlot>
 *  - CTAs use <Button surface=...> (here: light)
 *  - wrapped in <Reveal> at the page level, not here
 * Build the remaining 19 sections in this style.
 */
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { home } from "@/config/content.en";
import { businessInfo } from "@/config/business-info";
import type { DeepLoosen } from "@/types/content";

type HeroContent = DeepLoosen<typeof home.hero>;

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero({ content, ctaSecondaryHref = "/fascia-reset-session" }: { content?: HeroContent; ctaSecondaryHref?: string }) {
  const t = content ?? home.hero;
  const reduce = useReducedMotion();
  const highlightTerms = ["trigger points", "myofascial release"];
  const highlightedSubParts = t.sub.split(new RegExp(`(${highlightTerms.join("|")})`, "gi"));

  const fromLeft = reduce
    ? {}
    : { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, ease: EASE } };
  const fromRight = reduce
    ? {}
    : { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, ease: EASE, delay: 0.1 } };
  const fadeBadge = reduce
    ? {}
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: EASE } };

  return (
    <section className="grid overflow-hidden rounded-section border border-hairline bg-ivory md:grid-cols-[1.05fr_0.95fr]">
      <div className="flex flex-col justify-center p-8 md:p-12">
        <motion.span
          {...fadeBadge}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-white px-3.5 py-1.5 text-[13px] text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          {t.badge}
        </motion.span>

        <motion.div {...fromLeft}>
          <h1 className="mb-4 font-voice text-[clamp(2rem,4vw,2.6rem)] font-medium leading-[1.11] text-navy">
            {t.h1}
          </h1>

          <p className="mb-7 max-w-prose text-[15.5px] leading-relaxed text-muted">
            {highlightedSubParts.map((part, i) =>
              highlightTerms.includes(part.toLowerCase()) ? <strong key={i}>{part}</strong> : part
            )}
          </p>

          <div className="mb-5 flex flex-wrap gap-3">
            <Button
              href={businessInfo.bookingUrl}
              surface="light"
              variant="primary"
              external
              className="border-[#87986A] bg-[#87986A] text-ivory hover:bg-[#738258]"
            >
              {t.ctaPrimary}
            </Button>
            <Button
              href={ctaSecondaryHref}
              surface="light"
              variant="secondary"
              className="border-[#87986A] text-[#5f6d4b] hover:bg-[#87986A] hover:text-ivory"
            >
              {t.ctaSecondary}
            </Button>
          </div>
          {/* Anchor for sticky mobile CTA: appears once this point scrolls out of view */}
          <div id="hero-cta-anchor" aria-hidden />

          <p className="flex items-center gap-3 text-[14px] text-muted">
            <span className="tracking-wide text-copper">★★★★★</span>
            {t.proof}
          </p>
        </motion.div>
      </div>

      <motion.div {...fromRight} className="relative min-h-[440px]">
        {/* Soft warm halo behind the image for depth */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(120% 90% at 70% 30%, rgba(143,166,138,0.18), transparent 60%)",
          }}
          aria-hidden
        />
        <MediaSlot name="heroImage" rounded={false} className="absolute inset-0 z-10 h-full w-full shadow-[0_20px_50px_-24px_rgba(31,42,60,0.35)]" />
        <span className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-xl bg-ivory/95 px-3 py-2 text-[12.5px] text-inkSoft shadow-lg">
          <span className="h-2 w-2 rounded-full bg-sage" />
          {t.overlay}
        </span>
      </motion.div>
    </section>
  );
}
