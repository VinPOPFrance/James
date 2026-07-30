import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
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
  title: "Pelvic Engine Reset | Private Application",
  description:
    "Private application page for newsletter subscribers.",
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
    title: "Saturday 12/09/2026 - 2 Hours In-Studio",
    subtitle: "The Re-Education Phase",
    bullets: [
      "What's overworking (usually your lower back, doing all the heavy lifting)",
      "What's not doing enough work (your deep core and pelvic floor-the engines supposed to be running)",
      "How your breathing is either locking you up or releasing you",
    ],
    outcome:
      "A crystal-clear understanding of YOUR specific mechanics, exactly which releases will unlock your hips, and the first simple exercises to decompress your lower back immediately.",
  },
  {
    title: "7 Days Integration",
    subtitle: "The WhatsApp Accountability Week",
    bullets: [
      "Practice 3 simple, progressive movements at home (20 minutes, 3x per week-that's it)",
      "Send me quick practice videos showing your form (not mandatory)",
      "Get direct feedback from me within 24 hours",
    ],
    outcome:
      "A solid week of practice, proven form, and the proof that this actually works when you do it consistently.",
  },
  {
    title: "Saturday 19/07/2026 - 2 Hours In-Studio",
    subtitle: "The Progression & Autonomy Phase",
    intro:
      "We review your week, celebrate what shifted, and then we safely level up.",
    bullets: [
      "How to stack new, targeted movements onto what you've already mastered",
      "Advanced breathing techniques that lock in deep stability",
      "How to recognize when your body needs more and when it needs rest",
    ],
    outcome:
      "An upgraded, independent roadmap. Not just exercises. A complete system to protect your lower back, maintain mobility, and move through life without constant management.",
  },
];

const rightForYou = [
  "You've tried physio/chiro but still feel stuck",
  "You want to understand the root cause of your pain",
  "You are ready to commit to 20 minutes of practice, 3 to 4 days a week.",
];

