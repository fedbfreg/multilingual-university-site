import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/I18nContext';
import IntroSection from './sections/IntroSection';
import HistorySection from './sections/HistorySection';
import MissionSection from './sections/MissionSection';
import LeadersSection from './sections/LeadersSection';
import CampusGallerySection from './sections/CampusGallerySection';

export default function AboutPage() {
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
                {t('about.pageTitle')}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('about.pageDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 学校简介 */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <IntroSection />
          </div>
        </section>

        {/* 历史沿革 */}
        <section className="w-full py-12 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <HistorySection />
          </div>
        </section>

        {/* 办学理念 */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <MissionSection />
          </div>
        </section>

        {/* 领导团队 */}
        <section className="w-full py-12 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <LeadersSection />
          </div>
        </section>

        {/* 校园风光 */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <CampusGallerySection />
          </div>
        </section>
      </main>
    </div>
  );
}
