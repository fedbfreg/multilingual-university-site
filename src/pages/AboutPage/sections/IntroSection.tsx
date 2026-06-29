import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { MOCK_ABOUT } from '@/data/about';
import { useTranslation } from '@/i18n/I18nContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function IntroSection() {
  const { t } = useTranslation();
  const { introduction, positioning, features, achievements } = MOCK_ABOUT;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* 左侧：图片 */}
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/spark/app/app_179273k2er2/runtime/api/v1/storage/object/bucket_aadkidgowlejq_static/static%2Faadkh6sggq4eq_ve_miaoda"
                alt="CMSC 校园航拍全景"
                className="w-full h-full object-cover"
              />
            </div>
            {/* 装饰色块 */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-primary/10 -z-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-secondary/30 -z-10" />
          </motion.div>

          {/* 右侧：文字内容 */}
          <div className="space-y-8">
            {/* 简介 */}
            <motion.div variants={itemVariants}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                {t('about.introTitle')}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t('brand.fullName')}
                <span className="text-primary ml-2 text-lg font-semibold">{t('brand.shortName')}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {introduction}
              </p>
            </motion.div>

            {/* 定位 */}
            <motion.div variants={itemVariants} className="p-5 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">{t('about.positioningLabel')}：</span>
                {positioning}
              </p>
            </motion.div>

            {/* 特色 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-foreground mb-3">{t('about.introFeatures')}</h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border/60 text-sm font-medium text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 成就 */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-foreground mb-3">{t('about.introAchievements')}</h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border/60"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
