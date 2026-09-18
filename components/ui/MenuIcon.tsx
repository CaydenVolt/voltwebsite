import type { ReactNode } from "react";

/**
 * Marks for the About menu, drawn in the same hand as the product marks:
 * 24 grid, 1.5 hairline stroke, square caps, mitred joins, no fill, no
 * container. Here the mark sits in the column the product menu gives its
 * numeral, so it is the row's marker and takes the accent on hover.
 */
const GLYPHS: Record<string, ReactNode> = {
  /* Two people */
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.4 14.6c1.9.8 3.1 2.5 3.1 4.9" />
    </>
  ),
  /* A line that climbs: how the work goes */
  process: (
    <>
      <path d="M3.5 16.5 8 12l3.5 3.5L20.5 6.5" />
      <path d="M16.5 6.5h4v4" />
    </>
  ),
  /* Crossed tools */
  trades: (
    <>
      <path d="M14.5 3.5 20.5 9.5 17 13 11 7z" />
      <path d="M11 7 3.5 14.5v6h6L17 13" />
    </>
  ),
  /* Two rings, joined */
  partners: (
    <>
      <circle cx="9" cy="12" r="5.5" />
      <circle cx="15" cy="12" r="5.5" />
    </>
  ),
  /* Envelope */
  contact: (
    <>
      <path d="M3 5.5h18v13H3z" />
      <path d="m3 5.5 9 7 9-7" />
    </>
  ),
  /* Newspaper */
  press: (
    <>
      <path d="M3.5 4.5h13v15h-13z" />
      <path d="M16.5 9h4v8.5a2 2 0 0 1-4 0" />
      <path d="M6.5 8h7M6.5 11.5h7M6.5 15h4.5" />
    </>
  ),
};

export function MenuIcon({ name, className = "size-5" }: { name: string; className?: string }) {
  const glyph = GLYPHS[name];
  if (!glyph) return null;
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={`shrink-0 ${className}`}
    >
      {glyph}
    </svg>
  );
}
