import { motion } from 'framer-motion'
import { Image } from '@/components/ui/image'
import { useTranslation } from '@/i18n/I18nContext'
import type { IDepartment } from '@/data/departments'

interface DeptBannerSectionProps {
  department: IDepartment
}

export default function DeptBannerSection({ department }: DeptBannerSectionProps) {
  const { t } = useTranslation()
  const { name, description, imageUrl } = department

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/70 py-24 md:py-32">
      {/* 背景图片叠加 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>
      {/* 装饰网格线 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* 内容 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 面包屑提示 */}
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary-foreground/60">
            {t('nav.departments')}
          </p>
          {/* 学院名称 */}
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {name}
          </h1>
          {/* 标语 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl"
          >
            {description}
          </motion.p>
          {/* 底部装饰线 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 h-0.5 w-20 rounded-full bg-primary-foreground/30"
          />
        </motion.div>
      </div>
    </section>
  )
}
