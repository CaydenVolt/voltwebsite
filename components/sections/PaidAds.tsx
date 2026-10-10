import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PaidAdsCarousel } from "@/components/sections/paid-ads/PaidAdsCarousel";
import { bookingHref } from "@/lib/site";
import {
  COMMITMENT_PLANS,
  PAID_ADS,
  PAID_ADS_FINE_PRINT,
} from "@/lib/content/paid-ads";

/**
 * Paid ads block, below the main plan card on the pricing page.
 *
 * Three channels at the same management fee, one visible at a time in a
 * snap-scroll carousel with LSA pre-selected (it is the pay-per-lead
 * channel, the lowest-risk way to start paid). Below that, the three
 * commitment tiers that apply to any channel.
 *
 * Separate from the $297 plan on purpose: this is its own line item, with
 * its own pricing and its own commitment terms, and the plan card above
 * stays about the system fee only.
 */
export function PaidAds() {
  return (
    <Section id="paid-ads" variant="deep" rule="top" aria-labelledby="paid-ads-h">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-5">
          <SectionLabel rule>Paid ads services</SectionLabel>
          <Reveal as="h2" id="paid-ads-h" className="mt-6 text-display-md">
            One flat fee. On the channels homeowners use to find you.
          </Reveal>
          <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead text-muted">
            Separate from the monthly system fee. One channel is usually enough
            to start, so pick the one that fits where your homeowners already
            look. Management is the same flat rate whichever you choose, and
            ad spend goes to the platform directly in your own account.
          </Reveal>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        <PaidAdsCarousel channels={PAID_ADS} />
      </div>

      {/* Commitment plans: the same work, three term lengths, with the discount
          each one earns stated as an effective monthly rate so the comparison
          is honest. */}
      <div className="mt-16 border-t border-line pt-12 lg:mt-20 lg:pt-16">
        <SectionLabel rule>Commitment plans</SectionLabel>
        <Reveal as="h3" className="mt-6 text-display-sm lg:w-10/12">
          Same management, three ways to pay.
        </Reveal>
        <Reveal as="p" index={1} className="mt-6 max-w-measure text-body text-muted">
          The $1,500 monthly rate above is the reference. The pilot is a
          one-time introductory offer so you can test paid without signing up
          for a year; the annual trades a longer commitment for three free
          months.
        </Reveal>

        <ul className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3">
          {COMMITMENT_PLANS.map((plan, i) => {
            const emphasised = plan.tagEmphasis === "accent";
            return (
              <Reveal
                key={plan.id}
                as="li"
                index={i}
                className={`flex flex-col border bg-bone px-6 py-8 sm:px-8 ${
                  emphasised ? "border-accent" : "border-line"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-h3">{plan.name}</h4>
                  {plan.tag && (
                    <span
                      className={`label inline-flex shrink-0 items-center rounded-full border px-3 py-1 ${
                        emphasised
                          ? "border-accent text-accent"
                          : "border-muted/50 text-muted"
                      }`}
                    >
                      {plan.tag}
                    </span>
                  )}
                </div>

                <p className="mt-6 flex items-baseline gap-2 font-display text-fg">
                  <span className="text-h3">$</span>
                  <span className="text-display-md">
                    {plan.price.replace(/^\$/, "")}
                  </span>
                  <span className="label pl-1 text-muted">{plan.unit}</span>
                </p>

                <p className="mt-5 text-body-sm text-muted">{plan.terms}</p>

                {/* Highlighted stat block: effective rate on top, savings
                    below, bordered box with a deep bone fill so the eye
                    lands on it. The dollar figure in savings is the loudest
                    thing in the card for plans that have one. */}
                <div className="mt-7 border border-line bg-bone-deep px-5 py-5">
                  <p className="label text-muted">Effective rate</p>
                  <p className="mt-1 font-display text-h2 text-fg">
                    {plan.effective}
                  </p>

                  <div className="mt-5 border-t border-line pt-5">
                    <p className="label text-muted">You save</p>
                    {plan.savingsAmount ? (
                      <>
                        <p className="mt-1 flex items-baseline gap-2 font-display">
                          <span className="text-h3 text-accent">$</span>
                          <span className="text-display-md text-accent">
                            {plan.savingsAmount.replace(/^\$/, "")}
                          </span>
                        </p>
                        <p className="label mt-1 text-muted">
                          {plan.savingsPeriod}
                        </p>
                      </>
                    ) : (
                      <p className="mt-1 font-display text-h3 text-muted">
                        {plan.savingsPeriod}
                      </p>
                    )}
                    <p className="mt-3 text-body-sm text-muted">{plan.savings}</p>
                  </div>
                </div>

                <p className="mt-auto pt-6 text-body-sm text-muted">{plan.note}</p>

                {/* Book-a-call CTA on every card. The annual (the recommended
                    one) gets the primary accent fill so the eye lands on it
                    first; the other two are outline, same text, so a visitor
                    who already knows which term they want still has a one-tap
                    path from the card they are reading. */}
                <div className="mt-6">
                  <Button
                    href={bookingHref(`pricing_commitment_${plan.id}`)}
                    source={`pricing_commitment_${plan.id}`}
                    external
                    variant={emphasised ? "primary" : "outline"}
                    className="w-full justify-center"
                  >
                    Book a call
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>

      <p className="mt-12 max-w-measure text-body-sm text-muted lg:mt-16">
        {PAID_ADS_FINE_PRINT}
      </p>
    </Section>
  );
}
