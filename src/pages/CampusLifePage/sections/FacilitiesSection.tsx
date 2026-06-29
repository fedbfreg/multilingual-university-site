import { motion } from 'framer-motion'
import { Image } from '@/components/ui/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useFacilities } from '@/data/campus'
import { useTranslation } from '@/i18n/I18nContext'

export default function FacilitiesSection() {
  const { t } = useTranslation()
  const facilities = useFacilities()

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t('campus.facilitiesTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            {t('campus.facilitiesDesc')}
          </p>
        </motion.div>

        {/* 设施卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="overflow-hidden group h-full flex flex-col">
                {/* 图片区 */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={facility.imageUrl}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {facility.category}
                    </Badge>
                    <span className="text-white font-semibold text-sm drop-shadow-sm">
                      {facility.name}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
