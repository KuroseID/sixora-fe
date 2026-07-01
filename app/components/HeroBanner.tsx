import Image from "next/image";

interface HeroBannerProps {
  src: string;
  alt: string;
}

export default function HeroBanner({ src, alt }: HeroBannerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={950}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
