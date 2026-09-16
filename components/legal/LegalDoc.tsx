import { Prose } from "@/components/blog/Prose";
import type { LegalBlock, LegalSection } from "@/lib/content/legal";

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
export function LegalDoc({ sections }: { sections: readonly LegalSection[] }) {
  /* Cross-references are written as [[section-id]] in the prose and resolved
     here against the live order. Typing "see section 7" by hand is how a
     document ends up pointing at the wrong clause after one insertion, which
     is exactly what happened before this existed. */
  const numbers = new Map(sections.map((s, i) => [s.id, i + 1]));
  const resolve = (text: string) =>
    text.replace(/\[\[([a-z0-9-]+)\]\]/g, (_, id: string) => {
      const n = numbers.get(id);
      if (!n) throw new Error(`Legal cross-reference points at an unknown section: ${id}`);
      return String(n);
    });

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
            <Block key={j} block={block} resolve={resolve} />
          ))}
        </section>
      ))}
    </div>
  );
}

function Block({
  block,
  resolve,
}: {
  block: LegalBlock;
  resolve: (text: string) => string;
}) {
  switch (block.t) {
    case "p":
      return (
        <p className="mt-4 text-body">
          <Prose text={resolve(block.text)} />
        </p>
      );

    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-body marker:text-muted">
          {block.items.map((item, i) => (
            <li key={i}>
              <Prose text={resolve(item)} />
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-body marker:text-muted">
          {block.items.map((item, i) => (
            <li key={i}>
              <Prose text={resolve(item)} />
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
              <Prose text={resolve(item.text)} />
            </li>
          ))}
        </ul>
      );

    /* Wider than the column on purpose, with its own scroller on a phone. A
       retention schedule squeezed to 335px is a schedule nobody reads. */
    case "table":
      return (
        <div className="-mx-gutter mt-5 overflow-x-auto px-gutter lg:mx-0 lg:px-0">
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
                      className={`py-3 pr-6 text-body-sm last:pr-0 ${
                        j === 0 ? "font-semibold text-fg" : "text-muted"
                      }`}
                    >
                      <Prose text={resolve(cell)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    /* A clause that carries real consequence. Bold, in the flow of the
       document, not in a box. */
    case "note":
      return (
        <p className="mt-4 text-body font-semibold text-fg">
          <Prose text={resolve(block.text)} />
        </p>
      );
  }
}
