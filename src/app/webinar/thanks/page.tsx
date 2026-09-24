import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import { businessInfo } from "@/config/business-info";

export const metadata: Metadata = {
  title: "You're booked — James Daime",
  description: "Your place on the free live webinar is confirmed.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/webinar/thanks`,
  },
};

export default function WebinarThanksPage() {
  return (
    <main className="min-h-screen bg-[#F7F2E5] text-[#2E2B24]">
      <div className="mx-auto max-w-2xl space-y-5 px-6 py-8 md:py-12">
        {/* Minimal identity mark — the one exit link is intentionally tiny and muted */}
        <div>
          <a
            href="/"
            className="mb-2 inline-block text-[12px] text-[#2E2B24]/40 transition-colors hover:text-[#2E2B24]/60"
          >
            ← Back to jamesdaime.com
          </a>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#25412F]/70">
            James Daime
          </p>
        </div>

        {/* HERO — open, on the cream backdrop, no card */}
        <section className="px-1 pb-4 pt-4 text-center md:pb-8 md:pt-6">
          <span
            aria-hidden
            className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25412F]/10 text-[26px] text-[#25412F]"
          >
            ✓
          </span>
          <h1 className="mb-6 font-voice text-[clamp(1.9rem,5.4vw,2.7rem)] font-medium leading-[1.15] text-[#1B3122]">
            You&apos;re booked.
          </h1>
          <p className="mx-auto max-w-lg text-[16.5px] leading-relaxed text-[#4A4536]">
            Your place on the webinar is confirmed.
          </p>
        </section>

        {/* DETAILS — white card, like the rest of the site */}
        <section className="rounded-section border border-hairline bg-white px-6 py-10 text-center md:px-10 md:py-12">
          <div className="mx-auto max-w-md space-y-5 text-[16px] leading-relaxed text-inkSoft">
            <p>
              Your Google Meet link is on its way to your inbox right now.
            </p>
            <p>
              If it hasn&apos;t arrived within a few minutes, check your spam
              folder — and then{" "}
              <a
                href={`mailto:${businessInfo.email}`}
                className="text-[#25412F] underline decoration-[#25412F]/40 underline-offset-2 hover:decoration-[#25412F]"
              >
                email me
              </a>
              .
            </p>
          </div>
        </section>

        <footer className="pb-4 pt-2">
          <p className="text-center text-[12.5px] text-[#4A4536]/60">
            James Daime · Rotterdam ·{" "}
            <a href={`mailto:${businessInfo.email}`} className="underline decoration-[#4A4536]/30 underline-offset-2">
              {businessInfo.email}
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
