import Link from "next/link";
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
    <section className="rounded-section border border-copper/45 bg-[#fff8ef] px-6 py-10 shadow-[0_18px_38px_-26px_rgba(15,23,42,0.4)] md:px-12">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="mb-3 inline-block rounded-full bg-copper px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-navy">
            {t.badge}
          </span>
          <h2 className="mb-2 font-voice text-[clamp(1.25rem,2.4vw,1.55rem)] font-medium text-navy">
            {t.title}
          </h2>
          <p className="mb-1.5 text-[15.5px] leading-relaxed text-inkSoft">{t.body}</p>
          <p className="text-[14.5px] leading-relaxed text-inkSoft/85">{t.detail}</p>
        </div>

        <Link
          href={href}
          className="inline-flex shrink-0 items-center justify-center rounded-[11px] border border-navy bg-navy px-6 py-3.5 text-[15px] font-medium text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light"
        >
          {t.cta} →
        </Link>
      </div>
    </section>
  );
}
