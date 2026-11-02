"use client";

import { useState } from "react";

export function LoanVsCashCalculator() {
  const [grossCost, setGrossCost] = useState(25000);
  const [annualSavings, setAnnualSavings] = useState(2000);
  const [loanApr, setLoanApr] = useState(5);
  const [loanTermYears, setLoanTermYears] = useState(20);
  const [dealerFeePct, setDealerFeePct] = useState(20);

  const federalCredit = grossCost * 0.3;
  const cashNetCost = grossCost - federalCredit;

  const loanPrincipal = grossCost * (1 + dealerFeePct / 100);
  const monthlyRate = loanApr / 100 / 12;
  const totalMonths = loanTermYears * 12;
  const monthlyPayment =
    loanPrincipal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPaid = monthlyPayment * totalMonths;
  const loanTotalCost = totalPaid - federalCredit;

  const cashYear25 = (annualSavings * 25) - cashNetCost;
  const loanYear25 = (annualSavings * 25) - loanTotalCost;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  const cashWins = cashYear25 > loanYear25;

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Gross system cost (before tax credit)"
          suffix="$"
          hint="System price before any incentives."
          value={grossCost}
          min={10000}
          max={60000}
          step={500}
          onChange={setGrossCost}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Expected annual utility savings"
          suffix="$"
          hint="Year-one savings; this calculator does not compound rate increases to keep comparison clean."
          value={annualSavings}
          min={500}
          max={6000}
          step={100}
          onChange={setAnnualSavings}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Solar loan APR"
          suffix="%"
          hint="Advertised rate on the solar loan. Does not include dealer fees."
          value={loanApr}
          min={0}
          max={15}
          step={0.25}
          onChange={setLoanApr}
          format={(v) => v.toFixed(2)}
        />
        <Field
          label="Loan term"
          suffix=" years"
          hint="Common terms: 10, 15, 20, 25 years."
          value={loanTermYears}
          min={5}
          max={25}
          step={1}
          onChange={setLoanTermYears}
        />
        <Field
          label="Dealer fee"
          suffix="%"
          hint="Hidden fee built into solar loan principal. Common range: 10% to 30%."
          value={dealerFeePct}
          min={0}
          max={35}
          step={1}
          onChange={setDealerFeePct}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Cash path 25-year net"
          value={fmt(cashYear25)}
          tone={cashWins ? "accent" : "muted"}
          caption={`Net cost ${fmt(cashNetCost)} after federal credit.`}
        />
        <Output
          label="Loan path 25-year net"
          value={fmt(loanYear25)}
          tone={!cashWins ? "accent" : "muted"}
          caption={`Total paid ${fmt(totalPaid)} minus credit ${fmt(federalCredit)}.`}
        />
        <Output
          label={cashWins ? "Cash saves" : "Loan saves"}
          value={fmt(Math.abs(cashYear25 - loanYear25))}
          tone="accent"
          caption={cashWins ? "over the 25-year window." : "over the 25-year window (if advertised APR is correct)."}
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
          {suffix === "$" ? `${suffix}${display}` : suffix.startsWith(" ") ? `${display}${suffix}` : `${display}${suffix}`}
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
