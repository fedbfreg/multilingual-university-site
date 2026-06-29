import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '@/i18n/I18nContext';

const QUICK_LINK_KEYS = [
  { key: 'nav.about', path: '/about' },
  { key: 'nav.departments', path: '/departments' },
  { key: 'nav.faculty', path: '/faculty' },
  { key: 'nav.admissions', path: '/admissions' },
  { key: 'nav.campusLife', path: '/campus-life' },
  { key: 'nav.news', path: '/news' },
  { key: 'nav.contact', path: '/contact' },
];

const SOCIAL_LINKS = [
  { key: 'social.discord', icon: '💬', href: 'https://discord.gg/cmsc' },
  { key: 'social.telegram', icon: '✈️', href: 'https://t.me/cmsc_official' },
  { key: 'social.twitter', icon: '🐦', href: 'https://twitter.com/cmsc_official' },
  { key: 'social.instagram', icon: '📷', href: 'https://instagram.com/cmsc_official' },
  { key: 'social.facebook', icon: '👥', href: 'https://facebook.com/cmsc.official' },
  { key: 'social.youtube', icon: '▶️', href: 'https://youtube.com/@cmsc_official' },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 学校信息 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                CMSC
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">
                  {t('brand.fullName')}
                </div>
                <div className="text-xs text-background/50 leading-tight">
                  {t('brand.englishName')}
                </div>
              </div>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-5">
              {t('brand.mottoDesc')}
            </p>
            <div className="space-y-2.5 text-sm text-background/60">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0 text-background/40" />
                <span>{t('contact.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-background/40" />
                <span>{t('contact.phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-background/40" />
                <span>{t('contact.email')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 shrink-0 text-background/40" />
                <span>{t('contact.workingHours')}</span>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background/90">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINK_KEYS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-background/60 hover:text-background/90 transition-colors duration-200"
                  >
                    {t(item.key as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background/90">
              {t('footer.followUs')}
            </h4>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.key}>
                  <a
                    href={social.href}
                    className="text-sm text-background/60 hover:text-background/90 transition-colors duration-200 inline-flex items-center gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-base">{social.icon}</span>
                    {t(social.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 版权信息 */}
          <div className="lg:col-span-1 flex flex-col justify-end">
            <div className="text-xs text-background/40 space-y-1">
              <p>© {new Date().getFullYear()} {t('brand.fullName')}</p>
              <p>{t('brand.englishName')}</p>
              <p>{t('footer.allRightsReserved')}</p>
              <p className="mt-3">{t('footer.icp')}</p>
              <p>{t('footer.psb')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
