import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGallery, type IGalleryImage } from '@/data/about';
import { useTranslation } from '@/i18n/I18nContext';

const CATEGORY_KEYS = [
  { key: 'all', i18nKey: 'about.galleryFilterAll' },
  { key: 'teaching', i18nKey: 'about.galleryFilterTeaching' },
  { key: 'library', i18nKey: 'about.galleryFilterLibrary' },
  { key: 'sports', i18nKey: 'about.galleryFilterSports' },
  { key: 'maker', i18nKey: 'about.galleryFilterMaker' },
  { key: 'lake', i18nKey: 'about.galleryFilterLake' },
  { key: 'auditorium', i18nKey: 'about.galleryFilterAuditorium' },
  { key: 'road', i18nKey: 'about.galleryFilterRoad' },
  { key: 'dorm', i18nKey: 'about.galleryFilterDorm' },
] as const;

type CategoryKey = (typeof CATEGORY_KEYS)[number]['key'];

export default function CampusGallerySection() {
  const { t } = useTranslation();
  const gallery = useGallery();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return gallery;
    return gallery.filter((img) => img.category === activeCategory);
  }, [activeCategory, gallery]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  const currentImage: IGalleryImage | null =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('about.galleryTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {t('about.galleryDesc')}
          </p>
        </motion.div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORY_KEYS.map((cat) => (
            <Button
              key={cat.key}
              variant={activeCategory === cat.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat.key)}
              className="rounded-full px-4"
            >
              {t(cat.i18nKey as never)}
            </Button>
          ))}
        </div>

        {/* 图片网格 */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-muted"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* 悬停遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 空状态 */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            {t('common.noResult')}
          </div>
        )}

        {/* 灯箱 */}
        <Dialog
          open={lightboxIndex !== null}
          onOpenChange={(open) => {
            if (!open) closeLightbox();
          }}
        >
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/95 border-none">
            <DialogTitle className="sr-only">
              {currentImage?.title ?? t('about.galleryTitle')}
            </DialogTitle>

            {/* 关闭按钮 */}
            <Button
              size="icon"
              variant="ghost"
              className="!absolute top-4 right-4 z-50 h-10 w-10 rounded-full text-white hover:bg-white/20"
              onClick={closeLightbox}
              aria-label={t('common.close')}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* 图片 */}
            {currentImage && (
              <div className="flex items-center justify-center w-full h-full min-h-[50vh] p-4">
                <Image
                  src={currentImage.imageUrl}
                  alt={currentImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            )}

            {/* 标题 */}
            {currentImage && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-white text-sm font-medium">
                  {currentImage.title}
                </span>
              </div>
            )}

            {/* 左右箭头 */}
            {filtered.length > 1 && (
              <>
                <Button
                  size="icon"
                  variant="ghost"
                  className="!absolute left-4 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  aria-label={t('common.previous')}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="!absolute right-4 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  aria-label={t('common.next')}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
