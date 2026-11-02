import type { Product, ProductCategoryFilter } from '../types/product';
import { ProductCard } from './ProductCard';

interface CollectionSectionProps {
  products: Product[];
  selectedCategory: ProductCategoryFilter;
  onSelectCategory: (category: ProductCategoryFilter) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const CATEGORIES: ProductCategoryFilter[] = ['All', 'Elegance', 'Sport', 'Minimalist'];

export function CollectionSection({
  products,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart
}: CollectionSectionProps) {
  const filteredProducts =
    selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <section id="collection" className="py-24 bg-[#0b0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-medium">Curated Selection</span>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl text-white mt-2">
              The Signature Series
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`px-5 py-2 text-xs uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-black border border-white font-medium'
                    : 'border border-white/20 text-slate-300 hover:border-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-6 text-xs uppercase tracking-widest text-slate-400" aria-live="polite">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'timepiece' : 'timepieces'} found
        </p>

        {filteredProducts.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <p className="border border-white/10 p-8 text-slate-400">No timepieces match this selection.</p>
        )}

      </div>
    </section>
  );
}
