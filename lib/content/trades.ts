/**
 * The trades the system is set up for, in the order the user listed them.
 *
 * Photos go in `public/trades/` numbered 01 to 10 to match this order, in any
 * common image format. Every card crops its photo to the same landscape frame,
 * so the sources do not have to match each other. A card whose photo is not
 * there yet shows the name on a plain plate rather than a broken image.
 */
export interface Trade {
  /** Used for the key and the file name. */
  id: string;
  name: string;
  alt: string;
}

export const TRADES: readonly Trade[] = [
  { id: "01", name: "Construction (EPC) Solar Installer", alt: "Two installers fixing panels to a commercial roof" },
  { id: "02", name: "DIY Solar Kit Consultants", alt: "An adviser with plans in front of a ground-mounted array" },
  { id: "03", name: "Turnkey Residential Installers", alt: "Two people going through drawings on site" },
  { id: "04", name: "Installation-Only Contractors", alt: "A contractor carrying a panel across a rooftop array" },
  { id: "05", name: "Panel Cleaning Services", alt: "A worker washing a rooftop array" },
  { id: "06", name: "Solar Removal and Reinstallation (R&R) Companies", alt: "Two roofers lifting panels off a shingle roof" },
  { id: "07", name: "Direct-to-Consumer Wholesalers", alt: "A panel being inspected across a counter" },
  { id: "08", name: "Independent Solar Advisors", alt: "An adviser with a tablet in front of a solar field" },
  { id: "09", name: "EV Charging & Solar Integration Firms", alt: "EV chargers under a solar carport" },
  { id: "10", name: "Solar Operations & Maintenance (O&M) Company", alt: "Two engineers testing equipment in a solar field" },
];

export const tradePhoto = (id: string) => `/trades/${id}.jpg`;
