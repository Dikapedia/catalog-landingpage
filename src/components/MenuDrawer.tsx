import { X } from 'lucide-react';

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

const NAV_ITEMS = ['Collection', 'Craftsmanship', 'Heritage', 'Ateliers', 'Contact'];

export function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-[#0e1118] border-r border-white/10 p-8 flex flex-col justify-between z-10">
        <div>
          <div className="flex items-center justify-between pb-8 border-b border-white/10">
            <span className="font-['Cormorant_Garamond',serif] text-2xl tracking-[0.3em] font-semibold text-white">TIMELESS</span>
            <button onClick={onClose} className="p-2 border border-white/20 text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-8 space-y-6">
            {NAV_ITEMS.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={onClose}
                className="block font-['Cormorant_Garamond',serif] text-3xl text-slate-200 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Private Concierge</p>
          <p className="text-sm font-mono text-slate-200">+62 345678</p>
          <p className="text-xs text-slate-400 mt-1">concierge@timeless.com</p>
        </div>
      </div>
    </div>
  );
}
