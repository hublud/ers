"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectsModal from "@/components/ProjectsModal";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Play,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Compass,
  Eye,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Layers
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  description: string;
}

const GALLERY_PHOTOS: GalleryItem[] = [
  // Commercial
  {
    id: "g1",
    title: "Structural Steel & Framing",
    category: "Commercial",
    src: "/images/gallery/gallery-1.jpg",
    description: "Precision framing, site coordination, and structural erection on an active commercial build.",
  },
  {
    id: "g2",
    title: "Lehigh Airport Main Terminal Concourse",
    category: "Commercial",
    src: "/images/projects/lehigh-card.jpg",
    description: "Multi-phase airport passenger terminal modernization, concourse expansion, and security integration.",
  },
  {
    id: "g3",
    title: "Diamond Credit Union Premier Branch",
    category: "Commercial",
    src: "/images/projects/diamond-card.jpg",
    description: "Signature retail banking facility with expansive curtain walls, consultation pods, and drive-through canopies.",
  },
  {
    id: "g4",
    title: "Staybridge Hotel & Hospitality Suites",
    category: "Commercial",
    src: "/images/projects/staybridge-card.jpg",
    description: "105-suite 4-story extended-stay hotel facility delivered early under Guaranteed Maximum Price (GMP).",
  },
  {
    id: "g5",
    title: "Jeffersonville Golf Club & Hospitality Complex",
    category: "Commercial",
    src: "/images/projects/jeffersonville-card.jpg",
    description: "Grand banquet ballroom, pro shop, restaurant, commercial kitchen, and indoor virtual golf simulators.",
  },
  {
    id: "g6",
    title: "Ardmore Field Supervision & Operations",
    category: "Commercial",
    src: "/images/people/ardmore-team.jpg",
    description: "Hands-on field supervision and trade coordination ensuring safety, quality, and schedule adherence.",
  },

  // Municipal
  {
    id: "g7",
    title: "Limerick Municipal Center",
    category: "Municipal",
    src: "/images/gallery/gallery-2.jpg",
    description: "Full-scale civic and municipal building development built to LEED energy efficiency standards.",
  },
  {
    id: "g8",
    title: "Northampton Fire Station Facility",
    category: "Municipal",
    src: "/images/projects/northampton-fire-card.jpg",
    description: "Modernized municipal emergency apparatus bays, crew quarters, and community training rooms.",
  },
  {
    id: "g9",
    title: "Harmonville Fire Department Complex",
    category: "Municipal",
    src: "/images/projects/harmonville-fire-card.jpg",
    description: "High-capacity emergency response station featuring multi-bay apparatus bays and administrative headquarters.",
  },
  {
    id: "g10",
    title: "Berks Area Regional Transit Terminal",
    category: "Municipal",
    src: "/images/projects/berks-transit-card.jpg",
    description: "Regional transportation terminal development with heavy transit lanes and passenger circulation concourses.",
  },

  // Education
  {
    id: "g11",
    title: "Coopertown Elementary School Facility",
    category: "Education",
    src: "/images/CooperTown-ES-Images-1.jpg",
    description: "Modern state-of-the-art educational facility with collaborative classrooms, media centers, and gymnasiums.",
  },
  {
    id: "g12",
    title: "Wilson High School Campus Modernization",
    category: "Education",
    src: "/images/projects/wilson-hs-card.jpg",
    description: "Comprehensive secondary education additions, science laboratory wings, and campus safety infrastructure.",
  },
  {
    id: "g13",
    title: "Lincoln Middle School Educational Wing",
    category: "Education",
    src: "/images/projects/lincoln-ms-card.webp",
    description: "STEM academies, collaborative learning suites, and energy-efficient building envelope design.",
  },
  {
    id: "g14",
    title: "DCIU Marple Education Campus",
    category: "Education",
    src: "/images/projects/dciu-marple-card.webp",
    description: "Specialized vocational and educational learning center delivering inclusive instructional facilities.",
  },
  {
    id: "g15",
    title: "Uwchlan Hills Elementary School",
    category: "Education",
    src: "/images/projects/uwchlan-hills-card.jpg",
    description: "Multi-phase public elementary school renovation and classroom addition delivered on active campuses.",
  },

  // Interior
  {
    id: "g16",
    title: "Executive Office Corridor & Architectural Finishes",
    category: "Interior",
    src: "/images/gallery/gallery-3.jpg",
    description: "Turnkey architectural finishes, custom acoustic ceilings, and precision architectural lighting.",
  },
  {
    id: "g17",
    title: "Diamond Credit Union Custom Millwork",
    category: "Interior",
    src: "/images/projects/diamond-03.jpg",
    description: "Custom geometric wood ceiling accents, high-security teller counters, and hospitality lounges.",
  },
  {
    id: "g18",
    title: "Jeffersonville Grand Banquet Ballroom",
    category: "Interior",
    src: "/images/projects/jeff-banquet-01.jpg",
    description: "Spacious banquet hall accommodating over 200 guests with custom chandeliers and scenic views.",
  },
  {
    id: "g19",
    title: "Airport Passenger Circulation Concourse",
    category: "Interior",
    src: "/images/projects/lehigh-int-2.jpg",
    description: "High-traffic terrazzo circulation corridors, energy-efficient LED luminaires, and security vestibules.",
  },

  // Institutional
  {
    id: "g20",
    title: "Downingtown Institutional Complex",
    category: "Institutional",
    src: "/images/Downingtown-01.jpg",
    description: "Multi-phase institutional campus expansion delivered on-time and within budget.",
  },
  {
    id: "g21",
    title: "Bishop McDevitt Campus Expansion",
    category: "Institutional",
    src: "/images/projects/bishop-mcdevitt-card.jpg",
    description: "Comprehensive institutional campus construction including academic halls and athletic facilities.",
  },
  {
    id: "g22",
    title: "Central Bucks South Educational Complex",
    category: "Institutional",
    src: "/images/projects/central-bucks-south-card.jpg",
    description: "State-of-the-art campus development supporting over 1,700 students with dedicated arts and science spaces.",
  },
  {
    id: "g23",
    title: "Palmerton School District Campus",
    category: "Institutional",
    src: "/images/projects/palmerton-sd-card.jpg",
    description: "Extensive campus upgrades, structural additions, and modern administrative facilities.",
  },
];

