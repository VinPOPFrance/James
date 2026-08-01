import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { WorkshopApplicationFormNl } from "@/components/sections/WorkshopApplicationFormNl";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site-config";

type SprintIntroBlock = {
  title: string;
  subtitle: string;
  intro?: string;
  bullets: string[];
  outcome: string;
};

type SprintBlock = SprintIntroBlock;

export const metadata: Metadata = {
  title: "Workshop Lage Rugpijn | Pelvic Engine Reset",
  description:
    "Aanmelding voor de lage rugpijn workshop Pelvic Engine Reset voor vrouwen die weer soepel en zeker willen bewegen.",
  openGraph: {
    title: "Workshop Lage Rugpijn | Pelvic Engine Reset",
    description:
      "Meld je aan voor de Pelvic Engine Reset workshop en beweeg weer met minder stijfheid.",
    url: `${siteConfig.siteUrl}/nl/pelvic-engine-reset`,
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/nl/pelvic-engine-reset`,
    languages: {
      en: `${siteConfig.siteUrl}/pelvic-engine-reset`,
      nl: `${siteConfig.siteUrl}/nl/pelvic-engine-reset`,
      "x-default": `${siteConfig.siteUrl}/pelvic-engine-reset`,
    },
  },
};

const sprintBlocks: SprintBlock[] = [
  {
    title: "Workshop 1 - Zaterdag 12/09/2026, 10:30-12:30",
    subtitle: "De Re-Education Fase",
    bullets: [
      "Welke spieren overwerken (meestal je onderrug, die alles draagt)",
      "Welke spieren hun taak niet meer doen (diepe core en bekkenbodem)",
      "Hoe je ademhaling je vastzet of juist ontspant",
    ],
    outcome:
      "Een helder beeld van jouw mechaniek, de releases die je heupen vrijmaken en je eerste oefeningen om je onderrug te ontlasten.",
  },
  {
    title: "7 Dagen",
    subtitle: "WhatsApp Accountability Week",
    bullets: [
      "20 minuten oefenen, 3x per week. Dat is alles.",
      "Stuur mij een korte video van je uitvoering (optioneel) - ik reageer binnen 24 uur.",
    ],
    outcome:
      "Een week echte praktijk, correcte uitvoering en bewijs dat het werkt als je het doet.",
  },
  {
    title: "Workshop 2 - Zaterdag 19/09/2026, 10:30-12:30",
    subtitle: "De Progression & Autonomy Fase",
    intro: "We evalueren je week en bouwen daarna veilig verder:",
    bullets: [
      "Hoe je nieuwe bewegingen opbouwt op wat je al beheerst",
      "Ademhaling die diepe stabiliteit verankert",
      "Hoe je voelt wanneer je lichaam meer nodig heeft - en wanneer rust beter is",
    ],
    outcome:
      "Jouw eigen routekaart. Geen lijstje met oefeningen, maar een manier om zelf te beslissen wat je volgende stap is.",
  },
];

const rightForYou = [
  "Je hebt fysio of chiro gedaan en voelt je nog steeds vastzitten",
  "Je wilt weten waarom het pijn doet, niet alleen wat je moet rekken",
  "Je bent bereid 20 minuten te oefenen, 3-4 dagen per week",
];

const notRightForYou = [
  "Je wilt dat iemand anders het werk voor je doet",
  "Je verwacht een oplossing van de ene op de andere dag",
  "Je checkt liever niet in via WhatsApp",
];

const applySteps = [
  {
    number: "1",
    title: "AANMELDEN - 3 vragen, 5 minuten",
    detail: "Snelle aanmelding",
  },
  {
    number: "2",
    title: "IK BEOORDEEL - binnen 24 uur",
    detail: "Ik bevestig of dit bij je past",
  },
  {
    number: "3",
    title: "BEVESTIGINGSMAIL - dezelfde dag",
    detail: "Je ontvangt je betaallink",
  },
  {
    number: "4",
    title: "BEVESTIG JE PLEK - EUR 220",
    detail: "Betaal via Stripe, PayPal of bank",
  },
];

export default function SubscriberPelvicEngineResetNlPage() {
  return (
    <PageLayout locale="nl">
      <Reveal>
        <section className="overflow-hidden rounded-section border border-hairline bg-white">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="px-8 py-12 md:px-12 md:py-16">
              <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.09em] text-copper">
                VOOR ACTIEVE VROUWEN MET RUGPIJN
              </p>
              <h1 className="mb-4 font-voice text-[clamp(2rem,5.2vw,3.2rem)] font-medium leading-[1.1] text-navy">
                Niet Meer Zeker Welke Beweging Veilig Is voor Je Rug?
              </h1>
              <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-inkSoft">
                In twee workshops leer je precies hoe jouw lichaam werkt - zodat je weer kunt trainen, bewegen en actief zijn zonder bij elke oefening te twijfelen.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-[11px] border border-navy bg-navy px-6 py-3.5 text-[15px] font-medium text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light"
              >
                Aanmelden voor een van de 4 plekken
              </a>
            </div>

            <div className="relative min-h-[320px] md:min-h-full">
              <Image
                src="/media/group-2.jpg"
                alt="James coacht in de studio"
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
              Je wilt weer bewegen. Je weet alleen niet wat veilig is.
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-card border border-sage/35 bg-ivory p-5">
                <p className="text-[15.6px] leading-relaxed text-inkSoft">
                  Je krijgt te horen dat je actief moet blijven, maar niemand vertelt je welke bewegingen helpen en welke je terugzetten. Dus je houdt je in, slaat trainingen over en blijft voorzichtig.
                </p>
              </article>

              <article className="rounded-card border border-copper/35 bg-ivory p-5">
                <p className="text-[15.6px] leading-relaxed text-inkSoft">
                  Fysio, chiro of osteo geeft je een paar goede dagen. Daarna komt de stijfheid terug en begin je opnieuw met gokken.
                </p>
              </article>

              <article className="rounded-card border border-sage/35 bg-ivory p-5">
                <p className="text-[15.6px] leading-relaxed text-inkSoft">
                  Je hebt geen nieuwe passieve fix nodig. Je moet je eigen lichaam goed genoeg begrijpen om weer met vertrouwen te bewegen.
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
              <span className="block">Hoe We Jouw Engine Resetten -</span>
              <span className="mt-1 block text-[1.16em] text-[#ffee8c]">
                2 workshops, 1 week oefenen
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
                  <div className="grid h-full gap-4 md:grid-rows-[1fr_auto]">
                    <div className="rounded-card border border-sage/30 bg-white p-4">
                      {block.subtitle === "De Re-Education Fase"
                        ||
                      block.subtitle === "De Progression & Autonomy Fase" ? (
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
                      <h3 className={`mb-3 text-[1.155rem] font-semibold leading-snug ${
                        block.subtitle === "De Re-Education Fase"
                          ||
                        block.subtitle === "De Progression & Autonomy Fase"
                          ? "text-sage"
                          : "text-navy"
                      }`}
                      >
                        {block.subtitle}
                      </h3>
                      <p className="mb-3 text-[15.5px] font-semibold uppercase tracking-[0.06em] text-copper">
                        {block.title === "7 Dagen"
                          ? "Wat je doet:"
                          : "Wat er gebeurt:"}
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
                        Je vertrekt met:
                      </p>
                      <p className="text-[16.5px] leading-relaxed text-inkSoft">
                        {block.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-card border border-copper/45 bg-[#fff6ea] px-6 py-5 shadow-[0_20px_38px_-24px_rgba(15,23,42,0.58)] md:px-7">
              <p className="text-[17.5px] leading-relaxed text-inkSoft md:text-[18px]">
                Dit is geen cursus die je alleen bekijkt. Het is hands-on, in de ruimte, zodat je leert wat je lichaam echt doet.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 font-voice text-[clamp(1.4rem,2.7vw,1.9rem)] font-medium text-navy">
              Is dit iets voor jou?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-card border border-sage/40 bg-white p-7">
                <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.09em] text-sage">
                  Dit is voor jou als:
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
                  Dit is NIET voor jou als:
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
                Strikte limiet: 4 deelnemers - EUR 220
              </h2>
              <div className="max-w-3xl rounded-card border border-ivory/20 bg-ivory/10 p-5">
                <h3 className="mb-3 text-[1.06rem] font-semibold text-[#ffee8c]">
                  Inbegrepen:
                </h3>
                <ul className="space-y-2.5 text-[15px] leading-relaxed text-ivory/90">
                  <li>
                    - <strong className="font-semibold text-ivory">4 uur hands-on aandacht, in een groep van vier</strong>
                  </li>
                  <li>
                    - <strong className="font-semibold text-ivory">Videofeedback van mij tijdens je oefenweek</strong>
                  </li>
                  <li>
                    - <strong className="font-semibold text-ivory">Jouw persoonlijke bewegingsroutekaart, die je behoudt</strong>
                  </li>
                  <li>
                    - <strong className="font-semibold text-ivory">Direct contact met mij als je vastloopt</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-ivory/25 bg-ivory/10 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.55)]">
              <Image
                src="/media/group-1.jpg"
                alt="Groepssessie training"
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
              Klaar voor je reset? Zo werkt het
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
                    <p className="mt-auto pt-3 text-[13px] font-medium text-sage md:text-copper">Volgende stap -&gt;</p>
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
              Aanmelden voor de workshop
            </h2>
            <p className="mb-6 text-[15px] text-inkSoft">
              Beantwoord deze drie vragen. Je aanvraag wordt direct per e-mail verzonden.
            </p>

            <div className="rounded-card border border-hairline bg-white p-5 md:p-6">
              <WorkshopApplicationFormNl />
            </div>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
