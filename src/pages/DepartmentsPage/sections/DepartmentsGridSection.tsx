import { useState, useMemo, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { ArrowRight, Cpu, Code, Brain, BarChart3, Shield } from 'lucide-react'
import { useTranslation } from '@/i18n/I18nContext'
import { useDepartments } from '@/data/departments'

const ICON_MAP: Record<string, typeof Cpu> = {
  cpu: Cpu,
  code: Code,
  brain: Brain,
  chart: BarChart3,
  shield: Shield,
}

function DepartmentsGridSection() {
  const { t } = useTranslation()
  const departments = useDepartments()
  const [filter, setFilter] = useState<string>('all')
  const navigate = useNavigate()

  const filterOptions = useMemo(() => [
    { value: 'all', label: t('common.all') },
    { value: 'engineering', label: t('departments.filterEngineering') },
    { value: 'science', label: t('departments.filterScience') },
  ], [t])

  const filtered = useMemo(() => {
    if (filter === 'all') return departments
    return departments.filter((d) => {
      if (filter === 'engineering') {
        return d.category.includes('工学') || d.category.includes('Engineering') || d.category.includes('инженерия') || d.category.includes('Инженерия')
      }
      if (filter === 'science') {
        return d.category.includes('理学') || d.category.includes('Science') || d.category.includes('наука') || d.category.includes('Наука')
      }
      return true
    })
  }, [filter, departments])

  const getIcon = (deptId: string) => {
    const iconKey = deptId === 'cs' ? 'cpu' : deptId === 'se' ? 'code' : deptId === 'ai' ? 'brain' : deptId === 'ds' ? 'chart' : 'shield'
    return ICON_MAP[iconKey] || Cpu
  }

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {t('departments.pageTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {t('departments.pageDesc')}
          </p>
        </motion.div>

        {/* 筛选标签 */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <Button
              key={opt.value}
              variant={filter === opt.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(opt.value)}
              className="rounded-full px-5"
            >
              {opt.label}
            </Button>
          ))}
        </div>

        {/* 院系卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dept, i) => {
            const Icon = getIcon(dept.id)
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <Card className="group overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  {/* 封面图 */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={dept.imageUrl}
                      alt={dept.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <Badge variant="secondary" className="bg-white/90 text-foreground hover:bg-white/90 text-xs">
                        {dept.category}
                      </Badge>
                      <span className="text-white/80 text-xs font-medium">
                        {(t as any)('departments.programsCount', { count: dept.programs?.length || 0 })}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-lg leading-tight">{dept.name}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-sm leading-relaxed flex-1">
                      {dept.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-4 self-start group/btn text-primary hover:text-primary-foreground hover:bg-primary px-0"
                      onClick={() => navigate(`/departments/${dept.id}`)}
                    >
                      {t('common.learnMore')}
                      <ArrowRight className="ml-1 size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* 空状态 */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">{t('common.noResult')}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default memo(DepartmentsGridSection)
