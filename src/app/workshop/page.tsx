import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import styles from "./workshop.module.css";

// jamesdaime.com/workshop is a fixed URL shared only by email. Edit these
// fields for a new date; the prose below is written for this session and is
// edited by hand in place.
const WORKSHOP = {
  date: "Saturday 31 October",
  time: "10:00–12:30",
  place: "Rotterdam city centre",
  spots: "10 spots",
  price: "€80",
};

export const metadata: Metadata = {
  title: "Workshop · James Daime",
  description: "Two and a half hours, hands-on, on your lower back in Rotterdam.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/workshop`,
  },
};

const h2 =
  "mb-6 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#25412F]";

const leaveWith = [
  "Which of the three it is for you. Not the general picture — the one in your body.",
  "What it feels like when that area actually moves, so you’ve got something to aim at.",
  "Two or three things to keep doing. No app, no twelve-week plan, no printout.",
];

const steps = [
  "Tell me you want in. Name and email, takes a minute.",
  "I write back myself, within a day or two, with the address and how to pay.",
  "Once you’ve paid, the spot’s yours. At ten, it closes.",
];

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F1] text-[#2A2A28]">
      <div className="mx-auto max-w-[680px] space-y-16 px-4 py-14 md:space-y-20 md:px-6 md:py-20">
        {/* 1. HERO */}
        <section className="text-center">
          <h1 className="mb-6 font-voice text-[clamp(1.9rem,5.4vw,2.7rem)] font-medium leading-[1.15] text-[#25412F]">
            You understand it now.
            <br />
            Your back hasn&apos;t noticed yet.
          </h1>
          <p className="mx-auto mb-4 max-w-lg text-[16.5px] leading-relaxed text-[#2A2A28]">
            Two and a half hours in a room in Rotterdam, with my hands on the
            thing that&apos;s actually holding it — and you leaving knowing
            what it feels like when that lets go.
          </p>
          <p className="mx-auto max-w-lg text-[14px] leading-relaxed text-[#4A4536]">
            {WORKSHOP.date}, {WORKSHOP.time} · {WORKSHOP.place} ·{" "}
            {WORKSHOP.spots} · {WORKSHOP.price}
          </p>
        </section>

        {/* 2. THE PROBLEM */}
        <section>
          <h2 className={h2}>The gap between knowing and changing</h2>
          <div className="space-y-5 text-[16px] leading-relaxed">
            <p>
              Forty-five minutes on a Tuesday evening is enough to make sense
              of something. It isn&apos;t enough to shift it. You still got up
              on Wednesday and your body did exactly what it&apos;s been doing
              for years.
            </p>
            <p>
              And you&apos;ve already done the effortful part. The physio
              exercises, twice a day, for a while. The stretching. The core
              work, on alternating days, because somebody said so. Being
              careful getting out of the car.
            </p>
            <p>
              None of that was wrong. It was just aimed at the place that
              hurts.
            </p>
          </div>
        </section>

        {/* 3. THE STAKE */}
        <section className="text-center">
          <p className="mx-auto max-w-md font-voice text-[1.45rem] font-medium leading-snug text-[#25412F]">
            The version of this that stings is knowing exactly what&apos;s
            going on, and still planning your weekends around it.
          </p>
        </section>

        {/* 4. WHAT ACTUALLY HAPPENS */}
        <section>
          <h2 className={h2}>What actually happens</h2>
          <div className="space-y-5 text-[16px] leading-relaxed">
            <p>
              I watch how you move. Not much of it — hips, ribs, breathing, a
              few minutes each. Somewhere in there is the thing your back has
              been compensating for, and it&apos;s rarely subtle once you know
              where to look. Then I work on it, with my hands, while you feel
              what changes.
            </p>
            <p>
              Ten people, so nobody&apos;s standing at the back waiting for a
              turn.
            </p>
          </div>
        </section>

        {/* 5. WHAT YOU'LL LEAVE WITH */}
        <section>
          <h2 className={h2}>What you&apos;ll leave with</h2>
          <ul className="list-disc space-y-3 pl-5 text-[16px] leading-relaxed marker:text-[#4A4536]/50">
            {leaveWith.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 6. HOW IT WORKS */}
        <section>
          <h2 className={h2}>How it works</h2>
          <ol className="list-decimal space-y-3 pl-5 text-[16px] leading-relaxed marker:text-[#4A4536]">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        {/* 7. THE PRACTICAL DETAILS */}
        <section>
          <ul className="divide-y divide-[#25412F]/10 border-y border-[#25412F]/10 text-[16px] leading-relaxed">
            <li className="py-3">
              {WORKSHOP.date}, {WORKSHOP.time}
            </li>
            <li className="py-3">
              {WORKSHOP.place} — exact address once you&apos;re confirmed
            </li>
            <li className="py-3">{WORKSHOP.price}</li>
            <li className="py-3">{WORKSHOP.spots}</li>
          </ul>
        </section>

        {/* 8. THE FORM */}
        <section id="apply" className="text-center">
          <h2 className="mb-4 font-voice text-[clamp(1.5rem,3.4vw,2rem)] font-medium text-[#25412F]">
            Tell me you want in
          </h2>
          <p className="mx-auto mb-8 max-w-md text-[15.5px] leading-relaxed">
            Name and email — that&apos;s all I need.
          </p>

          <div
            className={`${styles.formContainer} rounded-[18px] border border-[#25412F]/15 bg-[#F7F2E5] p-5 text-left md:p-7`}
          >
            {/* MAILERLITE WORKSHOP FORM EMBED GOES HERE */}
          </div>

          <p className="mx-auto mt-5 max-w-md text-[13.5px] leading-relaxed text-[#4A4536]">
            First come, first served — it closes once we&apos;re full.
          </p>
        </section>

        {/* 9. CLOSING OBJECTION */}
        <section className="text-center">
          <p className="mx-auto max-w-md text-[14.5px] leading-relaxed text-[#4A4536]">
            If you&apos;re reading this thinking it probably won&apos;t work
            for you either, I understand. You&apos;ve been to the
            appointments. The difference isn&apos;t that I know a secret —
            it&apos;s ten people and two and a half hours, which is enough
            time to actually find yours.
          </p>
        </section>
      </div>
    </main>
  );
}
