import { icons } from "@/lib/icons";
import { home } from "@/config/content.en";

export function QuickFixes() {
  const t = home.quickFixes;

  return (
    <section className="rounded-section bg-[#F4F6F2] px-6 py-14 md:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-sage">
          {t.eyebrow}
        </p>
        <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
          {t.title}
        </h2>
        <p className="mb-10 text-[15.5px] leading-relaxed text-inkSoft">{t.body}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Quick-fix loop */}
          <div className="rounded-card border border-hairline bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <icons.refresh size={16} className="text-muted" />
              <span className="text-[13px] font-medium text-muted">{t.loop.label}</span>
            </div>
            <p className="text-[15px] text-inkSoft">{t.loop.text}</p>
          </div>

          {/* Reset path */}
          <div className="rounded-card border border-sage/30 bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <icons.arrow size={16} className="text-sage" />
              <span className="text-[13px] font-medium text-sage">{t.reset.label}</span>
            </div>
            <p className="text-[15px] text-inkSoft">{t.reset.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
