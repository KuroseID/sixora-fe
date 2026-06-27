"use client";

import Image from "next/image";

const partnerLogos = [
  { id: 1, src: "/rpl.webp", alt: "Rekayasa Perangkat Lunak" },
  { id: 2, src: "/bd.webp", alt: "Bisnis Digital" },
  { id: 3, src: "/tefa.webp", alt: "Teaching Factory" },
  { id: 4, src: "/studio6.webp", alt: "Studio 6" },
  { id: 5, src: "/energi6.webp", alt: "Energi 6" },
  { id: 6, src: "/blud.webp", alt: "BLUD" },
];

const features = [
  {
    number: "01",
    title: "Kerja Sama Industri",
    description:
      "SMK Negeri 6 Jember menjalin kemitraan dengan berbagai dunia industri untuk mendukung pembelajaran, pengembangan kompetensi, serta kesiapan lulusan.",
  },
  {
    number: "02",
    title: "Praktik Kerja Lapangan (PKL)",
    description:
      "Siswa melaksanakan Praktik Kerja Lapangan (PKL) di perusahaan mitra untuk memperoleh pengalaman kerja nyata sesuai dengan kompetensi keahlian masing-masing.",
  },
  {
    number: "03",
    title: "Sertifikasi Kompetensi",
    description:
      "Mempersiapkan siswa memperoleh sertifikasi kompetensi sebagai bekal memasuki dunia kerja.",
  },
];

export default function MitraIndustriSection() {
  const repeatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
      {/* Partner Logo Carousel */}
      <div className="relative overflow-hidden mb-14">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-x-hidden group/marquee">
          <div className="flex animate-marquee-slow group-hover/marquee:[animation-play-state:paused]">
            {[0, 1].map((trackIdx) => (
              <div
                key={trackIdx}
                className="flex shrink-0 items-center gap-10 sm:gap-14 px-5"
              >
                {repeatedLogos.map((logo, idx) => (
                  <div
                    key={`${trackIdx}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center bg-white border border-slate-100 rounded-full px-6 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-105"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={140}
                      height={48}
                      className="h-8 sm:h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="group relative bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_40px_rgba(101,196,255,0.12)] hover:border-primary/20 transition-all duration-400 hover:-translate-y-1"
          >
            {/* Number badge */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-black text-lg mb-5">
              {feature.number}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
              {feature.title}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
