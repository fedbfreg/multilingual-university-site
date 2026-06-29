import { memo } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { GraduationCap, Building, Phone } from 'lucide-react';
import { useTranslation } from '@/i18n/I18nContext';

export default memo(function QuickLinksSection() {
  const { t } = useTranslation();

  const QUICK_LINKS = [
    {
      label: t('home.quickLinkAdmissions'),
      description: t('home.quickLinkAdmissionsDesc'),
      to: '/admissions',
      icon: GraduationCap,
    },
    {
      label: t('home.quickLinkDepartments'),
      description: t('home.quickLinkDepartmentsDesc'),
      to: '/departments',
      icon: Building,
    },
    {
      label: t('home.quickLinkContact'),
      description: t('home.quickLinkContactDesc'),
      to: '/contact',
      icon: Phone,
    },
  ];

  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t('home.quickLinksTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            {t('home.quickLinksDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {QUICK_LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <NavLink
                  to={link.to}
                  className="group flex flex-col items-center gap-4 rounded-xl border border-border/60 bg-card p-8 text-center transition-shadow hover:shadow-md"
                >
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {link.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
