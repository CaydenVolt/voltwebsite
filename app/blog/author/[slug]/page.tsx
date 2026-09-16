import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { PostGrid } from "@/components/blog/PostGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { authorPageSchema, authorSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { AUTHOR, authorHref, getPosts } from "@/lib/content/blog";
import { TEAM } from "@/lib/content/about";

/**
 * The byline's own page.
 *
 * Google's helpful-content guidance opens with "who created this", and a
 * named author with a reachable page, a stated role and a list of what he
 * actually works on is the cheapest honest answer to it. Every article's
 * schema points its `author` at the Person declared here.
 */
type Props = PageProps<"/blog/author/[slug]">;

export function generateStaticParams() {
  return [{ slug: AUTHOR.slug }];
}
export const dynamicParams = false;

const TITLE = `${AUTHOR.name}, ${AUTHOR.role}`;
const DESCRIPTION = `${AUTHOR.short} Writes here on solar lead generation, reviews, local SEO, follow-up and the software behind a solar sale.`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: authorHref,
});

const PORTRAIT = TEAM.find((m) => m.name === "Cayden");

export default async function AuthorPage(props: Props) {
  const { slug } = await props.params;
  if (slug !== AUTHOR.slug) notFound();

  const posts = getPosts();

  return (
    <main className="flex-1">
      <JsonLd
        data={[
          authorSchema(),
          authorPageSchema(posts),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: AUTHOR.name, path: authorHref },
          ]),
        ]}
      />
      <div aria-hidden className="h-nav-condensed" />

      <Section as="header" aria-labelledby="author-h">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-6">
          <Reveal as="div" className="lg:col-span-7">
            <SectionLabel rule>Author</SectionLabel>
            <h1 id="author-h" className="mt-6 text-display-xl">
              {AUTHOR.name}
            </h1>
            <p className="label mt-5 text-muted">{AUTHOR.role}</p>
            {AUTHOR.bio.map((para, i) => (
              <p key={i} className="mt-5 max-w-measure text-body">
                {para}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/about" source="author_about" variant="link">
                About Volt
              </Button>
              <Button href="/contact" source="author_contact" variant="link">
                Get in touch
              </Button>
            </div>
          </Reveal>

          <Reveal as="div" index={1} className="lg:col-span-4 lg:col-start-9">
            {PORTRAIT && (
              <Photo
                src={PORTRAIT.src}
                alt={`${AUTHOR.name}, ${AUTHOR.role}`}
                aspect="1 / 1"
                position={PORTRAIT.position}
                sizes="(min-width: 1024px) 24rem, 60vw"
                className="mx-auto w-full max-w-xs rounded-full lg:mx-0"
              />
            )}
            <div className="mt-8 border-t border-line pt-5">
              <p className="label text-muted">Writes about</p>
              <ul className="mt-3 space-y-2">
                {AUTHOR.knowsAbout.map((topic) => (
                  <li key={topic} className="text-body text-muted">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section rule="top" aria-labelledby="posts-h">
        <SectionLabel rule>Everything by {AUTHOR.name}</SectionLabel>
        <Reveal as="h2" id="posts-h" className="mt-6 text-display-md lg:w-8/12">
          {posts.length} articles, newest first.
        </Reveal>
        <div className="mt-12 lg:mt-16">
          <PostGrid posts={posts} />
        </div>
      </Section>

      <FinalCTA source="author_cta" />
    </main>
  );
}
