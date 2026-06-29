import { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bell, ChevronRight, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNotices } from '@/data/home'
import { useTranslation } from '@/i18n/I18nContext'

export default memo(function NoticeSection() {
  const { t } = useTranslation()
  const notices = useNotices()

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="border-border/60 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Bell className="size-5 text-primary" />
                  {t('home.noticeTitle')}
                </CardTitle>
                <Link
                  to="/news"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('home.noticeViewAll')}
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-1">
              {notices.map((notice, i) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={notice.link}
                    className="flex items-center justify-between gap-4 px-3 py-3 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Badge
                        variant="secondary"
                        className="shrink-0 text-xs font-normal px-2 py-0.5"
                      >
                        {t('common.notice')}
                      </Badge>
                      <span className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                        {notice.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      <span className="tabular-nums">{notice.date}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
})
