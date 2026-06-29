import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Image } from '@/components/ui/image'
import { useNews, type INews } from '@/data/news'
import { useTranslation } from '@/i18n/I18nContext'

const PAGE_SIZE = 6

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

export default function NewsPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const allNews = useNews()
  const [keyword, setKeyword] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)

  const CATEGORIES = useMemo(
    () => [
      { value: 'all', label: t('common.all') },
      { value: 'school', label: t('news.categorySchool') },
      { value: 'lecture', label: t('news.categoryLecture') },
      { value: 'event', label: t('news.categoryEvent') },
    ],
    [t],
  )

  const filtered = useMemo(() => {
    let list = allNews
    if (activeCategory !== 'all') {
      list = list.filter((n) => {
        const catKey = CATEGORY_KEY_MAP[n.category] || ''
        return catKey === activeCategory
      })
    }
    if (keyword.trim()) {
      const kw = keyword.trim().toLowerCase()
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(kw) ||
          n.summary.toLowerCase().includes(kw),
      )
    }
    return list
  }, [activeCategory, keyword, allNews])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paged = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE
    return filtered.slice(start, start + PAGE_SIZE)
  }, [filtered, currentPage])

  const hotNews = useMemo(
    () => [...allNews].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5),
    [allNews],
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getCategoryLabel = (category: string) => {
    const catKey = CATEGORY_KEY_MAP[category] || 'school'
    return t(CATEGORY_TRANSLATION_KEYS[catKey] ?? 'news.categorySchool')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="w-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t('news.pageTitle')}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('news.pageDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：新闻列表 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 搜索栏 */}
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value)
                  setCurrentPage(1)
                }}
                placeholder={t('news.searchPlaceholder')}
                className="bg-background pl-9"
              />
            </div>

            {/* 移动端分类筛选 */}
            <div className="flex lg:hidden flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <Badge
                  key={cat.value}
                  variant={activeCategory === cat.value ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => {
                    setActiveCategory(cat.value)
                    setCurrentPage(1)
                  }}
                >
                  {cat.label}
                </Badge>
              ))}
            </div>

            {/* 新闻列表 */}
            {paged.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Search className="size-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg">{t('common.noResult')}</p>
                <p className="text-sm mt-1">{t('news.noResultHint')}</p>
              </div>
            ) : (
              <div className="space-y-5">
                {paged.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Card
                      className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow border-border/50"
                      onClick={() => navigate(`/news/${item.id}`)}
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:w-56 shrink-0">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-40 sm:h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0 p-5 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="text-xs">
                                  {getCategoryLabel(item.category)}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {item.date}
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold text-foreground line-clamp-2 mb-2">
                                {item.title}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {item.summary}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* 分页 */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  {t('common.previous')}
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Button
                    key={p}
                    variant={currentPage === p ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handlePageChange(p)}
                  >
                    {p}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  {t('common.next')}
                </Button>
              </div>
            )}
          </div>

          {/* 右侧边栏 */}
          <aside className="space-y-6">
            {/* 分类筛选（桌面端） */}
            <Card>
              <CardContent className="p-5">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Filter className="size-4" />
                  {t('news.filterTitle')}
                </h4>
                <div className="flex flex-col gap-1.5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => {
                        setActiveCategory(cat.value)
                        setCurrentPage(1)
                      }}
                      className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeCategory === cat.value
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 热门新闻 */}
            <Card>
              <CardContent className="p-5">
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  {t('news.hotNews')}
                </h4>
                <div className="space-y-3">
                  {hotNews.map((item, i) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 cursor-pointer group"
                      onClick={() => navigate(`/news/${item.id}`)}
                    >
                      <span className="text-lg font-bold text-muted-foreground/40 shrink-0 leading-none mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </p>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}
