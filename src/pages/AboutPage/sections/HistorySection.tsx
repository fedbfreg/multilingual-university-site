import { memo } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { MOCK_HISTORY, type IHistoryMilestone } from '@/data/about';
import { useTranslation } from '@/i18n/I18nContext';

interface HistorySectionProps {
  milestones?: IHistoryMilestone[];
}

const MILESTONE_TITLE_KEYS: Record<string, string> = {
  '学院成立': 'about.historyMilestone1Title',
  '软件工程学院成立': 'about.historyMilestone2Title',
  '人工智能学院揭牌': 'about.historyMilestone3Title',
};

const MILESTONE_DESC_KEYS: Record<string, string> = {
  'CMSC正式挂牌成立，首批招收计算机科学与技术专业本科生200人。': 'about.historyMilestone1Desc',
  '增设软件工程专业，与多家IT企业建立产学研合作关系。': 'about.historyMilestone2Desc',
  '率先成立人工智能学院，获批省级重点实验室。': 'about.historyMilestone3Desc',
};

export default memo(function HistorySection({ milestones = MOCK_HISTORY }: HistorySectionProps) {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('about.historyTitle')}
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            {t('about.historyDesc')}
          </p>
        </motion.div>

        <div className="relative">
          {/* 纵向时间轴线 (桌面端) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;
              const titleKey = MILESTONE_TITLE_KEYS[item.title];
              const descKey = MILESTONE_DESC_KEYS[item.description];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative md:flex md:items-center md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* 时间节点圆点 */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-4 rounded-full bg-primary border-4 border-background shadow-sm" />

                  {/* 年份标签 (移动端) */}
                  <div className="md:hidden flex items-center gap-3 mb-3">
                    <div className="size-3 rounded-full bg-primary shrink-0" />
                    <span className="text-2xl font-black text-primary tabular-nums">
                      {item.year}
                    </span>
                  </div>

                  {/* 内容卡片 */}
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    {/* 年份标签 (桌面端) */}
                    <span className="hidden md:block text-3xl font-black text-primary tabular-nums mb-2">
                      {item.year}
                    </span>

                    <div className="rounded-xl border border-border/60 bg-card p-5 md:p-6 shadow-xs hover:shadow-sm transition-shadow duration-300">
                      {item.imageUrl ? (
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <Image
                            src={item.imageUrl}
                            alt={titleKey ? t(titleKey as never) : item.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      ) : null}
                      <h3 className="text-lg font-semibold text-foreground">
                        {titleKey ? t(titleKey as never) : item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {descKey ? t(descKey as never) : item.description}
                      </p>
                    </div>
                  </div>

                  {/* 占位 (另一侧) */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});
