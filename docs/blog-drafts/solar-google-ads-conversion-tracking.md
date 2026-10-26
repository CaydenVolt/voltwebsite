---
slug: solar-google-ads-conversion-tracking
title: Solar Google Ads conversion tracking from click to CRM
metaTitle: "Solar Google Ads Conversion Tracking: Click to CRM"
metaDescription: "How to track solar Google Ads from click to CRM: GA4 events, call tracking, enhanced conversions, offline imports for the sat appointment. The usual leak."
keyword: solar google ads conversion tracking
secondary:
  - solar ppc tracking
  - google ads enhanced conversions solar
  - solar call tracking
  - offline conversion import solar
category: google-ads
intent: Informational
icon: funnel
pillar: false
published: 2026-10-30
answer: >
  Solar Google Ads conversion tracking fails in the same place in almost
  every account: the signal stops at the form submission. Google optimises
  the auction toward the thing you measure, so a solar account that only
  tracks form fills is pulling in form fills, including the half that never
  book a survey. The fix is a four-stage pipeline: click to form fill in
  GA4, form fill to answered call via call tracking, answered call to sat
  appointment via offline conversion import from the CRM, and enhanced
  conversions sending hashed first-party data back to Google so the match
  survives privacy signals.
takeaways:
  - Google optimises what you measure. Measuring form fills means buying form fills.
  - Enhanced conversions are a 15-minute setup that recovers roughly 15 to 25 percent of attribution lost to privacy.
  - Call tracking matters because 40 to 60 percent of solar paid-ads leads come by phone.
  - The sat appointment is the signal worth sending back. Offline conversion imports do the sending.
related:
  - google-ads-for-solar-contractors
  - what-solar-leads-cost-on-google-ads
  - solar-google-ads-landing-pages
---

The audit finding that surprises most solar operators is simple: Google Ads is doing exactly what you asked it to. The question is whether what you asked for is what you actually want.

A Google Ads account optimised against form submissions, which is the default for most solar landing pages, will pull in the cheapest form submissions in the auction. Those are not the same thing as the cheapest sat appointments. In the typical solar funnel, roughly half of the form fills never book a survey, so by optimising on form fills the account is spending budget to maximise a mix that includes a lot of noise.

The fix is to measure the thing that actually matters, which is the sat appointment, and feed that signal back to Google so the auction optimises for it. That is a four-stage tracking job, not a one-click toggle, and most solar accounts do only the first stage.

This piece lays out what the four stages are, what each one buys you, where the usual leak happens, and the setup order that works.

## What are the four stages of solar Google Ads tracking?

In order from least to most useful:

**Stage 1: Click to form fill, in GA4.** The basic install. A thank-you page fires a GA4 event, the event is imported into Google Ads as a conversion, the account optimises toward form fills. This is where most solar accounts stop. It is better than nothing, but it hides the real work.

**Stage 2: Click to answered call, via a call tracking number.** A dynamic phone number on the landing page swaps to a tracked number when the visitor arrived from a Google Ads click. Calls to that number ring through to your main line but are logged with the originating click. The call is marked as a conversion once it is answered for a defined duration (usually 30 seconds). For most solar accounts this doubles the number of conversions Google sees, because 40 to 60 percent of paid solar leads come by phone rather than form.

**Stage 3: Click to sat appointment, via offline conversion import.** The CRM flags a lead as a sat appointment at the moment the sales rep confirms the appointment was attended. That event, with the original gclid from the ad click, is uploaded back to Google Ads as an offline conversion. Google now has the real downstream signal and can optimise toward the ad clicks that actually produce sat appointments, not just form fills.

**Stage 4: Enhanced conversions with first-party data.** For every conversion, hashed first-party data (email, phone, name) is sent to Google alongside the gclid. When the browser's gclid cookie is missing or stale (Safari, incognito, iOS privacy), Google can still match the conversion to a click via the hashed data. Enhanced conversions typically recover 15 to 25 percent of attribution lost to privacy signals and are a 15-minute setup on most modern tag managers.

A solar account running all four stages has a materially different conversation with the ad platform than one running only the first.

## How does call tracking work mechanically?

The visitor lands on the page. A piece of JavaScript on the page detects whether the visitor arrived from a Google Ads click (either via the gclid URL parameter or a session cookie). If so, the phone number displayed on the page swaps from your main business number to a tracked number from the call tracking provider.

When the visitor calls that number, the call tracking provider routes the call through to your business line, records the start time and duration, and attaches the original gclid as metadata. If the call lasts longer than the duration you defined (30 seconds, 60 seconds, whatever threshold you set), the call tracking provider sends a conversion event back to Google Ads with the gclid attached.

Common providers include CallRail, CallTrackingMetrics, and ServiceCore. All of them integrate with Google Ads via a native connector; setup time is usually under 30 minutes once the account is created.

The watch-out: swap the phone number on every surface the visitor might convert from, not just the hero. A footer phone number that stays static is where 20 to 30 percent of your calls will come from on a long page, and those calls are untracked. The dynamic number insertion script needs to find every phone number on the page.

## Why does enhanced conversions matter for solar?

Enhanced conversions matter because Safari and iOS privacy signals break the gclid cookie for roughly a third of US web traffic. When a visitor clicks an ad on an iPhone, lands on your landing page, and fills a form two days later from a different browser session, the gclid cookie may already be expired or missing. Google cannot attribute the conversion to the original click, and the ad that drove the eventual lead gets no credit.

Enhanced conversions fix the attribution gap by sending Google a hashed version of the visitor's email and phone when they convert. Google compares the hash against hashed data from signed-in Google users and matches the conversion to the originating ad click even when the cookie is gone. The visitor's identity is never exposed to Google; the match happens on the hash.

