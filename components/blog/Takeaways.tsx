import { Prose } from "@/components/blog/Prose";
import { pad } from "@/lib/format";

/**
 * The block that answers the headline before the article starts.
 *
 * This is the most load-bearing 60 words on the page. A featured snippet, an
 * AI Overview and an assistant answering out loud all lift the first passage
 * that answers the query on its own, so the answer here never opens with
 * "it" or "this" pointing back at the title. Set one step above body size so
 * a reader in a hurry can take it and leave.
 */
export function Takeaways({
  answer,
  takeaways,
}: {
  answer: string;
  takeaways: readonly string[];
}) {
  return (
    <section aria-labelledby="answer-h" className="mt-10 border-y border-line py-8">
      <h2 id="answer-h" className="label text-muted">
        The short answer
      </h2>
      <p className="mt-4 max-w-measure text-lead text-fg">
        <Prose text={answer} />
      </p>

      {takeaways.length > 0 && (
        <ol className="mt-8 max-w-measure border-t border-line">
          {takeaways.map((t, i) => (
            <li
              key={i}
              className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 border-b border-line py-3"
            >
              <span className="label text-accent">{pad(i + 1)}</span>
              <span className="text-body">
                <Prose text={t} />
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
