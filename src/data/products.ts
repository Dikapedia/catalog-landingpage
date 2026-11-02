import type { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'timeless-01',
    name: 'TIMELESS Chrono Cobalt',
    tagline: 'Deep Blue Sunray Dial & Navy Calfskin',
    category: 'Elegance',
    price: 3450000,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    dialColor: 'Cobalt Blue',
    caseSize: '39mm',
    strap: 'Italian Calfskin',
    description: 'Precision engineered automatic movement housed in brushed 316L stainless steel with double-domed sapphire crystal.'
  },
  {
    id: 'timeless-02',
    name: 'TIMELESS Heritage Gold',
    tagline: 'Rose Gold Case & Onyx Black Dial',
    category: 'Elegance',
    price: 4200000,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000',
    dialColor: 'Onyx Black',
    caseSize: '40mm',
    strap: 'Alligator Leather',
    description: 'A tribute to classic watchmaking. Hand-finished rose gold PVD bezel with exhibition crystal caseback.'
  },
  {
    id: 'timeless-03',
    name: 'TIMELESS Stealth Matte',
    tagline: 'All-Black DLC Coating & Titanium',
    category: 'Minimalist',
    price: 2900000,
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=1000',
    dialColor: 'Matte Charcoal',
    caseSize: '38mm',
    strap: 'Full Grain Leather',
    description: 'Monochromatic perfection crafted from aerospace-grade lightweight titanium for supreme comfort.'
  },
  {
    id: 'timeless-04',
    name: 'TIMELESS Pursuit Chrono',
    tagline: 'Silver Sunburst & Tachymeter Bezel',
    category: 'Sport',
    price: 3800000,
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1000',
    dialColor: 'Silver Sunburst',
    caseSize: '41mm',
    strap: 'Perforated Racing Leather',
    description: 'High-precision chronograph movement built to withstand extreme dynamic forces with 100m water resistance.'
  }
];
