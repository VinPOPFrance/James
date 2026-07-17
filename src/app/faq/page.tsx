import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import { FaqClient } from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ | Inner Strength Compass · Rotterdam",
  description: "Answers to the most common questions before you book, about the programme, sessions, approach, and what to expect.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/faq`,
    languages: {
      en: `${siteConfig.siteUrl}/faq`,
      nl: `${siteConfig.siteUrl}/nl/faq`,
      "x-default": `${siteConfig.siteUrl}/faq`,
    },
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
