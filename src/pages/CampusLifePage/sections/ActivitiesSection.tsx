import { useState, memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { useActivities } from '@/data/campus'
import { useTranslation } from '@/i18n/I18nContext'

const CATEGORY_KEY_MAP: Record<string, string> = {
  '科技竞赛': 'tech',
  'Tech Competition': 'tech',
  'Техникалык жарыш': 'tech',
  'Техническое соревнование': 'tech',
  '体育赛事': 'sports',
  'Sports Event': 'sports',
  'Спорт чарасы': 'sports',
  'Спортивное мероприятие': 'sports',
  '编程竞赛': 'coding',
  'Coding Competition': 'coding',
  'Программалоо жарышы': 'coding',
  'Соревнование по программированию': 'coding',
  '学术讲座': 'lecture',
  'Academic Lecture': 'lecture',
  'Академиялык лекция': 'lecture',
  'Академическая лекция': 'lecture',
  '技术实践': 'practice',
  'Technical Practice': 'practice',
  'Техникалык практика': 'practice',
  'Техническая практика': 'practice',
  '安全竞赛': 'security',
  'Security Competition': 'security',
  'Безопсуздук жарышы': 'security',
  'Соревнование по безопасности': 'security',
}

const CATEGORY_TRANSLATION_KEYS: Record<string, string> = {
  tech: 'campus.categoryTech',
  sports: 'campus.categorySports',
  coding: 'campus.categoryCoding',
  lecture: 'campus.categoryLecture',
  practice: 'campus.categoryPractice',
  security: 'campus.categorySecurity',
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default memo(function ActivitiesSection() {
  const { t } = useTranslation()
  const activities = useActivities()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = useMemo(
    () => [
      { value: 'all', label: t('common.all') },
      { value: 'tech', label: t('campus.categoryTech') },
      { value: 'sports', label: t('campus.categorySports') },
      { value: 'coding', label: t('campus.categoryCoding') },
      { value: 'lecture', label: t('campus.categoryLecture') },
      { value: 'practice', label: t('campus.categoryPractice') },
      { value: 'security', label: t('campus.categorySecurity') },
    ],
    [t],
  )

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return activities
    return activities.filter((a) => {
      const catKey = CATEGORY_KEY_MAP[a.category] || ''
      return catKey === activeCategory
    })
  }, [activities, activeCategory])

  const getCategoryLabel = (category: string) => {
    const catKey = CATEGORY_KEY_MAP[category] || 'tech'
    return t(CATEGORY_TRANSLATION_KEYS[catKey] ?? 'campus.categoryTech')
  }

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        {/* 标题区 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('campus.activitiesTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {t('campus.activitiesDesc')}
          </p>
        </motion.div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat.value)}
              className="rounded-full text-xs md:text-sm"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* 活动卡片网格 */}
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            {t('campus.noActivities')}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((activity, i) => (
              <motion.div
                key={activity.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <Card className="overflow-hidden h-full flex flex-col group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="!absolute top-3 left-3 z-20 bg-primary/90 text-primary-foreground text-xs">
                      {getCategoryLabel(activity.category)}
                    </Badge>
                  </div>
                  <CardContent className="flex flex-col flex-1 p-5">
                    <h3 className="text-lg font-semibold text-foreground leading-snug line-clamp-2">
                      {activity.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {activity.date}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {activity.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-4 self-start text-primary hover:text-primary group/btn"
                    >
                      {t('common.learnMore')}
                      <ArrowRight className="size-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
})
