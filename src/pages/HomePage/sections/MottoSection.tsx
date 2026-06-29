import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/I18nContext';

export default function MottoSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-3xl md:text-5xl font-bold tracking-wide text-foreground">
            {t('brand.motto')}
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            {t('brand.mottoDesc')}
          </motion.p>
        </motion.blockquote>
      </div>
    </section>
  );
}
