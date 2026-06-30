"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { home } from "@/config/content.en";
import { businessInfo } from "@/config/business-info";

export function Header() {
  const [open, setOpen] = useState(false);
  const t = home.nav;

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-voice text-[1.15rem] font-medium text-navy">Inner Strength Compass</span>
          <span className="text-[10.5px] font-medium tracking-wide text-muted">by James Daime</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {t.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-[14.5px] text-muted transition-colors hover:text-navy after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-0 after:bg-copper after:transition-all after:duration-200 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={businessInfo.bookingUrl} surface="light" variant="primary" external>
            {t.cta}
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="rounded-md p-2 text-navy md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-hairline bg-ivory px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {t.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] text-navy"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Button href="/book" surface="light" variant="primary" fullWidth>
              {t.cta}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
