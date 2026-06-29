import { useState, useEffect, useCallback, memo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image } from '@/components/ui/image'
import { Button } from '@/components/ui/button'
import { useHeroSlides } from '@/data/home'
import { useTranslation } from '@/i18n/I18nContext'

const AUTO_PLAY_INTERVAL = 5000

export default memo(function HeroSection() {
  const { t } = useTranslation()
  const slides = useHeroSlides()
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [slides.length])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [next, isPaused])

  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 轮播图片 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].imageUrl}
            alt={t(`home.heroTitle${slides[current].id}` as any)}
            className="h-full w-full object-cover"
          />
          {/* 暗色叠加层 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* 文字叠加层 */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slides[current].id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                {t(`home.heroTitle${slides[current].id}` as any)}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white max-w-2xl drop-shadow-lg">
                {t(`home.heroSubtitle${slides[current].id}` as any)}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 左右箭头 */}
      <Button
        size="icon"
        variant="ghost"
        className="!absolute left-4 top-1/2 z-20 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hidden md:inline-flex"
        onClick={prev}
        aria-label={t('common.previous')}
      >
        <ChevronLeft className="size-6" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="!absolute right-4 top-1/2 z-20 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hidden md:inline-flex"
        onClick={next}
        aria-label={t('common.next')}
      >
        <ChevronRight className="size-6" />
      </Button>

      {/* 底部指示器 */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={t('home.heroTitle' + slide.id as any)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
})
