import type { Metadata } from "next";
import { MediaSlot } from "@/components/ui/MediaSlot";
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
  title: "Free Live Webinar · James Daime",
  description: `A free 45-minute live session on ${WEBINAR.topic}.`,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/webinar`,
  },
};

const alreadyTried = [
  "Stretching",
  "Core work, maybe both, on alternating days, because an app said so",
  "Standing desk, better chair, sitting less",
  "Being told it's your posture. Or your core. Or just your age.",
];

const covers = [
  {
    text: "Why the spot where it hurts is so rarely where the actual restriction is",
  },
  {
    text: "The three checkpoints worth ruling out before anything else: your hips and legs, your mid-back and ribs, and how you're breathing",
  },
  {
    text: "Why “release the tension” is often the wrong instruction, and what activating it instead actually means",
  },
  {
    text: "Your own back, live: bring what's going on for you and we'll work through it on the call. This is the actual reason to show up live",
  },
];

function ApplyButton() {
  return (
    <a
      href="#apply"
      className="inline-flex items-center justify-center rounded-full bg-[#25412F] px-8 py-4 text-[15.5px] font-medium text-[#F7F2E5] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B3122]"
    >
      Apply for your place
    </a>
  );
}

export default function WebinarPage() {
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

        {/* 1. HERO — open, on the cream backdrop, no card */}
        <section className="px-1 pb-4 pt-4 text-center md:pb-8 md:pt-6">
          <h1 className="mb-6 font-voice text-[clamp(1.9rem,5.4vw,2.7rem)] font-medium leading-[1.15] text-[#1B3122]">
            Your lower back isn&apos;t the problem.
            <br />
            It&apos;s the messenger.
          </h1>

          <p className="mx-auto mb-3 max-w-lg text-[16.5px] leading-relaxed text-[#4A4536]">
            Forty-five minutes, live, on what&apos;s actually driving the
            pain that keeps coming back, so you can stop guessing, stop
            feeling lost, and finally work on the thing causing it instead of
            the place that hurts.
          </p>

          <p className="mx-auto mb-9 max-w-lg text-[14px] leading-relaxed text-[#4A4536]/70">
            Free. {WEBINAR.dayDate}, {WEBINAR.time} Amsterdam time, on Google
            Meet. Bring your question about your own back.
          </p>

          <ApplyButton />
        </section>

        {/* 2. THE PROBLEM — white card, like the rest of the site */}
        <section className="rounded-section border border-hairline bg-white px-6 py-10 md:px-10 md:py-12">
          <div className="space-y-5 text-[16px] leading-relaxed text-inkSoft">
            <p>You&apos;ve already tried the obvious things.</p>

            <ul className="space-y-3">
              {alreadyTried.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 shrink-0 text-[#4A4536]/40">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              And it still catches. Same way, same spot, worse on some
              mornings than others.
            </p>
            <p>
              None of those explanations quite fit, either. If it&apos;s a
              weak core, why does that same core let you do plenty of other
              things without a flicker of pain? If it&apos;s posture, why
              does it come and go?
            </p>
            <p>
              And somewhere along the way, you stopped trusting your own
              back. You plan around it now.
            </p>
          </div>
        </section>

        {/* 3. ONE-LINE STAKE — open on the cream backdrop, a beat between sections */}
        <section className="px-1 py-4 text-center md:py-6">
          <p className="mx-auto mb-8 max-w-md font-voice text-[1.6rem] font-medium leading-snug text-[#1B3122]">
            Every year you wait, the list of things you avoid gets a little
            longer.
          </p>
          <ApplyButton />
        </section>

        {/* 4. ABOUT JAMES — navy card, matching the main site's CTA sections.
            Portrait treatment matches the "Your guide" section on the
            homepage (large 3/4 photo, rounded-2xl) instead of a small avatar.
            Content untouched between cohorts, only the container is styled. */}
        <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-navy to-navy-light px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/15 blur-3xl" />
          <div className="relative grid items-center gap-6 sm:grid-cols-[0.8fr_1.2fr]">
            <MediaSlot
              name="jamesPortrait"
              className="mx-auto w-full max-w-[220px] border border-ivory/15 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)] sm:mx-0 sm:max-w-none"
            />
            <div>
              <p className="mb-2 text-[13px] font-medium uppercase tracking-[0.1em] text-copper-light">
                Who&apos;s teaching
              </p>
              <p className="text-[15.5px] leading-relaxed text-ivory/90">
                James Daime is a movement therapist in Rotterdam,
                specialising in fascia, breathing and movement
                re-education. Over 10+ years and 121+ five-star reviews,
                he&apos;s worked with people who were told their pain was
                simply &ldquo;who they are.&rdquo; It usually isn&apos;t.
                It&apos;s a pattern. And patterns can change, once you
                understand them.
              </p>
            </div>
          </div>
        </section>

        {/* 5. WHAT YOU'LL WALK AWAY WITH — white card */}
        <section className="rounded-section border border-hairline bg-white px-6 py-10 md:px-10 md:py-12">
          <h2 className="mb-6 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#1B3122]">
            What you&apos;ll walk away with
          </h2>
          <p className="text-[16px] leading-relaxed text-inkSoft">
            By the end of the 45 minutes you&apos;ll have a much clearer
            idea of which of the three areas is most likely yours, why what
            you&apos;ve been doing hasn&apos;t held, and where to actually
            put your effort. Not another generic routine. A direction, based
            on your own back.
          </p>
        </section>

        {/* 6. WHAT WE'LL COVER — sand-tinted card, copper accents */}
        <section className="rounded-section border border-copper/25 bg-sand/30 px-6 py-10 md:px-10 md:py-12">
          <h2 className="mb-7 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#1B3122]">
            What we&apos;ll cover
          </h2>
          <ul className="space-y-5">
            {covers.map((item) => (
              <li key={item.text} className="flex gap-3 text-[16px] leading-relaxed text-inkSoft">
                <span aria-hidden className="mt-0.5 shrink-0 text-copper">
                  ✓
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 7. SECOND STAKE — copper-tinted card, same urgency treatment used sitewide.
            Single line only, no heading. */}
        <section className="rounded-section border border-copper/30 bg-copper/10 px-6 py-10 text-center md:px-10 md:py-12">
          <p className="mx-auto max-w-lg text-[16px] leading-relaxed text-inkSoft">
            The real risk isn&apos;t this flare-up, it&apos;s reaching 65
            more careful, more dependent on clinics, with fewer options than
            you have today.
          </p>
          <div className="mt-8">
            <ApplyButton />
          </div>
        </section>

        {/* 8. WHO THIS IS FOR — white card */}
        <section className="rounded-section border border-hairline bg-white px-6 py-10 md:px-10 md:py-12">
          <h2 className="mb-6 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#1B3122]">
            Who this is for
          </h2>
          <div className="space-y-5 text-[16px] leading-relaxed text-inkSoft">
            <p>
              People whose lower back flares on some days and not others,
              who&apos;ve already done the stretching and the strengthening
              and are still roughly where they started.
            </p>
            <p>
              Not for you if you&apos;re dealing with a specific acute
              injury and need a diagnosis. This session is about the
              common pattern behind recurring pain, not a substitute for
              seeing someone about a fresh injury.
            </p>
          </div>

          <a
            href="#apply"
            className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#25412F] underline decoration-[#25412F]/40 underline-offset-4 transition-colors hover:decoration-[#25412F]"
          >
            Apply for your place →
          </a>
        </section>

        {/* 9. THE FORM — white card */}
        <section id="apply" className="rounded-section border border-hairline bg-white px-6 py-12 text-center md:px-10 md:py-14">
          <h2 className="mb-4 font-voice text-[clamp(1.5rem,3.4vw,2rem)] font-medium text-[#1B3122]">
            Tell me you&apos;re coming
          </h2>
          <p className="mx-auto mb-9 max-w-md text-[15.5px] leading-relaxed text-inkSoft">
            This is live only, no replay. Bring your own back&apos;s version
            of the problem. The best part of the 45 minutes is working
            through it with you, out loud, on the call. Places aren&apos;t
            unlimited, because a room where nobody can ask a question
            isn&apos;t worth attending.
          </p>

          <div className="rounded-[18px] border border-[#25412F]/15 bg-[#F7F2E5] p-5 text-left md:p-7">
            <MailerLiteWebinarForm />
          </div>

          <p className="mx-auto mt-5 max-w-md text-[13.5px] leading-relaxed text-inkSoft/80">
            I&apos;ll email your link straight away. If it doesn&apos;t
            arrive within a few minutes, check your spam folder, and then{" "}
            <a
              href={`mailto:${businessInfo.email}`}
              className="text-[#25412F] underline decoration-[#25412F]/40 underline-offset-2 hover:decoration-[#25412F]"
            >
              email me
            </a>
            .
          </p>
        </section>

        {/* 10. CLOSING OBJECTION — sage-tinted card */}
        <section className="rounded-section border border-sage/30 bg-sage/10 px-6 py-10 text-center md:px-10 md:py-12">
          <h2 className="mb-4 font-voice text-[clamp(1.25rem,2.8vw,1.5rem)] font-medium italic text-[#1B3122]">
            &ldquo;I&apos;ll probably be busy that evening.&rdquo;
          </h2>
          <p className="mx-auto mb-9 max-w-md text-[16px] leading-relaxed text-inkSoft">
            Block the time now, before the evening fills itself in on its
            own. This isn&apos;t something you catch up on later.
            It&apos;s 45 minutes where you can actually ask about your own
            back and get an answer, live. That only happens once.
          </p>

          <ApplyButton />
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
