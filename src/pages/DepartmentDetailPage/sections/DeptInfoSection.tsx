import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useTranslation } from '@/i18n/I18nContext'
import type { IDepartment } from '@/data/departments'

interface DeptInfoSectionProps {
  department: IDepartment
}

export default function DeptInfoSection({ department }: DeptInfoSectionProps) {
  const { t } = useTranslation()
  const { description, features, researchAreas } = department

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* 学院介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t('dept.introTitle')}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-4xl">
            {description}
          </p>
        </motion.div>

        {/* 学院特色 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t('dept.featuresTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 p-5 rounded-xl border border-border/60 bg-card/60 hover:border-primary/30 hover:bg-card transition-colors duration-200"
              >
                <div className="shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="size-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 研究方向 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t('dept.researchTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-xl border border-border/60 bg-card/60 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="size-2 rounded-full bg-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{area}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
