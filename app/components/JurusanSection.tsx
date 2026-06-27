"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface Department {
  title: string;
  shortName: string;
  description: string;
  image: string;
}

const departments: Department[] = [
  {
    title: "Rekayasa Perangkat Lunak",
    shortName: "RPL",
    description: "Mempelajari pengembangan perangkat lunak, website, aplikasi mobile, dan basis data dengan pendekatan berbasis proyek untuk mencetak talenta digital yang siap kerja dan berdaya saing.",
    image: "/Union.webp"
  },
  {
    title: "Desain Komunikasi Visual",
    shortName: "DKV",
    description: "Mengembangkan kreativitas di bidang videografi, fotografi, desain grafis, ilustrasi, dan media digital interaktif untuk menghasilkan karya seni visual yang bernilai tinggi.",
    image: "/Union.webp"
  },
  {
    title: "Akuntansi & Keuangan Lembaga",
    shortName: "AKL",
    description: "Membekali siswa dengan keterampilan akuntansi keuangan, administrasi pajak, perbankan, dan aplikasi keuangan komputer untuk kebutuhan industri modern.",
    image: "/Union.webp"
  },
  {
    title: "Manajemen Perkantoran",
    shortName: "MPLB",
    description: "Mempelajari pengelolaan administrasi perkantoran, manajemen kearsipan, komunikasi bisnis, dan pelayanan pelanggan berbasis teknologi digital.",
    image: "/Union.webp"
  },
  {
    title: "Pemasaran & Bisnis Digital",
    shortName: "PM",
    description: "Mempelajari strategi bisnis digital, pemasaran ritel, pengelolaan media sosial bisnis, serta analisis pasar untuk mencetak wirausahawan mandiri.",
    image: "/Union.webp"
  },
  {
    title: "Kriya Kreatif Batik & Tekstil",
    shortName: "KKBT",
    description: "Melestarikan budaya bangsa melalui pembelajaran teknik membatik, desain tekstil, tenun, sablon, serta pembuatan produk kriya kreatif bernilai estetis.",
    image: "/Union.webp"
  }
];

