import { LEGAL, type LegalDates, type LegalSection } from "./legal";
import { SITE } from "@/lib/site";

/**
 * The Data Processing Addendum.
 *
 * Structure follows the same published reference as the terms and the privacy
 * policy. Two deliberate departures from it, both improvements:
 *
 *   1. A security incident section with a stated notification window. The
 *      reference gives no window at all, which is the first thing a cautious
 *      client's counsel notices.
 *   2. A processing-details table in section 2, covering what a formal Annex I
 *      would carry: categories of data, data subjects, purpose and duration.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *  DELIBERATE EXCEPTION TO A SITE-WIDE RULE
 *
 *  Everywhere else on this site the platform underneath the system is called
 *  "the Platform" and its vendor is never named. Here it is named, because the
 *  owner decided a DPA is the one document where hiding the primary processor
 *  is indefensible: the Client's customers' data sits in it, and the Client has
 *  a right to know whose systems it is in.
 *
 *  This is not an oversight. Do not "fix" it by removing the name. The rule
 *  still holds on every other page.
 * ──────────────────────────────────────────────────────────────────────────
 *
 * NOT LEGAL ADVICE. Have an attorney in the governing state read this before
 * it is published.
 */

export const DPA_DATES: LegalDates = {
  effective: "2026-09-17",
  lastUpdated: "2026-09-17",
  lastReviewed: "2026-09-17",
};

export interface SubProcessor {
  name: string;
  purpose: string;
  location: string;
}

/**
 * Named sub-processors. A DPA that lists none, or hides the main one, is not
 * worth signing. Anything still to confirm is written as a visible blank and
 * warns on the page rather than being quietly left out: an omitted
 * sub-processor is a disclosure failure, a marked one is an unfinished
 * document.
 */
export const SUB_PROCESSORS: readonly SubProcessor[] = [
  {
    name: "HighLevel",
    purpose: "The CRM, automation and messaging platform the Services run on",
    location: "United States",
  },
  {
    name: LEGAL.paymentProcessor,
    purpose: "Payment processing and card storage",
    location: "United States",
  },
  {
    name: "Twilio",
    purpose: "Telephone numbers, call routing and text message delivery",
    location: "United States",
  },
  { name: "Mailgun", purpose: "Email delivery", location: "United States" },
  {
    name: "Google",
    purpose: "Website analytics, advertising delivery and measurement",
    location: "United States",
  },
  { name: "Meta", purpose: "Advertising delivery and measurement", location: "United States" },
  {
    name: "OpenAI",
    purpose: "Drafting and summarising, only where the Client has bought a product that uses it",
    location: "United States",
  },
  {
    name: "Zapier",
    purpose: "Moving data between systems, only where the Client has asked for an integration",
    location: "United States",
  },
  {
    name: "[TO SET: hosting provider]",
    purpose: "Website hosting and content delivery",
    location: "United States",
  },
];

/** Any sub-processor still unnamed. Drives the page's readiness warning. */
export const unnamedSubProcessors = (): number =>
  SUB_PROCESSORS.filter((s) => s.name.startsWith("[TO SET:")).length;

