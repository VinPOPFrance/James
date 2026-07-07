import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/wordpress";

interface BlogPostCardProps {
  post: BlogPost;
  locale?: "en" | "nl";
}

export function BlogPostCard({ post, locale = "en" }: BlogPostCardProps) {
  const href = locale === "nl" ? `/nl/blog/${post.slug}` : `/blog/${post.slug}`;
  const formattedDate = new Date(post.date).toLocaleDateString(locale === "nl" ? "nl-NL" : "en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="card-lift overflow-hidden rounded-card border border-hairline bg-white">
      <Link href={href} className="block h-full">
        {post.featuredImageUrl ? (
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={post.featuredImageUrl}
              alt={post.titleText}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-sand/50 to-ivory">
            <span className="text-[13px] uppercase tracking-[0.08em] text-muted">Blog</span>
          </div>
        )}

        <div className="space-y-4 p-6">
          <p className="text-[12px] uppercase tracking-[0.08em] text-copper">{formattedDate}</p>
          <h2 className="font-voice text-[1.25rem] leading-tight text-navy">{post.titleText}</h2>
          <p className="line-clamp-3 text-[14.5px] leading-relaxed text-inkSoft">{post.excerptText}</p>
          <p className="pt-1 text-[14px] font-medium text-navy">
            {locale === "nl" ? "Lees artikel" : "Read article"} →
          </p>
        </div>
      </Link>
    </article>
  );
}
