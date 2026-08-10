import { Button } from "@/components/ui/Button";
import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type WorkshopPromoContent = DeepLoosen<typeof home.workshopPromo.card>;

interface WorkshopPromoCardProps {
  content?: WorkshopPromoContent;
  href?: string;
}

export function WorkshopPromoCard({ content, href = "/pelvic-engine-reset" }: WorkshopPromoCardProps) {
  const t = content ?? home.workshopPromo.card;

  return (
    <section className="relative overflow-hidden rounded-section border border-ivory/25 bg-gradient-to-br from-[#87986A] to-[#728153] px-6 py-20 shadow-[0_28px_48px_-34px_rgba(15,23,42,0.65)] md:px-14">
      {/* Glow circles */}
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-start gap-5 rounded-[18px] border border-ivory/20 bg-ivory/10 p-6 backdrop-blur-[1px] md:flex-row md:items-center md:justify-between md:p-7">
        <div>
          <span className="mb-3 inline-block rounded-full bg-copper px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-navy shadow-[0_10px_20px_-12px_rgba(15,23,42,0.8)]">
            {t.badge}
          </span>
          <h2 className="mb-2 font-voice text-[clamp(1.25rem,2.4vw,1.6rem)] font-medium leading-snug text-ivory">
            {t.title}
          </h2>
          <p className="mb-1.5 text-[15.5px] leading-relaxed text-ivory/95">{t.body}</p>
          <p className="text-[14.5px] leading-relaxed text-ivory/85">{t.detail}</p>
        </div>

        <div className="inline-flex shrink-0">
          <Button
            href={href}
            surface="dark"
            variant="primary"
            className="shadow-[0_16px_30px_-18px_rgba(15,23,42,0.9)]"
          >
            {t.cta} →
          </Button>
        </div>
      </div>
    </section>
  );
}
