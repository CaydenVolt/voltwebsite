/**
 * The plate that stands in for a photograph at the head of every article and
 * on every card.
 *
 * A stock photo of a smiling installer would be a lie of a different kind
 * from the ones this site has already pulled out, and sixty-three of them
 * would be sixty-three broken links waiting to happen. So the plate is drawn
 * instead: an ordered block of printer's ornaments, ink on the deep sheet,
 * one mark in vermilion, deterministic from the article's slug. The same
 * article always draws the same plate, and no two articles draw the same one.
 *
 * Pure SVG from the server. No canvas, no fetch, nothing to hydrate.
 */

/** FNV-1a. Small, stable across runs, and good enough to scatter marks. */
function hash(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** mulberry32: one seed in, a stable stream of numbers in [0, 1) out. */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COLS = 6;
const ROWS = 4;
const CELL = 40;
const W = COLS * CELL;
const H = ROWS * CELL;

type Mark = (cx: number, cy: number, fill: string, stroke: string) => React.ReactNode;

/**
 * Nine ornaments on a 40 unit cell, drawn to a 24 unit optical square so they
 * share a weight. Strokes are 2 units, which is the hairline at this scale.
 */
const MARKS: Mark[] = [
  // Solid disc
  (cx, cy, fill) => <circle cx={cx} cy={cy} r={11} fill={fill} />,
  // Ring
  (cx, cy, _f, stroke) => <circle cx={cx} cy={cy} r={10} fill="none" stroke={stroke} strokeWidth={2} />,
  // Half disc, flat edge left
  (cx, cy, fill) => <path d={`M${cx} ${cy - 11} A11 11 0 0 1 ${cx} ${cy + 11} Z`} fill={fill} />,
  // Quarter arc, corner to corner
  (cx, cy, _f, stroke) => (
    <path
      d={`M${cx - 12} ${cy + 12} A24 24 0 0 1 ${cx + 12} ${cy - 12}`}
      fill="none"
      stroke={stroke}
      strokeWidth={2}
    />
  ),
  // Square outline
  (cx, cy, _f, stroke) => (
    <rect x={cx - 10} y={cy - 10} width={20} height={20} fill="none" stroke={stroke} strokeWidth={2} />
  ),
  // Solid bar, horizontal
  (cx, cy, fill) => <rect x={cx - 12} y={cy - 3} width={24} height={6} fill={fill} />,
  // Diagonal rule
  (cx, cy, _f, stroke) => (
    <path
      d={`M${cx - 11} ${cy + 11} L${cx + 11} ${cy - 11}`}
      fill="none"
      stroke={stroke}
      strokeWidth={2}
    />
  ),
  // Cross rules
  (cx, cy, _f, stroke) => (
    <path
      d={`M${cx - 11} ${cy} H${cx + 11} M${cx} ${cy - 11} V${cy + 11}`}
      fill="none"
      stroke={stroke}
      strokeWidth={2}
    />
  ),
  // Four dots
  (cx, cy, fill) => (
    <>
      {[-7, 7].map((dx) =>
        [-7, 7].map((dy) => <circle key={`${dx}${dy}`} cx={cx + dx} cy={cy + dy} r={3} fill={fill} />),
      )}
    </>
  ),
];

export function Plate({
  slug,
  /** Larger marks and more air, for the plate at the head of an article. */
  feature = false,
  className = "",
}: {
  slug: string;
  feature?: boolean;
  className?: string;
}) {
  const next = rng(hash(slug));
  const total = COLS * ROWS;
  // One cell in vermilion, never the first or last, so the colour lands inside
  // the block rather than on its corner.
  const accentCell = 1 + Math.floor(next() * (total - 2));
  // Roughly a third of the grid stays empty. Fewer marks on the feature plate,
  // where the block is large and a full grid reads as wallpaper.
  const density = feature ? 0.55 : 0.68;

  const cells: React.ReactNode[] = [];
  for (let i = 0; i < total; i++) {
    const roll = next();
    const pick = Math.floor(next() * MARKS.length);
    if (roll > density && i !== accentCell) continue;
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const cx = col * CELL + CELL / 2;
    const cy = row * CELL + CELL / 2;
    const accent = i === accentCell;
    const colour = accent ? "var(--color-accent)" : "var(--color-ink)";
    cells.push(<g key={i}>{MARKS[pick](cx, cy, colour, colour)}</g>);
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="presentation"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      className={`block h-full w-full bg-bone-deep ${className}`}
    >
      {cells}
    </svg>
  );
}
