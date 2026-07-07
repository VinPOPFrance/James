import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site-config";
import { getAllBlogPosts } from "@/lib/wordpress";
import { BlogPostCard } from "@/components/sections/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog | Inner Strength Compass",
  description: "Artikelen en inzichten van James Daime over beweging, fascia, houding en chronische pijn.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/nl/blog`,
    languages: {
      en: `${siteConfig.siteUrl}/blog`,
      nl: `${siteConfig.siteUrl}/nl/blog`,
      "x-default": `${siteConfig.siteUrl}/blog`,
    },
  },
};

export default async function BlogNlPage() {
  const posts = await getAllBlogPosts();

  return (
    <PageLayout locale="nl">
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-16 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">Kennisbank</p>
            <h1 className="mb-5 font-voice text-[clamp(1.8rem,3.4vw,2.4rem)] font-medium leading-snug text-navy">Blog</h1>
            <p className="text-[16px] leading-relaxed text-inkSoft">
              Praktische artikelen over fascia, beweging, houding en duurzaam herstel.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-6 py-10 md:px-8 md:py-12">
          {posts.length === 0 ? (
            <p className="text-center text-[15px] text-muted">Er zijn geen artikelen gevonden via de WordPress API.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} locale="nl" />
              ))}
            </div>
          )}
        </section>
      </Reveal>
    </PageLayout>
  );
}
