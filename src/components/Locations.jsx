import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import useLang from "../i18n/useLang";
import { LOCATIONS } from "../data/brand";

export default function Locations() {
  const { t } = useLang();

  return (
    <section
      id="locations"
      className="relative scroll-mt-24 overflow-hidden bg-cream-2 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-20 size-72 rounded-full bg-choco-600/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-20 size-72 rounded-full bg-berry-400/25 blur-3xl"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow={t.locations.eyebrow}
          title={t.locations.title}
          subtitle={t.locations.subtitle}
        />

        <ul className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:gap-8">
          {LOCATIONS.map((branch, index) => (
            <Reveal
              as="li"
              key={branch.id}
              delay={index * 120}
              className="flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-choco-700 to-berry-600 text-cream shadow-[var(--shadow-glow)]">
                  <MapPin className="size-6" strokeWidth={2.2} />
                </span>
                <div className="min-w-0">
                  <span className="block text-[0.7rem] font-bold tracking-[0.14em] text-choco-800/50 uppercase">
                    {t.locations.branchLabel}
                  </span>
                  <span className="block font-display text-xl font-semibold text-choco-950 sm:text-2xl">
                    {branch.name}
                  </span>
                </div>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                <li className="flex items-center gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-berry-200/60 text-choco-800">
                    <Phone className="size-4.5" strokeWidth={2.2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-bold tracking-[0.14em] text-choco-800/50 uppercase">
                      {t.locations.phoneLabel}
                    </span>
                    <a
                      href={branch.phoneHref}
                      className="block text-[1.02rem] font-bold text-choco-950 underline-offset-4 transition-colors duration-200 hover:text-berry-700 hover:underline"
                    >
                      {branch.phone}
                    </a>
                  </span>
                </li>

                <li className="flex items-center gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-berry-200/60 text-choco-800">
                    <Clock className="size-4.5" strokeWidth={2.2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-bold tracking-[0.14em] text-choco-800/50 uppercase">
                      {t.locations.hoursLabel}
                    </span>
                    <span className="block text-[1.02rem] font-bold text-choco-950">
                      {branch.hours}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  as="a"
                  href={branch.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1"
                >
                  <Navigation className="size-4.5" strokeWidth={2.2} />
                  {t.locations.mapsBtn}
                </Button>
                <Button
                  as="a"
                  href={branch.phoneHref}
                  variant="outline"
                  className="w-full sm:flex-1"
                >
                  <Phone className="size-4.5" strokeWidth={2.2} />
                  {t.locations.callBtn}
                </Button>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
