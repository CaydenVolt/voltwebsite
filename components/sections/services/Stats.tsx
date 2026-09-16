import type { Stat } from "@/lib/content/products";

/**
 * The three figures that sit with the media. Phones: stacked rows, figure
 * left, label right, hairline between. From sm: a three-up ruled band under
 * the plate, vertical hairlines between the columns, the way a figure caption
 * is set in print. Values are short by contract (see Stat in products.ts).
 */
export function ProductStats({ stats, className = "" }: { stats: readonly Stat[]; className?: string }) {
  return (
    <ul
      className={`border-t border-line sm:grid sm:grid-cols-3 sm:divide-x sm:divide-line sm:border-b ${className}`}
    >
      {stats.map((s) => (
        <li
          key={s.label}
          className="flex items-baseline justify-between gap-4 border-b border-line py-3 sm:flex-col sm:items-start sm:gap-2 sm:border-b-0 sm:px-5 sm:py-5 sm:first:pl-0 sm:last:pr-0"
        >
          <span className="font-display text-h3 text-fg">{s.value}</span>
          <span className="label text-right text-muted sm:text-left">{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
