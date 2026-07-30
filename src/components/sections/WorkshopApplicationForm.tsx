"use client";

import { FormEvent, useState } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function WorkshopApplicationForm() {
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
        setMessage(result.message ?? "Your application could not be sent. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Application sent successfully.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Your application could not be sent. Please try again.");
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
          <span className="mb-1.5 block text-[13px] font-medium text-navy">Your name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-[10px] border border-hairline bg-ivory px-3.5 py-2.5 text-[15px] text-navy outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-navy">Your email</span>
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
          What&apos;s the biggest frustration about living with lower back pain right now? What has it stopped you from doing?
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
          What&apos;s your biggest concern about the Pelvic Engine Reset working for you? What would need to be true for you to believe this could actually help?
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
          Are you willing to practice 20 minutes, 3x per week for the next 7 days? What would make this realistic for you?
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
          {status === "loading" ? "Sending..." : "Send Application"}
        </button>
      </div>

      {status === "success" ? (
        <div className="rounded-[10px] border border-sage/40 bg-sage/10 px-4 py-3">
          <p className="text-[14.5px] font-semibold text-navy">{message}</p>
          <p className="mt-1 text-[14px] leading-relaxed text-inkSoft">
            Thank you. I received your answers and will review them personally.
            You should also receive a confirmation email shortly.
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
