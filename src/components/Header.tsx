import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useTranslation } from '@/i18n/I18nContext';
import LanguageSwitcher from '@/i18n/LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const NAV_ITEMS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.departments'), path: '/departments' },
    { label: t('nav.faculty'), path: '/faculty' },
    { label: t('nav.admissions'), path: '/admissions' },
    { label: t('nav.campusLife'), path: '/campus-life' },
    { label: t('nav.news'), path: '/news' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <div className="size-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            CMSC
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold leading-tight text-foreground">
              {t('brand.shortName')}
            </div>
            <div className="text-[10px] text-muted-foreground leading-tight">
              {t('brand.fullName')}
            </div>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side: LanguageSwitcher + Mobile trigger */}
        <div className="flex items-center gap-1">
          <LanguageSwitcher />

          {/* Mobile Sheet Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label={t('nav.language')}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] pt-12">
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors ${
                          isActive
                            ? 'text-primary bg-primary/10'
                            : 'text-foreground hover:bg-accent'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
