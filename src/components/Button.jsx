const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold sm:text-[0.95rem] transition-all duration-300 will-change-transform active:scale-[0.97]";

const variants = {
  primary:
    "bg-linear-to-br from-choco-700 to-berry-600 text-cream shadow-[0_14px_32px_-12px_rgba(122,63,36,0.75)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-14px_rgba(122,63,36,0.8)]",
  berry:
    "bg-berry-600 text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:bg-berry-700",
  outline:
    "border border-choco-700/25 bg-white/70 text-choco-800 backdrop-blur-sm hover:-translate-y-0.5 hover:border-berry-500/50 hover:bg-white hover:text-choco-950",
  ghost:
    "text-choco-800 hover:bg-choco-700/8 hover:text-berry-700",
  light:
    "bg-white/15 text-cream border border-white/25 backdrop-blur-sm hover:bg-white/25",
};

const sizes = {
  md: "px-5 py-3 sm:px-6",
  lg: "px-6 py-3.5 sm:px-8 sm:py-4 text-[0.95rem] sm:text-base",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}