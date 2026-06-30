import { icons } from "@/lib/icons";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { home } from "@/config/content.en";

export function Solution() {
  const t = home.solution;

  return (
    <section className="rounded-section border border-hairline bg-white px-6 py-14 md:px-12">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <MediaSlot name="movementClip" className="w-full" />

        <div>
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
            {t.eyebrow}
          </p>
          <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
            {t.title}
          </h2>
          <p className="mb-7 text-[15.5px] leading-relaxed text-inkSoft">{t.body}</p>

          <ul className="space-y-3">
            {t.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-inkSoft">
                <icons.check size={16} className="mt-0.5 shrink-0 text-sage" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
