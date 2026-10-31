import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPage } from "@/components/cities/CityPage";
import { pageMetadata } from "@/lib/seo";
import { getCity, cityHref, getCities } from "@/lib/content/cities";
import { getState } from "@/lib/content/states";

type Props = PageProps<"/solar/[slug]/[city]">;

export function generateStaticParams() {
  return getCities().map((c) => ({ slug: c.stateSlug, city: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug, city } = await props.params;
  const c = getCity(slug, city);
  if (!c) return {};
  return pageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: cityHref(c.stateSlug, c.slug),
  });
}

export default async function Page(props: Props) {
  const { slug, city } = await props.params;
  const c = getCity(slug, city);
  if (!c) notFound();
  const s = getState(c.stateSlug);
  if (!s) notFound();
  return <CityPage city={c} state={s} />;
}
