import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { bookingHref } from "@/lib/site";

export interface BasicPageLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * The house layout for a page that is text and a way to reach us: eyebrow,
 * display headline, a lead, body paragraphs on the measure, then the ink CTA
 * slab the rest of the site closes on. Used by the About menu's pages, which
 * are deliberately short until there is real content to put in them.
 */
export function BasicPage({
  label,
  title,
  lead,
  body = [],
  links = [],
  source,
  children,
}: {
  label: string;
  title: string;
  lead: string;
  body?: readonly string[];
  /** Shown beside the booking button. */
  links?: readonly BasicPageLink[];
  /** Attribution suffix for the booking link. */
  source: string;
  children?: ReactNode;
}) {
  return (
    <main className="flex-1">
      {/* Clear the fixed bar, which is condensed and solid on every page without a hero */}
      <div aria-hidden className="h-nav-condensed" />

      <Section as="header" aria-labelledby="page-h">
        <SectionLabel rule>{label}</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="page-h" className="text-display-xl lg:col-span-7">
            {title}
          </Reveal>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead lg:mt-0">
              {lead}
            </Reveal>
            {body.map((paragraph, i) => (
              <Reveal key={paragraph} as="p" index={i + 2} className="mt-5 max-w-measure text-body text-muted">
                {paragraph}
              </Reveal>
            ))}
            <Reveal as="div" index={body.length + 2} className="mt-8 flex flex-col items-start gap-5">
              <Button href={bookingHref(source)} source={source} external>
                Book a 20-minute call
              </Button>
              {links.map((l) => (
                <Button key={l.href} href={l.href} source={`${source}_${l.href}`} variant="link" external={l.external}>
                  {l.label}
                </Button>
              ))}
            </Reveal>
          </div>
        </div>
      </Section>

      {children}

      <FinalCTA />
    </main>
  );
}