const YOUTUBE_VIDEOS = [
  {
    id: "3UZnFiiFSN8",
    title: "Jobsite Operations & Active Field Walkthrough",
    subtitle: "High-definition site progress and precision structural installation",
  },
  {
    id: "1tHRlYqCDuI",
    title: "Project Milestone & Ground-Up Construction",
    subtitle: "Detailed site coordination and multi-trade project management",
  },
  {
    id: "MMV5W_4rLso",
    title: "E.R. Stuebner Construction Showcase",
    subtitle: "Over 70 years of dependable general contracting excellence",
  },
];

const VIRTUAL_TOUR_SCENES = [
  {
    name: "Terminal & Commercial Site",
    image: "/images/gallery/gallery-1.jpg",
    hotspots: [
      { x: 32, y: 44, label: "Structural Framing Phase" },
      { x: 68, y: 35, label: "HVAC & Mechanical Integration" },
      { x: 50, y: 65, label: "Safety Perimeter Zone" },
    ],
  },
  {
    name: "Limerick Municipal Complex",
    image: "/images/gallery/gallery-2.jpg",
    hotspots: [
      { x: 25, y: 40, label: "Civic Meeting Hall Wing" },
      { x: 75, y: 55, label: "Main Exterior Entrance" },
    ],
  },
  {
    name: "Executive Interior",
    image: "/images/gallery/gallery-3.jpg",
    hotspots: [
      { x: 45, y: 42, label: "Custom Millwork & Glass Wall" },
      { x: 80, y: 60, label: "Acoustic Ceiling Grid" },
    ],
  },
];

