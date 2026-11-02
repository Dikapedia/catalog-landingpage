import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative bg-[#13161f] border border-white/10 p-6 flex flex-col justify-between hover:border-white/40 transition-all duration-300">
      <div>
        <div className="relative aspect-square mb-6 overflow-hidden bg-black/40">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
          />
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 p-2 text-white hover:bg-white hover:text-black transition-colors"
            aria-label={`Quick view ${product.name}`}
            title="Quick View"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">{product.category}</span>
        <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-white mt-1 group-hover:text-amber-200/90 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-slate-400 mt-1 line-clamp-1">{product.tagline}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="font-mono text-sm text-slate-200">Rp{product.price.toLocaleString('id-ID')}</span>
        <button
          onClick={() => onAddToCart(product)}
          className="text-xs uppercase tracking-wider text-slate-300 hover:text-white font-medium flex items-center gap-1 group/btn"
        >
          Add To Bag
          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
