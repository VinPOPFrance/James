import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const WP_API_BASE = "https://jamesdaime.com/wp-json/wp/v2";
const POSTS_PER_PAGE = 100;
const mediaOutDir = path.join(projectRoot, "public", "media", "blog");
const jsonOutFile = path.join(projectRoot, "src", "data", "blog-posts.json");

function stripHtml(input) {
  return input.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function slugify(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function extensionFromUrl(url) {
  try {
    const parsed = new URL(url);
    const ext = path.extname(parsed.pathname);
    if (ext && ext.length <= 6) {
      return ext.toLowerCase();
    }
  } catch {
    // Ignore and fallback.
  }
  return ".jpg";
}

async function fetchPostsPage(page) {
  const url = `${WP_API_BASE}/posts?per_page=${POSTS_PER_PAGE}&page=${page}&_embed=wp:featuredmedia`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch WordPress posts: ${res.status} ${res.statusText}`);
  }

  const totalPagesHeader = res.headers.get("X-WP-TotalPages");
  const totalPages = totalPagesHeader ? Number(totalPagesHeader) : 1;
  const posts = await res.json();

  return { posts, totalPages };
}

async function fetchAllPosts() {
  const first = await fetchPostsPage(1);
  const all = [...first.posts];

  for (let page = 2; page <= first.totalPages; page += 1) {
    const next = await fetchPostsPage(page);
    all.push(...next.posts);
  }

  return all;
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadToFile(url, targetFilePath) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download media ${url}: ${res.status} ${res.statusText}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  await writeFile(targetFilePath, Buffer.from(arrayBuffer));
}

async function mirrorImage(url, baseName, cacheMap) {
  if (!url) {
    return undefined;
  }

  if (cacheMap.has(url)) {
    return cacheMap.get(url);
  }

  const ext = extensionFromUrl(url);
  const safeBase = slugify(baseName) || "image";
  const fileName = `${safeBase}${ext}`;
  const targetFilePath = path.join(mediaOutDir, fileName);
  const publicUrl = `/media/blog/${fileName}`;

  const exists = await fileExists(targetFilePath);
  if (!exists) {
    try {
      await downloadToFile(url, targetFilePath);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`Skipping media download for ${url}: ${message}`);
      return undefined;
    }
  }

  cacheMap.set(url, publicUrl);
  return publicUrl;
}

function extractImageUrls(html) {
  const urls = [];
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match = regex.exec(html);

  while (match) {
    urls.push(match[1]);
    match = regex.exec(html);
  }

  return urls;
}

function sanitizeContentHtml(html) {
  let output = html;

  output = output.replace(/<script[\s\S]*?<\/script>/gi, "");
  output = output.replace(/<style[\s\S]*?<\/style>/gi, "");
  output = output.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  output = output.replace(/<iframe[\s\S]*?<\/iframe>/gi, "");
  output = output.replace(/<form[\s\S]*?<\/form>/gi, "");
  output = output.replace(/<button[\s\S]*?<\/button>/gi, "");
  output = output.replace(/<input[^>]*>/gi, "");

  // Remove WordPress form wrappers and helper containers often left behind.
  output = output.replace(/<[^>]*class=["'][^"']*wpforms[^"']*["'][^>]*>/gi, "");

  return output;
}

async function main() {
  await mkdir(path.dirname(jsonOutFile), { recursive: true });
  await mkdir(mediaOutDir, { recursive: true });

  const imageCache = new Map();
  const wpPosts = await fetchAllPosts();

  const transformedPosts = [];

  for (const post of wpPosts) {
    const titleHtml = post.title?.rendered ?? "";
    const excerptHtml = post.excerpt?.rendered ?? "";
    let contentHtml = post.content?.rendered ?? "";

    const featuredUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const featuredImageUrl = await mirrorImage(featuredUrl, `${post.slug}-${post.id}-featured`, imageCache);

    const contentImages = extractImageUrls(contentHtml);
    let imageIndex = 1;

    for (const imageUrl of contentImages) {
      const localImageUrl = await mirrorImage(imageUrl, `${post.slug}-${post.id}-content-${imageIndex}`, imageCache);
      if (localImageUrl) {
        contentHtml = contentHtml.split(imageUrl).join(localImageUrl);
      }
      imageIndex += 1;
    }

    // Guarantee runtime independence: strip any image tag that still points to an external URL.
    contentHtml = contentHtml.replace(/<img[^>]+src=["']https?:\/\/[^"']+["'][^>]*>/gi, "");
    contentHtml = sanitizeContentHtml(contentHtml);

    transformedPosts.push({
      id: post.id,
      slug: post.slug,
      date: post.date,
      titleHtml,
      titleText: stripHtml(titleHtml),
      excerptHtml,
      excerptText: stripHtml(excerptHtml),
      contentHtml,
      featuredImageUrl,
    });
  }

  transformedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  await writeFile(jsonOutFile, `${JSON.stringify(transformedPosts, null, 2)}\n`, "utf8");

  console.log(`Exported ${transformedPosts.length} posts to ${path.relative(projectRoot, jsonOutFile)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
