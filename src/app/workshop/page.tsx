import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/config/site-config";
import styles from "./workshop.module.css";

// jamesdaime.com/workshop is a fixed URL shared only by email. Edit these
// fields for a new date; the prose below is written for this session and is
// edited by hand in place.
const WORKSHOP = {
  date: "Saturday 31 October",
  time: "10:00–12:30",
  place: "Rotterdam city centre",
  spots: "12 spots",
  price: "€80",
};

export const metadata: Metadata = {
  title: "Workshop · James Daime",
  description:
    "Two and a half hours in Rotterdam, working on your own back with James walking you through it.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/workshop`,
  },
};

const card = "rounded-section px-6 py-10 md:px-10 md:py-12";
const h2 =
  "mb-6 font-voice text-[clamp(1.35rem,3vw,1.7rem)] font-medium text-[#25412F]";

const leaveWith = [
  "Which of the three it is for you. Not the general picture, the one you found in your own body.",
  "What it feels like when that area actually changes, so you know what you’re aiming for.",
  "Two or three things to keep doing on your own. No app, no twelve-week plan, no printout.",
];

const steps = [
  "Tell me you want in. Name and email, takes a minute.",
  "I write back myself, within a day or two, with the address and how to pay.",
  "Once you’ve paid, the spot’s yours. At twelve, it closes.",
];

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F1] text-[#2A2A28]">
      <div className="mx-auto max-w-[680px] space-y-6 px-4 py-14 md:space-y-8 md:px-6 md:py-20">
        {/* 1. HERO · open on the cream backdrop */}
        <section className="pb-6 text-center md:pb-10">
          <h1 className="mb-6 font-voice text-[clamp(1.9rem,5.4vw,2.7rem)] font-medium leading-[1.15] text-[#25412F]">
            Get a better understanding of what is causing your lower back
            pain.
          </h1>
          <p className="mx-auto mb-4 max-w-lg text-[16.5px] leading-relaxed text-[#2A2A28]">
            One Saturday morning in Rotterdam. We go through some simple
            tests, you find the part that isn&apos;t doing its job, and you
            leave knowing what to work on.
          </p>
          <p className="mx-auto max-w-lg text-[14px] leading-relaxed text-[#4A4536]">
            {WORKSHOP.date}, {WORKSHOP.time} · {WORKSHOP.place} ·{" "}
            {WORKSHOP.spots} · {WORKSHOP.price}
          </p>
        </section>

        {/* 2. THE PROBLEM · white card */}
        <section className={`${card} border border-hairline bg-white`}>
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

        {/* 3. THE STAKE · dark green card */}
        <section className={`${card} bg-[#25412F] text-center`}>
          <p className="mx-auto max-w-md font-voice text-[1.45rem] font-medium leading-snug text-[#F7F2E5]">
            The risk isn&apos;t that it suddenly gets worse. It&apos;s that
            another year goes by and you&apos;re still working around it.
          </p>
        </section>

        {/* 4. WHAT ACTUALLY HAPPENS · white card */}
        <section className={`${card} border border-hairline bg-white`}>
          <h2 className={h2}>What actually happens</h2>
          <div className="space-y-5 text-[16px] leading-relaxed">
            <p>
              We go through the three checkpoints together: hips and legs,
              the mid-back and ribs, how you&apos;re breathing. I show you how
              to test each one on your own body, you do it, and I come round
              and correct what I see. By the end you&apos;ll know which one is
              yours, because you&apos;ll have felt it change.
            </p>
            <p>
              It&apos;s practical the whole way through. You&apos;ll be on the
              floor more than in a chair. Twelve people, so I get round
              everyone.
            </p>
            <p className="text-[14.5px] text-[#4A4536]">
              To be clear, this is a guided morning rather than a one-to-one
              treatment. If what you want is me working on your body
              directly, that&apos;s a private session, not this.
            </p>
          </div>
        </section>

        {/* 5. WHAT YOU'LL LEAVE WITH · sand card */}
        <section className={`${card} border border-copper/25 bg-sand/30`}>
          <h2 className={h2}>What you&apos;ll leave with</h2>
          <ul className="list-disc space-y-3 pl-5 text-[16px] leading-relaxed marker:text-copper">
            {leaveWith.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 6. HOW IT WORKS · white card */}
        <section className={`${card} border border-hairline bg-white`}>
          <h2 className={h2}>How it works</h2>
          <ol className="list-decimal space-y-3 pl-5 text-[16px] leading-relaxed marker:font-medium marker:text-[#25412F]">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        {/* SECOND STAKE · dark green card */}
        <section className={`${card} bg-[#25412F] text-center`}>
          <p className="mx-auto max-w-md font-voice text-[1.45rem] font-medium leading-snug text-[#F7F2E5]">
            It&apos;s a relief to finally understand your back. It&apos;s still
            frustrating to plan your week around it.
          </p>
        </section>

        {/* 7. THE PRACTICAL DETAILS · sage card */}
        <section className={`${card} border border-sage/30 bg-sage/10`}>
          <ul className="divide-y divide-[#25412F]/10 text-[16px] leading-relaxed">
            <li className="pb-3">
              {WORKSHOP.date}, {WORKSHOP.time}
            </li>
            <li className="py-3">
              {WORKSHOP.place}, exact address once you&apos;re confirmed
            </li>
            <li className="py-3">{WORKSHOP.price}</li>
            <li className="pt-3">{WORKSHOP.spots}</li>
          </ul>
        </section>

        {/* 8. THE FORM · white card */}
        <section
          id="apply"
          className={`${card} border border-hairline bg-white text-center`}
        >
          <h2 className="mb-4 font-voice text-[clamp(1.5rem,3.4vw,2rem)] font-medium text-[#25412F]">
            Tell me you want in
          </h2>
          <p className="mx-auto mb-8 max-w-md text-[15.5px] leading-relaxed">
            Name and email, that&apos;s all I need.
          </p>

          <div
            className={`${styles.formContainer} rounded-[18px] border border-[#25412F]/15 bg-[#F7F2E5] p-5 text-left md:p-7`}
          >
            <div
              id="mlb2-46729013"
              className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-46729013"
            >
              <div className="ml-form-align-center">
                <div className="ml-form-embedWrapper embedForm">
                  <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                    <div className="ml-form-embedContent" />
                    <form
                      className="ml-block-form"
                      action="https://assets.mailerlite.com/jsonp/521975/forms/200477626890978703/subscribe"
                      data-code=""
                      method="post"
                      target="_blank"
                    >
                      <div className="ml-form-formContent">
                        <div className="ml-form-fieldRow">
                          <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                            <input
                              aria-label="email"
                              aria-required="true"
                              type="email"
                              className="form-control"
                              name="fields[email]"
                              placeholder="Email"
                              autoComplete="email"
                            />
                          </div>
                        </div>
                        <div className="ml-form-fieldRow">
                          <div className="ml-field-group ml-field-name">
                            <input
                              aria-label="name"
                              type="text"
                              className="form-control"
                              name="fields[name]"
                              placeholder="Name"
                              autoComplete="given-name"
                            />
                          </div>
                        </div>
                        <div className="ml-form-fieldRow ml-last-item">
                          <div className="ml-field-group ml-field-heard_about_via">
                            <input
                              aria-label="heard_about_via"
                              type="text"
                              className="form-control"
                              name="fields[heard_about_via]"
                              placeholder="How did you hear about this?"
                            />
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="ml-submit" value="1" />
                      <div className="ml-form-embedSubmit">
                        <button type="submit" className="primary">
                          Tell me you want in
                        </button>
                        <button disabled type="button" className="loading">
                          <span className="ml-form-embedSubmitLoad" />
                          <span className="sr-only">Loading...</span>
                        </button>
                      </div>
                      <input type="hidden" name="anticsrf" value="true" />
                    </form>
                  </div>
                  <div className="ml-form-successBody row-success">
                    <div className="ml-form-successContent">
                      <h3>Thank you!</h3>
                      <p>You have successfully joined our subscriber list.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-md text-[13.5px] leading-relaxed text-[#4A4536]">
            First come, first served. It closes once we&apos;re full.
          </p>
        </section>
      </div>

      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519"
        strategy="afterInteractive"
      />
      <Script id="mailerlite-workshop-success" strategy="afterInteractive">
        {`function ml_webform_success_46729013() {
          var form = document.querySelector(".ml-subscribe-form-46729013 .row-form");
          var success = document.querySelector(".ml-subscribe-form-46729013 .row-success");
          if (form) form.style.display = "none";
          if (success) success.style.display = "block";
        }`}
      </Script>
      <Script id="mailerlite-workshop-takel" strategy="afterInteractive">
        {`fetch("https://assets.mailerlite.com/jsonp/521975/forms/200477626890978703/takel");`}
      </Script>
    </main>
  );
}
