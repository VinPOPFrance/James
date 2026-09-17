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
// below when the subject changes. The "About James" section stays as-is
// between cohorts — it's written to be topic-agnostic.
// ---------------------------------------------------------------------------
const WEBINAR = {
  topic:
    "why pain lands in the lower back when the actual restriction is almost always somewhere else, and the three checkpoints worth ruling out before anything else",
  dayDate: "Tuesday 13 October",
  time: "8:00pm",
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
    text: "Why the spot where it hurts is so rarely where the actual restriction is",
  },
  {
    text: "The three checkpoints worth ruling out before anything else: your hips and legs, your mid-back and ribs, and how you're breathing",
  },
  {
    text: "Why “release the tension” is often the wrong instruction — and what activating it instead actually means",
  },
  {
    text: "Your own back, live: bring what's going on for you and we'll work through it on the call — this is the actual reason to show up live",
  },
];

export default function WebinarPage() {
  return (
    <main className="min-h-screen bg-[#F7F2E5] text-[#2E2B24]">
      {/* Minimal identity mark — the one exit link is intentionally tiny and muted */}
      <div className="mx-auto max-w-2xl px-6 pt-8">
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

      {/* 1. HERO */}
      <section className="mx-auto max-w-2xl px-6 pb-14 pt-8 text-center md:pb-20 md:pt-12">
        <h1 className="mb-6 font-voice text-[clamp(1.9rem,5.4vw,2.7rem)] font-medium leading-[1.15] text-[#1B3122]">
          Your lower back isn&apos;t the problem. It&apos;s where the
          problem shows up.
        </h1>

        <p className="mx-auto mb-9 max-w-lg text-[16.5px] leading-relaxed text-[#4A4536]">
          A free 45-minute live session — bring your own question about
          your back — on {WEBINAR.topic}. Live on Google Meet,{" "}
          {WEBINAR.dayDate} at {WEBINAR.time} Amsterdam time.
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
            You&apos;ve tried stretching. You&apos;ve tried strengthening
            your core, maybe both at once, on alternating days, the way an
            app told you to. And it still catches — the same way, in the
            same spot, on some mornings more than others.
          </p>
          <p>
            You&apos;ve probably been told it&apos;s your posture, or a
            weak core, or that you sit too much. None of that quite
            explains why it comes and goes, or why that same &ldquo;weak
            core&rdquo; doesn&apos;t stop you doing plenty of other things
            without a flicker of pain. Pain in the lower back is almost
            never a lower back problem. It&apos;s a symptom showing up in
            the one place that&apos;s been quietly covering for everything
            else.
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
            People whose lower back flares on some days and not others,
            who&apos;ve already done the stretching and the strengthening
            and are still roughly where they started.
          </p>
          <p>
            Not for you if you&apos;re dealing with a specific acute injury
            and need a diagnosis — this session is about the common
            pattern behind recurring pain, not a substitute for seeing
            someone about a fresh injury.
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

      {/* 5. ABOUT JAMES — topic-agnostic, left as-is between cohorts */}
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
              were told their pain was simply &ldquo;who they
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
          This is live only, no replay. Bring your own back&apos;s version
          of the problem — the best part of the 45 minutes is working
          through it with you, out loud, on the call. Places aren&apos;t
          unlimited, because a room where nobody can ask a question
          isn&apos;t worth attending.
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
          Block the time now, before the evening fills itself in on its
          own. This isn&apos;t something you catch up on later — it&apos;s
          45 minutes where you can actually ask about your own back and get
          an answer, live. That only happens once.
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
