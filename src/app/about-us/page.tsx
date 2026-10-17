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
  Building2,
  CheckCircle2,
  HardHat,
  Users2,
  Award,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Layers
} from "lucide-react";

export default function AboutUsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Building Excellence Since 1951 - E.R. Stuebner Construction"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay matching reference website styling */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-900/60 backdrop-brightness-90" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
            <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
              E.R. Stuebner General Contractor
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
              Building Excellence Since 1951
            </h1>

            {/* Custom Blue Accent Mark */}
            <div className="flex items-center justify-center gap-1.5 mt-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
            </div>

            <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              At E.R. Stuebner, construction is more than a service, it’s a commitment to quality, integrity, and lasting relationships. Since our founding in 1951, we have built a reputation for delivering dependable, high-quality construction solutions that stand the test of time.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsProjectsOpen(true)}
                className="px-6 py-3 rounded-lg bg-[#0070e0] hover:bg-[#005bb5] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
              >
                <span>View Completed Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/contact-us/"
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium text-sm transition-all cursor-pointer inline-flex items-center justify-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Key Stats Strip */}
        <section className="w-full bg-[#0b1320] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0070e0]">
                1951
              </div>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-300">
                Year Founded
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0070e0]">
                3,500+
              </div>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-300">
                Completed Projects
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0070e0]">
                300,000+
              </div>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-300">
                Max Project Sq. Ft.
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0070e0]">
                70+
              </div>
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-300">
                Years of Excellence
              </p>
            </div>
          </div>
        </section>

        {/* 3. Who We Are Section */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0]">
                    About Our Firm
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
                    Who We Are
                  </h2>
                  <div className="flex items-center gap-1.5 mt-3 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                    <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Based in Reading, Pennsylvania, <strong className="text-slate-900 font-semibold">E.R. Stuebner</strong> is a trusted construction partner serving both private and public sector clients. Our team brings together skilled professionals, proven processes, and a forward-thinking approach to every project we undertake.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  We pride ourselves on being more than builders, we are collaborators, problem-solvers, and partners in bringing our clients’ visions to life. With decades of experience and more than 3,500 completed projects, our portfolio spans a wide range of building types and sizes from smaller specialized builds to large-scale developments exceeding 300,000 square feet. Each project reflects our dedication to precision, craftsmanship, and client satisfaction.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/our-people"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0070e0] hover:text-[#005bb5] transition-colors"
                  >
                    <span>Meet Our Leadership Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link
                    href="/behind-the-build"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0070e0] hover:text-[#005bb5] transition-colors"
                  >
                    <span>Behind the Build Stories</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 border border-slate-200">
                  <Image
                    src="/images/people/ardmore-team.jpg"
                    alt="E.R. Stuebner Construction Site Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
                      Field Excellence
                    </p>
                    <p className="text-base font-medium">
                      Hands-on project execution across Southeastern Pennsylvania
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-100 p-4 items-center gap-3 max-w-[240px]">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0070e0] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Safety &amp; Trust</div>
                    <div className="text-sm font-bold text-slate-900">Proven Reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Four Core Pillars / Details */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0]">
                Core Competencies
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
                How We Deliver Value
              </h2>
              <div className="flex items-center justify-center gap-1.5 mt-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Card 1: What We Do */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0070e0] flex items-center justify-center mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    What We Do
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Our expertise spans a diverse range of construction sectors, providing full-service general contracting, construction management, design-build, and preconstruction planning across:
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Commercial",
                      "Industrial",
                      "Institutional",
                      "Religious",
                      "Hospitality",
                      "Public Work",
                    ].map((sector) => (
                      <div
                        key={sector}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0070e0] shrink-0" />
                        <span>{sector}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0070e0] hover:text-[#005bb5] transition-colors pt-2"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card 2: Our Approach */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0070e0] flex items-center justify-center mb-6">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    Our Approach
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                    At E.R. Stuebner, every project begins with a simple principle: <em>listen first</em>. We take the time to understand our clients’ goals, challenges, and expectations, then deliver tailored solutions that align with their vision.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      { title: "Integrity", desc: "Doing what we say, every time" },
                      { title: "Quality Craftsmanship", desc: "Delivering work that endures" },
                      { title: "Collaboration", desc: "Working closely with clients, architects, and stakeholders" },
                      { title: "Accountability", desc: "Taking ownership from start to finish" },
                    ].map((item) => (
                      <div key={item.title} className="text-sm">
                        <span className="font-semibold text-slate-900">{item.title}:</span>{" "}
                        <span className="text-slate-600">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/why-choose-us"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0070e0] hover:text-[#005bb5] transition-colors pt-2"
                >
                  <span>Learn Why Clients Choose Stuebner</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card 3: Why Choose Us */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0070e0] flex items-center justify-center mb-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    Why Choose Us
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                    Choosing E.R. Stuebner means partnering with a company that values relationships as much as results. Our long-standing presence in the industry is a testament to the trust we’ve earned and the consistent value we deliver.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    We don’t just complete projects, we build spaces that support communities, businesses, and future growth with safety, proactive scheduling, and fiscal discipline.
                  </p>
                </div>
                <Link
                  href="/our-portfolio"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0070e0] hover:text-[#005bb5] transition-colors pt-2"
                >
                  <span>Browse Our Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card 4: Looking Ahead */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0070e0] flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    Looking Ahead
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                    While we are proud of our history, we remain focused on the future. By embracing innovation, technology, and evolving industry standards, E.R. Stuebner continues to deliver modern solutions while honoring the craftsmanship and reliability that have defined us for over 70 years.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 italic border-l-2 border-[#0070e0] pl-3">
                    &ldquo;Our mission is to build and deliver each project on time, at cost, and of the highest possible quality.&rdquo;
                  </p>
                </div>
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0070e0] hover:text-[#005bb5] transition-colors pt-2 cursor-pointer text-left"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bottom Call to Action */}
        <section className="w-full bg-[#0d1624] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Ready to Discuss Your Next Construction Project?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Connect with our experienced team to discover how our collaborative, transparent approach can bring your vision to life.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us/"
                className="px-8 py-3.5 rounded-lg bg-[#0070e0] hover:bg-[#005bb5] text-white font-medium text-sm transition-all shadow-md cursor-pointer inline-flex items-center justify-center"
              >
                Contact Us Today
              </Link>
              <Link
                href="/gallery"
                className="px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all"
              >
                Explore Virtual Gallery
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Modals & ScrollToTop */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ProjectsModal isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} />
      <ScrollToTop />
    </div>
  );
}
