import { Button } from "@/components/ui/Button";
import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type FasciaContent = DeepLoosen<typeof home.fascia>;

export function Fascia({ content, ctaHref = "/fascia-reset-session" }: { content?: FasciaContent; ctaHref?: string }) {
  const t = content ?? home.fascia;

  return (
    <section className="rounded-section bg-[#F1F3F6] px-6 py-14 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full border border-hairline bg-white px-4 py-1.5 text-[13px] text-muted">
          {t.badge}
        </span>
        <h2 className="mb-4 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
          {t.title}
        </h2>
        <p className="mb-8 text-[15.5px] leading-relaxed text-inkSoft">{t.body}</p>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {t.tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-card p-7 text-left ${
                tier.dark
                  ? "bg-navy text-ivory"
                  : "border border-hairline bg-white"
              }`}
            >
              <p
                className={`mb-1 text-[12px] font-medium uppercase tracking-wider ${
                  tier.dark ? "text-copper" : "text-muted"
                }`}
              >
                {tier.sub}
              </p>
              <p
                className={`mb-1 text-[1.1rem] font-semibold ${
                  tier.dark ? "text-ivory" : "text-navy"
                }`}
              >
                {tier.dur}
              </p>
              <p
                className={`font-voice text-[2rem] font-medium ${
                  tier.dark ? "text-copper" : "text-navy"
                }`}
              >
                {tier.price}
              </p>
            </div>
          ))}
        </div>

        <Button href={ctaHref} surface="light" variant="secondary">
          {t.cta}
        </Button>
      </div>
    </section>
  );
}
