import { memo } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_LEADERS, type ILeader } from '@/data/about';
import { useTranslation } from '@/i18n/I18nContext';

interface LeadersSectionProps {
  leaders?: ILeader[];
}

export default memo(function LeadersSection({ leaders = MOCK_LEADERS }: LeadersSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('about.leadersTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('about.leadersDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="group overflow-hidden border-border/60 hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={leader.imageUrl}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        {leader.title}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
