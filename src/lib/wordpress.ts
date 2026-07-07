import localPosts from "@/data/blog-posts.json";

export type BlogPost = {
  id: number;
  slug: string;
  date: string;
  titleHtml: string;
  titleText: string;
  excerptHtml: string;
  excerptText: string;
  contentHtml: string;
  featuredImageUrl?: string;
};

const blogPosts = localPosts as BlogPost[];

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}
