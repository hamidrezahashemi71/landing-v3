import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'es', 'fr'] as const;
const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Handle undefined locale by falling back to default
  const validatedLocale = locale || defaultLocale;

  // Validate that the locale is supported
  if (!locales.includes(validatedLocale as any)) {
    notFound();
  }

  return {
    locale: validatedLocale,
    messages: (await import(`./locales/${validatedLocale}.json`)).default
  };
});