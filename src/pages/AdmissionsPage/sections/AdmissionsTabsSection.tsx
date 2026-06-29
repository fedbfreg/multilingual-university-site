import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, BookOpen, Briefcase, Building2, Calendar, CheckCircle, ArrowRight, MapPin, Clock, Users } from 'lucide-react'
import { useAdmissionGuide, usePrograms, useCareerGuide, usePartners } from '@/data/admissions'
import { useTranslation } from '@/i18n/I18nContext'

export default function AdmissionsTabsSection() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('guide')
  const admissionGuide = useAdmissionGuide()
  const programs = usePrograms()
  const careerGuide = useCareerGuide()
  const partners = usePartners()

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 h-auto p-1 bg-muted/50 rounded-xl">
            <TabsTrigger value="guide" className="flex items-center gap-1.5 py-2.5 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
              <BookOpen className="size-4" />
              <span className="hidden sm:inline">{t('admissions.tabGuide')}</span>
            </TabsTrigger>
            <TabsTrigger value="majors" className="flex items-center gap-1.5 py-2.5 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
              <GraduationCap className="size-4" />
              <span className="hidden sm:inline">{t('admissions.tabMajors')}</span>
            </TabsTrigger>
            <TabsTrigger value="career" className="flex items-center gap-1.5 py-2.5 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
              <Briefcase className="size-4" />
              <span className="hidden sm:inline">{t('admissions.tabCareer')}</span>
            </TabsTrigger>
            <TabsTrigger value="partners" className="flex items-center gap-1.5 py-2.5 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
              <Building2 className="size-4" />
              <span className="hidden sm:inline">{t('admissions.tabPartners')}</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: 招生简章 */}
          <TabsContent value="guide" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="size-5 text-primary" />
                    {t('admissions.guidePolicy')}
                  </CardTitle>
                  <CardDescription>{admissionGuide.policy}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="size-4 text-success" />
                    {t('admissions.guideRequirements')}
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {admissionGuide.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 size-1.5 rounded-full bg-primary shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ArrowRight className="size-4 text-primary" />
                    {t('admissions.processTitle')}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {admissionGuide.process.map((p) => (
                      <div key={p.step} className="relative p-4 rounded-lg border bg-card/50 text-center">
                        <span className="inline-flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-2">
                          {p.step}
                        </span>
                        <div className="text-sm font-semibold text-foreground">{p.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{p.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="size-5 text-primary" />
                    {t('admissions.guideDates')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {admissionGuide.importantDates.map((d) => (
                    <div key={d.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium text-foreground">{d.label}</span>
                      <span className="text-sm text-primary font-semibold">{d.date}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: 专业介绍 */}
          <TabsContent value="majors" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program, i) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <CardTitle className="text-lg">{program.name}</CardTitle>
                          <CardDescription className="mt-1">{program.objectives}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="shrink-0">{program.degree}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="size-3.5" />{program.duration}</span>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">{t('admissions.coreCourses')}</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {program.courses.map((c) => (
                            <Badge key={c} variant="outline" className="text-xs">{c}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-1">{t('admissions.careerDirection')}</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {program.careerDirections.map((c) => (
                            <Badge key={c} variant="secondary" className="text-xs">{c}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Tab 3: 就业指导 */}
          <TabsContent value="career" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="size-5 text-primary" />
                    {t('admissions.careerServiceTitle')}
                  </CardTitle>
                  <CardDescription>
                    {careerGuide.overview}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">{t('admissions.careerResources')}</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {careerGuide.resources.map((resource, i) => (
                        <div key={i} className="flex gap-3 p-3 rounded-lg border bg-card/50">
                          <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                          <div className="text-sm text-foreground">{resource}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">{t('admissions.careerActivities')}</h5>
                    <div className="space-y-2">
                      {careerGuide.activities.map((activity, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="size-4 text-primary" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-5 text-primary" />
                    {t('admissions.careerStatsTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {careerGuide.statistics.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="text-lg font-bold text-primary tabular-nums">{stat.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 4: 校企合作 */}
          <TabsContent value="partners" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="size-5 text-primary" />
                  {t('admissions.partnersTitle')}
                </CardTitle>
                <CardDescription>
                  {t('admissions.partnersDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {partners.map((partner, i) => (
                    <motion.div
                      key={partner.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3">
                            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <Building2 className="size-6 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-semibold text-foreground text-sm">{partner.name}</h4>
                              <Badge variant="outline" className="mt-1 text-xs">{partner.field}</Badge>
                              <p className="text-xs text-muted-foreground mt-2 line-clamp-3">{partner.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
