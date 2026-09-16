/**
 * Single source of truth for CRM field names.
 * Forms, CTAs and the CRM adapter all import from here: never hard-code a key.
 */
export const FIELDS = {
  firstName: "first_name",
  lastName: "last_name",
  email: "email",
  phone: "phone",
  company: "company",
  website: "website",
  monthlyAdSpend: "monthly_ad_spend",
  message: "message",
  source: "source",
  page: "page",
} as const;

export type FieldKey = keyof typeof FIELDS;
export type FieldName = (typeof FIELDS)[FieldKey];
export type FieldValues = Partial<Record<FieldName, string>>;
