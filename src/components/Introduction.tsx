"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface IntroductionProps {
  onOpenSubcontractor?: () => void;
}

export default function Introduction({ onOpenSubcontractor }: IntroductionProps) {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 bg-[#091322] text-white overflow-hidden">
      {/* Background Image Layer matching live site .elementor-element-4a4bf1d4 */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/uploads/2026/06/IMG_20260519_170608375_HDR_AE-scaled.jpg"
          alt="E.R. Stuebner Construction Introduction"
          fill
          priority={false}
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* 0.89 Overlay Opacity matching reference site CSS */}
        <div className="absolute inset-0 bg-[#091526]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#091526]/90 via-[#0a172a]/80 to-[#07111e]/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight text-white mb-6 sm:mb-7">
          Introduction
        </h2>

        {/* Paragraphs */}
        <div className="space-y-3.5 sm:space-y-4 max-w-3xl mx-auto text-white/90 text-sm sm:text-base leading-relaxed font-normal mb-8 sm:mb-10">
          <p>
            Based in <strong className="text-white font-semibold">Reading, Pennsylvania</strong>, we&apos;ve proudly completed <strong className="text-white font-semibold">3,500+ projects</strong> across a wide range of industries earning the confidence of clients who value precision, reliability, and results.
          </p>
          <p>
            Our decades of experience allow us to approach every project with confidence, foresight, and a deep understanding of what it takes to deliver on time and on budget.
          </p>
          <p>
            Whether you&apos;re planning a commercial development, residential build, or renovation, our team is committed to delivering results that stand strong for generations.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/contact-us/?tab=subcontractor"
            className="group inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-black/40 hover:bg-black/60 active:scale-[0.98] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase border border-white/80 hover:border-white transition-all duration-200 backdrop-blur-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#091526]"
          >
            <span>BECOME A SUB CONTRACTOR</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
