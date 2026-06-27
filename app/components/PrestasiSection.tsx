"use client";

import { useState } from "react";
import Image from "next/image";

interface SlideData {
  id: number;
  type: "paskib" | "fotografi" | "web";
  title: string;
  subtitle?: string;
  meta: string;
  name?: string;
  details?: string[];
  teamName?: string;
  bgColorClass: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    type: "paskib",
    title: "Selamat Juara",
    subtitle: "TEAM PASKIB SMKN 6 JEMBER",
    meta: "LKBB KHASAN MUJAHID SEASON 4 Tahun 2025\nTingkat Jawa Timur",
    bgColorClass: "bg-gradient-to-br from-teal-700 via-cyan-800 to-green-600",
    details: [
      "Juara harapan 1",
      "Juara bina 2 dan 3",
      "Best base camp juara 2",
      "Best kostum juara 1 tim B",
      "Best kostum juara 3 tim C",
      "Best make up 1 dan 2 Tim B dan C",
      "Best supporter juara 2",
      "Best farvor juara harapan 1 Tim B",
      "Juara farvor madya 3 Tim C",
    ],
    teamName: "PASKNAM",
  },
  {
    id: 2,
    type: "fotografi",
    title: "JUARA 2 FOTOGRAFI",
    subtitle: "SELAMAT & SUKSES",
    meta: "FLS2N TINGKAT KABUPATEN JEMBER TAHUN 2026",
    name: "DICO DWI PRASETYA KELAS XI DKV 1",
    bgColorClass: "bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600",
    details: ["TIM DKV - SMK NEGERI 6 JEMBER"],
  },
  {
    id: 3,
    type: "web",
    title: "JUARA 1 WEB TECHNOLOGIES",
    subtitle: "CONGRATULATIONS",
    meta: "LKS TINGKAT PROVINSI JAWA TIMUR TAHUN 2025",
    name: "AHMAD REZA KELAS XII RPL 2",
    bgColorClass: "bg-gradient-to-br from-indigo-700 via-violet-800 to-purple-600",
    details: ["TIM RPL - SMK NEGERI 6 JEMBER"],
  },
];

