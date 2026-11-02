"use client";

import { useState } from "react";

type InverterArch = "string" | "optimiser" | "microinverter";

export function ShadeImpactCalculator() {
  const [shadeFraction, setShadeFraction] = useState(15);
  const [shadeTiming, setShadeTiming] = useState<"morning" | "midday" | "afternoon">("midday");
  const [arch, setArch] = useState<InverterArch>("string");
  const [annualProduction, setAnnualProduction] = useState(10000);

  const timingWeight = shadeTiming === "midday" ? 1.5 : 0.8;
  const archMultiplier = arch === "string" ? 1.7 : arch === "optimiser" ? 1.0 : 1.0;

  const yieldLossPct = Math.min(shadeFraction * timingWeight * archMultiplier * 0.01, 1) * 100;
  const kwhLost = Math.round(annualProduction * (yieldLossPct / 100));
  const kwhNet = annualProduction - kwhLost;

  const fmt = (n: number) => new Intl.NumberFormat("en-US").format(Math.round(n));

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Shaded fraction of array"
          hint="Approximate percentage of your array that is in shadow during production hours."
          suffix="%"
          value={shadeFraction}
          min={0}
          max={60}
          step={5}
          onChange={setShadeFraction}
        />
        <div>
          <label className="label text-fg">When does the shade fall?</label>
          <div className="mt-3 flex gap-2">
            {(["morning", "midday", "afternoon"] as const).map((t) => (
              <Choice key={t} active={shadeTiming === t} onClick={() => setShadeTiming(t)}>
                {t === "morning" ? "7am to 10am" : t === "midday" ? "10am to 3pm" : "3pm to 6pm"}
              </Choice>
            ))}
          </div>
          <p className="mt-2 text-body-sm text-muted">
            Midday shade costs 1.5 to 2x more than morning or afternoon shade.
          </p>
        </div>
        <div>
          <label className="label text-fg">Inverter architecture</label>
          <div className="mt-3 flex flex-wrap gap-2">
            {(["string", "optimiser", "microinverter"] as const).map((a) => (
              <Choice key={a} active={arch === a} onClick={() => setArch(a)}>
                {a === "string" ? "String inverter" : a === "optimiser" ? "DC optimisers" : "Microinverters"}
              </Choice>
            ))}
          </div>
          <p className="mt-2 text-body-sm text-muted">
            String inverters propagate shade loss across the whole string; optimisers and microinverters isolate it.
          </p>
        </div>
        <Field
          label="Expected annual production (unshaded, kWh)"
          hint="Baseline annual yield if there were no shade. Typical US residential: 8,000 to 14,000 kWh."
          suffix=" kWh"
          value={annualProduction}
          min={3000}
          max={25000}
          step={500}
          onChange={setAnnualProduction}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Annual yield loss"
          value={`${yieldLossPct.toFixed(1)}%`}
          tone={yieldLossPct > 20 ? "accent" : "muted"}
          caption={`Shaded fraction x timing weight x inverter multiplier.`}
        />
        <Output
          label="kWh lost to shade per year"
          value={`${fmt(kwhLost)} kWh`}
          tone="accent"
          caption={`Net production: ${fmt(kwhNet)} kWh per year.`}
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
          {suffix.startsWith(" ") ? `${display}${suffix}` : `${display}${suffix}`}
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

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-control border px-4 py-2 text-body-sm transition-colors ${
        active
          ? "border-accent bg-accent text-bg"
          : "border-line bg-surface text-fg hover:border-fg"
      }`}
    >
      {children}
    </button>
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
