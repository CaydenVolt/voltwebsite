import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { CATEGORIES, categoryHref, getPostsByCategory, type CategoryId } from "@/lib/content/blog";
import { pad } from "@/lib/format";

/**
 * The seven clusters, on every index page.
 *
 * This is the site's topic architecture made visible. Each cluster is a hub
 * with nine articles under it, and this rail is what ties the paginated index
 * back to them, so no article is ever more than two clicks from the front of
 * the blog.
 */
export function ClusterRail({ current }: { current?: CategoryId }) {
  return (
    <Section variant="deep" aria-labelledby="clusters-h">
      <SectionLabel rule>Browse by subject</SectionLabel>
      <Reveal as="h2" id="clusters-h" className="mt-6 text-display-md lg:w-8/12">
        Seven things solar companies ask about.
      </Reveal>
      <Reveal as="ul" index={1} className="mt-10 border-t border-line lg:mt-12">
        {CATEGORIES.map((c, i) => {
          const count = getPostsByCategory(c.id).length;
          const here = c.id === current;
          return (
            <li key={c.id} className="border-b border-line">
              <Link
                href={categoryHref(c)}
                data-cursor="grow"
                aria-current={here ? "page" : undefined}
                className="group grid items-baseline gap-x-3 gap-y-2 py-5 sm:grid-cols-[2.5rem_1fr_auto]"
              >
                <span className={`label hidden sm:block ${here ? "text-accent" : "text-muted"}`}>
                  {pad(i + 1)}
                </span>
                <span>
                  <span className="block font-display text-h3 text-fg transition-transform duration-100 group-hover:translate-x-1">
                    {c.name}
                  </span>
                  <span className="mt-1 block text-body text-muted">{c.blurb}</span>
                </span>
                <span className="label text-muted sm:text-right">
                  {pad(count)} articles
                </span>
              </Link>
            </li>
          );
        })}
      </Reveal>
    </Section>
  );
}
