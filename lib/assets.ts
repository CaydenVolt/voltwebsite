import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

/**
 * Server-only. Finds a file in `public/` by name, ignoring the extension, so a
 * photo saved as .png, .jpg or .webp all resolve without editing content. Also
 * tolerates the double extension Windows adds when saving "name.png" as PNG.
 *
 * Returns the public path, or null when nothing has been saved yet, which lets
 * a component fall back rather than render a broken image.
 */
export function resolvePublicAsset(src: string): string | null {
  if (existsSync(path.join(process.cwd(), "public", src))) return src;
  const dir = path.dirname(src);
  const base = path.basename(src, path.extname(src)).toLowerCase();
  try {
    const match = readdirSync(path.join(process.cwd(), "public", dir)).find((f) => {
      if (!/\.(gif|png|jpe?g|webp|avif)$/i.test(f)) return false;
      const name = path.basename(f, path.extname(f)).toLowerCase();
      return name === base || name === `${base}${path.extname(src).toLowerCase()}`;
    });
    // dirname("/x.png") is "/", so joining naively yields "//x.png", which a
    // browser reads as a protocol-relative host rather than a path.
    return match ? `${dir === "/" || dir === "." ? "" : dir}/${match}` : null;
  } catch {
    return null;
  }
}

/**
 * The brand mark, if it has been saved. `masked` says whether the file can be
 * recoloured by a CSS mask, which needs transparency around the shape: SVG
 * always can, PNG when its colour type carries an alpha channel, JPEG never.
 */
export function getLogo(): { src: string; masked: boolean } | null {
  const src = resolvePublicAsset("/volt-mark.svg") ?? resolvePublicAsset("/volt-mark.png");
  if (!src) return null;
  if (src.endsWith(".svg")) return { src, masked: true };
  try {
    const buf = readFileSync(path.join(process.cwd(), "public", src));
    // PNG colour type sits at byte 25: 4 and 6 carry alpha, 3 is a palette
    // that may carry a tRNS chunk.
    const colourType = buf.length > 26 && buf.toString("ascii", 1, 4) === "PNG" ? buf[25] : -1;
    const alpha =
      colourType === 4 || colourType === 6 || (colourType === 3 && buf.includes(Buffer.from("tRNS")));
    return { src, masked: alpha };
  } catch {
    return { src, masked: false };
  }
}
