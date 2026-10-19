"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectsModal from "@/components/ProjectsModal";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Search,
  SlidersHorizontal,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  ArrowLeft,
  Grid3X3,
  LayoutGrid,
  Sparkles
} from "lucide-react";
import rawImagesData from "@/data/galleryImages.json";

interface GalleryImageItem {
  id: string;
  src: string;
  title: string;
  category: string;
  filename: string;
  size: number;
}

const ALL_IMAGES: GalleryImageItem[] = rawImagesData as GalleryImageItem[];

const CATEGORIES = [
  "All",
  "Education",
  "Commercial",
  "Institutional",
  "Healthcare",
  "Field & Construction",
];

const ITEMS_PER_PAGE = 36;

export default function GalleryImagePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
  const [gridColumns, setGridColumns] = useState<3 | 4>(3);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered images calculation
  const filteredImages = useMemo(() => {
    let result = ALL_IMAGES;

    if (selectedCategory !== "All") {
      result = result.filter((img) => img.category === selectedCategory);
    }

    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (img) =>
          img.title.toLowerCase().includes(q) ||
          img.filename.toLowerCase().includes(q) ||
          img.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  // Reset pagination when category or search changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [selectedCategory, searchQuery]);

  // Current slice of images to show
  const visibleImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  const hasMore = visibleCount < filteredImages.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredImages.length));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredImages.length : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredImages.length) % filteredImages.length
            : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="/images/gallery/gallery-hero.webp"
            alt="E.R. Stuebner Complete Image Gallery"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/70" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 hover:bg-white/20 text-blue-300 border border-white/20 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Main Gallery</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
              Image Gallery
            </h1>

            {/* Custom Blue Accent Mark */}
            <div className="flex items-center justify-center gap-1.5 mt-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
            </div>

            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              Explore our complete archival photography collection featuring over 800+ authentic project builds, site milestones, structural craftsmanship, and finished facilities.
            </p>
          </div>
        </section>

        {/* 2. Interactive Search, Filter & Controls Bar */}
        <section className="sticky top-20 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? ALL_IMAGES.length
                    : ALL_IMAGES.filter((img) => img.category === cat).length;
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#0070e0] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? "bg-white/25 text-white"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input & Grid Switcher */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#0070e0] focus:border-transparent bg-slate-50 focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Grid density toggle (desktop) */}
              <div className="hidden lg:flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setGridColumns(3)}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    gridColumns === 3
                      ? "bg-white text-[#0070e0] shadow-xs"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                  title="3 Columns"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setGridColumns(4)}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    gridColumns === 4
                      ? "bg-white text-[#0070e0] shadow-xs"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                  title="4 Columns"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Photos Grid Section */}
        <section className="w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-slate-50/40">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Results counter */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500">
              <div>
                Showing <strong className="text-slate-900">{visibleImages.length}</strong> of{" "}
                <strong className="text-slate-900">{filteredImages.length}</strong> images
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </div>
              {filteredImages.length > 0 && (
                <div className="text-xs text-slate-400">
                  Click any image for full-screen view
                </div>
              )}
            </div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  No images match your filter
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Try adjusting your search keywords or switching category filters to view more project photos.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 rounded-lg bg-[#0070e0] text-white text-xs font-semibold hover:bg-[#005bb5] transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* The Image Grid */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                gridColumns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
              } gap-5 sm:gap-6`}
            >
              {visibleImages.map((img, index) => (
                <ArchiveCard
                  key={img.id}
                  img={img}
                  onClick={() => setLightboxIndex(index)}
                />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center pt-8 pb-4">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0070e0] hover:bg-[#005bb5] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Load More Images ({filteredImages.length - visibleCount} remaining)</span>
                  <Layers className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 4. Lightbox Modal */}
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[94vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null
                      ? (prev - 1 + filteredImages.length) % filteredImages.length
                      : 0
                  )
                }
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredImages.length : 0
                  )
                }
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image View */}
              <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].title}
                  fill
                  priority
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target) target.src = "/images/gallery/gallery-1.jpg";
                  }}
                />
              </div>

              {/* Image Details Bar */}
              <div className="w-full mt-3 px-4 py-2 flex items-center justify-between text-white text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-base block sm:inline sm:mr-3">
                    {filteredImages[lightboxIndex].title}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#0070e0] text-white">
                    {filteredImages[lightboxIndex].category}
                  </span>
                </div>
                <div className="text-slate-400">
                  {lightboxIndex + 1} of {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Global Modals & ScrollToTop */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ProjectsModal isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} />
      <ScrollToTop />
    </div>
  );
}

function ArchiveCard({
  img,
  onClick,
}: {
  img: GalleryImageItem;
  onClick: () => void;
}) {
  const [src, setSrc] = useState(img.src);

  return (
    <div
      onClick={onClick}
      className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
    >
      <Image
        src={src}
        alt={img.title}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => {
          if (src !== "/images/gallery/gallery-1.jpg") {
            setSrc("/images/gallery/gallery-1.jpg");
          }
        }}
      />

      {/* Category Pill Tag */}
      <div className="absolute top-3 left-3 z-10">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-950/75 backdrop-blur-xs text-white border border-white/20">
          {img.category}
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-white z-20">
        <h3 className="text-sm sm:text-base font-bold line-clamp-1 leading-snug drop-shadow-xs">
          {img.title}
        </h3>
        <div className="flex items-center justify-between text-[11px] text-slate-300 mt-1">
          <span>Click to enlarge</span>
          <Maximize2 className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

