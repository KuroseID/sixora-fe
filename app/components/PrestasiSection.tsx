"use client";

export default function PrestasiSection() {

  return (
    <div className="relative w-full overflow-hidden rounded-3xl min-h-[580px] flex items-center justify-center py-16 px-4 md:px-8">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 bg-[url('/prestasi-bg.webp')] bg-[size:auto_100%] bg-center bg-no-repeat"
      />
    </div>
  );
}
