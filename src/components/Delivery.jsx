import { Clock, Gift, MapPin, Truck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import BrandLogo from "./icons/BrandLogo";
import ImagePlaceholder from "./ImagePlaceholder";
import useLang from "../i18n/useLang";
import { CONTACTS } from "../data/brand";


const POINT_ICONS = { yunusabad: MapPin, chilanzar: MapPin, speed: Truck, gift: Gift };

export default function Delivery() {
  const { t } = useLang();
  const districts = t.delivery.districts;

  return (
    <section
      id="delivery"
      className="relative scroll-mt-24 overflow-hidden bg-cream-2 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -left-20 size-72 rounded-full bg-choco-600/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-16 size-72 rounded-full bg-berry-400/25 blur-3xl"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow={t.delivery.eyebrow}
          title={t.delivery.title}
          subtitle={t.delivery.subtitle}
        />

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <Reveal direction="left" className="order-2 lg:order-1">
            <ul className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
              {t.delivery.points.map((point, index) => {
                const Icon = POINT_ICONS[point.id] ?? MapPin;
                return (
                  <Reveal
                    as="li"
                    key={point.id}
                    delay={(index % 2) * 100}
                    className="flex h-full items-start gap-3.5 rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-choco-700 to-berry-600 text-cream shadow-[var(--shadow-glow)]">
                      <Icon className="size-5" strokeWidth={2.2} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[1.05rem] font-semibold text-choco-950">
                        {point.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-choco-800/70">
                        {point.text}
                      </span>
                    </span>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal
              delay={140}
              className="mt-5 flex flex-col items-start gap-4 rounded-3xl border border-white/70 bg-white/70 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-berry-200/70 text-choco-800">
                  <Clock className="size-5" strokeWidth={2.2} />
                </span>
                <p className="text-sm leading-snug font-semibold text-choco-900">
                  {t.delivery.ordersTitle}
                  <span className="block font-medium text-choco-800/65">
                    {t.delivery.ordersText}
                  </span>
                </p>
              </div>
              <Button
                as="a"
                href={CONTACTS[0].href}
                variant="berry"
                className="w-full sm:w-auto"
              >
                {t.delivery.askTime}
              </Button>
            </Reveal>
          </Reveal>

          <Reveal direction="right" delay={120} className="order-1 lg:order-2">
            <div className="relative h-full min-h-[19rem] overflow-hidden rounded-[2rem] border border-white/70 shadow-[var(--shadow-lift)] sm:min-h-[22rem]">
              <ImagePlaceholder className="absolute inset-0 size-full" tone="dark" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-choco-950/88 via-choco-950/35 to-transparent"
              />

              <div className="relative flex h-full min-h-[19rem] flex-col justify-end gap-4 p-6 sm:min-h-[22rem] sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {districts.map((district) => (
                    <span
                      key={district}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-bold text-cream backdrop-blur-md"
                    >
                      <MapPin className="size-3.5" strokeWidth={2.4} />
                      {district}
                    </span>
                  ))}
                </div>

                <p className="font-display text-2xl leading-tight font-semibold text-balance text-cream sm:text-3xl">
                  {t.delivery.cardTitle}
                </p>

                <div className="mt-1 flex items-center gap-3">
                  <BrandLogo size="sm" className="!size-10 !rounded-full ring-2 ring-white/50" />
                  <span className="text-xs font-semibold text-cream/70">
                    {t.delivery.cardNote}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}