import HeroSection from './sections/HeroSection';
import MottoSection from './sections/MottoSection';
import NoticeSection from './sections/NoticeSection';
import NewsSection from './sections/NewsSection';
import GallerySection from './sections/GallerySection';
import StatsSection from './sections/StatsSection';
import QuickLinksSection from './sections/QuickLinksSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-16 md:space-y-24">
        <HeroSection />
        <MottoSection />
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <NewsSection />
              </div>
              <div>
                <NoticeSection />
              </div>
            </div>
          </div>
        </section>
        <GallerySection />
        <StatsSection />
        <QuickLinksSection />
      </main>
    </div>
  );
}
