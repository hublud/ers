"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectsModal from "@/components/ProjectsModal";
import ScrollToTop from "@/components/ScrollToTop";
import { ProjectDetail } from "@/data/projectsData";
import {
  ArrowLeft,
  MapPin,
  Building,
  Maximize2,
  Clock,
  Briefcase,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ProjectDetailViewProps {
  project: ProjectDetail;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#0070e0] selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onOpenProjects={() => setProjectsModalOpen(true)}
      />

      <main className="grow">
        {/* 2. Hero Header with Project Title */}
        <section className="relative w-full min-h-[340px] sm:min-h-[400px] flex items-center justify-start overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.heroImage || project.cardImage}
              alt={project.title}
              fill
              priority
              className="object-cover object-center opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
            <div className="max-w-4xl text-left text-white space-y-4">
              {/* Category Breadcrumb */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400">
                <Link
                  href="/our-portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
                <span>/</span>
                <Link
                  href={`/${project.categorySlug}`}
                  className="hover:text-white transition-colors"
                >
                  {project.categoryName}
                </Link>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {project.title}
              </h1>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href={`/${project.categorySlug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium backdrop-blur-xs transition-colors border border-white/15"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to {project.categoryName}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Project Detail Main Content */}
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Project Specifications Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                {/* Back to Projects button matching reference style */}
                <div>
                  <Link
                    href={`/${project.categorySlug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0070e0] hover:text-[#005bb8] transition-colors group"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span>BACK TO PROJECTS</span>
                  </Link>
                </div>

                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                    Project Specifications
                  </h3>

                  {/* Project Name */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#0070e0]" />
                      Project Name
                    </span>
                    <p className="text-base font-bold text-slate-900">
                      {project.title}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0070e0]" />
                      Location
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      {project.location}
                    </p>
                  </div>

                  {/* Owner */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#0070e0]" />
                      Owner / Client
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      {project.owner}
                    </p>
                  </div>

                  {/* Square Footage */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#0070e0]" />
                      Square Footage
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      {project.squareFootage}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0070e0]" />
                      Duration
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      {project.duration}
                    </p>
                  </div>

                  {/* Action CTA inside sidebar */}
                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      href="/contact-us/"
                      className="block w-full py-3 px-4 rounded-xl bg-[#0070e0] hover:bg-[#005bb8] text-white text-sm font-semibold transition-colors text-center shadow-xs cursor-pointer"
                    >
                      Inquire About Similar Build
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Overview, Narrative & Photo Gallery */}
              <div className="lg:col-span-8 space-y-10">
                {/* Overview Text */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Project Overview
                  </h2>
                  <div className="flex items-center gap-1.5 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                    <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
                  </div>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {project.overview}
                  </p>

                  {project.description.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Photo Gallery Grid */}
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                      Project Gallery ({project.gallery.length} Images)
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      Click image to expand
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {project.gallery.map((img, index) => (
                      <div
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="group relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
                      >
                        <Image
                          src={img.src}
                          alt={img.caption || project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-xs flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5" />
                            View
                          </span>
                        </div>
                        {img.caption && (
                          <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-slate-950/80 to-transparent text-white text-[11px] font-medium truncate">
                            {img.caption}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link
                    href={`/${project.categorySlug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0070e0] hover:text-[#005bb8]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>View More {project.categoryName} Projects</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setProjectsModalOpen(true)}
                    className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Explore Full Portfolio
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 4. Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image lightbox"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={project.gallery[lightboxIndex].src}
                alt={project.gallery[lightboxIndex].caption || project.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            {project.gallery[lightboxIndex].caption && (
              <p className="mt-4 text-sm text-slate-300 text-center font-medium bg-black/50 px-4 py-1.5 rounded-full">
                {project.gallery[lightboxIndex].caption} ({lightboxIndex + 1} of{" "}
                {project.gallery.length})
              </p>
            )}
          </div>
        </div>
      )}

      {/* 5. Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* 6. Modals */}
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
