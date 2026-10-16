"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectsModal from "@/components/ProjectsModal";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  Users,
  Heart,
  Shield,
  Layers,
  X,
  Compass
} from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  date: string;
  image: string;
  summary: string;
  details: string;
  location: string;
}

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: "june-team-building",
    title: "June 2026 Team Building",
    date: "June 2026",
    image: "/images/behind-the-build/team-building.jpg",
    summary:
      "A full day of hands-on camaraderie, tactical communication workshops, and collaborative challenges bringing our office and field leaders together.",
    details:
      "Strong projects are built by strong communication. Our June 2026 team building brought together project managers, estimators, field superintendents, and executive leadership for collaborative problem-solving, strategic goal-setting, and camaraderie. Activities tested teamwork under pressure and underscored our shared dedication to safety, precision, and trust across all project sites.",
    location: "Berks County, PA",
  },
  {
    id: "memorial-day-2024",
    title: "Memorial Day Picnic 2024",
    date: "May 2024",
    image: "/images/behind-the-build/memorial-day-2024.webp",
    summary:
      "Honoring service and spending quality time with our team members, families, and partners with games and summer cookout festivities.",
    details:
      "A beloved company tradition, our Memorial Day Picnic provides an opportunity to pause, reflect, and honor those who served our nation, while expressing our heartfelt gratitude to the families who support our crews year-round. It’s moments like these that reinforce our identity not just as colleagues, but as a close-knit community.",
    location: "Reading, PA",
  },
  {
    id: "march-outing-2025",
    title: "March Company Outing 2025",
    date: "March 2025",
    image: "/images/behind-the-build/march-outing-2025.webp",
    summary:
      "Spring company gathering celebrating multi-year milestone completions and recognizing stand-out team contributions.",
    details:
      "Stepping away from active construction sites, our March 2025 gathering honored major milestones across our commercial, institutional, and healthcare portfolios. We celebrated several team anniversaries and recognized the unwavering reliability of our superintendents and trade partners who deliver each project safely and on schedule.",
    location: "King of Prussia, PA",
  },
  {
    id: "reading-phils",
    title: "Reading Fightin Phils Outing",
    date: "Summer Outing",
    image: "/images/behind-the-build/reading-phils.webp",
    summary:
      "Cheering on our local baseball team at FirstEnergy Stadium, celebrating our roots in Reading and enjoying an evening together under the lights.",
    details:
      "Deeply rooted in Reading, PA since 1951, E.R. Stuebner takes immense pride in giving back to our local community. Our annual night at FirstEnergy Stadium cheering on the Reading Fightin Phils brought together generations of Stuebner team members for fireworks, ballpark favorites, and community pride.",
    location: "FirstEnergy Stadium, Reading, PA",
  },
  {
    id: "march-madness-2024",
    title: "March Madness Company Outing 2024",
    date: "March 2024",
    image: "/images/behind-the-build/march-madness-2024.webp",
    summary:
      "Friendly tournament competition, company-wide game viewing, and team bonding during college basketball tournament season.",
    details:
      "Our March Madness celebration brings out the fun, friendly competition across departments. From tournament brackets to shared lunches, it’s a spirited tradition that highlights our team’s high energy and collaborative camaraderie beyond everyday blueprints and schedules.",
    location: "Reading Corporate Headquarters",
  },
  {
    id: "memorial-day-picnic",
    title: "Memorial Day Picnic",
    date: "Annual Tradition",
    image: "/images/behind-the-build/memorial-day-picnic.webp",
    summary:
      "Our time-honored annual summer cookout recognizing our field craftworkers, superintendents, and office staff.",
    details:
      "From generation to generation, E.R. Stuebner company picnics have been a cornerstone of our heritage. Good food, lively games, and shared laughs provide the foundation for the deep trust and long-lasting relationships that define our culture.",
    location: "Berks County Park Pavilion",
  },
];

