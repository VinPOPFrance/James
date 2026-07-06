import { icons } from "@/lib/icons";
import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type SolutionContent = DeepLoosen<typeof home.solution>;

export function Solution({ content }: { content?: SolutionContent }) {
  const t = content ?? home.solution;

  return (
    <section className="rounded-section border border-hairline bg-white px-6 py-14 md:px-12">
      <div className="mx-auto max-w-4xl">
        <div>
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
            {t.eyebrow}
          </p>
          <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
            {t.title}
          </h2>
          <p className="mb-7 text-[15.5px] leading-relaxed text-inkSoft">{t.body}</p>

          <ul className="space-y-3">
            {t.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-inkSoft">
                <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
