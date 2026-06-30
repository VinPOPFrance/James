import Image from "next/image";
import { media, type MediaItem, type MediaKey } from "@/config/media.config";

const ratioClass: Record<string, string> = {
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "3/2": "aspect-[3/2]",
};

interface MediaSlotProps {
  /** Key from media.config.ts */
  name: MediaKey;
  className?: string;
  /** Rounded corners; pass false inside already-rounded containers */
  rounded?: boolean;
}

/**
 * Renders the registered asset. If its `src` is empty, shows a labelled
 * placeholder (prop name + ratio + alt) so the client knows exactly what
 * to drop in — no illustration is ever used as a primary visual.
 */
export function MediaSlot({ name, className = "", rounded = true }: MediaSlotProps) {
  const item = media[name] as MediaItem;
  const ratio = ratioClass[item.ratio] ?? "aspect-square";
  const round = rounded ? "rounded-2xl" : "";

  // Empty src → diagnostic placeholder
  if (!item.src) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden border-[1.5px] border-dashed border-[#C2B79F] bg-[repeating-linear-gradient(135deg,#E9E2D4,#E9E2D4_12px,#E4DCCC_12px,#E4DCCC_24px)] ${ratio} ${round} ${className}`}
        role="img"
        aria-label={`Placeholder for ${name}: ${item.alt}`}
      >
        <span className="absolute left-2.5 top-2.5 rounded-md bg-navy px-2 py-1 text-[10.5px] font-medium tracking-wide text-ivory">
          {name}
        </span>
        <div className="max-w-[80%] rounded-xl bg-ivory/90 px-4 py-3 text-center">
          <p className="text-[11.5px] leading-relaxed text-[#6E6655]">
            {item.type === "video" ? "Video + poster" : "Photo"} · {item.ratio}
            <br />
            <code className="rounded bg-[#F7EFE4] px-1.5 text-[10.5px] text-copper">
              {item.alt}
            </code>
          </p>
        </div>
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div className={`relative overflow-hidden ${ratio} ${round} ${className}`}>
        <video
          className="h-full w-full object-cover"
          poster={item.poster || undefined}
          muted
          loop
          playsInline
          controls
          preload="metadata"
        >
          <source src={item.src} type="video/mp4" />
          {item.captionsSrc && (
            <track kind="captions" srcLang="en" src={item.captionsSrc} default />
          )}
        </video>
        {item.caption && (
          <p className="absolute bottom-3 left-3 rounded-lg bg-ivory/95 px-3 py-1.5 text-xs text-inkSoft">
            {item.caption}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${ratio} ${round} ${className}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      {"caption" in item && item.caption && (
        <p className="absolute bottom-3 left-3 rounded-lg bg-ivory/95 px-3 py-1.5 text-xs text-inkSoft">
          {item.caption}
        </p>
      )}
    </div>
  );
}
