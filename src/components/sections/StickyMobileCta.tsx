"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { home } from "@/config/content.en";
import { businessInfo } from "@/config/business-info";

// Splits a trailing " (...)" clarifier off a CTA label so it can be styled
// separately — e.g. "Book a free call (12-week program)" → gold suffix.
function splitCtaLabel(label: string) {
  const match = label.match(/^(.*?)(\s*\([^)]+\))$/);
  if (!match) return { main: label, suffix: "" };
  return { main: match[1], suffix: match[2] };
}

// Appears once the hero CTA buttons scroll out of view.
// Watches #hero-cta-anchor placed just after the hero buttons.
export function StickyMobileCta({ ctaLabel }: { ctaLabel?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const anchor = document.getElementById("hero-cta-anchor");
    if (!anchor) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(anchor);
    return () => obs.disconnect();
  }, []);

  if (!visible) return null;

  const { main, suffix } = splitCtaLabel(ctaLabel ?? home.hero.ctaPrimary);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-hairline bg-ivory/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <Button href={businessInfo.bookingUrl} surface="light" variant="primary" fullWidth external>
        {main}
        {suffix ? <span className="text-[#ffee8c]">{suffix}</span> : null}
      </Button>
    </div>
  );
}
