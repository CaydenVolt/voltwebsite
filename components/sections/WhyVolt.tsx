import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { pad } from "@/lib/format";
import { WHY } from "@/lib/content/sections";

/** Six short reasons. Three columns, hairline over each item, no backgrounds. */
export function WhyVolt({ tilt }: { tilt?: "left" | "right" }) {
  return (
    <Section id="why" variant="deep" tilt={tilt} aria-labelledby="why-h">
      <SectionLabel rule>Why Volt</SectionLabel>
      <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
        <Reveal as="h2" id="why-h" className="text-display-md lg:col-span-7">
          Why solar companies stay on it.
        </Reveal>
      </div>
      <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {WHY.map((item, i) => (
          <Reveal key={item.title} as="li" index={i} className="border-t border-line pt-5">
            <span className="label text-muted">{pad(i + 1)}</span>
            <h3 className="mt-3 text-h3">{item.title}</h3>
            <p className="mt-2 text-body text-muted">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
