"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Building2,
  School,
  Stethoscope,
  Landmark,
  Shield,
  Factory,
  CheckCircle2,
  ArrowRight,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  COMMERCIAL_PROJECTS,
  EDUCATION_PROJECTS,
  HEALTHCARE_PROJECTS,
  COMMUNITY_PROJECTS,
  PUBLIC_SECTOR_PROJECTS,
  ProjectDetail,
} from "@/data/projectsData";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

interface ProjectCategory {
  id: string;
  name: string;
  badge: string;
  filterKey: string;
  tagline: string;
  href: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
  stats: string;
}

const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    badge: "Healthcare",
    filterKey: "Healthcare",
    tagline: "Clinical Precision & Life-Safety Compliance",
    href: "/healthcare/",
    image: "/images/projects/healthcare-hero.jpg",
    icon: Stethoscope,
    description:
      "Advanced clinical environments, surgical suites, multi-specialty outpatient pavilions, and specialized radiation therapy vaults.",
    highlights: ["Surgical Suites", "Radiation Vaults", "Outpatient Pavilions", "Infection Control"],
    stats: "600+ Clinical Projects",
  },
  {
    id: "education",
    name: "Education",
    badge: "Education",
    filterKey: "Education",
    tagline: "K-12 Districts & Collegiate Campuses",
    href: "/education/",
    image: "/images/projects/education-hero.jpg",
    icon: School,
    description:
      "Inspiring academic environments with modern K-12 school districts, high schools, STEM laboratories, lecture halls, and athletic complexes.",
    highlights: ["K-12 School Districts", "STEM Academies", "Collegiate Labs", "Athletic Stadiums"],
    stats: "1,200+ Academic Projects",
  },
  {
    id: "commercial",
    name: "Commercial, Retail & Hospitality",
    badge: "Commercial",
    filterKey: "Commercial",
    tagline: "Corporate Headquarters, Retail & Aviation",
    href: "/commercial-retail-and-hospitality/",
    image: "/images/projects/commercial-hero.jpg",
    icon: Building2,
    description:
      "Dynamic business environments, Class-A corporate headquarters, financial banking branches, municipal golf clubhouses, hotels, and airport terminals.",
    highlights: ["Aviation Terminals", "Banking Branches", "Corporate HQ", "Golf Clubhouses"],
    stats: "850+ Commercial Builds",
  },
  {
    id: "institutional",
    name: "Community & Institutional",
    badge: "Institutional",
    filterKey: "Institutional",
    tagline: "Civic Centers, Non-Profits & Landmarks",
    href: "/community-and-institutional/",
    image: "/images/projects/community-hero.jpg",
    icon: Landmark,
    description:
      "Spaces designed for civic and community missions—community gathering centers, places of worship, cultural landmark preservations, and institutional hubs.",
    highlights: ["Civic Community Hubs", "Places of Worship", "Historic Preservations", "Regional Centers"],
    stats: "500+ Community Landmarks",
  },
  {
    id: "public-sector",
    name: "Public Sector",
    badge: "Public Sector",
    filterKey: "Public Sector",
    tagline: "Municipal, Transit & Emergency Services",
    href: "/public-sector/",
    image: "/images/projects/public-sector-hero.jpg",
    icon: Shield,
    description:
      "Vital municipal infrastructure including 24/7 emergency fire rescue stations, intermodal passenger transit terminals, and public civic operations.",
    highlights: ["Fire Rescue Stations", "Transit Terminals", "Municipal Centers", "Emergency Facilities"],
    stats: "400+ Public Works",
  },
  {
    id: "industrial",
    name: "Industrial & Full Portfolio",
    badge: "Industrial",
    filterKey: "Industrial",
    tagline: "Distribution Terminals & Comprehensive Builds",
    href: "/our-portfolio/",
    image: "/images/portfolio-hero.jpg",
    icon: Factory,
    description:
      "Pre-engineered structural steel industrial distribution terminals, manufacturing plants, logistics hubs, and all 3,500+ completed builds since 1951.",
    highlights: ["Distribution Hubs", "Heavy Industrial", "Pre-Engineered Steel", "Full 75-Yr Portfolio"],
    stats: "3,500+ Projects Completed",
  },
];

