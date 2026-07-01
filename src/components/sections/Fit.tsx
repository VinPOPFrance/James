import { icons } from "@/lib/icons";
import { home } from "@/config/content.en";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import type { DeepLoosen } from "@/types/content";

type FitContent = DeepLoosen<typeof home.fit>;

export function Fit({ content }: { content?: FitContent }) {
  const t = content ?? home.fit;

  return (
    <section className="rounded-section border border-hairline bg-ivory px-6 py-14 md:px-12">
      <RevealGroup className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {/* For you */}
        <RevealItem className="card-lift rounded-card border border-sage/40 bg-white p-7">
          <h3 className="mb-5 text-[1rem] font-semibold text-navy">{t.forYou.title}</h3>
          <ul className="space-y-3">
            {t.forYou.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
                <span className="text-[15px] text-inkSoft">{item}</span>
              </li>
            ))}
          </ul>
        </RevealItem>

        {/* Not for you */}
        <RevealItem className="card-lift rounded-card border border-copper/30 bg-white p-7">
          <h3 className="mb-5 text-[1rem] font-semibold text-navy">{t.notForYou.title}</h3>
          <ul className="space-y-3">
            {t.notForYou.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <icons.minus size={16} className="mt-0.5 shrink-0 text-copper" />
                <span className="text-[15px] text-inkSoft">{item}</span>
              </li>
            ))}
          </ul>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
