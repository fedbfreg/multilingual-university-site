import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/I18nContext';
import ContactInfoSection from './sections/ContactInfoSection';
import MapSection from './sections/MapSection';
import ContactFormSection from './sections/ContactFormSection';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-12 md:space-y-16">
        {/* Hero Banner */}
        <section className="w-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {t('contact.pageTitle')}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('contact.pageDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 联系信息 */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ContactInfoSection />
          </div>
        </section>

        {/* 地图 + 留言表单 左右分栏 */}
        <section className="w-full py-12 md:py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <MapSection />
              </div>
              <div className="lg:col-span-3">
                <ContactFormSection />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
