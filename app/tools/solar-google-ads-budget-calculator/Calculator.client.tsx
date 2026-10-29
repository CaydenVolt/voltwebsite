"use client";

import { useState } from "react";

/**
 * Google Ads budget back-solver. Inputs: target signed deals, close rate on
 * contacted, contact rate, CPL low, CPL high. Output: low and high monthly
 * budget estimates, with a 20% management/testing buffer applied.
 */
export function GoogleAdsBudgetCalculator() {
  const [targetDeals, setTargetDeals] = useState(5);
  const [closeRate, setCloseRate] = useState(20);
  const [contactRate, setContactRate] = useState(70);
  const [cplLow, setCplLow] = useState(100);
  const [cplHigh, setCplHigh] = useState(200);

  const contactedNeeded = targetDeals / (closeRate / 100);
  const leadsNeeded = contactedNeeded / (contactRate / 100);
  const bufferMultiplier = 1.2;
  const budgetLow = leadsNeeded * cplLow * bufferMultiplier;
  const budgetHigh = leadsNeeded * cplHigh * bufferMultiplier;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Target signed deals per month from Google Ads"
          hint="Only the deals attributable to paid Google Search, not every channel."
          suffix=""
          value={targetDeals}
          min={1}
          max={50}
          step={1}
          onChange={setTargetDeals}
          format={(v) => String(v)}
        />
        <Field
          label="Close rate on contacted leads"
          hint="Of leads you successfully get on the phone, the percentage that sign."
          suffix="%"
          value={closeRate}
          min={5}
          max={50}
          step={1}
          onChange={setCloseRate}
        />
        <Field
          label="Contact rate"
          hint="Of leads received, the percentage you actually get on the phone."
          suffix="%"
          value={contactRate}
          min={10}
          max={100}
          step={1}
          onChange={setContactRate}
        />
        <Field
          label="Cost per lead: low end of your range"
          hint="For Google Search ads targeting US residential solar, $75 to $120 is common in less competitive metros."
          suffix="$"
          value={cplLow}
          min={25}
          max={400}
          step={5}
          onChange={setCplLow}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Cost per lead: high end of your range"
          hint="$200 to $300+ in heavily competitive metros like LA, Phoenix, Austin, Miami."
          suffix="$"
          value={cplHigh}
          min={25}
          max={500}
          step={5}
          onChange={setCplHigh}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Total leads needed per month"
          value={Math.ceil(leadsNeeded).toString()}
          tone="muted"
          caption={`${Math.ceil(contactedNeeded)} contacted leads, scaled up for ${contactRate}% contact rate.`}
        />
        <Output
          label="Monthly budget range"
          value={`${fmt(budgetLow)} to ${fmt(budgetHigh)}`}
          tone="accent"
          caption={`Includes a 20% buffer for management and testing. Pure media would be ${fmt(leadsNeeded * cplLow)} to ${fmt(leadsNeeded * cplHigh)}.`}
        />
      </div>
    </div>
  );
}

function Field({
  label, hint, suffix, value, min, max, step, onChange, format,
}: {
  label: string; hint: string; suffix: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; format?: (v: number) => string;
}) {
  const display = format ? format(value) : String(value);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="label text-fg">{label}</label>
        <span className="text-h3 text-fg tabular-nums">
          {suffix === "$" ? `${suffix}${display}` : suffix ? `${display}${suffix}` : display}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-accent" aria-label={label}
      />
      <p className="mt-2 text-body-sm text-muted">{hint}</p>
    </div>
  );
}

function Output({ label, value, tone, caption }: { label: string; value: string; tone: "muted" | "accent"; caption: string }) {
  return (
    <div>
      <p className={`label ${tone === "accent" ? "text-accent" : "text-muted"}`}>{label}</p>
      <p className="mt-2 font-display text-display-md text-fg tabular-nums">{value}</p>
      <p className="mt-2 max-w-measure text-body-sm text-muted">{caption}</p>
    </div>
  );
}
