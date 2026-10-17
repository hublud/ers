"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, CheckCircle2, ShieldAlert, Send, HardHat, FileText, Info } from "lucide-react";

interface SubcontractorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubcontractorModal({ isOpen, onClose }: SubcontractorModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    trade: "Electrical",
    yearsInBusiness: "5+",
    insuranceVerified: true,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f1929] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0070e0] flex items-center justify-center text-white">
              <HardHat className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#00c6d7] font-semibold">
                Partner Network
              </span>
              <h2 className="text-xl sm:text-2xl font-bold">
                Subcontractor Prequalification
              </h2>
            </div>
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

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-[#0070e0] rounded-full flex items-center justify-center mb-4 border border-blue-100">
                <Info className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Subcontractor Portal Coming Soon
              </h3>
              <p className="text-slate-600 max-w-md mb-4 text-sm leading-relaxed">
                Online subcontractor registration is coming soon for this initial launch. No application was submitted through this form. Please send your company profile and trade information directly to our team:
              </p>
              <div className="bg-[#f9fbff] border border-blue-100 rounded-xl p-4 w-full max-w-md mb-6 text-left text-xs text-slate-700 space-y-2">
                <div><strong className="text-slate-900">Estimating Email:</strong> <a href="mailto:estimating@erscon.com" className="text-[#0070e0] hover:underline">estimating@erscon.com</a></div>
                <div><strong className="text-slate-900">Phone:</strong> <a href="tel:6103766625" className="text-[#0070e0] hover:underline">(610) 376-6625</a></div>
                <div className="pt-1.5 border-t border-blue-100">
                  <Link
                    href="/contact-us/?tab=subcontractor"
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="text-[#0070e0] font-semibold hover:underline flex items-center gap-1"
                  >
                    Go to Subcontractor Portal Page &rarr;
                  </Link>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white font-medium text-sm transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    placeholder="Acme Contractors LLC"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Primary Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) =>
                      setFormData({ ...formData, contactPerson: e.target.value })
                    }
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="estimating@acme.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(610) 555-0199"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Primary Trade / Specialty *
                  </label>
                  <select
                    value={formData.trade}
                    onChange={(e) =>
                      setFormData({ ...formData, trade: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all bg-white"
                  >
                    <option value="Electrical">Electrical & Lighting</option>
                    <option value="HVAC">HVAC & Mechanical</option>
                    <option value="Plumbing">Plumbing & Piping</option>
                    <option value="Concrete">Concrete & Foundations</option>
                    <option value="Steel">Structural Steel & Framing</option>
                    <option value="Masonry">Masonry & Brickwork</option>
                    <option value="Drywall">Drywall & Acoustical</option>
                    <option value="Roofing">Roofing & Waterproofing</option>
                    <option value="Painting">Finishes & Painting</option>
                    <option value="SiteWork">Earthwork & Site Utilities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Years in Business
                  </label>
                  <select
                    value={formData.yearsInBusiness}
                    onChange={(e) =>
                      setFormData({ ...formData, yearsInBusiness: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all bg-white"
                  >
                    <option value="1-3">1 - 3 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5-10">5 - 10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Certifications & Overview
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="List relevant union/non-union status, bonding capacity, OSHA records, or recent commercial projects..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="insurance"
                  checked={formData.insuranceVerified}
                  onChange={(e) =>
                    setFormData({ ...formData, insuranceVerified: e.target.checked })
                  }
                  className="rounded text-[#0070e0] focus:ring-[#0070e0]"
                />
                <label htmlFor="insurance" className="text-xs text-slate-600">
                  Our company maintains active General Liability, Workers Comp, and Commercial Auto coverage.
                </label>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-gray-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white text-sm font-bold uppercase tracking-wider transition-colors shadow-md shadow-blue-500/20 disabled:opacity-70 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Submitting..." : "Submit Prequalification"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
