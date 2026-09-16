import { Button } from "@/components/ui/Button";
import { bookingHref } from "@/lib/site";
import { PLAN, formatPrice } from "@/lib/content/pricing";

/**
 * The CTA that travels down the page with the reader, beside the article.
 * Hairlines and a label, not a floating card: the closing slab at the foot of
 * the page is the loud one, and this is the quiet one you can take at any
 * point in the read.
 */
export function AsideCTA({ source }: { source: string }) {
  return (
    <div className="mt-12 border-y border-line py-6 lg:mt-10">
      <p className="label text-muted">Stop reading, start booking</p>
      <p className="mt-4 text-body">
        Volt builds and runs the system this article describes: the site, the follow-up, the
        inbox and the review funnel, for {formatPrice()} a {PLAN.interval}.
      </p>
      <div className="mt-6">
        <Button href={bookingHref(source)} source={source} external size="sm">
          Book a 20-minute call
        </Button>
      </div>
      <p className="label mt-4 text-muted">No contracts. Cancel anytime.</p>
    </div>
  );
}
