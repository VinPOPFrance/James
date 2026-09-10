"use client";

import { useEffect, useRef } from "react";
import { WEBINAR_FORM_EMBED_HTML } from "@/config/webinarFormEmbedHtml";

/**
 * Renders the MailerLite webinar form embed exactly as provided, unmodified.
 *
 * React's dangerouslySetInnerHTML does not execute <script> tags found in
 * the injected markup, so on mount we re-create and re-insert each one —
 * this is what makes the form actually submit to MailerLite, show the
 * loading state, and swap in the success message. The HTML/CSS/JS content
 * itself is never rewritten, only re-inserted so the browser runs it.
 */
export function MailerLiteWebinarForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const container = containerRef.current;
    if (!container) return;

    const scripts = Array.from(container.querySelectorAll("script"));
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: WEBINAR_FORM_EMBED_HTML }}
    />
  );
}
