import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { Button } from '@/components/ui/button'
import { useGallery } from '@/data/home'
import { useTranslation } from '@/i18n/I18nContext'

function GallerySection() {
  const { t } = useTranslation()
  const gallery = useGallery()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % gallery.length)
  }

  const goPrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length)
  }

  const selectedImage = selectedIndex !== null ? gallery[selectedIndex] : null

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {t('home.galleryTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            {t('home.galleryDesc')}
          </p>
        </motion.div>

        {/* 图片网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {gallery.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLightbox(i)}
              className="group relative overflow-hidden rounded-xl bg-muted cursor-pointer aspect-[4/3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`${t('common.viewAll')}：${img.caption}`}
            >
              <Image
                src={img.imageUrl}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* 悬浮遮罩 */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {img.caption}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* 灯箱 */}
        <AnimatePresence>
          {selectedIndex !== null && selectedImage && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* 关闭按钮 */}
              <Button
                size="icon"
                variant="ghost"
                className="!absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/60 hover:bg-background/80"
                onClick={closeLightbox}
                aria-label={t('common.close')}
              >
                <X className="h-5 w-5" />
              </Button>
              {/* 上一张 */}
              <Button
                size="icon"
                variant="ghost"
                className="!absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/60 hover:bg-background/80"
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                aria-label={t('common.previous')}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              {/* 下一张 */}
              <Button
                size="icon"
                variant="ghost"
                className="!absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/60 hover:bg-background/80"
                onClick={(e) => { e.stopPropagation(); goNext() }}
                aria-label={t('common.next')}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              {/* 图片容器 */}
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              >
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.caption}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
                <p className="mt-4 text-foreground text-base font-medium">
                  {selectedImage.caption}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {selectedIndex! + 1} / {gallery.length}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default memo(GallerySection)
