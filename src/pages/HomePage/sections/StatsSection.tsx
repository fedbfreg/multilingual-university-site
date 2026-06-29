import { useState, useEffect, useRef, memo } from 'react'
import { motion } from 'framer-motion'
import { useStatistics } from '@/data/home'
import { useTranslation } from '@/i18n/I18nContext'

function useCountUp(end: number, duration: number = 2000, startOnView: boolean) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true)
      return
    }
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!hasStarted) return
    let startTimestamp: number | null = null
    let rafId: number
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const elapsed = timestamp - startTimestamp
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      }
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [hasStarted, end, duration])

  return { count, ref }
}

const STAT_LABEL_KEYS: Record<string, string> = {
  '建校年份': 'home.statsFounded',
  '院系数量': 'home.statsDepartments',
  '在校学生': 'home.statsStudents',
  '合作企业': 'home.statsPartners',
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const { count, ref } = useCountUp(stat.value, 2000, true)
  const { t } = useTranslation()
  const labelKey = STAT_LABEL_KEYS[stat.label] ?? stat.label

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2 p-6"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-black tabular-nums tracking-tight text-primary">
          {count}
        </span>
        <span className="text-lg md:text-xl font-medium text-muted-foreground">
          {stat.suffix}
        </span>
      </div>
      <span className="text-sm md:text-base text-muted-foreground">
        {t(labelKey as never)}
      </span>
    </motion.div>
  )
}

export default memo(function StatsSection() {
  const { t } = useTranslation()
  const statistics = useStatistics()

  return (
    <section className="w-full bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t('home.statsTitle')}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {t('home.statsDesc')}
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})
