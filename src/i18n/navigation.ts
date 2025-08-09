import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es', 'fr'] as const;

// Define localized pathnames if needed
export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    es: '/acerca-de',
    fr: '/a-propos'
  },
  '/contact': {
    en: '/contact',
    es: '/contacto',
    fr: '/contact'
  }
} as const;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales,
    pathnames
  });