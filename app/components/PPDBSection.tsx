"use client";

const timelineSteps = [
  {
    number: "01",
    title: "Pendaftaran Online",
    description:
      "Buat akun di portal spmb.smkn6jember dan lengkapi formulir pendaftaran secara mandiri.",
    date: "11 Jun - 1 Jul 2026",
  },
  {
    number: "02",
    title: "Pengumuman",
    description:
      "Periksa status penerimaan peserta didik baru secara online melalui sistem.",
    date: "13 Jun - 2 Jul 2026",
  },
  {
    number: "03",
    title: "Daftar Ulang",
    description:
      "Buat akun di portal Siswa dan lengkapi formulir pendaftaran secara mandiri.",
    date: "10 Jun - 30 Jun 2026",
  },
  {
    number: "04",
    title: "Masa Orientasi",
    description:
      "Ikuti kegiatan pengenalan lingkungan sekolah dan orientasi peserta didik baru.",
    date: "10 Jun - 30 Jun 2026",
  },
];

const persyaratan = [
  "Kartu Keluarga (KK)",
  "Ijazah/SKL SMP dilegalisir",
  "Akta Kelahiran",
  "Pas Foto 3x4 merah (4 lembar)",
  "Surat Keterangan Sehat",
  "Nilai Rapor SMP semester 1-5",
];

const kuotaJurusan = [
  { kode: "RPL", nama: "Rekayasa Perangkat Lunak", kuota: 108 },
  { kode: "DKV", nama: "Desain Komunikasi Visual", kuota: 33 },
  { kode: "MP", nama: "Manajemen Perkantoran", kuota: 108 },
  { kode: "AK", nama: "Akuntansi", kuota: 76 },
  { kode: "BD", nama: "Bisnis Digital", kuota: 76 },
  { kode: "KKBT", nama: "Kriya Kreatif Batik dan Tekstil", kuota: 24 },
];

