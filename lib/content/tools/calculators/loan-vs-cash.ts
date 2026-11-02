import type { Tool } from "../types";

export const LOAN_VS_CASH: Tool = {
  slug: "solar-loan-vs-cash-calculator",
  title: "Solar loan vs cash calculator",
  metaTitle: "Solar Loan vs Cash Calculator: Payback Comparison Over 25 Years",
  metaDescription:
    "Compare solar loan financing vs cash purchase over 25 years. Honest 25-year net savings for each path accounting for interest, dealer fees and the time value of money.",
  tagline: "25-year net outcome for cash vs loan financing",
  audience: "Homeowner",
  intro:
    "A solar loan lets you install without the upfront cost but adds interest and dealer fees (typically 10 to 30 percent of system cost built into solar loan APRs). Cash avoids interest but ties up capital. This calculator compares 25-year net savings for both paths given your system cost, loan terms, utility bill and opportunity cost of cash.",
  how: [
    {
      heading: "Model the cash path",
      text: "Upfront outlay = net system cost after the 30 percent federal tax credit. Annual savings = your current utility bill * offset percentage, compounded by rate increases. Year-25 net = cumulative savings minus upfront cost.",
    },
    {
      heading: "Model the loan path",
      text: "Loan amount = gross system cost (dealer fees apply to the pre-ITC price in most solar loans). Monthly payment = loan amount * APR with amortisation. The federal tax credit either reduces loan principal (if applied in year 1) or stays separate. Annual net outflow = monthly payments * 12 minus annual utility savings.",
    },
    {
      heading: "Account for dealer fees",
      text: "Solar loans at 'low APRs' commonly include a dealer fee of 10 to 30 percent of system cost built into the loan amount (not disclosed as interest but functionally the same). A 'zero fee' solar loan is rare; most solar lenders charge dealer fees on the installer that get passed through.",
    },
    {
      heading: "Include opportunity cost of cash",
      text: "Cash tied up in solar is cash not earning returns elsewhere. Over 25 years, a modest 4 to 7 percent annual return on invested capital changes the comparison meaningfully. The loan path can beat cash in low-interest environments; cash beats loan in high-interest environments.",
    },
  ],
  caveat:
    "Solar loan terms vary dramatically. Dealer fees of 10 to 30 percent are common but not always disclosed clearly. HELOC or home-equity loans typically carry lower APRs than branded solar loans. PACE financing has its own tax-lien complications. Always ask for the dealer fee percentage up front and compare true all-in cost. Opportunity cost assumes you would invest the cash; if you would spend it, cash is purely the cheaper path.",
  faq: [
    {
      q: "Is a solar loan a good deal?",
      a: "Sometimes. Low-APR solar loans typically carry dealer fees of 10 to 30 percent of system cost that are not disclosed as interest but functionally are. A HELOC at 7 percent with no dealer fee is often cheaper than a '2.99 percent APR' solar loan with a 20 percent dealer fee. Always compare total cost of money, not advertised APR.",
    },
    {
      q: "Should I pay cash for solar?",
      a: "If you have the cash and your opportunity cost of capital is low (modest expected returns on invested cash), paying cash is usually the cheapest path. If you expect to earn more than the loan APR + dealer fee by investing the cash, financing can beat cash. HELOC usually falls between.",
    },
    {
      q: "What is a solar loan dealer fee?",
      a: "A dealer fee is a percentage of system cost that solar lenders charge the installer, who passes it through to the customer as a higher cash-equivalent price. Dealer fees commonly run 10 to 30 percent for low-APR solar loans. The fee makes the real cost of financing substantially higher than the advertised APR suggests.",
    },
    {
      q: "What about leasing solar?",
      a: "Leasing is a third option not modelled here. Solar leases and PPAs typically save less over 25 years than ownership because the leasing company captures the federal tax credit, state incentives and SREC income. Leases also complicate home sale and transfer. Most honest advice is to buy if you can qualify for financing or pay cash, lease only if you cannot.",
    },
  ],
  published: "2026-11-02",
  related: ["solar-roi-calculator"],
};
