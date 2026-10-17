"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, CheckCircle2, Phone, Mail, MapPin, Send, Info } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Commercial",
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
          <div>
            <span className="text-xs uppercase tracking-wider text-[#00c6d7] font-semibold">
              Get in Touch
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              Contact E.R. Stuebner
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

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-[#0070e0] rounded-full flex items-center justify-center mb-4 border border-blue-100">
                <Info className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Online Submissions Coming Soon
              </h3>
              <p className="text-slate-600 max-w-md mb-4 text-sm leading-relaxed">
                Online form submission is coming soon for this initial portfolio launch. No message was sent through this web form. Please contact our team directly for immediate assistance:
              </p>
              <div className="bg-[#f9fbff] border border-blue-100 rounded-xl p-4 w-full max-w-md mb-6 text-left text-xs text-slate-700 space-y-2">
                <div><strong className="text-slate-900">Email:</strong> <a href="mailto:info@erscon.com" className="text-[#0070e0] hover:underline">info@erscon.com</a></div>
                <div><strong className="text-slate-900">Phone:</strong> <a href="tel:6103766625" className="text-[#0070e0] hover:underline">(610) 376-6625</a></div>
                <div className="pt-1.5 border-t border-blue-100">
                  <Link
                    href="/contact-us/"
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="text-[#0070e0] font-semibold hover:underline flex items-center gap-1"
                  >
                    Go to Full Contact Us Page &rarr;
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
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all"
                  />
                </div>

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
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(610) 376-8000"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all bg-white"
                  >
                    <option value="Commercial">Commercial / Corporate</option>
                    <option value="Educational">Educational & Schools</option>
                    <option value="Healthcare">Healthcare & Clinical</option>
                    <option value="Institutional">Institutional / Public</option>
                    <option value="Industrial">Industrial & Warehousing</option>
                    <option value="Other">Other Construction Need</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Project Details / Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your upcoming project scope, timeline, and location..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#0070e0] focus:ring-2 focus:ring-[#0070e0]/20 text-slate-800 text-sm outline-hidden transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Located in Reading, PA. Serving PA & Tri-state region.
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-full border border-gray-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white text-sm font-bold uppercase tracking-wider transition-colors shadow-md shadow-blue-500/20 disabled:opacity-70 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Quick info footer */}
          <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0070e0] shrink-0" />
              <span>Reading, Pennsylvania</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0070e0] shrink-0" />
              <span>(610) 376-8000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#0070e0] shrink-0" />
              <span>info@erstuebner.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
