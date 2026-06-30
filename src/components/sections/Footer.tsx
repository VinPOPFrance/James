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
  {
    label: "Instagram",
    href: businessInfo.socials.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: businessInfo.socials.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: businessInfo.socials.youtube,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
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
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-muted transition-colors hover:border-navy hover:text-navy"
                >
                  {s.icon}
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
