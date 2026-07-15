import { icons } from "@/lib/icons";
import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type PromiseContent = DeepLoosen<typeof home.promise>;

export function Promise({ content }: { content?: PromiseContent }) {
  const t = content ?? home.promise;

  return (
    <section className="relative overflow-hidden rounded-section bg-navy px-6 py-14 md:px-12">
      {/* Copper glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-copper/15 blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mb-5 inline-flex h-24 w-24 items-center justify-center rounded-full bg-copper/20">
          <icons.shield size={48} className="text-copper" />
        </div>
        <p className="mb-3 text-[22px] font-medium uppercase tracking-[0.09em] text-copper">
          {t.badge}
        </p>
        <p className="mb-4 text-[16px] leading-relaxed text-ivory">{t.body}</p>
        <p className="text-[13.5px] leading-relaxed text-ivory/60">{t.sub}</p>
      </div>
    </section>
  );
}