export default function GalleryPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  // Active category filter
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Lightbox modal state
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // 360 Virtual Tour interactive state
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [panX, setPanX] = useState<number>(50);
  const [panY, setPanY] = useState<number>(50);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(false);

  // Filtered photos
  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  // Auto-rotate effect for virtual tour
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setPanX((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 50);
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Handle Dragging in 360 Tour
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoRotate(false);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setPanX((prev) => Math.min(100, Math.max(0, prev - dx * 0.05)));
    setPanY((prev) => Math.min(80, Math.max(20, prev - dy * 0.05)));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") setActivePhotoIndex(null);
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
            : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, filteredPhotos.length]);

  const currentScene = VIRTUAL_TOUR_SCENES[currentSceneIndex];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/gallery/gallery-hero.webp"
            alt="E.R. Stuebner Project Gallery"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/65 backdrop-brightness-90" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
            <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Multimedia Visual Experience
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
              Our Gallery
            </h1>

            {/* Accent mark */}
            <div className="flex items-center justify-center gap-1.5 mt-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
            </div>

            <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              Step inside our jobsites and completed facilities through interactive 360° virtual tours, high-definition video walkthroughs, and photographic documentation of our craftsmanship.
            </p>
          </div>
        </section>

        {/* 2. On Site Virtual Tour Section (360 Interactive Viewer) */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0]">
                Interactive Experience
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-1">
                On Site Virtual Tour
              </h2>
              <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>
              <p className="text-slate-300 text-sm sm:text-base">
                A 360 View of our site operation. Click and drag or use controls to explore active site zones.
              </p>
            </div>

            {/* Interactive 360 Virtual Tour Window */}
            <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
              {/* Top Bar with Scene Switcher */}
              <div className="bg-slate-800/90 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-blue-400 font-medium">
                  <Compass className="w-4 h-4 animate-spin-slow" />
                  <span>Interactive 360° Panorama Viewer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 hidden sm:inline">Select Location:</span>
                  <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-700">
                    {VIRTUAL_TOUR_SCENES.map((scene, idx) => (
                      <button
                        key={scene.name}
                        onClick={() => setCurrentSceneIndex(idx)}
                        className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                          currentSceneIndex === idx
                            ? "bg-[#0070e0] text-white"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {scene.name.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panorama Viewing Canvas */}
              <div
                className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] cursor-grab active:cursor-grabbing select-none overflow-hidden"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* Scaled & Positioned Background Image for 360 Effect */}
                <div
                  className="absolute inset-0 transition-all duration-75 ease-out"
                  style={{
                    backgroundImage: `url(${currentScene.image})`,
                    backgroundPosition: `${panX}% ${panY}%`,
                    backgroundSize: `${zoomLevel * 1.5}%`,
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Soft ambient overlay */}
                <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />

                {/* Interactive Hotspots */}
                {currentScene.hotspots.map((spot, i) => (
                  <div
                    key={i}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(activeHotspot === spot.label ? null : spot.label);
                    }}
                  >
                    {/* Pulsing ring */}
                    <span className="absolute -inset-2 rounded-full bg-[#0070e0]/40 animate-ping" />
                    <button
                      type="button"
                      aria-label={spot.label}
                      className="relative w-7 h-7 rounded-full bg-[#0070e0] border-2 border-white text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {/* Tooltip / Label */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-3 py-1.5 rounded-lg bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-slate-700 pointer-events-none transition-all duration-150 group-hover:opacity-100 opacity-90">
                      {spot.label}
                    </div>
                  </div>
                ))}

                {/* Hotspot Info Banner if clicked */}
                {activeHotspot && (
                  <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-slate-900/90 backdrop-blur-md border border-blue-500/40 p-4 rounded-xl text-white shadow-xl z-30 animate-in fade-in">
                    <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-700">
                      <span className="text-xs font-bold text-[#0070e0] uppercase">
                        Active Hotspot
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveHotspot(null)}
                        className="text-slate-400 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold">{activeHotspot}</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Inspected and managed under E.R. Stuebner comprehensive safety and quality compliance protocols.
                    </p>
                  </div>
                )}

                {/* On-screen Controls Overlay */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-slate-900/85 backdrop-blur-md p-1.5 rounded-xl border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(180, z + 15))}
                    title="Zoom In"
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(90, z - 15))}
                    title="Zoom Out"
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setAutoRotate(!autoRotate)}
                    title={autoRotate ? "Pause Auto Rotation" : "Start Auto Rotation"}
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      autoRotate
                        ? "bg-[#0070e0] text-white"
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPanX(50);
                      setPanY(50);
                      setZoomLevel(100);
                    }}
                    title="Reset View"
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer text-xs font-semibold px-2.5"
                  >
                    Reset
                  </button>
                </div>

                {/* Instruction pill */}
                <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-sm text-xs text-slate-300 border border-slate-700/60">
                  <span>💡 Drag anywhere to pan • Click pins for details</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Video Gallery Section */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0]">
                Motion &amp; Field Footage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
                Video Gallery
              </h2>
              {/* Dotted separator divider */}
              <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base">
                Watch actual construction milestones, aerial footage, and site operations from our recent projects across Pennsylvania.
              </p>
            </div>

            {/* Video Player Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {YOUTUBE_VIDEOS.map((video, idx) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* YouTube Embed Player */}
                  <div className="relative w-full aspect-video bg-slate-900">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#0070e0] uppercase tracking-wider mb-1">
                        Video #{idx + 1}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0070e0] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {video.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* "Watch More Videos" CTA Button */}
            <div className="text-center pt-4">
              <a
                href="https://www.youtube.com/@erstuebner/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0070e0] hover:bg-[#005bb5] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
              >
                <span>Watch More Videos</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. Image Gallery Section */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0]">
                Project Photography
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
                Image Gallery
              </h2>
              {/* Dotted separator divider */}
              <div className="flex items-center justify-center gap-1.5 mt-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {["All", "Commercial", "Municipal", "Education", "Interior", "Institutional"].map(
                  (cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        activeCategory === cat
                          ? "bg-[#0070e0] text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPhotos.map((photo, index) => (
                <GalleryCard
                  key={photo.id}
                  photo={photo}
                  onClick={() => setActivePhotoIndex(index)}
                />
              ))}
            </div>

            {/* "View More Images" Button */}
            <div className="text-center pt-6">
              <Link
                href="/galleryimage"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-md cursor-pointer"
              >
                <span>View More Images &amp; Full Portfolio</span>
                <Layers className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhotoIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={() =>
                  setActivePhotoIndex((prev) =>
                    prev !== null
                      ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
                      : 0
                  )
                }
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setActivePhotoIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredPhotos.length : 0
                  )
                }
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Large Image */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden bg-black">
                <Image
                  src={filteredPhotos[activePhotoIndex].src}
                  alt={filteredPhotos[activePhotoIndex].title}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target) target.src = "/images/gallery/gallery-1.jpg";
                  }}
                />
              </div>

              {/* Caption */}
              <div className="w-full mt-4 text-center text-white">
                <h3 className="text-lg font-bold">
                  {filteredPhotos[activePhotoIndex].title}
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl mx-auto">
                  {filteredPhotos[activePhotoIndex].description}
                </p>
                <span className="text-xs text-slate-400 mt-2 block">
                  {activePhotoIndex + 1} of {filteredPhotos.length}
                </span>
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

function GalleryCard({
  photo,
  onClick,
}: {
  photo: GalleryItem;
  onClick: () => void;
}) {
  const [imgSrc, setImgSrc] = useState(photo.src);

  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
    >
      <Image
        src={imgSrc}
        alt={photo.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => {
          if (imgSrc !== "/images/gallery/gallery-1.jpg") {
            setImgSrc("/images/gallery/gallery-1.jpg");
          }
        }}
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
          {photo.category}
        </span>
        <h3 className="text-base sm:text-lg font-bold mb-1 leading-snug">
          {photo.title}
        </h3>
        <p className="text-xs text-slate-300 line-clamp-2 mb-3">
          {photo.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white">
          <span>Click to enlarge</span>
          <Maximize2 className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}