// Card rotation angles to give the scattered effect
const cardTransforms = [
  { rotate: "-6deg", x: "20px", y: "0px" },
  { rotate: "4deg", x: "60px", y: "-10px" },
  { rotate: "-3deg", x: "10px", y: "5px" },
  { rotate: "5deg", x: "40px", y: "-5px" },
];

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="11" fill="#22c55e" />
      <path
        d="M7 12.5l3 3 7-7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PPDBSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Timeline Cards - Scattered Layout */}
        <div className="relative w-full max-w-[500px] h-[680px] mx-auto hidden md:block">
          {/* S-curve dashed path connecting the card pin dots */}
          <svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            viewBox="0 0 500 680"
            fill="none"
          >
            <path
              d="M 420 0 Q 390 10, 360 10 C 300 10, 140 90, 140 170 C 140 250, 340 240, 340 320 C 340 400, 130 400, 130 480 C 130 560, 250 560, 250 630"
              stroke="#93c5fd"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Card 1: Top-Right */}
          <div
            className="absolute w-[240px] bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-[1.03] z-10"
            style={{
              top: "10px",
              left: "240px",
              transform: "rotate(4deg)",
            }}
          >
            {/* Pin dot */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-800 border-2 border-white shadow-sm z-20" />
            <span className="text-primary font-black text-sm">{timelineSteps[0].number}</span>
            <h4 className="font-bold text-slate-900 text-base mt-1">{timelineSteps[0].title}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">{timelineSteps[0].description}</p>
            <div className="mt-3 inline-block bg-primary/10 text-primary text-[11px] font-bold px-3 py-1 rounded-full">
              {timelineSteps[0].date}
            </div>
          </div>

          {/* Card 2: Left-Middle */}
          <div
            className="absolute w-[240px] bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-[1.03] z-10"
            style={{
              top: "170px",
              left: "20px",
              transform: "rotate(-5deg)",
            }}
          >
            {/* Pin dot */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-800 border-2 border-white shadow-sm z-20" />
            <span className="text-primary font-black text-sm">{timelineSteps[1].number}</span>
            <h4 className="font-bold text-slate-900 text-base mt-1">{timelineSteps[1].title}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">{timelineSteps[1].description}</p>
            <div className="mt-3 inline-block bg-primary/10 text-primary text-[11px] font-bold px-3 py-1 rounded-full">
              {timelineSteps[1].date}
            </div>
          </div>

          {/* Card 3: Right-Middle */}
          <div
            className="absolute w-[240px] bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-[1.03] z-10"
            style={{
              top: "320px",
              left: "220px",
              transform: "rotate(3deg)",
            }}
          >
            {/* Pin dot */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-800 border-2 border-white shadow-sm z-20" />
            <span className="text-primary font-black text-sm">{timelineSteps[2].number}</span>
            <h4 className="font-bold text-slate-900 text-base mt-1">{timelineSteps[2].title}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">{timelineSteps[2].description}</p>
            <div className="mt-3 inline-block bg-primary/10 text-primary text-[11px] font-bold px-3 py-1 rounded-full">
              {timelineSteps[2].date}
            </div>
          </div>

          {/* Card 4: Bottom-Left */}
          <div
            className="absolute w-[240px] bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-[1.03] z-10"
            style={{
              top: "480px",
              left: "10px",
              transform: "rotate(-3deg)",
            }}
          >
            {/* Pin dot */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-800 border-2 border-white shadow-sm z-20" />
            <span className="text-primary font-black text-sm">{timelineSteps[3].number}</span>
            <h4 className="font-bold text-slate-900 text-base mt-1">{timelineSteps[3].title}</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">{timelineSteps[3].description}</p>
            <div className="mt-3 inline-block bg-primary/10 text-primary text-[11px] font-bold px-3 py-1 rounded-full">
              {timelineSteps[3].date}
            </div>
          </div>
        </div>

        {/* Left: Mobile Timeline (stacked, no scatter) */}
        <div className="md:hidden flex flex-col gap-4">
          {timelineSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100"
            >
              <span className="text-primary font-black text-sm">
                {step.number}
              </span>
              <h4 className="font-bold text-slate-900 text-base mt-1">
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-3 inline-block bg-primary/10 text-primary text-[11px] font-bold px-3 py-1 rounded-full">
                {step.date}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Info panels */}
        <div className="flex flex-col gap-8">
          {/* Persyaratan Dokumen */}
          <div className="bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.05)] border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-5">
              Persyaratan Dokumen
            </h3>
            <ul className="flex flex-col gap-3.5">
              {persyaratan.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {/* <CheckIcon /> */}
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0002 25.6668C15.5325 25.6687 17.0502 25.3678 18.4659 24.7814C19.8816 24.195 21.1675 23.3346 22.2497 22.2497C23.3346 21.1675 24.195 19.8816 24.7814 18.4659C25.3678 17.0502 25.6687 15.5325 25.6668 14.0002C25.6687 12.4678 25.3678 10.9502 24.7814 9.53446C24.195 8.11874 23.3346 6.83286 22.2497 5.75067C21.1675 4.66577 19.8816 3.80538 18.4659 3.21896C17.0502 2.63253 15.5325 2.33162 14.0002 2.3335C12.4678 2.33162 10.9502 2.63253 9.53446 3.21896C8.11874 3.80538 6.83286 4.66577 5.75067 5.75067C4.66577 6.83286 3.80538 8.11874 3.21896 9.53446C2.63253 10.9502 2.33162 12.4678 2.3335 14.0002C2.33162 15.5325 2.63253 17.0502 3.21896 18.4659C3.80538 19.8816 4.66577 21.1675 5.75067 22.2497C6.83286 23.3346 8.11874 24.195 9.53446 24.7814C10.9502 25.3678 12.4678 25.6687 14.0002 25.6668Z" stroke="#32DF29" stroke-width="2" stroke-linejoin="round" />
                    <path d="M9.3335 14L12.8335 17.5L19.8335 10.5" stroke="#32DF29" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kuota Penerimaan per Jurusan */}
          <div className="bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.05)] border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-5">
              Kuota Penerimaan per Jurusan
            </h3>
            <div className="flex flex-col gap-3">
              {kuotaJurusan.map((jurusan, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3 border border-slate-100 hover:bg-primary/[0.03] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center bg-primary/15 text-primary text-xs font-bold px-2.5 py-1 rounded-lg min-w-[42px] text-center">
                      {jurusan.kode}
                    </span>
                    <span className="text-sm text-slate-700 font-medium">
                      {jurusan.nama}
                    </span>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="text-lg font-black text-slate-900">
                      {jurusan.kuota}
                    </span>
                    <span className="text-xs text-slate-400 ml-1 italic">
                      Siswa
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
