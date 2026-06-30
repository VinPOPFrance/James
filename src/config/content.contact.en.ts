export const contact = {
  meta: {
    title: "Book or Contact | Inner Strength Compass",
    description:
      "Book a free discovery call, a fascia reset session, or just get in touch. No pressure, no obligation.",
  },
  hero: {
    eyebrow: "Get in touch",
    title: "Let's start with a conversation.",
    body: "The fastest way to see if this is right for you is a free 20-minute discovery call. No sales pitch — just an honest conversation about your situation.",
  },
  options: [
    {
      title: "Free discovery call",
      sub: "20 minutes · Free",
      body: "Tell us what's going on. We'll listen, explain whether this approach could help you, and answer any questions. No obligation.",
      cta: "Book a free call",
      href: "/book",
      primary: true,
    },
    {
      title: "Fascia Reset Session",
      sub: "30 or 60 minutes · €49–€90",
      body: "A hands-on session to release tension and understand what's happening in your body — with no commitment to the full program.",
      cta: "Book a session",
      href: "/fascia-reset-session",
      primary: false,
    },
    {
      title: "Workshop enquiry",
      sub: "Groups & organisations",
      body: "Interested in a workshop for your team or studio? Get in touch to discuss format, dates and pricing.",
      cta: "Email about workshops",
      href: "mailto:info@crystalclear.nl",
      primary: false,
    },
  ],
  info: {
    eyebrow: "Studio details",
    location: "Netherlands (exact location shared on booking)",
    languages: "Sessions in English and Dutch",
    response: "We aim to reply within one working day.",
    disclaimer: "This is a movement and body-awareness practice. It is not a medical service and does not replace the care of your doctor or specialist.",
  },
} as const;
