import { createContext } from "react";
import uz from "./uz";
import ru from "./ru";

export const DICTIONARIES = { uz, ru };
export const LANGS = ["uz", "ru"];
export const STORAGE_KEY = "chocoberry:lang";
export const DEFAULT_LANG = "uz";

export const LanguageContext = createContext(null);

export function detectLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    // localStorage unavailable (private mode) — fall through to navigator check
  }
  const nav = window.navigator?.language?.slice(0, 2).toLowerCase();
  return nav === "ru" ? "ru" : DEFAULT_LANG;
}