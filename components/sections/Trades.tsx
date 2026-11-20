import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TradesCarousel } from "@/components/sections/trades/TradesCarousel";
import { resolvePublicAsset } from "@/lib/assets";
import { TRADES, tradePhoto } from "@/lib/content/trades";
import { bookingHref } from "@/lib/site";

/**
 * Who the system is set up for, as a carousel of photographed trades. Resolved
 * here rather than in the carousel because reading `public/` is server work:
 * a trade with no photo saved yet renders as a named plate.
 */
export function Trades({ tilt }: { tilt?: "left" | "right" }) {
  const trades = TRADES.map((trade) => ({ ...trade, src: resolvePublicAsset(tradePhoto(trade.id)) }));

  // deep, not bleed-deep: the carousel is contained, so the section keeps its gutters
  return (
    <Section id="trades" variant="deep" tilt={tilt} aria-labelledby="trades-h">
      <div>
        <SectionLabel rule>Who it is for</SectionLabel>
        <Reveal as="h2" id="trades-h" className="mt-6 text-display-md lg:w-8/12">
          Serving these US solar trades and more.
        </Reveal>
      </div>

      <Reveal as="div" index={2} className="mt-12 lg:mt-16">
        <TradesCarousel trades={trades} />
      </Reveal>

      <Reveal as="div" index={3} className="mt-12 flex flex-col items-start gap-4 border-t border-line pt-8">
        <Button href={bookingHref("trades")} source="trades" external>
          Book a call to see if you are a fit
        </Button>
        <p className="label text-muted">You are.</p>
      </Reveal>
    </Section>
  );
}
