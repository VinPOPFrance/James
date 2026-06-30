import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { businessInfo } from "@/config/business-info";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: "Book or Contact | Inner Strength Compass · Rotterdam",
  description:
    "Book a free discovery call, send an email or find the studio in Rotterdam. Inner Strength Compass — movement therapy for women with chronic back pain.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
    languages: {
      en: `${siteConfig.siteUrl}/contact`,
      nl: `${siteConfig.siteUrl}/nl/contact`,
      "x-default": `${siteConfig.siteUrl}/contact`,
    },
  },
};

const socialLinks = [
  { label: "Instagram", href: businessInfo.socials.instagram },
  { label: "LinkedIn", href: businessInfo.socials.linkedin },
  { label: "YouTube", href: businessInfo.socials.youtube },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <Reveal>
        <PageHero
          eyebrow="Get in touch"
          title="Ready to take the first step?"
          body="No pressure. No obligation. A free 20-minute discovery call is the easiest way to find out if this approach is right for you."
          ctaPrimary={{
            label: "Book a free discovery call",
            href: businessInfo.bookingUrl,
            external: true,
          }}
        />
      </Reveal>

      {/* Contact options */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-5 md:grid-cols-3">

              {/* Option 1 — Book online (primary) */}
              <div className="rounded-card border-2 border-navy bg-ivory p-7">
                <span className="mb-3 inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-medium text-ivory">
                  Recommended first step
                </span>
                <p className="mb-1 text-[12px] font-medium uppercase tracking-wider text-copper">Online booking</p>
                <h3 className="mb-3 text-[1.05rem] font-semibold text-navy">Book a free call</h3>
                <p className="mb-6 text-[14.5px] leading-relaxed text-inkSoft">
                  Choose a time that suits you. A relaxed 20-minute conversation — no commitment, just clarity.
                </p>
                <a
                  href={businessInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-[11px] border border-navy bg-navy px-6 py-3.5 text-[15px] font-medium text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy/90"
                >
                  Open booking calendar
                </a>
              </div>

              {/* Option 2 — Email */}
              <div className="rounded-card border border-hairline bg-white p-7">
                <p className="mb-1 text-[12px] font-medium uppercase tracking-wider text-muted">Email</p>
                <h3 className="mb-3 text-[1.05rem] font-semibold text-navy">Send a message</h3>
                <p className="mb-6 text-[14.5px] leading-relaxed text-inkSoft">
                  Prefer to write first? Send your question and James will reply within 1–2 business days.
                </p>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="inline-flex w-full items-center justify-center rounded-[11px] border-[1.5px] border-navy bg-transparent px-6 py-3.5 text-[15px] font-medium text-navy transition-all duration-200 hover:bg-navy hover:text-ivory"
                >
                  {businessInfo.email}
                </a>
              </div>

              {/* Option 3 — Phone */}
              <div className="rounded-card border border-hairline bg-white p-7">
                <p className="mb-1 text-[12px] font-medium uppercase tracking-wider text-muted">Phone</p>
                <h3 className="mb-3 text-[1.05rem] font-semibold text-navy">Call directly</h3>
                <p className="mb-6 text-[14.5px] leading-relaxed text-inkSoft">
                  For quick questions or if you&apos;d rather talk first. Available during studio hours.
                </p>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="inline-flex w-full items-center justify-center rounded-[11px] border-[1.5px] border-navy bg-transparent px-6 py-3.5 text-[15px] font-medium text-navy transition-all duration-200 hover:bg-navy hover:text-ivory"
                >
                  {businessInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Reassurance */}
      <Reveal>
        <section className="rounded-section border border-sage/30 bg-[#F4F6F2] px-8 py-10 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.09em] text-sage">Not sure where to start?</p>
            <p className="mb-1 font-voice text-[1.3rem] font-medium text-navy">Book a free discovery call.</p>
            <p className="text-[14.5px] leading-relaxed text-inkSoft">
              It&apos;s free, relaxed and without obligation. You explain what&apos;s going on — James listens and helps you understand whether this approach could work for you.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Studio info */}
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-12 md:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">Studio details</p>
            <dl className="mb-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Address", value: businessInfo.address.display },
                { label: "Email", value: businessInfo.email, href: `mailto:${businessInfo.email}` },
                { label: "Phone", value: businessInfo.phoneDisplay, href: `tel:${businessInfo.phone}` },
                { label: "Languages", value: "English · Nederlands" },
                { label: "Response time", value: "Within 1–2 business days" },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <dt className="text-[12px] font-medium uppercase tracking-wider text-muted">{label}</dt>
                  <dd className="text-[15px] text-inkSoft">
                    {href ? (
                      <a href={href} className="hover:text-navy hover:underline">{value}</a>
                    ) : value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Social links */}
            <p className="mb-3 text-[12px] font-medium uppercase tracking-wider text-muted">Follow James</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-hairline px-4 py-2 text-[13px] text-inkSoft transition-colors hover:border-navy hover:text-navy"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <p className="mt-8 text-[12px] leading-relaxed text-muted">
              Inner Strength Compass is a movement and body-awareness programme. It is not a medical treatment and does not replace the advice of a doctor or specialist.
            </p>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
