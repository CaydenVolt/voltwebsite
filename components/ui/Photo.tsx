import Image from "next/image";

/**
 * A photograph shown as it was taken: colour, sharp, cropped by CSS to the
 * frame it sits in. The site's other photography runs through DitheredImage;
 * this is for the people, where a halftone reads as a bad scan rather than as
 * texture. Optimisation, sizing and lazy loading come from next/image, which
 * matters because these are phone photos measured in megabytes.
 *
 * The parent is the frame: give it an aspect and any shape (a slant, a
 * circle), and the photo fills it.
 */
export function Photo({
  src,
  alt,
  aspect,
  position = { x: 50, y: 50 },
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  /** CSS aspect ratio for the frame, e.g. "16 / 9". */
  aspect?: string;
  /** Focal point as object-position percentages: which part survives the crop. */
  position?: { x: number; y: number };
  /** Rendered width at each breakpoint, so the right file size is served. */
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      style={aspect ? { aspectRatio: aspect } : undefined}
      className={`relative overflow-hidden bg-bone-deep ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: `${position.x}% ${position.y}%` }}
      />
    </div>
  );
}
