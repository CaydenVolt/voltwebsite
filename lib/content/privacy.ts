import { LEGAL, contractingParty, type LegalDates, type LegalSection } from "./legal";
import { SITE } from "@/lib/site";

/**
 * The privacy policy. Structure follows the same published reference the terms
 * do, section for section, minus the parts that describe a mobile app: there
 * is no Volt app, so there is no app data, no push tokens and no store
 * permissions to disclose.
 *
 * Two rules carried over from the terms, for the same reasons:
 *   1. The platform underneath the system is never named. It is "the Platform".
 *   2. Nothing is disclosed that is not true. Where a practice is planned but
 *      not yet live, it is described as what it will be and flagged in code,
 *      never presented as something already running.
 *
 * NOT LEGAL ADVICE. Have an attorney in the governing state read this before
 * it is published.
 */

export const PRIVACY_DATES: LegalDates = {
  effective: "2026-09-23",
  lastUpdated: "2026-09-23",
  lastReviewed: "2026-09-23",
};

const site = SITE.url.replace(/^https?:\/\//, "");

export const PRIVACY: readonly LegalSection[] = [
  {
    id: "quick-summary",
    title: "Quick Summary",
    body: [
      {
        t: "p",
        text: "This section is a plain summary. It is not a substitute for the rest of the policy, but if you read only one part, read this one.",
      },
      {
        t: "ul",
        items: [
          "**What we collect about you:** your name, business contact details, what you bought, how you use our website, and recordings of calls with us.",
          "**Why:** to deliver the Services you pay for, to bill you, to support you, to market our own services, and to meet legal obligations.",
          "**We do not sell your personal information for money.** We do share website activity with advertising platforms so our ads reach the right people, which counts as sharing under several state laws. You can opt out. See section [[sale-and-sharing]].",
          "**Your customers' data is different.** The contacts, messages and call records inside the Platform belong to our Client, not to us. We process them on the Client's instructions and we do not use them for our own marketing or hand them to advertising platforms. See section [[your-customers-data]].",
          "**We record sales, onboarding and support calls**, and we tell you at the start of the call.",
          "**Your rights:** you can ask for a copy of your data, ask us to correct or delete it, and opt out of sharing. See sections [[your-privacy-rights]] and [[how-to-exercise-your-rights]].",
        ],
      },
    ],
  },

  {
    id: "mobile-communication-policy",
    title: "Mobile Communication Policy",
    body: [
      {
        t: "p",
        text: "Text messaging is central to what we build, so it gets its own section at the top rather than a footnote.",
      },
      {
        t: "p",
        text: "**Messages we send you.** If you give us your mobile number we may text you about your account: onboarding, support, billing notices such as a failed payment or a low balance, and, if you agree to it separately, marketing. Reply STOP to opt out, or HELP for help. Message and data rates from your carrier may apply. Consent to marketing texts is never a condition of buying anything.",
      },
      {
        t: "p",
        text: "**Messages sent through the Platform.** When a Client uses the Services to contact their own customers, the Client is the sender. They are responsible for obtaining consent, honouring opt-outs and complying with messaging law. We provide the tooling and we honour STOP, UNSUBSCRIBE and CANCEL automatically on their behalf.",
      },
      {
        t: "note",
        text: "Mobile numbers collected for messaging are never sold, rented or shared with third parties for their own marketing. They are shared only with the telecommunications providers needed to deliver the message.",
      },
    ],
  },

  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: [
      {
        t: "p",
        text: "The categories below describe information about you, our Client or prospective Client. Information about your customers is covered separately in section [[your-customers-data]].",
      },
      {
        t: "table",
        head: ["Category", "Examples"],
        rows: [
          [
            "Identifiers",
            "Name, business email, phone number, business address, business name, IP address",
          ],
          ["Commercial information", "What you bought, subscription history, billing history"],
          [
            "Financial information",
            `Billing address and the last four digits of your card. Full card details go to ${LEGAL.paymentProcessor} and are never stored by us`,
          ],
          [
            "Internet activity",
            "Pages visited, links clicked, time on page, referring URL, browser and device type",
          ],
          ["Approximate location", "City and state inferred from IP address. Never precise location"],
          ["Audio recordings", "Sales, onboarding and support calls, and voicemails"],
          [
            "Professional information",
            "Job title, industry, company size, and the monthly advertising spend you tell us about",
          ],
          ["Inferences", "Whether the Services are likely to suit your business"],
        ],
      },
      {
        t: "note",
        text: "We do not collect precise geolocation, racial or ethnic origin, religious beliefs, sexual orientation, immigration status, genetic data, biometric data, health information, or information about children.",
      },
    ],
  },

  {
    id: "where-we-get-your-information",
    title: "Where We Get Your Information",
    body: [
      {
        t: "ul",
        items: [
          "**From you directly**, when you fill in a form, book a call, subscribe, email us or speak to us.",
          "**From your device**, through cookies and similar technologies when you use our website. See section [[cookies-and-tracking]].",
          "**From advertising and analytics platforms**, which tell us how our ads and pages performed.",
          "**From our service providers**, such as our payment processor confirming a payment succeeded.",
          "**From public sources**, such as your own website, business registers and professional networks, where we are researching whether to approach you.",
        ],
      },
    ],
  },

  {
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
    body: [
      {
        t: "ul",
        items: [
          "To deliver the Services: build and host your site, configure the Platform, run the automations.",
          "To bill you, take payment and chase failed payments.",
          "To support you, including answering questions and investigating faults.",
          "To communicate with you about your account, including service and billing notices.",
          "To market our own services to you, where we are permitted to and you have not opted out.",
          "To measure and improve our website, our advertising and the Services.",
          "For quality assurance and training, which is why calls are recorded.",
          "For security, fraud prevention and to protect our infrastructure.",
          "To comply with law, to keep tax and accounting records, and to establish or defend legal claims.",
        ],
      },
      {
        t: "p",
        text: "We do not use your information to make decisions about you that produce legal effects without a human involved.",
      },
    ],
  },

  {
    id: "your-customers-data",
    title: "Your Customers' Data",
    body: [
      {
        t: "p",
        text: "This section is the one most often skipped and it matters most to the people whose data it describes.",
      },
      {
        t: "note",
        text: "The contact records, messages, call logs and recordings a Client puts into the Platform belong to that Client. We hold them as a service provider, acting on the Client's instructions, and they are not ours to use.",
      },
      {
        t: "p",
        text: "Specifically, we do not use that data to market our own services, we do not combine it with data about other Clients, we do not sell it, and we do not share it with advertising platforms. We access it only to deliver the Services, to provide support, to keep the system secure, or where the law requires it.",
      },
      {
        t: "p",
        text: "If you are a customer of one of our Clients and want your data corrected or deleted, contact that business directly. They control it and they decide. We will help them action your request, and if you contact us instead we will pass it to them and tell you we have.",
      },
      {
        t: "p",
        text: "Our Client is responsible for having a lawful basis for the data they load, for the consents behind the messages they send, and for giving their own customers whatever privacy notice the law requires.",
      },
    ],
  },

  {
    id: "how-we-share-your-information",
    title: "How We Share Your Information",
    body: [
      {
        t: "p",
        text: "We share personal information with the following categories of recipient, and for the reasons given.",
      },
      {
        t: "table",
        head: ["Recipient", "Purpose", "What they receive"],
        rows: [
          [
            "The Platform",
            "The software environment the Services run on: CRM records, automations, messaging",
            "Account and contact data, message history",
          ],
          [
            LEGAL.paymentProcessor,
            "Taking payment and storing your card securely",
            "Name, billing address, card details, transaction history",
          ],
          [
            "Telephony provider",
            "Delivering calls and text messages, and renting phone numbers",
            "Phone numbers, message content, call metadata",
          ],
          [
            "Email sending provider",
            "Delivering email on your behalf and ours",
            "Email addresses, message content",
          ],
          [
            "Analytics providers",
            "Measuring how our website performs",
            "Website activity, approximate location, device data",
          ],
          [
            "Advertising platforms",
            "Delivering and measuring our own advertising",
            "Website activity and identifiers. See section [[how-we-share-your-information]]",
          ],
          [
            "Hosting and infrastructure",
            "Running the website and storing data",
            "Whatever passes through or is stored on the service",
          ],
          [
            "Automation and integration tools",
            "Moving data between systems where a Client has asked for it",
            "Only the fields that integration needs",
          ],
          [
            "AI providers",
            "Drafting and summarising, where a Client has bought a product that uses it",
            "Only the content needed to produce the output",
          ],
          [
            "Professional advisers",
            "Accountants, lawyers and auditors, under confidentiality",
            "Whatever the engagement requires",
          ],
          [
            "An acquirer",
            "If the business is sold or merged",
            "Whatever transfers with the business",
          ],
          [
            "Government and law enforcement",
            "Where we are legally required, or to protect rights and safety",
            "Whatever is lawfully required",
          ],
        ],
      },
      {
        t: "p",
        text: `A current list of the specific providers behind these categories is available on request from ${LEGAL.email}. We require every provider to protect the information and to use it only for the purpose we engaged them for.`,
      },
    ],
  },

  {
    id: "sale-and-sharing",
    title: "Sale and Sharing of Personal Information",
    body: [
      {
        t: "note",
        text: "We do not sell your personal information for money, and we never have.",
      },
      {
        t: "p",
        text: "We do share website activity with advertising platforms so that our own advertising reaches relevant businesses and so we can measure whether it worked. Several state privacy laws define that kind of cross-context behavioural advertising as sharing, and in some cases as a sale, even though no money changes hands. We treat it as sharing and give you the right to opt out.",
      },
      {
        t: "p",
        text: "This applies only to activity on our own website. Data inside the Platform, including anything belonging to our Clients' customers, is never shared with advertising platforms. See section [[your-customers-data]].",
      },
      { t: "p", text: "You can opt out in any of these ways." },
      {
        t: "ol",
        items: [
          `Email ${LEGAL.email} with the subject line "Opt Out of Sale or Sharing". We do not ask you to create an account to do this.`,
          "Turn on Global Privacy Control in your browser or extension. We honour it automatically as an opt-out for the browser sending it.",
          "Use the cookie settings on our website to refuse advertising cookies.",
          "Use the industry opt-outs at optout.aboutads.info and optout.networkadvertising.org.",
        ],
      },
      {
        t: "p",
        text: "We do not knowingly sell or share the personal information of anyone under 16.",
      },
    ],
  },

  {
    id: "cookies-and-tracking",
    title: "Cookies, Pixels and Tracking Technologies",
    body: [
      {
        t: "p",
        text: "Our website uses cookies and similar technologies. They fall into three groups.",
      },
      {
        t: "table",
        head: ["Type", "What it does", "Can you refuse it?"],
        rows: [
          [
            "Essential",
            "Keeps the site working: security, load balancing, remembering your cookie choices",
            "No. The site does not work without them",
          ],
          [
            "Analytics",
            "Measures traffic and how pages perform, so we know what to improve",
            "Yes",
          ],
          [
            "Advertising",
            "Lets us show our ads to relevant businesses and measure whether they worked",
            "Yes",
          ],
        ],
      },
      {
        t: "p",
        text: "You can manage these through the cookie settings on our website, or through your browser, which can block or delete cookies. Blocking essential cookies will break parts of the site. We honour Global Privacy Control as an opt-out from advertising cookies and from sharing.",
      },
      {
        t: "p",
        text: "Cookies set by our advertising and analytics providers are governed by their own policies as well as this one.",
      },
    ],
  },

  {
    id: "call-recording",
    title: "Call Recording",
    body: [
      {
        t: "p",
        text: "We record sales, onboarding and support calls, for quality, training and to keep an accurate record of what was agreed.",
      },
      {
        t: "p",
        text: "We tell you at the start of the call that it is being recorded. Continuing with the call after that notice is your consent to it. If you would rather not be recorded, say so and we will continue in writing instead.",
      },
      {
        t: "p",
        text: "Calls made to or from numbers on a Client's account are a separate matter. The Client decides whether those are recorded and is responsible for the notice and consent that requires, which in several states means the consent of everyone on the call.",
      },
    ],
  },

  {
    id: "data-retention",
    title: "Data Retention",
    body: [
      {
        t: "p",
        text: "We keep personal information only as long as we need it, and no longer than the periods below unless the law requires otherwise.",
      },
      {
        t: "table",
        head: ["What", "How long"],
        rows: [
          ["Client account records", "While you are a Client, and 24 months after cancellation"],
          [
            "Billing, tax and accounting records",
            "7 years from the end of the tax year, as tax law requires",
          ],
          ["Call recordings", "24 months from the date of the call"],
          [
            "Enquiries from people who never became Clients",
            "24 months from the last contact, or until you ask us to delete them",
          ],
          ["Website analytics that can identify a person", "Up to 26 months"],
          ["Cookies", "Session only, or up to 13 months depending on the cookie"],
          [
            "Client Content inside the Platform",
            "While the Client is active, then 30 days after termination before deletion, per the Terms",
          ],
          ["Records of privacy requests", "24 months, so we can show we handled them"],
        ],
      },
      {
        t: "p",
        text: "Backups are overwritten on their own cycle, so a deleted record may persist in a backup for a short period after deletion. We do not restore deleted data from backups except to recover from a failure.",
      },
    ],
  },

  {
    id: "your-privacy-rights",
    title: "Your Privacy Rights",
    body: [
      {
        t: "p",
        text: "Depending on where you live, you may have some or all of the following rights. We extend them to everyone who asks, wherever they live, rather than checking your address first.",
      },
      {
        t: "ul",
        items: [
          "**Know and access.** Ask what personal information we hold about you and get a copy.",
          "**Delete.** Ask us to delete it, subject to records we must keep by law.",
          "**Correct.** Ask us to fix anything inaccurate.",
          "**Portability.** Get your data in a portable, machine-readable format.",
          "**Opt out of sale or sharing.** See section [[how-we-share-your-information]].",
          "**Limit use of sensitive information.** We do not collect sensitive information beyond your login credentials and payment details, and we use those only to provide the Services.",
          "**Non-discrimination.** We will not charge you more, give you less, or refuse to serve you because you exercised a right.",
          "**Appeal.** If we refuse a request you can ask us to reconsider. See section [[how-to-exercise-your-rights]].",
        ],
      },
    ],
  },

  {
    id: "how-to-exercise-your-rights",
    title: "How to Exercise Your Rights",
    body: [
      {
        t: "p",
        text: `Email ${LEGAL.email} with the subject line "Privacy Request" and tell us which right you are exercising. That is the only step.`,
      },
      {
        t: "ol",
        items: [
          "We acknowledge your request within 10 business days.",
          "We respond substantively within 45 days. If we need longer we will tell you why before the 45 days are up, and we will not take more than 90 days in total.",
          "We may need to verify who you are before we act, particularly for access and deletion. We will ask only for what we need to do that.",
          "An authorised agent may act for you if you give them written permission and we can verify it.",
          "The first request in any 12-month period is free. We may charge a reasonable fee for requests that are repetitive or excessive, and we will tell you before doing so.",
        ],
      },
      {
        t: "p",
        text: `If we refuse a request, we will explain why and how to appeal. To appeal, reply to our decision or email ${LEGAL.email} with the subject line "Privacy Appeal". If we refuse the appeal you may complain to your state Attorney General.`,
      },
    ],
  },

  {
    id: "state-specific-disclosures",
    title: "State-Specific Disclosures",
    body: [
      {
        t: "p",
        text: "Several states give residents specific privacy rights. The disclosures below apply if you live in one of them. Where a state law sets a threshold we do not currently meet, we still handle requests as described rather than turning them away on a technicality.",
      },
      {
        t: "p",
        text: "**California (CCPA and CPRA).** We collect the categories in section [[information-we-collect]], from the sources in section [[where-we-get-your-information]], for the purposes in section [[how-we-use-your-information]], and disclose them to the recipients in section [[how-we-share-your-information]]. We do not sell personal information for money. We do share website activity for cross-context behavioural advertising and you can opt out under section [[sale-and-sharing]]. We do not knowingly sell or share the personal information of consumers under 16. We offer no financial incentives in exchange for personal information. California residents may also request details of disclosures for direct marketing purposes under the Shine the Light law.",
      },
      {
        t: "p",
        text: "**Colorado, Connecticut, Virginia, Oregon, Texas, Montana, Delaware and other states with comprehensive privacy laws.** Residents have the rights listed in section [[your-privacy-rights]], including access, correction, deletion, portability, and opting out of targeted advertising and profiling. Exercise them through section [[how-to-exercise-your-rights]]. You may appeal a refusal, and if the appeal fails you may complain to your state Attorney General.",
      },
      {
        t: "p",
        text: "**Nevada.** Nevada residents may tell us not to sell certain personal information. We do not sell it, but you may still submit the request.",
      },
    ],
  },

  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body: [
      {
        t: "p",
        text: "Our website and Services are for businesses and are not directed at children. We do not knowingly collect personal information from anyone under 16.",
      },
      {
        t: "p",
        text: `If you believe a child has given us personal information, email ${LEGAL.email} and we will delete it.`,
      },
    ],
  },

  {
    id: "data-security",
    title: "Data Security",
    body: [
      {
        t: "p",
        text: "We protect personal information with encryption in transit, encryption at rest for stored data, access controls that limit who can see what, and multi-factor authentication on the accounts that matter. Access by our staff is limited to what their job requires.",
      },
      {
        t: "note",
        text: "No system is completely secure, and we cannot guarantee that information will never be accessed without authorisation. Anyone who tells you otherwise about their own systems is overstating it.",
      },
      {
        t: "p",
        text: "If a breach affects your personal information we will notify you and the relevant regulator as the law requires, and we will tell you what happened and what we are doing about it.",
      },
    ],
  },

  {
    id: "international-users",
    title: "International Users",
    body: [
      {
        t: "p",
        text: `We operate in the ${LEGAL.country} and our providers store and process information there. If you access the Services from elsewhere, you are sending your information to the ${LEGAL.country}, where privacy law may differ from your own.`,
      },
      {
        t: "p",
        text: "We do not currently offer the Services to customers in the United Kingdom or the European Economic Area, and this policy does not set out UK GDPR or EU GDPR rights. If that changes, this policy will be updated before we take on customers there.",
      },
    ],
  },

  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: [
      {
        t: "p",
        text: "Our website and our content link to other websites. This policy does not apply to them. We do not control them and we are not responsible for how they handle your information, so read their policies before giving them anything.",
      },
    ],
  },

  {
    id: "changes-to-this-policy",
    title: "Changes to This Privacy Policy",
    body: [
      {
        t: "p",
        text: "We may update this policy. When we do, we will change the dates at the top of this page. We review it at least every six months, and the next scheduled review is shown at the top.",
      },
      {
        t: "p",
        text: "If a change materially reduces your rights or materially changes how we use your information, we will tell you by email or by a notice on the website before it takes effect.",
      },
    ],
  },

  {
    id: "contact-us",
    title: "Contact Us",
    body: [
      {
        t: "p",
        text: "Privacy questions, requests and appeals all go to the same place.",
      },
      {
        t: "defs",
        items: [
          { term: "Company", text: contractingParty() },
          { term: "Email", text: LEGAL.email },
          ...(LEGAL.phone ? [{ term: "Phone", text: LEGAL.phone }] : []),
          ...(LEGAL.address ? [{ term: "Address", text: LEGAL.address }] : []),
          { term: "Web", text: site },
        ],
      },
      {
        t: "p",
        text: "If something here is unclear, ask. We would rather explain how we handle your information than have you guess.",
      },
    ],
  },
];
