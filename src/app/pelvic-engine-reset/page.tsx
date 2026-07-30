import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site-config";

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

const sprintBlocks = [
  {
    title: "Saturday [Date] (2 Hours In-Studio) - The Re-Education",
    body:
      "We map your posture to pinpoint what is overworking, and what isn't doing enough work in your body. You will learn how your pelvis is actually designed to move, how your breathing directly dictates pelvic alignment, and the massive impact this connection has on your daily pain levels. You’ll leave with a clear understanding of your unique body mechanics and the releases needed to unlock your hips and decompress your lower back.",
  },
  {
    title: "The Accountability Week (7 Days on WhatsApp) - The Integration",
    body:
      "No complex workouts. You practice simple, progressive movements at home for 20 minutes, 3 times a week. You check in via WhatsApp, send quick practice videos, and get direct feedback from me to ensure perfect form.",
  },
  {
    title: "Saturday [Date] (2 Hours In-Studio) - The Progression & Autonomy",
    body:
      "We review your first week of practice and safely step up the game. You will learn how to stack new, targeted movements and advanced breathing techniques onto your routine, locking in the progress you made. You won't just leave with basic exercises-you'll leave with an upgraded, independent roadmap to protect your lower back and keep stiffness away for good.",
  },
];

const rightForYou = [
  "You've tried physio/chiro but still feel stuck",
  "You want to understand the root cause of your pain",
  "You are ready to commit 20 minutes a day to practice",
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
              <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">
                Private Subscriber Offer
              </p>
              <h1 className="mb-4 font-voice text-[clamp(2rem,5.2vw,3.2rem)] font-medium leading-[1.1] text-navy">
                Stop treating the symptom. Reset the engine.
              </h1>
              <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-inkSoft">
                A high-accountability, 2-week movement sprint for women 40+
                ready to move past chronic lower back stiffness.
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
                src="/media/heroImage.jpg"
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
        <section className="rounded-section border border-hairline bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-5 font-voice text-[clamp(1.4rem,2.7vw,1.9rem)] font-medium text-navy">
              Why traditional treatments keep letting you down.
            </h2>
            <p className="text-[15.8px] leading-relaxed text-inkSoft">
              You don&apos;t have a &quot;bad back.&quot; You have a pelvic and biomechanical
              system that has forgotten how to communicate. Passive treatments
              like cracking or massaging provide temporary relief because they
              ignore how you actually move, breathe, and carry tension daily.
              To find lasting relief, you have to stop being a passive patient
              and learn to understand your own body.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative overflow-hidden rounded-section bg-gradient-to-br from-[#87986A] to-[#728153] px-6 py-20 md:px-14">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-copper/12 blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <h2 className="mb-8 font-voice text-[clamp(1.4rem,2.7vw,1.9rem)] font-medium text-ivory">
              How The Pelvic Engine Reset Works
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {sprintBlocks.map((block) => (
                <article
                  key={block.title}
                  className="card-lift rounded-card border border-ivory/25 bg-ivory/10 p-6"
                >
                  <h3 className="mb-3 text-[1.03rem] font-semibold leading-snug text-ivory">
                    {block.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-ivory/90">
                    {block.body}
                  </p>
                </article>
              ))}
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
          <div className="relative mx-auto max-w-4xl">
            <h2 className="mb-3 font-voice text-[clamp(1.4rem,2.9vw,2rem)] font-medium text-ivory">
              Strict Limit: 4 Participants.
            </h2>
            <p className="mb-4 text-[clamp(1.9rem,4vw,2.6rem)] font-semibold text-copper">
              EUR 195
            </p>
            <p className="max-w-3xl text-[15.5px] leading-relaxed text-ivory/80">
              Because this sprint includes individual posture mapping and daily,
              direct WhatsApp coaching from me during the week, I cannot take a
              large group. Public registration is closed. Admission is by short
              application only.
            </p>
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