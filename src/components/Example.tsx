'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ExampleComponent() {
  const t = useTranslations('Navigation');

  return (
    <nav>
      <Link href="/">{t('home')}</Link>
      <Link href="/about">{t('about')}</Link>
      <Link href="/contact">{t('contact')}</Link>
    </nav>
  );
}