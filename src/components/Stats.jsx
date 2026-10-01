import Reveal from "./Reveal";
import useLang from "../i18n/useLang";

export default function Stats() {
  const { t } = useLang();

  return (
    <section className="relative bg-cream pb-4">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {t.stats.map((stat, index) => (
            <Reveal
              key={stat.id}
              delay={index * 90}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-5 text-center shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute -top-6 -right-6 size-20 rounded-full bg-berry-200/50 blur-xl transition-transform duration-500 group-hover:scale-125"
              />
              <span className="relative block text-2xl sm:text-3xl">{stat.emoji}</span>
              <span className="relative mt-2.5 block font-display text-2xl font-bold tracking-tight text-choco-950 sm:text-[2rem]">
                {stat.value}
              </span>
              <span className="relative mt-1 block text-[0.8rem] leading-snug font-semibold text-choco-800/65 sm:text-sm">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}