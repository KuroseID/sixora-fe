"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FacilityItem {
  id: number;
  title: string;
  image: string;
  desc?: string;
}

interface FacilitiesCarouselProps {
  id?: string;
  badgeText?: string;
  title: string;
  items: FacilityItem[];
  accentColor?: string; // e.g., "#65C4FF"
  badgeClass?: string;  // e.g., "bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400"
}

export default function FacilitiesCarousel({
  id = "virtual-tour",
  badgeText = "Fasilitas",
  title,
  items,
  accentColor = "#65C4FF",
  badgeClass = "bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400",
}: FacilitiesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, items.length]);

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16 relative overflow-hidden transition-colors duration-300">
      
      <div id={id} className="w-full flex flex-col items-center scroll-mt-16 relative z-10">
        <div className="text-center px-6 max-w-4xl mx-auto mb-12">
          <div className={`inline-flex items-center justify-center px-5 py-2 text-[13px] font-bold rounded-full mb-5 select-none ${badgeClass}`}>
            {badgeText}
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[42px] font-bold text-zinc-900 dark:text-white leading-tight tracking-tight select-none">
            {title}
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
          {items.map((item, index) => {
            let position = 999;
            if (index === activeIndex) {
              position = 0;
            } else if (index === (activeIndex - 1 + items.length) % items.length) {
              position = -1;
            } else if (index === (activeIndex + 1) % items.length) {
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
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                backgroundColor: activeIndex === index ? accentColor : "transparent",
                borderColor: activeIndex === index ? "transparent" : `${accentColor}99`,
              }}
              className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                activeIndex === index ? "scale-110 shadow-sm" : "hover:border-opacity-100 cursor-pointer"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
