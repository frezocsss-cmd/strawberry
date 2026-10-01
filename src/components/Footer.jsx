import { Phone } from "lucide-react";
import BrandLogo from "./icons/BrandLogo";
import InstagramIcon from "./icons/InstagramIcon";
import TelegramIcon from "./icons/TelegramIcon";
import useLang from "../i18n/useLang";
import { BRAND, CONTACTS } from "../data/brand";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative overflow-hidden bg-choco-950 pt-14 pb-8 text-cream/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-berry-600/20 blur-3xl"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#home" className="group flex items-center gap-3">
            <BrandLogo className="transition-transform duration-300 group-hover:-rotate-6" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-cream">
                {BRAND.name}
              </span>
              <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.22em] text-berry-400/70">
                {t.brand.city}
              </span>
            </span>
          </a>

          <p className="max-w-md text-sm text-pretty text-cream/60">{t.brand.tagline}</p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <SocialLink href={BRAND.instagram} ariaLabel={BRAND.instagramHandle}>
              <InstagramIcon className="size-4" />
              {BRAND.instagramHandle}
            </SocialLink>

            <span aria-hidden="true" className="hidden h-4 w-px bg-cream/15 sm:block" />

            <SocialLink href={BRAND.telegram} ariaLabel={BRAND.telegramHandle}>
              <TelegramIcon className="size-4" />
              {BRAND.telegramHandle}
            </SocialLink>

            <span aria-hidden="true" className="hidden h-4 w-px bg-cream/15 sm:block" />

            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              {CONTACTS.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  aria-label={contact.label}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cream/75 transition-colors duration-200 hover:text-berry-400"
                >
                  <Phone className="size-3.5" strokeWidth={2.4} />
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row">
          <p>© 2026 {BRAND.name}</p>
          <p>{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, ariaLabel, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel}
      className="inline-flex items-center gap-2 text-sm font-semibold text-cream/75 transition-colors duration-200 hover:text-berry-400"
    >
      {children}
    </a>
  );
}