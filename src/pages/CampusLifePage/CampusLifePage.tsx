import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/I18nContext';
import ActivitiesSection from './sections/ActivitiesSection';
import ClubsSection from './sections/ClubsSection';
import FacilitiesSection from './sections/FacilitiesSection';
import AccommodationSection from './sections/AccommodationSection';

export default function CampusLifePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-16 md:space-y-20">
        {/* Hero Banner */}
        <section className="w-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {t('campus.pageTitle')}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('campus.pageDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 学生活动 */}
        <section className="w-full py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ActivitiesSection />
          </div>
        </section>

        {/* 社团组织 */}
        <section className="w-full py-16 md:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ClubsSection />
          </div>
        </section>

        {/* 校园设施 */}
        <section className="w-full py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <FacilitiesSection />
          </div>
        </section>

        {/* 住宿餐饮 */}
        <section className="w-full py-16 md:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <AccommodationSection />
          </div>
        </section>
      </main>
    </div>
  );
}
