import { icons } from "@/lib/icons";
import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type IncludedContent = DeepLoosen<typeof home.included>;

export function Included({ content }: { content?: IncludedContent }) {
  const t = content ?? home.included;

  return (
    <section className="rounded-section border border-hairline bg-white px-6 py-14 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
          {t.eyebrow}
        </p>
        <h2 className="mb-8 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
          {t.title}
        </h2>

        <div className="mb-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {t.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
              <span className="text-[15px] text-inkSoft">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 rounded-card border border-sage/30 bg-[#F4F6F2] p-5">
          <icons.leaf size={18} className="mt-0.5 shrink-0 text-sage" />
          <p className="text-[14.5px] leading-relaxed text-inkSoft">{t.effort}</p>
        </div>
      </div>
    </section>
  );
}
