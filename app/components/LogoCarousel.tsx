"use client";

import Image from "next/image";

export default function LogoCarousel() {
  const logos = [
    { id: 1, src: "/rpl.webp", alt: "Rekayasa Perangkat Lunak" },
    { id: 2, src: "/bd.webp", alt: "Bisnis Digital" },
    { id: 3, src: "/ak.webp", alt: "Akutansi" },
    { id: 4, src: "/mp.webp", alt: "Manajemen Perkantoran" },
    { id: 5, src: "/dkv.webp", alt: "Desain Komunikasi Visual" },
    { id: 6, src: "/kkbt.webp", alt: "Kriya Kreatif Batik Dan Tekstil" },
    { id: 7, src: "/energi6.webp", alt: "Energi 6" },
    { id: 8, src: "/blud.webp", alt: "BLUD" },
    { id: 9, src: "/tefa.webp", alt: "Teaching Factory" },
    { id: 10, src: "/studio6.webp", alt: "Studo 6" },
  ];

  // Duplicate the list to make a seamless infinite loop in the CSS marquee
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="w-full py-3 bg-primary/6 dark:bg-zinc-900 overflow-hidden transition-colors duration-300">
      <div className="relative flex w-full overflow-x-hidden group/marquee">
        {/* Infinite Marquee Track */}
        <div className="flex gap-12 sm:gap-16 animate-marquee whitespace-nowrap py-4 group-hover/marquee:[animation-play-state:paused]">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="relative flex-shrink-0 h-16 sm:h-20 cursor-pointer transition-all duration-300 hover:scale-125 hover:-translate-y-1 active:scale-95 group/item flex items-center justify-center px-2"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className="h-12 sm:h-16 w-auto object-contain group-hover/item:rotate-2 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
