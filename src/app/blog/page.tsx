import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site-config";
import { getAllBlogPosts } from "@/lib/wordpress";
import { BlogPostCard } from "@/components/sections/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog | Inner Strength Compass",
  description: "Articles and insights from James Daime on movement, fascia, posture, and chronic pain.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/blog`,
    languages: {
      en: `${siteConfig.siteUrl}/blog`,
      nl: `${siteConfig.siteUrl}/nl/blog`,
      "x-default": `${siteConfig.siteUrl}/blog`,
    },
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <PageLayout>
      <Reveal>
        <section className="rounded-section border border-hairline bg-ivory px-8 py-16 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.09em] text-copper">Resources</p>
            <h1 className="mb-5 font-voice text-[clamp(1.8rem,3.4vw,2.4rem)] font-medium leading-snug text-navy">Blog</h1>
            <p className="text-[16px] leading-relaxed text-inkSoft">
              Read practical articles about fascia, movement, posture and long-term recovery.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-section border border-hairline bg-white px-6 py-10 md:px-8 md:py-12">
          {posts.length === 0 ? (
            <p className="text-center text-[15px] text-muted">No articles were found on the WordPress API.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </Reveal>
    </PageLayout>
  );
}
