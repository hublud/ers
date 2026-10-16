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
  Users,
  Award,
  CheckCircle,
  Clock,
  Shield,
  HeartHandshake,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Sparkles,
  X
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  img: string;
  bio: string;
  credentials?: string[];
  education?: string;
  experience?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "doug-george",
    name: "Douglas George",
    role: "President and CEO",
    img: "/images/people/doug-george.png",
    bio: "Douglas George is the President and CEO of E.R. Stuebner, Inc., with over two decades of experience in the construction industry. After initially pursuing a career in architecture, Doug discovered his true passion for construction and earned a B.S. in Civil Engineering and Construction Technology from Temple University. He joined E.R. Stuebner in 2004, where he steadily advanced from Project Manager to Senior Project Manager, Executive Vice President, and Chief Operating Officer, ultimately becoming President and CEO.\n\nDoug remains engaged in the industry through memberships in ASCE, ACI, USGBC, and Temple’s Alumni Association. Outside of work, he enjoys traveling, wine, and cheering on Philadelphia sports teams.",
    credentials: ["ASCE Member", "ACI Member", "USGBC Member", "Temple Alumni"],
    education: "B.S. in Civil Engineering and Construction Technology, Temple University",
    experience: "20+ Years in Construction Leadership",
  },
  {
    id: "steve-sostak",
    name: "Steve Sostak",
    role: "Vice President of Estimating",
    img: "/images/people/steve-sostak.png",
    bio: "With over 35 years in construction and a B.S. in Construction Management from Spring Garden College, Steve leads our preconstruction efforts, including budgeting, risk assessment, and value engineering. He’s been an integral part of E.R. Stuebner since 1991, helping deliver thousands of successful projects across diverse commercial, educational, and institutional sectors.\n\nOutside of work, Steve enjoys fishing and spending quality time with his daughters.",
    credentials: ["Preconstruction Specialist", "Value Engineering", "Risk Assessment"],
    education: "B.S. in Construction Management, Spring Garden College",
    experience: "35+ Years Industry Experience",
  },
  {
    id: "jim-kline",
    name: "Jim Kline",
    role: "Vice President of Operations",
    img: "/images/people/jim-kline.png",
    bio: "Jim brings 30+ years of comprehensive construction experience and ensures smooth field operations by supporting our equipment fleet, logistical planning, and on-site field leadership. His hands-on knowledge and dedication ensure our field teams meet rigorous safety, scheduling, and craftsmanship standards.\n\nOutside of the construction site, Jim enjoys nature, hunting, and fishing.",
    credentials: ["Field Operations", "Logistics & Fleet", "Safety Compliance"],
    education: "Field Operations & Construction Technology",
    experience: "30+ Years Construction Operations",
  },
  {
    id: "jeff-albright",
    name: "Jeffrey Albright",
    role: "Vice President Business Development",
    img: "/images/people/jeff-albright.jpg",
    bio: "Jeff is an experienced vice president of development with a demonstrated history of leading new business development and building collaborative relationships and networks. A marketing innovator and business strategist, he is known for identifying and leveraging growth opportunities to expand market presence and market share.\n\nA United States Marine Corps Veteran, he holds credentials from the Institute for Organization Management, and Coastal Carolina University. Jeff serves on the boards of Associated Builders and Contractors Keystone and the Whitaker Center for Science and the Arts. Jeff enjoys traveling, fine dining, sporting events, and golfing.",
    credentials: ["U.S. Marine Corps Veteran", "ABC Keystone Board", "Whitaker Center Board"],
    education: "Institute for Organization Management & Coastal Carolina University",
    experience: "Senior Business Development & Executive Leadership",
  },
  {
    id: "julia-ramos",
    name: "Julia Ramos",
    role: "Benefits and Payroll Admin",
    img: "/images/people/julia-ramos.jpg",
    bio: "Julia brings 20 years of combined experience in customer service, payroll, and benefits administration. With a strong commitment to supporting employees and fostering positive workplace experiences, she ensures seamless human resource operations across all departments.\n\nShe stays actively engaged in the industry through her involvement with SHRM. Outside of work, Julia enjoys spending quality time with her family and exploring new restaurants and dining experiences.",
    credentials: ["SHRM Member", "HR & Payroll Administration", "Employee Relations"],
    education: "Human Resources & Business Administration",
    experience: "20 Years in Employee Services & Administration",
  },
  {
    id: "james-gardner",
    name: "James Gardner",
    role: "Project Manager",
    img: "/images/people/james-gardner.png",
    bio: "With a B.S. in Construction Management from the University of Nebraska – Lincoln, James focuses on efficiency, scheduling precision, and relationship-building across commercial and public sector builds. His proactive field management ensures milestones are met with utmost quality.\n\nOutside the job site, he enjoys spending time with family and watching soccer with his son.",
    credentials: ["Project Management", "Field Coordination", "Quality Control"],
    education: "B.S. in Construction Management, University of Nebraska – Lincoln",
    experience: "Comprehensive Commercial & Institutional Management",
  },
  {
    id: "carlie-connor",
    name: "Carlie Connor",
    role: "Financial Controller",
    img: "/images/people/carlie-connor.jpg",
    bio: "Carlie oversees E.R. Stuebner's accounting and financial operations, supporting the company's financial health, project accounting, and continued success.\n\nOutside of work, she serves as Vice President of the Philadelphia Chapter of the Construction Financial Management Association (CFMA) and enjoys spending time with her family, dancing, and cheering on Philadelphia sports teams.",
    credentials: ["CFMA Philadelphia VP", "Construction Accounting", "Financial Oversight"],
    education: "Accounting & Financial Management",
    experience: "Executive Financial Leadership",
  },
  {
    id: "nic-zoretich",
    name: "Nic Zoretich",
    role: "Project Manager",
    img: "/images/people/nic-zoretich.jpg",
    bio: "Nicolai Zoretich holds a Bachelor of Science in Civil Engineering from Penn State University and brings more than 10 years of construction experience to every project. He is committed to building strong client relationships through trust, proactive communication, and collaborative teamwork.\n\nOutside of work, Nicolai enjoys spending time with his family, traveling, and playing and watching sports.",
    credentials: ["Civil Engineering", "Client Relations", "Team Collaboration"],
    education: "B.S. in Civil Engineering, Penn State University",
    experience: "10+ Years Civil & Commercial Construction",
  },
];

