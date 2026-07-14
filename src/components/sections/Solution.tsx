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
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-full w-full"
                  >
                    <path d="M50,30 C50,22 45,15 35,15 C22,15 15,30 15,50 C15,70 28,75 38,75 C45,75 50,68 50,60" />
                    <path d="M50,30 C50,22 55,15 65,15 C78,15 85,30 85,50 C85,70 72,75 62,75 C55,75 50,68 50,60" />
                    <path d="M50,15 L50,45" />
                    <path d="M50,35 C44,38 40,42 38,48" />
                    <path d="M50,38 C56,41 60,45 62,51" />
                    <path d="M44,43 C38,44 34,48 32,54" />
                    <path d="M56,45 C62,47 66,51 68,57" />
                  </svg>
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
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-full w-full"
                  >
                    <path d="M58,15 C54,15 50,18 52,24 C53,26 55,27 54,29 C52,31 48,30 46,33 C45,35 48,38 46,41" />
                    <path d="M46,41 C43,47 45,55 49,63 C52,70 54,78 48,85" />
                    <path d="M45,43 C50,43 53,46 54,51 C55,55 52,59 50,62 C48,65 52,72 53,75" />
                    <path d="M52,31 C56,33 58,38 56,44 C54,49 51,53 49,57" />
                  </svg>
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
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-full w-full"
                  >
                    <path d="M20,30 L80,70 M20,70 L80,30 M50,15 L50,85 M15,50 L85,50" opacity="0.25" />
                    <path d="M30,30 C40,40 60,40 70,30 C60,50 60,70 70,70 C50,60 30,60 30,70 C40,50 40,30 30,30 Z" />
                    <path d="M40,40 C45,45 55,45 60,40 C55,50 55,60 60,60 C50,55 40,55 40,60 C45,50 45,40 40,40 Z" />
                    <path d="M78,25 C72,25 65,30 63,36 C62,39 65,42 68,40 C72,38 75,34 81,35" strokeWidth="1.5" />
                    <path d="M74,18 C69,20 62,25 60,32" strokeWidth="1.5" />
                  </svg>
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
