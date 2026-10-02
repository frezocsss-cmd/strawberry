import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Button from "./Button";
import BrandLogo from "./icons/BrandLogo";
import LanguageSwitch from "./icons/LanguageSwitch";
import TelegramIcon from "./icons/TelegramIcon";
import useScrolled from "../hooks/useScrolled";
import useLang from "../i18n/useLang";
import { BRAND, CONTACTS } from "../data/brand";

const LINKS = [
  { id: "home", label: "home", href: "#home" },
  { id: "catalog", label: "catalog", href: "#catalog" },
  { id: "reviews", label: "reviews", href: "#reviews" },
  { id: "delivery", label: "delivery", href: "#delivery" },
  { id: "locations", label: "locations", href: "#locations" },
  { id: "contacts", label: "contacts", href: "#contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  const { t } = useLang();

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-2xl border bg-white/70 px-3 py-2.5 backdrop-blur-xl transition-all duration-300 sm:gap-3 sm:px-5 sm:py-3 ${
          scrolled
            ? "border-white/60 bg-white/85 shadow-[0_14px_38px_-16px_rgba(42,23,16,0.5)]"
            : "border-white/40 shadow-[0_10px_30px_-20px_rgba(42,23,16,0.45)]"
        }`}
      >
        <a href="#home" className="group flex min-w-0 items-center gap-2.5" aria-label={t.nav.homeAria}>
          <BrandLogo size="sm" className="transition-transform duration-300 group-hover:-rotate-6" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-[0.95rem] font-bold tracking-tight text-choco-950 sm:text-base">
              CHOCOBERRY
            </span>
            <span className="mt-0.5 text-[0.6rem] font-semibold tracking-[0.22em] text-berry-600/80 sm:text-[0.65rem]">
              {t.brand.city}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-semibold text-choco-800/80 transition-colors duration-200 hover:bg-choco-700/8 hover:text-choco-950"
              >
                {t.nav[link.label]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageSwitch className="hidden sm:flex" />

          <a
            href={CONTACTS[0].href}
            aria-label={t.nav.callAria}
            className="grid size-9 place-items-center rounded-full border border-choco-700/15 bg-white/80 text-choco-800 transition-colors duration-200 hover:border-berry-500/40 hover:text-berry-600 sm:size-10"
          >
            <Phone className="size-4" strokeWidth={2.2} />
          </a>

          <a
            href={BRAND.telegram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.nav.telegramAria}
            className="grid size-9 place-items-center rounded-full border border-choco-700/15 bg-white/80 text-choco-800 transition-colors duration-200 hover:border-[#2AABEE]/50 hover:text-[#2AABEE] sm:size-10"
          >
            <TelegramIcon className="size-4" />
          </a>

          <span className="hidden sm:block">
            <Button as="a" href="#contacts">
              {t.nav.order}
            </Button>
          </span>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid size-9 place-items-center rounded-full bg-choco-950 text-cream transition-colors duration-200 hover:bg-berry-600 lg:hidden"
          >
            {open ? (
              <X className="size-4.5" strokeWidth={2.4} />
            ) : (
              <Menu className="size-4.5" strokeWidth={2.4} />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`mx-auto mt-2 grid max-w-6xl transition-all duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-2xl border border-white/60 bg-white/95 p-3 shadow-[0_24px_60px_-24px_rgba(42,23,16,0.6)] backdrop-blur-xl">
            <div className="mb-2 flex items-center justify-between gap-3 border-b border-choco-950/8 pb-2">
              <span className="text-[0.68rem] font-bold tracking-[0.14em] text-choco-800/55 uppercase">
                {t.nav.language}
              </span>
              <LanguageSwitch />
            </div>

            <ul className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] font-semibold text-choco-900 transition-colors duration-200 hover:bg-berry-200/40"
                  >
                    {t.nav[link.label]}
                    <span aria-hidden="true" className="text-berry-500/60">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-choco-950/8 pt-3">
              <Button as="a" href="#contacts" onClick={() => setOpen(false)}>
                {t.nav.order}
              </Button>
              <Button as="a" href={CONTACTS[0].href} variant="outline" className="px-3">
                {t.nav.call}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}