"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "Virtual Tour", href: "/#virtual-tour" },
    { label: "Jurusan", href: "/#jurusan" },
    { label: "Industri", href: "/#industri" },
    { label: "PPDB", href: "/#ppdb" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 w-full transition-all duration-300">
      {/* Full-width blur background layer */}
      <div
        className={`absolute inset-x-0 top-0 h-22 transition-all duration-500 -z-10 pointer-events-none ${isScrolled
          ? "bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md opacity-100"
          : "bg-transparent backdrop-blur-none border-transparent opacity-0"
          }`}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <nav className={`w-full rounded-full px-6 lg:px-8 transition-all duration-300 ${isScrolled
          ? "bg-white/90 dark:bg-zinc-950/90 border border-zinc-100 dark:border-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          : "bg-transparent border-transparent shadow-none"
          }`}>
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Left Side: Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/tefa.webp"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="rounded-xl h-22 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Center Side: Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-zinc-900 dark:text-zinc-100 font-bold hover:text-primary dark:hover:text-primary transition-all duration-200 text-[15px] relative group"
                >
                  {item.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none transition-colors duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <Menu className="block h-5 w-5" strokeWidth={2.5} />
                ) : (
                  <X className="block h-5 w-5" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer (Overlay & Sidebar) */}
      <div className="lg:hidden">
        {/* Backdrop overlay */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel sliding from right */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white dark:bg-zinc-950 shadow-2xl border-l border-zinc-100 dark:border-zinc-900 z-50 transition-transform duration-300 ease-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } flex flex-col`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center h-16 px-6 border-b border-zinc-100 dark:border-zinc-900">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <span className="text-lg tracking-tight text-zinc-900 dark:text-white font-bold">
                MENU
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <X className="h-6 w-6" strokeWidth={2.5} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block py-2 text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
