import { Sparkles, ShieldCheck, Watch } from 'lucide-react';

const FEATURES = [
  {
    icon: Watch,
    title: 'Swiss Automatic Caliber',
    description: 'Hand-assembled in Geneva with a 42-hour power reserve and bespoke rotor engraving.'
  },
  {
    icon: ShieldCheck,
    title: 'Domed Sapphire Crystal',
    description: 'Scratch-resistant sapphire glass with anti-reflective coating on both sides for supreme clarity.'
  },
  {
    icon: Sparkles,
    title: 'Bespoke Monogramming',
    description: 'Personalize your timepiece with custom caseback engravings and choice of custom straps.'
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-[#0e1118] py-20 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center p-6 space-y-4">
              <div className="p-4 border border-white/10 rounded-full bg-white/5">
                <Icon className="w-6 h-6 text-slate-300" />
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl tracking-wide text-white">{title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
