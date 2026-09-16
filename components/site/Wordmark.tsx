import { SITE } from "@/lib/site";

/**
 * The brand lockup: the V mark, then the name in the display face.
 *
 * `mark` is resolved from `public/` in the layout, so the site reads as
 * type-only until the logo file is saved and gains the mark the moment it is,
 * with no broken image in between.
 *
 * The mark is painted with a CSS mask rather than shown as a picture, so it
 * takes the surface's own foreground colour: ink on paper, bone on an ink
 * slab. That works from any source file with transparency around the shape.
 * A file with a solid white background instead falls back to `multiply`,
 * which hides the white on paper.
 */
export function Wordmark({
  mark,
  masked,
  className = "",
}: {
  mark: string | null;
  /** True when the file has transparency, so the mask can recolour it. */
  masked?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 font-display text-wordmark text-fg ${className}`}>
      {mark &&
        (masked ? (
          <span
            aria-hidden
            className="size-7 shrink-0 bg-current"
            style={{
              maskImage: `url("${mark}")`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={mark} alt="" aria-hidden className="size-7 shrink-0 object-contain mix-blend-multiply" />
        ))}
      {SITE.name}
    </span>
  );
}
