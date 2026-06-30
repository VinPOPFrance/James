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
    src: "/media/heroImage.jpg",
    alt: "James guiding a client through a movement session in the studio",
    ratio: "4/5",
  },
  presentationVideo: {
    type: "video",
    src: "/media/presentationVideo.mp4",
    poster: "",
    alt: "A calm look at a session in the studio",
    ratio: "16/9",
    captionsSrc: "",
  },
  movementClip: {
    type: "video",
    src: "/media/movementClip.mp4",
    poster: "",
    alt: "Guided movement session with James",
    ratio: "1/1",
  },
  jamesPortrait: {
    type: "image",
    src: "/media/jamesPortrait.png",
    alt: "James Daime in his Rotterdam studio",
    ratio: "3/4",
  },
  // Optional per-testimonial photos (round). Leave src empty to show initials avatar.
  testimonialDanielle: { type: "image", src: "", alt: "Danielle Hibbert", ratio: "1/1" },
  testimonialShara: { type: "image", src: "", alt: "Shara Brennan", ratio: "1/1" },
  testimonialIbrahim: { type: "image", src: "", alt: "Ibrahim Mikati", ratio: "1/1" },
} satisfies Record<string, MediaItem>;

export type MediaKey = keyof typeof media;
