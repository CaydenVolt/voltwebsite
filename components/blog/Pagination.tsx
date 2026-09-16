import Link from "next/link";
import { pad } from "@/lib/format";

/**
 * Numbered paging, every page a real crawlable link so the index does not
 * dead-end at page one. Page one is always `/blog`, never `/blog/page/1`, so
 * there is one URL per page and nothing to canonicalise away.
 *
 * Previous and Next render as inert spans at the ends rather than disappearing,
 * so the row does not change width as you move through it.
 */
export function Pagination({
  current,
  total,
  href,
  label = "Blog pages",
}: {
  current: number;
  total: number;
  /** Page number to URL. Supplied by the caller so category archives can page too. */
  href: (n: number) => string;
  label?: string;
}) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav aria-label={label} className="mt-16 border-t border-line pt-6">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-5">
        <Step dir="prev" to={current > 1 ? href(current - 1) : null} />

        <ol className="order-last flex w-full items-center justify-center gap-1 sm:order-none sm:w-auto">
          {pages.map((n) => {
            const active = n === current;
            return (
              <li key={n}>
                {active ? (
                  <span
                    aria-current="page"
                    className="label flex size-11 items-center justify-center border-b-2 border-accent text-fg"
                  >
                    {pad(n)}
                  </span>
                ) : (
                  <Link
                    href={href(n)}
                    data-cursor="grow"
                    aria-label={`Page ${n}`}
                    className="label flex size-11 items-center justify-center border-b-2 border-transparent text-muted transition-colors duration-100 hover:border-line hover:text-fg"
                  >
                    {pad(n)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>

        <Step dir="next" to={current < total ? href(current + 1) : null} />
      </div>
    </nav>
  );
}

function Step({ dir, to }: { dir: "prev" | "next"; to: string | null }) {
  const text = dir === "prev" ? "Previous" : "Next";
  const arrow =
    dir === "prev" ? (
      <path d="M14 8H3M7.5 3.5 3 8l4.5 4.5" />
    ) : (
      <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
    );
  const icon = (
    <svg
      key="icon"
      aria-hidden
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      className="shrink-0"
    >
      {arrow}
    </svg>
  );
  const label = <span key="text">{text}</span>;
  // The arrow leads on Previous and follows on Next, so the pair reads
  // outward from the numerals in both directions.
  const inner = dir === "prev" ? [icon, label] : [label, icon];
  const shared = "label flex h-11 items-center gap-3";

  if (!to) {
    return (
      <span aria-hidden className={`${shared} text-line`}>
        {inner}
      </span>
    );
  }
  return (
    <Link href={to} data-cursor="grow" rel={dir} className={`${shared} text-fg hover:text-accent`}>
      {inner}
    </Link>
  );
}
