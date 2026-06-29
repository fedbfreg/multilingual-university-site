import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { IFaculty } from '@/data/faculty';
import { useTranslation } from '@/i18n/I18nContext';

interface DeptFacultySectionProps {
  facultyList: IFaculty[];
}

export default function DeptFacultySection({ facultyList }: DeptFacultySectionProps) {
  const { t } = useTranslation();
  const faculty = facultyList.slice(0, 4);

  if (faculty.length === 0) return null;

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold">{t('deptDetail.relatedFaculty')}</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/faculty" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  {t('common.viewAll')} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {faculty.map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={`/faculty/${member.id}`}
                      className="group flex flex-col items-center rounded-lg border border-border/60 bg-card p-4 transition-colors hover:border-primary/30 hover:bg-accent/30"
                    >
                      <div className="relative mb-3 size-16 overflow-hidden rounded-full ring-2 ring-border/40 group-hover:ring-primary/30 transition-all">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          className="size-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate max-w-full">
                        {member.name}
                      </span>
                      <span className="text-xs text-muted-foreground mt-0.5">
                        {member.title}
                      </span>
                      <span className="text-xs text-muted-foreground/70 mt-1 line-clamp-2 text-center">
                        {member.researchArea}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
