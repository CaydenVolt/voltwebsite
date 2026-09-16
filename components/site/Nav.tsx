"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { AnimatePresence, motion, useReducedMotion, type Transition, type Variants } from "motion/react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/site/Wordmark";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { MenuIcon } from "@/components/ui/MenuIcon";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { pad } from "@/lib/format";
import { DURATION, HERO_TIMING as T, MEGA_MENU, MQ, NAV, REVEAL, SPRING } from "@/lib/tokens";
import { ABOUT_MENU, SITE, bookingHref, type MenuKey, type MenuItem, type NavLink as NavLinkData } from "@/lib/site";
import { getFeaturedAddons, getPublicProducts, productHref } from "@/lib/content/products";

const PRODUCTS = getPublicProducts();
/** The four sold outside the plan. Their own group in the menu, never numbered. */
const SEPARATE = getFeaturedAddons();
const MotionLink = motion.create(Link);

/**
 * Fixed navigation. Transparent over the hero (the hero draws its own
 * hairline under the bar), then once the hero has scrolled past, a solid bone
 * bar with a hairline settles in and the bar condenses. Both the background
 * and the height animate on the move spring from wherever they currently
 * are, so fast scrolling up and down never jumps.
 *
 * Desktop: "Products" opens a hard-edged bone mega-menu (hover with intent,
 * click, or keyboard). Below lg a full-screen ink menu takes over, with
 * Products expanding in place as a stacked list.
 */
