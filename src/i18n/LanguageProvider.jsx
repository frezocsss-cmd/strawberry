import { useCallback, useEffect, useMemo, useState } from "react";
import {
  DICTIONARIES,
  DEFAULT_LANG,
  LANGS,
  LanguageContext,
  STORAGE_KEY,
  detectLang,
} from "./context";

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLang);

  const setLang = useCallback((next) => {
    setLangState(LANGS.includes(next) ? next : DEFAULT_LANG);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore write failures — language still switches for this session
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = DICTIONARIES[lang].htmlLang;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: DICTIONARIES[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}