export default function PrestasiSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderCardContent = (slide: SlideData) => {
    if (slide.type === "paskib") {
      return (
        <div className="w-full h-full flex flex-col justify-between p-6 relative overflow-hidden text-white">
          {/* Header */}
          <div className="z-10">
            <h4 className="text-4xl font-extrabold tracking-tight leading-none mb-1">
              {slide.title}
            </h4>
            <p className="text-[13px] font-black tracking-wider text-green-300 uppercase mb-3">
              {slide.subtitle}
            </p>
            <p className="text-[10px] text-white/90 whitespace-pre-line leading-relaxed max-w-[200px]">
              {slide.meta}
            </p>
          </div>

          {/* Body Content (Left Side Details / Tilted Badge) */}
          <div className="z-10 flex flex-col items-start mt-2">
            <div className="bg-yellow-500 text-slate-900 font-black text-[9px] uppercase px-3 py-1 rounded rotate-[-6deg] mb-3 inline-block shadow-sm">
              Kategori Juara
            </div>
            <ul className="text-[8px] space-y-0.5 text-white/90 list-disc pl-3 font-semibold">
              {slide.details?.map((detail, idx) => (
                <li key={idx} className="leading-tight">
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Tag Name */}
          <div className="z-10 self-end mt-4">
            <div className="bg-cyan-900/60 backdrop-blur-sm border border-cyan-400/30 text-cyan-200 font-extrabold text-[12px] px-6 py-1.5 rounded-full tracking-wider">
              {slide.teamName}
            </div>
          </div>

          {/* Right Side Graphics (Double Hexagon Photo frame) */}
          <div className="absolute right-4 top-6 w-[180px] h-[210px] z-0">
            {/* Hexagon 1: Trophies */}
            <div className="absolute -top-2 right-2 w-28 h-28 overflow-hidden bg-slate-800/80 border-2 border-green-400 rotate-12 rounded-xl flex items-center justify-center shadow-lg">
              <div className="rotate-[-12deg] text-center p-2">
                <span className="text-2xl">🏆</span>
                <p className="text-[7px] font-bold text-green-300 mt-1 uppercase">TROPHIES</p>
              </div>
            </div>

            {/* Hexagon 2: Team */}
            <div className="absolute top-20 -right-4 w-40 h-28 overflow-hidden bg-slate-900/80 border-2 border-cyan-400 rotate-[-8deg] rounded-xl flex items-center justify-center shadow-lg">
              <div className="rotate-[8deg] text-center p-2">
                <span className="text-2xl">👥</span>
                <p className="text-[8px] font-bold text-cyan-300 mt-1 uppercase">TEAM PASKIB</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Fotografi & Web Templates (using the graphic style from the screenshot)
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 relative overflow-hidden text-white">
        {/* Top Header */}
        <div className="z-10 flex flex-col items-center text-center mt-2">
          <p className="text-[12px] font-bold tracking-widest text-sky-100/80 uppercase">
            {slide.subtitle}
          </p>
          <h4 className="text-2xl font-black tracking-tight mt-1 bg-white/10 px-4 py-1.5 rounded-lg border border-white/20">
            {slide.title}
          </h4>
        </div>

        {/* Center Graphic */}
        <div className="z-10 flex flex-col items-center justify-center my-4">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center shadow-inner border border-white/30 backdrop-blur-sm animate-pulse">
            <span className="text-3xl">{slide.type === "fotografi" ? "📷" : "💻"}</span>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="z-10 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <p className="text-[10px] font-extrabold text-sky-300 uppercase tracking-wider">
            {slide.meta}
          </p>
          <p className="text-[12px] font-bold text-white mt-1.5 uppercase">
            {slide.name}
          </p>
          <p className="text-[9px] text-white/70 mt-1 uppercase font-semibold">
            {slide.details?.[0]}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full overflow-hidden bg-white py-16 px-4 md:px-8 flex flex-col items-center justify-center min-h-[580px] rounded-3xl shadow-inner">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 bg-[url('/prestasi-bg.webp')] bg-[size:auto_100%] bg-center bg-no-repeat"
      />

      {/* Main 3D Card Stack Slider Container */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-center relative h-[360px] md:h-[400px] z-10 overflow-visible">
        {slides.map((slide, idx) => {
          // Calculate active state and positioning relative to activeIndex
          const offset = (idx - activeIndex + slides.length) % slides.length;

          let positionStyle = "";
          let zIndex = 0;
          let opacity = 0;
          let transform = "";

          if (offset === 0) {
            // Center slide (Active)
            positionStyle = "translate-x-0 scale-100 z-30 opacity-100";
            transform = "rotate(-2deg)";
            zIndex = 30;
            opacity = 1;
          } else if (offset === 1) {
            // Right slide (Faded/Background)
            positionStyle = "translate-x-[60%] sm:translate-x-[75%] md:translate-x-[90%] scale-75 z-10 opacity-40 hover:opacity-60";
            transform = "rotate(4deg)";
            zIndex = 10;
            opacity = 0.4;
          } else if (offset === 2) {
            // Left slide (Faded/Background)
            positionStyle = "-translate-x-[60%] sm:-translate-x-[75%] md:-translate-x-[90%] scale-75 z-10 opacity-40 hover:opacity-60";
            transform = "rotate(-6deg)";
            zIndex = 10;
            opacity = 0.4;
          }

          return (
            <div
              key={slide.id}
              onClick={() => {
                if (offset !== 0) {
                  setActiveIndex(idx);
                }
              }}
              style={{
                zIndex: zIndex,
                opacity: opacity,
                transform: `${transform}`,
              }}
              className={`absolute w-[320px] md:w-[350px] h-[340px] md:h-[370px] rounded-3xl ${slide.bgColorClass} shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-slate-700/30 overflow-hidden cursor-pointer transition-all duration-700 ease-out select-none flex-shrink-0 ${positionStyle}`}
            >
              {renderCardContent(slide)}
            </div>
          );
        })}
      </div>

      {/* Navigation Indicators & Arrow Controls */}
      <div className="flex items-center gap-6 mt-10 z-10">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="text-white hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none"
        >
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 9L9 17M1 9H27"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Page Dots Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${activeIndex === idx
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
                }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="text-white hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none"
        >
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 1L27 9L19 17M27 9H1"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
