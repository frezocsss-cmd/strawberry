import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <Reveal
          as="span"
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase ${
            light
              ? "bg-white/12 text-berry-200 ring-1 ring-white/20"
              : "bg-berry-200/60 text-berry-700 ring-1 ring-berry-500/20"
          }`}
        >
          {eyebrow}
        </Reveal>
      ) : null}

      <Reveal
        as="h2"
        delay={80}
        className={`mt-4 font-display text-[1.75rem] leading-[1.15] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-cream" : "text-choco-950"
        }`}
      >
        {title}
      </Reveal>

      {subtitle ? (
        <Reveal
          as="p"
          delay={160}
          className={`mt-4 text-[0.98rem] leading-relaxed text-pretty sm:text-lg ${
            light ? "text-cream/70" : "text-choco-800/70"
          }`}
        >
          {subtitle}
        </Reveal>
      ) : null}
    </div>
  );
}