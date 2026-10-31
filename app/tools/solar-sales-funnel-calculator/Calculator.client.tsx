"use client";

import { useState } from "react";

/**
 * Solar sales funnel calculator. Six-stage model with a visualization that
 * shows the drop at each stage, so the weakest stage is obvious.
 */
export function SalesFunnelCalculator() {
  const [leads, setLeads] = useState(100);
  const [contact, setContact] = useState(70);
  const [book, setBook] = useState(60);
  const [sit, setSit] = useState(70);
  const [close, setClose] = useState(25);
  const [install, setInstall] = useState(90);
  const [margin, setMargin] = useState(5000);

  const contacted = leads * (contact / 100);
  const booked = contacted * (book / 100);
  const sat = booked * (sit / 100);
  const signed = sat * (close / 100);
  const installed = signed * (install / 100);
  const revenue = installed * margin;

  const stages = [
    { label: "Leads received", value: leads, pct: 100 },
    { label: "Contacted", value: contacted, pct: contact },
    { label: "Booked", value: booked, pct: book },
    { label: "Sat", value: sat, pct: sit },
    { label: "Signed", value: signed, pct: close },
    { label: "Installed", value: installed, pct: install },
  ];
  const maxValue = Math.max(...stages.map((s) => s.value));

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field label="Monthly leads received" hint="Across every channel." suffix="" value={leads} min={5} max={500} step={5} onChange={setLeads} format={(v) => String(v)} />
        <Field label="Contact rate" hint="Of leads received, the percentage you get on the phone." suffix="%" value={contact} min={10} max={100} step={1} onChange={setContact} />
        <Field label="Book rate" hint="Of contacted leads, the percentage that book an appointment." suffix="%" value={book} min={10} max={100} step={1} onChange={setBook} />
        <Field label="Sit rate" hint="Of booked appointments, the percentage the rep actually sits." suffix="%" value={sit} min={10} max={100} step={1} onChange={setSit} />
        <Field label="Close rate on sat" hint="Of sat appointments, the percentage that sign." suffix="%" value={close} min={5} max={70} step={1} onChange={setClose} />
        <Field label="Install rate" hint="Of signed deals, the percentage that reach install (not cancelled)." suffix="%" value={install} min={60} max={100} step={1} onChange={setInstall} />
        <Field label="Average margin per installed deal" hint="Contract value minus all costs." suffix="$" value={margin} min={500} max={30000} step={100} onChange={setMargin} format={(v) => new Intl.NumberFormat("en-US").format(v)} />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <div>
          <p className="label text-muted">Funnel visualization</p>
          <ul className="mt-4 flex flex-col gap-3">
            {stages.map((s, i) => (
              <li key={s.label}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="label text-fg">{s.label}</span>
                  <span className="text-body-sm text-fg tabular-nums">
                    {s.value.toFixed(1)} {i > 0 ? `(${s.pct}%)` : ""}
                  </span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-surface">
                  <div
                    className={i === stages.length - 1 ? "h-full rounded-full bg-accent" : "h-full rounded-full bg-fg/40"}
                    style={{ width: `${(s.value / maxValue) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Output label="Monthly installed deals" value={installed.toFixed(1)} tone="muted" caption={`End-to-end: ${((installed / leads) * 100).toFixed(1)}% of leads reach install.`} />
        <Output label="Monthly revenue (gross profit)" value={fmt(revenue)} tone="accent" caption={`Annualised: ${fmt(revenue * 12)}.`} />
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
