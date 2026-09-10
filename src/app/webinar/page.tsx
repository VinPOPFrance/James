import type { Metadata } from "next";
import Image from "next/image";
import { MailerLiteWebinarForm } from "@/components/sections/MailerLiteWebinarForm";
import { siteConfig } from "@/config/site-config";
import { businessInfo } from "@/config/business-info";

// ---------------------------------------------------------------------------
// jamesdaime.com/webinar is a fixed, reusable URL — every ~6 weeks this same
// page gets updated in place for a new session rather than a new page being
// built. Edit these three fields for the new date and topic; the rest of
// the page (problem, what we'll cover, who it's for, closing objection)
// is prose written for the current topic and should be rewritten by hand
// below when the subject changes.
// ---------------------------------------------------------------------------
const WEBINAR = {
  topic:
    "why the ribs stop moving, what it costs you, and the small changes that give the breath back",
  dayDate: "[DAY, DATE]",
  time: "[TIME]",
};

export const metadata: Metadata = {
  title: "Free Live Webinar — James Daime",
  description: `A free 45-minute live session on ${WEBINAR.topic}.`,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/webinar`,
  },
};

const covers = [
  {
    text: "Why “breathe deeply” is the least useful instruction you’ve ever been given, and what to do instead",
  },
  {
    text: "The link between a stiff ribcage and the neck, jaw and lower back pain you thought were separate problems",
  },
  {
    text: "Two changes you can make the same evening, and how to tell within a week whether they’re working",
  },
  {
    text: "Live Q&A built into the 45 minutes — bring your question, it’s the best part",
  },
];

const FOREST = "#25412F";

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-[#E7DDBE] px-1.5 py-0.5 font-medium text-[#4E3F17]">
      {children}
    </span>
  );
}

export default function WebinarPage() {
  return (
    <main className="min-h-screen bg-[#F7F2E5] text-[#2E2B24]">
      {/* Minimal identity mark — no nav, nothing to click away to */}
      <div className="mx-auto max-w-2xl px-6 pt-8">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#25412F]/70">
          James Daime
        </p>
      </div>

      {/* 1. HERO */}
      <section className="mx-auto max-w-2xl px-6 pb-14 pt-8 text-center md:pb-20 md:pt-12">
        <div
          aria-hidden
          className="mx-auto mb-8 h-24 w-24 md:h-28 md:w-28"
          style={{
            WebkitMaskImage: "url(/media/lungs.svg)",
            maskImage: "url(/media/lungs.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            backgroundColor: FOREST,
            opacity: 0.85,
          }}
        />

        <h1 className="mb-6 font-voice text-[clamp(1.9rem,5.4vw,2.7rem)] font-medium leading-[1.15] text-[#1B3122]">
          You can&apos;t take a full breath. It isn&apos;t your lungs.
        </h1>

        <p className="mx-auto mb-9 max-w-lg text-[16.5px] leading-relaxed text-[#4A4536]">
          A free 45-minute live session — including questions — on{" "}
          {WEBINAR.topic}. Live on Google Meet,{" "}
          <Placeholder>{WEBINAR.dayDate}</Placeholder> at{" "}
          <Placeholder>{WEBINAR.time}</Placeholder> Amsterdam time.
        </p>

        <a
          href="#apply"
          className="inline-flex items-center justify-center rounded-full bg-[#25412F] px-8 py-4 text-[15.5px] font-medium text-[#F7F2E5] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B3122]"
        >
          Apply for your place
        </a>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 2. THE PROBLEM */}
      <section className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <div className="space-y-5 text-[16px] leading-relaxed text-[#4A4536]">
          <p>
            You&apos;ve noticed it in the quiet moments. A breath that stops
            halfway. Shoulders that climb toward your ears by mid-afternoon.
            That reflexive sigh you take a dozen times a day without
            deciding to.
          </p>
          <p>
            You&apos;ve probably been told to relax, to breathe deeply, to
            try an app. None of it held, because none of it touched the
            reason. A breath doesn&apos;t get stuck in the lungs. It gets
            stuck in a ribcage that has quietly stopped moving — and no
            amount of trying harder will talk it into moving again.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 3. WHAT WE'LL COVER */}
      <section className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <h2 className="mb-7 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#1B3122]">
          What we&apos;ll cover
        </h2>
        <ul className="space-y-5">
          {covers.map((item) => (
            <li key={item.text} className="flex gap-3 text-[16px] leading-relaxed text-[#4A4536]">
              <span aria-hidden className="mt-0.5 shrink-0 text-[#25412F]">
                ✓
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 4. WHO THIS IS FOR */}
      <section className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <h2 className="mb-6 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#1B3122]">
          Who this is for
        </h2>
        <div className="space-y-5 text-[16px] leading-relaxed text-[#4A4536]">
          <p>
            People who sit for a living and feel it. People who&apos;ve
            tried the obvious things and stayed stuck. Anyone who&apos;s
            been quietly holding tension for long enough that it now feels
            like their normal.
          </p>
          <p>
            Not for you if you want a passive hour of theory. You&apos;ll
            be moving, and you&apos;ll be asked to notice things. Forty-five
            minutes, start to finish, questions included — so it respects
            your evening.
          </p>
        </div>

        <a
          href="#apply"
          className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#25412F] underline decoration-[#25412F]/40 underline-offset-4 transition-colors hover:decoration-[#25412F]"
        >
          Apply for your place →
        </a>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 5. ABOUT JAMES */}
      <section className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Image
            src="/media/jamesPortrait.png"
            alt="James Daime"
            width={88}
            height={88}
            className="h-[88px] w-[88px] shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="mb-2 text-[13px] font-medium uppercase tracking-[0.1em] text-[#25412F]/70">
              Who&apos;s teaching
            </p>
            <p className="text-[15.5px] leading-relaxed text-[#4A4536]">
              James Daime is a movement therapist in Rotterdam, specialising
              in fascia, breathing and movement re-education. Over 10+ years
              and 121+ five-star reviews, he&apos;s worked with people who
              were told their tight ribs, their shallow breath, their
              afternoon shoulder-tension was simply &ldquo;who they
              are.&rdquo; It usually isn&apos;t — it&apos;s a pattern. And
              patterns can change, once you understand them.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 6. THE FORM */}
      <section id="apply" className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <h2 className="mb-4 text-center font-voice text-[clamp(1.5rem,3.4vw,2rem)] font-medium text-[#1B3122]">
          Tell me you&apos;re coming
        </h2>
        <p className="mx-auto mb-9 max-w-md text-center text-[15.5px] leading-relaxed text-[#4A4536]">
          Free, live, and recorded — so if something comes up you&apos;ll
          still get the replay. Places aren&apos;t unlimited, because a room
          where nobody can ask a question isn&apos;t worth attending.
        </p>

        <div className="rounded-[18px] border border-[#25412F]/15 bg-white/60 p-5 md:p-7">
          <MailerLiteWebinarForm />
        </div>

        <p className="mx-auto mt-5 max-w-md text-center text-[13.5px] leading-relaxed text-[#4A4536]/80">
          I&apos;ll email your link straight away. If it doesn&apos;t arrive
          within a few minutes, check your spam folder — and then{" "}
          <a
            href={`mailto:${businessInfo.email}`}
            className="text-[#25412F] underline decoration-[#25412F]/40 underline-offset-2 hover:decoration-[#25412F]"
          >
            email me
          </a>
          .
        </p>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 7. CLOSING OBJECTION */}
      <section className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <h2 className="mb-4 font-voice text-[clamp(1.25rem,2.8vw,1.5rem)] font-medium italic text-[#1B3122]">
          &ldquo;I&apos;ll probably be busy that evening.&rdquo;
        </h2>
        <p className="mb-9 text-[16px] leading-relaxed text-[#4A4536]">
          Sign up anyway. Everyone who registers gets the recording, whether
          or not they make it live. The only people who definitely
          don&apos;t get it are the ones who didn&apos;t sign up.
        </p>

        <a
          href="#apply"
          className="inline-flex items-center justify-center rounded-full bg-[#25412F] px-8 py-4 text-[15.5px] font-medium text-[#F7F2E5] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B3122]"
        >
          Apply for your place
        </a>
      </section>

      <footer className="mx-auto max-w-2xl px-6 pb-12 pt-4">
        <p className="text-center text-[12.5px] text-[#4A4536]/60">
          James Daime · Rotterdam ·{" "}
          <a href={`mailto:${businessInfo.email}`} className="underline decoration-[#4A4536]/30 underline-offset-2">
            {businessInfo.email}
          </a>
        </p>
      </footer>
    </main>
  );
}
