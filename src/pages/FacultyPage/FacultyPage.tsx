import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom'
import { useFaculty, type IFaculty } from '@/data/faculty'
import { useTranslation } from '@/i18n/I18nContext'

const DEPT_KEYS = [
  { value: 'all', key: 'common.all' },
  { value: 'cs', key: 'departments.cs' },
  { value: 'se', key: 'departments.se' },
  { value: 'ai', key: 'departments.ai' },
  { value: 'ds', key: 'departments.ds' },
  { value: 'ns', key: 'departments.ns' },
]

const TITLE_KEYS = [
  { value: 'all', key: 'common.all' },
  { value: 'professor', key: 'faculty.titleProfessor' },
  { value: 'associate', key: 'faculty.titleAssociateProfessor' },
  { value: 'lecturer', key: 'faculty.titleLecturer' },
]

const DEPT_ID_MAP: Record<string, string> = {
  '计算机科学与技术学院': 'cs',
  'School of Computer Science & Technology': 'cs',
  'Эсептөө илими жана технологиясы факультети': 'cs',
  'Факультет компьютерных наук и технологий': 'cs',
  '软件工程学院': 'se',
  'School of Software Engineering': 'se',
  'Программалык инженерия факультети': 'se',
  'Факультет программной инженерии': 'se',
  '人工智能学院': 'ai',
  'School of Artificial Intelligence': 'ai',
  'Жасалма интеллект факультети': 'ai',
  'Факультет искусственного интеллекта': 'ai',
  '数据科学学院': 'ds',
  'School of Data Science': 'ds',
  'Маалымат илими факультети': 'ds',
  'Факультет науки о данных': 'ds',
  '网络空间安全学院': 'ns',
  'School of Cyberspace Security': 'ns',
  'Кибермейкиндик коопсуздук факультети': 'ns',
  'Факультет кибербезопасности': 'ns',
}

const TITLE_KEY_MAP: Record<string, string> = {
  '教授': 'professor',
  'Professor': 'professor',
  'Профессор': 'professor',
  '副教授': 'associate',
  'Associate Professor': 'associate',
  'Доцент': 'associate',
  '讲师': 'lecturer',
  'Lecturer': 'lecturer',
  'Окитүүчү': 'lecturer',
  'Преподаватель': 'lecturer',
}

export default function FacultyPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const allFaculty = useFaculty()
  const [keyword, setKeyword] = useState('')
  const [department, setDepartment] = useState('all')
  const [title, setTitle] = useState('all')

  const filtered = useMemo(() => {
    return allFaculty.filter((f) => {
      const deptId = DEPT_ID_MAP[f.department] || ''
      const titleKey = TITLE_KEY_MAP[f.title] || ''
      const matchDept = department === 'all' || deptId === department
      const matchTitle = title === 'all' || titleKey === title
      const matchKeyword =
        !keyword ||
        f.name.includes(keyword) ||
        f.researchArea.includes(keyword) ||
        f.bio.includes(keyword)
      return matchDept && matchTitle && matchKeyword
    })
  }, [keyword, department, title, allFaculty])

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-12 md:space-y-16">
        {/* Hero */}
        <section className="w-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              {t('faculty.pageTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
            >
              {t('faculty.pageDesc')}
            </motion.p>
          </div>
        </section>

        {/* 筛选 + 列表 */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* 筛选栏 */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      placeholder={t('faculty.searchPlaceholder')}
                      className="bg-background pl-9"
                    />
                  </div>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger className="w-full md:w-[220px]">
                      <Filter className="size-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder={t('faculty.filterDepartment')} />
                    </SelectTrigger>
                    <SelectContent>
                      {DEPT_KEYS.map((d) => (
                        <SelectItem key={d.value} value={d.value}>
                          {t(d.key as never)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={title} onValueChange={setTitle}>
                    <SelectTrigger className="w-full md:w-[160px]">
                      <SelectValue placeholder={t('faculty.filterTitle')} />
                    </SelectTrigger>
                    <SelectContent>
                      {TITLE_KEYS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {t(item.key as never)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* 教师网格 */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Search className="size-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg">{t('faculty.noResult')}</p>
                <p className="text-sm mt-1">{t('faculty.noResultHint')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((faculty, i) => (
                  <FacultyCard
                    key={faculty.id}
                    faculty={faculty}
                    index={i}
                    onClick={() => navigate(`/faculty/${faculty.id}`)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

function FacultyCard({
  faculty,
  index,
  onClick,
}: {
  faculty: IFaculty
  index: number
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card
        className="group cursor-pointer h-full hover:shadow-md transition-shadow"
        onClick={onClick}
      >
        <CardContent className="pt-6 pb-5">
          <div className="flex flex-col items-center text-center">
            <Avatar className="size-20 mb-4 ring-2 ring-border/50 group-hover:ring-primary/30 transition-all">
              <AvatarImage src={faculty.imageUrl} alt={faculty.name} />
              <AvatarFallback className="text-lg bg-primary/10 text-primary font-semibold">
                {faculty.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-colors">
              {faculty.name}
            </h3>
            <Badge variant="secondary" className="mb-2 text-xs">
              {faculty.title}
            </Badge>
            <p className="text-xs text-muted-foreground mb-3">
              {faculty.department}
            </p>
            <p className="text-xs text-muted-foreground/70 leading-relaxed line-clamp-2 mb-3">
              {faculty.researchArea}
            </p>
            <p className="text-xs text-muted-foreground/60 leading-relaxed line-clamp-2">
              {faculty.bio}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
