import Image from "next/image";
import React from "react";

interface DepartmentDetailProps {
  id: string;
  badgeText: string;
  title: string;
  description: string;
  competenciesTitle?: string;
  competencies: string[];
  careersTitle?: string;
  careers: string[];
  rightImageSrc: string;
  rightImageAlt: string;
  bgPattern?: React.ReactNode;
}

export default function DepartmentDetail({
  id,
  badgeText,
  title,
  description,
  competenciesTitle = "Kompetensi Keahlian",
  competencies,
  careersTitle = "Peluang Karir",
  careers,
  rightImageSrc,
  rightImageAlt,
  bgPattern,
}: DepartmentDetailProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 relative overflow-hidden bg-white dark:bg-zinc-900 p-8 md:p-12 lg:p-16"
    >
      {/* Optional Background Pattern */}
      {bgPattern && (
        <div className="absolute inset-0 w-full max-w-7xl scale-100 lg:scale-110 mx-auto h-full pointer-events-none select-none z-0 pt-5 lg:pt-20">
          {bgPattern}
        </div>
      )}

      {/* Layout Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          {/* Badge */}
          <div>
            <span className="inline-block bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full select-none">
              {badgeText}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase mt-4 mb-6 leading-tight select-none tracking-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
            {description}
          </p>

          {/* Divider Line */}
          <hr className="border-t border-zinc-200 dark:border-zinc-800 mb-8" />

          {/* Info Grid (Kompetensi Keahlian & Peluang Karir) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            
            {/* Kompetensi Keahlian */}
            <div>
              <h3 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm md:text-base mb-4 flex items-center gap-2 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block shrink-0" />
                {competenciesTitle}
              </h3>
              <ul className="space-y-3">
                {competencies.map((item, idx) => (
                  <li key={idx} className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Peluang Karir */}
            <div>
              <h3 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm md:text-base mb-4 flex items-center gap-2 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block shrink-0" />
                {careersTitle}
              </h3>
              <ul className="space-y-3">
                {careers.map((item, idx) => (
                  <li key={idx} className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Right Column: Visual Elements */}
        <div className="lg:col-span-6 flex items-center justify-center relative w-full order-1 lg:order-2">
          <Image
            src={rightImageSrc}
            alt={rightImageAlt}
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
