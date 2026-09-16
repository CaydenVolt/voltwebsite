import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  categoryHref,
  formatDate,
  getCategory,
  postHref,
  readingMinutes,
  type Post,
} from "@/lib/content/blog";
import { pad } from "@/lib/format";

/**
 * Three siblings from the same cluster, plus the way back to the cluster's
 * own page. This is the half of internal linking an article cannot do on its
 * own: every spoke points at its neighbours, and the hub is never more than
 * one click away from any of them.
 */
export function ReadNext({ posts, categoryId }: { posts: readonly Post[]; categoryId: Post["category"] }) {
  if (posts.length === 0) return null;
  const category = getCategory(categoryId);

  return (
    <Section variant="deep" aria-labelledby="readnext-h">
      <SectionLabel rule>Read next</SectionLabel>
      <Reveal as="h2" id="readnext-h" className="mt-6 text-display-md lg:w-7/12">
        More on {category.name.toLowerCase()}.
      </Reveal>
      <Reveal as="ul" index={1} className="mt-10 border-t border-line lg:mt-12">
        {posts.map((p, i) => (
          <li key={p.slug} className="border-b border-line">
            <Link
              href={postHref(p.slug)}
              data-cursor="grow"
              className="group grid items-baseline gap-x-3 gap-y-2 py-5 sm:grid-cols-[2.5rem_1fr_auto]"
            >
              <span className="label hidden text-muted sm:block">{pad(i + 1)}</span>
              <span className="font-display text-h3 text-fg transition-transform duration-100 group-hover:translate-x-1">
                {p.title}
              </span>
              <span className="label text-muted sm:text-right">
                {readingMinutes(p)} min · {formatDate(p.published)}
              </span>
            </Link>
          </li>
        ))}
      </Reveal>
      <Reveal as="div" index={2} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Button href={categoryHref(category)} source={`blog_cluster_${category.id}`} variant="link">
          All {category.name.toLowerCase()} articles
        </Button>
        <Button href="/blog" source="blog_all_from_article" variant="link">
          The whole blog
        </Button>
      </Reveal>
    </Section>
  );
}
