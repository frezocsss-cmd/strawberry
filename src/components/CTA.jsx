import { Phone } from "lucide-react";
import Button from "./Button";
import BrandLogo from "./icons/BrandLogo";
import TelegramIcon from "./icons/TelegramIcon";
import Reveal from "./Reveal";
import useLang from "../i18n/useLang";
import { BRAND, CONTACTS } from "../data/brand";
import { img07 } from "../data/assets";

export default function CTA() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-cream pb-4">
      <div className="container-page">
        <Reveal direction="zoom" className="relative">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-choco-950 px-6 py-14 sm:rounded-[2.5rem] sm:px-10 sm:py-20">
            <img
              src={img07}
              alt=""
              aria-hidden="true"
              width="1440"
              height="2560"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 -z-10 size-full object-cover opacity-25"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-linear-to-br from-choco-950/95 via-choco-900/85 to-berry-700/70"
            />
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-10 -z-10 size-72 rounded-full bg-berry-500/25 blur-3xl"
            />

            <div className="mx-auto max-w-2xl text-center">
              <BrandLogo size="lg" className="mx-auto !rounded-full" />
              <h2 className="mt-4 font-display text-[1.9rem] leading-[1.12] font-semibold tracking-tight text-balance text-cream sm:text-5xl">
                {t.cta.title}
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-pretty text-cream/75 sm:text-lg">
                {t.cta.text}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  as="a"
                  href="#contacts"
                  size="lg"
                  variant="berry"
                  className="w-full sm:w-auto"
                >
                  {t.cta.order}
                </Button>
                <Button
                  as="a"
                  href={CONTACTS[0].href}
                  size="lg"
                  variant="light"
                  className="w-full sm:w-auto"
                >
                  <Phone className="size-4.5" strokeWidth={2.4} />
                  {t.cta.call}
                </Button>
                <Button
                  as="a"
                  href={BRAND.telegram}
                  target="_blank"
                  rel="noreferrer noopener"
                  size="lg"
                  variant="light"
                  className="w-full sm:w-auto"
                >
                  <TelegramIcon className="size-4.5" />
                  {t.cta.telegram}
                </Button>
              </div>

              <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-cream/50 uppercase">
                {BRAND.instagramHandle} · {t.brand.followers}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}