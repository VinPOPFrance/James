import { home } from "@/config/content.en";
import { media } from "@/config/media.config";
import type { MediaKey } from "@/config/media.config";

function Avatar({ mediaKey, name }: { mediaKey: MediaKey; name: string }) {
  const item = media[mediaKey];
  const initials = name
    .split(",")[0]
    .trim()
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  if (!item.src) {
    return (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-[13px] font-semibold text-navy">
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.src}
      alt={item.alt}
      className="h-11 w-11 shrink-0 rounded-full object-cover"
    />
  );
}

export function Testimonials() {
  const t = home.testimonials;

  return (
    <section className="rounded-section border border-hairline bg-white px-6 py-14 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
          {t.eyebrow}
        </p>
        <div className="mb-2 flex items-end justify-between">
          <h2 className="font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
            {t.title}
          </h2>
          <span className="hidden text-[12.5px] text-muted md:block">{t.badge}</span>
        </div>

        {/* Placeholder notice */}
        <p className="mb-8 rounded-md border border-copper/30 bg-copper/5 px-4 py-2.5 text-[12.5px] text-copper">
          ⚠ {t.note}
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {t.items.map((item, i) => (
            <div key={i} className="rounded-card border border-hairline bg-ivory p-6">
              <span className="mb-3 inline-block rounded-full border border-hairline bg-white px-3 py-1 text-[11.5px] text-muted">
                {item.tag}
              </span>
              <p className="mb-5 text-[15px] leading-relaxed text-inkSoft">&ldquo;{item.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Avatar mediaKey={item.media as MediaKey} name={item.name} />
                <div>
                  <p className="text-[14px] font-medium text-navy">{item.name}</p>
                  <p className="text-[12.5px] text-muted">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
