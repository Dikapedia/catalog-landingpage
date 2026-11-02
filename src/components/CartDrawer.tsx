import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import type { CartItem } from '../types/product';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalCartCount: number;
  totalCartPrice: number;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export function CartDrawer({
  open,
  onClose,
  cartItems,
  totalCartCount,
  totalCartPrice,
  onUpdateQuantity
}: CartDrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#0e1118] border-l border-white/10 p-6 flex flex-col justify-between z-10">

        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-white">Your Shopping Bag ({totalCartCount})</h3>
            <button onClick={onClose} className="p-2 border border-white/20 text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="py-20 text-center text-slate-400 space-y-4">
              <ShoppingBag className="w-12 h-12 mx-auto stroke-1 text-slate-600" />
              <p className="text-sm font-light">Your shopping bag is currently empty.</p>
            </div>
          ) : (
            <div className="mt-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex gap-4 pb-6 border-b border-white/5">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover bg-black/40 border border-white/10" />
                  <div className="flex-1">
                    <h4 className="font-['Cormorant_Garamond',serif] text-lg text-white">{item.product.name}</h4>
                    <p className="text-xs text-slate-400">Rp{item.product.price.toLocaleString('id-ID')}</p>

                    <div className="flex items-center space-x-3 mt-3">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 border border-white/20 hover:bg-white/10 text-slate-300"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-mono">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 border border-white/20 hover:bg-white/10 text-slate-300"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Subtotal</span>
              <span className="font-mono text-white text-base">Rp{totalCartPrice.toLocaleString('id-ID')}</span>
            </div>
            <p className="text-[11px] text-slate-500">Shipping & taxes calculated at checkout.</p>
            <button
              onClick={() => alert('Proceeding to secure luxury checkout...')}
              className="w-full bg-white text-black py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-slate-200 transition-colors"
            >
              Proceed To Checkout
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