export default function JurusanCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = departments.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const getCardStyles = (offset: number) => {
    if (offset === 0) {
      return "z-30 rotate-0 translate-x-0 scale-95 md:scale-100 opacity-100 pointer-events-auto";
    }
    if (offset === -1) {
      return "z-20 -rotate-20 -translate-x-[55%] sm:-translate-x-[60%] lg:-translate-x-[90%] translate-y-6 sm:translate-y-8 lg:translate-y-45 scale-80 sm:scale-[0.85] lg:scale-90 pointer-events-auto cursor-pointer";
    }
    if (offset === 1) {
      return "z-20 rotate-20 translate-x-[55%] sm:translate-x-[60%] lg:translate-x-[90%] translate-y-6 sm:translate-y-8 lg:translate-y-45 scale-80 sm:scale-[0.85] lg:scale-90 pointer-events-auto cursor-pointer";
    }
    return "z-10 rotate-0 translate-x-0 scale-75 opacity-0 pointer-events-none";
  };

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Blue Background Slider Section */}
      <div className="w-full bg-primary py-16 md:py-24 px-4 md:px-8 relative overflow-hidden flex justify-center items-center min-h-[460px] sm:min-h-[520px] md:min-h-[580px]">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 pointer-events-none select-none z-0 bg-[url('/jurusan-bg.webp')] bg-[size:auto_100%] bg-center bg-no-repeat mix-blend-overlay"
        />

        {/* Top-Right "Lihat Selengkapnya" Link aligned with max-w-7xl */}
        <div className="absolute inset-x-0 top-0 w-full max-w-7xl mx-auto px-6 lg:px-8 pointer-events-none h-full z-40">
          <Link
            href="/jurusan"
            className="gap-2 absolute top-6 right-6 md:top-8 md:right-8 lg:right-8 text-white hover:text-zinc-100 font-bold text-sm sm:text-[15px] flex items-center gap-1.5 transition-all duration-200 group pointer-events-auto underline underline-offset-4 decoration-white/70 hover:decoration-white"
          >
            <span>Lihat Selengkapnya</span>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.444114 0.420946C0.303332 0.553514 0.191641 0.710979 0.115433 0.884327C0.0392265 1.05768 0 1.2435 0 1.43118C0 1.61885 0.0392265 1.80468 0.115433 1.97802C0.191641 2.15137 0.303332 2.30884 0.444114 2.4414L6.33639 8.00125L0.444114 13.5611C0.160165 13.829 0.000643035 14.1924 0.000643035 14.5713C0.000643035 14.9502 0.160165 15.3136 0.444114 15.5816C0.728064 15.8495 1.11318 16 1.51475 16C1.91631 16 2.30143 15.8495 2.58538 15.5816L9.55589 9.00431C9.69667 8.87175 9.80836 8.71428 9.88457 8.54093C9.96078 8.36758 10 8.18175 10 7.99408C10 7.80641 9.96078 7.62058 9.88457 7.44724C9.80836 7.27389 9.69667 7.11642 9.55589 6.98385L2.58538 0.406617C2.0083 -0.137904 1.03638 -0.137904 0.444114 0.420946Z" fill="white" />
            </svg>
          </Link>
        </div>

        {/* Navigation Buttons Container */}
        <div className="max-w-4xl items-center mx-auto absolute pb-60 lg:pb-30 inset-x-4 md:inset-x-8 lg:inset-x-24 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none z-40">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="w-24 h-24 rounded-full bg-white text-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all pointer-events-auto"
            aria-label="Previous department"
          >
            <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="131" y="131" width="131" height="131" rx="65.5" transform="rotate(-180 131 131)" fill="white" />
              <path d="M37 65.686L37 60.814L56.908 40.2235L61.934 45.0886L47.745 59.75L96.5 59.7501L96.5 66.7501L47.7695 66.75L61.934 81.3276L56.915 86.2066L37 65.686Z" fill="#65C4FF" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="w-24 h-24 rounded-full text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all pointer-events-auto"
            aria-label="Next department"
          >
            <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="131" height="131" rx="65.5" fill="#0896D1" />
              <path d="M94 65.314V70.186L74.092 90.7765L69.066 85.9115L83.255 71.25H34.5V64.25H83.2305L69.066 49.6725L74.085 44.7935L94 65.314Z" fill="white" />
            </svg>

          </button>
        </div>

        <div className="relative w-full pt-52 max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[340px] sm:h-[390px] md:h-[430px] flex items-center justify-center overflow-visible z-20">
          {departments.map((dept, index) => {
            // Calculate circular offset
            let offset = index - currentIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const styleClass = getCardStyles(offset);

            return (
              <div
                key={dept.shortName}
                onClick={() => {
                  if (offset === -1) prevSlide();
                  if (offset === 1) nextSlide();
                }}
                className={`p-6 sm:p-8 pt-8 sm:pt-10 absolute w-full h-auto bg-white rounded-tr-4xl rounded-tl-4xl flex flex-col items-center justify-start overflow-hidden transition-all duration-500 ease-in-out ${styleClass}`}
              >
                {/* Department Description (Top) */}
                <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed text-center font-medium line-clamp-6 select-none">
                  {dept.description}
                </p>

                {/* Department Title (Middle) */}
                <h3 className="text-slate-900 font-extrabold text-sm sm:text-base md:text-lg mt-2 sm:mt-4 text-center select-none">
                  {dept.title}
                </h3>

                <div className="relative w-full h-[150px] sm:h-[180px] md:h-[220px] flex-shrink-0 mt-4">
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            );
          })}
          <div className="h-120"></div>
        </div>
      </div>
    </div>
  );
}
