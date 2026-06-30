import { icons } from "@/lib/icons";
import { home } from "@/config/content.en";
import type { IconName } from "@/lib/icons";

export function Problem() {
  const t = home.problem;

  return (
    <section className="rounded-section border border-hairline bg-white px-6 py-14 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
          {t.eyebrow}
        </p>
        <blockquote className="mb-12 font-voice text-[clamp(1.4rem,3vw,1.8rem)] font-medium leading-snug text-navy">
          {t.quote}
        </blockquote>
      </div>

      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
        {t.cards.map((card, i) => {
          const Icon = icons[card.icon as IconName];
          return (
            <div
              key={i}
              className="rounded-card border border-hairline bg-ivory p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage/15">
                <Icon size={20} className="text-sage" />
              </div>
              <p className="text-[15px] leading-relaxed text-inkSoft">{card.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
