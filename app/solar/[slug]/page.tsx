import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StatePage } from "@/components/states/StatePage";
import { pageMetadata } from "@/lib/seo";
import { getState, getStates, stateHref } from "@/lib/content/states";

type Props = PageProps<"/solar/[slug]">;

export function generateStaticParams() {
  return getStates().map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const s = getState(slug);
  if (!s) return {};
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: stateHref(s.slug),
  });
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const s = getState(slug);
  if (!s) notFound();
  return <StatePage state={s} />;
}
