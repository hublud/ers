"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectsModal from "@/components/ProjectsModal";
import ScrollToTop from "@/components/ScrollToTop";
import { Gauge } from "lucide-react";

const VALUE_CARDS = [
  {
    title: "People-First Approach",
    description:
      "What sets us apart is our people. We believe great projects are powered by strong relationships both within our team and with our clients. You’re not just hiring a contractor; you’re gaining a partner who listens, communicates clearly, and works alongside you every step of the way.",
  },
  {
    title: "A Diverse & Inclusive Culture",
    description:
      "Our strength lies in the diversity of our team. E.R. Stuebner brings together individuals from different backgrounds, experiences, and perspectives, creating a culture rooted in respect, collaboration, and innovation. This diversity allows us to approach challenges creatively, connect with a wide range of clients and communities, and build environments that reflect the people who use them. We are committed to fostering an inclusive workplace where every voice is valued and every team member has the opportunity to thrive.",
  },
  {
    title: "Commitment to Quality",
    description:
      "Our strength lies in the diversity of our team. E.R. Stuebner brings together individuals from different backgrounds, experiences, and perspectives, creating a culture rooted in respect, collaboration, and innovation. This diversity allows us to approach challenges creatively, connect with a wide range of clients and communities, and build environments that reflect the people who use them.",
  },
  {
    title: "Transparent Communication",
    description:
      "No surprises, no guesswork. We prioritize open, honest communication throughout the entire project lifecycle. From timelines to budgets, you’ll always know where things stand",
  },
  {
    title: "Safety & Reliability",
    description:
      "Safety is not optional it’s foundational. Our team follows strict safety protocols to ensure every job site is secure, efficient, and compliant. You can trust us to deliver not just quality work, but peace of mind.",
  },
  {
    title: "Innovative Solutions",
    description:
      "We embrace modern construction methods, technology, and creative problem-solving to deliver smarter, more efficient results. Whether it’s optimizing costs or improving timelines, we’re always looking for better ways to build.",
  },
];

export default function WhyChooseUsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Global Navigation Bar with active state */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* 2. Hero Section matching user screenshot */}
        <section className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/why-choose-hero.jpg"
            alt="Why Choose E.R. Stuebner - Construction Team"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark Contrast Overlay */}
          <div className="absolute inset-0 bg-slate-900/65 backdrop-brightness-95" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4">
              Why Choose E.R. Stuebner
            </h1>

            {/* Custom Blue Accent Mark (Three dots + horizontal bar) */}
            <div className="flex items-center justify-center gap-1.5 mt-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
            </div>

            <p className="text-white/95 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-4xl mx-auto font-normal">
              At E.R. Stuebner, choosing the right construction partner means choosing confidence, consistency, and a team that genuinely cares about your vision. We don&apos;t just build structures we build trust, long-term relationships, and spaces that stand the test of time.
            </p>
          </div>
        </section>

        {/* 3. "BUILT ON EXPERIENCE" Section */}
        <section className="w-full bg-[#0b1320] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium tracking-wider uppercase text-white">
              BUILT ON EXPERIENCE
            </h2>

            {/* Accent mark */}
            <div className="flex items-center justify-center gap-1.5 mt-3 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
            </div>

            <p className="text-white/90 text-sm sm:text-base md:text-[16px] leading-relaxed max-w-4xl mx-auto font-normal">
              With decades of combined industry expertise, our team brings deep knowledge to every project. From pre-construction planning to final delivery, we anticipate challenges, solve problems proactively, and ensure every detail is executed with precision.
            </p>
          </div>
        </section>

        {/* 4. Value Cards Section (2 columns on md/lg) */}
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* 6 Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {VALUE_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-gray-200/90 rounded-none p-8 sm:p-10 transition-all duration-200 hover:shadow-md hover:border-[#0070e0]/50"
                >
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#0070e0] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 5. "A Proven Track Record" Callout Card */}
            <div className="bg-[#f0f4f9] border border-slate-200/60 rounded-md p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0">
                <Gauge className="w-7 h-7 sm:w-8 sm:h-8 text-[#0070e0]" />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  A Proven Track Record
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our portfolio speaks for itself. From complex builds to community-focused projects, we’ve consistently delivered results that clients are proud of and spaces that people depend on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Blue Architectural Ceiling Banner Section */}
        <section className="relative w-full overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/why-choose-banner.jpg"
              alt="E.R. Stuebner Built Environments"
              fill
              className="object-cover object-center"
            />
            {/* Vibrant Blue Overlay */}
            <div className="absolute inset-0 bg-[#0070e0]/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-blue-600/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center text-white">
            <p className="text-base sm:text-lg md:text-[20px] font-semibold leading-relaxed tracking-wide">
              When you choose E.R. Stuebner, you’re choosing a partner committed to excellence, integrity, and delivering more than just a finished project you’re choosing a team dedicated to building something that truly lasts.
            </p>
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
