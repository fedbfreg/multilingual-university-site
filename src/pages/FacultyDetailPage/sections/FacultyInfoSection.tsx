import { memo } from 'react';
import { Mail, MapPin, GraduationCap } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { IFaculty } from '@/data/faculty';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';
import { useTranslation } from '@/i18n/I18nContext';

interface FacultyInfoSectionProps {
  faculty: IFaculty;
}

export default memo(function FacultyInfoSection({ faculty }: FacultyInfoSectionProps) {
  const { t } = useTranslation();

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* 头像 */}
          <div className="shrink-0">
            <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden ring-2 ring-border/50 shadow-sm">
              <Image
                src={faculty.imageUrl}
                alt={faculty.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 信息 */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* 姓名 + 职称 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                {faculty.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="text-sm">
                  {t(`faculty.title.${faculty.title}` as any)}
                </Badge>
              </div>
            </div>

            {/* 所属学院 */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 shrink-0" />
              <span className="text-sm">{t('faculty.department')}: {faculty.department}</span>
            </div>

            {/* 研究方向 */}
            <div className="flex items-start gap-2 text-muted-foreground">
              <GraduationCap className="size-4 shrink-0 mt-0.5" />
              <span className="text-sm">{t('faculty.researchArea')}: {faculty.researchArea}</span>
            </div>

            {/* 邮箱 */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-4 shrink-0" />
              <span className="text-sm text-muted-foreground">{t('faculty.email')}: </span>
              <UniversalLink
                to={`mailto:${faculty.email}`}
                className="text-sm text-primary hover:underline transition-colors"
              >
                {faculty.email}
              </UniversalLink>
            </div>

            {/* 简介 */}
            <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
              {faculty.bio}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
