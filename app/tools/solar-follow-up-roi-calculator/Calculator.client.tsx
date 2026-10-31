"use client";

import { useState } from "react";

/**
 * Follow-up ROI calculator. Inputs: monthly cold leads, single-touch
 * baseline recovery %, multi-touch sequence recovery %, close rate on
 * appointments, deal margin. Outputs: extra deals and revenue vs baseline.
 */
export function FollowUpRoiCalculator() {
  const [coldLeads, setColdLeads] = useState(50);
  const [singleTouchRate, setSingleTouchRate] = useState(7);
  const [sequenceRate, setSequenceRate] = useState(20);
  const [closeRate, setCloseRate] = useState(25);
  const [margin, setMargin] = useState(5000);

  const singleTouchAppts = (coldLeads * singleTouchRate) / 100;
  const sequenceAppts = (coldLeads * sequenceRate) / 100;
  const extraAppts = Math.max(0, sequenceAppts - singleTouchAppts);
  const extraDeals = (extraAppts * closeRate) / 100;
  const extraRevenue = extraDeals * margin;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Cold leads per month"
          hint="Leads reached once (phone, text, email) but did not book or sign. Usually 50 to 70 percent of total leads."
          suffix=""
          value={coldLeads}
          min={5}
          max={500}
          step={5}
          onChange={setColdLeads}
          format={(v) => String(v)}
        />
        <Field
          label="Single-touch baseline recovery"
          hint="Cold leads that self-recover (call back, respond to one drip) without a real sequence."
          suffix="%"
          value={singleTouchRate}
          min={1}
          max={20}
          step={1}
          onChange={setSingleTouchRate}
        />
        <Field
          label="Multi-touch sequence recovery"
          hint="Cold leads converted to booked appointments by a well-configured 6-12 touch sequence."
          suffix="%"
          value={sequenceRate}
          min={5}
          max={40}
          step={1}
          onChange={setSequenceRate}
        />
        <Field
          label="Close rate on booked appointments"
          hint="Of appointments the sales rep sits, the percentage that sign."
          suffix="%"
          value={closeRate}
          min={10}
          max={70}
          step={1}
          onChange={setCloseRate}
        />
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
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Extra booked appointments per month"
          value={extraAppts.toFixed(1)}
          tone="muted"
          caption={`${sequenceAppts.toFixed(1)} with sequence vs ${singleTouchAppts.toFixed(1)} baseline.`}
        />
        <Output
          label="Extra signed deals per month"
          value={extraDeals.toFixed(1)}
          tone="muted"
          caption={`At ${closeRate}% close rate on appointments.`}
        />
        <Output
          label="Extra revenue per month"
          value={fmt(extraRevenue)}
          tone="accent"
          caption={`Annualised: ${fmt(extraRevenue * 12)} a year, from the sequence alone.`}
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
