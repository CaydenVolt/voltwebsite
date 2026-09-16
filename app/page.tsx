import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SeparateProducts } from "@/components/sections/SeparateProducts";
import { Trades } from "@/components/sections/Trades";
import { Process } from "@/components/sections/Process";
import { WhyVolt } from "@/components/sections/WhyVolt";
import { Partners } from "@/components/sections/Partners";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ as FAQ_ITEMS } from "@/lib/content/faq";
import { SITE } from "@/lib/site";
import { faqSchema } from "@/lib/seo";

export default function Home() {
  return (
    <main className="flex-1">
      <JsonLd data={faqSchema(FAQ_ITEMS, SITE.url)} />
      <Hero />
      <Services />
      <SeparateProducts />
      {/* Diagonal transitions, homepage only: left, straight, right, left,
          straight, right. Only where two surfaces differ, so there is
          something for the cut to reveal. */}
      <Trades tilt="left" />
      <Process />
      <WhyVolt tilt="right" />
      <Partners tilt="left" />
      <FAQ />
      <FinalCTA tilt="right" />
    </main>
  );
}
