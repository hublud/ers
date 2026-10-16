"use client";

import React from "react";

const PHASES = [
  {
    title: "New Construction",
    description: "Ground-up builds designed for performance and longevity",
  },
  {
    title: "Expansion",
    description: "Seamlessly growing your existing space",
  },
  {
    title: "Modernization",
    description: "Updating facilities for today’s standards and future needs",
  },
  {
    title: "Rehabilitation",
    description: "Restoring and revitalizing structures with care and precision",
  },
];

export default function ConstructionPhases() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-tight text-slate-800 max-w-4xl mx-auto leading-snug">
          We are fully equipped to handle every phase of your construction journey.
        </h2>

        {/* Custom Blue Accent Mark (Three dots + horizontal bar) */}
        <div className="flex items-center justify-center gap-1.5 mt-4 mb-10 sm:mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
          <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {PHASES.map((phase) => (
            <div
              key={phase.title}
              className="bg-white border border-gray-200/90 rounded-xl p-6 sm:p-7 transition-all duration-200 hover:shadow-lg hover:border-[#0070e0]/50 hover:-translate-y-0.5 group"
            >
              <h3 className="text-lg font-bold text-[#0070e0] group-hover:text-[#005bb5] transition-colors mb-2">
                {phase.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
