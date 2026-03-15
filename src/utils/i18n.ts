import enTranslations from '../i18n/en.json';
import esTranslations from '../i18n/es.json';

export const supportedLocales = ['en', 'es'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

const translations = {
  en: enTranslations,
  es: esTranslations,
} as const;

function isSupportedLocale(locale: string | undefined): locale is SupportedLocale {
  return locale === 'en' || locale === 'es';
}

export function normalizeLocale(locale: string | undefined): SupportedLocale {
  return isSupportedLocale(locale) ? locale : 'en';
}

function getNestedValue(obj: unknown, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  return typeof current === 'string' ? current : undefined;
}

export function t(key: string, lang: string | undefined): string {
  const currentLang = normalizeLocale(lang);
  const value = getNestedValue(translations[currentLang], key);

  if (value !== undefined) {
    return value;
  }

  const fallbackValue = getNestedValue(translations.en, key);
  if (fallbackValue !== undefined) {
    return fallbackValue;
  }

  console.warn(`Translation key "${key}" not found for language "${currentLang}". Falling back to key.`);
  return key;
}

export function getTranslations(lang: string | undefined) {
  return translations[normalizeLocale(lang)];
}
