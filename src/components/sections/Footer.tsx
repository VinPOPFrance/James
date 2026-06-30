import Link from "next/link";
import { home } from "@/config/content.en";
import { businessInfo } from "@/config/business-info";

const exploreLinks = [
  { label: "12-Week Program", href: "/12-week-body-reset-program" },
  { label: "Fascia Reset Session", href: "/fascia-reset-session" },
  { label: "Workshops for Groups", href: "/workshops" },
  { label: "About James", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  { label: "Instagram", href: businessInfo.socials.instagram },
  { label: "LinkedIn", href: businessInfo.socials.linkedin },
  { label: "YouTube", href: businessInfo.socials.youtube },
];

export function Footer() {
  const t = home.footer;

  return (
    <footer className="rounded-section border border-hairline bg-white px-6 py-12 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand + tagline */}
          <div>
            <p className="mb-1 font-voice text-[1.1rem] font-medium text-navy">{businessInfo.brandName}</p>
            <p className="mb-4 text-[11px] font-medium tracking-wide text-muted">by {businessInfo.founderName}</p>
            <p className="mb-5 max-w-xs text-[14px] leading-relaxed text-muted">{t.tagline}</p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-md border border-hairline px-2.5 py-1.5 text-[12px] text-muted transition-colors hover:border-navy hover:text-navy"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-muted">Explore</p>
            <ul className="space-y-2">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] text-inkSoft hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-muted">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="block text-[14px] text-inkSoft hover:text-navy"
                >
                  {businessInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="block text-[14px] text-inkSoft hover:text-navy"
                >
                  {businessInfo.email}
                </a>
              </li>
              <li className="text-[14px] text-inkSoft">{businessInfo.address.short}</li>
              <li className="pt-1">
                <a
                  href={businessInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-md border border-navy px-3 py-1.5 text-[13px] font-medium text-navy transition-colors hover:bg-navy hover:text-ivory"
                >
                  Book a session →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-hairline pt-6 text-center text-[12px] text-muted">
          © {new Date().getFullYear()} {businessInfo.brandName} · {businessInfo.address.short}
        </div>
      </div>
    </footer>
  );
}
