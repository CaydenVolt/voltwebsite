import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllPages, productHref } from "@/lib/content/products";
import {
  CATEGORIES,
  authorHref,
  categoryHref,
  getPosts,
  getPostsByCategory,
  lastModified,
  pageHref,
  postHref,
  totalPages,
} from "@/lib/content/blog";

/**
 * Every URL worth indexing, and only those.
 *
 * Marketing pages, one entry per product with a page, then the blog: the
 * index and its numbered pages, the seven cluster hubs, the author, and all
 * sixty-three articles. Articles carry their own revision date rather than
 * today's, so a crawler is told what actually changed.
 *
 * The company pages that are still placeholders stay out, and robots.ts
 * blocks them too: a thin page that gets indexed is worse than no page.
 * /partners is in, because it now lists the platforms the system runs on.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  const posts = getPosts();
  const blogUpdated = new Date(`${lastModified()}T00:00:00Z`);

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/our-process`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/partners`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/dpa`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ...getAllPages().map((p) => ({
      url: `${base}${productHref(p.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      // The plan's products first: they are what the site is selling.
      priority: p.addon ? 0.6 : 0.7,
    })),

    // The blog index, then its numbered pages. Each one self-canonicals, so
    // each one is a URL we want crawled rather than folded into page one.
    { url: `${base}/blog`, lastModified: blogUpdated, changeFrequency: "weekly", priority: 0.8 },
    ...Array.from({ length: totalPages() - 1 }, (_, i) => ({
      url: `${base}${pageHref(i + 2)}`,
      lastModified: blogUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })),

    // The cluster hubs: the page each subject's nine articles point up to.
    ...CATEGORIES.map((c) => {
      const newest = getPostsByCategory(c.id)[0];
      return {
        url: `${base}${categoryHref(c)}`,
        lastModified: new Date(`${newest?.updated ?? newest?.published ?? lastModified()}T00:00:00Z`),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    }),

    { url: `${base}${authorHref}`, lastModified: blogUpdated, changeFrequency: "monthly", priority: 0.4 },

    ...posts.map((p) => ({
      url: `${base}${postHref(p.slug)}`,
      lastModified: new Date(`${p.updated ?? p.published}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      // The seven cluster hubs are the pages built to rank hardest.
      priority: p.pillar ? 0.8 : 0.6,
    })),
  ];
}
