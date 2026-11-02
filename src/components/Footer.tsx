
// lucide-react v1 menghapus semua ikon brand (Facebook, Instagram, Twitter, dll),
// jadi kita pakai SVG inline sederhana sebagai penggantinya.

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A6.33 6.33 0 0 0 23 3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#08090d] border-t border-white/10 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

          <div className="space-y-4">
            <a href="#" className="font-['Cormorant_Garamond',serif] text-2xl tracking-[0.35em] font-semibold text-white uppercase block">
              TIMELESS
            </a>
            <p className="text-slate-400 font-light leading-relaxed max-w-xs">
              Refined Swiss horology engineered for timeless elegance and everyday endurance.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5 font-light">
              <li><a href="#collection" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Craftsmanship</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bespoke Monogramming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Atelier Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">Client Care</h4>
            <ul className="space-y-2.5 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Book an Appointment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Watch Servicing & Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Authenticity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">5-Year Warranty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 border border-white/10 hover:border-white text-slate-300 hover:text-white transition-all"><InstagramIcon /></a>
              <a href="#" className="p-2 border border-white/10 hover:border-white text-slate-300 hover:text-white transition-all"><FacebookIcon /></a>
              <a href="#" className="p-2 border border-white/10 hover:border-white text-slate-300 hover:text-white transition-all"><TwitterIcon /></a>
            </div>
            <p className="text-slate-500 text-[11px]">Geneva • Zurich • New York • Tokyo</p>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-slate-500 font-light">
          <p>© {new Date().getFullYear()} TIMELESS Geneva Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}