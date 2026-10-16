"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onOpenContact?: () => void;
  onOpenProjects?: () => void;
}

export default function Hero({ onOpenContact, onOpenProjects }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays reliably across all modern browsers with audio muted
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted on some devices until user interaction
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[700px] flex items-center bg-[#0d1624] text-white overflow-hidden select-none">
      {/* 1. Live Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/uploads/2026/08/imhe-1536x1138-1.png"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-opacity duration-700"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source
            src="https://res.cloudinary.com/p00tnhpu/video/upload/v1790239074/videoplayback.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback Image if video cannot render */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/uploads/2026/08/imhe-1536x1138-1.png"
            alt="E.R. Stuebner Construction Site Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Dark Navy & Vignette Overlays matching reference website */}
        <div className="absolute inset-0 bg-[#0b172a]/65 backdrop-brightness-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091222]/90 via-[#0a1628]/60 to-[#07111e]/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#091222]/30 to-[#07111e]/90" />
      </div>

      {/* 2. Foreground Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl xl:max-w-5xl">
          {/* Eyebrow Label */}
          <p className="text-sm sm:text-[15px] font-semibold text-white/95 mb-3 sm:mb-4 tracking-normal">
            E.R. Stuebner General Contractor
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[52px] font-extrabold tracking-tight text-white uppercase leading-tight mb-4 sm:mb-5">
            BUILDING WELL BEYOND TODAY
          </h1>

          {/* Description Paragraph with cyan highlighted key terms */}
          <p className="text-xs sm:text-sm md:text-[15px] text-white/90 leading-relaxed mb-8 sm:mb-9 max-w-3xl font-normal">
            75+ years. 3,500+ projects. From{" "}
            <span className="text-[#00c6d7] font-semibold">concept</span> to
            completion, E.R. Stuebner transforms ideas into high-quality, lasting
            structures with precision, integrity, and innovation delivering{" "}
            <span className="text-[#00c6d7] font-semibold">
              trusted construction solutions
            </span>{" "}
            across Pennsylvania and beyond.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {/* Primary Pill Button: OUR PROJECTS */}
            <Link
              href="/our-portfolio/"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#0070e0] hover:bg-[#005bb5] active:scale-[0.98] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-all duration-150 shadow-md shadow-blue-600/30 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#0070e0] focus:ring-offset-2 focus:ring-offset-[#0d1624]"
            >
              OUR PROJECTS
            </Link>

            {/* Secondary Pill Button: CONTACT US */}
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-black/40 hover:bg-black/60 active:scale-[0.98] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase border border-white/25 hover:border-white/50 transition-all duration-150 backdrop-blur-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#0d1624]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
