import { motion } from 'framer-motion';
import { MOCK_MISSIONS } from '@/data/about';
import { useTranslation } from '@/i18n/I18nContext';

const TYPE_KEY_MAP: Record<string, string> = {
  mission: 'about.missionLabel',
  vision: 'about.visionLabel',
  value: 'about.valueLabel',
};

const TYPE_CONTENT_MAP: Record<string, string> = {
  mission: 'about.missionContent',
  vision: 'about.visionContent',
  value: 'about.valueContent',
};

const iconMap: Record<string, string> = {
  '🎯': 'text-3xl',
  '🔭': 'text-3xl',
  '💎': 'text-3xl',
};

export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('about.missionTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            {t('about.valueContent')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_MISSIONS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-xl border border-border/50 bg-card p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                <span className={iconMap[item.icon] ?? 'text-3xl'}>{item.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t(TYPE_KEY_MAP[item.type] ?? 'about.missionLabel')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(TYPE_CONTENT_MAP[item.type] ?? 'about.missionContent')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
