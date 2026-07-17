import { Button } from "@/components/ui/Button";
import { home } from "@/config/content.en";
import { businessInfo } from "@/config/business-info";
import type { DeepLoosen } from "@/types/content";

type PlanContent = DeepLoosen<typeof home.plan>;

export function Plan({ content, ctaLabel }: { content?: PlanContent; ctaLabel?: string }) {
  const t = content ?? home.plan;

  return (
    <section className="rounded-section border border-hairline bg-ivory px-6 py-14 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
          {t.eyebrow}
        </p>
        <h2 className="mb-10 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
          {t.title}
        </h2>

        <div className="mb-10 grid gap-5 md:grid-cols-3">
          {t.steps.map((step) => (
            <div
              key={step.n}
              className="rounded-card border border-hairline bg-white p-7 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-sage/20 text-[15px] font-semibold text-sage">
                {step.n}
              </div>
              <h3 className="mb-2 text-[1.02rem] font-semibold text-navy">{step.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-inkSoft">{step.text}</p>
            </div>
          ))}
        </div>

        <Button
          href={businessInfo.bookingUrl}
          surface="light"
          variant="primary"
          external
          className="border-[#87986A] bg-[#87986A] text-ivory hover:bg-[#738258]"
        >
          {ctaLabel ?? home.finalCta.primary}
        </Button>
      </div>
    </section>
  );
}
