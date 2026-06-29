import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getDepartmentById } from '@/data/departments'
import { useFaculty } from '@/data/faculty'
import { useTranslation } from '@/i18n/I18nContext'
import DeptBannerSection from './sections/DeptBannerSection'
import DeptInfoSection from './sections/DeptInfoSection'
import DeptProgramsSection from './sections/DeptProgramsSection'
import DeptFacultySection from './sections/DeptFacultySection'

export default function DepartmentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t, language } = useTranslation()
  const allFaculty = useFaculty()

  const department = getDepartmentById(id || '', language)

  if (!department) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {t('departments.notFound')}
          </h1>
          <p className="text-muted-foreground mb-6">
            {t('departments.notFoundDesc', { id: id ?? '' })}
          </p>
          <Button onClick={() => navigate('/departments')}>
            {t('departments.backToList')}
          </Button>
        </div>
      </div>
    )
  }

  const relatedFaculty = allFaculty.filter((f) => f.departmentId === id)

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-12 md:space-y-16">
        {/* 面包屑 + 返回按钮 */}
        <section className="w-full pt-8 pb-0">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">{t('nav.home')}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="size-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/departments">{t('nav.departments')}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="size-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{department.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="self-start"
              >
                <ArrowLeft className="size-4 mr-1.5" />
                {t('common.back')}
              </Button>
            </div>
          </div>
        </section>

        {/* 院系 Banner */}
        <DeptBannerSection department={department} />

        {/* 学院介绍 */}
        <DeptInfoSection department={department} />

        {/* 专业方向 */}
        <DeptProgramsSection programs={department.programs} />

        {/* 关联师资 */}
        <DeptFacultySection facultyList={relatedFaculty} />
      </main>
    </div>
  )
}
