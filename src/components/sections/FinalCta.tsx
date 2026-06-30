import { Button } from "@/components/ui/Button";
import { home } from "@/config/content.en";
import { businessInfo } from "@/config/business-info";
import type { DeepLoosen } from "@/types/content";

type FinalCtaContent = DeepLoosen<typeof home.finalCta>;

export function FinalCta({ content }: { content?: FinalCtaContent }) {
  const t = content ?? home.finalCta;

  return (
    <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-navy to-navy-light px-6 py-20 md:px-14">
      {/* Glow circles */}
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="mb-4 font-voice text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium leading-snug text-ivory">
          {t.title}
        </h2>
        <p className="mb-8 text-[16px] text-ivory/70">{t.body}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={businessInfo.bookingUrl} surface="dark" variant="primary" external>
            {t.primary}
          </Button>
          <Button href={businessInfo.bookingUrl} surface="dark" variant="secondary" external>
            {t.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
