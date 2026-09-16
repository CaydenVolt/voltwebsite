"use client";

import { useConsent } from "@/components/consent/ConsentProvider";

/**
 * The two footer controls that open the preferences panel.
 *
 * "Do Not Sell or Share My Personal Information" is the wording California
 * expects and it has to be a clear, visible route to the opt-out. It is the
 * same control as "Cookie settings" under the name the law uses, which is
 * permitted: what matters is that the link exists and that following it
 * actually turns the sharing off.
 *
 * Buttons rather than links, because nothing navigates. Styled to match the
 * links beside them so the column reads as one list.
 */
const style =
  "text-left text-body-sm text-fg link-underline decoration-underline-current hover:decoration-fg";

export function ConsentLinks() {
  const { setOpen } = useConsent();
  return (
    <>
      <li>
        <button type="button" onClick={() => setOpen(true)} data-cursor="grow" className={style}>
          Cookie settings
        </button>
      </li>
      <li>
        <button type="button" onClick={() => setOpen(true)} data-cursor="grow" className={style}>
          Do Not Sell or Share My Personal Information
        </button>
      </li>
    </>
  );
}
