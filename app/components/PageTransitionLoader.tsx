"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true); // Start as loading for the initial mount
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);
  const lastPathname = useRef<string | null>(null);

  // Set global flag in render phase so child components see it before their useEffects run
  if (typeof window !== "undefined") {
    (window as any).__loaderActive = isLoading;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__loaderActive = isLoading;
      if (!isLoading) {
        window.dispatchEvent(new Event("loader-complete"));
      }
    }
  }, [isLoading]);

  // 1. Detect Global Internal Link Clicks
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const targetAttr = anchor.getAttribute("target");
      if (targetAttr && targetAttr !== "_self") return;

      // Skip modifier keys (which open in new tab)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      // Skip non-http schemes
      if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;

      // Check origin
      const currentUrl = new URL(window.location.href);
      const targetUrl = new URL(href, window.location.href);
      if (currentUrl.origin !== targetUrl.origin) return;

      // Skip if it's navigating to the same page (same pathname)
      if (currentUrl.pathname === targetUrl.pathname) return;

      // Valid internal page navigation! Trigger loading screen
      setIsLoading(true);
      setShouldRender(true);
      setProgress(10); // Start progress bar at 10%
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // 2. Detect Page Changes (Next.js Pathname Change) & Preload Images
  useEffect(() => {
    // Skip if pathname has not changed (e.g. only search params or hash changed)
    if (lastPathname.current !== null && lastPathname.current === pathname) {
      return;
    }

    lastPathname.current = pathname;

    // Trigger loading when pathname changes (covers initial mount and back/forward buttons)
    setIsLoading(true);
    setShouldRender(true);
    setProgress(10);

    const timer = setTimeout(() => {
      // 1. Query all images inside the DOM after the new page renders
      const images = Array.from(document.querySelectorAll("img"));
      const imageUrls = images
        .map((img) => img.src || img.getAttribute("data-src") || "")
        .filter((src) => src && !src.startsWith("data:")); // Ignore base64/inline svg

      // Remove duplicates
      const uniqueUrls = Array.from(new Set(imageUrls));

      if (uniqueUrls.length === 0) {
        // If there are no images, complete progress quickly
        setProgress(100);
        const exitTimer = setTimeout(() => {
          setIsLoading(false);
        }, 300);
        return () => clearTimeout(exitTimer);
      }

      let loadedCount = 0;
      const totalImages = uniqueUrls.length;

      // Image loading progress handler
      const handleImageLoad = () => {
        loadedCount++;
        // Calculate progress (scaled from 10% to 95%)
        const currentProgress = Math.min(
          95,
          Math.round((loadedCount / totalImages) * 85) + 10
        );
        setProgress(currentProgress);

        if (loadedCount === totalImages) {
          setProgress(100);
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
        }
      };

      // Create browser Image objects to preload each source
      uniqueUrls.forEach((url) => {
        const img = new window.Image();
        img.src = url;

        if (img.complete) {
          handleImageLoad();
        } else {
          img.onload = handleImageLoad;
          img.onerror = handleImageLoad; // Count error as complete so loader doesn't get stuck
        }
      });

      // Safety net timeout (2.5 seconds max) to prevent loader from hanging indefinitely
      const safetyTimeout = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }, 2500);

      return () => clearTimeout(safetyTimeout);
    }, 100); // Small delay to let Next.js update the DOM

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Handle transition exit animation timing
  useEffect(() => {
    if (!isLoading) {
      const exitTimer = setTimeout(() => {
        setShouldRender(false);
      }, 600); // Match CSS transition duration
      return () => clearTimeout(exitTimer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isLoading
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
    >
      {/* Subtle radial gradient background for premium aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(250,250,250,1)_100%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with gentle pulse animation */}
        <div className="relative w-20 h-20 mb-4 flex items-center justify-center ">
          <Image
            src="/tefa.webp"
            alt="SIXORA Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </div>

        {/* Brand Text */}
        {/* <h2 className="text-xl font-bold tracking-[0.25em] text-slate-800 font-sans mb-6">
          SIXORA
        </h2> */}

        {/* Progress Bar Container */}
        <div className="w-56 h-1 bg-zinc-100 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-[#65C4FF] transition-all duration-300 ease-out shadow-[0_0_8px_#65C4FF]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Display */}
        <span className="text-[11px] font-bold text-slate-400 mt-2 tracking-wider">
          {progress}%
        </span>
      </div>
    </div>
  );
}
