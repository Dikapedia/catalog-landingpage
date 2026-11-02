import { useState } from 'react';
import { useGoogleFonts } from './hooks/useGoogleFonts';
import { useCart } from './hooks/useCart';
import { PRODUCTS } from './data/products';
import type { Product, ProductCategoryFilter } from './types/product';

import { Header } from './components/Header';
import { MenuDrawer } from './components/MenuDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';

import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CollectionSection } from './components/CollectionSection';
import { PhilosophySection } from './components/PhilosophySection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryFilter>('All');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  useGoogleFonts();

  const {
    cartItems,
    cartOpen,
    setCartOpen,
    addToCart,
    updateQuantity,
    totalCartCount,
    totalCartPrice
  } = useCart();

  const filteredProducts = PRODUCTS.filter(product =>
    `${product.name} ${product.tagline} ${product.category} ${product.dialColor} ${product.strap}`
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="bg-[#0b0d12] text-slate-100 min-h-screen font-['Plus_Jakarta_Sans',sans-serif] selection:bg-slate-700 selection:text-white relative overflow-x-hidden">

      <Header
        totalCartCount={totalCartCount}
        onOpenMenu={() => setMenuOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
      />

      <HeroSection />

      <FeaturesSection />

      <CollectionSection
        products={filteredProducts}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onQuickView={setActiveProductModal}
        onAddToCart={addToCart}
      />

      <PhilosophySection />

      <NewsletterSection />

      <Footer />

      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <SearchOverlay
        open={searchOpen}
        query={searchQuery}
        results={filteredProducts}
        onQueryChange={setSearchQuery}
        onSelectProduct={setActiveProductModal}
        onClose={() => setSearchOpen(false)}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        totalCartCount={totalCartCount}
        totalCartPrice={totalCartPrice}
        onUpdateQuantity={updateQuantity}
      />

      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToCart={addToCart}
      />

    </div>
  );
}
