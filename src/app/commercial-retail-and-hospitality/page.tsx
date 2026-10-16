"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectsModal from "@/components/ProjectsModal";
import ScrollToTop from "@/components/ScrollToTop";
import { COMMERCIAL_PROJECTS } from "@/data/projectsData";
import { ArrowRight, Building, Layers } from "lucide-react";

export default function CommercialRetailHospitalityPage() {
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
        {/* 2. Hero Section */}
        <section className="relative w-full min-h-[460px] sm:min-h-[520px] flex items-center justify-start overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/projects/commercial-hero.jpg"
              alt="Commercial, Retail & Hospitality - E.R. Stuebner"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Dark gradient overlay matching live site aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 w-full">
            <div className="max-w-4xl text-left text-white space-y-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400">
                <Link href="/our-portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
                <span>/</span>
                <span>Category</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold tracking-tight text-white leading-[1.12]">
                Commercial, Retail &amp; Hospitality
              </h1>
              <p className="max-w-2xl text-slate-100 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
                From corporate headquarters and financial banking branches to municipal clubhouses, hotels, and airport terminals—E.R. Stuebner builds dynamic environments that perform for businesses and welcome communities.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Projects Grid Section */}
        <section className="w-full bg-[#fbfcfd] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Accent */}
            <div className="text-center mb-14 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111633] tracking-tight">
                Featured Commercial Projects
              </h2>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
                Click on any project below to view detailed specifications, scope of work, and high-resolution photo galleries.
              </p>
            </div>

            {/* 4 Project Cards in 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {COMMERCIAL_PROJECTS.map((project) => (
                <div
                  key={project.slug}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 block"
                  >
                    <Image
                      src={project.cardImage}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs">
                      {project.location}
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 flex flex-col items-center text-center grow justify-between space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111c2e] group-hover:text-[#0070e0] transition-colors leading-snug">
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
                        {project.overview}
                      </p>
                    </div>

                    {/* View Project Detail Button */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0070e0] text-white text-sm font-semibold hover:bg-[#005bb8] transition-colors shadow-xs group-hover:shadow-md cursor-pointer w-full sm:w-auto"
                    >
                      <span>View Project Detail</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout & Category Cross-links */}
            <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <h4 className="text-xl font-bold text-slate-900">
                  Looking for other building sectors?
                </h4>
                <p className="text-sm text-slate-600 max-w-xl">
                  Explore our extensive experience across education campuses, community institutions, healthcare facilities, and municipal public works.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/education"
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Education
                </Link>
                <Link
                  href="/community-and-institutional"
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Community &amp; Institutional
                </Link>
                <Link
                  href="/healthcare"
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Healthcare
                </Link>
                <Link
                  href="/public-sector"
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Public Sector
                </Link>
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
