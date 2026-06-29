import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Image } from '@/components/ui/image'
import { useNews, type INews } from '@/data/news'
import { useTranslation } from '@/i18n/I18nContext'

interface RelatedNewsSectionProps {
  currentNewsId: string
}

const CATEGORY_KEY_MAP: Record<string, string> = {
  '学校新闻': 'school',
  'School News': 'school',
  'Университет жаңылыктары': 'school',
  'Новости университета': 'school',
  '学术讲座': 'lecture',
  'Academic Lecture': 'lecture',
  'Академиялык лекция': 'lecture',
  'Академическая лекция': 'lecture',
  '重要活动': 'event',
  'Important Event': 'event',
  'Маанилүү иш-чара': 'event',
  'Важное мероприятие': 'event',
}

const CATEGORY_TRANSLATION_KEYS: Record<string, string> = {
  school: 'news.categorySchool',
  lecture: 'news.categoryLecture',
  event: 'news.categoryEvent',
}

const CATEGORY_COLORS: Record<string, string> = {
  school: 'bg-info/10 text-info border-info/20',
  lecture: 'bg-primary/10 text-primary border-primary/20',
  event: 'bg-warning/10 text-warning border-warning/20',
}

export default function RelatedNewsSection({ currentNewsId }: RelatedNewsSectionProps) {
  const { t } = useTranslation()
  const allNews = useNews()
  const related = allNews.filter((n) => n.id !== currentNewsId).slice(0, 3)

  if (related.length === 0) return null

  const getCategoryLabel = (category: string) => {
    const catKey = CATEGORY_KEY_MAP[category] || 'school'
    return t(CATEGORY_TRANSLATION_KEYS[catKey] ?? 'news.categorySchool')
  }

  const getCategoryColor = (category: string) => {
    const catKey = CATEGORY_KEY_MAP[category] || 'school'
    return CATEGORY_COLORS[catKey] || CATEGORY_COLORS.school
  }

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">{t('news.relatedTitle')}</h2>
          <Link
            to="/news"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {t('common.viewAll')}
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/news/${item.id}`} className="group block">
                <Card className="overflow-hidden h-full transition-shadow hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`text-xs font-normal ${getCategoryColor(item.category)}`}
                      >
                        {getCategoryLabel(item.category)}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
