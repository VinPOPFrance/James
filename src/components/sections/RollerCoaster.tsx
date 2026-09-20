import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type RollerCoasterContent = DeepLoosen<typeof home.rollerCoaster>;

export function RollerCoaster({ content }: { content?: RollerCoasterContent }) {
  const t = content ?? home.rollerCoaster;

  return (
    <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-navy to-navy-light px-8 py-16 md:px-14 md:py-20">
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-5 font-voice text-[clamp(1.2rem,2.6vw,1.5rem)] leading-snug text-ivory/85">
          {t.body}
        </p>
        <p className="font-voice text-[clamp(1.6rem,3.6vw,2.3rem)] font-semibold leading-snug text-[#ffee8c]">
          {t.question}
        </p>
      </div>
    </section>
  );
}
