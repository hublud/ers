"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsModal from "@/components/ProjectsModal";
import ConstructionProjectForm from "@/components/forms/ConstructionProjectForm";
import InquiriesForm from "@/components/forms/InquiriesForm";
import SubcontractorForm from "@/components/forms/SubcontractorForm";
import CareersForm from "@/components/forms/CareersForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  HardHat,
  Briefcase,
  HelpCircle,
  Building,
  CheckCircle2,
} from "lucide-react";

type FormType = "project" | "inquiries" | "subcontractor" | "careers";

function ContactUsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<FormType>("project");
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "inquiries") setActiveTab("inquiries");
    else if (tabParam === "subcontractor" || tabParam === "become-a-sub") setActiveTab("subcontractor");
    else if (tabParam === "careers" || tabParam === "job") setActiveTab("careers");
    else if (tabParam === "project" || tabParam === "construction-project") setActiveTab("project");
  }, [searchParams]);

  const handleSelectBox = (type: FormType) => {
    setActiveTab(type);
    if (formSectionRef.current) {
      const topOffset = formSectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const actionBoxes = [
    {
      id: "project" as FormType,
      title: "I HAVE A CONSTRUCTION PROJECT",
      tagline: "Commercial, Educational, Healthcare & Industrial",
      image: "/images/contact/project-box.jpg",
      icon: Building,
      badgeText: "Plan Your Build",
      description:
        "Have a new build, major expansion, renovation, or tenant fit-out? Select your project parameters and get in touch with our estimators.",
    },
    {
      id: "inquiries" as FormType,
      title: "INQUIRIES",
      tagline: "General Questions & Business Development",
      image: "/images/contact/inquiries-box.jpg",
      icon: HelpCircle,
      badgeText: "General Questions",
      description:
        "General questions about our services, client references, vendor relationships, or media requests.",
    },
    {
      id: "subcontractor" as FormType,
      title: "BECOME A SUBCONTRACTOR",
      tagline: "Partner With Our Construction Network",
      image: "/images/contact/subcontractor-box.jpg",
      icon: HardHat,
      badgeText: "Bid List Application",
      description:
        "Join our trusted network of trade partners. Prequalify for bidding on commercial and public projects across the region.",
    },
    {
      id: "careers" as FormType,
      title: "APPLY FOR A JOB AT STUEBNER",
      tagline: "Join a 75-Year Tradition of Excellence",
      image: "/images/contact/careers-box.jpg",
      icon: Briefcase,
      badgeText: "Careers & Hiring",
      description:
        "We are looking for project managers, superintendents, estimators, and skilled tradesmen to join our growing family.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar onOpenProjects={() => setProjectsModalOpen(true)} />

      <main className="grow">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-linear-to-b from-[#f8fafc] via-white to-white overflow-hidden border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0] bg-blue-50 px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#0070e0] animate-pulse" />
                We don’t just build structures we build lasting relationships.
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1929] tracking-tight leading-tight sm:leading-none mb-6">
                Let’s Build Something Together
              </h1>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                At E.R. Stuebner Construction, every successful project starts with a conversation. Whether you&apos;re planning new construction, expanding your facility, or modernizing an existing space, our team is ready to bring your vision to life with the experience and precision that has defined us since 1951.
              </p>
            </div>
          </div>
        </section>

        {/* 4 CONTACT INFO CARDS */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Visit Office */}
              <div className="bg-[#f9fbff] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#0070e0] flex items-center justify-center mb-5 shrink-0">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Visit our office
                </h2>
                <h3 className="text-xl font-bold text-[#0f1929] mb-3">
                  Reading, Pennsylvania
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 grow">
                  227 Blair Ave. Reading, PA 19601
                </p>
                <a
                  href="https://maps.google.com/?q=227+Blair+Ave+Reading+PA+19601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0070e0] hover:text-[#005bb5] transition-colors mt-auto"
                >
                  <span>Open in Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Card 2: Call Us */}
              <div className="bg-[#f9fbff] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#0070e0] flex items-center justify-center mb-5 shrink-0">
                  <Phone className="w-6 h-6 stroke-[2]" />
                </div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Call Us Directly
                </h2>
                <h3 className="text-xl font-bold text-[#0f1929] mb-3">
                  Direct Line
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 grow">
                  Speak with our project managers or general office staff.
                </p>
                <a
                  href="tel:+16103766625"
                  className="inline-flex items-center gap-1.5 text-base font-bold text-[#0070e0] hover:text-[#005bb5] transition-colors mt-auto"
                >
                  <span>+1 (610) 376-6625</span>
                </a>
              </div>

              {/* Card 3: Email Inquiries */}
              <div className="bg-[#f9fbff] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#0070e0] flex items-center justify-center mb-5 shrink-0">
                  <Mail className="w-6 h-6 stroke-[2]" />
                </div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Email Us
                </h2>
                <h3 className="text-xl font-bold text-[#0f1929] mb-2">
                  Inquiries
                </h3>
                <div className="text-sm space-y-2 mb-4 grow">
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">General:</span>
                    <a href="mailto:info@erscon.com" className="text-slate-700 hover:text-[#0070e0] font-medium transition-colors">
                      info@erscon.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">Business Development:</span>
                    <a href="mailto:businessdevelopment@erscon.com" className="text-slate-700 hover:text-[#0070e0] font-medium transition-colors text-xs break-all">
                      businessdevelopment@erscon.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4: Business Hours */}
              <div className="bg-[#f9fbff] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#0070e0] flex items-center justify-center mb-5 shrink-0">
                  <Clock className="w-6 h-6 stroke-[2]" />
                </div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Operating Schedule
                </h2>
                <h3 className="text-xl font-bold text-[#0f1929] mb-3">
                  Business Hours
                </h3>
                <div className="text-sm text-slate-600 space-y-1 mb-4 grow">
                  <p className="font-semibold text-slate-800">Monday - Friday</p>
                  <p className="text-slate-500">7:30 AM - 4:30 PM EST</p>
                  <p className="text-xs text-slate-400 pt-1">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: SEND US A MESSAGE & THE 4 ACTION BOXES */}
        <section className="py-12 sm:py-16 bg-[#f8fafc] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070e0] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
                How Can We Help You?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1929] tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Have a question or want to discuss your project? Click on any box below to open the dedicated form and our team will get back to you shortly.
              </p>
            </div>

            {/* 4 ACTION BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {actionBoxes.map((box) => {
                const isActive = activeTab === box.id;
                const Icon = box.icon;
                return (
                  <div
                    key={box.id}
                    onClick={() => handleSelectBox(box.id)}
                    className={`group relative bg-white rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 flex flex-col ${
                      isActive
                        ? "border-[#0070e0] shadow-xl ring-4 ring-blue-100 -translate-y-2"
                        : "border-slate-200 hover:border-[#0070e0] hover:shadow-lg hover:-translate-y-1.5"
                    }`}
                  >
                    {/* Active Ribbon/Badge */}
                    {isActive && (
                      <div className="absolute top-3 right-3 z-20 bg-[#0070e0] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Selected</span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={box.image}
                        alt={box.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 block">
                          {box.badgeText}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex flex-col grow">
                      <h3
                        className={`text-base sm:text-lg font-bold tracking-tight mb-2 transition-colors ${
                          isActive ? "text-[#0070e0]" : "text-[#0f1929] group-hover:text-[#0070e0]"
                        }`}
                      >
                        {box.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 grow">
                        {box.description}
                      </p>

                      <div
                        className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors pt-2 border-t border-slate-100 ${
                          isActive ? "text-[#0070e0]" : "text-slate-600 group-hover:text-[#0070e0]"
                        }`}
                      >
                        <span>{isActive ? "Form Open Below ↓" : "Click to Open Form →"}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* DYNAMIC FORM SECTION */}
            <div ref={formSectionRef} id="form-section" className="pt-4 scroll-mt-28">
              {/* Tab Selector Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
                {actionBoxes.map((box) => (
                  <button
                    key={box.id}
                    type="button"
                    onClick={() => setActiveTab(box.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeTab === box.id
                        ? "bg-[#0070e0] text-white shadow-md shadow-blue-500/20"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {box.title}
                  </button>
                ))}
              </div>

              {/* Render Active Form Component */}
              <div className="transition-all duration-300">
                {activeTab === "project" && <ConstructionProjectForm />}
                {activeTab === "inquiries" && <InquiriesForm />}
                {activeTab === "subcontractor" && <SubcontractorForm />}
                {activeTab === "careers" && <CareersForm />}
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER (EXACT REFERENCE COPY) */}
        <section className="bg-[#111821] py-16 sm:py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0070e0_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-8 max-w-3xl mx-auto leading-snug">
              Your project deserves a partner with proven experience and a passion for excellence.
            </h2>
            <button
              type="button"
              onClick={() => handleSelectBox("project")}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 rounded-xl font-bold text-white bg-[#0070e0] hover:bg-[#005bb5] transition-all shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              Contact E.R. Stuebner Construction and let’s get started
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Projects Modal */}
      <ProjectsModal
        isOpen={projectsModalOpen}
        onClose={() => setProjectsModalOpen(false)}
        onOpenContact={() => {
          setProjectsModalOpen(false);
          handleSelectBox("project");
        }}
      />
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactUsContent />
    </Suspense>
  );
}
