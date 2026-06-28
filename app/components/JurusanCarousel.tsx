"use client";

import Image from "next/image";

interface JurusanCarouselProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function JurusanCarousel({ activeIndex, onSelect }: JurusanCarouselProps) {
  const logos = [
    { id: 1, src: "/rpl.webp", alt: "Rekayasa Perangkat Lunak" },
    { id: 5, src: "/dkv.webp", alt: "Desain Komunikasi Visual" },
    { id: 3, src: "/ak.webp", alt: "Akuntansi" },
    { id: 4, src: "/mp.webp", alt: "Manajemen Perkantoran" },
    { id: 2, src: "/bd.webp", alt: "Bisnis Digital" },
    { id: 6, src: "/kkbt.webp", alt: "Kriya Kreatif Batik Dan Tekstil" },
  ];

  // Repeat logos 3 times (18 items total) to pad the sides so they are never empty
  const repeatedLogos = [...logos, ...logos, ...logos];
  const total = logos.length; // 6

  // The active item is centered in the middle segment (Segment B)
  const renderActiveIndex = activeIndex + total;

  // Each item is 120px wide + 48px gap (168px total step).
  const itemWidth = 120;
  const gap = 48;
  const step = itemWidth + gap;
  const halfItem = itemWidth / 2;

  return (
    <section className="w-full bg-primary/10 dark:bg-zinc-900/40 py-8 overflow-hidden transition-colors duration-300 relative flex items-center justify-start min-h-[120px]">
      <div
        className="flex items-center gap-12 transition-transform duration-500 ease-in-out will-change-transform w-full"
        style={{
          transform: `translateX(calc(50% - ${renderActiveIndex * step + halfItem}px))`,
        }}
      >
        {repeatedLogos.map((logo, idx) => {
          const isActive = idx === renderActiveIndex;
          const deptIndex = idx % total;
          return (
            <div
              key={`${logo.id}-${idx}`}
              onClick={() => onSelect(deptIndex)}
              className={`w-[120px] h-[80px] flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-500 relative select-none ${isActive
                  ? "scale-135 md:scale-145 filter-none opacity-100 drop-shadow-[0_10px_20px_rgba(8,150,209,0.2)]"
                  : "scale-90 opacity-30 grayscale hover:opacity-60 hover:scale-100 hover:grayscale-0"
                }`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-12 md:h-16 w-auto object-contain transition-transform duration-300"
              />
              {/* {isActive && (
                <div className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              )} */}
            </div>
          );
        })}
      </div>
    </section>
  );
}

