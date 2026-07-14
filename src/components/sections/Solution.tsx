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

          <div className="mt-8 rounded-2xl bg-[#f7f5f0] p-5 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <article className="flex flex-col items-center rounded-lg border border-hairline p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-sm">
                <div className="mb-6 h-[120px] w-[120px] text-[#2d2d2d]">
                  <img src="/media/lungs.svg" alt="Breathing pillar illustration" className="h-full w-full object-contain" />
                </div>
                <h3 className="mb-2 text-[1.25rem] font-semibold tracking-[0.05em] text-[#2d2d2d]">
                  BREATHING
                </h3>
                <span className="mb-5 text-[0.9rem] font-bold tracking-[0.1em] text-copper">PILLAR : 1</span>
                <p className="max-w-[280px] text-[0.95rem] leading-relaxed text-[#4a4a4a]">
                  Restoring diaphragmatic flow to decompress the spine and help the autonomic
                  nervous system.
                </p>
              </article>

              <article className="flex flex-col items-center rounded-lg border border-hairline p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-sm">
                <div className="mb-6 h-[120px] w-[120px] text-[#2d2d2d]">
                  <img src="/media/movement.svg" alt="Movement pillar illustration" className="h-full w-full object-contain" />
                </div>
                <h3 className="mb-2 text-[1.25rem] font-semibold tracking-[0.05em] text-[#2d2d2d]">
                  MOVEMENTS
                </h3>
                <span className="mb-5 text-[0.9rem] font-bold tracking-[0.1em] text-copper">PILLAR : 2</span>
                <p className="max-w-[280px] text-[0.95rem] leading-relaxed text-[#4a4a4a]">
                  Functional movement patterns to rebuild whole-body confidence and strength.
                </p>
              </article>

              <article className="flex flex-col items-center rounded-lg border border-hairline p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-sm">
                <div className="mb-6 h-[120px] w-[120px] text-[#2d2d2d]">
                  <img src="/media/fascia.svg" alt="Myofascial release pillar illustration" className="h-full w-full object-contain" />
                </div>
                <h3 className="mb-2 text-[1.25rem] font-semibold tracking-[0.05em] text-[#2d2d2d]">
                  MYOFASCIAL RELEASE
                </h3>
                <span className="mb-5 text-[0.9rem] font-bold tracking-[0.1em] text-copper">PILLAR : 3</span>
                <p className="max-w-[280px] text-[0.95rem] leading-relaxed text-[#4a4a4a]">
                  Targeted therapy to eliminate restrictions and trigger point clusters.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
