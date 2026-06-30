/**
 * Media registry — every photo and video the site uses, in one place.
 * To swap an asset: drop your file in /public/media and change the `src` line below.
 * Nothing else in the codebase needs to touch image paths.
 *
 * type "image" → renders <Image> (or fallback illustration if src is empty)
 * type "video" → renders <video> with poster, muted, playsInline; optional captions track
 */

export type MediaItem = {
  type: "image" | "video";
  src: string; // "" = not yet provided → MediaSlot shows a labelled placeholder
  poster?: string; // video poster frame
  alt: string;
  caption?: string;
  ratio: "1/1" | "4/5" | "3/4" | "16/9" | "3/2";
  captionsSrc?: string; // .vtt track for video accessibility
};

export const media = {
  heroImage: {
    type: "image",
    src: "", // e.g. "/media/hero-james-studio.jpg"
    alt: "Woman moving calmly, free of tension",
    ratio: "4/5",
  },
  presentationVideo: {
    type: "video",
    src: "", // e.g. "/media/presentation.mp4"
    poster: "", // e.g. "/media/presentation-poster.jpg"
    alt: "A calm look at a session in the studio",
    ratio: "16/9",
    captionsSrc: "", // e.g. "/media/presentation.en.vtt"
  },
  movementClip: {
    type: "video",
    src: "",
    poster: "",
    alt: "Slow guided stretch",
    ratio: "1/1",
  },
  jamesPortrait: {
    type: "image",
    src: "",
    alt: "James, movement guide",
    ratio: "3/4",
  },
  // Optional per-testimonial photos (round). Leave src empty to show initials avatar.
  testimonialAnneke: { type: "image", src: "", alt: "Anneke", ratio: "1/1" },
  testimonialMargriet: { type: "image", src: "", alt: "Margriet", ratio: "1/1" },
  testimonialSaskia: { type: "image", src: "", alt: "Saskia", ratio: "1/1" },
} satisfies Record<string, MediaItem>;

export type MediaKey = keyof typeof media;
