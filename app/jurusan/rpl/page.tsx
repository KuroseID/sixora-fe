"use client";

import HeroBanner from "@/app/components/HeroBanner";
import DepartmentDetail from "@/app/components/DepartmentDetail";
import FacilitiesCarousel from "@/app/components/FacilitiesCarousel";

const rplCompetencies = [
  "Pemrograman Web & Mobile (HTML, CSS, JS, React, Flutter)",
  "Pengembangan Basis Data (MySQL, PostgreSQL)",
  "Desain UI/UX & Prototipe Aplikasi",
  "Software Quality Assurance & Testing",
  "Pemrograman Berorientasi Objek (OOP)",
];

const rplCareers = [
  "Web Developer / Programmer",
  "Mobile App Developer",
  "Database Administrator",
  "UI/UX Designer",
  "IT Consultant / Entrepreneur",
];

const rplFacilities = [
  {
    id: 1,
    title: "Lab Komputer RPL 1",
    image: "/jurusan/rpl/fasilitas1.webp",
  },
  {
    id: 2,
    title: "Ruang Teori & Kolaborasi",
    image: "/jurusan/rpl/fasilitas2.webp",
  },
  {
    id: 3,
    title: "Lab Komputer RPL 2",
    image: "/jurusan/rpl/fasilitas3.webp",
  }
];

export default function JurusanRPL() {
  // RPL specific background pattern
  const rplBgPattern = (
    <svg
      width="1550"
      height="250"
      viewBox="0 0 1550 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto object-cover"
    >
      <path
        d="M1186.19 230.607L1134.91 214.691L1174.34 178.239L1186.19 230.607Z"
        stroke="#C82222"
        strokeOpacity={0.21}
        strokeWidth={2}
      />
      <path
        d="M1037 166.348C1035.79 167.841 1033.41 167.459 1032.73 165.661L1024.08 142.975C1023.39 141.177 1024.91 139.31 1026.81 139.616L1050.78 143.469C1052.68 143.774 1053.54 146.022 1052.32 147.515L1037 166.348Z"
        stroke="#C82222"
        strokeOpacity={0.6}
        strokeWidth={3}
      />
      <path
        d="M1024.11 172.417C1022.17 174.806 1018.37 174.195 1017.27 171.318L1008.62 148.631C1007.52 145.754 1009.95 142.768 1012.99 143.257L1036.97 147.11C1040.01 147.598 1041.38 151.195 1039.43 153.583L1024.11 172.417Z"
        fill="#C82222"
        fillOpacity={0.09}
      />
      <path
        d="M1422.62 46.5741L1520.21 62.2582L1457.83 138.927L1422.62 46.5741Z"
        stroke="#C82222"
        strokeOpacity={0.82}
        strokeWidth={15}
      />
      <path
        d="M646.76 31.7482L708.986 41.7494L669.212 90.6383L646.76 31.7482Z"
        stroke="#C82222"
        strokeOpacity={0.82}
        strokeWidth={9}
      />
      <path
        d="M643.184 104.708C641.241 107.096 637.441 106.485 636.344 103.608L613.275 43.1001C612.178 40.2229 614.607 37.2372 617.648 37.7258L681.583 48.0018C684.624 48.4905 685.995 52.087 684.052 54.4755L643.184 104.708Z"
        fill="#C82222"
        fillOpacity={0.09}
      />
      <circle
        cx={28.5}
        cy={48.1982}
        r={23}
        stroke="#C82222"
        strokeOpacity={0.43}
        strokeWidth={11}
      />
    </svg>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 font-sans transition-colors duration-300 pt-20">
      
      {/* Hero Banner Section */}
      <HeroBanner
        src="/banner/RPL-BANNER-BESAR.webp"
        alt="RPL Banner Besar"
      />

      {/* RPL Department Detail Section */}
      <main className="flex-1 w-full">
        <DepartmentDetail
          id="rpl"
          badgeText="PROGRAM KEAHLIAN RPL"
          title="REKAYASA PERANGKAT LUNAK"
          description="Program Keahlian Rekayasa Perangkat Lunak (RPL) di SMKN 6 Jember merupakan salah satu konsentrasi pada Program Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG) yang membekali peserta didik dengan kemampuan merancang, membuat, mengembangkan, menguji, hingga memelihara perangkat lunak sesuai standar industri. Program ini dirancang untuk mencetak lulusan yang kompeten, kreatif, inovatif, dan siap menghadapi dunia kerja maupun melanjutkan pendidikan di bidang teknologi informasi."
          competencies={rplCompetencies}
          careers={rplCareers}
          rightImageSrc="/jurusan/rpl/kanan.webp"
          rightImageAlt="Rekayasa Perangkat Lunak Visuals"
          bgPattern={rplBgPattern}
        />

        {/* Facilities Section */}
        <FacilitiesCarousel
          title="Fasilitas Jurusan RPL"
          items={rplFacilities}
        />
      </main>
    </div>
  );
}
