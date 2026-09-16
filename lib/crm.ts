import { FIELDS, type FieldValues } from "@/lib/fields";

export type CRMEvent = "lead" | "booking_click";

export interface CRMPayload {
  event: CRMEvent;
  /** Where on the site this came from, e.g. "hero_primary" */
  source: string;
  fields?: FieldValues;
}

/**
 * The one door to the CRM. Every form submit and every CTA click goes through
 * here. Stubbed with console.log until the GoHighLevel webhook is wired up.
 */
export async function submitToCRM(payload: CRMPayload): Promise<{ ok: true }> {
  console.log("[crm] submitToCRM", payload);
  return { ok: true };
}

/**
 * Fire-and-forget CTA tracking. Booking CTAs stay plain links to the
 * scheduler; this only reports the click.
 */
export function trackCTA(source: string): void {
  void submitToCRM({
    event: "booking_click",
    source,
    fields: {
      [FIELDS.page]: typeof window !== "undefined" ? window.location.pathname : "/",
    },
  });
}
