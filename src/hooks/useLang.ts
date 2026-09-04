import { createContext, createElement, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Lang } from '../types';
import { translations, type TranslationKey } from '../data/i18n';

type TranslationParams = Record<string, string | number>;

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey, params?: TranslationParams) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

const DEFAULT_LANG: Lang = 'en';

function interpolate(text: string, params?: TranslationParams) {
  if (!params) return text;
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, String(value)),
    text,
  );
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      t: (key, params) => interpolate(translations[lang][key], params),
    }),
    [lang],
  );

  return createElement(LangContext.Provider, { value }, children);
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return ctx;
}
