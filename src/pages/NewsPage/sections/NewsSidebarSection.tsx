import { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, TrendingUp, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MOCK_NEWS, type INews } from '@/data/news';
import { useTranslation } from '@/i18n/I18nContext';

const CATEGORY_KEYS = ['all', '学校新闻', '学术讲座', '重要活动'] as const;

const CATEGORY_TRANSLATION_MAP: Record<string, string> = {
  all: 'common.all',
  '学校新闻': 'news.categorySchool',
  '学术讲座': 'news.categoryLecture',
  '重要活动': 'news.categoryEvent',
};

interface NewsSidebarSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchKeyword: string;
  onSearchChange: (keyword: string) => void;
}

export default function NewsSidebarSection({
  activeCategory,
  onCategoryChange,
  searchKeyword,
  onSearchChange,
}: NewsSidebarSectionProps) {
  const { t } = useTranslation();

  const hotNews = useMemo(() => {
    return [...MOCK_NEWS].sort((a, b) => {
      const aLen = a.content.length;
      const bLen = b.content.length;
      return bLen - aLen;
    }).slice(0, 5);
  }, []);

  return (
    <aside className="space-y-6">
      {/* 搜索 */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={searchKeyword}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t('news.searchPlaceholder')}
              className="bg-background pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* 分类筛选 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Tag className="size-4" />
            {t('news.categoryTitle')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {CATEGORY_KEYS.map((cat) => {
              const labelKey = CATEGORY_TRANSLATION_MAP[cat] ?? cat;
              return (
                <Badge
                  key={cat}
                  variant={activeCategory === cat ? 'default' : 'outline'}
                  className={cn(
                    'cursor-pointer transition-colors',
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'hover:bg-accent hover:text-accent-foreground',
                  )}
                  onClick={() => onCategoryChange(cat)}
                >
                  {t(labelKey as never)}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 热门新闻 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="size-4" />
            {t('news.hotTitle')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {hotNews.map((item, index) => (
              <li key={item.id}>
                <NavLink
                  to={`/news/${item.id}`}
                  className="group flex items-start gap-3 rounded-md p-2 -mx-2 transition-colors hover:bg-accent/50"
                >
                  <span
                    className={cn(
                      'flex size-5 shrink-0 items-center justify-center rounded text-xs font-bold',
                      index < 3
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {item.date}
                    </p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
}
