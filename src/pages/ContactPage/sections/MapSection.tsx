import { MapPin } from 'lucide-react';
import { useTranslation } from '@/i18n/I18nContext';

export default function MapSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('contact.mapTitle')}</h2>
          <p className="mt-2 text-muted-foreground">{t('contact.mapDesc')}</p>
        </div>

        {/* 静态地图占位 */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-border/60 bg-muted/50">
          {/* 模拟地图底图 */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-blue-50/40 to-slate-100/60" />

          {/* 网格线模拟地图纹理 */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(30,64,175,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,64,175,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* 道路模拟 */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-slate-300/70" />
            <div className="absolute left-1/3 top-0 bottom-0 w-[3px] bg-slate-300/70" />
            <div className="absolute top-1/3 left-1/3 right-0 h-[2px] bg-slate-200/50" />
            <div className="absolute top-2/3 left-0 right-1/3 h-[2px] bg-slate-200/50" />
          </div>

          {/* 标记点 */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10">
            {/* 脉冲波纹 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-primary/20 animate-ping" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-primary/30" />

            {/* 标记图标 */}
            <div className="relative flex items-center justify-center size-10 rounded-full bg-primary shadow-lg">
              <MapPin className="size-5 text-primary-foreground" />
            </div>

            {/* 标签气泡 */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap">
              <div className="px-4 py-2 bg-card border border-border rounded-lg shadow-md">
                <p className="text-sm font-semibold text-foreground">{t('brand.fullName')}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t('contact.address')}</p>
              </div>
              {/* 气泡三角 */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 size-3 rotate-45 bg-card border-l border-t border-border" />
            </div>
          </div>

          {/* 装饰性建筑方块 */}
          <div className="absolute top-[35%] left-[20%] size-6 rounded-sm bg-slate-300/40" />
          <div className="absolute top-[38%] left-[25%] size-4 rounded-sm bg-slate-300/30" />
          <div className="absolute top-[55%] left-[60%] size-8 rounded-sm bg-slate-300/40" />
          <div className="absolute top-[58%] left-[65%] size-5 rounded-sm bg-slate-300/30" />
          <div className="absolute top-[30%] left-[55%] size-5 rounded-sm bg-slate-300/35" />
          <div className="absolute top-[62%] left-[15%] size-6 rounded-sm bg-slate-300/35" />

          {/* 绿地模拟 */}
          <div className="absolute top-[20%] left-[5%] w-[12%] h-[25%] rounded-lg bg-emerald-200/30" />
          <div className="absolute top-[60%] left-[70%] w-[15%] h-[20%] rounded-lg bg-emerald-200/25" />
        </div>

        {/* 底部提示 */}
        <p className="mt-4 text-center text-xs text-muted-foreground">
          {t('contact.mapDisclaimer')}
        </p>
      </div>
    </section>
  );
}
