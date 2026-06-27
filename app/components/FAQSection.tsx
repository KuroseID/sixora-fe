"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apa saja program keahlian yang tersedia di SMKN 6 Jember?",
    answer:
      "SMKN 6 Jember memiliki beberapa program keahlian, seperti Rekayasa Perangkat Lunak (RPL), Teknik Komputer dan Jaringan (TKJ), Desain Komunikasi Visual (DKV), dan program keahlian lainnya. Setiap jurusan dirancang untuk membekali siswa dengan kompetensi yang sesuai dengan kebutuhan dunia kerja dan industri.",
  },
  {
    question: "Bagaimana cara mendaftar sebagai siswa baru di SMKN 6 Jember?",
    answer:
      "Pendaftaran siswa baru dapat dilakukan secara online melalui portal resmi PPDB SMKN 6 Jember selama periode pendaftaran dibuka. Calon siswa perlu membuat akun, mengisi formulir pendaftaran, dan melampirkan berkas persyaratan yang ditentukan.",
  },
  {
    question: "Apakah ada program beasiswa bagi siswa berprestasi atau kurang mampu?",
    answer:
      "Ya, SMKN 6 Jember menyediakan berbagai jalur beasiswa, termasuk beasiswa prestasi akademik dan non-akademik, serta bantuan bagi siswa kurang mampu (KIP/PIP) guna mendukung pemerataan kesempatan pendidikan.",
  },
  {
    question: "Bagaimana program kerja sama industri dan peluang kerja lulusan?",
    answer:
      "Kami bekerja sama dengan puluhan perusahaan terkemuka untuk program magang (PKL), sertifikasi keahlian, kelas industri, hingga penyaluran lulusan secara langsung melalui Bursa Kerja Khusus (BKK).",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 pb-16 relative z-10">
      <div className="flex flex-col gap-5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none hover:bg-slate-50/50 transition-colors duration-200"
              >
                <span className="font-bold text-slate-900 text-[16px] sm:text-[17px] leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-180" : "bg-primary/10 text-primary"
                    }`}
                >
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {/* Body */}
              <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0 pointer-events-none"
                  } overflow-hidden bg-[#F4F9FD]`}
              >
                <div className="px-6 py-5 text-sm text-slate-500 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
