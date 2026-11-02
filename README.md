# TIMELESS — Catalog Landing Page

Landing page katalog jam tangan **TIMELESS**, dibangun dengan React + TypeScript + Tailwind CSS + Vite.

## Fitur

- Hero section full-screen dengan CTA ke katalog
- Katalog produk dengan filter kategori (Elegance / Sport / Minimalist)
- Live search — hasil muncul langsung saat mengetik
- Quick view modal untuk detail produk
- Shopping bag (cart drawer) dengan update quantity
- Responsive di semua ukuran layar
- Newsletter subscription section

## Tech Stack

| Teknologi | Versi |
|-----------|-------|
| React | 19 |
| TypeScript | 6 |
| Tailwind CSS | 4 |
| Vite | 8 |
| Lucide React | Icons |

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

| Command | Keterangan |
|---------|------------|
| `npm run dev` | Development server |
| `npm run build` | TypeScript check + production build |
| `npm run lint` | Lint dengan oxlint |
| `npm run preview` | Preview production build |

## Struktur

```
src/
├── components/    # UI components (Header, Hero, Collection, Cart, dll)
├── data/          # Data produk katalog
├── hooks/         # Custom hooks (useCart, useGoogleFonts)
├── types/         # TypeScript types
└── assets/        # Gambar
```
