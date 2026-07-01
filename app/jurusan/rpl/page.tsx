"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const fasilitasItems = [
  {
    id: 1,
    title: "Lab Komputer RPL 1",
    image: "/jurusan/rpl/fasilitas1.webp",
  },
  {
    id: 2,
    title: "Ruang Teori & Kolaborasi",
    image: "/jurusan/rpl/fasilitas2.webp",
  },
  {
    id: 3,
    title: "Lab Komputer RPL 2",
    image: "/jurusan/rpl/fasilitas3.webp",
  }
];

export default function JurusanRPL() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % fasilitasItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 font-sans transition-colors duration-300 pt-20">

      {/* Hero Banner Section */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden">
          <Image
            src="/banner/RPL-BANNER-BESAR.webp"
            alt="RPL Banner Besar"
            width={1440}
            height={950}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* RPL Department Detail Section */}
      <main className="flex-1 w-full">
        <section
          id="rpl"
          className="scroll-mt-24 relative overflow-hidden bg-white dark:bg-zinc-900 p-8 md:p-12 lg:p-16 "
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 w-full max-w-7xl scale-100 lg:scale-110 mx-auto h-full pointer-events-none select-none z-0 pt-5 lg:pt-20">
            <svg
              width="1550"
              height="250"
              viewBox="0 0 1550 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto object-cover"
            >
              <path
                d="M1186.19 230.607L1134.91 214.691L1174.34 178.239L1186.19 230.607Z"
                stroke="#C82222"
                strokeOpacity={0.21}
                strokeWidth={2}
              />
              <path
                d="M1037 166.348C1035.79 167.841 1033.41 167.459 1032.73 165.661L1024.08 142.975C1023.39 141.177 1024.91 139.31 1026.81 139.616L1050.78 143.469C1052.68 143.774 1053.54 146.022 1052.32 147.515L1037 166.348Z"
                stroke="#C82222"
                strokeOpacity={0.6}
                strokeWidth={3}
              />
              <path
                d="M1024.11 172.417C1022.17 174.806 1018.37 174.195 1017.27 171.318L1008.62 148.631C1007.52 145.754 1009.95 142.768 1012.99 143.257L1036.97 147.11C1040.01 147.598 1041.38 151.195 1039.43 153.583L1024.11 172.417Z"
                fill="#C82222"
                fillOpacity={0.09}
              />
              <path
                d="M1422.62 46.5741L1520.21 62.2582L1457.83 138.927L1422.62 46.5741Z"
                stroke="#C82222"
                strokeOpacity={0.82}
                strokeWidth={15}
              />
              <path
                d="M646.76 31.7482L708.986 41.7494L669.212 90.6383L646.76 31.7482Z"
                stroke="#C82222"
                strokeOpacity={0.82}
                strokeWidth={9}
              />
              <path
                d="M643.184 104.708C641.241 107.096 637.441 106.485 636.344 103.608L613.275 43.1001C612.178 40.2229 614.607 37.2372 617.648 37.7258L681.583 48.0018C684.624 48.4905 685.995 52.087 684.052 54.4755L643.184 104.708Z"
                fill="#C82222"
                fillOpacity={0.09}
              />
              <circle
                cx={28.5}
                cy={48.1982}
                r={23}
                stroke="#C82222"
                strokeOpacity={0.43}
                strokeWidth={11}
              />
            </svg>
          </div>

          {/* Layout Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">

              {/* Badge */}
              <div>
                <span className="inline-block bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full select-none">
                  PROGRAM KEAHLIAN RPL
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase mt-4 mb-6 leading-tight select-none tracking-tight">
                REKAYASA PERANGKAT LUNAK
              </h2>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                Program Keahlian Rekayasa Perangkat Lunak (RPL) di SMKN 6 Jember merupakan salah satu konsentrasi pada Program Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG) yang membekali peserta didik dengan kemampuan merancang, membuat, mengembangkan, menguji, hingga memelihara perangkat lunak sesuai standar industri. Program ini dirancang untuk mencetak lulusan yang kompeten, kreatif, inovatif, dan siap menghadapi kebutuhan dunia kerja maupun melanjutkan pendidikan di bidang teknologi informasi.
              </p>

              {/* Divider Line */}
              <hr className="border-t border-zinc-200 dark:border-zinc-800 mb-8" />

              {/* Info Grid (Kompetensi Keahlian & Peluang Karir) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">

                {/* Kompetensi Keahlian */}
                <div>
                  <h3 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm md:text-base mb-4 flex items-center gap-2 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block shrink-0" />
                    Kompetensi Keahlian
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Pemrograman Web & Mobile (HTML, CSS, JS, React, Flutter)</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Pengembangan Basis Data (MySQL, PostgreSQL)</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Desain UI/UX & Prototipe Aplikasi</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Software Quality Assurance & Testing</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Pemrograman Berorientasi Objek (OOP)</span>
                    </li>
                  </ul>
                </div>

                {/* Peluang Karir */}
                <div>
                  <h3 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm md:text-base mb-4 flex items-center gap-2 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block shrink-0" />
                    Peluang Karir
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Web Developer / Programmer</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Mobile App Developer</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Database Administrator</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>UI/UX Designer</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>IT Consultant / Entrepreneur</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Right Column: Visual Elements */}
            <div className="lg:col-span-6 flex items-center justify-center relative w-full order-1 lg:order-2">
              <Image
                src="/jurusan/rpl/kanan.webp"
                alt="Rekayasa Perangkat Lunak Visuals"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <div className="bg-zinc-50 dark:bg-zinc-950 py-16 relative overflow-hidden transition-colors duration-300">

          <div id="virtual-tour" className="w-full flex flex-col items-center scroll-mt-16 relative z-10">
            <div className="text-center px-6 max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center px-5 py-2 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 text-[13px] font-bold rounded-full mb-5 select-none">
                Fasilitas
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[42px] font-bold text-zinc-900 dark:text-white leading-tight tracking-tight select-none">
                Fasilitas Jurusan RPL
              </h2>
            </div>
          </div>

          {/* Carousel Container */}
          <div
            className="relative z-10 w-full mx-auto px-4 md:px-8 py-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Track */}
            <div className="relative h-[320px] sm:h-[450px] md:h-[500px] w-full flex items-center justify-center overflow-visible">
              {fasilitasItems.map((item, index) => {
                let position = 999;
                if (index === activeIndex) {
                  position = 0;
                } else if (index === (activeIndex - 1 + fasilitasItems.length) % fasilitasItems.length) {
                  position = -1;
                } else if (index === (activeIndex + 1) % fasilitasItems.length) {
                  position = 1;
                }

                const isActive = position === 0;
                const isLeft = position === -1;
                const isRight = position === 1;

                let cardStyle = "";
                if (isActive) {
                  cardStyle = "z-30 scale-100 translate-x-0 opacity-100 pointer-events-auto cursor-default";
                } else if (isLeft) {
                  cardStyle = "z-10 scale-80 -translate-x-[25%] sm:-translate-x-[35%] md:-translate-x-[40%] lg:-translate-x-[100%] -rotate-10 opacity-70 hover:opacity-90 pointer-events-auto cursor-pointer";
                } else if (isRight) {
                  cardStyle = "z-10 scale-80 translate-x-[25%] sm:translate-x-[35%] md:translate-x-[40%] lg:translate-x-[100%] rotate-10 opacity-70 hover:opacity-90 pointer-events-auto cursor-pointer";
                } else {
                  cardStyle = "z-0 scale-50 opacity-0 pointer-events-none";
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => !isActive && setActiveIndex(index)}
                    className={`absolute transition-all duration-500 ease-out w-[80%] max-w-[520px] sm:max-w-[680px] md:max-w-[780px] ${cardStyle}`}
                  >
                    {/* Scalloped Card Wrapper with Shadow */}
                    <div className="relative filter aspect-[4/3] w-full p-8 sm:p-12 md:p-24">
                      {/* Wavy SVG Background */}
                      <Image
                        src="/jurusan/Union.svg"
                        alt="Fasilitas Background Frame"
                        fill
                        className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none"
                        priority
                      />

                      {/* Image Content Container with Shadow */}
                      <div className="relative z-10 w-full h-full">
                        {/* Dark shadow layer (only for active card) */}
                        {isActive && (
                          <div
                            className="absolute inset-0 w-full h-full translate-x-2 translate-y-2 lg:translate-x-5 lg:translate-y-5 bg-zinc-800/40 dark:bg-zinc-950/80 z-0"
                            style={{
                              maskImage: "url(/jurusan/Union-mask.svg)",
                              WebkitMaskImage: "url(/jurusan/Union-mask.svg)",
                              maskSize: "100% 100%",
                              WebkitMaskSize: "100% 100%",
                              maskRepeat: "no-repeat",
                              WebkitMaskRepeat: "no-repeat",
                            }}
                          />
                        )}

                        {/* Image itself */}
                        <div
                          className="relative z-10 w-full h-full overflow-hidden"
                          style={{
                            maskImage: "url(/jurusan/Union-mask.svg)",
                            WebkitMaskImage: "url(/jurusan/Union-mask.svg)",
                            maskSize: "100% 100%",
                            WebkitMaskSize: "100% 100%",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                          }}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 80vw, 600px"
                            className="object-cover transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-3 mt-12 sm:mt-16">
              {fasilitasItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${activeIndex === index
                    ? "bg-[#65C4FF] scale-110 shadow-sm"
                    : "bg-transparent border-2 border-[#65C4FF]/60 hover:border-[#65C4FF]"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}
