"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#65C4FF] text-white pt-16 pb-12 relative overflow-hidden z-10">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Column 1: Logo & Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <Image
                  src="/tefa.webp"
                  alt="TEFA Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[26px] font-black tracking-wider leading-none text-white font-bold">
                  SIXORA
                </h3>
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider mt-1">
                  Six Opportunity, Resource, Achievement
                </span>
              </div>
            </div>

            <p className="text-[13px] leading-relaxed text-white/90 mt-6 max-w-md font-medium">
              Six Opportunity, Resource, Sixora merupakan platform digital terintegrasi SMKN 6 Jember yang menghadirkan berbagai layanan sekolah dalam satu sistem untuk mendukung transformasi pendidikan berbasis teknologi.Achievement
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-8">
              {/* YouTube */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.05 1.62 4.2-1.38.1-2.68-.35-3.66-1.16-.05 3.26.01 6.53-.05 9.79-.09 2.22-1.14 4.4-3.1 5.48-2.6 1.49-6.1.49-7.51-2.09-1.57-2.73-.38-6.65 2.58-7.82.96-.39 2.02-.45 3.01-.31V12c-1-.25-2.12-.04-2.92.57-1.36.98-1.78 2.92-1 4.41.83 1.6 2.93 2.37 4.63 1.73 1.48-.52 2.36-2.08 2.4-3.66.02-3.81.01-7.62.02-11.43v-.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Akses Cepat */}
          <div className="md:col-span-3 flex flex-col items-start md:pl-8">
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">
              Akses Cepat
            </h4>
            <div className="flex flex-col gap-3.5 text-sm font-medium text-white/90">
              <Link href="/#home" className="hover:underline transition-all hover:text-white">
                Home
              </Link>
              <Link href="/#virtual-tour" className="hover:underline transition-all hover:text-white">
                Virtual Tour
              </Link>
              <Link href="/#jurusan" className="hover:underline transition-all hover:text-white">
                Jurusan
              </Link>
              <Link href="/#industri" className="hover:underline transition-all hover:text-white">
                Industri
              </Link>
              <Link href="/#ppdb" className="hover:underline transition-all hover:text-white">
                PPDB
              </Link>
            </div>
          </div>

          {/* Column 3: Hubungi Kami */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-bold text-lg mb-6 tracking-wide text-white">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-5 text-sm font-medium text-white/90">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                </svg>
                <span className="leading-relaxed">
                  Jl. PB.Sudirman, Tanggul Kulon, Jember, Jawa Timur 68155
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                </svg>
                <span>0336441347</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                </svg>
                <span>smkn6.jember@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/20 my-10" />

        {/* Copyright info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] font-medium text-white/80">
          <span>@2026 Sixora Platfrom - SMKN 6 Jember. All rights reserved.</span>
          <span>Dikembangkan oleh Tim Sixora - SMKN 6 Jember</span>
        </div>
      </div>
    </footer>
  );
}