const notRightForYou = [
  "You only want a passive massage where someone else does the work",
  "You want an overnight miracle without making an effort",
  "You aren't willing to check in on WhatsApp",
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
                You&apos;ve Been Told Your Back Pain Is &apos;Normal.&apos; It Doesn&apos;t Have to Be.
              </h1>
              <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-inkSoft">
                Stop chasing relief. Start resetting your engine.
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
              You&apos;ve tried everything. Why does the stiffness keep coming back?
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-card border border-sage/35 bg-ivory p-5">
                <p className="text-[15.6px] leading-relaxed text-inkSoft">
                You visit a physiotherapist, a chiropractor, or an osteopath.
                They click, crack, or massage your lower back. It feels
                <strong className="font-semibold text-navy"> fantastic for a couple of days</strong>, maybe even a week, and then
                that <strong className="font-semibold text-navy">familiar, frustrating stiffness</strong> creeps right back.
                </p>
              </article>

              <article className="rounded-card border border-copper/35 bg-ivory p-5">
                <p className="text-[15.6px] leading-relaxed text-inkSoft">
                It leaves you feeling exhausted, moody, and physically broken.
                Worse, it makes you <strong className="font-semibold text-navy">afraid of your own body</strong>. You start skipping
                walks, moving cautiously, and constantly worrying that
                <strong className="font-semibold text-navy"> one wrong twist</strong> will lock your back up entirely.
                </p>
              </article>

              <article className="rounded-card border border-sage/35 bg-ivory p-5">
                <p className="text-[15.6px] leading-relaxed text-inkSoft">
                You don&apos;t need another temporary, passive fix where someone
                pokes your back and sends you on your way. You need to
                understand your body, rebuild your movement, and get back to
                feeling like your <strong className="font-semibold text-navy">vibrant, active self again</strong>.
                </p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-[#87986A] to-[#728153] px-6 py-20 md:px-14">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <h2 className="mb-8 text-center font-voice text-[clamp(1.52rem,2.9vw,2.02rem)] font-medium text-ivory">
              <span className="block">Here&apos;s Exactly How We Reset Your Engine -</span>
              <span className="mt-1 block text-[1.08em] text-[#ffee8c]">
                2 workshops <span className="text-navy">1</span> accountability week
              </span>
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {sprintBlocks.map((block, index) => (
                <article
                  key={block.title}
                  className={`card-lift h-full rounded-card border bg-ivory p-6 shadow-[0_16px_32px_-22px_rgba(15,23,42,0.6)] ${
                    index === 1 ? "border-copper/45" : "border-sage/45"
                  }`}
                >
                  {"subtitle" in block ? (
                    <div className="grid h-full gap-4 md:grid-rows-[1fr_auto]">
                      <div className="rounded-card border border-sage/25 bg-white p-4">
                        {block.subtitle === "The Re-Education Phase"
                          ||
                        block.subtitle === "The Progression & Autonomy Phase" ? (
                          <div className="mb-3 rounded-[10px] border border-copper/40 bg-copper/10 px-3 py-2">
                            <p className="text-[1.1rem] font-semibold leading-snug text-copper">
                              {block.title}
                            </p>
                          </div>
                        ) : (
                          <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.09em] text-sage">
                            {block.title}
                          </p>
                        )}
                        <h3
                          className={`mb-3 text-[1.03rem] font-semibold leading-snug ${
                            block.subtitle === "The Re-Education Phase"
                              ||
                            block.subtitle === "The Progression & Autonomy Phase"
                              ? "text-sage"
                              : "text-navy"
                          }`}
                        >
                          {block.subtitle}
                        </h3>
                        <p className="mb-3 text-[13.5px] font-semibold uppercase tracking-[0.06em] text-copper">
                          {block.title === "7 Days Integration"
                            ? "What you do:"
                            : "What happens:"}
                        </p>
                        {block.intro ? (
                          <p className="mb-3 text-[14.5px] leading-relaxed text-inkSoft">
                            {block.intro}
                          </p>
                        ) : null}
                        <ul className="space-y-3 text-[14.5px] leading-relaxed text-inkSoft">
                          {block.bullets.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-card border border-copper/30 bg-white p-4">
                        <p className="mb-3 text-[13.5px] font-semibold uppercase tracking-[0.06em] text-copper">
                          What you leave with:
                        </p>
                        <p className="text-[14.5px] leading-relaxed text-inkSoft">
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

            <div className="mt-8 rounded-card border border-copper/35 bg-ivory px-6 py-5 shadow-[0_18px_36px_-26px_rgba(15,23,42,0.5)] md:px-7">
              <p className="text-[15.5px] leading-relaxed text-inkSoft md:text-[16px]">
                The Pelvic Engine Reset is <strong className="font-semibold text-navy">NOT</strong> another course. It&apos;s not watching videos alone. It&apos;s a <strong className="font-semibold text-navy">guided, hands-on experience</strong> where you learn what&apos;s actually happening in your body to start taking <strong className="font-semibold text-navy">the right actions</strong>.
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
                Strict Limit: 4 Participants.
              </h2>
              <p className="mb-4 text-[clamp(1.9rem,4vw,2.6rem)] font-semibold text-copper">
                EUR 195
              </p>
              <p className="max-w-3xl text-[15.5px] leading-relaxed text-ivory/80">
                Because this sprint includes individual posture mapping and
                daily, direct WhatsApp coaching from me during the week, I
                cannot take a large group. Public registration is closed.
                Admission is by short application only.
              </p>
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
        <section id="apply" className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 font-voice text-[clamp(1.4rem,2.7vw,1.9rem)] font-medium text-navy">
              Submit Your Application
            </h2>
            <p className="mb-6 text-[15px] text-inkSoft">
              Embed your Google Form or Typeform below by replacing the iframe
              src URL.
            </p>

            <div className="overflow-hidden rounded-card border border-hairline">
              <iframe
                title="Pelvic Engine Reset Application"
                src="about:blank"
                className="h-[760px] w-full bg-ivory"
              />
            </div>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}