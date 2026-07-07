import { cache } from "react";

const WP_API_BASE = "https://jamesdaime.com/wp-json/wp/v2";
const POSTS_PER_PAGE = 100;

type WpRendered = {
  rendered: string;
};

type WpEmbeddedMedia = {
  source_url?: string;
};

type WpPostApi = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  _embedded?: {
    [key: string]: WpEmbeddedMedia[] | undefined;
    "wp:featuredmedia"?: WpEmbeddedMedia[];
  };
};

export type BlogPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  titleHtml: string;
  titleText: string;
  excerptHtml: string;
  excerptText: string;
  contentHtml: string;
  featuredImageUrl?: string;
};

function stripHtml(input: string): string {
  return input.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function toBlogPost(post: WpPostApi): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    date: post.date,
    link: post.link,
    titleHtml: post.title.rendered,
    titleText: stripHtml(post.title.rendered),
    excerptHtml: post.excerpt.rendered,
    excerptText: stripHtml(post.excerpt.rendered),
    contentHtml: post.content.rendered,
    featuredImageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
  };
}

async function fetchWpPostsPage(page: number): Promise<{ posts: BlogPost[]; totalPages: number }> {
  const url = `${WP_API_BASE}/posts?per_page=${POSTS_PER_PAGE}&page=${page}&_embed=wp:featuredmedia`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`WordPress API request failed: ${res.status} ${res.statusText}`);
  }

  const totalPagesHeader = res.headers.get("X-WP-TotalPages");
  const totalPages = totalPagesHeader ? Number(totalPagesHeader) : 1;

  const data = (await res.json()) as WpPostApi[];
  return {
    posts: data.map(toBlogPost),
    totalPages,
  };
}

export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const firstPage = await fetchWpPostsPage(1);
  const allPosts = [...firstPage.posts];

  for (let page = 2; page <= firstPage.totalPages; page += 1) {
    const nextPage = await fetchWpPostsPage(page);
    allPosts.push(...nextPage.posts);
  }

  allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return allPosts;
});

export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
});
