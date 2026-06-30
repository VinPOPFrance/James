/**
 * REFERENCE SECTION — Hero
 * Shows the exact pattern Claude Code should follow for every other section:
 *  - copy comes from content.en.ts (never hardcoded)
 *  - media comes from <MediaSlot>
 *  - CTAs use <Button surface=...> (here: light)
 *  - wrapped in <Reveal> at the page level, not here
 * Build the remaining 19 sections in this style.
 */
import { Button } from "@/components/ui/Button";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { home } from "@/config/content.en";

export function Hero() {
  const t = home.hero;
  return (
    <section className="grid overflow-hidden rounded-section border border-hairline bg-ivory md:grid-cols-[1.05fr_0.95fr]">
      <div className="flex flex-col justify-center p-8 md:p-12">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-white px-3.5 py-1.5 text-[13px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          {t.badge}
        </span>

        <h1 className="mb-4 font-voice text-[clamp(2rem,4vw,2.6rem)] font-medium leading-[1.11] text-navy">
          {t.h1}
        </h1>

        <p className="mb-7 max-w-prose text-[15.5px] leading-relaxed text-muted">{t.sub}</p>

        <div className="mb-5 flex flex-wrap gap-3">
          <Button href="/book" surface="light" variant="primary">
            {t.ctaPrimary}
          </Button>
          <Button href="/fascia-reset-session" surface="light" variant="secondary">
            {t.ctaSecondary}
          </Button>
        </div>
        {/* Anchor for sticky mobile CTA: appears once this point scrolls out of view */}
        <div id="hero-cta-anchor" aria-hidden />

        <p className="flex items-center gap-3 text-[13px] text-muted">
          <span className="tracking-wide text-copper">★★★★★</span>
          {t.proof}
        </p>
      </div>

      <div className="relative min-h-[440px]">
        <MediaSlot name="heroImage" rounded={false} className="absolute inset-0 h-full w-full" />
        <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-ivory/95 px-3 py-2 text-[12.5px] text-inkSoft shadow-lg">
          <span className="h-2 w-2 rounded-full bg-sage" />
          {t.overlay}
        </span>
      </div>
    </section>
  );
}
