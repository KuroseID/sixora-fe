"use client";

import { useState } from "react";
import Image from "next/image";

interface SlideData {
  id: number;
  src: string;
  alt: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    src: "/epim-harapan-1.webp",
    alt: "Epim Harapan 1",
  },
  {
    id: 2,
    src: "/epim.webp",
    alt: "Epim",
  },
  {
    id: 3,
    src: "/tax.webp",
    alt: "tax",
  },
  {
    id: 4,
    src: "/lks.webp",
    alt: "Lks",
  },
  {
    id: 5,
    src: "/lks-1.webp",
    alt: "LKs",
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

  return (
    <div className="relative w-full pt-20 overflow-hidden bg-white px-4 md:px-8 flex flex-col items-center justify-center min-h-[580px] rounded-3xl">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 bg-[url('/prestasi-bg.webp')] bg-[size:auto_100%] bg-center bg-no-repeat"
      />

      {/* Main 3D Card Stack Slider Container */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-center relative h-[360px] md:h-[400px] z-10 overflow-visible">
        {slides.map((slide, idx) => {
          // Calculate circular offset
          let offset = idx - activeIndex;
          if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
          if (offset > Math.floor(slides.length / 2)) offset -= slides.length;

          let positionStyle = "";
          let zIndex = 0;
          let opacity = 0;
          let transform = "";

          // if (offset === 0) {
          //   // Center slide (Active)
          //   positionStyle = "translate-x-0 scale-100 z-30 opacity-100";
          //   zIndex = 30;
          //   opacity = 1;
          // } else if (offset === 1) {
          //   // Right slide (Faded/Background)
          //   positionStyle = "translate-x-[60%] sm:translate-x-[75%] md:translate-x-[90%] scale-75 z-10 opacity-40 hover:opacity-60 translate-y-[20%]";
          //   zIndex = 10;
          //   opacity = 0.4;
          // } else if (offset === 2) {
          //   // Left slide (Faded/Background)
          //   positionStyle = "-translate-x-[60%] sm:-translate-x-[75%] md:-translate-x-[90%] scale-75 z-10 opacity-40 hover:opacity-60 -translate-y-[20%]";
          //   zIndex = 10;
          //   opacity = 0.4;
          // }
          if (offset === 0) {
            // Center slide (Active)
            positionStyle = "translate-x-0 scale-100 z-30 opacity-100";
            // transform = "rotate(-2deg)";
            zIndex = 30;
            opacity = 1;
          } else if (offset === 1) {
            // Right slide (Faded/Background)
            positionStyle = "translate-x-[60%] sm:translate-x-[75%] md:translate-x-[90%] scale-75 z-10 opacity-40 hover:opacity-60 translate-y-[20%]";
            transform = "rotate(4deg)";
            zIndex = 10;
            opacity = 0.4;
          } else if (offset === -1) {
            // Left slide (Faded/Background)
            positionStyle = "-translate-x-[60%] sm:-translate-x-[75%] md:-translate-x-[90%] scale-75 z-10 opacity-40 hover:opacity-60 -translate-y-[20%]";
            transform = "rotate(-6deg)";
            zIndex = 10;
            opacity = 0.4;
          } else {
            // Out of bounds slides (Hidden)
            positionStyle = "translate-x-0 scale-75 z-0 opacity-0 pointer-events-none";
            zIndex = 0;
            opacity = 0;
          }

          return (
            <div
              key={slide.id}
              onClick={() => {
                if (offset === 1) nextSlide();
                if (offset === -1) prevSlide();
              }}
              style={{
                zIndex: zIndex,
                opacity: opacity,
                transform: `${transform}`,
              }}
              className={`absolute w-[330px] md:w-[370px] h-[400px] md:h-[450px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out select-none flex-shrink-0 ${positionStyle}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Indicators & Arrow Controls */}
      <div className="flex items-center gap-6 mt-12 mb-7 z-10">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="text-white transition-colors duration-200 cursor-pointer focus:outline-none"
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
                : "bg-transparent border-2 border-white"
                }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="text-white transition-colors duration-200 cursor-pointer focus:outline-none"
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
    </div >
  );
}
