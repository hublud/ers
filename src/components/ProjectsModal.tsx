"use client";

import React, { useState } from "react";
import { X, Building2, School, Stethoscope, Landmark, ExternalLink, Calendar, MapPin } from "lucide-react";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: "Penn State Berks Technology Learning Center",
    category: "Education",
    location: "Reading, PA",
    year: "Completed",
    description: "State-of-the-art academic instructional complex featuring high-tech engineering labs and lecture halls.",
  },
  {
    id: 2,
    title: "Tower Health Medical Office Pavilion",
    category: "Healthcare",
    location: "West Reading, PA",
    year: "Completed",
    description: "Multi-specialty outpatient healthcare facility with surgical suites, diagnostic imaging, and LEED certification.",
  },
  {
    id: 3,
    title: "Schuylkill Valley Corporate Center",
    category: "Commercial",
    location: "Leesport, PA",
    year: "Completed",
    description: "Class-A multi-tenant corporate headquarters with high-efficiency structural steel systems and architectural glazing.",
  },
  {
    id: 4,
    title: "Berks County Historic Courthouse Restoration",
    category: "Institutional",
    location: "Reading, PA",
    year: "Completed",
    description: "Comprehensive architectural preservation, seismic retrofit, and interior modernization of historic landmark.",
  },
  {
    id: 5,
    title: "Wilson School District STEM Academy",
    category: "Education",
    location: "Sinking Spring, PA",
    year: "Completed",
    description: "New 85,000 sq ft secondary educational wing with collaborative robotics workshops and science laboratories.",
  },
  {
    id: 6,
    title: "Tri-County Logistics & Distribution Center",
    category: "Industrial",
    location: "Hamburg, PA",
    year: "Completed",
    description: "Pre-engineered structural steel industrial distribution terminal with 36-foot clear heights and 48 loading docks.",
  },
];

export default function ProjectsModal({ isOpen, onClose, onOpenContact }: ProjectsModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (!isOpen) return null;

  const categories = ["All", "Education", "Healthcare", "Commercial", "Institutional", "Industrial"];

  const filteredProjects = selectedCategory === "All"
    ? SAMPLE_PROJECTS
    : SAMPLE_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f1929] px-6 py-5 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#00c6d7] font-semibold">
              Portfolio & Track Record
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              3,500+ Projects Built Over 75+ Years
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-2 overflow-x-auto bg-slate-50 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0070e0] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-200/70 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-5 rounded-xl border border-gray-200 hover:border-[#0070e0] hover:shadow-md transition-all duration-200 bg-white group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-[#0070e0]">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[#0070e0] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-medium text-emerald-600">
                    Precision & Quality Delivery
                  </span>
                  <span className="font-semibold text-slate-700">PA & Beyond</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action card */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div>
              <h4 className="text-base font-bold mb-1">
                Have an upcoming project in Pennsylvania or neighboring states?
              </h4>
              <p className="text-xs text-slate-300">
                Let our team of experienced builders turn your vision into reality.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenContact) onOpenContact();
              }}
              className="px-6 py-2.5 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-colors shadow-md"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
