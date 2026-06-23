import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-primary/5 w-full">

      {/* Wave Hero Background Image aligned with max-w-7xl */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="max-w-7xl mx-auto h-full w-full relative px-6 lg:px-8">
          <div className="absolute bottom-0 left-6 lg:left-8 w-[55%] h-[80%]">
            <Image
              src="/wave-hero.png"
              alt="Wave background decoration"
              fill
              priority
              className="object-contain object-left-bottom"
            />
          </div>
        </div>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Hero Typography & Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 leading-[1.2] font-bold">
              Wujudkan Masa <br />
              Depanmu <br />
              Bersama <span className="text-primary font-black">Sixora</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed">
              Mencetak generasi unggul yang siap kerja, mandiri, dan berkarakter melalui ekosistem pendidikan digital berbasis industri global.
            </p>

            <div className="flex flex-row flex-wrap items-center gap-4 mt-8 sm:mt-10">
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

          {/* Right Column: Circular School Image with Decorative Ellipses */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[410px] lg:h-[410px] flex items-center justify-center">

              {/* Ellipse 2 (Background second rotated outline) */}
              <div className="absolute w-[150%] h-[85%] -left-[25%] top-[7.5%] border-5 border-primary rounded-[50%] transform rotate-[-47deg] pointer-events-none" />

              {/* Ellipse 1 (Background rotated outline) */}
              <div className="absolute inset-0 border-5 border-[#F6F6F6] rounded-[50%] transform scale-[1.09] pointer-events-none" />

              {/* Main Circular Image Frame */}
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
          </div>

        </div>
      </main>
    </div>
  );
}
