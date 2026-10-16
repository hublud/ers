"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsModal from "@/components/ProjectsModal";
import CareersForm from "@/components/forms/CareersForm";
import {
  Briefcase,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Mail,
  ChevronDown,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Award,
  Building2,
  Phone,
} from "lucide-react";

export default function CareersPage() {
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);
  const [openJob, setOpenJob] = useState<string | null>("pm");
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToApply = (roleName?: string) => {
    if (formRef.current) {
      const topOffset = formRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const jobOpenings = [
    {
      id: "pm",
      title: "Construction Project Manager",
      department: "Project Management",
      location: "Reading, PA & Regional Job Sites",
      type: "Full-Time",
      headline: "Join the E.R. Stuebner, Inc. team!",
      description:
        "We’re looking for an experienced Project Manager to oversee commercial construction projects from preconstruction through closeout. If you’re organized, proactive, and thrive in a fast-paced environment, we’d love to hear from you.",
      responsibilities: [
        "Manage all phases of commercial construction projects",
        "Develop and maintain project schedules and budgets",
        "Coordinate with owners, architects, subcontractors, and field staff",
        "Review contracts, submittals, RFIs, change orders, and project documentation",
        "Monitor project costs, productivity, and overall performance",
        "Ensure projects are completed safely, on time, and within budget",
      ],
      qualifications: [
        "Previous commercial construction project management experience",
        "Procore experience is MUST – this is a key part of our project management process",
        "Strong understanding of construction documents and project scheduling",
        "Excellent communication, leadership, and organizational skills",
        "Ability to manage multiple projects simultaneously",
        "Proficiency with Microsoft Office (Excel, Outlook, Word)",
      ],
      benefits: [
        "Competitive salary",
        "Comprehensive benefits package",
        "Paid time off and holidays",
        "401(k) with company match",
        "Opportunity to work on exciting commercial construction projects with a collaborative, team-oriented company",
      ],
      closingText:
        "If you’re ready to take the next step in your construction management career, we’d love to hear from you!",
      applyText: "Apply today or send your resume to careers@erscon.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar onOpenProjects={() => setProjectsModalOpen(true)} />

      <main className="grow">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-linear-to-b from-[#f8fafc] via-white to-white border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0] bg-blue-50 px-3.5 py-1.5 rounded-full mb-4">
                <Briefcase className="w-4 h-4 text-[#0070e0]" />
                Careers at E.R. Stuebner
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1929] tracking-tight leading-tight sm:leading-none mb-6">
                Build Your Future with Us
              </h1>
              <div className="space-y-4 text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                <p>
                  At E.R. Stuebner, we’re not just building structures, we’re building careers, relationships, and a legacy that has stood strong since 1951. With over 3,500 completed projects across diverse industries, our success is driven by the people behind the work.
                </p>
                <p>
                  If you’re looking for more than just a job if you want to be part of a team that values craftsmanship, collaboration, and long-term growth you’ll find your place here.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToApply()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0070e0] hover:bg-[#005bb5] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
                >
                  <span>View Openings & Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="mailto:careers@erscon.com"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-700 bg-white border border-slate-300 hover:border-[#0070e0] hover:text-[#0070e0] transition-all text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>careers@erscon.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY WORK WITH E.R. STUEBNER & IMAGE */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070e0] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Why Work with E.R. Stuebner?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1929] tracking-tight">
                A Legacy of Excellence
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
                For more than seven decades, we’ve built a reputation for quality, integrity, and reliability. When you join our team, you become part of that legacy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Pillars */}
              <div className="lg:col-span-7 space-y-8">
                {/* Pillar 1 */}
                <div className="bg-[#f9fbff] border border-slate-200/80 rounded-2xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0070e0] flex items-center justify-center font-bold">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f1929]">
                      People First Culture
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                    We believe great projects start with great people. Our team is built on mutual respect, trust, and a shared commitment to doing things the right way.
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 pt-4">
                    Our President/CEO Douglas George has transformed the Company through his dedication to quality, strong passion for innovation and an unwavering commitment to safety. Under his leadership, the company has grown into a forward-thinking general contractor that prioritizes quality, efficiency, and a safe, supportive working environment for every teammate.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="bg-[#f9fbff] border border-slate-200/80 rounded-2xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0070e0] flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f1929]">
                      Diverse Project Experience
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    From commercial and industrial facilities to institutional, religious, and retail spaces, you’ll gain hands-on experience across a wide range of project types and scales.
                  </p>
                </div>

                {/* Callout Box */}
                <div className="bg-linear-to-r from-[#0f1929] to-[#1e2e4a] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      Send us your resume and job experience
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Our hiring managers review all qualified submissions directly.
                    </p>
                  </div>
                  <a
                    href="mailto:careers@erscon.com"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-[#0070e0] hover:bg-[#005bb5] transition-all shadow-md shrink-0 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>careers@erscon.com</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Active Construction Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 lg:aspect-auto lg:h-[580px]">
                  <Image
                    src="/uploads/2026/07/Career_IMG01-1024x768.png"
                    alt="E.R. Stuebner Construction Team on Site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs uppercase font-bold tracking-widest text-cyan-300 block mb-1">
                      E.R. Stuebner Family
                    </span>
                    <p className="text-sm font-medium text-slate-200">
                      Pride in craftsmanship and commitment to safety on every job site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WE'RE HIRING (INTERACTIVE ACCORDION) */}
        <section className="py-16 sm:py-24 bg-[#f8fafc] border-t border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070e0] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Current Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1929] tracking-tight">
                We&apos;re Hiring
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Explore our current job opening below. Review duties, required qualifications, and company benefits.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {jobOpenings.map((job) => {
                const isOpen = openJob === job.id;
                return (
                  <div
                    key={job.id}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#0070e0] shadow-xl ring-2 ring-blue-100"
                        : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {/* Header */}
                    <button
                      type="button"
                      onClick={() => setOpenJob(isOpen ? null : job.id)}
                      className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0070e0]">
                            {job.department}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0f1929]">
                          {job.title}
                        </h3>
                      </div>

                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "bg-[#0070e0] text-white rotate-180" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {/* Accordion Body */}
                    {isOpen && (
                      <div className="px-6 pb-8 sm:px-8 border-t border-slate-100 pt-6 animate-in fade-in duration-200">
                        <div className="bg-[#f9fbff] p-5 rounded-xl border border-blue-100 mb-6">
                          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                            <strong className="text-slate-900 block mb-1">Join the E.R. Stuebner, Inc. team!</strong>
                            {job.description}
                          </p>
                        </div>

                        {/* 2-Column Details: What You'll Do & Qualifications */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-base font-bold text-[#0f1929] uppercase tracking-wider mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#0070e0]" />
                              What You&apos;ll Do:
                            </h4>
                            <ul className="space-y-2.5 text-sm text-slate-600">
                              {job.responsibilities.map((r, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Qualifications */}
                          <div>
                            <h4 className="text-base font-bold text-[#0f1929] uppercase tracking-wider mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#0070e0]" />
                              Qualifications:
                            </h4>
                            <ul className="space-y-2.5 text-sm text-slate-600">
                              {job.qualifications.map((q, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0] mt-2 shrink-0" />
                                  <span className={q.includes("MUST") ? "font-semibold text-slate-800" : ""}>
                                    {q}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Why Join E.R. Stuebner */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                          <h4 className="text-base font-bold text-[#0f1929] mb-3">
                            Why Join E.R. Stuebner?
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                            {job.benefits.map((b, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Closing statement and call to action matching reference */}
                        <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 mb-8 text-slate-800">
                          <p className="font-semibold text-base mb-2">
                            {job.closingText}
                          </p>
                          <p className="text-sm text-slate-600">
                            Apply today using the form below or email your resume to{" "}
                            <a href="mailto:careers@erscon.com" className="text-[#0070e0] font-bold underline">
                              careers@erscon.com
                            </a>
                          </p>
                        </div>

                        {/* Action buttons inside accordion */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                          <span className="text-xs text-slate-500 font-medium">
                            Position: Construction Project Manager (Full-Time)
                          </span>
                          <button
                            type="button"
                            onClick={() => scrollToApply(job.title)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0070e0] hover:bg-[#005bb5] transition-all shadow-md hover:shadow-lg cursor-pointer text-sm"
                          >
                            <span>Apply for {job.title}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: GROWTH & TEAM ENVIRONMENT CARDS */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Opportunities to Grow */}
              <div className="bg-[#f9fbff] rounded-2xl p-8 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0070e0] flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f1929] mb-3">
                  Opportunities to Grow
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  We invest in our people. Whether you’re just starting out or advancing your career, we provide opportunities for skill development, mentorship, and leadership.
                </p>
              </div>

              {/* Team Environment */}
              <div className="bg-[#f9fbff] rounded-2xl p-8 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0070e0] flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f1929] mb-3">
                  Team Environment
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Collaboration is at the heart of everything we do. You’ll work alongside experienced professionals who are committed to supporting one another and delivering exceptional results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHO WE'RE LOOKING FOR */}
        <section className="py-16 sm:py-20 bg-[#f8fafc] border-t border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070e0] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Candidate Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1929] tracking-tight">
                Who We’re Looking For
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Collaboration is at the heart of everything we do. You’ll work alongside experienced professionals who are committed to supporting one another and delivering exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Dedicated and Dependable", desc: "Committed to quality craftsmanship, accountability, and following through on every promise." },
                { title: "Detail-Oriented & Quality-Driven", desc: "Taking pride in high finish standards, architectural precision, and rigorous execution." },
                { title: "Strong Communicators", desc: "Thriving in transparent team environments with owners, design partners, and trade crews." },
                { title: "Committed to Safety", desc: "Prioritizing proactive job site safety, OSHA standards, and the well-being of all teammates." },
                { title: "Eager to Learn and Grow", desc: "Embracing new construction technology, Procore digital workflows, and ongoing advancement." },
                { title: "Client-Focused Integrity", desc: "Representing E.R. Stuebner's 75-year reputation with honesty, respect, and high ethics." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-[#0070e0] hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0070e0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0070e0]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f1929] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: ONLINE JOB APPLICATION FORM */}
        <section ref={formRef} id="apply-section" className="py-16 sm:py-24 bg-white scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <CareersForm />
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="bg-[#111821] py-16 sm:py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0070e0_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 max-w-3xl mx-auto leading-snug">
              Ready to Build Your Career with an Industry Leader?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Join our team and build lasting structures across Pennsylvania and the Mid-Atlantic.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToApply()}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-[#0070e0] hover:bg-[#005bb5] transition-all shadow-xl cursor-pointer"
              >
                Submit Your Application Now
              </button>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
              >
                Contact Our Office
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ProjectsModal
        isOpen={projectsModalOpen}
        onClose={() => setProjectsModalOpen(false)}
        onOpenContact={() => {
          setProjectsModalOpen(false);
          scrollToApply();
        }}
      />
    </div>
  );
}
