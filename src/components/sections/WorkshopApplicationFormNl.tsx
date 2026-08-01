"use client";

import { FormEvent, useState } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function WorkshopApplicationFormNl() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      q1: String(formData.get("q1") ?? "").trim(),
      q2: String(formData.get("q2") ?? "").trim(),
      q3: String(formData.get("q3") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/workshop-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setStatus("error");
        setMessage(result.message ?? "Je aanvraag kon niet worden verzonden. Probeer het opnieuw.");
        return;
      }

      setStatus("success");
      setMessage("Aanvraag succesvol verzonden.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Je aanvraag kon niet worden verzonden. Probeer het opnieuw.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-navy">Je naam</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-[10px] border border-hairline bg-ivory px-3.5 py-2.5 text-[15px] text-navy outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-navy">Je e-mail</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-[10px] border border-hairline bg-ivory px-3.5 py-2.5 text-[15px] text-navy outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-[13px] font-medium text-navy">
          Wat houdt je rugpijn je op dit moment tegen om te doen?
        </span>
        <textarea
          name="q1"
          rows={4}
          required
          className="w-full rounded-[10px] border border-hairline bg-ivory px-3.5 py-2.5 text-[15px] leading-relaxed text-navy outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-[13px] font-medium text-navy">
          Wat moet er waar zijn zodat jij gelooft dat dit voor jou kan werken?
        </span>
        <textarea
          name="q2"
          rows={4}
          required
          className="w-full rounded-[10px] border border-hairline bg-ivory px-3.5 py-2.5 text-[15px] leading-relaxed text-navy outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-[13px] font-medium text-navy">
          Kun je de komende 7 dagen 3 keer per week 20 minuten oefenen? Wat maakt dat haalbaar voor jou?
        </span>
        <textarea
          name="q3"
          rows={4}
          required
          className="w-full rounded-[10px] border border-hairline bg-ivory px-3.5 py-2.5 text-[15px] leading-relaxed text-navy outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-[11px] border border-navy bg-navy px-6 py-3 text-[15px] font-medium text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Verzenden..." : "Verstuur aanvraag"}
        </button>
      </div>

      {status === "success" ? (
        <div className="rounded-[10px] border border-sage/40 bg-sage/10 px-4 py-3">
          <p className="text-[14.5px] font-semibold text-navy">{message}</p>
          <p className="mt-1 text-[14px] leading-relaxed text-inkSoft">
            Dank je. Ik heb je antwoorden ontvangen en bekijk ze persoonlijk.
            Je ontvangt ook binnenkort een bevestigingsmail.
          </p>
        </div>
      ) : null}

      {status === "error" && message ? (
        <div className="rounded-[10px] border border-copper/40 bg-copper/10 px-4 py-3">
          <p className="text-[14px] font-medium text-copper">{message}</p>
        </div>
      ) : null}
    </form>
  );
}
