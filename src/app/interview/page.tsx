import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { businessInfo } from "@/config/business-info";

// ---------------------------------------------------------------------------
// jamesdaime.com/interview — hidden page inviting women to a free 25-minute
// research interview (not a sale, not a treatment).
// ---------------------------------------------------------------------------
const INTERVIEW = {
  bookingUrl: "https://calendar.app.google/U4sWHimqpAHusRhd9",
};

export const metadata: Metadata = {
  title: "A 25-Minute Conversation — James Daime",
  description:
    "A free 25-minute research interview with James Daime for women with lower back pain. Not a sale, not a treatment — just space to tell your story.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/interview`,
  },
};

const quotes = [
  "I felt like a ping-pong ball between specialists. I had to explain my whole history from scratch, every single appointment.",
  "I stopped playing tennis. I stopped skating. I just want to stop planning my life around the pain.",
  "The only hour I'm free is after 8pm, with work and my child. No physio practice near me is even open then.",
  "By the evening I'm too exhausted to walk to the corner with my own three-year-old.",
  "I don't do it anymore. I can't predict how my back or my hip will react.",
  "My stress and my pain aren't separate things. Doctors keep treating them like they are.",
];

const logistics = [
  "Free. Nothing for sale, now or afterward.",
  "25 minutes, one on one.",
  "Nothing to prepare. Just show up as you are.",
  "Your real obstacle is probably time, not money. That's exactly why this is short.",
];

export default function InterviewPage() {
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
          <h1 className="mb-4 font-voice text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-[1.2] text-[#1B3122]">
            You&apos;ve started planning your evening by what your back will
            let you do. Not what you want to do.
          </h1>

          <p className="mx-auto mb-9 max-w-lg text-[16.5px] leading-relaxed text-[#4A4536]">
            A free 25-minute conversation with James Daime, one on one. No
            treatment, nothing to buy, just space to tell your story.
          </p>

          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-[#25412F] px-8 py-4 text-[15.5px] font-medium text-[#F7F2E5] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B3122]"
          >
            Book your 25 minutes
          </a>
        </section>

        {/* 2. WHO THIS IS FOR — white card, like the rest of the site */}
        <section className="rounded-section border border-hairline bg-white px-6 py-10 md:px-10 md:py-12">
          <div className="space-y-5 text-[16px] leading-relaxed text-inkSoft">
            <p>
              Maybe you&apos;ve been through physio, chiropractic, scans,
              even a conversation about surgery. Something helped for a
              while. Then it didn&apos;t.
            </p>
            <p>
              Or maybe there&apos;s no diagnosis at all. You&apos;re just
              careful now. With the shopping, with a long day, with an
              evening walk you used to take without thinking twice.
            </p>
            <p>
              Either way, you&apos;ve started living around your back
              instead of in it.
            </p>
          </div>
        </section>

        {/* 3. IN THEIR OWN WORDS — sand-tinted card, copper accents */}
        <section className="rounded-section border border-copper/25 bg-sand/30 px-6 py-10 md:px-10 md:py-12">
          <h2 className="mb-3 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#1B3122]">
            In their own words
          </h2>
          <p className="mb-7 text-[15px] leading-relaxed text-inkSoft">
            These are real things women told me in early interviews.
            I&apos;m not inventing this. I&apos;m asking more women to help
            me understand it properly.
          </p>
          <ul className="space-y-5">
            {quotes.map((quote) => (
              <li
                key={quote}
                className="border-l-2 border-copper/50 pl-4 text-[15.5px] italic leading-relaxed text-inkSoft"
              >
                &ldquo;{quote}&rdquo;
              </li>
            ))}
          </ul>
        </section>

        {/* 4. WHAT THIS ISN'T — white card, sage-tinted logistics box */}
        <section className="rounded-section border border-hairline bg-white px-6 py-10 md:px-10 md:py-12">
          <h2 className="mb-6 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#1B3122]">
            What this isn&apos;t
          </h2>
          <div className="mb-8 space-y-5 text-[16px] leading-relaxed text-inkSoft">
            <p>
              This isn&apos;t a treatment. It isn&apos;t an offer.
              There&apos;s nothing to buy here.
            </p>
            <p>
              I&apos;m building an online programme for women with lower
              back pain, and I refuse to build it by guessing from behind a
              desk. So before I decide what goes into it, I&apos;m talking
              to the women it&apos;s actually for.
            </p>
            <p>
              That&apos;s the whole reason I&apos;m asking you for 25
              minutes.
            </p>
          </div>
          <ul className="space-y-4 rounded-card border border-sage/30 bg-sage/10 p-5">
            {logistics.map((item) => (
              <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-inkSoft">
                <span aria-hidden className="mt-0.5 shrink-0 text-sage">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. ABOUT JAMES — navy card, matching the main site's CTA sections */}
        <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-navy to-navy-light px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/15 blur-3xl" />
          <div className="relative">
            <div className="mb-6 overflow-hidden rounded-[18px] border border-ivory/15">
              <Image
                src="/media/james-bridge.jpg"
                alt="James Daime"
                width={1000}
                height={650}
                className="h-[240px] w-full object-cover md:h-[300px]"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
            <p className="mb-2 text-[13px] font-medium uppercase tracking-[0.1em] text-copper-light">
              Who&apos;s asking
            </p>
            <p className="text-[15.5px] leading-relaxed text-ivory/90">
              James Daime is a movement therapist in Rotterdam, working with
              women with chronic lower back pain through fascia release,
              breathing and the mechanics of everyday movement, not pushing
              through pain. Over 10+ years and 121+ five-star reviews,
              he&apos;s heard enough half-finished stories from
              specialists&apos; waiting rooms to know the real answers
              usually come from the women living it. That&apos;s who this
              conversation is for.
            </p>
          </div>
        </section>

        {/* 6. BOOK — white card, forest CTA stays the one constant action color */}
        <section id="book" className="rounded-section border border-hairline bg-white px-6 py-12 text-center md:px-10 md:py-14">
          <h2 className="mb-4 font-voice text-[clamp(1.5rem,3.4vw,2rem)] font-medium text-[#1B3122]">
            Tell me your story
          </h2>
          <p className="mx-auto mb-9 max-w-md text-[15.5px] leading-relaxed text-inkSoft">
            Twenty-five minutes, online, completely free. Nothing for sale,
            no follow-up pitch, nothing to prepare. Just space for you to be
            heard in full, maybe for the first time.
          </p>

          <a
            href={INTERVIEW.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25412F] px-8 py-4 text-[15.5px] font-medium text-[#F7F2E5] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B3122]"
          >
            Book your 25 minutes
          </a>
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
