import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Block } from "@/lib/content/blog";
import { headingId } from "@/lib/content/blog";
import { Prose } from "@/components/blog/Prose";
import { pad } from "@/lib/format";

/**
 * The article, rendered through the site's own vocabulary: hairlines, ruled
 * bands, numeric indices, small-caps labels. No card has a shadow, no list
 * has a bullet glyph, and nothing here can introduce a size outside the type
 * scale, because the block union is the only way in.
 *
 * Everything is constrained to the reading measure except tables, which get
 * their own scroller, and the ruled figure bands, which are meant to break
 * the column.
 */
const measure = "max-w-measure";

/**
 * The diagram's markup, off disk. Server-only: this module reads public/ and
 * is imported by the article page, which is a server component and stays one.
 *
 * Throws rather than degrades. A missing diagram on a built page is a silent
 * hole in an argument, and the content gate checks the same files, so getting
 * here with a bad path means something got past it.
 */
function readDiagram(src: string): string {
  const file = path.join(process.cwd(), "public", src);
  try {
    return readFileSync(file, "utf8");
  } catch {
    throw new Error(`Diagram not found: ${src} (looked in public${src})`);
  }
}

export function ArticleBody({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="mt-10">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} first={i === 0} />
      ))}
    </div>
  );
}

function BlockView({ block, first }: { block: Block; first: boolean }) {
  switch (block.t) {
    case "h2":
      return (
        <h2
          id={headingId(block.text)}
          className={`${measure} border-t border-line pt-6 text-h2 ${first ? "" : "mt-14"}`}
        >
          <Prose text={block.text} />
        </h2>
      );

    case "h3":
      return (
        <h3 className={`${measure} mt-10 text-h3`}>
          <Prose text={block.text} />
        </h3>
      );

    case "p":
      return (
        <p className={`${measure} mt-5 text-body`}>
          <Prose text={block.text} />
        </p>
      );

    case "ul":
      return (
        <ul className={`${measure} mt-5 space-y-3`}>
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-body">
              {/* A printer's rule, not a bullet: the mark this site uses everywhere
                  else. Boxed to one line height so it centres on the first line
                  of a wrapping item rather than on the whole block. */}
              <span aria-hidden className="flex h-[1lh] w-3 shrink-0 items-center">
                <span className="h-px w-full bg-muted" />
              </span>
              <span>
                <Prose text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className={`${measure} mt-5 border-t border-line`}>
          {block.items.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 border-b border-line py-4 text-body"
            >
              <span className="label text-muted">{pad(i + 1)}</span>
              <span>
                <Prose text={item} />
              </span>
            </li>
          ))}
        </ol>
      );

    case "steps":
      return (
        <ol className={`${measure} mt-8 border-t border-line`}>
          {block.items.map((step, i) => (
            <li key={i} className="border-b border-line py-6">
              <span className="font-display text-h3 text-accent">{pad(i + 1)}</span>
              <h3 className="mt-2 text-h3">
                <Prose text={step.title} />
              </h3>
              <p className="mt-3 text-body text-muted">
                <Prose text={step.body} />
              </p>
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <figure className="mt-8">
          {/* Wider than the measure on purpose, and its own scroller on phones:
              a squeezed table is an unreadable table. */}
          <div className="-mx-gutter overflow-x-auto px-gutter lg:mx-0 lg:px-0">
            <table className="w-full min-w-measure border-collapse text-left">
              <thead>
                <tr className="border-y border-line">
                  {block.head.map((h) => (
                    <th key={h} scope="col" className="label py-3 pr-6 text-muted last:pr-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-b border-line align-top">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`py-4 pr-6 text-body-sm last:pr-0 ${
                          j === 0 ? "font-semibold text-fg" : "text-muted"
                        }`}
                      >
                        <Prose text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-body-sm text-muted">
              <Prose text={block.caption} />
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      return (
        <aside className={`${measure} mt-8 border-l-2 border-accent bg-surface-deep px-5 py-5`}>
          <p className="label text-muted">{block.label}</p>
          <p className="mt-3 text-body">
            <Prose text={block.text} />
          </p>
        </aside>
      );

    case "figures":
      return (
        <figure className="mt-8">
          <ul className="border-t border-line sm:grid sm:auto-cols-fr sm:grid-flow-col sm:divide-x sm:divide-line sm:border-b">
            {block.items.map((f) => (
              <li
                key={f.label}
                className="flex items-baseline justify-between gap-4 border-b border-line py-3 sm:flex-col sm:items-start sm:gap-2 sm:border-b-0 sm:px-5 sm:py-5 sm:first:pl-0 sm:last:pr-0"
              >
                <span className="font-display text-h3 text-fg">{f.value}</span>
                <span className="label text-right text-muted sm:text-left">{f.label}</span>
              </li>
            ))}
          </ul>
          {block.source && (
            <figcaption className="mt-3 text-body-sm text-muted">
              <Prose text={block.source} />
            </figcaption>
          )}
        </figure>
      );

    case "diagram":
      return (
        <figure className="mt-10">
          {/* Inlined, not referenced. An <img src="diagram.svg"> hides its
              own labels inside a separate file; inlined, every label is text
              in this page's HTML. That is the entire reason these are SVG.

              Not held to the reading measure either: a diagram is wider than
              a line of prose, and squeezing one into the column makes its
              labels unreadable on a phone. No frame, because the file grounds
              itself in the page's own bone and a border would draw a box
              around something meant to sit in the flow.

              The markup is ours, read off disk at build time from a closed
              set of files in public/blog. It is not user input. */}
          <div
            className="[&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
            dangerouslySetInnerHTML={{ __html: readDiagram(block.src) }}
          />
          {block.caption && (
            <figcaption className={`${measure} mt-3 text-body-sm text-muted`}>
              <Prose text={block.caption} />
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote className={`${measure} mt-10 border-l-2 border-line pl-6`}>
          <p className="font-display text-h3 text-fg">
            <Prose text={block.text} />
          </p>
          {block.cite && <cite className="label mt-4 block not-italic text-muted">{block.cite}</cite>}
        </blockquote>
      );

    case "link":
      return (
        <div className={`${measure} mt-8 border-y border-line py-5`}>
          <p className="label text-muted">{block.note}</p>
          <Link
            href={block.href}
            data-cursor="grow"
            className="group mt-3 flex items-baseline gap-3 font-display text-h3 text-fg"
          >
            {block.label}
            <svg
              aria-hidden
              width="0.7em"
              height="0.7em"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              className="shrink-0 transition-transform duration-100 group-hover:translate-x-1"
            >
              <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
            </svg>
          </Link>
        </div>
      );
  }
}
