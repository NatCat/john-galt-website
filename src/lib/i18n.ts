import type { Locale } from './translations';
import { getCollection } from 'astro:content';

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

/**
 * Get a page entry by slug and locale
 */
export async function getPageBySlugAndLocale(
  collection: 'pages' | 'posts',
  slug: string,
  locale: Locale
) {
  const entries = await getCollection(collection, ({ data }) => {
    return data.lang === locale && !data.draft;
  });
  return entries.find((entry) => entry.slug === slug) || null;
}

