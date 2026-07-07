import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site-config";
import { getBlogPostBySlug } from "@/lib/wordpress";

type Params = {
  slug: string;
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Artikel niet gevonden | Inner Strength Compass",
    };
  }

  return {
    title: `${post.titleText} | Blog | Inner Strength Compass`,
    description: post.excerptText,
    alternates: {
      canonical: `${siteConfig.siteUrl}/nl/blog/${post.slug}`,
      languages: {
        en: `${siteConfig.siteUrl}/blog/${post.slug}`,
        nl: `${siteConfig.siteUrl}/nl/blog/${post.slug}`,
        "x-default": `${siteConfig.siteUrl}/blog/${post.slug}`,
      },
    },
  };
}

export default async function BlogArticleNlPage({ params }: { params: Params }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <PageLayout locale="nl">
      <Reveal>
        <article className="overflow-hidden rounded-section border border-hairline bg-white">
          {post.featuredImageUrl && (
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={post.featuredImageUrl}
                alt={post.titleText}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          )}

          <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-14">
            <Link href="/nl/blog" className="mb-6 inline-block text-[14px] text-muted transition-colors hover:text-navy">
              ← Terug naar Blog
            </Link>
            <p className="mb-3 text-[12px] uppercase tracking-[0.09em] text-copper">{formattedDate}</p>
            <h1
              className="mb-8 font-voice text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight text-navy"
              dangerouslySetInnerHTML={{ __html: post.titleHtml }}
            />
            <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
        </article>
      </Reveal>
    </PageLayout>
  );
}
