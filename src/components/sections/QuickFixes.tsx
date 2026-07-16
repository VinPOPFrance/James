import Image from "next/image";
import { icons } from "@/lib/icons";
import { home } from "@/config/content.en";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import type { DeepLoosen } from "@/types/content";

type QuickFixesContent = DeepLoosen<typeof home.quickFixes>;

export function QuickFixes({ content }: { content?: QuickFixesContent }) {
  const t = content ?? home.quickFixes;

  return (
    <section className="rounded-section bg-[#F4F6F2] px-6 py-14 md:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-sage">
          {t.eyebrow}
        </p>
        <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
          {t.title}
        </h2>
        <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[14px] md:mx-0 md:max-w-none">
            <Image
              src="/media/eva-1.jpg"
              alt="Eva"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 50vw"
            />
          </div>

          <RevealGroup className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 md:content-center md:gap-6">
          {/* Quick-fix loop */}
          <RevealItem className="card-lift rounded-card border border-hairline bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <icons.refresh size={16} className="text-muted" />
              <span className="text-[13px] font-medium text-muted">{t.loop.label}</span>
            </div>
            <p className="text-[15px] text-inkSoft">{t.loop.text}</p>
          </RevealItem>

          {/* Reset path */}
          <RevealItem className="card-lift rounded-card border border-sage/30 bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <icons.arrow size={16} className="text-sage" />
              <span className="text-[13px] font-medium text-sage">{t.reset.label}</span>
            </div>
            <p className="text-[15px] text-inkSoft">{t.reset.text}</p>
          </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
