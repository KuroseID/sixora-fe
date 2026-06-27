"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

interface DepartmentDetail {
  title: string;
  shortName: string;
  description: string;
  image: string;
  competencies: string[];
  careers: string[];
}

const departmentData: Record<string, DepartmentDetail> = {
  rpl: {
    title: "Rekayasa Perangkat Lunak",
    shortName: "RPL",
    description: "Mempelajari pengembangan perangkat lunak, website, aplikasi mobile, dan basis data dengan pendekatan berbasis proyek untuk mencetak talenta digital yang siap kerja dan berdaya saing tinggi di era industri 4.0.",
    image: "/epim-harapan-1.webp",
    competencies: [
      "Pemrograman Web & Mobile (HTML, CSS, JS, React, Flutter)",
      "Pengembangan Basis Data (MySQL, PostgreSQL)",
      "Pemrograman Berorientasi Objek (OOP)",
      "Desain UI/UX & Prototipe Aplikasi",
      "Software Quality Assurance & Testing"
    ],
    careers: [
      "Web Developer / Programmer",
      "Mobile App Developer",
      "Database Administrator",
      "UI/UX Designer",
      "IT Consultant / Entrepreneur"
    ]
  },
  dkv: {
    title: "Desain Komunikasi Visual",
    shortName: "DKV",
    description: "Mengembangkan kreativitas di bidang seni visual, videografi, fotografi, desain grafis, ilustrasi, dan media digital interaktif untuk menghasilkan karya seni bernilai komunikasi tinggi.",
    image: "/about-image.webp",
    competencies: [
      "Fotografi Studio & Outdoor",
      "Videografi & Penyuntingan Video (Adobe Premiere, After Effects)",
      "Desain Grafis & Vektor (Illustrator, Photoshop)",
      "Ilustrasi & Komik Digital",
      "Branding & Identitas Visual Perusahaan"
    ],
    careers: [
      "Graphic Designer",
      "Photographer / Videographer",
      "Creative Director",
      "Video Editor / Animator",
      "Content Creator"
    ]
  },
  akl: {
    title: "Akuntansi & Keuangan Lembaga",
    shortName: "AKL",
    description: "Membekali siswa dengan keterampilan akuntansi keuangan, akuntansi manufaktur, administrasi pajak, perbankan, dan penggunaan aplikasi komputer akuntansi (MYOB/Spreadsheet) untuk kebutuhan industri modern.",
    image: "/hero-image.webp",
    competencies: [
      "Akuntansi Keuangan & Perusahaan",
      "Administrasi Perpajakan Indonesia",
      "Penggunaan Software Akuntansi (MYOB, Accurate)",
      "Laporan Keuangan & Audit Internal",
      "Pengelolaan Kas & Administrasi Perbankan"
    ],
    careers: [
      "Accounting Staff",
      "Tax Administrator",
      "Bank Teller / Credit Officer",
      "Financial Analyst",
      "Internal Auditor Assistant"
    ]
  },
  mplb: {
    title: "Manajemen Perkantoran & Layanan Bisnis",
    shortName: "MPLB",
    description: "Mempelajari pengelolaan administrasi perkantoran modern, manajemen kearsipan digital, komunikasi bisnis, humas, dan pelayanan prima berbasis teknologi perkantoran digital.",
    image: "/sekolah.png",
    competencies: [
      "Korespondensi Bahasa Indonesia & Inggris",
      "Manajemen Kearsipan Digital (E-Filing)",
      "Teknologi Perkantoran & Aplikasi Bisnis",
      "Pelayanan Prima & Public Relations",
      "Pengelolaan Agenda Kegiatan Pimpinan"
    ],
    careers: [
      "Administrative Assistant",
      "Secretary / Executive Assistant",
      "Front Office / Customer Service",
      "Document Controller",
      "Office Manager Assistant"
    ]
  },
  pm: {
    title: "Pemasaran & Bisnis Digital",
    shortName: "PM",
    description: "Mempelajari strategi bisnis digital, pemasaran ritel, pengelolaan media sosial bisnis, e-commerce, serta analisis pasar untuk mencetak wirausahawan mandiri yang melek teknologi.",
    image: "/epim-harapan-1.webp",
    competencies: [
      "Digital Marketing & SEO Strategies",
      "E-Commerce & Online Store Management",
      "Content Marketing & Social Media Admin",
      "Strategi Penjualan & Pelayanan Ritel",
      "Kewirausahaan & Business Plan"
    ],
    careers: [
      "Social Media Specialist",
      "Digital Marketer",
      "E-Commerce Specialist",
      "Sales Executive",
      "Wirausahawan Digital / Startup Founder"
    ]
  },
  kkbt: {
    title: "Kriya Kreatif Batik & Tekstil",
    shortName: "KKBT",
    description: "Melestarikan budaya bangsa melalui pembelajaran teknik membatik tulis dan cap, desain motif tekstil modern, tenun, sablon, serta pembuatan produk kerajinan tekstil bernilai estetis dan ekonomis tinggi.",
    image: "/about-image.webp",
    competencies: [
      "Teknik Membatik (Tulis, Cap, Kombinasi)",
      "Pewarnaan Tekstil Tradisional & Sintetis",
      "Desain Motif Batik & Tekstil Modern",
      "Teknik Sablon & Cetak Saring",
      "Pembuatan Aksesoris & Kriya Tekstil"
    ],
    careers: [
      "Batik Designer / Craftsperson",
      "Textile Designer",
      "Screen Printing Entrepreneur",
      "Visual Merchandiser",
      "Creative Craft Entrepreneur"
    ]
  }
};

export default function JurusanDetail() {
  const params = useParams();
  const slug = (params?.slug as string) || "rpl";

  // Fallback to rpl if slug is invalid
  const detail = departmentData[slug] || departmentData.rpl;

  return (
    <>
      <div className="w-full bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between">
        
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          {/* Back Button */}
          <Link
            href="/jurusan"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold text-sm mb-10 transition-colors duration-200 group"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Kembali ke Jurusan</span>
          </Link>

          {/* Department Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Image Card */}
            <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src={detail.image}
                alt={`${detail.title} Poster`}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Right Column: Information details */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 text-primary text-[13px] font-bold rounded-full w-fit mb-5">
                PROGRAM KEAHLIAN {detail.shortName}
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
                {detail.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                {detail.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200/80 pt-8">
                {/* Competencies */}
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    Kompetensi Keahlian
                  </h4>
                  <ul className="space-y-2.5">
                    {detail.competencies.map((comp, idx) => (
                      <li key={idx} className="text-sm sm:text-[15px] text-slate-500 font-medium leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Careers */}
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    Peluang Karir
                  </h4>
                  <ul className="space-y-2.5">
                    {detail.careers.map((career, idx) => (
                      <li key={idx} className="text-sm sm:text-[15px] text-slate-500 font-medium leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
