export type Locale = 'en' | 'ru' | 'sr' | 'hy' | 'fr';

export const languages: Record<Locale, { flag: string; name: string; nativeName: string }> = {
  en: { flag: '🇺🇸', name: 'English', nativeName: 'English' },
  ru: { flag: '🇷🇺', name: 'Russian', nativeName: 'Русский' },
  sr: { flag: '🇷🇸', name: 'Serbian', nativeName: 'Српски' },
  hy: { flag: '🇦🇲', name: 'Armenian', nativeName: 'Հայերեն' },
  fr: { flag: '🇫🇷', name: 'French', nativeName: 'Français' },
};

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    solutions: 'Solutions',
    equipment: 'Equipment',
    portfolio: 'Portfolio',
    representatives: 'Representatives',
    papers: 'Papers',
    support: 'Support',
    contacts: 'Contacts',
    login: 'Login',
  },
  ru: {
    home: 'Главная',
    about: 'О нас',
    solutions: 'Решения',
    equipment: 'Оборудование',
    portfolio: 'Портфолио',
    representatives: 'Представители',
    papers: 'Публикации',
    support: 'Поддержка',
    contacts: 'Контакты',
    login: 'Вход',
  },
  sr: {
    home: 'Почетна',
    about: 'О нама',
    solutions: 'Решења',
    equipment: 'Опрема',
    portfolio: 'Портфолио',
    representatives: 'Представници',
    papers: 'Публикације',
    support: 'Подршка',
    contacts: 'Контакти',
    login: 'Пријава',
  },
  hy: {
    home: 'Գլխավոր',
    about: 'Մեր մասին',
    solutions: 'Լուծումներ',
    equipment: 'Սարքավորումներ',
    portfolio: 'Պորտֆոլիո',
    representatives: 'Ներկայացուցիչներ',
    papers: 'Հրապարակումներ',
    support: 'Աջակցություն',
    contacts: 'Կոնտակտներ',
    login: 'Մուտք',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    solutions: 'Solutions',
    equipment: 'Équipement',
    portfolio: 'Portfolio',
    representatives: 'Représentants',
    papers: 'Publications',
    support: 'Support',
    contacts: 'Contacts',
    login: 'Connexion',
  },
};

export function getTranslation(locale: Locale, key: string): string {
  return translations[locale]?.[key] || translations.en[key] || key;
}

export function getLocalizedPath(locale: Locale, path: string = ''): string {
  const base = import.meta.env.BASE_URL;
  if (locale === 'en') {
    return `${base}${path}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
  }
  const cleanPath = path.replace(/^\//, '');
  return `${base}${locale}/${cleanPath}`.replace(/\/+/g, '/').replace(/\/$/, '') || `${base}${locale}`;
}

