import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, GraduationCap, ChevronRight } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Image } from '@/components/ui/image';
import { IFaculty, useFaculty } from '@/data/faculty';
import { useTranslation } from '@/i18n/I18nContext';

const TITLE_OPTIONS = ['all', '教授', '副教授', '讲师'] as const;
type TitleFilter = (typeof TITLE_OPTIONS)[number];

const DEPARTMENTS = [
  'all',
  '计算机科学与技术学院',
  '软件工程学院',
  '人工智能学院',
  '数据科学学院',
  '网络空间安全学院',
] as const;
type DeptFilter = (typeof DEPARTMENTS)[number];

const TITLE_TRANSLATION_KEYS: Record<string, string> = {
  '教授': 'faculty.titleProfessor',
  '副教授': 'faculty.titleAssociateProfessor',
  '讲师': 'faculty.titleLecturer',
};

const DEPT_TRANSLATION_KEYS: Record<string, string> = {
  '计算机科学与技术学院': 'departments.cs',
  '软件工程学院': 'departments.se',
  '人工智能学院': 'departments.ai',
  '数据科学学院': 'departments.ds',
  '网络空间安全学院': 'departments.ns',
};

export default function FacultyGridSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const facultyList = useFaculty();
  const [search, setSearch] = useState('');
  const [titleFilter, setTitleFilter] = useState<TitleFilter>('all');
  const [deptFilter, setDeptFilter] = useState<DeptFilter>('all');

  const filtered = useMemo(() => {
    return facultyList.filter((f) => {
      const matchSearch =
        !search ||
        f.name.includes(search) ||
        f.researchArea.includes(search) ||
        f.bio.includes(search);
      const matchTitle = titleFilter === 'all' || f.title === titleFilter;
      const matchDept = deptFilter === 'all' || f.department === deptFilter;
      return matchSearch && matchTitle && matchDept;
    });
  }, [search, titleFilter, deptFilter, facultyList]);

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 筛选栏 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('faculty.searchPlaceholder')}
              className="bg-background pl-9"
            />
          </div>

          <Select value={titleFilter} onValueChange={(v) => setTitleFilter(v as TitleFilter)}>
            <SelectTrigger className="w-full sm:w-36">
              <SelectValue placeholder={t('faculty.filterTitle')} />
            </SelectTrigger>
            <SelectContent>
              {TITLE_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt === 'all' ? t('common.all') : t(TITLE_TRANSLATION_KEYS[opt] ?? opt)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={deptFilter} onValueChange={(v) => setDeptFilter(v as DeptFilter)}>
            <SelectTrigger className="w-full sm:w-52">
              <SelectValue placeholder={t('faculty.filterDepartment')} />
            </SelectTrigger>
            <SelectContent>
              {DEPARTMENTS.map((d) => (
                <SelectItem key={d} value={d}>
                  {d === 'all' ? t('faculty.allDepartments') : t(DEPT_TRANSLATION_KEYS[d] ?? d)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 教师卡片网格 */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Search className="size-12 mb-4 opacity-30" />
            <p className="text-lg">{t('faculty.noResult')}</p>
            <p className="text-sm mt-1">{t('faculty.adjustFilter')}</p>
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
  );
}

function FacultyCard({
  faculty,
  index,
  onClick,
}: {
  faculty: IFaculty;
  index: number;
  onClick: () => void;
}) {
  const { t } = useTranslation();
  const titleKey = TITLE_TRANSLATION_KEYS[faculty.title] ?? faculty.title;
  const deptKey = DEPT_TRANSLATION_KEYS[faculty.department] ?? faculty.department;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card
        className="group cursor-pointer overflow-hidden border-border/60 hover:border-primary/30 hover:shadow-md transition-shadow duration-300"
        onClick={onClick}
      >
        {/* 头像区 */}
        <div className="relative aspect-[3/2] bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
          <Image
            src={faculty.imageUrl}
            alt={faculty.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <Badge variant="secondary" className="text-xs font-medium">
              {t(titleKey)}
            </Badge>
          </div>
        </div>

        <CardContent className="p-5 space-y-3">
          {/* 姓名 + 学院 */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-foreground truncate group-hover:text-primary transition-colors">
              {faculty.name}
            </h3>
            <p className="text-sm text-muted-foreground truncate mt-0.5">
              {t(deptKey)}
            </p>
          </div>

          {/* 研究方向 */}
          <div className="flex items-start gap-2 min-w-0">
            <GraduationCap className="size-4 shrink-0 mt-0.5 text-primary" />
            <span className="text-sm text-muted-foreground line-clamp-2">
              {faculty.researchArea}
            </span>
          </div>

          {/* 简介 */}
          <p className="text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed">
            {faculty.bio}
          </p>

          {/* 查看详情 */}
          <div className="flex items-center gap-1 text-sm font-medium text-primary pt-1">
            <span>{t('common.learnMore')}</span>
            <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