export function Nav({ mark, masked }: { mark: string | null; masked?: boolean }) {
  const pathname = usePathname();
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  // Which mega-menu is open on desktop, and which section is expanded in the
  // mobile overlay. Both hold a menu key so a second menu costs no new state.
  const [mega, setMega] = useState<MenuKey | null>(null);
  const [section, setSection] = useState<MenuKey | null>(null);
  // The bar's height depends on the breakpoint, which is unknown on the
  // server. Springs switch on one frame after mount so the hydration
  // correction is instant rather than an animation on page load.
  const [ready, setReady] = useState(false);
  const threshold = useRef(Infinity);
  const menuButton = useRef<HTMLButtonElement>(null);
  const triggers = useRef(new Map<MenuKey, HTMLButtonElement>());
  const panels = useRef(new Map<MenuKey, HTMLDivElement>());
  const header = useRef<HTMLElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const hoverIn = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverOut = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useReducedMotion();
  const isLg = useMediaQuery(MQ.lg);

  /** Homepage anchors work from any page. */
  const hrefFor = (link: NavLinkData) =>
    link.href.startsWith("#") && pathname !== "/" ? `/${link.href}` : link.href;

  const lenis = useLenis((l) => {
    setCondensed(l.scroll > threshold.current);
  });

  // The bar condenses once the hero has left the viewport. Pages without a
  // hero get the solid bar from the start.
  useEffect(() => {
    const check = () => setCondensed(window.scrollY > threshold.current);
    const measure = () => {
      const hero = document.getElementById("hero");
      threshold.current = hero ? hero.offsetTop + hero.offsetHeight - NAV.condensed : -1;
      check();
    };
    measure();
    const frame = requestAnimationFrame(() => setReady(true));
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", measure);
    };
  }, [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    setSection(null);
  }, []);

  /* ---------- mega-menu: hover intent, click, keyboard ---------- */

  const clearTimers = () => {
    if (hoverIn.current) clearTimeout(hoverIn.current);
    if (hoverOut.current) clearTimeout(hoverOut.current);
    hoverIn.current = hoverOut.current = null;
  };
  const scheduleOpen = (key: MenuKey) => {
    clearTimers();
    hoverIn.current = setTimeout(() => setMega(key), MEGA_MENU.hoverInMs);
  };
  const scheduleClose = () => {
    clearTimers();
    hoverOut.current = setTimeout(() => setMega(null), MEGA_MENU.graceOutMs);
  };
  const closeMega = useCallback(
    (returnFocus = false) => {
      clearTimers();
      if (returnFocus && mega) triggers.current.get(mega)?.focus();
      setMega(null);
    },
    [mega],
  );

  useEffect(() => () => clearTimers(), []);

  // Route change closes everything. Adjusting state during render on a prop
  // change is the React-sanctioned form; an effect would paint the stale menu
  // for a frame first.
  const [seenPath, setSeenPath] = useState(pathname);
  if (pathname !== seenPath) {
    setSeenPath(pathname);
    setMega(null);
    setOpen(false);
    setSection(null);
  }

  const panelItems = () =>
    mega ? [...(panels.current.get(mega)?.querySelectorAll<HTMLAnchorElement>("a[data-item]") ?? [])] : [];

  /** True while focus is still somewhere inside a trigger or a panel. */
  const insideMenus = (node: Node | null) =>
    node !== null &&
    ([...triggers.current.values()].some((t) => t.contains(node)) ||
      [...panels.current.values()].some((p) => p.contains(node)));

  const onTriggerKeyDown = (e: React.KeyboardEvent, key: MenuKey) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      clearTimers();
      setMega(key);
      requestAnimationFrame(() => panelItems()[0]?.focus());
    } else if (e.key === "Escape") {
      closeMega(true);
    }
  };

  const onPanelKeyDown = (e: React.KeyboardEvent) => {
    const items = panelItems();
    const i = items.indexOf(document.activeElement as HTMLAnchorElement);
    const cols = MEGA_MENU.columns;
    const moves: Record<string, number> = {
      ArrowRight: i + 1,
      ArrowLeft: i - 1,
      ArrowDown: i + cols,
      ArrowUp: i - cols,
      Home: 0,
      End: items.length - 1,
    };
    if (e.key === "Escape") {
      e.preventDefault();
      closeMega(true);
      return;
    }
    if (e.key in moves && i >= 0) {
      e.preventDefault();
      const next = Math.max(0, Math.min(items.length - 1, moves[e.key]));
      items[next]?.focus();
    }
  };

  // Focus leaving both the trigger and the panel closes the panel.
  const onHeaderBlur = (e: React.FocusEvent) => {
    const next = e.relatedTarget as Node | null;
    if (!next) return;
    if (insideMenus(next)) return;
    closeMega();
  };

  /* ---------- mobile overlay: scroll lock, focus trap, Esc ---------- */

  const menuOpen = open && !isLg;

  useEffect(() => {
    if (!menuOpen) return;
    const opener = menuButton.current;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    overlay.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = [
        ...(header.current?.querySelectorAll<HTMLElement>("a, button") ?? []),
        ...(overlay.current?.querySelectorAll<HTMLElement>("a, button") ?? []),
      ].filter((el) => el.offsetParent !== null);
      if (!nodes.length) return;
      const firstNode = nodes[0];
      const lastNode = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === firstNode) {
        e.preventDefault();
        lastNode.focus();
      } else if (!e.shiftKey && document.activeElement === lastNode) {
        e.preventDefault();
        firstNode.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
      opener?.focus();
    };
  }, [menuOpen, lenis, close]);

  /* ---------- motion ---------- */

  // Only the homepage has a hero to be transparent over. Everywhere else the
  // bar is solid and condensed from the first paint, no measurement needed.
  const solid = condensed || pathname !== "/";
  const barHeight = solid ? NAV.condensed : isLg ? NAV.lg : NAV.base;
  const barTransition = !ready
    ? { duration: 0 }
    : reduced
      ? { duration: DURATION.crossfade }
      : SPRING.move;
  const megaTransition = reduced ? { duration: DURATION.crossfade } : SPRING.touch;

  const list: Variants = {
    hidden: { transition: { staggerChildren: REVEAL.stagger * 0.5, staggerDirection: -1 } },
    show: { transition: { staggerChildren: REVEAL.stagger, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : REVEAL.y },
    show: { opacity: 1, y: 0, transition: reduced ? { duration: DURATION.crossfade } : SPRING.move },
  };

  return (
    <>
      <motion.header
        ref={header}
        data-surface={menuOpen ? "ink" : undefined}
        data-condensed={solid || undefined}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.rise, delay: T.nav }}
        onPointerLeave={() => mega && scheduleClose()}
        onBlur={onHeaderBlur}
        className="fixed inset-x-0 top-0 z-nav"
      >
        {/* Solid bone bar, faded in once past the hero. No blur, no translucency. */}
        <motion.div
          aria-hidden
          initial={false}
          animate={{ opacity: (solid || mega !== null) && !menuOpen ? 1 : 0 }}
          transition={barTransition}
          className="pointer-events-none absolute inset-0 border-b border-rule bg-bone"
        />
        <motion.div
          initial={false}
          animate={{ height: barHeight }}
          transition={barTransition}
          className="relative flex items-center justify-between px-gutter"
        >
          <Link
            href="/"
            data-cursor="grow"
            aria-label={`${SITE.name} home`}
            onClick={close}
            className="flex h-full items-center"
          >
            <Wordmark mark={mark} masked={masked} />
          </Link>

          <div className="flex items-center gap-2 lg:gap-0">
            <nav aria-label="Primary" className="mr-8 hidden items-center gap-8 lg:flex">
              {SITE.nav.map((link) =>
                link.menu ? (
                  <button
                    key={link.href}
                    ref={(el) => {
                      const key = link.menu as MenuKey;
                      if (el) triggers.current.set(key, el);
                      else triggers.current.delete(key);
                    }}
                    type="button"
                    data-cursor="grow"
                    aria-expanded={mega === link.menu}
                    aria-controls={`${link.menu}-menu`}
                    aria-haspopup="true"
                    onPointerEnter={() => scheduleOpen(link.menu as MenuKey)}
                    onFocus={(e) => {
                      // Focus arriving back from the panel (Esc, Shift+Tab) must not reopen it.
                      if (panels.current.get(link.menu as MenuKey)?.contains(e.relatedTarget as Node | null)) return;
                      clearTimers();
                      setMega(link.menu as MenuKey);
                    }}
                    onClick={() => {
                      clearTimers();
                      setMega((m) => (m === link.menu ? null : (link.menu as MenuKey)));
                    }}
                    onKeyDown={(e) => onTriggerKeyDown(e, link.menu as MenuKey)}
                    className="relative flex items-center gap-2 py-1 text-body-sm font-medium text-fg"
                  >
                    {link.label}
                    <motion.svg
                      aria-hidden
                      animate={{ rotate: mega === link.menu ? 180 : 0 }}
                      transition={megaTransition}
                      width="0.75em"
                      height="0.75em"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    >
                      <path d="M3 6l5 5 5-5" />
                    </motion.svg>
                    <motion.span
                      aria-hidden
                      initial={false}
                      animate={{ scaleX: mega === link.menu ? 1 : 0 }}
                      transition={SPRING.touch}
                      className="absolute inset-x-0 bottom-0 h-px origin-left bg-fg"
                    />
                  </button>
                ) : (
                  <NavAnchor key={link.href} label={link.label} href={hrefFor(link)} />
                ),
              )}
            </nav>
            <Button href={bookingHref("nav_book")} source="nav_book" size="sm" external>
              Book a call
            </Button>
            <button
              ref={menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              data-cursor="grow"
              onClick={() => (menuOpen ? close() : setOpen(true))}
              className="label flex h-11 items-center px-3 text-fg lg:hidden"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </motion.div>

        {/* Products mega-menu: hard-edged bone panel, hairline border, 3 × 2 grid */}
        <MegaPanel
          menuKey="products"
          label="Products"
          open={mega === "products"}
          transition={megaTransition}
          panels={panels}
          onPointerEnter={clearTimers}
          onKeyDown={onPanelKeyDown}
        >
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <span className="label text-muted">In the monthly fee</span>
            <span className="label text-muted">{pad(PRODUCTS.length)} products</span>
          </div>
          <ul className="grid grid-cols-3 gap-x-8 gap-y-6 py-8">
            {PRODUCTS.map((p, i) => (
              <li key={p.slug}>
                <MegaItem
                  index={i + 1}
                  slug={p.slug}
                  name={p.name}
                  description={p.description}
                  href={productHref(p.slug)}
                />
              </li>
            ))}
          </ul>
          <div className="flex items-baseline justify-between border-t border-line pb-3 pt-5">
            <span className="label text-muted">Sold separately</span>
            <span className="label text-muted">Not part of the system</span>
          </div>
          <ul className="grid grid-cols-3 gap-x-8 gap-y-6 pb-8 pt-5">
            {SEPARATE.map((p) => (
              <li key={p.slug}>
                <MegaItem slug={p.slug} name={p.name} description={p.description} href={productHref(p.slug)} />
              </li>
            ))}
          </ul>
          <div className="border-t border-line pt-5">
            <Button href="/products" source="mega_all_products" variant="link">
              See all products
            </Button>
          </div>
        </MegaPanel>

        {/* About mega-menu: same panel, marks where the products menu has numerals */}
        <MegaPanel
          menuKey="about"
          label="About"
          open={mega === "about"}
          transition={megaTransition}
          panels={panels}
          onPointerEnter={clearTimers}
          onKeyDown={onPanelKeyDown}
        >
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <span className="label text-muted">About {SITE.name}</span>
            <span className="label text-muted">Who we are, how we work</span>
          </div>
          <ul className="grid grid-cols-3 gap-x-8 gap-y-6 py-8">
            {ABOUT_MENU.map((l) => (
              <li key={l.href}>
                <AboutItem item={l} />
              </li>
            ))}
          </ul>
          <div className="border-t border-line pt-5">
            <Button href={bookingHref("mega_about_book")} source="mega_about_book" variant="link" external>
              Book a 20-minute call
            </Button>
          </div>
        </MegaPanel>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            id="site-menu"
            ref={overlay}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            data-surface="ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.crossfade }}
            className="fixed inset-0 z-menu flex flex-col overflow-y-auto bg-ink px-gutter pb-section-sm pt-nav text-bone lg:hidden"
          >
            <motion.ul
              variants={list}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-1 flex-col justify-center gap-6 border-t border-line pt-8"
            >
              {SITE.nav.map((link, i) =>
                link.menu ? (
                  <motion.li key={link.href} variants={item}>
                    <div className="flex items-baseline gap-4">
                      <span className="label text-muted">{pad(i + 1)}</span>
                      <button
                        type="button"
                        aria-expanded={section === link.menu}
                        aria-controls={`menu-${link.menu}`}
                        data-cursor="grow"
                        onClick={() => setSection((o) => (o === link.menu ? null : (link.menu as MenuKey)))}
                        className="flex items-baseline gap-3 font-display text-display-md text-fg"
                      >
                        {link.label}
                        <span aria-hidden className="label text-muted">
                          {section === link.menu ? "Close" : "Open"}
                        </span>
                      </button>
                    </div>
                    <MobileSection
                      menuKey={link.menu as MenuKey}
                      open={section === link.menu}
                      onNavigate={close}
                    />
                  </motion.li>
                ) : (
                  <motion.li key={link.href} variants={item} className="flex items-baseline gap-4">
                    <span className="label text-muted">{pad(i + 1)}</span>
                    <a
                      href={hrefFor(link)}
                      onClick={close}
                      data-cursor="grow"
                      className="font-display text-display-md text-fg"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ),
              )}
              <motion.li variants={item} className="mt-6 border-t border-line pt-8">
                <Button href={bookingHref("menu_book")} source="menu_book" external>
                  Book a 20-minute call
                </Button>
                <p className="label mt-6 text-muted">No contracts. Cancel anytime.</p>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * The panel both menus use: hard-edged bone, hairline border, gutter to
 * gutter under the bar. Always mounted, `inert` and click-through while
 * closed, so opening never costs a mount and focus can never land inside a
 * menu nobody opened.
 */
function MegaPanel({
  menuKey,
  label,
  open,
  transition,
  panels,
  onPointerEnter,
  onKeyDown,
  children,
}: {
  menuKey: MenuKey;
  label: string;
  open: boolean;
  transition: Transition;
  panels: RefObject<Map<MenuKey, HTMLDivElement>>;
  onPointerEnter: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  children: ReactNode;
}) {
  return (
    <motion.div
      ref={(el) => {
        if (el) panels.current.set(menuKey, el);
        else panels.current.delete(menuKey);
      }}
      id={`${menuKey}-menu`}
      role="region"
      aria-label={label}
      aria-hidden={!open}
      inert={!open}
      initial={false}
      animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
      transition={transition}
      onPointerEnter={onPointerEnter}
      onKeyDown={onKeyDown}
      style={{ pointerEvents: open ? "auto" : "none" }}
      className="absolute left-gutter right-gutter top-full hidden border border-line bg-bone px-8 pb-6 pt-6 text-ink lg:block"
    >
      {children}
    </motion.div>
  );
}

/**
 * One About row: the mark sits in the column the products menu gives its
 * numeral, so the two panels share a rhythm. The mark is this row's marker,
 * so unlike the product marks it takes the accent on hover.
 */
function AboutItem({ item }: { item: MenuItem }) {
  return (
    <MotionLink
      href={item.href}
      data-item
      data-cursor="grow"
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      className="group grid grid-cols-[2.5rem_1fr] gap-x-3 py-1"
    >
      <MenuIcon
        name={item.icon}
        className="mt-0.5 size-5 text-muted transition-colors duration-100 group-hover:text-accent group-focus-visible:text-accent"
      />
      <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={SPRING.touch} className="block">
        <span className="block text-body font-medium text-fg">{item.label}</span>
        <span className="mt-1 block text-body-sm text-muted">{item.description}</span>
      </motion.span>
    </MotionLink>
  );
}

/**
 * One mega-menu item: numeral in a fixed column, name, one-line description.
 * Products sold outside the plan pass no index and leave that column empty,
 * so both groups line up while only the six carry numerals.
 */
function MegaItem({
  index,
  slug,
  name,
  description,
  href,
}: {
  index?: number;
  slug: string;
  name: string;
  description: string;
  href: string;
}) {
  return (
    <MotionLink
      href={href}
      data-item
      data-cursor="grow"
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      className="group grid grid-cols-[2.5rem_1fr] gap-x-3 py-1"
    >
      <span className="label pt-1.5 text-muted transition-colors duration-100 group-hover:text-accent group-focus-visible:text-accent">
        {index !== undefined ? pad(index) : ""}
      </span>
      <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={SPRING.touch} className="block">
        <span className="flex items-center gap-2.5 text-body font-medium text-fg">
          <ProductIcon slug={slug} className="size-4 text-muted" />
          {name}
        </span>
        <span className="mt-1 block text-body-sm text-muted">{description}</span>
      </motion.span>
    </MotionLink>
  );
}

/** A menu expanded in place inside the mobile overlay: a stacked, ruled list. */
function MobileSection({
  menuKey,
  open,
  onNavigate,
}: {
  menuKey: MenuKey;
  open: boolean;
  onNavigate: () => void;
}) {
  const body = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = body.current;
    if (!el) return;
    const measure = () => setHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <motion.div
      id={`menu-${menuKey}`}
      aria-hidden={!open}
      inert={!open}
      initial={false}
      animate={{ height: open ? height : 0, opacity: open ? 1 : 0 }}
      transition={reduced ? { height: { duration: 0 }, opacity: { duration: DURATION.crossfade } } : SPRING.move}
      className="overflow-hidden"
    >
      <div ref={body} className="mt-4 pl-10">
        {menuKey === "about" ? (
          <ul className="border-t border-line">
            {ABOUT_MENU.map((l) => (
              <li key={l.href} className="border-b border-line">
                <a
                  href={l.href}
                  onClick={onNavigate}
                  data-cursor="grow"
                  className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 py-3"
                >
                  <MenuIcon name={l.icon} className="size-5 translate-y-1 text-muted" />
                  <span>
                    <span className="block font-display text-item text-fg">{l.label}</span>
                    <span className="mt-1 block text-body-sm text-muted">{l.description}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <>
        <ul className="border-t border-line">
          {PRODUCTS.map((p, i) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                href={productHref(p.slug)}
                onClick={onNavigate}
                data-cursor="grow"
                className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 py-3"
              >
                <span className="label text-muted">{pad(i + 1)}</span>
                <span className="flex items-center gap-2.5 font-display text-item text-fg">
                  <ProductIcon slug={p.slug} className="size-4 text-muted" />
                  {p.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="label pb-2 pt-5 text-muted">Sold separately</p>
        <ul className="border-t border-line">
          {SEPARATE.map((p) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                href={productHref(p.slug)}
                onClick={onNavigate}
                data-cursor="grow"
                className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 py-3"
              >
                <span aria-hidden />
                <span className="flex items-center gap-2.5 font-display text-item text-fg">
                  <ProductIcon slug={p.slug} className="size-4 text-muted" />
                  {p.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
          </>
        )}
      </div>
    </motion.div>
  );
}

function NavAnchor({ label, href }: { label: string; href: string }) {
  return (
    <motion.a
      href={href}
      data-cursor="grow"
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      className="relative py-1 text-body-sm font-medium text-fg"
    >
      {label}
      <motion.span
        aria-hidden
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={SPRING.touch}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-fg"
      />
    </motion.a>
  );
}
