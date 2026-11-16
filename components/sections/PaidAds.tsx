import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PaidAdsCarousel } from "@/components/sections/paid-ads/PaidAdsCarousel";
import { PAID_ADS } from "@/lib/content/paid-ads";

/**
 * Paid ads block, below the main plan card on the pricing page.
 *
 * Three channels in a snap-scroll carousel with LSA pre-selected (it is the
 * pay-per-lead channel, the lowest-risk way to start paid). Separate line
 * item from the three plans above, with its own CTA on each card ("Talk to
 * us") that lands in the sales conversation.
 *
 * Price intentionally not shown here. The old block carried a $1,500
 * monthly management fee and a Commitment-plans tier card with three terms
 * (Monthly / 90-day pilot / Annual); both came off on 2026-11-16 at the
 * owner's instruction — paid-ads pricing is now a conversation that
 * happens on the sales call rather than a number on the public page, so
 * the figure can be tailored to the channel, the market and the client's
 * situation without committing to one on the page.
 */
export function PaidAds() {
  return (
    <Section id="paid-ads" variant="deep" rule="top" aria-labelledby="paid-ads-h">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-5">
          <SectionLabel rule>Paid ads services</SectionLabel>
          <Reveal as="h2" id="paid-ads-h" className="mt-6 text-display-md">
            On the channels homeowners use to find you.
          </Reveal>
          <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead text-muted">
            Separate from the monthly plans above. One channel is usually
            enough to start, so pick the one that fits where your
            homeowners already look. Management is quoted on the sales
            call, and ad spend goes to the platform directly in your own
            account.
          </Reveal>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        <PaidAdsCarousel channels={PAID_ADS} />
      </div>
    </Section>
  );
}
