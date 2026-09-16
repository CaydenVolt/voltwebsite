import { Prose } from "@/components/blog/Prose";
import type { LegalBlock, TermsSection } from "@/lib/content/terms";

/**
 * A legal document, set plainly.
 *
 * One column, numbered headings with a rule above them, and nothing
 * decorative: no contents rail, no accent numerals, no callout boxes. That is
 * deliberate rather than lazy. A legal page is read under suspicion, and every
 * design flourish on one reads as an attempt to steer the eye past something.
 *
 * Section numbers come from position, so the cross-references written into the
 * prose stay correct only as long as the order does. Inserting a section means
 * checking them.
 */
export function LegalDoc({ sections }: { sections: readonly TermsSection[] }) {
  return (
    <div>
      {sections.map((section, i) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`}>
          <h2
            id={`${section.id}-h`}
            className="mt-12 border-t border-line pt-6 text-h3 text-fg first:mt-0"
          >
            {i + 1}. {section.title}
          </h2>
          {section.body.map((block, j) => (
            <Block key={j} block={block} />
          ))}
        </section>
      ))}
    </div>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.t) {
    case "p":
      return (
        <p className="mt-4 text-body">
          <Prose text={block.text} />
        </p>
      );

    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-body marker:text-muted">
          {block.items.map((item, i) => (
            <li key={i}>
              <Prose text={item} />
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-body marker:text-muted">
          {block.items.map((item, i) => (
            <li key={i}>
              <Prose text={item} />
            </li>
          ))}
        </ol>
      );

    /* Bold term, then the meaning, as a bulleted list. The same shape the
       reference document uses, and it reads correctly when a screen reader
       announces it as a list rather than as a definition table. */
    case "defs":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-body marker:text-muted">
          {block.items.map((item) => (
            <li key={item.term}>
              <strong className="font-semibold text-fg">{item.term}.</strong>{" "}
              <Prose text={item.text} />
            </li>
          ))}
        </ul>
      );

    /* A clause that carries real consequence. Bold, in the flow of the
       document, not in a box. */
    case "note":
      return (
        <p className="mt-4 text-body font-semibold text-fg">
          <Prose text={block.text} />
        </p>
      );
  }
}
