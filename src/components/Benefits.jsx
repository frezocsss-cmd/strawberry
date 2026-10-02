import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";
import useLang from "../i18n/useLang";


export default function Benefits() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-cream via-cream-2 to-cream py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 size-80 -translate-x-1/2 rounded-full bg-berry-200/60 blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/70 shadow-[var(--shadow-lift)]">
                <ImagePlaceholder className="size-full" />
              </div>
              <div className="glass-panel absolute -right-3 -bottom-6 rounded-2xl border border-white/70 px-4 py-3 shadow-[var(--shadow-soft)] sm:-right-8">
                <p className="font-display text-2xl leading-none font-bold text-choco-950">
                  {t.benefits.statValue}
                </p>
                <p className="mt-1 text-xs font-semibold text-choco-800/65">
                  {t.benefits.statLabel}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow={t.benefits.eyebrow}
              title={t.benefits.title}
              subtitle={t.benefits.subtitle}
            />

            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {t.benefits.items.map((benefit, index) => (
                <Reveal
                  as="li"
                  key={benefit.id}
                  delay={(index % 2) * 110}
                  className="group h-full rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-berry-500/25 hover:shadow-[var(--shadow-lift)] sm:p-6"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-berry-200/80 to-blush text-2xl transition-transform duration-300 group-hover:scale-110 sm:size-14">
                    {benefit.emoji}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-choco-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-pretty text-choco-800/70">
                    {benefit.text}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}