The setup is in Google Tag Manager or whatever tag manager the site uses. You add fields to the conversion event for `email`, `phone`, `first_name`, `last_name`, and `address`, all hashed before transmission. In Google Ads, under conversion settings, you enable enhanced conversions and link the event. The whole setup takes 15 to 30 minutes.

Recovery varies by account but typically runs 15 to 25 percent more attributed conversions on the same ad spend after enhanced conversions are enabled. That is 15 to 25 percent more signal for Google's bidding algorithms to use, which means better optimisation on the same budget.

## How do offline conversion imports work for the sat appointment?

Offline conversion imports are where most solar accounts have the biggest open opportunity. The mechanics:

1. The ad click fires a gclid. The landing page captures the gclid in a hidden form field and stores it on the lead in the CRM.
2. The lead progresses through the CRM: form fill, qualified, appointment set, appointment confirmed, appointment attended (sat).
3. At the moment the lead becomes a sat appointment, the CRM fires an event that includes the gclid and the conversion value (if you choose to pass one).
4. The event is pushed to Google Ads via the Offline Conversion Import API (or via a CSV upload, which also works). The import can run daily or on each event.
5. Google Ads logs the sat appointment as a conversion attributed to the original ad click.

A CRM with native Google Ads integration (HubSpot, Pipedrive with the right add-on, Volt Relay) sets this up through a native connector in 30 to 60 minutes. A CRM without native integration needs a Zapier flow or a cron job that pushes the CSV, which takes 2 to 4 hours.

The gain, once the import is running: Google Ads can now optimise toward the ad clicks that produce sat appointments, which is the downstream signal that actually matches your business economics. In accounts we have moved from form-fill optimisation to sat-appointment optimisation, cost per sat appointment typically falls 20 to 35 percent inside 60 to 90 days as the algorithm reallocates spend.

## What should the setup order be?

The sequence that works, from fastest return to slowest:

**Week 1: Call tracking.** Easiest single win. 30 minutes of setup, immediately doubles the number of conversions Google sees, and reveals which campaigns actually drive phone leads versus just form leads. Many solar operators discover that a campaign they thought was underperforming was actually their best campaign because 70 percent of its conversions came by phone and were invisible.

**Week 2: Enhanced conversions.** 15 to 30 minutes of setup. Immediate 15 to 25 percent lift in attributed conversions. Zero additional cost.

**Weeks 3 to 4: Offline conversion imports for sat appointments.** The biggest-impact fix and the one that takes the longest to set up and tune. Allow 30 to 60 days after turning it on for Google's bidding to learn against the new signal. Expect cost per lead to look worse in the first 2 to 3 weeks as the algorithm reallocates, then noticeably better by day 60.

**Week 5 onward: Install conversions tracking.** For accounts with enough volume to attribute reliably at the install level (usually 50+ installs per quarter), import the closed-install event as a secondary conversion. This gives Google the fullest downstream signal possible, though it is only worth setting up once the earlier stages are solid.

Doing the stages out of order is one of the biggest wastes we see. Operators who set up offline conversion imports before enhanced conversions find that the gclid is missing on a third of their imports because the cookie was lost; the sat appointment imports therefore cover only two thirds of real sat appointments and the signal is weakened.

## Where does the pipeline usually leak?

Three common failure points:

**The gclid never reaches the CRM.** The landing page form has a `gclid` field, but it is not set up to capture the URL parameter, or the parameter is stripped by a tracking pixel before the form sees it. The field is empty on 90 percent of leads. Fix: validate on five test clicks that the gclid lands in the CRM record.

**The sat appointment event does not fire reliably.** The CRM has a stage called "sat appointment" but the sales rep forgets to mark the lead as sat half the time. The imports run against incomplete data. Fix: make the stage move happen automatically from the appointment calendar when the rep marks "attended" or from an SMS confirmation to the rep after the appointment time passes.

**The call tracking numbers are dynamic in the hero but static elsewhere.** The main phone number on the "contact" section or the footer is the business's real number, not a tracked one. Calls there do not attribute. Fix: audit every phone number on the landing page and make sure the swap script finds all of them.

Each of these is a 1 to 2 hour fix, and each one recovers signal that was already there and being lost.

## FAQ

**Do I need all four stages running to see results?**
No. Call tracking plus enhanced conversions alone is already a materially better setup than form-fills-only. Those two stages cost under an hour of setup and typically lift usable conversion signal by 60 to 100 percent. The offline conversion import is the bigger lift but also the bigger project.

**What is the right conversion value to send with the sat appointment?**
Use your average revenue per installed deal multiplied by your sat-to-install close rate. For a $25,000 average deal at a 30 percent close rate, that is $7,500 per sat appointment. Google Ads will use the value to optimise target ROAS bidding if you choose to run it later.

**Can I use Zapier to push offline conversions?**
Yes, Zapier works. It costs $20 to $70 per month depending on volume. For accounts with native CRM-to-Google-Ads integration (available in several solar CRMs including Volt Relay), the native integration is cleaner and does not depend on a third-party automation tool.

**Should I run both the Google Ads conversion pixel and GA4?**
Yes, both. Google Ads needs the Google Ads conversion tracking pixel to optimise bidding; GA4 gives you the richer attribution path reporting. They are not substitutes.

**How long until my ad performance improves after setting all four up?**
Call tracking and enhanced conversions start showing lift inside 2 to 7 days. Offline conversion imports need 30 to 60 days for Google's bidding to retrain, during which cost per lead often looks worse before it gets better. Plan the budget for a 60-day retraining window, not a 7-day one.
