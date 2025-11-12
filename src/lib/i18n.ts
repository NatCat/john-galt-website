import type { Locale } from './translations';

const supportedLocales: Locale[] = ['en', 'ru', 'sr', 'hy', 'fr'];

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  // Check if first segment is a locale
  if (segments.length > 0 && supportedLocales.includes(segments[0] as Locale)) {
    return segments[0] as Locale;
  }
  
  // Default to English
  return 'en';
}

