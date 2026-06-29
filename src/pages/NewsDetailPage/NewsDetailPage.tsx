import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getNewsById } from '@/data/news'
import { useTranslation } from '@/i18n/I18nContext'
import ArticleSection from './sections/ArticleSection'
import RelatedNewsSection from './sections/RelatedNewsSection'

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t, language } = useTranslation()
  const news = getNewsById(id || '', language)

  if (!news) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">{t('news.notFound')}</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => navigate('/news')}
            >
              {t('news.backToList')}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* 面包屑导航 */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t('nav.home')}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/news">{t('nav.news')}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{news.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 返回按钮 */}
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
          onClick={() => navigate('/news')}
        >
          <ArrowLeft className="size-4 mr-1" />
          {t('news.backToList')}
        </Button>

        {/* 文章内容 */}
        <ArticleSection article={news} />

        {/* 分隔线 */}
        <hr className="my-12 border-border" />

        {/* 相关新闻 */}
        <RelatedNewsSection currentNewsId={news.id} />
      </div>
    </div>
  )
}
