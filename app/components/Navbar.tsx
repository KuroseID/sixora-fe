"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "#" },
    { label: "Beranda", href: "#" },
    { label: "Beranda", href: "#" },
    { label: "Beranda", href: "#" },
    { label: "Beranda", href: "#" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-black border-b border-zinc-100 dark:border-zinc-900 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl tracking-tight text-zinc-900 dark:text-white">
                MANA LOGO NYA
              </span>
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

          {/* Right Side: Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="bg-primary hover:bg-primary-hover text-white font-bold px-6 py-1.5 rounded-xl transition-all duration-200 active:scale-[0.97] text-center min-w-[100px] shadow-sm shadow-primary/10 hover:shadow-md hover:shadow-primary/20"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="border-2 border-primary text-primary hover:bg-primary/5 font-bold px-6 py-1 rounded-xl transition-all duration-200 active:scale-[0.97] text-center min-w-[100px]"
            >
              Register
            </Link>
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
                <Menu className="block h-6 w-6" strokeWidth={2.5} />
              ) : (
                <X className="block h-6 w-6" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`${isOpen ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"
          } lg:hidden border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-all duration-300 ease-out`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-3 py-2 rounded-lg text-base font-bold text-zinc-900 dark:text-zinc-100 hover:text-primary dark:hover:text-primary hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 flex flex-col gap-3 px-3">
            <Link
              href="/login"
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-xl transition-all active:scale-[0.98] text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="w-full border-2 border-primary text-primary hover:bg-primary/5 font-bold py-3 rounded-xl transition-all active:scale-[0.98] text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
