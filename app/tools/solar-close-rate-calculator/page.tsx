import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPage } from "@/components/tools/ToolPage";
import { pageMetadata } from "@/lib/seo";
import { getTool, toolHref } from "@/lib/content/tools";
import { CloseRateCalculator } from "./Calculator.client";

const SLUG = "solar-close-rate-calculator";

export function generateMetadata(): Metadata {
  const t = getTool(SLUG);
  if (!t) return {};
  return pageMetadata({ title: t.metaTitle, description: t.metaDescription, path: toolHref(t.slug) });
}

export default function Page() {
  const t = getTool(SLUG);
  if (!t) notFound();
  return <ToolPage tool={t} calculator={<CloseRateCalculator />} />;
}
