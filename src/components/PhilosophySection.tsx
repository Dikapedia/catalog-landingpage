
export function PhilosophySection() {
  return (
    <section className="relative py-28 bg-[#090b0e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=1200"
              alt="Watchmaker Craftsmanship"
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-xs tracking-[0.3em] uppercase text-slate-400">Atelier Geneva</span>
              <p className="font-['Cormorant_Garamond',serif] text-2xl mt-1">Every component hand-polished to perfection.</p>
            </div>
          </div>

          <div className="space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-medium">Philosophy</span>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-6xl text-white leading-tight">
              Designed for those who set their own tempo.
            </h2>

            <div className="space-y-4 text-slate-300 font-light text-base leading-relaxed">
              <p>
                TIMELESS was founded on a singular belief: a timepiece should not merely measure time, but anchor you in your most significant moments.
              </p>
              <p>
                Constructed with surgical-grade steel, sapphire crystal, and Swiss automatic movements, each piece undergoes over 300 hours of precision testing before receiving our hallmark seal.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10">
              <div>
                <span className="font-['Cormorant_Garamond',serif] text-3xl text-white block">500m</span>
                <span className="text-xs text-slate-400 tracking-wider uppercase">Depth Rating Tested</span>
              </div>
              <div>
                <span className="font-['Cormorant_Garamond',serif] text-3xl text-white block">5 Years</span>
                <span className="text-xs text-slate-400 tracking-wider uppercase">International Warranty</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
