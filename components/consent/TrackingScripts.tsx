"use client";

import Script from "next/script";
import { useConsent } from "@/components/consent/ConsentProvider";
import { TRACKING } from "@/lib/tracking";

/**
 * The only place a tracking script is loaded.
 *
 * Two conditions, both required: the visitor has consented to that category,
 * and the ID exists. Consent without an ID loads nothing, and an ID without
 * consent loads nothing. There is no path where a script runs before a yes.
 *
 * Nothing is loaded and then disabled: the tags are simply absent until the
 * moment consent is given, which is what opt-in means and is the only version
 * that is true when someone checks the network tab.
 */
export function TrackingScripts() {
  const { consent } = useConsent();

  // Null until storage has been read. Rendering nothing is correct: it is the
  // state where we do not yet know, and not knowing means not loading.
  if (!consent) return null;

  const analytics = consent.analytics && TRACKING.GA4_ID !== "";
  const ads = consent.advertising && TRACKING.GOOGLE_ADS_ID !== "";
  const meta = consent.advertising && TRACKING.META_PIXEL_ID !== "";
  /* Analytics and Google Ads share one gtag.js loader, so it is loaded when
     either is allowed and then configured only for the ones that are. */
  const gtagId = analytics ? TRACKING.GA4_ID : ads ? TRACKING.GOOGLE_ADS_ID : "";

  return (
    <>
      {gtagId && (
        <>
          <Script
            id="gtag-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());
${analytics ? `gtag('config','${TRACKING.GA4_ID}');` : ""}
${ads ? `gtag('config','${TRACKING.GOOGLE_ADS_ID}');` : ""}`}
          </Script>
        </>
      )}

      {meta && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${TRACKING.META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
