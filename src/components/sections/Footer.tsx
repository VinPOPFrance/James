import Link from "next/link";
import { home } from "@/config/content.en";

const exploreLinks = [
  { label: "12-Week Program", href: "/12-week-body-reset-program" },
  { label: "Fascia Reset Session", href: "/fascia-reset-session" },
  { label: "Workshops for Groups", href: "/workshops" },
  { label: "About James", href: "/about" },
];

export function Footer() {
  const t = home.footer;

  return (
    <footer className="rounded-section border border-hairline bg-white px-6 py-12 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="mb-1 font-voice text-[1.1rem] font-medium text-navy">Inner Strength Compass</p>
            <p className="mb-3 text-[11px] font-medium tracking-wide text-muted">by James Daime</p>
            <p className="max-w-xs text-[14px] leading-relaxed text-muted">{t.tagline}</p>
          </div>

          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-muted">
              Explore
            </p>
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

          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-muted">
              Contact
            </p>
            <ul className="space-y-2">
              {t.contact.map((line, i) => (
                <li key={i} className="text-[14px] text-inkSoft">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-hairline pt-6 text-center text-[12px] text-muted">
          © {new Date().getFullYear()} Inner Strength Compass · Netherlands
        </div>
      </div>
    </footer>
  );
}
