import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { translations, DEFAULT_LANGUAGE, type Language, type TranslationKey } from './translations';

const STORAGE_KEY = 'cmsc_language';

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'zh' || stored === 'ky' || stored === 'ru' || stored === 'en') {
      return stored;
    }
  } catch {
    // ignore
  }
  return DEFAULT_LANGUAGE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang === 'ky' ? 'ky' : lang === 'ru' ? 'ru' : lang === 'en' ? 'en' : 'zh-CN';
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'ky' ? 'ky' : language === 'ru' ? 'ru' : language === 'en' ? 'en' : 'zh-CN';
  }, [language]);

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>): string => {
      const dict = translations[language] as Record<string, string> | undefined;
      let text = dict?.[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          text = text.replace(`{${k}}`, String(v));
        });
      }
      return text;
    },
    [language],
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return ctx;
}
