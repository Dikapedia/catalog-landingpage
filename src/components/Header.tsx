import { Menu, Search } from 'lucide-react';

interface HeaderProps {
  totalCartCount: number;
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
}

export function Header({ totalCartCount, onOpenMenu, onOpenSearch, onOpenCart }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0b0d12]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Left: Hamburger Button */}
        <button
          onClick={onOpenMenu}
          className="border border-white/20 p-2.5 rounded-none hover:border-white/60 hover:bg-white/5 transition-all focus:outline-none"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-slate-200" />
        </button>

        {/* Center: Brand Logo */}
        <div className="text-center">
          <a href="#" className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl tracking-[0.35em] font-semibold text-white uppercase hover:opacity-80 transition-opacity">
            TIMELESS
          </a>
        </div>

        {/* Right: Search & Bag Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenSearch}
            className="border border-white/20 p-2.5 rounded-none hover:border-white/60 hover:bg-white/5 transition-all focus:outline-none"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-slate-200" />
          </button>

          <button
            onClick={onOpenCart}
            className="border border-white/20 px-4 py-2 rounded-none hover:border-white/60 hover:bg-white/5 transition-all text-xs tracking-widest font-medium flex items-center space-x-2 focus:outline-none"
            aria-label={`Open bag, ${totalCartCount} item${totalCartCount === 1 ? '' : 's'}`}
          >
            <span>BAG</span>
            <span className="text-slate-400">[{totalCartCount}]</span>
          </button>
        </div>
      </div>
    </header>
  );
}