const VALUE_PILLARS = [
  {
    icon: Clock,
    title: "Experienced",
    description:
      "Decades of combined technical and management expertise across complex commercial, institutional, and healthcare builds.",
  },
  {
    icon: Shield,
    title: "Dedicated",
    description:
      "Unwavering commitment to client vision, jobsite safety protocols, and rigorous quality standards at every phase.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative",
    description:
      "We listen first. Transparent partnerships with owners, architects, and subcontractors foster superior project outcomes.",
  },
  {
    icon: CheckCircle,
    title: "Reliable",
    description:
      "Accountability from initial estimating through final commissioning. We do what we say, every time.",
  },
];

export default function OurPeoplePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
            src="/images/people/people-hero.jpg"
            alt="Meet the Stuebner Team"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-900/65 backdrop-brightness-90" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
            <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
              People-First Construction
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
              Meet the Stuebner Team
            </h1>

            {/* Accent mark */}
            <div className="flex items-center justify-center gap-1.5 mt-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
              <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
            </div>

            <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              We believe construction is a people-driven business. That’s why we invest in building a team that not only possesses deep industry expertise but also shares a commitment to integrity, collaboration, and client satisfaction.
            </p>
          </div>
        </section>

        {/* 2. "Our team members are" Value Pillars */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0]">
                Culture &amp; Core Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">
                Our team members are
              </h2>
              <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {VALUE_PILLARS.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all text-center space-y-3"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 text-[#0070e0] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Team Stuebner Grid */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0070e0]">
                Leadership &amp; Management
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mt-1">
                Team Stuebner
              </h2>
              <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070e0]" />
                <span className="w-8 h-[3px] rounded-full bg-[#0070e0]" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base">
                Click on any team member to view their complete background, credentials, and contributions.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Photo Container */}
                  <div className="relative w-full aspect-3/4 bg-slate-100 overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 text-white text-xs font-semibold">
                      <span>View Bio &amp; Credentials &rarr;</span>
                    </div>
                  </div>

                  {/* Title & Info */}
                  <div className="p-5 text-center flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0070e0] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <div className="pt-3">
                      <span className="text-xs font-semibold text-[#0070e0] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Read Bio</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Join Our Team CTA Section */}
        <section className="w-full bg-[#0b1320] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Careers at E.R. Stuebner
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Looking to Build Your Future With Us?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We are constantly seeking dedicated project managers, superintendents, estimators, and craft specialists who take pride in building communities.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-lg bg-[#0070e0] hover:bg-[#005bb5] text-white font-medium text-sm transition-all shadow-md cursor-pointer"
              >
                Connect With Our Team
              </button>
              <Link
                href="/behind-the-build"
                className="px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all"
              >
                Experience Company Culture
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Member Bio Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close bio"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 max-h-[85vh] overflow-y-auto">
                {/* Photo Column */}
                <div className="sm:col-span-5 relative bg-slate-100 min-h-[260px] sm:min-h-full">
                  <Image
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Content Column */}
                <div className="sm:col-span-7 p-6 sm:p-8 space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0070e0]">
                      Team Member Profile
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                      {selectedMember.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-600">
                      {selectedMember.role}
                    </p>
                  </div>

                  {/* Credentials Tags */}
                  {selectedMember.credentials && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedMember.credentials.map((c) => (
                        <span
                          key={c}
                          className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-[#0070e0] border border-blue-100"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bio Paragraphs */}
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line border-t border-slate-100 pt-3">
                    {selectedMember.bio}
                  </div>

                  {/* Education / Experience Details */}
                  {selectedMember.education && (
                    <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#0070e0] shrink-0" />
                        <span className="font-medium text-slate-800">{selectedMember.education}</span>
                      </div>
                      {selectedMember.experience && (
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-[#0070e0] shrink-0" />
                          <span>{selectedMember.experience}</span>
                        </div>
                      )}
                    </div>
                  )}
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
