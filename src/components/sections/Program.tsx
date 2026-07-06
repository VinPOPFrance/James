import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type ProgramContent = DeepLoosen<typeof home.program>;

export function Program({ content }: { content?: ProgramContent }) {
  const t = content ?? home.program;

  return (
    <section className="rounded-section border border-hairline bg-white px-6 py-14 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div>
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
            {t.eyebrow}
          </p>
          <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
            {t.title}
          </h2>
          <p className="text-[15.5px] leading-relaxed text-inkSoft">{t.body}</p>
        </div>
      </div>
    </section>
  );
}
