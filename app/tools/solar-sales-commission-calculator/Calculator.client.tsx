"use client";

import { useState } from "react";

type Model = "flat-pct" | "per-watt" | "tiered";

/**
 * Sales commission calculator. Inputs: monthly signed deals, average
 * contract value, average system kW, business gross margin %, commission
 * model + model-specific parameters. Outputs: rep take-home, business
 * gross margin after commission.
 */
export function SalesCommissionCalculator() {
  const [deals, setDeals] = useState(6);
  const [contractValue, setContractValue] = useState(25000);
  const [systemKw, setSystemKw] = useState(8);
  const [grossMarginPct, setGrossMarginPct] = useState(20);
  const [model, setModel] = useState<Model>("flat-pct");

  const [flatPct, setFlatPct] = useState(6);
  const [perWatt, setPerWatt] = useState(0.25);
  const [tierThreshold, setTierThreshold] = useState(5);
  const [tierLow, setTierLow] = useState(5);
  const [tierHigh, setTierHigh] = useState(8);

  const monthlyRevenue = deals * contractValue;
  const grossProfit = monthlyRevenue * (grossMarginPct / 100);
  const totalWatts = deals * systemKw * 1000;

  let commission = 0;
  if (model === "flat-pct") {
    commission = monthlyRevenue * (flatPct / 100);
  } else if (model === "per-watt") {
    commission = totalWatts * perWatt;
  } else {
    const belowDeals = Math.min(deals, tierThreshold);
    const aboveDeals = Math.max(0, deals - tierThreshold);
    commission = belowDeals * contractValue * (tierLow / 100) + aboveDeals * contractValue * (tierHigh / 100);
  }

  const marginAfterCommission = grossProfit - commission;
  const marginAfterCommissionPct = monthlyRevenue > 0 ? (marginAfterCommission / monthlyRevenue) * 100 : 0;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field label="Signed deals per rep per month" hint="A top solar rep typically closes 4 to 10 deals a month on inbound leads." suffix="" value={deals} min={1} max={30} step={1} onChange={setDeals} format={(v) => String(v)} />
        <Field label="Average contract value" hint="US residential solar typically $18,000 to $35,000 per contract." suffix="$" value={contractValue} min={5000} max={60000} step={500} onChange={setContractValue} format={(v) => new Intl.NumberFormat("en-US").format(v)} />
        <Field label="Average system size" hint="US residential average is 7 to 9 kW." suffix=" kW" value={systemKw} min={3} max={20} step={0.5} onChange={setSystemKw} format={(v) => v.toFixed(1)} />
        <Field label="Business gross margin on contract" hint="Gross margin before commission: 15% to 25% is typical." suffix="%" value={grossMarginPct} min={5} max={40} step={1} onChange={setGrossMarginPct} />

        <div>
          <p className="label text-fg">Commission model</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <ModelButton value="flat-pct" current={model} onClick={() => setModel("flat-pct")}>Flat percentage</ModelButton>
            <ModelButton value="per-watt" current={model} onClick={() => setModel("per-watt")}>Per watt</ModelButton>
            <ModelButton value="tiered" current={model} onClick={() => setModel("tiered")}>Tiered</ModelButton>
          </div>
        </div>

        {model === "flat-pct" && (
          <Field label="Flat commission percentage of contract value" hint="US residential solar commonly 4% to 8%." suffix="%" value={flatPct} min={1} max={15} step={0.25} onChange={setFlatPct} format={(v) => v.toFixed(2)} />
        )}
        {model === "per-watt" && (
          <Field label="Commission per signed watt" hint="US residential solar commonly $0.15 to $0.45 per watt." suffix="" value={perWatt * 100} min={5} max={100} step={1} onChange={(v) => setPerWatt(v / 100)} format={(v) => `$${(v / 100).toFixed(2)}`} />
        )}
        {model === "tiered" && (
          <>
            <Field label="Tier threshold (deals/month)" hint="Below this count, rep earns the low rate; above it, the high rate." suffix="" value={tierThreshold} min={1} max={20} step={1} onChange={setTierThreshold} format={(v) => `${v} deals`} />
            <Field label="Low tier percentage" hint="Commission below the threshold." suffix="%" value={tierLow} min={1} max={15} step={0.25} onChange={setTierLow} format={(v) => v.toFixed(2)} />
            <Field label="High tier percentage" hint="Commission at or above the threshold." suffix="%" value={tierHigh} min={1} max={20} step={0.25} onChange={setTierHigh} format={(v) => v.toFixed(2)} />
          </>
        )}
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output label="Monthly rep take-home" value={fmt(commission)} tone="accent" caption={`On ${deals} deals, ${fmt(monthlyRevenue)} in signed contract value.`} />
        <Output label="Business margin after commission" value={fmt(marginAfterCommission)} tone={marginAfterCommission >= 0 ? "muted" : "warn"} caption={`${marginAfterCommissionPct.toFixed(1)}% of contract value, before overhead and lead cost.`} />
        <Output label="Rep annual earnings (if sustained)" value={fmt(commission * 12)} tone="muted" caption="Assumes 12 months at this run rate." />
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

function Output({ label, value, tone, caption }: { label: string; value: string; tone: "muted" | "accent" | "warn"; caption: string }) {
  const toneClass = tone === "accent" ? "text-accent" : "text-muted";
  return (
    <div>
      <p className={`label ${toneClass}`}>{label}</p>
      <p className="mt-2 font-display text-display-md text-fg tabular-nums">{value}</p>
      <p className="mt-2 max-w-measure text-body-sm text-muted">{caption}</p>
    </div>
  );
}

function ModelButton({ value, current, onClick, children }: { value: Model; current: Model; onClick: () => void; children: React.ReactNode }) {
  const active = value === current;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-control border px-4 py-2 text-body-sm transition-colors duration-100 ${
        active ? "border-fg bg-fg text-bone" : "border-line text-fg hover:border-fg"
      }`}
    >
      {children}
    </button>
  );
}
