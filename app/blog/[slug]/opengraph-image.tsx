import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";
import { AUTHOR, formatDate, getCategory, getPost, getPosts } from "@/lib/content/blog";

/**
 * The share card for one article. Same ink and vermilion as the site's own
 * card, with the article's headline set large and the byline under it, so a
 * link pasted into a chat reads as an article rather than as a homepage.
 *
 * System font on purpose: ImageResponse cannot reach the site's webfonts
 * without shipping the font binaries, and a card that fails to render is
 * worse than one set in a grotesque that is merely close.
 */
export const alt = "Article on the Volt blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

/** Long headlines step down rather than overflow the card. */
function headlineSize(chars: number): number {
  if (chars <= 34) return 86;
  if (chars <= 52) return 72;
  if (chars <= 70) return 62;
  return 54;
}

export default async function BlogOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? SITE.tagline;
  const category = post ? getCategory(post.category).name : "Resources";
  const date = post ? formatDate(post.published) : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#171410",
          color: "#f2ede3",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 6, background: "#e4572e", display: "flex" }} />
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#a9a296" }}>
            {category.toUpperCase()}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: headlineSize(title.length),
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.08,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #3a352d",
            paddingTop: 28,
            fontSize: 26,
            color: "#a9a296",
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ display: "flex", color: "#f2ede3" }}>{AUTHOR.name}</div>
            <div style={{ display: "flex" }}>{date}</div>
          </div>
          <div style={{ display: "flex", fontWeight: 800, color: "#f2ede3", letterSpacing: -1 }}>
            {SITE.name}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
