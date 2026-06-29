import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useNews } from '@/data/news'
import { useTranslation } from '@/i18n/I18nContext'

const CATEGORY_KEY_MAP: Record<string, string> = {
  '学校新闻': 'news.categorySchool',
  '学术讲座': 'news.categoryLecture',
  '重要活动': 'news.categoryEvent',
}

function NewsSection() {
  const { t } = useTranslation()
  const allNews = useNews()
  const latestNews = useMemo(() => allNews.slice(0, 4), [allNews])

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
              News & Events
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('home.newsSectionTitle')}
            </h2>
          </div>
          <Button variant="ghost" asChild className="self-start md:self-auto">
            <Link to="/news" className="flex items-center gap-1.5">
              {t('home.newsViewAll')}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNews.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/news/${item.id}`}
                className="group block rounded-xl border border-border/60 bg-card hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" className="text-xs">
                      {t(CATEGORY_KEY_MAP[item.category] ?? 'news.categorySchool')}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 space-y-2.5">
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
                    <Calendar className="size-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(NewsSection)
