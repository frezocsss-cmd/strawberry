import { ImageIcon } from "lucide-react";

export default function ImagePlaceholder({ className = "", tone = "light" }) {
  const tones = {
    light: "from-cream-2 via-white to-berry-200/45 text-choco-700/25",
    dark: "from-choco-800 via-choco-900 to-choco-950 text-cream/15",
  }[tone];

  return (
    <div
      aria-hidden="true"
      className={`grid place-items-center bg-linear-to-br ${tones} ${className}`}
    >
      <ImageIcon className="size-8 sm:size-10" strokeWidth={1.4} />
    </div>
  );
}
