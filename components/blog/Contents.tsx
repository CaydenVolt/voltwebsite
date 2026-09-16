import { pad } from "@/lib/format";

/**
 * On this page. Built from the article's own H2s, so it can never fall out of
 * step with the body, and it doubles as the jump-link set a search engine
 * sometimes shows as sitelinks under the result.
 *
 * Plain anchors: globals.css already gives every `[id]` a scroll margin under
 * the sticky bar, and Lenis intercepts the smooth path.
 */
export function Contents({ items }: { items: { id: string; text: string }[] }) {
  if (items.length < 3) return null;
  return (
    <nav aria-labelledby="contents-h" className="mt-12 border-t border-line pt-6">
      <h2 id="contents-h" className="label text-muted">
        On this page
      </h2>
      <ol className="mt-4 columns-1 gap-x-6 sm:columns-2">
        {items.map((item, i) => (
          <li key={item.id} className="break-inside-avoid py-1.5">
            <a
              href={`#${item.id}`}
              data-cursor="grow"
              className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3"
            >
              <span className="label text-muted">{pad(i + 1)}</span>
              <span className="text-body-sm text-fg group-hover:text-accent">{item.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
