import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type ProofBarContent = DeepLoosen<typeof home.proofBar>;

export function ProofBar({ content }: { content?: ProofBarContent }) {
  const stats = content ?? home.proofBar;

  return (
    <section className="rounded-section bg-navy px-6 py-8">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-y-6 md:grid-cols-4 md:divide-x md:divide-ivory/15">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <span className="font-voice text-[1.6rem] font-medium text-copper">{s.value}</span>
            <span className="mt-1 text-[13px] text-ivory/70">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
