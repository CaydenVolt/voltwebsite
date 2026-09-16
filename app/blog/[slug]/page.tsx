import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Plate } from "@/components/blog/Plate";
import { BlogIcon } from "@/components/blog/BlogIcon";
import { Takeaways } from "@/components/blog/Takeaways";
import { Contents } from "@/components/blog/Contents";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleFaq } from "@/components/blog/ArticleFaq";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { AsideCTA } from "@/components/blog/AsideCTA";
import { ReadNext } from "@/components/blog/ReadNext";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, authorSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";
import {
  AUTHOR,
  authorHref,
  categoryHref,
  formatDate,
  getCategory,
  getPost,
  getPosts,
  getRelatedPosts,
  headings,
  postHref,
  readingMinutes,
  wordCount,
} from "@/lib/content/blog";

type Props = PageProps<"/blog/[slug]">;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};

  const meta = pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: postHref(post.slug),
  });

  return {
    ...meta,
    // An article is not a website, and the difference is what puts the author
    // and the dates on the card rather than just the title.
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: [AUTHOR.name],
      section: getCategory(post.category).name,
      tags: [post.keyword, ...post.secondary],
    },
    authors: [{ name: AUTHOR.name, url: authorHref }],
    keywords: [post.keyword, ...post.secondary],
    category: getCategory(post.category).name,
  };
}

export default async function ArticlePage(props: Props) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const category = getCategory(post.category);
  const related = getRelatedPosts(post).slice(0, 3);
  const updated = post.updated ?? post.published;
  const revised = updated !== post.published;

  return (
    <main className="flex-1">
      <JsonLd
        data={[
          articleSchema(post, wordCount(post)),
          authorSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: category.name, path: categoryHref(category) },
            { name: post.title, path: postHref(post.slug) },
          ]),
        ]}
      />
      <div aria-hidden className="h-nav-condensed" />

      {/* Header: the trail, the headline, the byline, then the plate */}
      <Section as="header" rhythm="sm" aria-labelledby="article-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/blog" className="hover:text-fg">
            Blog
          </Link>
          <span aria-hidden>/</span>
          <Link href={categoryHref(category)} className="text-accent hover:text-fg">
            {category.name}
          </Link>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="article-h" className="text-display-md lg:col-span-8">
            {post.title}
          </Reveal>
        </div>

        <Reveal
          as="div"
          index={1}
          className="label mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-line py-4 text-muted"
        >
          <Link href={authorHref} className="text-fg hover:text-accent">
            {AUTHOR.name}
          </Link>
          <span aria-hidden className="h-px w-4 bg-line" />
          <time dateTime={post.published}>{formatDate(post.published)}</time>
          {revised && (
            <>
              <span aria-hidden className="h-px w-4 bg-line" />
              <span>
                Updated <time dateTime={updated}>{formatDate(updated)}</time>
              </span>
            </>
          )}
          <span aria-hidden className="h-px w-4 bg-line" />
          <span>{readingMinutes(post)} min read</span>
        </Reveal>

        {/* The article's mark over its ornament plate: the same image the card
            carries, so the grid and the page agree. */}
        <Reveal
          as="div"
          index={2}
          className="relative mt-8 aspect-strip overflow-hidden rounded-control border border-line lg:mt-10 lg:aspect-plate lg:max-h-96"
        >
          <div className="absolute inset-0 opacity-20">
            <Plate slug={post.slug} feature />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <BlogIcon icon={post.icon} className="size-24 text-ink lg:size-32" />
          </div>
          <span className="label absolute left-4 top-4 rounded-control bg-accent px-2.5 py-1.5 text-ink">
            {post.intent}
          </span>
        </Reveal>
      </Section>

      {/* Body left, a rail that travels with the reader on the right */}
      <Section rhythm="sm">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6">
          {/* Contents only, and sticky: it travels with the reader on desktop and
              sits above the article on a phone, which is where a contents list
              belongs on both. */}
          <aside className="lg:sticky lg:top-nav-condensed lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <Contents items={headings(post)} />
          </aside>

          <article className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <Takeaways answer={post.answer} takeaways={post.takeaways} />
            <ArticleBody blocks={post.body} />
            {/* After the argument, before the questions: the point in the read
                where someone has decided whether any of this applies to them.
                Inside the article on every width, so a phone does not meet a
                booking pitch before the first paragraph. */}
            <AsideCTA source={`blog_aside_${post.slug}`} />
            <ArticleFaq items={post.faq} />
            <AuthorCard />
          </article>
        </div>
      </Section>

      <ReadNext posts={related} categoryId={post.category} />

      <FinalCTA source={`blog_cta_${post.slug}`} />
    </main>
  );
}
