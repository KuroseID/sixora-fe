import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Jelajahi Jurusan - Sixora",
  description: "Jelajahi Jurusan SMKN 6 Jember",
};

export default function RegisterLayout({
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
