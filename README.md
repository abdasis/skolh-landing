# Skolh Landing Page

Landing page marketing untuk aplikasi **Skolh** — platform manajemen sekolah modern.

Dibangun dengan Astro, tanpa framework CSS tambahan. Desain mengikuti gaya flat design modern dengan ilustrasi isometric SVG.

## Fitur

- Hero section dengan ilustrasi isometric SVG animasi
- Section klien (logo strip sekolah)
- Grid fitur aplikasi Skolh
- Alur cara kerja 4 langkah
- Testimoni dari pengguna
- CTA section & footer
- Responsive untuk semua ukuran layar
- Lucide icons (inline SVG, tanpa install)
- Pure CSS — tidak ada dependency Tailwind atau UI library

## Struktur Project

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Global styles & CSS variables
│   └── pages/
│       └── index.astro       # Halaman utama (semua section)
└── package.json
```

## Menjalankan Lokal

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:4321`

## Build

```bash
pnpm build
pnpm preview
```

Output build ada di folder `./dist/`.

## Tech Stack

- [Astro](https://astro.build) v6
- Pure CSS dengan custom properties
- Inline Lucide SVG icons
- Plus Jakarta Sans (Google Fonts)
