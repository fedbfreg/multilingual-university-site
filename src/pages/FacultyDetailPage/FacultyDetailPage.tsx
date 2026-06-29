import { useParams, useNavigate, Link } from 'react-router-dom'
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
import FacultyInfoSection from './sections/FacultyInfoSection'
import FacultyResearchSection from './sections/FacultyResearchSection'
import { getFacultyById } from '@/data/faculty'
import { useTranslation } from '@/i18n/I18nContext'

export default function FacultyDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t, language } = useTranslation()
  const faculty = getFacultyById(id || '', language)

  if (!faculty) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t('faculty.notFound')}</h1>
          <p className="text-muted-foreground mb-6">{t('faculty.notFoundDesc')}</p>
          <Button onClick={() => navigate('/faculty')}>{t('faculty.backToList')}</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-8">
        {/* 面包屑导航 */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">{t('nav.home')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/faculty">{t('nav.faculty')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{faculty.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 返回按钮 */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/faculty')}
          className="gap-1.5 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t('faculty.backToList')}
        </Button>

        {/* 教师信息 */}
        <FacultyInfoSection faculty={faculty} />
        {/* 研究成果 */}
        <FacultyResearchSection faculty={faculty} />
      </main>
    </div>
  )
}
