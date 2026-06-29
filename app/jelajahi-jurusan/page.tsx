import Image from "next/image";

export default function JelajahiJurusan() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 font-sans transition-colors duration-300 pt-20">

      {/* Hero Banner Section */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden shadow-md">
          <Image
            src="/banner/RPL-BANNER-BESAR.webp"
            alt="RPL Banner Besar"
            width={1440}
            height={950}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* RPL Department Detail Section */}
      <main className="flex-1 w-full">
        <section
          id="rpl"
          className="scroll-mt-24 relative overflow-hidden bg-white dark:bg-zinc-900 p-8 md:p-12 lg:p-16 "
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 w-full max-w-7xl scale-100 lg:scale-110 mx-auto h-full pointer-events-none select-none z-0 pt-5 lg:pt-20">
            <Image
              src="/jurusan-rpl-bg.webp"
              alt="RPL Background Pattern"
              // fill
              width={1550}
              height={250}
              priority
              className="object-cover"
            />
          </div>

          {/* Layout Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">

              {/* Badge */}
              <div>
                <span className="inline-block bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full select-none">
                  PROGRAM KEAHLIAN RPL
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase mt-4 mb-6 leading-tight select-none tracking-tight">
                REKAYASA PERANGKAT LUNAK
              </h2>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                Program Keahlian Rekayasa Perangkat Lunak (RPL) di SMKN 6 Jember merupakan salah satu konsentrasi pada Program Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG) yang membekali peserta didik dengan kemampuan merancang, membuat, mengembangkan, menguji, hingga memelihara perangkat lunak sesuai standar industri. Program ini dirancang untuk mencetak lulusan yang kompeten, kreatif, inovatif, dan siap menghadapi kebutuhan dunia kerja maupun melanjutkan pendidikan di bidang teknologi informasi.
              </p>

              {/* Divider Line */}
              <hr className="border-t border-zinc-200 dark:border-zinc-800 mb-8" />

              {/* Info Grid (Kompetensi Keahlian & Peluang Karir) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">

                {/* Kompetensi Keahlian */}
                <div>
                  <h3 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm md:text-base mb-4 flex items-center gap-2 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block shrink-0" />
                    Kompetensi Keahlian
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Pemrograman Web & Mobile (HTML, CSS, JS, React, Flutter)</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Pengembangan Basis Data (MySQL, PostgreSQL)</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Desain UI/UX & Prototipe Aplikasi</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Software Quality Assurance & Testing</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Pemrograman Berorientasi Objek (OOP)</span>
                    </li>
                  </ul>
                </div>

                {/* Peluang Karir */}
                <div>
                  <h3 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm md:text-base mb-4 flex items-center gap-2 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block shrink-0" />
                    Peluang Karir
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Web Developer / Programmer</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Mobile App Developer</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>Database Administrator</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>UI/UX Designer</span>
                    </li>
                    <li className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full border border-sky-400 mt-1.5 flex-shrink-0" />
                      <span>IT Consultant / Entrepreneur</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Right Column: Visual Elements */}
            <div className="lg:col-span-6 flex items-center justify-center relative w-full order-1 lg:order-2">
              <Image
                src="/jurusan-rpl-kanan.webp"
                alt="Rekayasa Perangkat Lunak Visuals"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

          </div>
        </section>
      </main >
    </div >
  );
}
