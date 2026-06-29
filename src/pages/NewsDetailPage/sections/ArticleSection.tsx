import { Link } from 'react-router-dom'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import type { INews } from '@/data/news'
import { useTranslation } from '@/i18n/I18nContext'

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

interface ArticleSectionProps {
  article: INews
}

export default function ArticleSection({ article }: ArticleSectionProps) {
  const { t } = useTranslation()

  const categoryKey = CATEGORY_KEY_MAP[article.category] || 'school'
  const categoryLabel = t(CATEGORY_TRANSLATION_KEYS[categoryKey] ?? 'news.categorySchool')

  const categoryVariant = (): 'default' | 'secondary' | 'outline' => {
    switch (categoryKey) {
      case 'school':
        return 'default'
      case 'lecture':
        return 'secondary'
      case 'event':
        return 'outline'
      default:
        return 'default'
    }
  }

  return (
    <article className="w-full">
      {/* 面包屑 + 返回 */}
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="gap-1.5 text-muted-foreground hover:text-foreground">
          <Link to="/news">
            <ArrowLeft className="size-4" />
            {t('news.backToList')}
          </Link>
        </Button>
      </div>

      {/* 分类标签 + 日期 */}
      <div className="flex items-center gap-3 mb-4">
        <Badge variant={categoryVariant()} className="text-xs">
          {categoryLabel}
        </Badge>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar className="size-3.5" />
          {article.date}
        </span>
      </div>

      {/* 标题 */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
        {article.title}
      </h1>

      {/* 封面图 */}
      {article.coverImage && (
        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            className="w-full aspect-video object-cover"
          />
        </div>
      )}

      {/* 正文 */}
      <div className="prose prose-neutral max-w-none text-foreground/85 leading-relaxed text-base md:text-lg">
        {article.content.split('\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* 底部标签 */}
      <div className="mt-10 pt-6 border-t border-border flex items-center gap-2">
        <Tag className="size-4 text-muted-foreground" />
        <Badge variant="secondary" className="text-xs">
          {categoryLabel}
        </Badge>
      </div>
    </article>
  )
}
