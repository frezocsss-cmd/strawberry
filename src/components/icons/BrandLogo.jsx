import { BRAND } from "../../data/brand";

export default function BrandLogo({ size = "md", className = "" }) {
  const dims = {
    sm: "size-9 sm:size-10",
    md: "size-11 sm:size-12",
    lg: "size-14 sm:size-16",
  }[size];

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-2xl bg-linear-to-br from-choco-700 to-berry-600 shadow-[var(--shadow-glow)] ring-1 ring-white/40 ${dims} ${className}`}
    >
      <img
        src={BRAND.logo}
        alt=""
        width="640"
        height="640"
        decoding="async"
        className="size-full object-cover"
      />
    </span>
  );
}