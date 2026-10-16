"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import CompanyStats from "@/components/CompanyStats";
import Experience from "@/components/Experience";
import ConstructionPhases from "@/components/ConstructionPhases";
import Commitment from "@/components/Commitment";
import ContactModal from "@/components/ContactModal";
import ProjectsModal from "@/components/ProjectsModal";
import SubcontractorModal from "@/components/SubcontractorModal";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isSubcontractorOpen, setIsSubcontractorOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          onOpenProjects={() => setIsProjectsOpen(true)}
        />

        {/* 2. Introduction Section */}
        <Introduction
          onOpenSubcontractor={() => setIsSubcontractorOpen(true)}
        />

        {/* 3. Company Stats / Metrics Section */}
        <CompanyStats />

        {/* 4. Our Experience Section with Video Player */}
        <Experience />

        {/* 5. Construction Phases Section */}
        <ConstructionPhases />

        {/* 6. Build Together & Our Commitment Section */}
        <Commitment />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      {/* Modals & Dialogs for Full Interactive Functionality */}
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

      <SubcontractorModal
        isOpen={isSubcontractorOpen}
        onClose={() => setIsSubcontractorOpen(false)}
      />

      {/* Floating Scroll to Top button */}
      <ScrollToTop />
    </div>
  );
}
