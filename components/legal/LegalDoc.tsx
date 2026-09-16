import { Prose } from "@/components/blog/Prose";
import type { LegalBlock, TermsSection } from "@/lib/content/terms";
import { pad } from "@/lib/format";

/**
 * A numbered legal document, set to be read rather than skimmed past.
 *
 * Plain and ruled, in the house language: numerals in the label style, section
 * titles in the display face, body on the reading measure. Clauses that carry
 * real consequence get a `note` block with an accent rule beside them, because
 * a no-refund clause buried in a wall of grey is a clause that was not read.
 *
 * Every section takes its number from its position, so inserting one renumbers
 * the rest and the cross-references in the prose are written to match.
 */
export function LegalDoc({ sections }: { sections: readonly TermsSection[] }) {
  return (
    <div className="mt-12 lg:mt-16">
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-h`}
          className="border-t border-line pt-6 pb-12 last:pb-0"
        >
          <h2
            id={`${section.id}-h`}
            className="grid max-w-measure grid-cols-[2.5rem_1fr] items-baseline gap-x-3 text-h2"
          >
            <span className="label text-accent">{pad(i + 1)}</span>
            <span>{section.title}</span>
          </h2>
          {/* Indented to the numeral's column from sm, so the block reads as
              belonging to its number rather than sitting under it. */}
          <div className="sm:pl-[3.25rem]">
            {section.body.map((block, j) => (
              <Block key={j} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.t) {
    case "p":
      return (
        <p className="mt-5 max-w-measure text-body">
          <Prose text={block.text} />
        </p>
      );

    case "ul":
      return (
        <ul className="mt-5 max-w-measure space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-body">
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
        <ol className="mt-5 max-w-measure border-t border-line">
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

    case "defs":
      return (
        <dl className="mt-5 max-w-measure border-t border-line">
          {block.items.map((item) => (
            <div key={item.term} className="border-b border-line py-4">
              <dt className="font-display text-item text-fg">{item.term}</dt>
              <dd className="mt-2 text-body text-muted">
                <Prose text={item.text} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case "note":
      return (
        <p className="mt-6 max-w-measure border-l-2 border-accent bg-surface-deep px-5 py-4 text-body text-fg">
          <Prose text={block.text} />
        </p>
      );
  }
}