export default function BehindTheBuildPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [selectedStory, setSelectedStory] = useState<AccordionItem | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/behind-the-build/build-hero.jpg"
            alt="Behind the Build - E.R. Stuebner Construction"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-900/65 backdrop-brightness-90" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
            <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Where Vision Meets Craftsmanship
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
              Behind the Build
            </h1>

            {/* Accent mark */}
            <div className="flex items-center justify-center gap-1.5 mt-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
            </div>

            <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              At E.R. Stuebner, every project tells a story of collaboration, precision, and a commitment to doing things the right way. “Behind the Build” is where we pull back the curtain and show you how ideas transform into finished spaces that stand the test of time.
            </p>
          </div>
        </section>

        {/* 2. "The People Behind the Projects" Culture Story Section */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0]">
                Culture &amp; Community
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
                The People Behind the Projects
              </h2>
              {/* Dotted divider */}
              <div className="flex items-center justify-center gap-1.5 mt-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs">
              <p>
                At <strong className="text-slate-900 font-semibold">E.R. Stuebner</strong>, construction is only part of the story—people are what truly drive everything we do.
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">Behind the Build</strong> is a window into individuals and relationships that bring our projects to life. It’s where you’ll find the moments that don’t always make it onto the drawings: the collaboration between teammates, the pride in a job well done, and the shared experiences that connect our crews on and off the job site.
              </p>
              <p>
                From team milestones and everyday wins to community involvement and time spent supporting one another, this is where our culture comes into focus. It’s a reflection of dedication, trust, and camaraderie that define how we work.
              </p>
              <p className="border-l-4 border-[#0070e0] pl-4 text-slate-900 font-medium italic">
                Because at the end of the day, strong projects are built by strong people. And here, you’ll get to know the faces, stories, and spirit that make E.R. Stuebner more than a construction company—it’s a team that builds together.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Interactive Image Accordion Section */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0]">
                Company Life &amp; Events
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
                Inside Stuebner Moments
              </h2>
              <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base">
                Hover or click on any story card below to expand details and view behind-the-scenes moments.
              </p>
            </div>

            {/* Desktop Horizontal Expanding Accordion */}
            <div className="hidden lg:flex w-full h-[540px] gap-3 rounded-2xl overflow-hidden p-2 bg-slate-100 border border-slate-200">
              {ACCORDION_ITEMS.map((item, idx) => {
                const isActive = activeItemIndex === idx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveItemIndex(idx)}
                    onClick={() => setActiveItemIndex(idx)}
                    className={`relative rounded-xl overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
                      isActive ? "flex-[4]" : "flex-[1] hover:flex-[1.2]"
                    }`}
                  >
                    {/* Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isActive
                          ? "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"
                          : "bg-slate-950/60 hover:bg-slate-950/45"
                      }`}
                    />

                    {/* Collapsed State: Vertical Text */}
                    {!isActive && (
                      <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wider uppercase rotate-180 write-vertical whitespace-nowrap drop-shadow-md">
                          {item.title}
                        </span>
                      </div>
                    )}

                    {/* Expanded State: Content & Button */}
                    {isActive && (
                      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white animate-in fade-in duration-300">
                        <div className="space-y-3 max-w-lg">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0070e0] text-white">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.date}</span>
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-200 leading-relaxed line-clamp-3">
                            {item.summary}
                          </p>
                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedStory(item);
                              }}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-900 font-semibold text-xs uppercase tracking-wider hover:bg-[#0070e0] hover:text-white transition-colors cursor-pointer shadow-md"
                            >
                              <span>See More</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Responsive Stack Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
              {ACCORDION_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  <div className="relative w-full aspect-16/10 bg-slate-900 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-full font-medium">
                      {item.date}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0070e0] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedStory(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0070e0] hover:text-[#005bb5] transition-colors cursor-pointer"
                    >
                      <span>Read Story &amp; Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Bottom Culture CTA */}
        <section className="w-full bg-[#0d1624] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              A Company Built on People, Purpose &amp; Pride
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Discover what it’s like to build your project—or your career—with the experienced professionals of E.R. Stuebner.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/our-people"
                className="px-8 py-3.5 rounded-lg bg-[#0070e0] hover:bg-[#005bb5] text-white font-medium text-sm transition-all shadow-md"
              >
                Meet Team Stuebner
              </Link>
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all cursor-pointer"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </section>

        {/* Story Details Modal */}
        {selectedStory && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedStory(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors cursor-pointer"
                aria-label="Close story"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Story Header Image */}
              <div className="relative w-full h-64 sm:h-72 bg-slate-900 shrink-0">
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#0070e0] inline-block mb-1.5">
                    {selectedStory.date}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {selectedStory.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Location: {selectedStory.location}
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                  {selectedStory.details}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>E.R. Stuebner General Contractor</span>
                  <button
                    type="button"
                    onClick={() => setSelectedStory(null)}
                    className="font-semibold text-[#0070e0] hover:underline cursor-pointer"
                  >
                    Close Window
                  </button>
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
