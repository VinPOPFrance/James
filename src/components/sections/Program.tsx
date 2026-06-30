import { home } from "@/config/content.en";

export function Program() {
  const t = home.program;

  return (
    <section className="rounded-section border border-hairline bg-white px-6 py-14 md:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
          {t.eyebrow}
        </p>
        <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
          {t.title}
        </h2>
        <p className="mb-8 text-[15.5px] leading-relaxed text-inkSoft">{t.body}</p>

        <div className="inline-flex flex-col rounded-card border border-hairline bg-ivory p-7">
          <span className="mb-1 text-[13px] text-muted">{t.priceLabel}</span>
          <span className="font-voice text-[2.2rem] font-medium text-navy">{t.price}</span>
          <span className="text-[13px] text-muted">{t.priceSub}</span>
        </div>
      </div>
    </section>
  );
}
