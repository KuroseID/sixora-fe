import Image from "next/image";
import Link from "next/link";
import LogoCarousel from "@/app/components/LogoCarousel";
import JurusanCard from "@/app/components/JurusanCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section Wrapper */}
      <div className="relative overflow-hidden bg-primary/5 w-full">
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">

            {/* Left Column: Hero Typography & Call-to-actions */}
            <div className="lg:col-span-6 flex flex-col items-start text-left relative lg:static order-2 lg:order-1">
              {/* Wave Hero Background Image */}
              <div className="absolute inset-0 pointer-events-none select-none z-0">
                <div className="max-w-7xl mx-auto h-full w-full relative px-6 lg:px-8">
                  <div className="absolute -bottom-5 lg:-bottom-25 -left-6 lg:-left-10 h-full w-full lg:w-[60%]">
                    <Image
                      src="/hero-wave.png"
                      alt="Wave background decoration"
                      fill
                      priority
                      className="object-contain object-left-bottom"
                    />
                  </div>
                </div>
              </div>

              {/* <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 leading-[1.5] font-bold relative z-10">
                Wujudkan Masa <br />
                Depanmu <br />
                Bersama <span className="text-primary font-black">Sixora</span>
              </h1> */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 leading-[1.5] font-bold relative z-10">
                Selamat Datang di <br />
                <span className="text-primary font-black">SMKN 6 Jember</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed relative z-10">
                Mencetak generasi unggul yang siap kerja, mandiri, dan berkarakter melalui ekosistem pendidikan digital berbasis industri global.
              </p>

              <div className="flex flex-row flex-wrap items-center gap-4 mt-8 sm:mt-10 relative z-10">
                <Link
                  href="#"
                  className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 text-[15px]"
                >
                  Lihat Selengkapnya
                </Link>
                <Link
                  href="#"
                  className="border-2 border-primary text-primary hover:bg-primary/5 font-bold px-8 py-2 rounded-xl transition-all duration-200 active:scale-[0.97] text-[15px] bg-white"
                >
                  Virtual tour
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end relative order-1 lg:order-2">
              <Image
                src="/hero-image.webp"
                alt="SMK Negeri 6 Jember"
                height={500}
                width={793}
                priority
                className="h-[340px] sm:h-[420px] lg:h-[500px] w-auto object-contain"
              />
            </div>
            {/* <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[410px] lg:h-[410px] flex items-center justify-center">

                <div className="absolute w-[150%] h-[85%] -left-[25%] top-[7.5%] border-5 border-primary rounded-[50%] transform rotate-[-47deg] pointer-events-none" />

                <div className="absolute inset-0 border-5 border-[#F6F6F6] rounded-[50%] transform scale-[1.09] pointer-events-none" />

                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-zinc-50 z-10 group">
                  <Image
                    src="/sekolah.png"
                    alt="SMK Negeri 6 Jember"
                    fill
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 380px"
                    priority
                    className="object-cover"
                  />
                </div>

              </div>
            </div> */}

          </div>
        </main>
      </div>

      <LogoCarousel />

      <div className="relative overflow-hidden bg-primary/5 w-full">
        {/* <div className="absolute top-12 left-[1/2] w-[180px] sm:w-[240px] md:w-[280px] h-auto opacity-25 pointer-events-none select-none z-0">
          <Image
            src="/about-floating-triangle.webp"
            alt="floating triangle"
            width={280}
            height={243}
            priority
            className="w-full h-auto object-contain"
          />
        </div> */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="max-w-7xl mx-auto h-full w-full relative">
            <div className="absolute lg:-top-2/3 lg:left-[40%]  h-full w-[30%]">
              <Image
                src="/about-floating-triangle.webp"
                alt="Wave background decoration"
                fill
                priority
                className="object-contain object-left-bottom"
              />
            </div>
          </div>
        </div>
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10 gap-16">

            <div className="lg:col-span-7 flex justify-center lg:justify-start w-full">
              <div className="relative w-full max-w-[680px]">
                <Image
                  src="/about-image.webp"
                  alt="SMK Negeri 6 Jember"
                  height={576}
                  width={681}
                  priority
                  className="w-full h-auto object-contain"
                />

                <a
                  href="https://www.youtube.com/@smknegeri6jember"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-[72px] sm:h-[72px] bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-[#50b0ea] z-20 group"
                >
                  <svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5.96956e-08" width="129" height="129" rx="64.5" fill="#65C4FF" />
                    <path d="M97.8234 55.1252C99.5244 56.0298 100.947 57.3802 101.94 59.0316C102.932 60.6831 103.456 62.5734 103.456 64.5C103.456 66.4266 102.932 68.317 101.94 69.9684C100.947 71.6199 99.5244 72.9702 97.8234 73.8748L52.4475 98.5496C45.1411 102.527 36.1665 97.3561 36.1665 89.1784L36.1665 39.8252C36.1665 31.644 45.1411 26.4767 52.4475 30.4469L97.8234 55.1252Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start text-left relative">
              <div className="inline-flex items-center justify-center px-5 py-2 bg-primary/10 text-primary text-[13px] font-bold rounded-full mb-5">
                Profile Sekolah
              </div>

              <div className="relative">
                <h2 className="text-3xl sm:text-5xl lg:text-[42px] font-black text-slate-900 leading-[1.5] font-bold">
                  Mengenal <br />
                  <span className="text-primary font-black font-bold">SMKN 6 JEMBER</span>
                </h2>

                <div className="absolute -top-3 left-[220px] sm:left-[265px] w-12 h-12 pointer-events-none select-none opacity-40">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full stroke-primary stroke-[1.5] rotate-[25deg]"
                  >
                    <polygon points="32,8 56,52 8,52" />
                  </svg>
                </div>
              </div>

              <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed">
                Sekolah kami berkomitmen untuk memberikan pendidikan berkualitas yang mengintegrasikan ilmu pengetahuan, teknologi, dan nilai-nilai karakter. Dengan didukung tenaga pendidik profesional, fasilitas yang memadai, serta lingkungan belajar yang kondusif.
              </p>
            </div>


          </div>
        </main>
      </div>
      <div className="w-full flex flex-col items-center bg-white pt-16">
        <div className="text-center px-6 max-w-4xl mx-auto mb-12 relative z-10">
          <div className="inline-flex items-center justify-center px-5 py-2 bg-primary/10 text-primary text-[13px] font-bold rounded-full mb-5">
            Virtual Tour
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Jelajahi Sekolah Kami
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Nikmati pengalaman berkeliling lingkungan sekolah secara virtual melalui tampilan 360°. Kenali setiap sudut sekolah, fasilitas, dan area pembelajaran dengan mudah dari mana saja.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 bg-gray-300 h-[600px]">
          {/* <h1 className="h-full text-center font-black text-5xl">VIRTUAL 360°</h1> */}
        </main>
      </div>

      <div className="w-full flex flex-col items-center bg-white pt-16">
        <div className="text-center px-6 max-w-4xl mx-auto mb-12 relative z-10">
          <div className="inline-flex items-center justify-center px-5 py-2 bg-primary/10 text-primary text-[13px] font-bold rounded-full mb-5">
            Jurusan
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Jelajahi Jurusan Kami
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Apa aja dah di sini isinya, lorem aja kali ya? lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque odio rerum, minus praesentium quisquam aliquid? Tempore, ad ratione! Vitae nobis quae at nihil deleniti architecto autem cum fugit a exercitationem!
          </p>
        </div>
      </div>
      <JurusanCard />
      <LogoCarousel />

      <div className="relative overflow-hidden">
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 bg-gray-300 h-[700px]">
        </main>
      </div>
    </div>
  );
}
