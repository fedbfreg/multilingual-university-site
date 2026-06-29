import { memo } from 'react';
import { Award, BookOpen, GraduationCap, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Image } from '@/components/ui/image';
import type { IFaculty } from '@/data/faculty';
import { useTranslation } from '@/i18n/I18nContext';

interface FacultyResearchSectionProps {
  faculty: IFaculty;
}

export default memo(function FacultyResearchSection({ faculty }: FacultyResearchSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* 左侧：个人信息卡片 */}
      <Card className="lg:col-span-1 h-fit">
        <CardContent className="pt-6 space-y-5">
          {/* 头像 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative size-28 rounded-full overflow-hidden ring-4 ring-primary/10 mb-4">
              <Image
                src={faculty.imageUrl}
                alt={faculty.name}
                className="size-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground">{faculty.name}</h3>
            <Badge variant="secondary" className="mt-1.5">
              {faculty.title}
            </Badge>
          </div>

          <Separator />

          {/* 基本信息 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-sm">
              <GraduationCap className="size-4 shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">{t('faculty.department')}：</span>
              <span className="font-medium text-foreground">{faculty.department}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <BookOpen className="size-4 shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">{t('faculty.researchArea')}：</span>
              <span className="font-medium text-foreground">{faculty.researchArea}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <Mail className="size-4 shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">{t('faculty.email')}：</span>
              <span className="font-medium text-foreground text-xs">{faculty.email}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 右侧：个人简介 + 研究成果 */}
      <div className="lg:col-span-2 space-y-6">
        {/* 个人简介 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <GraduationCap className="size-5 text-primary" />
              {t('faculty.bio')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {faculty.bio}
            </p>
          </CardContent>
        </Card>

        {/* 研究成果 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="size-5 text-primary" />
              {t('faculty.achievements')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {faculty.achievements.length > 0 ? (
              <ul className="space-y-3">
                {faculty.achievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border/50"
                  >
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground py-4 text-center">
                {t('faculty.noAchievements')}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
});
