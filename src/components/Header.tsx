import { business } from '@/data/business';
import type { Locale } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ locale }: { locale: Locale }) {
  const content = business.content[locale];
  const logo = business.assets.logo;

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-3"
      style={{ backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-on-primary-dark)' }}
    >
      <a href={`/${locale}`} className="flex items-center gap-3">
        {logo && (
          <img
            src={logo}
            alt="Gegal Utama Sdn Bhd"
            className="h-10 w-10 rounded-full object-contain bg-white/10"
            width={40}
            height={40}
          />
        )}
        <span className="font-display text-lg font-bold">{content.meta.title}</span>
      </a>
      <LanguageSwitcher current={locale} />
    </header>
  );
}
