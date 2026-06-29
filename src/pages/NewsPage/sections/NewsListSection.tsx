import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { MOCK_NEWS, type INews } from '@/data/news';
import { useTranslation } from '@/i18n/I18nContext';

const PAGE_SIZE = 4;

const CATEGORY_KEY_MAP: Record<string, string> = {
  '学校新闻': 'news.categorySchool',
  '学术讲座': 'news.categoryLecture',
  '重要活动': 'news.categoryEvent',
};

const categoryVariant: Record<INews['category'], 'default' | 'secondary' | 'outline'> = {
  '学校新闻': 'default',
  '学术讲座': 'secondary',
  '重要活动': 'outline',
};

interface NewsListSectionProps {
  selectedCategory: string;
}

export default function NewsListSection({ selectedCategory }: NewsListSectionProps) {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (selectedCategory === 'all') return MOCK_NEWS;
    return MOCK_NEWS.filter((n) => n.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const handlePageChange = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
        <p className="text-lg">{t('common.noResult')}</p>
        <p className="text-sm mt-1">{t('news.tryOtherCategory')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {paged.map((news, i) => (
        <motion.div
          key={news.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to={`/news/${news.id}`} className="block group">
            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-56 shrink-0 overflow-hidden">
                    <Image
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-40 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0 p-5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant={categoryVariant[news.category]} className="text-xs">
                          {t(CATEGORY_KEY_MAP[news.category] ?? 'news.categorySchool')}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="size-3" />
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {news.summary}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {t('common.readMore')}
                      <ArrowRight className="ml-1 size-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <Button
            variant="outline"
            size="sm"
            disabled={safePage <= 1}
            onClick={() => handlePageChange(safePage - 1)}
          >
            {t('common.previous')}
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              variant={p === safePage ? 'default' : 'outline'}
              size="sm"
              onClick={() => handlePageChange(p)}
              className="min-w-[36px]"
            >
              {p}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            disabled={safePage >= totalPages}
            onClick={() => handlePageChange(safePage + 1)}
          >
            {t('common.next')}
          </Button>
        </div>
      )}
    </div>
  );
}
