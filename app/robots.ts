import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Everything is crawlable. The only exclusions are Next's own internals and
 * /press, which is still a placeholder and is also kept out of the sitemap: a
 * thin page that gets indexed is worse than no page.
 *
 * /partners came off this list when it stopped being a placeholder and started
 * listing the platforms the system runs on. /careers came off it on 2026-09-19
 * because the page was deleted rather than filled: nothing links to it and
 * nothing serves it, so there is nothing left to disallow.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/press"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
