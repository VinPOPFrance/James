import Image from "next/image";
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
    <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-[#87986A] to-[#728153] px-6 py-20 md:px-14">
      {/* Glow circles */}
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
        <div className="overflow-hidden rounded-[18px] border border-ivory/25 bg-ivory/10 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.55)]">
          <Image
            src="/media/group-1.jpg"
            alt="Group training session"
            width={1200}
            height={900}
            className="h-[260px] w-full object-cover md:h-[360px]"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

        <div className="text-center md:text-left">
          <span className="mb-4 inline-block rounded-full bg-copper px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-navy">
            {t.badge}
          </span>
          <h2 className="mb-4 font-voice text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium leading-snug text-ivory">
            {t.title}
          </h2>
          <p className="mb-2 text-[16px] text-ivory/90">{t.body}</p>
          <p className="mb-8 text-[15px] text-ivory/75">{t.detail}</p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button href={href} surface="dark" variant="primary">
              {t.cta} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
