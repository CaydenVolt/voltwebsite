import { Prose } from "@/components/blog/Prose";
import type { FaqItem } from "@/lib/content/blog";

/**
 * The questions readers still have at the end.
 *
 * Rendered, deliberately not marked up as FAQPage. Google retired FAQ rich
 * results for every site in May 2026, so the schema buys no SERP feature any
 * more, and adding it to sixty-three articles would be sixty-three blocks of
 * markup earning nothing. The answers still do their work as text: a question
 * heading with a short, self-contained answer under it is exactly what an
 * assistant lifts when it quotes a page.
 *
 * Open by default, no accordion. A collapsed answer is an answer a reader has
 * to ask for twice.
 */
export function ArticleFaq({ items }: { items: readonly FaqItem[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="faq-h" className="mt-16">
      <h2 id="faq-h" className="max-w-measure border-t border-line pt-6 text-h2">
        Common questions
      </h2>
      <dl className="mt-8 max-w-measure border-t border-line">
        {items.map((item) => (
          <div key={item.q} className="border-b border-line py-6">
            <dt className="text-h3 text-fg">{item.q}</dt>
            <dd className="mt-3 text-body text-muted">
              <Prose text={item.a} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
