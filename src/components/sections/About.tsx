import { Button } from "@/components/ui/Button";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { home } from "@/config/content.en";
import { businessInfo } from "@/config/business-info";

export function About() {
  const t = home.about;

  return (
    <section className="rounded-section border border-hairline bg-white px-6 py-14 md:px-12">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <MediaSlot name="jamesPortrait" className="w-full" />

        <div>
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
            {t.eyebrow}
          </p>
          <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
            {t.title}
          </h2>
          <div className="mb-7 space-y-4">
            {t.body.map((para, i) => (
              <p key={i} className="text-[15.5px] leading-relaxed text-inkSoft">
                {para}
              </p>
            ))}
          </div>
          <Button href={businessInfo.bookingUrl} surface="light" variant="primary" external>
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
