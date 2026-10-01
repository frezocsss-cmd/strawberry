import { Clock, MapPin, Phone } from "lucide-react";
import Button from "./Button";
import BrandLogo from "./icons/BrandLogo";
import InstagramIcon from "./icons/InstagramIcon";
import TelegramIcon from "./icons/TelegramIcon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import useLang from "../i18n/useLang";
import { BRAND, CONTACTS } from "../data/brand";

export default function Contact() {
  const { t } = useLang();

  const rows = [
    { id: "phone", icon: Phone, label: t.contact.phoneLabel, value: CONTACTS[0].label, href: CONTACTS[0].href },
    { id: "phone2", icon: Phone, label: t.contact.phoneLabel, value: CONTACTS[1].label, href: CONTACTS[1].href },
    {
      id: "district",
      icon: MapPin,
      label: t.contact.districtsLabel,
      value: t.delivery.districts.join(" • "),
    },
    {
      id: "delivery",
      icon: Clock,
      label: t.contact.deliveryLabel,
      value: t.contact.deliveryValue,
    },
  ];

  return (
    <section id="contacts" className="relative scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <Reveal
          delay={120}
          className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[var(--shadow-lift)] backdrop-blur-md sm:mt-14"
        >
          <div className="bg-linear-to-br from-choco-700 to-berry-600 px-6 py-7 text-center sm:px-10 sm:py-9">
            <BrandLogo size="lg" className="mx-auto !rounded-full" />
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
              {t.contact.header}
            </h3>
            <p className="mt-2 text-sm font-medium text-cream/80">{t.brand.tagline}</p>
          </div>

          <ul className="grid gap-px bg-choco-950/6 sm:grid-cols-2">
            {rows.map((row) => {
              const Icon = row.icon;
              const content = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-berry-200/60 text-choco-800">
                    <Icon className="size-4.5" strokeWidth={2.2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-bold tracking-[0.14em] text-choco-800/50 uppercase">
                      {row.label}
                    </span>
                    <span className="block text-[1.02rem] font-bold text-choco-950">
                      {row.value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={row.id} className="bg-white/90">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="flex items-center gap-3.5 px-5 py-4 transition-colors duration-200 hover:bg-berry-200/25 sm:px-7 sm:py-5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3.5 px-5 py-4 sm:px-7 sm:py-5">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <ul className="grid gap-3 border-t border-choco-950/6 bg-white/90 p-5 sm:grid-cols-2 sm:p-7">
            <li>
              <Button
                as="a"
                href={BRAND.telegram}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
                className="w-full"
              >
                <TelegramIcon className="size-4.5" />
                {t.contact.telegramBtn}
              </Button>
            </li>
            <li>
              <Button
                as="a"
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
                className="w-full"
              >
                <InstagramIcon className="size-4.5" />
                {t.contact.instagramBtn}
              </Button>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={160} className="mt-6">
          <ul className="flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-6">
            <li className="text-choco-800/65">
              {t.contact.channelLabel}:{" "}
              <a
                href={BRAND.telegram}
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-[#2AABEE] underline-offset-4 hover:underline"
              >
                {BRAND.telegramHandle}
              </a>
            </li>
            <li className="text-choco-800/65">
              {t.contact.adminLabel}:{" "}
              <a
                href={BRAND.telegramAdmin}
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-berry-700 underline-offset-4 hover:underline"
              >
                {BRAND.telegramAdminHandle}
              </a>
            </li>
            <li className="text-choco-800/65">
              Instagram:{" "}
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-berry-700 underline-offset-4 hover:underline"
              >
                {BRAND.instagramHandle}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}