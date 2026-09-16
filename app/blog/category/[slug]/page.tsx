import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata, postListSchema } from "@/lib/seo";
import {
  CATEGORIES,
  categoryHref,
  getCategoryBySlug,
  getPillar,
  getPostsByCategory,
  postHref,
} from "@/lib/content/blog";

/**
 * A cluster archive: the nine articles on one subject, in one place.
 *
 * These are the hub pages in the hub-and-spoke architecture. They exist so
 * every article on a subject has a single parent to link up to, which is what
 * tells a search engine which page on the site is the authority on that
 * subject. Each one carries its own written intro, so no two archives read
 * the same.
 */
type Props = PageProps<"/blog/category/[slug]">;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return pageMetadata({
    title: `${category.metaTitle} for solar companies`,
    description: category.metaDescription,
    path: categoryHref(category),
  });
}

export default async function CategoryPage(props: Props) {
  const { slug } = await props.params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.id);
  const pillar = getPillar(category.id);

  return (
    <>
      <JsonLd
        data={[
          postListSchema({
            path: categoryHref(category),
            name: `${category.metaTitle} for solar companies`,
            description: category.metaDescription,
            posts,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: category.name, path: categoryHref(category) },
          ]),
        ]}
      />
      <BlogIndex
        label={`Blog · ${category.name}`}
        heading={`${category.metaTitle} for solar companies.`}
        intro={category.intro}
        posts={posts}
        // One page per cluster: nine articles is exactly one page.
        total={1}
        page={1}
        pageHref={() => categoryHref(category)}
        current={category.id}
        ctaSource={`blog_category_${category.id}`}
      >
        {pillar && (
          <p className="label mt-6 border-t border-line pt-4 text-muted">
            Start here:{" "}
            <Link
              href={postHref(pillar.slug)}
              className="link-underline text-fg decoration-underline-current hover:decoration-fg"
            >
              {pillar.title}
            </Link>
          </p>
        )}
      </BlogIndex>
    </>
  );
}
