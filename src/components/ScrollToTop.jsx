import { ArrowUp } from "lucide-react";
import useScrolled from "../hooks/useScrolled";
import useLang from "../i18n/useLang";

export default function ScrollToTop() {
  const visible = useScrolled(600);
  const { t } = useLang();

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.common.scrollTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed right-4 bottom-4 z-40 grid size-11 place-items-center rounded-full bg-choco-950 text-cream shadow-[0_16px_36px_-14px_rgba(42,23,16,0.8)] transition-all duration-300 hover:bg-berry-600 sm:right-6 sm:bottom-6 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-4.5" strokeWidth={2.6} />
    </button>
  );
}