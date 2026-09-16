# Volt — marketing site

Marketing site for Volt, which sells a complete sales system to solar companies (website, automated follow-up, missed-call text-back, review funnel, one-click campaigns, on-site SEO) with Google Ads as an add-on. Next.js (App Router, TypeScript), Tailwind v4, Motion, GSAP + ScrollTrigger, Lenis.

Copy rules: the CRM vendor is never named on the site (Volt's follow-up system is **Volt Relay**, `SITE.system`); Google Ads is always secondary; no em dashes. Full list in [DESIGN.md](DESIGN.md).

```bash
npm run dev
```

Open http://localhost:3000.

- Design decisions, tokens and motion constants: [DESIGN.md](DESIGN.md)
- CRM field names: `lib/fields.ts` · CRM adapter (stubbed): `lib/crm.ts` · brand/URLs: `lib/site.ts`
- Sections live in `components/sections/`, shared UI in `components/ui/`.
