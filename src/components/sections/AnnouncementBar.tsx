"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { home } from "@/config/content.en";
import { homeNl } from "@/config/content.nl";

const DISMISS_KEY = "pe-reset-bar-dismissed";

interface AnnouncementBarProps {
  locale?: "en" | "nl";
}

export function AnnouncementBar({ locale = "en" }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);
  const t = locale === "nl" ? homeNl.workshopPromo.bar : home.workshopPromo.bar;
  const href = locale === "nl" ? "/nl/lower-back-pain-reset" : "/lower-back-pain-reset";

  useEffect(() => {
    setDismissed(window.localStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  if (dismissed) return null;

  return (
    <div className="relative flex items-center justify-center gap-3 bg-navy px-10 py-2.5 text-center">
      <Link
        href={href}
        className="text-[13.5px] font-medium leading-snug text-ivory hover:underline md:text-[14px]"
      >
        <span className="mr-1.5 rounded-full bg-copper px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-navy">
          {t.label}
        </span>
        {t.text}
        <span className="ml-1.5 font-semibold text-[#ffee8c]">{t.cta} →</span>
      </Link>

      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => {
          window.localStorage.setItem(DISMISS_KEY, "1");
          setDismissed(true);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-ivory/70 transition-colors hover:bg-ivory/10 hover:text-ivory"
      >
        <X size={15} />
      </button>
    </div>
  );
}
