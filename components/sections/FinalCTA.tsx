import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DitheredImage } from "@/components/ui/DitheredImage";
import { bookingHref } from "@/lib/site";

/**
 * Closing ink slab. A dithered plate bleeds off the left edge, slanted toward
 * the text, so the page ends the way it opened. Display headline, one line,
 * the primary CTA, and the hero's reassurance line.
 */
export function FinalCTA({
  tilt,
  /** Where the click came from, so the booking record shows which page sent it. */
  source = "final_cta",
}: {
  tilt?: "left" | "right";
  source?: string;
}) {
  return (
    <Section id="book" variant="ink" tilt={tilt} aria-labelledby="book-h">
      <div className="grid gap-y-10 lg:grid-cols-12 lg:items-center lg:gap-x-6">
        <Reveal
          as="div"
          index={1}
          className="order-1 -mx-gutter lg:order-none lg:col-span-5 lg:col-start-1 lg:-ml-gutter lg:mr-0"
        >
          <DitheredImage
            src="/plates/rooftop.webp"
            alt="Solar array on open ground at dusk"
            slant="right"
            className="aspect-strip lg:aspect-plate"
          />
        </Reveal>
        <Reveal as="div" className="order-2 lg:order-none lg:col-span-6 lg:col-start-7">
          <SectionLabel rule>Next step</SectionLabel>
          <h2 id="book-h" className="mt-6 text-display-xl">
            Book the call. It is running in 7–10 days.
          </h2>
          <p className="mt-6 max-w-measure text-lead">
            Twenty minutes to see whether it fits your company. No pitch deck, and if it does not
            fit we will say so.
          </p>
          <div className="mt-8">
            <Button href={bookingHref(source)} source={source} external>
              Book a 20-minute call
            </Button>
          </div>
          <p className="label mt-6 text-muted">No contracts. Cancel anytime.</p>
        </Reveal>
      </div>
    </Section>
  );
}
