export const faqPage = {
  meta: {
    title: "FAQ | Inner Strength Compass",
    description:
      "Answers to the questions women most often ask before booking. About the program, the sessions, the approach and what to expect.",
  },
  hero: {
    eyebrow: "Before you book",
    title: "Questions women often ask",
    body: "Honest answers to the things most women want to know before they take the first step.",
  },
  categories: [
    {
      title: "About the approach",
      items: [
        { q: "Will this work for me if I've already tried everything?", a: "Many women come to us after physio, osteopathy and chiropractic care. The difference here isn't another technique — it's understanding what keeps your tension going and rebuilding how you move, so the change holds after the program ends. We'll know within the first sessions whether this is the right fit, and we'll be honest about it." },
        { q: "How is this different from physiotherapy?", a: "Physiotherapy often treats one area in isolation, session by session. Here we work with the whole body — fascia, breathing, movement and biomechanics — and the goal is independence, not ongoing appointments. You leave with a routine you can keep on your own. It complements medical care; it doesn't replace it." },
        { q: "Is this a medical treatment?", a: "No. This is a movement and body-awareness program, not a medical treatment, diagnosis or cure. It works alongside the care of your doctor or specialist. If anything suggests you need medical attention, we'll always encourage you to seek it." },
      ],
    },
    {
      title: "About the sessions",
      items: [
        { q: "Will it hurt? Do I need to be fit?", a: "No. There’s no pushing through pain and no “no pain, no gain.” Everything is gentle and progressive, adapted to where your body is today. You don’t need to be fit, flexible or experienced — we start exactly where you are." },
        { q: "What happens during the discovery call?", a: "It's a free, relaxed conversation. You tell us what you're dealing with, we listen, and we help you understand whether this approach could be right for you. No pressure, no obligation — just clarity about your next step." },
        { q: "What happens during the Body Clarity Session?", a: "In 30–45 minutes we look at your posture and movement, explain clearly what's likely driving your pain, and give you a mini personalised plan. You'll also get an honest recommendation — whether the full program is right for you or not." },
        { q: "What happens during a Fascia Reset Session?", a: "A focused 30 or 60-minute session where we release tension in the body, explain what's driving it, and give you tools to use at home. It's a great way to experience the approach before committing to the full program." },
      ],
    },
    {
      title: "About results & commitment",
      items: [
        { q: "How long before I start feeling better?", a: "Many women notice less tension and more ease within the first few weeks. But the real goal is lasting change, not a quick spike of relief — so the program is built over 12 weeks to make sure the improvement stays. Everyone's body is different, and we'll track your progress honestly along the way." },
        { q: "What if I don't improve?", a: "That's exactly why we have the Progress Promise. If after the first 6 weeks you've followed the plan and feel no meaningful improvement, we'll review it together and agree on the fairest next step — including a partial refund if appropriate." },
        { q: "How much time does the home practice take?", a: "Around 20–30 minutes, 3 times a week. Everything is progressive and clearly explained. You'll never be given a long routine and told to figure it out — James builds it with you, step by step." },
        { q: "Is there a payment plan?", a: "Yes. Payment plans are available on request. Just mention it during your discovery call and we'll find something that works." },
      ],
    },
  ],
  finalCta: {
    title: "Still have questions?",
    body: "The fastest way to get an answer is a free discovery call — a relaxed conversation with no pressure.",
    primary: "Book a free discovery call",
  },
} as const;
