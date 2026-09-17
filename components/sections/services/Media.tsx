import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import { Clip } from "@/components/sections/services/Clip";
import { DitheredImage } from "@/components/ui/DitheredImage";
import type { ProductMedia } from "@/lib/content/products";
import {
  AdsResult,
  FollowUpTimeline,
  InboxList,
  NurtureThread,
  ReactivationLog,
  ReferralLog,
  ReviewLog,
  SearchResult,
  TextBackTranscript,
} from "@/components/sections/services/Fragments";

/**
 * Server-only: this module reads public/ to decide whether a product's real
 * screenshot or GIF has been dropped in yet. Import it from server components
 * only.
 *
 * The file is matched by name, not by extension, so saving the shot as .png,
 * .jpg, .webp or .gif all work without touching the content file.
 */
function resolveAsset(src: string): string | null {
  const dir = path.dirname(src);
  const base = path.basename(src, path.extname(src)).toLowerCase();
  const folder = path.join(process.cwd(), "public", dir);
  if (existsSync(path.join(process.cwd(), "public", src))) return src;
  try {
    const match = readdirSync(folder).find(
      (f) => path.basename(f, path.extname(f)).toLowerCase() === base && /\.(gif|png|jpe?g|webp|avif)$/i.test(f),
    );
    return match ? `${dir}/${match}` : null;
  } catch {
    return null;
  }
}

/**
 * Intrinsic size straight off the file, so a lazy screenshot reserves its
 * height instead of collapsing to nothing until it loads. PNG carries it in
 * the IHDR chunk; JPEG in the first SOF marker. Anything else renders without
 * the hint.
 */
function imageSize(file: string): { width: number; height: number } | null {
  try {
    const buf = readFileSync(file);
    if (buf.length > 24 && buf.toString("ascii", 1, 4) === "PNG") {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }
    if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
      let i = 2;
      while (i + 9 < buf.length) {
        if (buf[i] !== 0xff) {
          i += 1;
          continue;
        }
        const marker = buf[i + 1];
        // SOF0..SOF15, skipping the four that are not frame headers
        if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
          return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
        }
        i += 2 + buf.readUInt16BE(i + 2);
      }
    }
  } catch {
    /* fall through */
  }
  return null;
}

/**
 * A screenshot, shown bare: no frame, no padding, no ground of its own. The
 * recording it sits beside is a real interface, and a border around it only
 * competes with the borders inside it.
 */
function Shot({ src, alt }: { src: string; alt: string }) {
  const size = imageSize(path.join(process.cwd(), "public", src));
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt}
      width={size?.width}
      height={size?.height}
      loading="lazy"
      decoding="async"
      className="block h-auto w-full"
    />
  );
}

/**
 * Phone-shaped media is held to a phone's width instead of filling the column:
 * these assets are 648 by 1388, so letting one fill a wide column would make it
 * taller than the viewport.
 *
 * It is pushed to the edge nearest the text rather than centred. Centred, a
 * 448px image in a wide column put its slack between itself and the copy, which
 * is what made the pair read as two disconnected blocks with a canyon between
 * them. The slack now falls on the page edge, where it is breathing room.
 */
function Frame({
  portrait,
  flip,
  children,
}: {
  portrait?: boolean;
  flip?: boolean;
  children: ReactNode;
}) {
  if (!portrait) return <>{children}</>;
  return (
    <div className={`mx-auto w-full max-w-sm lg:max-w-md ${flip ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"}`}>
      {children}
    </div>
  );
}

/**
 * A product's media: a real asset, a dithered photo plate, or a type-only
 * interface fragment. `flip` mirrors the photo plate's slant for plates on
 * the left.
 */
export function ProductMediaView({ media, flip = false }: { media: ProductMedia; flip?: boolean }) {
  switch (media.kind) {
    case "shot": {
      const resolved = resolveAsset(media.src);
      if (!resolved) {
        return media.fallback ? <ProductMediaView media={media.fallback} flip={flip} /> : null;
      }
      return (
        <Frame portrait={media.portrait} flip={flip}>
          <Shot src={resolved} alt={media.alt} />
        </Frame>
      );
    }
    case "clip": {
      if (!existsSync(path.join(process.cwd(), "public", media.src))) {
        return media.fallback ? <ProductMediaView media={media.fallback} flip={flip} /> : null;
      }
      return (
        <Frame portrait={media.portrait} flip={flip}>
          <Clip
            src={media.src}
            poster={media.poster}
            alt={media.alt}
            width={media.width}
            height={media.height}
          />
        </Frame>
      );
    }
    case "image":
      return (
        <DitheredImage
          src={media.src}
          alt={media.alt}
          slant={flip ? "right" : "left"}
          className="aspect-strip lg:aspect-plate"
        />
      );
    case "textback":
      return <TextBackTranscript />;
    case "followup":
      return <FollowUpTimeline />;
    case "inbox":
      return <InboxList />;
    case "reviews":
      return <ReviewLog />;
    case "search":
      return <SearchResult />;
    case "nurture":
      return <NurtureThread />;
    case "reactivation":
      return <ReactivationLog />;
    case "referrals":
      return <ReferralLog />;
    case "ads":
      return <AdsResult />;
  }
}
