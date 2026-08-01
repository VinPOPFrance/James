import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { WorkshopApplicationForm } from "@/components/sections/WorkshopApplicationForm";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site-config";

type SprintIntroBlock = {
  title: string;
  subtitle: string;
  intro?: string;
  bullets: string[];
  outcome: string;
};

type SprintStandardBlock = {
  title: string;
  body: string;
};

type SprintBlock = SprintIntroBlock | SprintStandardBlock;

export const metadata: Metadata = {
  title: "Lower Back Pain Workshop | Pelvic Engine Reset",
  description:
    "Lower back pain workshop application: Pelvic Engine Reset for women ready to move with less stiffness and more confidence.",
  openGraph: {
    title: "Lower Back Pain Workshop | Pelvic Engine Reset",
    description:
      "Apply for the Pelvic Engine Reset lower back pain workshop and start moving with less stiffness.",
    url: `${siteConfig.siteUrl}/pelvic-engine-reset`,
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/pelvic-engine-reset`,
  },
};

const sprintBlocks: SprintBlock[] = [
  {
    title: "Workshop 1 - Saturday 12/09/2026, 10:30-12:30",
    subtitle: "The Re-Education Phase",
    bullets: [
      "Which muscles are overworking (usually your lower back, carrying everything)",
      "Which ones have stopped doing their job (deep core and pelvic floor)",
      "How your breathing is either locking you up or letting you go",
    ],
    outcome:
      "A clear picture of your mechanics, the releases that unlock your hips, and your first exercises to decompress your lower back.",
  },
  {
    title: "7 Days",
    subtitle: "WhatsApp Accountability Week",
    bullets: [
      "20 minutes of practice, 3x per week. That's it.",
      "Send me a quick video of your form (optional) - I reply within 24 hours.",
    ],
    outcome:
      "A week of real practice, correct form, and proof it works when you do it.",
  },
  {
    title: "Workshop 2 - Saturday 19/09/2026, 10:30-12:30",
    subtitle: "The Progression & Autonomy Phase",
    intro:
      "We review your week, then level up safely:",
    bullets: [
      "How to build new movements onto what you've mastered",
      "Breathing that locks in deep stability",
      "How to read when your body needs more - and when it needs rest",
    ],
    outcome:
      "Your own roadmap. Not a list of exercises - a way to decide for yourself what to do next.",
  },
];

const rightForYou = [
  "You've done physio or chiro and still feel stuck",
  "You want to know why it hurts, not just what to stretch",
  "You're ready to practise 20 minutes, 3-4 days a week",
];

const notRightForYou = [
  "You want someone else to do the work for you",
  "You're expecting an overnight fix",
  "You'd rather not check in over WhatsApp",
];

const applySteps = [
  {
    number: "1",
    title: "APPLY - 3 questions, 5 minutes",
    detail: "Quick application",
  },
  {
    number: "2",
    title: "I REVIEW - within 24 hours",
    detail: "I confirm you're a good fit",
  },
  {
    number: "3",
    title: "CONFIRMATION EMAIL - same day",
    detail: "You get your payment link",
  },
  {
    number: "4",
    title: "SECURE YOUR SPOT - EUR 220",
    detail: "Pay via Stripe, PayPal or bank",
  },
];

export default function SubscriberPelvicEngineResetPage() {
  return (
    <PageLayout>
      <Reveal>
        <section className="overflow-hidden rounded-section border border-hairline bg-white">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="px-8 py-12 md:px-12 md:py-16">
              <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.09em] text-copper">
                FOR ACTIVE WOMEN WITH BACK PAIN
              </p>
              <h1 className="mb-4 font-voice text-[clamp(2rem,5.2vw,3.2rem)] font-medium leading-[1.1] text-navy">
                Not Sure What Movement Is Safe for Your Back Anymore?
              </h1>
              <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-inkSoft">
                In two workshops, learn exactly how your body works - so you can train, move and be active again without second-guessing every exercise.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-[11px] border border-navy bg-navy px-6 py-3.5 text-[15px] font-medium text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light"
              >
                Apply for One of the 4 Spots
              </a>
            </div>

            <div className="relative min-h-[320px] md:min-h-full">
              <Image
                src="/media/group-2.jpg"
                alt="James coaching at the studio"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-sage/35 bg-white px-8 py-14 shadow-[0_24px_48px_-34px_rgba(15,23,42,0.45)] md:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.7vw,1.9rem)] font-medium text-navy">
              You want to move again. You just don&apos;t know what&apos;s safe.
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-card border border-sage/35 bg-ivory p-5">
                <p className="text-[15.6px] leading-relaxed text-inkSoft">
                You&apos;ve been told to stay active - but nobody told you which movements help and which ones set you back. So you hold back, skip the workout, and stay careful.
                </p>
              </article>

              <article className="rounded-card border border-copper/35 bg-ivory p-5">
                <p className="text-[15.6px] leading-relaxed text-inkSoft">
                Physio, chiro or osteo gives you a few good days. Then the stiffness creeps back, and you&apos;re guessing again.
                </p>
              </article>

              <article className="rounded-card border border-sage/35 bg-ivory p-5">
                <p className="text-[15.6px] leading-relaxed text-inkSoft">
                You don&apos;t need another passive fix. You need to understand your own body well enough to move with confidence.
                </p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative overflow-hidden rounded-section border border-ivory/25 bg-gradient-to-br from-[#7D8F61] to-[#66764A] px-6 py-20 shadow-[0_28px_48px_-34px_rgba(15,23,42,0.65)] md:px-14">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <h2 className="mb-8 text-center font-voice text-[clamp(1.64rem,3.1vw,2.14rem)] font-medium text-ivory">
              <span className="block">How We Reset Your Engine -</span>
              <span className="mt-1 block text-[1.16em] text-[#ffee8c]">
                2 workshops, 1 week of practice
              </span>
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {sprintBlocks.map((block, index) => (
                <article
                  key={block.title}
                  className={`card-lift h-full rounded-card border p-6 shadow-[0_18px_34px_-20px_rgba(15,23,42,0.62)] ${
                    index === 1
                      ? "border-copper/55 bg-[#fff8ef]"
                      : "border-sage/55 bg-[#f6fbf1]"
                  }`}
                >
                  {"subtitle" in block ? (
                    <div className="grid h-full gap-4 md:grid-rows-[1fr_auto]">
                      <div className="rounded-card border border-sage/30 bg-white p-4">
                        {block.subtitle === "The Re-Education Phase"
                          ||
                        block.subtitle === "The Progression & Autonomy Phase" ? (
                          <div className="mb-3 rounded-[10px] border border-[#ffee8c] bg-navy px-3 py-2 shadow-[0_12px_22px_-12px_rgba(15,23,42,0.78)]">
                            <p className="text-[1.225rem] font-semibold leading-snug text-[#ffee8c]">
                              {block.title}
                            </p>
                          </div>
                        ) : (
                          <p className="mb-2 text-[13.5px] font-semibold uppercase tracking-[0.09em] text-sage">
                            {block.title}
                          </p>
                        )}
                        <h3
                          className={`mb-3 text-[1.155rem] font-semibold leading-snug ${
                            block.subtitle === "The Re-Education Phase"
                              ||
                            block.subtitle === "The Progression & Autonomy Phase"
                              ? "text-sage"
                              : "text-navy"
                          }`}
                        >
                          {block.subtitle}
                        </h3>
                        <p className="mb-3 text-[15.5px] font-semibold uppercase tracking-[0.06em] text-copper">
                          {block.title === "7 Days Integration"
                            ? "What you do:"
                            : "What happens:"}
                        </p>
                        {block.intro ? (
                          <p className="mb-3 text-[16.5px] leading-relaxed text-inkSoft">
                            {block.intro}
                          </p>
                        ) : null}
                        <ul className="space-y-3 text-[16.5px] leading-relaxed text-inkSoft">
                          {block.bullets.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-card border border-copper/30 bg-white p-4">
                        <p className="mb-3 text-[15.5px] font-semibold uppercase tracking-[0.06em] text-copper">
                          What you leave with:
                        </p>
                        <p className="text-[16.5px] leading-relaxed text-inkSoft">
                          {block.outcome}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="mb-3 text-[1.03rem] font-semibold leading-snug text-navy">
                        {block.title}
                      </h3>
                      <p className="text-[14.5px] leading-relaxed text-inkSoft">
                        {block.body}
                      </p>
                    </>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-card border border-copper/45 bg-[#fff6ea] px-6 py-5 shadow-[0_20px_38px_-24px_rgba(15,23,42,0.58)] md:px-7">
              <p className="text-[17.5px] leading-relaxed text-inkSoft md:text-[18px]">
                This isn&apos;t a course you watch alone. It&apos;s hands-on, in the room, learning what your body is actually doing.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 font-voice text-[clamp(1.4rem,2.7vw,1.9rem)] font-medium text-navy">
              Is this right for you?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-card border border-sage/40 bg-white p-7">
                <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.09em] text-sage">
                  This is for you if:
                </p>
                <ul className="space-y-3">
                  {rightForYou.map((item) => (
                    <li key={item} className="text-[15px] leading-relaxed text-inkSoft">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-card border border-copper/35 bg-white p-7">
                <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
                  This is NOT for you if:
                </p>
                <ul className="space-y-3">
                  {notRightForYou.map((item) => (
                    <li key={item} className="text-[15px] leading-relaxed text-inkSoft">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-navy to-navy-light px-8 py-14 md:px-12">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />
          <div className="relative mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1fr_0.95fr] md:gap-10">
            <div>
              <h2 className="mb-3 font-voice text-[clamp(1.4rem,2.9vw,2rem)] font-medium text-ivory">
                Strict Limit: 4 Participants - EUR 220
              </h2>
              <div className="max-w-3xl rounded-card border border-ivory/20 bg-ivory/10 p-5">
                <h3 className="mb-3 text-[1.06rem] font-semibold text-[#ffee8c]">
                  Included:
                </h3>
                <ul className="space-y-2.5 text-[15px] leading-relaxed text-ivory/90">
                  <li>
                    - <strong className="font-semibold text-ivory">4 hours of hands-on attention, in a group of four</strong>
                  </li>
                  <li>
                    - <strong className="font-semibold text-ivory">Video feedback from me during your practice week</strong>
                  </li>
                  <li>
                    - <strong className="font-semibold text-ivory">Your personalised movement roadmap, yours to keep</strong>
                  </li>
                  <li>
                    - <strong className="font-semibold text-ivory">Direct access to me when you get stuck</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-ivory/25 bg-ivory/10 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.55)]">
              <Image
                src="/media/group-1.jpg"
                alt="Group training session"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="h-[260px] w-[136%] max-w-none -translate-x-[18%] object-cover md:h-[340px] md:w-[124%] md:-translate-x-[12%]"
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-sage/35 bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center font-voice text-[clamp(1.45rem,2.8vw,2rem)] font-medium text-navy">
              Ready to Reset? Here&apos;s How
            </h2>

            <div className="grid gap-4 md:grid-cols-4">
              {applySteps.map((step, index) => (
                <article
                  key={step.number}
                  className="flex h-full flex-col rounded-card border border-hairline bg-white p-5 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.55)]"
                >
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-[13px] font-semibold text-ivory">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-[0.95rem] font-semibold leading-snug text-navy">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-inkSoft">{step.detail}</p>
                  {index < applySteps.length - 1 ? (
                    <p className="mt-auto pt-3 text-[13px] font-medium text-sage md:text-copper">Next step -&gt;</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="apply" className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 font-voice text-[clamp(1.4rem,2.7vw,1.9rem)] font-medium text-navy">
              Apply For The Workshop
            </h2>
            <p className="mb-6 text-[15px] text-inkSoft">
              Complete these three questions and your application will be sent
              directly by email.
            </p>

            <div className="rounded-card border border-hairline bg-white p-5 md:p-6">
              <WorkshopApplicationForm />
            </div>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}