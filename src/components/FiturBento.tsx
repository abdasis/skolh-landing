import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

// Inline SVG icon components untuk menghindari dependency tambahan
const IconGraduation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const IconCalendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

const IconUsers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconBuilding = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="16" height="20" x="4" y="2" rx="2"/>
    <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
  </svg>
);

const IconPen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
    <path d="m15 5 4 4"/>
  </svg>
);

const IconPalette = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2"/>
  </svg>
);

// Background dekoratif per card
const BgBlob = ({ color }: { color: string }) => (
  <div className="absolute inset-0 overflow-hidden rounded-xl">
    <div
      className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-10 blur-3xl"
      style={{ background: color }}
    />
  </div>
);

const features = [
  {
    name: "SPMB Online",
    description: "Sistem Penerimaan Murid Baru lengkap dengan custom field, status tracking, dan ekspor PDF.",
    Icon: IconGraduation,
    className: "col-span-3 lg:col-span-2",
    background: <BgBlob color="#5b6cff" />,
    href: "#cta",
    cta: "Pelajari lebih lanjut",
  },
  {
    name: "Agenda & Pengumuman",
    description: "Kelola agenda sekolah dan pengumuman dengan lampiran file untuk diakses publik.",
    Icon: IconCalendar,
    className: "col-span-3 lg:col-span-1",
    background: <BgBlob color="#2ed3a6" />,
    href: "#cta",
    cta: "Pelajari lebih lanjut",
  },
  {
    name: "Manajemen Siswa & Alumni",
    description: "Data siswa aktif dan profil alumni terorganisir dengan baik dalam satu sistem.",
    Icon: IconUsers,
    className: "col-span-3 lg:col-span-1",
    background: <BgBlob color="#ff7a59" />,
    href: "#cta",
    cta: "Pelajari lebih lanjut",
  },
  {
    name: "Profil Sekolah",
    description: "Visi misi, fasilitas, ekstrakurikuler, prestasi, dan struktur organisasi yang lengkap.",
    Icon: IconBuilding,
    className: "col-span-3 lg:col-span-2",
    background: <BgBlob color="#8b5cf6" />,
    href: "#cta",
    cta: "Pelajari lebih lanjut",
  },
  {
    name: "CMS Artikel & Galeri",
    description: "Publikasikan artikel dengan editor kaya dan kelola galeri foto kegiatan sekolah.",
    Icon: IconPen,
    className: "col-span-3 lg:col-span-1",
    background: <BgBlob color="#ffb547" />,
    href: "#cta",
    cta: "Pelajari lebih lanjut",
  },
  {
    name: "Multi Tema",
    description: "Pilih tema yang sesuai identitas sekolah Anda dengan kustomisasi warna dan layout.",
    Icon: IconPalette,
    className: "col-span-3 lg:col-span-2",
    background: <BgBlob color="#ff6b9d" />,
    href: "#cta",
    cta: "Pelajari lebih lanjut",
  },
];

const FiturBento = () => {
  return (
    <BentoGrid className="grid-cols-3">
      {features.map((f) => (
        <BentoCard key={f.name} {...f} />
      ))}
    </BentoGrid>
  );
};

export default FiturBento;
