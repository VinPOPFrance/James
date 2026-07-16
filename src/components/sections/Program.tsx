import Image from "next/image";
import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type ProgramContent = DeepLoosen<typeof home.program>;

export function Program({ content }: { content?: ProgramContent }) {
  const t = content ?? home.program;

  return (
    <section className="rounded-section border border-hairline bg-white px-6 py-14 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
          <div className="overflow-hidden rounded-[18px] border-0 outline-none ring-0 shadow-none">
            <Image
              src="/media/client-posture.jpg"
              alt="Posture client"
              width={1200}
              height={900}
              className="h-auto w-full rounded-[18px] border-0 object-cover outline-none ring-0 shadow-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

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
      </div>
    </section>
  );
}
