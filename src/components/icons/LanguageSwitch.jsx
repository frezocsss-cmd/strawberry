import { memo } from "react";
import useLang from "../../i18n/useLang";

const OPTIONS = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
];

function LanguageSwitch({ className = "" }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`flex items-center rounded-full border border-choco-700/15 bg-white/80 p-0.5 ${className}`}
    >
      {OPTIONS.map((option) => {
        const active = option.code === lang;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={active}
            lang={option.code}
            className={`rounded-full px-2.5 py-1 text-[0.68rem] font-bold tracking-wide transition-all duration-200 ${
              active
                ? "bg-choco-950 text-cream shadow-[0_6px_16px_-8px_rgba(42,23,16,0.9)]"
                : "text-choco-800/65 hover:text-berry-700"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default memo(LanguageSwitch);