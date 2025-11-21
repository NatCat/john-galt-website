/**
 * Language configuration
 * Languages are managed through the CMS admin panel
 * Fallback to all languages if CMS file doesn't exist
 */
import type { Locale } from './translations';
import { languages } from './translations';

export interface LanguageConfig {
  code: Locale;
  enabled: boolean;
}

// Default language configuration (all enabled)
const defaultLanguages: LanguageConfig[] = [
  { code: 'en', enabled: true },
  { code: 'ru', enabled: true },
  { code: 'sr', enabled: true },
  { code: 'hy', enabled: true },
  { code: 'fr', enabled: true },
];

/**
 * Load language configuration from JSON file
 * Uses import.meta.glob with eager loading to import JSON at build time
 */
function loadLanguageConfig(): LanguageConfig[] {
  try {
    const langModules = import.meta.glob('../content/languages.json', {
      eager: true,
      import: 'default'
    });

    const langPath = Object.keys(langModules)[0];
    if (langPath && langModules[langPath]) {
      const langData = langModules[langPath] as { languages?: LanguageConfig[] };
      if (langData?.languages && Array.isArray(langData.languages)) {
        return langData.languages;
      }
    }
  } catch (error) {
    // File doesn't exist or has errors, use defaults
    // This is expected on first run before the CMS creates the file
  }
  return defaultLanguages;
}

// Load language configuration at module initialization
const languageConfig = loadLanguageConfig();

/**
 * Get enabled languages
 */
export function getEnabledLanguages(): LanguageConfig[] {
  return languageConfig.filter(lang => lang.enabled);
}

/**
 * Get enabled language codes
 */
export function getEnabledLanguageCodes(): Locale[] {
  return languageConfig.filter(lang => lang.enabled).map(lang => lang.code);
}

/**
 * Check if a language is enabled
 */
export function isLanguageEnabled(locale: Locale): boolean {
  const config = languageConfig.find(lang => lang.code === locale);
  return config ? config.enabled : false;
}

/**
 * Get language info for enabled languages only
 */
export function getEnabledLanguagesInfo(): Record<Locale, { flag: string; name: string; nativeName: string }> {
  const enabled = getEnabledLanguageCodes();
  const result: Partial<Record<Locale, { flag: string; name: string; nativeName: string }>> = {};
  
  enabled.forEach(code => {
    if (languages[code]) {
      result[code] = languages[code];
    }
  });
  
  return result as Record<Locale, { flag: string; name: string; nativeName: string }>;
}

