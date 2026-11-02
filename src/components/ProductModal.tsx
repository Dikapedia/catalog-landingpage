import { X } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-[#0e1118] border border-white/20 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 border border-white/20 text-slate-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-square bg-black/40 border border-white/10 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">{product.category}</span>
            <h3 className="font-['Cormorant_Garamond',serif] text-3xl text-white mt-1">{product.name}</h3>
            <p className="text-lg font-mono text-slate-200 mt-2">Rp{product.price.toLocaleString('id-ID')}</p>

            <p className="text-xs text-slate-300 leading-relaxed mt-4 font-light">
              {product.description}
            </p>

            <div className="mt-6 space-y-2 text-xs border-t border-b border-white/10 py-4 text-slate-300">
              <div className="flex justify-between"><span className="text-slate-500">Dial Color</span> <span>{product.dialColor}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Case Diameter</span> <span>{product.caseSize}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Strap Material</span> <span>{product.strap}</span></div>
            </div>
          </div>

          <button
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="w-full mt-6 bg-white text-black py-3 text-xs uppercase tracking-widest font-semibold hover:bg-slate-200 transition-colors"
          >
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
}
