import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PaidAdsCarousel } from "@/components/sections/paid-ads/PaidAdsCarousel";
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
            Three channels. One flat management fee.
          </Reveal>
          <Reveal as="p" index={1} className="mt-6 max-w-measure text-lead text-muted">
            Separate from the monthly system fee. Pick the channel that fits the
            demand you want to reach, or run all three. Management is the same
            flat rate either way; the ad budget is paid to the platform
            directly, in your own account.
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
          {COMMITMENT_PLANS.map((plan, i) => (
            <Reveal
              key={plan.id}
              as="li"
              index={i}
              className={`flex flex-col border bg-bone px-6 py-8 sm:px-8 ${
                plan.tag ? "border-accent" : "border-line"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-h3">{plan.name}</h4>
                {plan.tag && (
                  <span className="label inline-flex shrink-0 items-center rounded-full border border-accent px-3 py-1 text-accent">
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

              <dl className="mt-6 border-t border-line pt-5 text-body-sm">
                <div className="flex justify-between gap-4 py-1">
                  <dt className="text-muted">Effective rate</dt>
                  <dd className="text-fg">{plan.effective}</dd>
                </div>
                <div className="flex justify-between gap-4 py-1">
                  <dt className="text-muted">Savings</dt>
                  <dd className="text-fg">{plan.savings}</dd>
                </div>
              </dl>

              <p className="mt-auto pt-6 text-body-sm text-muted">{plan.note}</p>
            </Reveal>
          ))}
        </ul>
      </div>

      <p className="mt-12 max-w-measure text-body-sm text-muted lg:mt-16">
        {PAID_ADS_FINE_PRINT}
      </p>
    </Section>
  );
}
