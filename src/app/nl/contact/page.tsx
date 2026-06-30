import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { contactNl } from "@/config/content.contact.nl";
import { businessInfo } from "@/config/business-info";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: contactNl.meta.title,
  description: contactNl.meta.description,
  alternates: {
    canonical: `${siteConfig.siteUrl}/nl/contact`,
    languages: {
      en: `${siteConfig.siteUrl}/contact`,
      nl: `${siteConfig.siteUrl}/nl/contact`,
      "x-default": `${siteConfig.siteUrl}/contact`,
    },
  },
};

export default function ContactNlPage() {
  const t = contactNl;

  return (
    <PageLayout locale="nl">
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-16 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.hero.eyebrow}</p>
            <h1 className="mb-5 font-voice text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-snug text-navy">{t.hero.title}</h1>
            <p className="mb-8 text-[16px] leading-relaxed text-inkSoft">{t.hero.body}</p>
            <Button href={businessInfo.bookingUrl} surface="light" variant="primary" external>{t.hero.ctaPrimary}</Button>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {/* Booking */}
            <div className="relative rounded-card border-2 border-navy bg-navy p-7 text-ivory">
              <span className="mb-4 inline-block rounded-full border border-copper/40 bg-copper/20 px-3 py-1 text-[11.5px] font-medium text-copper">
                {t.options.booking.badge}
              </span>
              <p className="mb-1 text-[11.5px] font-medium uppercase tracking-wider text-ivory/60">{t.options.booking.eyebrow}</p>
              <h2 className="mb-3 text-[1.05rem] font-semibold">{t.options.booking.title}</h2>
              <p className="mb-6 text-[14px] leading-relaxed text-ivory/80">{t.options.booking.body}</p>
              <Button href={businessInfo.bookingUrl} surface="dark" variant="primary" external>{t.options.booking.cta}</Button>
            </div>

            {/* Email */}
            <div className="rounded-card border border-hairline bg-ivory p-7">
              <p className="mb-1 text-[11.5px] font-medium uppercase tracking-wider text-muted">{t.options.email.eyebrow}</p>
              <h2 className="mb-3 text-[1.05rem] font-semibold text-navy">{t.options.email.title}</h2>
              <p className="mb-6 text-[14px] leading-relaxed text-inkSoft">{t.options.email.body}</p>
              <a
                href={`mailto:${businessInfo.email}`}
                className="inline-flex items-center rounded-md border border-navy px-4 py-2.5 text-[14px] font-medium text-navy transition-colors hover:bg-navy hover:text-ivory"
              >
                {businessInfo.email}
              </a>
            </div>

            {/* Phone */}
            <div className="rounded-card border border-hairline bg-ivory p-7">
              <p className="mb-1 text-[11.5px] font-medium uppercase tracking-wider text-muted">{t.options.phone.eyebrow}</p>
              <h2 className="mb-3 text-[1.05rem] font-semibold text-navy">{t.options.phone.title}</h2>
              <p className="mb-6 text-[14px] leading-relaxed text-inkSoft">{t.options.phone.body}</p>
              <a
                href={`tel:${businessInfo.phone}`}
                className="inline-flex items-center rounded-md border border-navy px-4 py-2.5 text-[14px] font-medium text-navy transition-colors hover:bg-navy hover:text-ivory"
              >
                {businessInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-14 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.reassurance.eyebrow}</p>
            <h2 className="mb-3 font-voice text-[clamp(1.3rem,2.5vw,1.6rem)] font-medium text-navy">{t.reassurance.title}</h2>
            <p className="mb-6 text-[15px] leading-relaxed text-inkSoft">{t.reassurance.body}</p>
            <Button href={businessInfo.bookingUrl} surface="light" variant="primary" external>{t.hero.ctaPrimary}</Button>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-8 py-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">{t.studio.eyebrow}</p>
            <div className="mb-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {t.studio.fields.map((field, i) => {
                let value: string | undefined = "value" in field ? field.value : undefined;
                if (field.label === "Adres") value = businessInfo.address.display;
                if (field.label === "E-mail") value = businessInfo.email;
                if (field.label === "Telefoon") value = businessInfo.phoneDisplay;
                return (
                  <div key={i} className="rounded-card border border-hairline bg-ivory p-5">
                    <p className="mb-1 text-[11.5px] font-medium uppercase tracking-wider text-muted">{field.label}</p>
                    <p className="text-[15px] text-inkSoft">{value}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-[12.5px] leading-relaxed text-muted">{t.studio.disclaimer}</p>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
}
