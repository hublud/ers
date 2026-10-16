"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectsModal from "@/components/ProjectsModal";
import ScrollToTop from "@/components/ScrollToTop";
import { Layers, ShieldCheck, HardHat, Lightbulb } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "General Contracting",
    description:
      "We provide full-service general contracting solutions, managing every phase of construction from initial planning through final completion. Our team ensures projects are delivered on time, within budget, and to the highest standards of quality.",
    image: "/images/service-general-contracting.jpg",
  },
  {
    title: "Construction Management",
    description:
      "Our construction management services are built on collaboration and transparency. We work closely with owners, architects, and stakeholders to streamline communication, control costs, and maintain schedules ensuring a smooth and efficient building process.",
    image: "/images/service-construction-management.jpg",
  },
  {
    title: "Design-Build Services",
    description:
      "Simplify your project with our integrated design-build approach. By combining design and construction under one team, we reduce risk, accelerate timelines, and deliver cohesive, cost-effective results tailored to your vision.",
    image: "/images/service-design-build.jpg",
  },
  {
    title: "Pre-Construction Services",
    description:
      "Successful projects begin long before construction starts. Our pre-construction services include budgeting, scheduling, value engineering, and feasibility analysis, helping you make informed decisions from day one.",
    image: "/images/service-preconstruction.jpg",
  },
  {
    title: "Renovations & Additions",
    description:
      "We specialize in transforming existing spaces into modern, functional environments. Whether it’s a renovation, expansion, or adaptive reuse project, we deliver solutions that enhance both form and function.",
    image: "/images/service-renovations.webp",
  },
  {
    title: "Industrial Construction",
    description:
      "From manufacturing facilities to warehouses, we understand the demands of industrial construction. Our team delivers durable, efficient structures designed to support operations and long-term performance.",
    image: "/images/service-industrial.webp",
  },
  {
    title: "Commercial Construction",
    description:
      "We build high-quality commercial spaces that support business growth and customer engagement. From office buildings to retail centers, our work reflects professionalism, durability, and attention to detail.",
    image: "/images/service-commercial.jpg",
  },
  {
    title: "Institutional & Public Projects",
    description:
      "E.R. Stuebner has extensive experience working with public and institutional clients, including schools, healthcare facilities, and government buildings. We understand the importance of compliance, safety, and accountability in these environments.",
    image: "/images/service-institutional.jpg",
  },
];

const APPROACH_ITEMS = [
  {
    icon: Layers,
    title: "Quality Craftsmanship",
    description: "Built to last, with attention to every detail",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    description: "Honest communication at every stage",
  },
  {
    icon: HardHat,
    title: "Client Partnership",
    description: "Your goals drive our process",
  },
  {
    icon: Lightbulb,
    title: "Efficiency & Innovation",
    description: "Smart solutions that save time and cost",
  },
];

export default function ServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Global Navigation Bar with active Services link */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* 2. Services Hero Section matching live site */}
        <section className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/services-hero.jpg"
            alt="E.R. Stuebner Team Reviewing Blueprints"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark Navy / Charcoal Gradient Overlay on the Left */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/40" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="max-w-2xl text-left text-white space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Our Services
              </h1>
              <p className="text-white/95 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
                At E.R. Stuebner, construction is more than a service, it’s a commitment to quality, precision, and lasting relationships. With decades of experience and thousands of completed projects, we bring expertise, reliability, and craftsmanship to every job, regardless of size or complexity.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Services Heading & Introduction */}
        <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2e] tracking-tight mb-3">
              Our Services
            </h2>

            {/* Custom Blue Accent Mark (Three dots + horizontal bar) */}
            <div className="flex items-center justify-center gap-1.5 mt-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              At E.R. Stuebner, construction is more than a service, it’s a commitment to quality, precision, and lasting relationships. With decades of experience and thousands of completed projects, we bring expertise, reliability, and craftsmanship to every job, regardless of size or complexity.
            </p>
          </div>
        </section>

        {/* 4. 8 Services Cards Grid matching the exact layout */}
        <section className="w-full bg-white pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col group transition-transform duration-200"
                >
                  {/* Top Image */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 shadow-xs">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlapping Content Box matching reference */}
                  <div className="-mt-14 mx-4 sm:mx-5 relative z-10 bg-white border border-gray-200/90 rounded-2xl p-7 sm:p-8 shadow-md group-hover:shadow-xl transition-all duration-300 text-center flex-1 flex flex-col justify-start">
                    <h3 className="text-lg sm:text-xl font-bold text-[#111c2e] mb-4 group-hover:text-[#0070e0] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. "Our Approach" Section matching live reference */}
        <section className="w-full bg-[#f8fafc] border-t border-slate-100 py-20 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2e] tracking-tight">
              Our Approach
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Every project we take on is guided by a commitment to:
            </p>

            {/* Custom Blue Accent Mark */}
            <div className="flex items-center justify-center gap-1.5 mt-3 mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
            </div>

            {/* 4 Feature Items Grid (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 text-left pt-6">
              {APPROACH_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 sm:gap-5 p-2 group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-slate-200 bg-white shadow-xs flex items-center justify-center shrink-0 group-hover:border-[#0070e0] transition-colors">
                      <IconComponent className="w-6 h-6 text-[#111c2e] group-hover:text-[#0070e0] transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-[#111c2e]">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectsModal
        isOpen={isProjectsOpen}
        onClose={() => setIsProjectsOpen(false)}
        onOpenContact={() => {
          setIsProjectsOpen(false);
          setIsContactOpen(true);
        }}
      />

      <ScrollToTop />
    </div>
  );
}
