import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, GraduationCap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { MOCK_DEPARTMENTS, type IDepartment } from '@/data/departments';
import { useTranslation } from '@/i18n/I18nContext';

export default function DepartmentsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const FILTER_OPTIONS = [
    { label: t('common.all'), value: 'all' },
    { label: t('departments.filterEngineering'), value: '工学' },
    { label: t('departments.filterScience'), value: '理学' },
  ];

  const filtered = useMemo(() => {
    if (filter === 'all') return MOCK_DEPARTMENTS;
    return MOCK_DEPARTMENTS.filter((d) => d.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-12 md:space-y-16">
        {/* Hero Banner */}
        <section className="w-full bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
            >
              {t('departments.pageTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {t('departments.pageDesc')}
            </motion.p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {FILTER_OPTIONS.map((opt) => (
                <Button
                  key={opt.value}
                  variant={filter === opt.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter(opt.value)}
                  className="rounded-full"
                >
                  {opt.label}
                </Button>
              ))}
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((dept, i) => (
                <DepartmentCard key={dept.id} department={dept} index={i} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <Building2 className="size-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg">{t('common.noResult')}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function DepartmentCard({ department, index }: { department: IDepartment; index: number }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/departments/${department.id}`} className="group block h-full">
        <Card className="h-full overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={department.imageUrl}
              alt={department.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <Badge className="absolute top-3 right-3 bg-background/90 text-foreground hover:bg-background/90">
              {department.category}
            </Badge>
          </div>

          <CardContent className="p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Building2 className="size-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {department.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {department.englishName}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
              {department.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <GraduationCap className="size-3.5" />
                <span>{department.programs.length} {t('departments.programCount')}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                {t('common.learnMore')}
                <ArrowRight className="size-4" />
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
