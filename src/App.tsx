import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { SignatureFeature } from './components/SignatureFeature';
import { OffersSection } from './components/OffersSection';
import { FeaturesSection } from './components/FeaturesSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { DishDetailModal } from './components/DishDetailModal';
import { FullMenuModal } from './components/FullMenuModal';
import { MenuItem } from './data/restaurantData';

export function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const handleOpenOrder = () => {
    setIsOrderModalOpen(true);
  };

  const handleSelectDish = (dish: MenuItem) => {
    setSelectedDish(dish);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF8] text-[#20231F]">
      {/* SECTION 1: TOP INFORMATION BAR */}
      <TopBar />

      {/* SECTION 2: NAVIGATION HEADER */}
      <Navbar onOpenOrderModal={handleOpenOrder} />

      <main className="flex-1">
        {/* SECTION 3: HERO SECTION */}
        <HeroSection onOpenOrderModal={handleOpenOrder} />

        {/* SECTION 4: INTRODUCTION / ABOUT US */}
        <AboutSection />

        {/* SECTION 5: POPULAR MENU ITEMS */}
        <MenuSection
          onSelectDish={handleSelectDish}
          onOpenFullMenu={() => setIsFullMenuOpen(true)}
          onCallOrder={handleOpenOrder}
        />

        {/* SECTION 6: SIGNATURE DUMPLING FEATURE */}
        <SignatureFeature onExplore={handleExploreMenu} />

        {/* SECTION 7: SPECIAL OFFERS */}
        <OffersSection onExplore={handleExploreMenu} />

        {/* SECTION 8: WHY VISIT UPTOWN DUMPLING? */}
        <FeaturesSection />

        {/* SECTION 9: FOOD GALLERY */}
        <GallerySection />

        {/* SECTION 10: VISIT OUR RESTAURANT */}
        <LocationSection />

        {/* SECTION 11: CUSTOMER REVIEWS */}
        <ReviewsSection />

        {/* SECTION 12: CALL-TO-ACTION SECTION */}
        <CallToAction onCallOrder={handleOpenOrder} />
      </main>

      {/* SECTION 13: FOOTER */}
      <Footer
        onOpenFullMenu={() => setIsFullMenuOpen(true)}
        onCallOrder={handleOpenOrder}
      />

      {/* INTERACTIVE MODALS */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onOpenFullMenu={() => setIsFullMenuOpen(true)}
      />

      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onCallOrder={handleOpenOrder}
      />

      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        onSelectDish={handleSelectDish}
        onCallOrder={handleOpenOrder}
      />
    </div>
  );
}

export default App;
