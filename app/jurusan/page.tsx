"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

interface CardData {
  id: number;
  slug: string;
  name: string;
  image: string;
}

export default function Jurusan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const promoTextRef = useRef<HTMLDivElement>(null);

  const cardsData: CardData[] = [
    { id: 1, slug: "rpl", name: "Rekayasa Perangkat Lunak", image: "/banner/RPL-BANNER.webp" },
    { id: 2, slug: "dkv", name: "Desain Komunikasi Visual", image: "/banner/DKV-BANNER.webp" },
    { id: 3, slug: "ak", name: "Akuntansi", image: "/banner/AK-BANNER.webp" },
    { id: 4, slug: "mp", name: "Manajemen Perkantoran", image: "/banner/MP-BANNER.webp" },
    { id: 5, slug: "bd", name: "Bisnis Digital", image: "/banner/BD-BANNER.webp" },
    { id: 6, slug: "kkbt", name: "Kriya Kreatif Batik & Tekstil", image: "/banner/KKBT-BANNER.webp" },
  ];

  useEffect(() => {
    const runAnimation = () => {
      const cards = gsap.utils.toArray<HTMLElement>(".jurusan-card");
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        // DESKTOP ANIMATION Settings (Scattered sideways layout with asymmetric tilts)
        const cardSettings = [
          { id: 1, rot: -8, x: -340, y: 15 },
          { id: 2, rot: -6, x: -220, y: -8 },
          { id: 3, rot: -2, x: -100, y: 0 },
          { id: 4, rot: 2, x: 100, y: -10 },
          { id: 5, rot: 6, x: 220, y: 8 },
          { id: 6, rot: 8, x: 340, y: -5 },
        ];

        const initialRotations = [-5, 4, -2, 3, -6, 5];

        // Master Timeline (Plays automatically on page load)
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" }
        });

        // 0. Initial States (With distinct initial rotations when stacked in the center)
        gsap.set(cards, {
          opacity: 0,
          scale: 0.8,
          y: 350,
          x: 0,
          rotation: (i) => initialRotations[i]
        });
        gsap.set(promoTextRef.current, { opacity: 0, y: 30, scale: 0.95 });
        gsap.set(titleRef.current, { opacity: 0, y: -20, scale: 0.95 });

        // 1. Cards Enter (Go UP together, keeping their distinct tilted rotations)
        tl.to(cards, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
        });

        // 2. Stay Still for 0.1s, then open sideways and Fade In Text together
        tl.to(
          cards,
          {
            x: (i) => cardSettings[i].x,
            y: (i) => cardSettings[i].y,
            rotation: (i) => cardSettings[i].rot,
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "+=0.1" // Diem dulu (delay before fan out)
        )
          .to(
            titleRef.current,
            {
              opacity: 1,
              y: 0,
              scale: 1.0,
              duration: 1.2,
              ease: "power2.out",
            },
            "<" // Start at the same time as fan out
          )
          .to(
            promoTextRef.current,
            {
              opacity: 1,
              y: 0,
              scale: 1.0,
              duration: 1.2,
              ease: "power2.out",
            },
            "<" // Start at the same time as fan out
          );
      });

      mm.add("(max-width: 768px)", () => {
        // MOBILE ANIMATION Settings
        const cardSettings = [
          { id: 1, rot: -6, x: -100, y: 8 },
          { id: 2, rot: 4, x: -60, y: -3 },
          { id: 3, rot: -2, x: -20, y: 5 },
          { id: 4, rot: 3, x: 20, y: -5 },
          { id: 5, rot: -4, x: 60, y: 6 },
          { id: 6, rot: 5, x: 100, y: -3 },
        ];

        const initialRotations = [-4, 3, -2, 2, -3, 4];

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" }
        });

        // 0. Initial States
        gsap.set(cards, {
          opacity: 0,
          scale: 0.7,
          y: 250,
          x: 0,
          rotation: (i) => initialRotations[i]
        });
        gsap.set(promoTextRef.current, { opacity: 0, y: 20, scale: 0.95 });
        gsap.set(titleRef.current, { opacity: 0, y: -15, scale: 0.95 });

        // 1. Cards Enter (Go UP together, simultaneously)
        tl.to(cards, {
          y: 0,
          opacity: 1,
          scale: 0.75,
          duration: 1.2,
          ease: "power2.out",
        });

        // 2. Stay Still for 0.8s, then open sideways and Fade In Text together
        tl.to(
          cards,
          {
            x: (i) => cardSettings[i].x * 0.7,
            y: (i) => cardSettings[i].y * -0.2,
            rotation: (i) => cardSettings[i].rot,
            scale: 0.8,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "+=0.8" // Diem dulu (delay before fan out)
        )
          .to(
            titleRef.current,
            {
              opacity: 1,
              y: 0,
              scale: 1.0,
              duration: 1.0,
              ease: "power2.out",
            },
            "<" // Start at the same time as fan out
          )
          .to(
            promoTextRef.current,
            {
              opacity: 1,
              y: 0,
              scale: 1.0,
              duration: 1.0,
              ease: "power2.out",
            },
            "<" // Start at the same time as fan out
          );
      });

      return () => mm.revert();
    };

    if (typeof window !== "undefined" && (window as any).__loaderActive) {
      let cleanupFn: (() => void) | undefined;
      const handleLoaderComplete = () => {
        cleanupFn = runAnimation();
        window.removeEventListener("loader-complete", handleLoaderComplete);
      };
      window.addEventListener("loader-complete", handleLoaderComplete);
      return () => {
        window.removeEventListener("loader-complete", handleLoaderComplete);
        if (cleanupFn) cleanupFn();
      };
    } else {
      return runAnimation();
    }
  }, []);

  return (
    <>
      <div className="w-full bg-white text-slate-900 h-[calc(100vh-64px)] flex flex-col justify-between overflow-hidden pt-20">

        {/* Animation container */}
        <section
          ref={containerRef}
          className="w-full h-full bg-white flex flex-col items-center justify-center p-6 relative z-10 overflow-hidden py-12 md:py-16"
        >

          {/* Header Title Section (Relative flow prevents overlap) */}
          <div
            ref={titleRef}
            className="flex flex-col items-center justify-center relative z-20 w-full px-4 text-center select-none mb-10 opacity-0"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Jurusan Sekolah
            </h2>
            <h1 className="text-3xl sm:text-5xl font-black text-primary leading-tight mt-2 uppercase tracking-wide">
              SMK Negeri 6 Jember
            </h1>
          </div>

          {/* Album/Jurusan Cards Section */}
          <div
            ref={cardsContainerRef}
            className="relative flex justify-center items-center w-full max-w-[900px] h-[300px] sm:h-[350px] md:h-[400px] mt-[5vh] z-10 overflow-visible"
          >
            {cardsData.map((card, index) => {
              const zIndex = 10 + index;
              return (
                <div
                  key={card.id}
                  className="rounded-2xl jurusan-card absolute w-[160px] sm:w-[200px] md:w-[235px] h-[220px] sm:h-[270px] md:h-[315px] hover:z-50 select-none origin-bottom will-change-transform"
                  style={{
                    zIndex: zIndex,
                    left: "50%",
                    marginLeft: "-80px", // Half of w-[160px] to center on mobile
                  }}
                >
                  <Link href={`/jelajahi-jurusan/#${card.slug}`} className="block w-full h-full">
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] bg-white transition-transform duration-300 transform-gpu hover:scale-105 hover:-translate-y-10 cursor-pointer">
                      <Image
                        src={card.image}
                        alt={`${card.name} Poster`}
                        fill
                        priority
                        className="object-cover scale-101"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Description & Call-to-action (Relative flow prevents overlap) */}
          <div
            ref={promoTextRef}
            className="flex flex-col items-center justify-center relative z-20 opacity-0 w-full px-6 text-center mt-12 sm:mt-16"
          >
            <div className="max-w-2xl flex flex-col items-center">
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-8">
                Temukan informasi mengenai setiap program keahlian di SMKN 6 Jember, mulai dari kompetensi yang dipelajari hingga fasilitas penunjang yang mendukung proses pembelajaran.
              </p>

              <Link
                href="/jelajahi-jurusan"
                className="bg-primary hover:bg-primary-hover text-white font-bold px-10 py-3.5 rounded-full transition-all duration-200 active:scale-[0.97] shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 text-[15px]"
              >
                Jelajahi Jurusan
              </Link>
            </div>
          </div>

        </section>

      </div>
    </>
  );
}
