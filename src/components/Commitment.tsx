"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export default function Commitment() {
  return (
    <div className="w-full">
      {/* 1. "Let's Build Something Great Together..." Section */}
      <section className="w-full bg-[#f0f4f9] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#111c2e] tracking-tight leading-tight">
            Let&apos;s Build Something Great Together...
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-3xl mx-auto font-normal">
            At E.R Stuebner Construction, we don&apos;t just build structures we build lasting relationships and a legacy of excellence. Since 1951, we have been a trusted partner for clients who expect reliability, precision, and superior results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link
              href="/our-portfolio/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore Our Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-300 hover:border-slate-400 transition-all shadow-xs"
            >
              <span>Contact Us</span>
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0070e0] text-xs sm:text-sm font-bold uppercase tracking-wider border border-blue-200 hover:border-blue-300 transition-all shadow-xs"
            >
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team (Careers)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. "Our Commitment" Section with Split Dark Block and Framed Photo */}
      <section className="relative w-full bg-[#e8edf3] overflow-hidden">
        {/* Dark Navy Backdrop Accent on the Left */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[26%] bg-[#0e1626] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Office Photo with Thick Crisp White Border & Frame */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="relative bg-white p-3 sm:p-4 shadow-2xl rounded-none border border-slate-200/60 max-w-lg lg:max-w-none w-full">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/our-commitment.png"
                    alt="E.R. Stuebner Office Interior"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: Our Commitment Heading and Statement */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-slate-800 tracking-tight mb-5">
                Our Commitment
              </h2>
              <p className="text-slate-600 sm:text-slate-700 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal max-w-xl">
                Every project we undertake reflects our dedication to craftsmanship, collaboration, and excellence. We work closely with our clients to ensure every detail is executed to the highest standard on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
