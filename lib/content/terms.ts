import { LEGAL, type LegalDates, type LegalSection } from "./legal";
import { PLAN, formatPrice } from "./pricing";
import { SITE } from "@/lib/site";

/**
 * The terms of service, as content rather than markup.
 *
 * Structure follows a published terms page from the same industry, section for
 * section, because that ordering is familiar to clients and covers the ground
 * a marketing-systems agency actually needs covered. The prose is written for
 * Volt and says only what this company does.
 *
 * Two rules the rest of the site also keeps, and this file keeps hardest:
 *   1. The platform underneath the system is never named. It is "the Platform"
 *      throughout, which is also the accurate description: the client licenses
 *      access to it through Volt, not from the vendor.
 *   2. Nothing is claimed that the company cannot stand behind. Where a figure
 *      is not yet set, the blank is visible rather than filled with a guess.
 *
 * NOT LEGAL ADVICE. Have an attorney in the governing state read this before
 * it is published. See lib/content/legal.ts for the facts still to set.
 */

/** The terms are revised on their own schedule. See LegalDates. */
export const TERMS_DATES: LegalDates = {
  effective: "2026-09-17",
  lastUpdated: "2026-09-17",
  lastReviewed: "2026-09-17",
};

const price = formatPrice();

export const TERMS: readonly LegalSection[] = [
  {
    id: "definitions",
    title: "Definitions",
    body: [
      {
        t: "p",
        text: "In these Terms, the following words have the meanings given below. They are capitalised wherever they carry that meaning.",
      },
      {
        t: "defs",
        items: [
          {
            term: "Account",
            text: "The login and workspace created for you when you subscribe, including every user you add to it.",
          },
          {
            term: "Client, you, your",
            text: `The business that subscribes to the Services, and any person who accepts these Terms on that business's behalf.`,
          },
          {
            term: "Client Content",
            text: "Anything you or your users put into the Platform or send us: contact records, messages, images, logos, copy, reviews, and any data about your customers.",
          },
          {
            term: "Platform",
            text: "The software environment we operate and give you access to as part of the Services. We license and configure it; you are not a customer of the underlying software vendor and you acquire no rights directly from it.",
          },
          {
            term: "Services",
            text: "Everything in your Subscription: the website we build and host, the Platform access, the automations we configure, and any separately purchased products.",
          },
          {
            term: "Subscription",
            text: "Your recurring plan, its price, and the billing period it renews on.",
          },
          {
            term: "Usage Charges",
            text: "Amounts for telephone numbers, text messages, calls, email sending and similar metered items, billed separately from the Subscription. See section [[usage-charges]].",
          },
          {
            term: "Volt, we, us, our",
            text: `${LEGAL.entity}, trading as ${LEGAL.tradingAs}.`,
          },
        ],
      },
    ],
  },

  {
    id: "eligibility-and-account",
    title: "Eligibility and Account",
    body: [
      {
        t: "p",
        text: "You may use the Services only if you are at least 18 years old, legally able to enter a contract, and acting for a lawful business. These Terms are for business use. The Services are not offered to consumers for personal or household purposes.",
      },
      {
        t: "p",
        text: "You are responsible for everything that happens under your Account, including anything done by your staff, contractors or anyone else you give access to. Keep your credentials secure and tell us promptly if you believe someone has gained access who should not have.",
      },
      {
        t: "p",
        text: "The person who accepts these Terms confirms they are authorised to bind the business named on the Account.",
      },
    ],
  },

  {
    id: "services",
    title: "Services",
    body: [
      {
        t: "p",
        text: "Volt builds and runs a sales system for solar companies. Depending on what you buy, that includes a website, missed-call text-back, automated lead follow-up, a single inbox for your messages, a review request funnel, and on-site SEO work. Further products are sold separately and are only part of your Services if you have bought them.",
      },
      {
        t: "p",
        text: "We may improve, change or replace parts of the Services, including the features available in the Platform, provided we do not materially reduce what your Subscription covers without telling you first. Where a change is material and adverse, section [[changes-to-these-terms]] applies.",
      },
      {
        t: "p",
        text: "We are a service provider, not your employee, agent or partner. We do not give legal, tax, accounting or regulatory advice, and nothing we produce should be relied on as any of those.",
      },
    ],
  },

  {
    id: "subscription-and-pricing",
    title: "Subscription and Pricing",
    body: [
      {
        t: "p",
        text: `The Subscription is ${price} per ${PLAN.interval}, quoted and charged in ${PLAN.currency}. The price that applies to you is the one shown at checkout or in the written quote you accepted, and that is the price that controls if it differs from anything published elsewhere.`,
      },
      {
        t: "p",
        text: "The Subscription covers the products listed in your plan. It does not cover Usage Charges, which are billed separately and are set out in section [[usage-charges]], and it does not cover any separately sold product unless you have bought it.",
      },
      {
        t: "p",
        text: "We may change Subscription pricing. If we do, we will give you at least 30 days' written notice before the new price applies to your renewal, and you may cancel before then under section [[cancellation]] if you do not accept it.",
      },
      ...(PLAN.setupFee === null
        ? [{ t: "p" as const, text: "There is no setup fee." }]
        : [
            {
              t: "p" as const,
              text: `A one-off setup fee of ${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: PLAN.currency,
                maximumFractionDigits: 0,
              }).format(PLAN.setupFee)} applies at the start of the Subscription and is non-refundable.`,
            },
          ]),
      {
        t: "p",
        text: "Prices are exclusive of sales tax, VAT, GST and any similar tax. You are responsible for those, and for any withholding, except for taxes on our own income.",
      },
    ],
  },

  {
    id: "billing-auto-renewal-and-payment",
    title: "Billing, Auto-Renewal and Payment",
    body: [
      {
        t: "p",
        text: `The Subscription is billed in advance. Card payments are processed by ${LEGAL.paymentProcessor}; we do not store your full card details ourselves. You authorise us to charge the payment method on your Account for the Subscription, for any Usage Charges under section [[usage-charges]], and for any product you separately buy.`,
      },
      {
        t: "note",
        text: "Your Subscription renews automatically at the end of each billing period, at the then-current price, until you cancel. Cancelling is covered in section [[cancellation]] and takes effect at the end of the period you have already paid for.",
      },
      {
        t: "p",
        text: "Keep a valid payment method on the Account at all times. If it expires, is declined or is removed, section [[payment-failures-and-suspension]] applies.",
      },
      {
        t: "p",
        text: "If you believe a charge is wrong, contact us and we will look into it. Do not raise a dispute with your card issuer before speaking to us. See section [[no-chargebacks]].",
      },
    ],
  },

  {
    id: "usage-charges",
    title: "Usage Charges",
    body: [
      {
        t: "p",
        text: "Some parts of the Services cost money every time they are used, because we are charged for them by the telephone and email networks that carry them. These are billed to you separately from the Subscription, and they are not included in it.",
      },
      {
        t: "p",
        text: "Usage Charges cover items such as telephone numbers rented for your Account, text messages sent and received, call minutes, number lookups, and email sending volume. What you pay depends entirely on how much you use, so there is no fixed monthly amount for them.",
      },
      {
        t: "p",
        text: "Usage is drawn from a prepaid balance on your Account. You choose the amount your balance tops up by and the level it tops up at, and you authorise us to charge your payment method for that amount when the balance falls to it. You can change those settings, or turn automatic top-up off, in your Account at any time.",
      },
      {
        t: "note",
        text: "If your balance runs out and automatic top-up is off or your payment method fails, the parts of the Services that cost money to run will stop working until the balance is restored. That includes sending and receiving text messages. Your leads will not be answered while it is empty.",
      },
      {
        t: "p",
        text: "Current rates are published in your Account and may change if our providers change theirs. We will show the rate before you incur the charge. Amounts already spent from the balance are used, not held, and section [[no-refund-policy]] applies to them.",
      },
    ],
  },

  {
    id: "no-refund-policy",
    title: "No Refund Policy",
    body: [
      {
        t: "note",
        text: "All payments to Volt are final and non-refundable. That includes Subscription fees, any setup fee, prepaid balances that have been spent on Usage Charges, and payments for separately purchased products.",
      },
      {
        t: "p",
        text: "This applies whether or not you used the Services during the period you paid for, and whether or not you cancel partway through a billing period. Cancelling stops the next charge; it does not refund the current one.",
      },
      {
        t: "p",
        text: "An unspent prepaid balance is not automatically refunded on cancellation, but you may ask us to return it and we will not unreasonably refuse.",
      },
      {
        t: "p",
        text: "Nothing in this section limits any right you have under law that cannot be excluded by agreement.",
      },
    ],
  },

  {
    id: "no-chargebacks",
    title: "No Chargebacks",
    body: [
      {
        t: "p",
        text: "If you think you have been charged in error, raise it with us first. We answer billing questions quickly and we would rather fix a mistake than argue about one.",
      },
      {
        t: "p",
        text: "You agree not to initiate a chargeback, payment dispute or reversal with your card issuer or bank for any charge properly made under these Terms. Doing so is a material breach.",
      },
      {
        t: "p",
        text: "If you raise a chargeback, we may suspend or terminate your Account immediately under section [[term-and-termination]], and we may recover the disputed amount, any fee charged to us by the payment processor, and the reasonable costs of recovering it.",
      },
    ],
  },

  {
    id: "trials-and-promotions",
    title: "Trials and Promotions",
    body: [
      {
        t: "p",
        text: "We may from time to time offer a trial, a discount or a promotional period. Where we do, the specific terms of that offer are set out in writing when it is made and apply alongside these Terms.",
      },
      {
        t: "p",
        text: "Unless the offer says otherwise: a promotional price applies only for the stated period, the Subscription then renews at the standard price, and Usage Charges under section [[usage-charges]] apply throughout, because those are real costs we pay whether or not you are paying us.",
      },
      {
        t: "p",
        text: "Offers are not transferable and may not be combined unless we say so.",
      },
    ],
  },

  {
    id: "service-delivery",
    title: "Service Delivery",
    body: [
      {
        t: "p",
        text: "Setup begins when we have received your completed onboarding form and the information we ask for in it. We aim to have your website live and the Platform configured within 7 to 10 business days of that point.",
      },
      {
        t: "p",
        text: "That timeline depends on you. If we are waiting on content, logins, domain access, photographs or answers, the clock pauses until we have them. We will tell you what we are waiting for.",
      },
      {
        t: "p",
        text: "The Services are treated as delivered once the website is live and the Platform is configured for your Account. Delivery is not conditional on you using the system, on any particular number of leads, or on any commercial result. See section [[disclaimers]].",
      },
    ],
  },

  {
    id: "payment-failures-and-suspension",
    title: "Payment Failures and Suspension",
    body: [
      {
        t: "p",
        text: "If a payment fails, we will retry it and contact you. What happens next follows this sequence.",
      },
      {
        t: "ol",
        items: [
          "We attempt the charge again, up to four times over roughly three weeks, and email you each time it fails.",
          "If the payment has not cleared 48 hours after the first failure, we may suspend the Services. Suspension means the Services stop working; your data is kept.",
          "If the payment has not cleared 30 days after the first failure, we may terminate the Account under section [[term-and-termination]] and delete the data in it.",
        ],
      },
      {
        t: "p",
        text: "Suspension does not pause your Subscription or stop it accruing. Fees for a suspended period remain payable, and section [[no-refund-policy]] applies to them.",
      },
      {
        t: "p",
        text: "We can usually restore a suspended Account as soon as payment clears. We cannot restore data after deletion.",
      },
    ],
  },

  {
    id: "cancellation",
    title: "Cancellation",
    body: [
      {
        t: "p",
        text: "You can cancel at any time. There is no minimum term and no cancellation fee.",
      },
      {
        t: "p",
        text: `To cancel, tell us in writing at ${LEGAL.email} from an email address on the Account, or use the cancellation option in your Account if one is available. Telling a member of staff verbally is not enough, because we need a record of the date.`,
      },
      {
        t: "p",
        text: "Cancellation takes effect at the end of the billing period you have already paid for. You keep access until then. The Subscription does not renew after that date and your payment method is not charged again, apart from any Usage Charges already incurred.",
      },
      {
        t: "p",
        text: "No refund is given for the remainder of a paid period. See section [[no-refund-policy]]. What happens to your website and data after cancellation is covered in sections [[intellectual-property]] and [[term-and-termination]].",
      },
    ],
  },

  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: [
      {
        t: "p",
        text: "We own the Platform, our software, our templates, our automations, our processes and everything we have built to deliver the Services, together with all intellectual property in them. Your Subscription gives you a limited, non-exclusive, non-transferable right to use them while it is active, and nothing more.",
      },
      {
        t: "p",
        text: "You own your Client Content. By putting it into the Platform you give us the licence we need to host it, process it, display it and send it on your behalf in order to provide the Services. That licence ends when we delete the content, except for copies kept in routine backups until they expire.",
      },
      {
        t: "p",
        text: "You also own your brand: your name, logo, photographs, reviews and the copy you supply. We use them only to deliver the Services and, unless you tell us not to, to identify you as a client of ours.",
      },
      {
        t: "note",
        text: "Websites we build are hosted on our infrastructure as part of the Subscription. We are not obliged to transfer the site, its code or its templates to you or to another provider when the Subscription ends. Your own content and your data can be exported under section [[term-and-termination]].",
      },
      {
        t: "p",
        text: "Any feedback you give us about the Services may be used freely and without obligation to you.",
      },
    ],
  },

  {
    id: "acceptable-use",
    title: "Acceptable Use",
    body: [
      { t: "p", text: "You agree not to use the Services to do any of the following." },
      {
        t: "ul",
        items: [
          "Send unsolicited messages, or any message to a person who has not given the consent the law requires.",
          "Message anyone who has opted out, or continue after being asked to stop.",
          "Send messages on behalf of a business other than your own without our written agreement.",
          "Promote anything unlawful, or anything prohibited by the networks that carry the messages.",
          "Impersonate any person or business, or misrepresent who a message is from.",
          "Upload malware, or anything designed to interfere with the Platform or with anyone using it.",
          "Attempt to access another client's Account or data.",
          "Reverse-engineer, decompile, copy or resell the Platform or the Services.",
          "Use the Services to build or improve a competing product, or to benchmark for a competitor.",
          "Circumvent any limit, security control or access restriction we put in place.",
          "Scrape, harvest or bulk-extract data from the Platform beyond your own Account's data.",
        ],
      },
      {
        t: "p",
        text: "We may suspend the Services immediately, without notice, if we reasonably believe you are doing any of these, and we may report unlawful activity to the relevant authority.",
      },
    ],
  },

  {
    id: "client-compliance-obligations",
    title: "Client Compliance Obligations",
    body: [
      {
        t: "p",
        text: "The Services let you contact your own customers and prospects. The law about doing that falls on you, not on us, because you hold the relationship and you decide who is contacted. This is the most important section in these Terms for most clients.",
      },
      { t: "p", text: "You are solely responsible for all of the following." },
      {
        t: "ul",
        items: [
          "Obtaining the consent required before anyone is called, texted or emailed, in the form the law requires, and keeping evidence of when and how it was given.",
          "Honouring opt-outs promptly across every channel, including informal ones such as somebody replying asking you to stop.",
          "Scrubbing against applicable do-not-call registries and internal suppression lists.",
          "Including the disclosures the law requires in your messages, such as identifying your business and providing a way to opt out.",
          "Respecting quiet hours and frequency limits that apply where your recipients are.",
          "Complying with telemarketing, messaging, email and privacy law in every place you operate, including the Telephone Consumer Protection Act and the CAN-SPAM Act where they apply.",
          "Having a lawful basis for the personal data you put into the Platform, and giving your customers whatever privacy notice the law requires.",
          "Making sure any list you import was collected lawfully and with consent to be contacted by you.",
        ],
      },
      {
        t: "note",
        text: "Never import a purchased, scraped or rented list into the Platform. It is the single most common way clients create liability for themselves, and it puts the phone numbers and sending reputation of everyone on our infrastructure at risk.",
      },
      {
        t: "p",
        text: "You indemnify us for claims arising from your communications and from the data you process through the Services, on the terms in section [[indemnification]].",
      },
      {
        t: "p",
        text: "We may set message volumes, rate limits and content rules, and change them, where the carriers require it or where your activity puts our infrastructure at risk.",
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
        text: "We will tell you at the start of a call that it is being recorded. If you continue with the call after that notice, you consent to the recording. If you would rather not be recorded, say so and we will continue in writing instead.",
      },
      {
        t: "p",
        text: "Recordings are kept only as long as we need them and are not shared outside the company except where the law requires it.",
      },
      {
        t: "p",
        text: "Calls your own customers make to numbers on your Account are a separate matter, and recording them is your responsibility under section [[client-compliance-obligations]]. Several states require the consent of everyone on the call.",
      },
    ],
  },

  {
    id: "term-and-termination",
    title: "Term and Termination",
    body: [
      {
        t: "p",
        text: "These Terms apply from the moment you first accept them and continue for as long as you have an Account with us.",
      },
      {
        t: "p",
        text: "You may terminate by cancelling under section [[cancellation]]. We may terminate or suspend the Services if you materially breach these Terms, if payment fails as set out in section [[payment-failures-and-suspension]], if you raise a chargeback under section [[no-chargebacks]], or if your use puts us or our infrastructure at legal or operational risk. Where the breach can be fixed and the risk allows it, we will ask you to fix it first.",
      },
      {
        t: "p",
        text: "We may also terminate for convenience on 30 days' written notice, in which case we will refund any Subscription fee covering the period after termination, which is the one circumstance in which section [[no-refund-policy]] does not apply.",
      },
      {
        t: "note",
        text: "After termination you have 30 days to export your data. Tell us and we will help. After 30 days we may permanently delete your Account and everything in it, including contact records, message history and the website. Deletion cannot be undone.",
      },
      {
        t: "p",
        text: "Sections that by their nature should survive termination do so, including sections [[no-refund-policy]], [[no-chargebacks]], [[intellectual-property]], [[disclaimers]], [[indemnification]], [[limitation-of-liability]], [[dispute-resolution]] and [[governing-law-and-venue]].",
      },
    ],
  },

  {
    id: "sms-terms",
    title: "SMS Terms",
    body: [
      {
        t: "p",
        text: "This section covers text messages, both those we send you about your Account and those you send through the Services.",
      },
      {
        t: "p",
        text: "Messages we send you may include onboarding and support messages, billing notices such as a failed payment or a low balance, and service updates. Message and data rates from your carrier may apply. Reply STOP to opt out of non-essential messages, or HELP for help. Opting out of service messages may mean you miss a billing warning.",
      },
      {
        t: "p",
        text: "For messages you send through the Services, you are the sender. Section [[client-compliance-obligations]] sets out your obligations, and they apply in full to every text message sent from your Account.",
      },
      {
        t: "p",
        text: "United States messaging runs on registered application-to-person routes. You agree to give accurate information for that registration, including your business details and a description of how you collect consent, and to keep it current. Registration can be refused or revoked by the carriers, which is outside our control.",
      },
      {
        t: "p",
        text: "We do not guarantee that any message will be delivered, delivered on time, or not filtered. Carriers block and filter traffic at their own discretion and do not always say why.",
      },
    ],
  },

  {
    id: "disclaimers",
    title: "Disclaimers",
    body: [
      {
        t: "p",
        text: "The Services are provided on an as-is and as-available basis. To the fullest extent the law allows, we disclaim all warranties, whether express, implied or statutory, including any implied warranty of merchantability, fitness for a particular purpose, title and non-infringement.",
      },
      {
        t: "note",
        text: "We do not guarantee results. We make no promise about the number of leads, appointments, jobs, sales, reviews or rankings you will get. Marketing outcomes depend on your market, your pricing, your sales process and how you use the system, and all of those are yours.",
      },
      {
        t: "p",
        text: "We do not warrant that the Services will be uninterrupted, error-free or secure against every threat. Parts of the Services depend on third parties, including search engines, advertising platforms, carriers and hosting providers, and those parties change their rules, their pricing and their availability without asking us.",
      },
      {
        t: "p",
        text: "Any estimate, benchmark or example figure we give, whether on a call, in a proposal or on our website, is an illustration and not a promise.",
      },
    ],
  },

  {
    id: "indemnification",
    title: "Indemnification",
    body: [
      {
        t: "p",
        text: "You agree to defend, indemnify and hold harmless Volt, its owners, officers, employees and contractors from and against any claim, demand, proceeding, loss, liability, damage, fine, penalty, cost or expense, including reasonable legal fees, arising out of or connected with any of the following.",
      },
      {
        t: "ul",
        items: [
          "Your use of the Services, or use by anyone on your Account.",
          "Client Content, including anything unlawful or infringing in it.",
          "Messages, calls or emails sent from your Account, including any claim under the Telephone Consumer Protection Act, the CAN-SPAM Act or equivalent law.",
          "Your processing of personal data, including any failure to obtain consent or to honour an opt-out.",
          "Your breach of these Terms, or of any law that applies to you.",
          "Any dispute between you and one of your own customers.",
        ],
      },
      {
        t: "p",
        text: "We will tell you promptly about any claim we are indemnified for, and you may control the defence, provided you do not settle anything that imposes an obligation on us without our written agreement.",
      },
    ],
  },

  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: [
      {
        t: "p",
        text: "To the fullest extent the law allows, we are not liable for any indirect, incidental, special, consequential, exemplary or punitive damages, nor for lost profits, lost revenue, lost business, lost goodwill or lost or corrupted data, even if we were told such damages were possible.",
      },
      {
        t: "note",
        text: `Our total liability to you for all claims taken together is limited to the greater of the amount you paid us in the 12 months before the event giving rise to the claim, or ${new Intl.NumberFormat(
          "en-US",
          { style: "currency", currency: PLAN.currency, maximumFractionDigits: 0 },
        ).format(100)}.`,
      },
      {
        t: "p",
        text: "These limits apply however the claim arises, whether in contract, tort, negligence, strict liability, statute or otherwise, and they survive the failure of any limited remedy.",
      },
      {
        t: "p",
        text: "Nothing here excludes liability that cannot lawfully be excluded, including liability for death or personal injury caused by negligence, or for fraud. Some jurisdictions do not allow some of these exclusions, in which case they apply to you only as far as that jurisdiction permits.",
      },
    ],
  },

  {
    id: "dispute-resolution",
    title: "Dispute Resolution, Binding Arbitration and Class Action Waiver",
    body: [
      {
        t: "note",
        text: "Read this section carefully. It affects how disputes between us are resolved, it requires arbitration instead of a court and a jury for most disputes, and it prevents class actions. You can opt out within 30 days.",
      },
      {
        t: "p",
        text: "Before starting any formal proceeding, both of us agree to try to resolve the dispute informally. Send a written description of the dispute and what you want to " +
          `${LEGAL.email}, and we will have 30 days to respond and try to settle it.`,
      },
      {
        t: "p",
        text: `If that does not resolve it, any dispute arising out of or relating to these Terms or the Services will be settled by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration will be seated in ${LEGAL.arbitrationCity}, ${LEGAL.state}, before one arbitrator, and judgment on the award may be entered in any court with jurisdiction.`,
      },
      {
        t: "note",
        text: "Both of us waive the right to bring or take part in a class, collective or representative action. Disputes are resolved individually. The arbitrator may not consolidate more than one person's claims or preside over any form of class proceeding.",
      },
      {
        t: "p",
        text: `You may opt out of this arbitration agreement by emailing ${LEGAL.email} within 30 days of first accepting these Terms, stating your business name and that you are opting out of arbitration. Opting out does not affect any other part of these Terms, and it will not affect your Services.`,
      },
      {
        t: "p",
        text: "This section does not prevent either of us from bringing an individual claim in small claims court, or from seeking an injunction in court to protect intellectual property or confidential information.",
      },
    ],
  },

  {
    id: "governing-law-and-venue",
    title: "Governing Law and Venue",
    body: [
      {
        t: "p",
        text: `These Terms and any dispute arising from them are governed by the laws of the State of ${LEGAL.state}, ${LEGAL.country}, without regard to its conflict of laws rules.`,
      },
      {
        t: "p",
        text: `Subject to section [[dispute-resolution]], the state and federal courts located in ${LEGAL.county}, ${LEGAL.state} have exclusive jurisdiction, and both of us consent to their jurisdiction and venue.`,
      },
      {
        t: "p",
        text: "The United Nations Convention on Contracts for the International Sale of Goods does not apply.",
      },
    ],
  },

  {
    id: "force-majeure",
    title: "Force Majeure",
    body: [
      {
        t: "p",
        text: "Neither of us is liable for failing to perform, or for delay in performing, where the cause is outside our reasonable control. That includes natural disasters, fire, flood, war, civil unrest, terrorism, epidemic or pandemic, strikes, government action, and failures of power, internet, hosting, telecommunications or third-party platforms.",
      },
      {
        t: "p",
        text: "The affected obligations are suspended for as long as the event continues. This does not excuse an obligation to pay money already owed.",
      },
      {
        t: "p",
        text: "If such an event continues for more than 60 days, either of us may terminate on written notice.",
      },
    ],
  },

  {
    id: "assignment",
    title: "Assignment",
    body: [
      {
        t: "p",
        text: "You may not assign or transfer these Terms, or any right under them, without our prior written consent. Any attempt to do so without consent is void.",
      },
      {
        t: "p",
        text: "We may assign these Terms without your consent to an affiliate, or in connection with a merger, acquisition, reorganisation or sale of all or substantially all of our assets. We will tell you if that happens.",
      },
      {
        t: "p",
        text: "These Terms bind and benefit both of us and our permitted successors and assigns.",
      },
    ],
  },

  {
    id: "notices",
    title: "Notices",
    body: [
      {
        t: "p",
        text: "We may give you notice by email to an address on your Account, by a message inside the Platform, or by posting it on our website. Notice by email is treated as received on the day it is sent.",
      },
      {
        t: "p",
        text: `You give us notice by emailing ${LEGAL.email}. Where these Terms require written notice for something formal, such as termination or an arbitration opt-out, email to that address is sufficient.`,
      },
      ...(LEGAL.address
        ? [
            {
              t: "p" as const,
              text: `Notices may also be sent to us by post at ${LEGAL.entity}, ${LEGAL.address}.`,
            },
          ]
        : []),
      {
        t: "p",
        text: "Keep the contact details on your Account current. A notice sent to an address you have stopped using is still a valid notice.",
      },
    ],
  },

  {
    id: "changes-to-these-terms",
    title: "Changes to These Terms",
    body: [
      {
        t: "p",
        text: "We may update these Terms. When we do, we will change the effective date at the top of this page and, if the change is material and adverse to you, give you at least 30 days' notice by email before it takes effect.",
      },
      {
        t: "p",
        text: "Continuing to use the Services after the new version takes effect means you accept it. If you do not accept it, cancel under section [[cancellation]] before the effective date.",
      },
      {
        t: "p",
        text: "Changes to the arbitration agreement in section [[dispute-resolution]] do not apply retroactively to a dispute we already know about.",
      },
    ],
  },

  {
    id: "miscellaneous",
    title: "Miscellaneous",
    body: [
      {
        t: "p",
        text: "These Terms, together with any written order, quote or offer terms you have accepted, are the entire agreement between us about the Services, and they replace anything said or written beforehand.",
      },
      {
        t: "p",
        text: "If any provision is held unenforceable, it is limited or removed to the minimum extent necessary and the rest stays in force.",
      },
      {
        t: "p",
        text: "A failure to enforce a provision is not a waiver of it, and a waiver on one occasion is not a waiver on any other.",
      },
      {
        t: "p",
        text: "Nothing here creates a partnership, joint venture, employment or agency relationship. We act as an independent contractor.",
      },
      {
        t: "p",
        text: "There are no third-party beneficiaries to these Terms.",
      },
      {
        t: "p",
        text: "Headings are for convenience and do not affect interpretation. The section numbering is used for cross-references and may change if sections are added.",
      },
    ],
  },

  {
    id: "consent-and-agreement",
    title: "Consent and Agreement",
    body: [
      {
        t: "p",
        text: "By subscribing, by checking a box confirming you accept these Terms, or by using the Services, you confirm that you have read and understood them and that you agree to be bound by them.",
      },
      {
        t: "p",
        text: "You confirm in particular that you have read and accept the following.",
      },
      {
        t: "ul",
        items: [
          "The no refund policy in section [[no-refund-policy]].",
          "The agreement not to raise chargebacks in section [[no-chargebacks]].",
          "That Usage Charges in section [[usage-charges]] are separate from the Subscription and depend on how much you use.",
          "The compliance obligations in section [[client-compliance-obligations]], which are yours and not ours.",
          "That we do not guarantee results, as set out in section [[disclaimers]].",
          "The arbitration agreement and class action waiver in section [[dispute-resolution]], and your 30-day right to opt out of it.",
        ],
      },
      {
        t: "p",
        text: "If you are accepting on behalf of a business, you confirm you are authorised to bind it.",
      },
    ],
  },

  {
    id: "contact",
    title: "Contact",
    body: [
      {
        t: "p",
        text: "Questions about these Terms, notices under them, and arbitration opt-outs all go to the same place.",
      },
      {
        t: "defs",
        items: [
          { term: "Company", text: `${LEGAL.entity}, trading as ${LEGAL.tradingAs}` },
          { term: "Email", text: LEGAL.email },
          ...(LEGAL.phone ? [{ term: "Phone", text: LEGAL.phone }] : []),
          ...(LEGAL.address ? [{ term: "Address", text: LEGAL.address }] : []),
          { term: "Web", text: SITE.url },
        ],
      },
      {
        t: "p",
        text: "If something here is unclear, ask before you subscribe rather than afterwards. We would rather explain a clause than argue about one.",
      },
    ],
  },
] as const;
