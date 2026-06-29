import { useState } from 'react'
import { motion } from 'framer-motion'
import { Image } from '@/components/ui/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Bed, UtensilsCrossed, CheckCircle } from 'lucide-react'
import { useAccommodation } from '@/data/campus'
import { useTranslation } from '@/i18n/I18nContext'

export default function AccommodationSection() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('dorm')
  const accommodations = useAccommodation()

  const dormItems = accommodations.filter((a) => a.type === 'dorm')
  const diningItems = accommodations.filter((a) => a.type === 'dining')

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('campus.accommodationTitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('campus.accommodationDesc')}
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="h-12">
              <TabsTrigger value="dorm" className="gap-2 text-base px-6">
                <Bed className="size-4" />
                {t('campus.dormTab')}
              </TabsTrigger>
              <TabsTrigger value="dining" className="gap-2 text-base px-6">
                <UtensilsCrossed className="size-4" />
                {t('campus.diningTab')}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dorm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dormItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-end">
                      <div className="flex flex-wrap gap-2">
                        {item.details.map((detail) => (
                          <Badge key={detail} variant="secondary" className="gap-1.5 px-2.5 py-1">
                            <CheckCircle className="size-3.5" />
                            {detail}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dining">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {diningItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-end gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {item.details.map((s) => (
                          <Badge key={s} variant="outline" className="text-xs">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
