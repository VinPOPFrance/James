import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { businessInfo } from "@/config/business-info";

// ---------------------------------------------------------------------------
// jamesdaime.com/interview — hidden page inviting women to a free 25-minute
// research interview (not a sale, not a treatment). Two things still need
// to be wired in before this goes live:
//
// 1. videoUrl — once the VSL is filmed, paste its embed URL here (a YouTube
//    "embed" URL like https://www.youtube.com/embed/XXXXXXXXXXX, or a Vimeo
//    player URL). Until then the hero shows a poster placeholder.
// 2. bookingUrl — your scheduling link (Calendly, SimplyBook, Google
//    Calendar appointments, etc.) for the 25-minute call.
// ---------------------------------------------------------------------------
const INTERVIEW = {
  videoUrl: "",
  bookingUrl: "#",
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
  "25 minutes, over video call.",
  "Nothing to prepare. Just show up as you are.",
  "Your real obstacle is probably time, not money. That's exactly why this is short.",
];

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-[#E7DDBE] px-1.5 py-0.5 font-medium text-[#4E3F17]">
      {children}
    </span>
  );
}

function VslVideo() {
  if (!INTERVIEW.videoUrl) {
    return (
      <div className="relative mx-auto mb-8 aspect-video w-full max-w-md overflow-hidden rounded-[18px] border border-[#25412F]/15 bg-[#EFE7D2]">
        <Image
          src="/media/jamesPortrait.png"
          alt="James Daime"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#1B3122]/25">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F2E5] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)]">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-[#25412F]">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="rounded-full bg-[#F7F2E5] px-3 py-1 text-[12px] font-medium text-[#25412F]">
            Video coming soon
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto mb-8 aspect-video w-full max-w-md overflow-hidden rounded-[18px] border border-[#25412F]/15">
      <iframe
        src={INTERVIEW.videoUrl}
        title="A message from James Daime"
        className="h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function InterviewPage() {
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
        <VslVideo />

        <h1 className="mb-4 font-voice text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-[1.2] text-[#1B3122]">
          You&apos;ve started planning your evening by what your back will
          let you do. Not what you want to do.
        </h1>

        <p className="mx-auto mb-9 max-w-lg text-[16.5px] leading-relaxed text-[#4A4536]">
          A free 25-minute conversation with James Daime, over video call. No
          treatment, nothing to buy, just space to tell your story.
        </p>

        <a
          href="#book"
          className="inline-flex items-center justify-center rounded-full bg-[#25412F] px-8 py-4 text-[15.5px] font-medium text-[#F7F2E5] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B3122]"
        >
          Book your 25 minutes
        </a>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 2. WHO THIS IS FOR */}
      <section className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <div className="space-y-5 text-[16px] leading-relaxed text-[#4A4536]">
          <p>
            Maybe you&apos;ve been through physio, chiropractic, scans, even
            a conversation about surgery. Something helped for a while. Then
            it didn&apos;t.
          </p>
          <p>
            Or maybe there&apos;s no diagnosis at all. You&apos;re just
            careful now. With the shopping, with a long day, with an evening
            walk you used to take without thinking twice.
          </p>
          <p>
            Either way, you&apos;ve started living around your back instead
            of in it.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 3. IN THEIR OWN WORDS */}
      <section className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <h2 className="mb-3 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#1B3122]">
          In their own words
        </h2>
        <p className="mb-7 text-[15px] leading-relaxed text-[#4A4536]">
          These are real things women told me in early interviews. I&apos;m
          not inventing this. I&apos;m asking more women to help me
          understand it properly.
        </p>
        <ul className="space-y-5">
          {quotes.map((quote) => (
            <li
              key={quote}
              className="border-l-2 border-[#25412F]/30 pl-4 text-[15.5px] italic leading-relaxed text-[#4A4536]"
            >
              &ldquo;{quote}&rdquo;
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 4. WHAT THIS ISN'T */}
      <section className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <h2 className="mb-6 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#1B3122]">
          What this isn&apos;t
        </h2>
        <div className="mb-8 space-y-5 text-[16px] leading-relaxed text-[#4A4536]">
          <p>
            This isn&apos;t a treatment. It isn&apos;t an offer. There&apos;s
            nothing to buy here.
          </p>
          <p>
            I&apos;m building an online programme for women with lower back
            pain, and I refuse to build it by guessing from behind a desk.
            So before I decide what goes into it, I&apos;m talking to the
            women it&apos;s actually for.
          </p>
          <p>That&apos;s the whole reason I&apos;m asking you for 25 minutes.</p>
        </div>
        <ul className="space-y-4">
          {logistics.map((item) => (
            <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-[#4A4536]">
              <span aria-hidden className="mt-0.5 shrink-0 text-[#25412F]">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
              Who&apos;s asking
            </p>
            <p className="text-[15.5px] leading-relaxed text-[#4A4536]">
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
        </div>
      </section>

      <div className="mx-auto max-w-md border-t border-[#25412F]/15" />

      {/* 6. BOOK */}
      <section id="book" className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        <h2 className="mb-4 text-center font-voice text-[clamp(1.5rem,3.4vw,2rem)] font-medium text-[#1B3122]">
          Tell me your story
        </h2>
        <p className="mx-auto mb-9 max-w-md text-center text-[15.5px] leading-relaxed text-[#4A4536]">
          Twenty-five minutes, online, completely free. Nothing for sale, no
          follow-up pitch, nothing to prepare. Just space for you to be
          heard in full, maybe for the first time.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a
            href={INTERVIEW.bookingUrl}
            className="inline-flex items-center justify-center rounded-full bg-[#25412F] px-8 py-4 text-[15.5px] font-medium text-[#F7F2E5] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B3122]"
          >
            Book your 25 minutes
          </a>
          {INTERVIEW.bookingUrl === "#" ? (
            <p className="max-w-sm text-center text-[13px] leading-relaxed text-[#4A4536]/70">
              Booking link not connected yet — replace{" "}
              <Placeholder>INTERVIEW.bookingUrl</Placeholder> with your
              scheduling URL.
            </p>
          ) : null}
        </div>
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