const CATEGORY_PROJECTS_MAP: Record<string, ProjectDetail[]> = {
  Commercial: COMMERCIAL_PROJECTS,
  Education: EDUCATION_PROJECTS,
  Healthcare: HEALTHCARE_PROJECTS,
  Institutional: COMMUNITY_PROJECTS,
  "Public Sector": PUBLIC_SECTOR_PROJECTS,
  Industrial: COMMERCIAL_PROJECTS.slice(0, 3),
};

export default function ProjectsModal({ isOpen, onClose, onOpenContact }: ProjectsModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (!isOpen) return null;

  const filterTabs = [
    "All",
    "Commercial",
    "Education",
    "Healthcare",
    "Institutional",
    "Public Sector",
    "Industrial",
  ];

  const filteredCategories =
    selectedCategory === "All"
      ? PROJECT_CATEGORIES
      : PROJECT_CATEGORIES.filter((cat) => cat.filterKey === selectedCategory);

  const featuredProjects =
    selectedCategory !== "All" && CATEGORY_PROJECTS_MAP[selectedCategory]
      ? CATEGORY_PROJECTS_MAP[selectedCategory]
      : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f1929] px-6 py-5 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#00c6d7] font-semibold block mb-1">
              Portfolio &amp; Track Record
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              3,500+ Projects Built Over 75+ Years
            </h2>
            <p className="text-xs text-slate-300 hidden sm:block mt-0.5">
              Select any project category below to explore dedicated builds, specs, and case studies.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-2 overflow-x-auto bg-slate-50 shrink-0 scrollbar-thin">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setSelectedCategory(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === tab
                  ? "bg-[#0070e0] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-200/70 border border-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Category Cards Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                {selectedCategory === "All"
                  ? "Explore Project Categories (Click to View)"
                  : `${selectedCategory} Sector Overview`}
              </h3>
              <span className="text-xs text-slate-400">
                {filteredCategories.length} {filteredCategories.length === 1 ? "Category" : "Categories"} Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Link
                    key={category.id}
                    href={category.href}
                    onClick={onClose}
                    className="group rounded-2xl border-2 border-gray-200/90 hover:border-[#0070e0] hover:shadow-xl transition-all duration-300 bg-white flex flex-col overflow-hidden text-left cursor-pointer"
                  >
                    {/* Card Banner Image */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0070e0] text-white shadow-md">
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{category.badge}</span>
                        </span>
                      </div>

                      {/* Region Tag */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-xs text-white">
                          <MapPin className="w-3 h-3 text-blue-300" />
                          <span>PA &amp; Beyond</span>
                        </span>
                      </div>

                      {/* Tagline */}
                      <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                        <p className="text-xs font-semibold text-blue-200 line-clamp-1 drop-shadow-xs">
                          {category.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-5 sm:p-6 flex flex-col grow justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0070e0] transition-colors leading-snug">
                            {category.name}
                          </h4>
                          <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0070e0] group-hover:bg-[#0070e0] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {category.description}
                        </p>
                      </div>

                      {/* Sub-sector feature pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {category.highlights.slice(0, 3).map((hl) => (
                          <span
                            key={hl}
                            className="inline-block px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-[#0070e0] transition-colors"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Footer Bar */}
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                        <span className="font-semibold text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Precision &amp; Quality Delivery</span>
                        </span>
                        <span className="font-bold text-[#0070e0] group-hover:underline flex items-center gap-1">
                          <span>Explore &gt; {category.badge}</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Featured Individual Projects if category filtered */}
          {featuredProjects.length > 0 && (
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                  Featured {selectedCategory} Project Case Studies
                </h3>
                <span className="text-xs text-slate-500">
                  Click any project for specs &amp; gallery
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}/`}
                    onClick={onClose}
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#0070e0] hover:shadow-md transition-all duration-200 bg-white group flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0070e0]">
                          {project.categoryName}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#0070e0] transition-colors mb-1.5 line-clamp-1">
                        {project.title}
                      </h5>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                        {project.overview}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-slate-600">
                      <span>{project.squareFootage || "Completed"}</span>
                      <span className="font-semibold text-[#0070e0] group-hover:underline flex items-center gap-1">
                        <span>View Project</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Call to action card */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 shadow-md">
            <div>
              <h4 className="text-base font-bold mb-1">
                Have an upcoming project in Pennsylvania or neighboring states?
              </h4>
              <p className="text-xs text-slate-300">
                Let our team of experienced general contractors and project managers turn your vision into reality.
              </p>
            </div>
            <Link
              href="/contact-us/"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-colors shadow-md inline-flex items-center justify-center cursor-pointer"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
