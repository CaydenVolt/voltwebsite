import { Prose } from "@/components/blog/Prose";
import type { FaqItem } from "@/lib/content/blog";

/**
 * The questions readers still have at the end.
 *
 * FAQPage JSON-LD for these items is emitted at the page level in
 * `app/blog/[slug]/page.tsx`; it earns nothing in a Google SERP since the FAQ
 * rich result retired in May 2026, but ChatGPT, Perplexity and AI Overviews
 * still read schema, and the pattern is a cheap way to be lifted intact. The
 * answers also do their work as text: a question heading with a short,
 * self-contained answer under it is exactly what an assistant lifts.
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
