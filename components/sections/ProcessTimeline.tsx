import { Reveal } from "@/components/ui/Reveal";
import { pad } from "@/lib/format";
import { PROCESS } from "@/lib/content/sections";

/**
 * The zigzag timeline: each step's text on one side, a numbered accent disc on
 * the other, sides swapping down the page, with a dashed curve running from
 * one disc to the next. Phones drop to a single column with the disc above
 * the text and a dashed spine down through the discs.
 *
 * The dashed line is one SVG per gap, stretched to the gap's box with
 * `preserveAspectRatio="none"`. `vectorEffect="non-scaling-stroke"` is what
 * keeps the dashes even: without it the stretch squashes them.
 */

/** Centre of the disc column as a percentage of the row, for the curve's ends. */
const RIGHT = 79;
const LEFT = 20;

function Disc({ n }: { n: number }) {
  return (
    <div className="flex size-20 items-center justify-center rounded-full bg-accent lg:size-40 xl:size-48">
      <span className="font-display text-display-md text-bone">{pad(n)}</span>
    </div>
  );
}

function Connector({ toLeft }: { toLeft: boolean }) {
  const d = toLeft
    ? `M${RIGHT} 0 C${RIGHT} 40, ${LEFT} 60, ${LEFT} 100`
    : `M${LEFT} 0 C${LEFT} 40, ${RIGHT} 60, ${RIGHT} 100`;
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="hidden h-24 w-full text-bone-muted lg:block xl:h-32"
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 10"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function ProcessTimeline() {
  return (
    <div className="mt-12 lg:mt-20">
      {PROCESS.map((step, i) => {
        // Step one puts the disc on the right, as the eye arrives from the headline.
        const discRight = i % 2 === 0;
        const last = i === PROCESS.length - 1;
        return (
          <div key={step.title} className={`relative ${last ? "" : "pb-12 lg:pb-0"}`}>
            {/* Phones: a dashed segment in the gap, on the discs' centre line. It
                stops short of the text rather than running through it. */}
            {!last && (
              <span
                aria-hidden
                className="absolute bottom-0 left-10 h-12 border-l border-dashed border-bone-muted lg:hidden"
              />
            )}

            <div className="grid gap-y-6 lg:grid-cols-12 lg:items-center lg:gap-x-6">
              <Reveal
                as="div"
                index={1}
                className={`order-1 flex lg:order-none lg:row-start-1 lg:col-span-5 lg:justify-center ${
                  discRight ? "lg:col-start-8" : "lg:col-start-1"
                }`}
              >
                <Disc n={i + 1} />
              </Reveal>

              <Reveal
                as="div"
                className={`order-2 lg:order-none lg:row-start-1 lg:col-span-5 ${
                  discRight ? "lg:col-start-1" : "lg:col-start-8"
                }`}
              >
                <h3 className="text-display-md">{step.title}</h3>
                <p className="label mt-3 text-accent">{step.time}</p>
                <p className="mt-5 max-w-measure text-body text-muted">{step.body}</p>
              </Reveal>
            </div>

            {!last && <Connector toLeft={discRight} />}
          </div>
        );
      })}
    </div>
  );
}
