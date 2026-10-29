"use client";

import { useState } from "react";

/**
 * The solar lead cost calculator widget.
 *
 * Inputs: average deal margin (dollars), close rate on contacted (percent),
 * contact rate (percent), fraction of margin to leave after lead cost
 * (percent, defaults to 50).
 *
 * Outputs: break-even cost per lead (margin x close x contact), and the
 * target cost per lead (break-even x margin-remaining fraction).
 *
 * All maths runs client-side. No API calls, no analytics on the inputs.
 */
export function LeadCostCalculator() {
  const [margin, setMargin] = useState(5000);
  const [closeRate, setCloseRate] = useState(20);
  const [contactRate, setContactRate] = useState(70);
  const [keepFraction, setKeepFraction] = useState(50);

  const closeDec = closeRate / 100;
  const contactDec = contactRate / 100;
  const keepDec = keepFraction / 100;

  const breakEven = margin * closeDec * contactDec;
  const target = breakEven * (1 - keepDec);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      {/* Inputs */}
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Average gross margin per signed deal"
          hint="Contract value minus hardware, labour, permits, financing fees, sales commission."
          suffix="$"
          value={margin}
          min={500}
          max={30000}
          step={100}
          onChange={setMargin}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Close rate on contacted leads"
          hint="Of the leads you actually get on the phone, what percentage sign."
          suffix="%"
          value={closeRate}
          min={1}
          max={60}
          step={1}
          onChange={setCloseRate}
        />
        <Field
          label="Contact rate"
          hint="Of leads received, what percentage you actually get on the phone."
          suffix="%"
          value={contactRate}
          min={10}
          max={100}
          step={1}
          onChange={setContactRate}
        />
        <Field
          label="Margin to keep after lead cost"
          hint="How much of the margin you want the business to keep. The rest is your lead-cost budget."
          suffix="%"
          value={keepFraction}
          min={10}
          max={90}
          step={5}
          onChange={setKeepFraction}
        />
      </div>

      {/* Outputs */}
      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Break-even cost per lead"
          value={fmt(breakEven)}
          tone="muted"
          caption="Pay more than this and the business loses money per deal on average."
        />
        <Output
          label="Target cost per lead"
          value={fmt(target)}
          tone="accent"
          caption={`Keeps ${keepFraction}% of your margin for the business.`}
        />
        <div className="mt-2 rounded-control border border-line bg-surface p-5">
          <p className="label text-muted">The maths</p>
          <p className="mt-3 text-body-sm text-fg">
            {fmt(margin)} margin &times; {closeRate}% close rate &times; {contactRate}% contact rate ={" "}
            <strong>{fmt(breakEven)}</strong> break-even.
          </p>
          <p className="mt-2 text-body-sm text-muted">
            Keep {keepFraction}% of margin &rarr; target cost per lead <strong>{fmt(target)}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  suffix,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  hint: string;
  suffix: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}) {
  const display = format ? format(value) : String(value);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="label text-fg">{label}</label>
        <span className="text-h3 text-fg tabular-nums">
          {suffix === "$" ? `${suffix}${display}` : `${display}${suffix}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-accent"
        aria-label={label}
      />
      <p className="mt-2 text-body-sm text-muted">{hint}</p>
    </div>
  );
}

function Output({
  label,
  value,
  tone,
  caption,
}: {
  label: string;
  value: string;
  tone: "muted" | "accent";
  caption: string;
}) {
  return (
    <div>
      <p className={`label ${tone === "accent" ? "text-accent" : "text-muted"}`}>{label}</p>
      <p className="mt-2 font-display text-display-md text-fg tabular-nums">{value}</p>
      <p className="mt-2 max-w-measure text-body-sm text-muted">{caption}</p>
    </div>
  );
}
