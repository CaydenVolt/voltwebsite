import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Everything is crawlable. The only exclusions are Next's own internals and the
 * company pages that are still placeholders, which are also kept out of the
 * sitemap: a thin page that gets indexed is worse than no page.
 *
 * /partners came off this list when it stopped being a placeholder and started
 * listing the platforms the system runs on.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/careers", "/press"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
