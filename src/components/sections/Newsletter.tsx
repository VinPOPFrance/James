"use client";

import { FormEvent, useState } from "react";
import { home } from "@/config/content.en";
import type { DeepLoosen } from "@/types/content";

type NewsletterContent = DeepLoosen<typeof home.newsletter>;

const MAILERLITE_ACTION =
  "https://assets.mailerlite.com/jsonp/521975/forms/185267044275455894/subscribe";

export function Newsletter({ content }: { content?: NewsletterContent }) {
  const t = content ?? home.newsletter;
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      params.append(key, String(value));
    }

    try {
      const response = await fetch(`${MAILERLITE_ACTION}?${params.toString()}`);
      const payload = (await response.json()) as {
        success?: boolean;
        errors?: {
          fields?: Record<string, string[]>;
        };
      };

      if (payload.success) {
        setSuccess(true);
        event.currentTarget.reset();
        return;
      }

      const firstFieldError = payload.errors?.fields
        ? Object.values(payload.errors.fields)[0]?.[0]
        : null;
      setError(firstFieldError ?? "Subscription failed. Please try again.");
    } catch {
      setError("Subscription failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="rounded-section bg-[#F4F6F2] px-6 py-14 md:px-12">
      <div className="mx-auto max-w-2xl rounded-section border border-hairline bg-white/70 p-8 shadow-[0_20px_50px_-30px_rgba(31,42,60,0.25)] backdrop-blur-sm md:p-10">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-sage">
          {t.eyebrow}
        </p>
        <h2 className="mb-3 font-voice text-[clamp(1.4rem,2.6vw,1.7rem)] font-medium text-navy">
          {t.title}
        </h2>
        <p className="mb-8 text-[15.5px] leading-relaxed text-inkSoft">{t.description}</p>

        <form method="get" action={MAILERLITE_ACTION} className="space-y-3" onSubmit={handleSubmit}>
          {/* Hidden MailerLite fields */}
          <input type="hidden" name="ml-submit" value="1" />
          <input type="hidden" name="anticsrf" value="true" />

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="nl-first-name" className="sr-only">
                {t.firstNamePlaceholder}
              </label>
              <input
                id="nl-first-name"
                type="text"
                name="fields[name]"
                placeholder={t.firstNamePlaceholder}
                autoComplete="given-name"
                className="w-full rounded-card border border-hairline bg-white px-4 py-3 text-[15px] text-navy transition-all duration-200 placeholder:text-muted hover:border-sage/60 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30"
              />
            </div>
            <div>
              <label htmlFor="nl-last-name" className="sr-only">
                {t.lastNamePlaceholder}
              </label>
              <input
                id="nl-last-name"
                type="text"
                name="fields[last_name]"
                placeholder={t.lastNamePlaceholder}
                autoComplete="family-name"
                className="w-full rounded-card border border-hairline bg-white px-4 py-3 text-[15px] text-navy transition-all duration-200 placeholder:text-muted hover:border-sage/60 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30"
              />
            </div>
          </div>

          <div>
            <label htmlFor="nl-email" className="sr-only">
              {t.emailPlaceholder}
            </label>
            <input
              id="nl-email"
              type="email"
              name="fields[email]"
              placeholder={t.emailPlaceholder}
              autoComplete="email"
              required
              className="w-full rounded-card border border-hairline bg-white px-4 py-3 text-[15px] text-navy transition-all duration-200 placeholder:text-muted hover:border-sage/60 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-full border border-sage bg-sage px-6 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-sage/90 sm:w-auto"
          >
            {submitting ? "Loading..." : t.buttonLabel}
          </button>

          {success ? (
            <p className="text-[13px] text-sage" role="status" aria-live="polite">
              <strong>{t.successTitle}</strong> {t.successText}
            </p>
          ) : null}

          {error ? (
            <p className="text-[13px] text-copper" role="alert" aria-live="assertive">
              {error}
            </p>
          ) : null}
        </form>

        <p className="mt-5 text-[12.5px] text-muted">{t.privacyText}</p>
      </div>
    </section>
  );
}
