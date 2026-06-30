"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { home } from "@/config/content.en";

// Appears once the hero CTA buttons scroll out of view.
// Watches #hero-cta-anchor placed just after the hero buttons.
export function StickyMobileCta() {
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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-hairline bg-ivory/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <Button href="/book" surface="light" variant="primary" fullWidth>
        {home.hero.ctaPrimary}
      </Button>
    </div>
  );
}
