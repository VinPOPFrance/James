import { Button } from "@/components/ui/Button";

interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  body?: string;
  ctaPrimary?: CtaLink;
  ctaSecondary?: CtaLink;
  surface?: "light" | "dark";
  dark?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  body,
  ctaPrimary,
  ctaSecondary,
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-section px-8 py-16 md:px-14 md:py-20 ${
        dark
          ? "bg-gradient-to-br from-navy to-navy-light"
          : "border border-hairline bg-ivory"
      }`}
    >
      {dark && (
        <>
          <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sage/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />
        </>
      )}
      <div className="relative mx-auto max-w-2xl">
        {eyebrow && (
          <p
            className={`mb-4 text-[12px] font-medium uppercase tracking-[0.09em] ${
              dark ? "text-copper" : "text-copper"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={`mb-5 font-voice text-[clamp(2rem,4vw,2.6rem)] font-medium leading-[1.11] ${
            dark ? "text-ivory" : "text-navy"
          }`}
        >
          {title}
        </h1>
        {body && (
          <p
            className={`mb-8 text-[16px] leading-relaxed ${
              dark ? "text-ivory/70" : "text-inkSoft"
            }`}
          >
            {body}
          </p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-wrap gap-3">
            {ctaPrimary && (
              <Button
                href={ctaPrimary.href}
                surface={dark ? "dark" : "light"}
                variant="primary"
                external={ctaPrimary.external}
              >
                {ctaPrimary.label}
              </Button>
            )}
            {ctaSecondary && (
              <Button
                href={ctaSecondary.href}
                surface={dark ? "dark" : "light"}
                variant="secondary"
                external={ctaSecondary.external}
              >
                {ctaSecondary.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
