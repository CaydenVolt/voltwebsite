import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

/**
 * The card every share and every preview shows. One file at the app root, so
 * every page inherits it unless it declares its own.
 *
 * Built in the brand's ink and bone with the vermilion rule, but in a system
 * font: ImageResponse cannot reach the site's webfonts without shipping the
 * font binaries, and a card that fails to render is worse than one set in a
 * grotesque that is merely close.
 */
export const alt = `${SITE.name}: ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#a9a296" }}>
            {SITE.taglineShort.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ display: "flex", fontSize: 132, fontWeight: 800, letterSpacing: -6, lineHeight: 1 }}
          >
            {SITE.name}
          </div>
          <div style={{ display: "flex", fontSize: 46, lineHeight: 1.25, marginTop: 24, maxWidth: 900 }}>
            {`${SITE.tagline}.`}
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#a9a296" }}>
          <div style={{ display: "flex" }}>One subscription</div>
          <div style={{ display: "flex" }}>No contracts</div>
          <div style={{ display: "flex" }}>{"Live in 7–10 days"}</div>
        </div>
      </div>
    ),
    size,
  );
}
