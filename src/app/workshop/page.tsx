import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/config/site-config";
import styles from "./workshop.module.css";

export const metadata: Metadata = {
  title: "Workshop · James Daime",
  description: "A hands-on morning on your lower back in Rotterdam.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/workshop`,
  },
};

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F1] px-4 py-10 text-[#2A2A28] md:py-16">
      <div className="mx-auto max-w-[680px] space-y-10 md:space-y-12">
        <section className="px-1 pb-2 pt-5 text-center md:pb-4 md:pt-8">
          <h1 className="mb-5 font-voice text-[clamp(2rem,5.4vw,2.8rem)] font-medium leading-[1.15] text-[#25412F]">
            A hands-on morning on your lower back.
          </h1>
          <p className="mx-auto max-w-xl text-[16.5px] leading-relaxed text-[#4A4536]">
            Saturday 31 October, 10:00am–12:30pm. Rotterdam city centre. 10 spots, €80.
          </p>
        </section>

        <section className="rounded-[18px] border border-[#25412F]/10 bg-white px-6 py-8 md:px-10 md:py-10">
          <h2 className="mb-4 font-voice text-[clamp(1.45rem,3.4vw,1.8rem)] font-medium text-[#25412F]">
            What it is
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2A2A28]">
            Hands-on, not a repeat of the webinar. I look at your body and work directly on the checkpoint that&apos;s actually holding your pain in place — hips, ribs, or breathing. You leave with the basics to keep working on yourself, not a rigid program.
          </p>
        </section>

        <section className="px-1">
          <h2 className="mb-5 font-voice text-[clamp(1.45rem,3.4vw,1.8rem)] font-medium text-[#25412F]">
            The practical details
          </h2>
          <ul className="space-y-3 text-[16px] leading-relaxed text-[#2A2A28]">
            <li>Saturday 31 October, 10:00am–12:30pm</li>
            <li>Rotterdam city centre — exact address sent once you&apos;re confirmed</li>
            <li>€80</li>
            <li>10 spots</li>
          </ul>
        </section>

        <section
          id="apply"
          className="rounded-[18px] border border-[#25412F]/10 bg-white px-6 py-9 md:px-10 md:py-11"
        >
          <h2 className="mb-3 font-voice text-center text-[clamp(1.5rem,3.4vw,2rem)] font-medium text-[#25412F]">
            Tell me you want in
          </h2>
          <p className="mb-7 text-center text-[15.5px] leading-relaxed text-[#4A4536]">
            Name and email — that&apos;s all I need.
          </p>

          <div className={styles.formContainer}>
            <div id="mlb2-46729013" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-46729013">
              <div className="ml-form-align-center">
                <div className="ml-form-embedWrapper embedForm">
                  <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                    <div className="ml-form-embedContent" />
                    <form
                      className="ml-block-form"
                      action="https://assets.mailerlite.com/jsonp/521975/forms/200477626890978703/subscribe"
                      method="post"
                      target="_blank"
                    >
                      <div className="ml-form-formContent">
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
                          <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                            <input
                              aria-label="email"
                              aria-required="true"
                              type="email"
                              className="form-control"
                              name="fields[email]"
                              placeholder="Email"
                              autoComplete="email"
                              required
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

          <p className="mt-5 text-center text-[13.5px] leading-relaxed text-[#4A4536]/80">
            I&apos;ll reply personally within a day or two with the address and payment details. First come, first served — it closes once we&apos;re full.
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
