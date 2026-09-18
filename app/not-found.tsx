import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { bookingHref } from "@/lib/site";

/**
 * The 404. Next serves its own unstyled one otherwise, which on a site this
 * considered reads as a broken deploy rather than a wrong address.
 *
 * It navigates rather than sells. Someone here followed a dead link or mistyped
 * a URL, and the useful thing is the way back, so the destinations come first
 * and the booking CTA sits under them. The nav and footer come from the root
 * layout, so every real route is one click away regardless.
 *
 * noindex, because a soft 404 that gets indexed is worse than a hard one.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const WAYS_BACK = [
  { label: "The six products", href: "/products" },
  { label: "What it costs", href: "/pricing" },
  { label: "The blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
] as const;

export default function NotFound() {
  return (
    <main className="flex-1">
      <div aria-hidden className="h-nav-condensed" />

      <Section as="header" aria-labelledby="nf-h">
        <SectionLabel rule>404</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="nf-h" className="text-display-xl lg:col-span-7">
            That page is not here.
          </Reveal>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead lg:mt-0">
              Either the link was wrong or the page has moved. Nothing is broken on your end.
            </Reveal>
            <Reveal as="p" index={2} className="mt-5 max-w-measure text-body text-muted">
              If you got here from somewhere on this site, tell us and we will fix it.
            </Reveal>

            <Reveal as="ul" index={3} className="mt-8 border-t border-line">
              {WAYS_BACK.map((w) => (
                <li key={w.href} className="border-b border-line">
                  <Link
                    href={w.href}
                    data-cursor="grow"
                    className="flex items-center justify-between gap-4 py-4 text-body text-fg transition-colors duration-100 hover:text-muted"
                  >
                    {w.label}
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </li>
              ))}
            </Reveal>

            <Reveal as="div" index={4} className="mt-8 flex flex-col items-start gap-5">
              <Button href={bookingHref("not_found")} source="not_found" external>
                Book a 20-minute call
              </Button>
              <Button href="/" source="not_found_home" variant="link">
                Back to the homepage
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
