import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/I18nContext';
import AdmissionsTabsSection from './sections/AdmissionsTabsSection';

export default function AdmissionsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-12 md:space-y-16">
        {/* Hero Banner */}
        <section className="w-full bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                {t('admissions.pageTitle')}
              </h1>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                {t('admissions.pageDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tabs 内容区 */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <AdmissionsTabsSection />
          </div>
        </section>
      </main>
    </div>
  );
}
