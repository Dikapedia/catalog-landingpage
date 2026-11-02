import { Search, X, ArrowRight } from 'lucide-react';
import type { Product } from '../types/product';

interface SearchOverlayProps {
  open: boolean;
  query: string;
  results: Product[];
  onQueryChange: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  onClose: () => void;
}

export function SearchOverlay({
  open,
  query,
  results,
  onQueryChange,
  onSelectProduct,
  onClose
}: SearchOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-start p-4 pt-20 sm:pt-28 overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 border border-white/20 text-slate-300 hover:text-white"
        aria-label="Close search"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-2xl">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400 block mb-4">Search Catalog</span>
        <div className="relative border-b border-white/30 pb-2">
          <input
            type="search"
            placeholder="Search by series, color, or material..."
            value={query}
            onChange={event => onQueryChange(event.target.value)}
            autoFocus
            aria-label="Search catalog"
            className="w-full bg-transparent font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl text-white placeholder-slate-600 focus:outline-none pr-10"
          />
          <Search className="absolute right-0 top-2 w-6 h-6 text-slate-400" />
        </div>

        {query.trim() && (
          <div className="mt-6 space-y-3">
            <div className="flex justify-between items-center text-xs text-slate-400 uppercase tracking-wider mb-2">
              <span>{results.length} {results.length === 1 ? 'result' : 'results'}</span>
              <a
                href="#collection"
                onClick={onClose}
                className="hover:text-white underline underline-offset-4"
              >
                View in catalog
              </a>
            </div>

            {results.length > 0 ? (
              <div className="divide-y divide-white/10 border border-white/10 bg-[#13161f]/80">
                {results.map(product => (
                  <button
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover border border-white/10"
                      />
                      <div>
                        <h4 className="font-['Cormorant_Garamond',serif] text-lg text-white group-hover:text-amber-200/90 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-xs text-slate-400">{product.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-right">
                      <span className="font-mono text-xs text-slate-300">
                        Rp{product.price.toLocaleString('id-ID')}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400 py-6 text-center border border-white/10">
                No timepieces found matching "{query}".
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
