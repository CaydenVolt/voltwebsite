import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SITE, realSocial } from "@/lib/site";
import { Wordmark } from "@/components/site/Wordmark";
import { getPublicProducts, productHref } from "@/lib/content/products";
import { ConsentLinks } from "@/components/consent/ConsentLinks";

function Column({
  title,
  links,
  children,
}: {
  title: string;
  links: readonly { label: string; href: string; external?: boolean }[];
  /** Extra rows appended to the list, for controls that are not links. */
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="label border-b border-line pb-3 text-muted">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              data-cursor="grow"
              className="text-body-sm text-fg link-underline decoration-underline-current hover:decoration-fg"
            >
              {l.label}
            </a>
          </li>
        ))}
        {children}
      </ul>
    </div>
  );
}

/**
 * Bone footer under the ink CTA slab: the slab needs a hard edge beneath it,
 * and the page closes on paper the way it opened. Four columns, hairlines,
 * small-caps headers, copyright and socials on a final ruled row.
 */
export function Footer({ mark, masked }: { mark: string | null; masked?: boolean }) {
  const products = getPublicProducts().map((p) => ({ label: p.name, href: productHref(p.slug) }));
  const year = new Date().getFullYear();

  return (
    <Section as="footer" rhythm="sm" rule="top" aria-label="Footer">
      <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-4">
          <Link href="/" data-cursor="grow" className="inline-flex">
            <Wordmark mark={mark} masked={masked} />
          </Link>
          <p className="mt-4 max-w-measure text-body-sm text-muted">{SITE.tagline}.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
          <Column title="Products" links={products} />
          <Column title="Company" links={SITE.company} />
          <Column title="Legal" links={SITE.legal}>
            <ConsentLinks />
          </Column>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="label text-muted">
          © {year} {SITE.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-6">
          {realSocial().map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                className="label text-muted transition-colors duration-100 hover:text-fg"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
