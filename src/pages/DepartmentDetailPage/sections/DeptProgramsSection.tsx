import { motion } from 'framer-motion'
import { GraduationCap, Clock, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from '@/i18n/I18nContext'
import type { IProgram } from '@/data/departments'

interface DeptProgramsSectionProps {
  programs: IProgram[]
}

function getDegreeVariant(degree: string): 'default' | 'secondary' | 'outline' {
  if (degree.includes('本科') || degree.includes('Bachelor') || degree.includes('Бакалавр') || degree.includes('бакалавр')) {
    return 'default'
  }
  if (degree.includes('硕士') || degree.includes('Master') || degree.includes('Магистр') || degree.includes('магистр')) {
    return 'secondary'
  }
  return 'outline'
}

function getDegreeLabel(degree: string, t: (key: string) => string): string {
  if (degree.includes('本科') || degree.includes('Bachelor') || degree.includes('Бакалавр') || degree.includes('бакалавр')) {
    return t('departments.degreeBachelor')
  }
  if (degree.includes('硕士') || degree.includes('Master') || degree.includes('Магистр') || degree.includes('магистр')) {
    return t('departments.degreeMaster')
  }
  if (degree.includes('博士') || degree.includes('Doctor') || degree.includes('Доктор') || degree.includes('доктор')) {
    return t('departments.degreeDoctor')
  }
  return degree
}

export default function DeptProgramsSection({ programs }: DeptProgramsSectionProps) {
  const { t } = useTranslation()

  if (!programs || programs.length === 0) {
    return (
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">{t('departments.programsTitle')}</h2>
          <p className="text-muted-foreground">{t('departments.noPrograms')}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8">{t('departments.programsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((program, i) => {
            const variant = getDegreeVariant(program.degree)
            const degreeLabel = getDegreeLabel(program.degree, t)
            return (
              <motion.div
                key={program.name + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="h-full border-border/60 hover:border-primary/30 transition-colors duration-200">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="size-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                          <BookOpen className="size-4 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground truncate">{program.name}</h3>
                      </div>
                      <Badge variant={variant} className="shrink-0">
                        {degreeLabel}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{program.description}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="size-3.5" />
                      <span>{t('departments.durationLabel')}：{program.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
