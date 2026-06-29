import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Jurusan RPL - Sixora",
  description: "Rekayasa Perangkat Lunak",
};

export default function JurusanRPLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Navbar />
    {children}
    <Footer />
  </>
    ;
}
