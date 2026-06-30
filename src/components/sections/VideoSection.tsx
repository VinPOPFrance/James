import { Button } from "@/components/ui/Button";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { home } from "@/config/content.en";
import { businessInfo } from "@/config/business-info";
import type { DeepLoosen } from "@/types/content";

type VideoContent = DeepLoosen<typeof home.video>;

export function VideoSection({ content }: { content?: VideoContent }) {
  const t = content ?? home.video;

  return (
    <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-navy to-navy-light px-6 py-16 md:px-14">
      {/* Soft glow circles */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sage/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-copper/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
          {t.eyebrow}
        </p>
        <h2 className="mb-3 font-voice text-[clamp(1.5rem,3vw,2rem)] font-medium text-ivory">
          {t.title}
        </h2>
        <p className="mb-8 max-w-lg text-[15px] leading-relaxed text-ivory/70">{t.body}</p>

        <MediaSlot name="presentationVideo" className="mb-8 w-full" />

        <Button href={businessInfo.bookingUrl} surface="dark" variant="primary" external>
          {t.cta}
        </Button>
      </div>
    </section>
  );
}
