import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import Navbar from "@/app/components/Navbar";
import "./globals.css";
import PageTransitionLoader from "@/app/components/PageTransitionLoader";
import { Suspense } from "react";
import Chatbot from "@/app/components/Chatbot";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sixora",
  description: "Welcome to Sixora",
  icons: {
    icon: "/file.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950">
        <Suspense fallback={null}>
          <PageTransitionLoader />
        </Suspense>
        {/* <Navbar /> */}
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
