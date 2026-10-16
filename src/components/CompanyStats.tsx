"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Custom hook for smooth animated number counting
function useAnimatedCounter(endValue: number, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth easeOutCubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration, trigger]);

  return count;
}

export default function CompanyStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Trigger counters when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentElem = sectionRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, []);

  const yearsCount = useAnimatedCounter(75, 1800, isInView);
  const projectsCount = useAnimatedCounter(3500, 2200, isInView);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#081322] text-white overflow-hidden select-none"
    >
      {/* Background Image: High-res Uwchlan Hills Elementary School campus matching reference screenshot */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/uwchlan-hills-es-2.jpg"
          alt="E.R. Stuebner Completed School Project"
          fill
          priority={false}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Deep Slate Blue Overlay matching screenshot's dark tint & contrast */}
        <div className="absolute inset-0 bg-[#091729]/78 backdrop-contrast-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/85 via-[#09182b]/70 to-[#071322]/85" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 items-center text-center">
          {/* Column 1: 75 + YEARS IN BUSINESS (Animated Counter) */}
          <div className="flex flex-col items-center">
            {/* Circular Translucent Badge with Crane Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center mb-4 sm:mb-5 shadow-inner transition-transform duration-200 hover:scale-105">
              <svg
                className="w-10 h-10 sm:w-11 sm:h-11 text-white"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Mobile Crane Chassis */}
                <rect x="10" y="42" width="28" height="11" rx="2" fill="currentColor" fillOpacity="0.15" />
                <path d="M15 42 L21 32 L34 32 L34 42" />
                <circle cx="17" cy="53" r="3.5" fill="currentColor" />
                <circle cx="31" cy="53" r="3.5" fill="currentColor" />
                {/* Crane Boom & Lattice */}
                <line x1="26" y1="36" x2="48" y2="12" strokeWidth="3" />
                <line x1="31" y1="36" x2="48" y2="12" strokeWidth="1.8" />
                <line x1="28" y1="28" x2="35" y2="34" strokeWidth="1.5" />
                <line x1="37" y1="20" x2="43" y2="25" strokeWidth="1.5" />
                {/* Cable & Suspended Beam */}
                <line x1="48" y1="12" x2="48" y2="28" strokeWidth="1.5" />
                <path d="M48 28 L46 32 L50 32 Z" fill="currentColor" />
                <rect x="41" y="34" width="16" height="5" rx="1" fill="currentColor" />
              </svg>
            </div>
            {/* Animated Number Stat */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1 sm:mb-2 tabular-nums">
              {yearsCount} +
            </div>
            {/* Label */}
            <div className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
              YEARS IN BUSINESS
            </div>
          </div>

          {/* Column 2: 3,500 + PROJECTS COMPLETED (Animated Counter) */}
          <div className="flex flex-col items-center">
            {/* Circular Translucent Badge with 5-Star User Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center mb-4 sm:mb-5 shadow-inner transition-transform duration-200 hover:scale-105">
              <svg
                className="w-10 h-10 sm:w-11 sm:h-11 text-white"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* User Head & Shoulders */}
                <circle cx="32" cy="35" r="6.5" />
                <path d="M22 52 C22 45 26 43 32 43 C38 43 42 45 42 52" />
                {/* 5 Stars arranged in arc */}
                <polygon points="17,30 18,32.5 21,32.5 18.5,34.5 19.5,37 17,35.5 14.5,37 15.5,34.5 13,32.5 16,32.5" fill="currentColor" stroke="none" />
                <polygon points="23,22 24,24.5 27,24.5 24.5,26.5 25.5,29 23,27.5 20.5,29 21.5,26.5 19,24.5 22,24.5" fill="currentColor" stroke="none" />
                <polygon points="32,15 33.5,18.5 37.5,18.5 34.5,21 35.5,24.5 32,22.5 28.5,24.5 29.5,21 26.5,18.5 30.5,18.5" fill="currentColor" stroke="none" />
                <polygon points="41,22 42,24.5 45,24.5 42.5,26.5 43.5,29 41,27.5 38.5,29 39.5,26.5 37,24.5 40,24.5" fill="currentColor" stroke="none" />
                <polygon points="47,30 48,32.5 51,32.5 48.5,34.5 49.5,37 47,35.5 44.5,37 45.5,34.5 43,32.5 46,32.5" fill="currentColor" stroke="none" />
              </svg>
            </div>
            {/* Animated Number Stat */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1 sm:mb-2 tabular-nums">
              {projectsCount.toLocaleString()} +
            </div>
            {/* Label */}
            <div className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
              PROJECTS COMPLETED
            </div>
          </div>

          {/* Column 3: FORWARD THINKING */}
          <div className="flex flex-col items-center justify-center">
            {/* Stylized Modern Peak / Chevron Icon */}
            <div className="h-20 sm:h-24 flex items-center justify-center mb-4 sm:mb-5">
              <svg
                className="w-11 h-11 sm:w-13 sm:h-13 text-white transition-transform duration-200 hover:scale-105"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Dual upward peak / forward chevron mark matching screenshot */}
                <path d="M16 46 L32 16 L46 44 L54 36" />
                <path d="M28 46 L40 24" strokeWidth="2.5" opacity="0.6" />
              </svg>
            </div>
            {/* Label in Two Lines */}
            <div className="text-base sm:text-lg lg:text-xl font-bold tracking-wider text-white uppercase leading-snug">
              <div>FORWARD</div>
              <div>THINKING</div>
            </div>
          </div>

          {/* Column 4: RELIABLE & TRANSPARENT (With Matching Icon) */}
          <div className="flex flex-col items-center justify-center">
            {/* Clean Trust & Transparency Shield Icon */}
            <div className="h-20 sm:h-24 flex items-center justify-center mb-4 sm:mb-5">
              <svg
                className="w-11 h-11 sm:w-13 sm:h-13 text-white transition-transform duration-200 hover:scale-105"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Shield with Integrity Checkmark representing Reliability & Transparency */}
                <path d="M32 12 L50 19 C50 36 32 49 32 53 C32 49 14 36 14 19 Z" />
                <polyline points="24 32 29 37 40 24" strokeWidth="3.5" />
              </svg>
            </div>
            {/* Label in Two Lines */}
            <div className="text-base sm:text-lg lg:text-xl font-bold tracking-wider text-white uppercase leading-snug">
              <div>RELIABLE &</div>
              <div>TRANSPERENT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
