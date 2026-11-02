import hero from '../assets/hero.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">

      {/* Background Image Container matching original look */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Hero"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.1] scale-105"
        />
        {/* Subtle gradient overlays to match image aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-transparent to-[#0b0d12]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d12]/80 via-transparent to-[#0b0d12]/40" />
      </div>

      {/* Hero Main Content Layout */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 min-h-[calc(100vh-5rem)] flex flex-col justify-between">

        {/* Top Floating Left Card / Text Overlay */}
        <div className="max-w-md mt-6 sm:mt-10 bg-[#0b0d12]/40 backdrop-blur-sm p-6 sm:p-8 border border-white/10 rounded-none shadow-2xl">
          <p className="text-sm sm:text-base leading-relaxed text-slate-200 tracking-wide font-light mb-8">
            Precision engineering, refined materials, and timeless design crafted into a watch made to move through life with you.
          </p>

          <a
            href="#collection"
            className="inline-block border border-white/40 px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Discover the Collection
          </a>
        </div>

        {/* Bottom Huge Hero Typography Overlaying Image */}
        <div className="mt-auto pt-16">
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl sm:text-7xl lg:text-9xl tracking-tight text-white font-normal leading-none drop-shadow-lg select-none">
            Time, Made Personal
          </h1>
        </div>

      </div>
    </section>
  );
}
