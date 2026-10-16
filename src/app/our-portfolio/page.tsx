"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectsModal from "@/components/ProjectsModal";
import ScrollToTop from "@/components/ScrollToTop";
import { Layers, Building2, Landmark, Store, Users, ArrowRight } from "lucide-react";

interface SectorItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SECTORS: SectorItem[] = [
  {
    id: "commercial",
    title: "Commercial",
    description:
      "We create dynamic business environments that support productivity, growth, and long-term success. From office buildings to mixed-use developments, our commercial projects are built to perform.",
    icon: Layers,
  },
  {
    id: "industrial",
    title: "Industrial",
    description:
      "Efficiency, durability, and functionality drive our industrial construction. We deliver facilities that meet demanding operational needs while maintaining flexibility for future expansion.",
    icon: Building2,
  },
  {
    id: "institutional",
    title: "Institutional",
    description:
      "We proudly construct spaces that serve communities—schools, healthcare facilities, and government buildings designed with purpose, safety, and longevity in mind.",
    icon: Landmark,
  },
  {
    id: "retail",
    title: "Retail",
    description:
      "From storefronts to large retail centers, we build engaging spaces that enhance customer experience and reflect each brand’s identity.",
    icon: Store,
  },
  {
    id: "religious-community",
    title: "Religious & Community",
    description:
      "We understand the importance of spaces that bring people together. Our team builds places of worship and community centers with care, respect, and attention to detail.",
    icon: Users,
  },
];

export default function OurPortfolioPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#0070e0] selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onOpenProjects={() => setProjectsModalOpen(true)}
      />

      <main className="grow">
        {/* 2. Hero Section matching live page-id 237 */}
        <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-start overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/portfolio-hero.jpg"
              alt="E.R. Stuebner Portfolio Hallway"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Dark gradient overlay matching live site aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 w-full">
            <div className="max-w-4xl text-left text-white space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight text-white leading-[1.12]">
                Building Excellence Across Every Sector
              </h1>
              <div className="space-y-4 max-w-3xl text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  At E.R. Stuebner, every project tells a story—of vision,
                  collaboration, and craftsmanship. With decades of experience and
                  more than 3,500 completed projects, we’ve built a diverse
                  portfolio that reflects our commitment to quality, innovation,
                  and lasting relationships.
                </p>
                <p>
                  From small-scale renovations to large, complex facilities
                  exceeding 300,000 square feet, our work spans a wide range of
                  industries. No matter the size or scope, each project is
                  approached with the same level of dedication, precision, and
                  care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What We Build Section */}
        <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header with Blue Accent Mark */}
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111633] tracking-tight">
                What We Build
              </h2>
              <div className="flex items-center justify-center gap-1.5 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>
            </div>

            {/* 5 Sector Cards Grid (3 top, 2 bottom) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 items-start">
              {SECTORS.map((sector) => {
                const Icon = sector.icon;
                return (
                  <div
                    key={sector.id}
                    id={sector.id}
                    className="group flex flex-row items-start gap-6 transition-transform duration-200"
                  >
                    {/* 80px Circular Icon Container */}
                    <div className="w-20 h-20 rounded-full border border-slate-200/90 flex items-center justify-center shrink-0 text-slate-800 transition-all duration-300 group-hover:border-[#0070e0] group-hover:bg-[#0070e0]/5 group-hover:text-[#0070e0] group-hover:shadow-md bg-white">
                      <Icon className="w-9 h-9 stroke-[1.6]" />
                    </div>

                    {/* Content Body */}
                    <div className="space-y-2.5">
                      <h3 className="text-lg sm:text-[19px] font-bold text-[#211E1C] transition-colors duration-200 group-hover:text-[#0070e0] leading-snug">
                        {sector.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#57585E] leading-relaxed font-normal">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Callout Button to open all projects */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50/70 rounded-2xl p-8 sm:p-10">
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="text-xl font-bold text-slate-900">
                  Ready to explore our featured project galleries?
                </h4>
                <p className="text-sm text-slate-600">
                  Browse through our extensive project catalog and case studies across Pennsylvania and beyond.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setProjectsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0070e0] text-white font-semibold text-sm hover:bg-[#005bb8] transition-colors shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* 5. Modals & Utilities */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <ProjectsModal
        isOpen={projectsModalOpen}
        onClose={() => setProjectsModalOpen(false)}
        onOpenContact={() => {
          setProjectsModalOpen(false);
          setContactModalOpen(true);
        }}
      />
      <ScrollToTop />
    </div>
  );
}