export const DPA: readonly LegalSection[] = [
  {
    id: "definitions",
    title: "Definitions",
    body: [
      {
        t: "p",
        text: "Terms defined in the Terms of Service carry the same meaning here. In addition:",
      },
      {
        t: "defs",
        items: [
          {
            term: "Applicable Privacy Laws",
            text: "The privacy and data protection laws that apply to the Client Personal Information, including the California Consumer Privacy Act as amended by the California Privacy Rights Act, and the comprehensive privacy laws of Virginia, Colorado, Connecticut, Oregon, Texas, Montana, Delaware and other states as they take effect.",
          },
          {
            term: "Client Personal Information",
            text: "Personal information about the Client's own customers, prospects and contacts that we process on the Client's behalf through the Services. It does not include information about the Client itself, which is covered by the Privacy Policy.",
          },
          {
            term: "Processing",
            text: "Any operation performed on personal information, including collecting, storing, using, disclosing, transmitting and deleting it.",
          },
          {
            term: "Security Incident",
            text: "A confirmed breach of security leading to the accidental or unlawful destruction, loss, alteration, or unauthorised disclosure of or access to Client Personal Information.",
          },
          {
            term: "Sub-processor",
            text: "A third party we engage to process Client Personal Information in order to deliver the Services. The current list is in section [[sub-processors]].",
          },
        ],
      },
    ],
  },

  {
    id: "roles-and-scope",
    title: "Roles and Scope of Processing",
    body: [
      {
        t: "note",
        text: "The Client is the Business and Controller of Client Personal Information. We are the Service Provider and Processor. The Client decides what is collected, from whom, and why. We process it only to deliver the Services.",
      },
      {
        t: "p",
        text: "This Addendum forms part of the Terms of Service and applies whenever we process Client Personal Information. Where it conflicts with the Terms, this Addendum governs for that processing.",
      },
      {
        t: "p",
        text: "The details of the processing are as follows.",
      },
      {
        t: "table",
        head: ["", "Detail"],
        rows: [
          [
            "Subject matter",
            "Delivering the Services: the website, messaging, follow-up automation, the inbox, the review funnel and any separately purchased product",
          ],
          [
            "Duration",
            "For as long as the Client's subscription is active, then as set out in section [[data-retention-and-deletion]]",
          ],
          [
            "Nature and purpose",
            "Storing, organising, transmitting and deleting contact records and communications, on the Client's instructions",
          ],
          [
            "Categories of data",
            "Names, telephone numbers, email addresses, postal addresses, message content, call recordings and metadata, enquiry details, appointment records",
          ],
          [
            "Categories of data subject",
            "The Client's customers, prospective customers and enquirers",
          ],
          [
            "Sensitive information",
            "None is requested or required. The Client should not load it, and section [[processing-instructions-and-restrictions]] applies if they do",
          ],
        ],
      },
    ],
  },

  {
    id: "processing-instructions-and-restrictions",
    title: "Processing Instructions and Restrictions",
    body: [
      {
        t: "p",
        text: "We process Client Personal Information only on the Client's documented instructions, which are the Terms of Service, this Addendum, the configuration of the Client's account, and any further written instruction the Client gives us.",
      },
      { t: "p", text: "We will not do any of the following." },
      {
        t: "ul",
        items: [
          "**Sell Client Personal Information**, or share it for cross-context behavioural advertising.",
          "**Retain, use or disclose it for any purpose other than delivering the Services**, or as otherwise permitted by Applicable Privacy Laws.",
          "**Retain, use or disclose it outside the direct business relationship** between us and the Client.",
          "**Combine it with personal information from another source**, except where Applicable Privacy Laws permit it for a service provider.",
          "**Use it to build or improve our own products or models**, or to train any general-purpose system.",
          "**Use it to market our own services** to the Client's customers.",
        ],
      },
      {
        t: "p",
        text: "We will tell the Client if we determine that an instruction is likely to breach Applicable Privacy Laws, and we may decline to act on it.",
      },
      {
        t: "p",
        text: "We certify that we understand these restrictions and will comply with them, as Applicable Privacy Laws require of a service provider.",
      },
      {
        t: "p",
        text: "The Client is responsible for the lawfulness of the information it loads, for the consents behind the messages it sends, and for the privacy notice it gives its own customers.",
      },
    ],
  },

  {
    id: "confidentiality-and-personnel",
    title: "Confidentiality and Personnel",
    body: [
      {
        t: "p",
        text: "We limit access to Client Personal Information to the people who need it to deliver the Services or to support the Client.",
      },
      {
        t: "p",
        text: "Everyone with access is bound by a written confidentiality obligation that survives the end of their engagement with us, and is trained on handling personal information in proportion to what their role touches.",
      },
      {
        t: "p",
        text: "Access is removed promptly when someone no longer needs it, including on the day an engagement ends.",
      },
    ],
  },

  {
    id: "sub-processors",
    title: "Sub-processors",
    body: [
      {
        t: "p",
        text: "The Client gives general authorisation for us to engage the Sub-processors listed below. Each is bound by written terms no less protective than this Addendum, and we remain responsible to the Client for their performance.",
      },
      {
        t: "table",
        head: ["Sub-processor", "What it does", "Location"],
        rows: SUB_PROCESSORS.map((sp) => [sp.name, sp.purpose, sp.location]),
      },
      {
        t: "note",
        text: "We will give the Client at least 30 days' written notice before engaging a new Sub-processor or materially changing what an existing one does. The Client may object on reasonable data protection grounds within that period, and we will work in good faith to resolve it, which may include not making the change or offering the Client the ability to terminate without penalty.",
      },
      {
        t: "p",
        text: "Notice is given to the email address on the Client's account. Clients who want to be told at a different address should tell us.",
      },
    ],
  },

  {
    id: "security",
    title: "Security",
    body: [
      {
        t: "p",
        text: "We maintain technical and organisational measures appropriate to the risk, including the following.",
      },
      {
        t: "ul",
        items: [
          "**Encryption in transit** for data moving between systems, and **encryption at rest** for stored data.",
          "**Access controls** limiting access to what a role requires, with multi-factor authentication on accounts that can reach Client Personal Information.",
          "**Logging** of administrative access, so it is possible to establish who did what.",
          "**Separation** of Client accounts, so one Client cannot reach another's data.",
          "**Review of Sub-processors** before engagement and periodically afterwards.",
          "**Backups**, and a documented route to restore from them.",
          "**Prompt removal of access** when someone leaves or changes role.",
        ],
      },
      {
        t: "p",
        text: "We review these measures at least annually and may change them, provided the level of protection is not reduced.",
      },
    ],
  },

  {
    id: "security-incidents",
    title: "Security Incidents",
    body: [
      {
        t: "note",
        text: "We will notify the Client of a Security Incident affecting their Client Personal Information without undue delay, and in any event within 72 hours of becoming aware of it.",
      },
      { t: "p", text: "The notification will include, as far as we know it at the time:" },
      {
        t: "ol",
        items: [
          "What happened, and when we became aware of it.",
          "The categories and approximate volume of information affected.",
          "The likely consequences.",
          "What we are doing about it, and what we suggest the Client does.",
          "A contact who can answer further questions.",
        ],
      },
      {
        t: "p",
        text: "We will not delay the initial notification in order to complete an investigation. Where we do not yet have the full picture we will say so and follow up as we learn more.",
      },
      {
        t: "p",
        text: "We will assist the Client with any notification the Client must make to a regulator or to affected individuals. Deciding whether such a notification is required is the Client's call, because the Client is the Controller.",
      },
      {
        t: "p",
        text: "A notification under this section is not an admission of fault or liability.",
      },
    ],
  },

  {
    id: "consumer-requests-and-assistance",
    title: "Consumer Requests and Assistance",
    body: [
      {
        t: "p",
        text: "If one of the Client's customers contacts us directly to exercise a privacy right, we will not action it ourselves. We will pass it to the Client without undue delay and tell the person we have done so, unless the law requires otherwise. The Client controls the data and decides.",
      },
      {
        t: "p",
        text: "We will give the Client reasonable assistance in meeting its obligations, including locating, exporting, correcting or deleting a person's information within the Services, and providing information the Client needs for a data protection assessment.",
      },
      {
        t: "p",
        text: "Where the Client can do it themselves in their account, that is usually faster than asking us.",
      },
    ],
  },

  {
    id: "data-retention-and-deletion",
    title: "Data Retention and Deletion",
    body: [
      {
        t: "p",
        text: "We retain Client Personal Information only as long as we need it to deliver the Services, or as the law requires.",
      },
      {
        t: "p",
        text: "On termination the Client has 30 days to export their data, as the Terms of Service provide. After that we will delete it, or return it and then delete it if the Client asks in writing during that window.",
      },
      {
        t: "p",
        text: "We may keep information where the law requires it, such as billing and tax records, or where it is subject to a legal hold. Anything kept on that basis stays protected by this Addendum for as long as we hold it, and is not used for any other purpose.",
      },
      {
        t: "p",
        text: "Backups are overwritten on their own cycle, so deleted information may persist in a backup briefly after deletion. It is not restored except to recover from a failure.",
      },
    ],
  },

  {
    id: "audits",
    title: "Audits",
    body: [
      {
        t: "p",
        text: "On reasonable written request, and no more than once in any 12-month period unless a Security Incident or a regulator gives cause, we will provide the information reasonably needed to show we are meeting this Addendum.",
      },
      {
        t: "p",
        text: "Where that is not sufficient, the Client may audit on site, on at least 30 days' written notice, during normal business hours, without unreasonable disruption, and subject to confidentiality. The Client bears its own costs and ours where an audit is repeated within the same period.",
      },
      {
        t: "p",
        text: "An audit may not extend to another Client's data, to our own confidential commercial information, or to anything that would put us in breach of an obligation to a third party.",
      },
      {
        t: "p",
        text: "If we obtain an independent audit report or certification, providing it will satisfy a request under this section.",
      },
    ],
  },

  {
    id: "international-transfers",
    title: "International Transfers",
    body: [
      {
        t: "p",
        text: `We process Client Personal Information in the ${LEGAL.country}, and our Sub-processors process it there. The Services are not currently offered to Clients in the United Kingdom or the European Economic Area, and this Addendum does not incorporate Standard Contractual Clauses.`,
      },
      {
        t: "p",
        text: "If we begin offering the Services in those regions, this Addendum will be updated with an appropriate transfer mechanism before we take on a Client there.",
      },
      {
        t: "p",
        text: "Where a transfer outside the United States becomes necessary to deliver the Services, we will put appropriate safeguards in place first and tell the Client.",
      },
    ],
  },

  {
    id: "liability",
    title: "Liability",
    body: [
      {
        t: "p",
        text: "Liability under this Addendum is subject to the exclusions and the cap in the Terms of Service, except where Applicable Privacy Laws do not permit that.",
      },
      {
        t: "p",
        text: "Nothing in this Addendum relieves either of us of an obligation imposed directly on us by Applicable Privacy Laws.",
      },
    ],
  },

  {
    id: "term-and-changes",
    title: "Term and Changes",
    body: [
      {
        t: "p",
        text: "This Addendum takes effect when the Client first accepts the Terms of Service and continues for as long as we process Client Personal Information. The obligations that by their nature should outlast it do so, including confidentiality, deletion and liability.",
      },
      {
        t: "p",
        text: "We may update this Addendum to reflect a change in law, in our Sub-processors or in how the Services work. Where a change materially reduces the Client's protection we will give at least 30 days' written notice before it takes effect.",
      },
      {
        t: "p",
        text: "This Addendum is incorporated into the Terms of Service and takes effect without a separate signature. A Client who needs a countersigned copy can ask for one.",
      },
    ],
  },

  {
    id: "contact",
    title: "Contact",
    body: [
      {
        t: "p",
        text: "Questions about this Addendum, sub-processor objections and audit requests all go to the same place.",
      },
      {
        t: "defs",
        items: [
          { term: "Company", text: `${LEGAL.entity}, trading as ${LEGAL.tradingAs}` },
          { term: "Email", text: LEGAL.email },
          ...(LEGAL.phone ? [{ term: "Phone", text: LEGAL.phone }] : []),
          ...(LEGAL.address ? [{ term: "Address", text: LEGAL.address }] : []),
          { term: "Web", text: SITE.url.replace(/^https?:\/\//, "") },
        ],
      },
    ],
  },
];
