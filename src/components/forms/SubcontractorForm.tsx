"use client";

import React, { useState } from "react";
import { Check, CheckCircle2, HardHat, Send, ShieldCheck, Info } from "lucide-react";

export default function SubcontractorForm() {
  const [selectedTrades, setSelectedTrades] = useState<string[]>(["Electrical"]);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "PA",
    zip: "",
    yearsInBusiness: "5-10",
    unionStatus: "Non-Union",
    bondingCapacity: "",
    insuranceCompany: "",
    pastProjectsSummary: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tradesList = [
    "Electrical",
    "HVAC & Mechanical",
    "Plumbing & Piping",
    "Concrete & Masonry",
    "Steel Framing & Erection",
    "Drywall & Acoustical",
    "Roofing & Siding",
    "Painting & Wall Coverings",
    "Flooring & Tile",
    "Earthwork & Site Utilities",
    "Glass, Glazing & Storefronts",
    "Elevators & Lifts",
    "Fire Protection / Sprinklers",
    "Demolition & Abatement",
  ];

  const toggleTrade = (trade: string) => {
    if (selectedTrades.includes(trade)) {
      setSelectedTrades(selectedTrades.filter((t) => t !== trade));
    } else {
      setSelectedTrades([...selectedTrades, trade]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl max-w-4xl mx-auto text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-blue-50 text-[#0070e0] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-blue-100">
          <Info className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-[#0f1929] mb-3">
          Subcontractor Portal Coming Soon
        </h3>
        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
          Online subcontractor prequalification is currently being configured for our new bidding system. No application was submitted through this form. To send your qualifications, trade sheet, or W-9 directly to our estimating team:
        </p>
        <div className="bg-[#f9fbff] border border-blue-100 rounded-2xl p-6 max-w-md mx-auto mb-8 text-left text-sm text-slate-700 space-y-3">
          <div className="font-semibold text-slate-900 border-b border-blue-100 pb-2">Estimating & Bidding Contact</div>
          <div><strong className="text-slate-900">Email:</strong> <a href="mailto:estimating@erscon.com" className="text-[#0070e0] hover:underline">estimating@erscon.com</a></div>
          <div><strong className="text-slate-900">Phone:</strong> <a href="tel:6103766625" className="text-[#0070e0] hover:underline">(610) 376-6625</a></div>
          <div><strong className="text-slate-900">General Inquiries:</strong> <a href="mailto:info@erscon.com" className="text-[#0070e0] hover:underline">info@erscon.com</a></div>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-[#0070e0] hover:bg-[#005bb5] transition-all shadow-md cursor-pointer"
        >
          Return to Form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl max-w-5xl mx-auto transition-all"
    >
      <div className="mb-8 text-center sm:text-left">
        <span className="text-xs uppercase tracking-widest font-bold text-[#0070e0] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Bid Opportunities & Procurement
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1929] tracking-tight">
          Become an Approved Subcontractor
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
          E.R. Stuebner values close partnerships with reliable, qualified subcontractors and suppliers across Pennsylvania, New Jersey, Delaware, and Maryland. Fill out your qualifications below.
        </p>
      </div>

      {/* Trades Selection */}
      <div className="mb-10">
        <label className="block text-lg font-bold text-slate-800 mb-2">
          Primary Trades / Units of Work <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-slate-500 mb-4">
          Select all scopes of work your organization performs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tradesList.map((trade) => {
            const isSelected = selectedTrades.includes(trade);
            return (
              <div
                key={trade}
                onClick={() => toggleTrade(trade)}
                className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                  isSelected
                    ? "border-[#2f6fed] bg-[#eef4ff] text-[#0f1929] font-semibold shadow-xs"
                    : "border-slate-200 bg-[#f9fbff] text-slate-700 hover:border-[#2f6fed] hover:bg-white"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? "bg-[#2f6fed] text-white" : "border border-slate-300 bg-white"
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className="text-sm">{trade}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Company Info */}
      <div className="space-y-6 mb-10 pt-6 border-t border-slate-200">
        <h3 className="text-xl font-bold text-[#0f1929]">
          Company & Contact Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Legal Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Company Legal Name"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Primary Contact Person <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="email@company.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (610) 000-0000"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Years in Business
            </label>
            <select
              value={formData.yearsInBusiness}
              onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 bg-white cursor-pointer"
            >
              <option value="1-2">1 - 2 Years</option>
              <option value="3-5">3 - 5 Years</option>
              <option value="5-10">5 - 10 Years</option>
              <option value="10+">10+ Years</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Labor Agreement
            </label>
            <select
              value={formData.unionStatus}
              onChange={(e) => setFormData({ ...formData, unionStatus: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 bg-white cursor-pointer"
            >
              <option value="Non-Union">Open Shop / Non-Union</option>
              <option value="Union">Union Signatory</option>
              <option value="Both">Both / Depends on Project</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Single Job Bonding Limit
            </label>
            <input
              type="text"
              value={formData.bondingCapacity}
              onChange={(e) => setFormData({ ...formData, bondingCapacity: e.target.value })}
              placeholder="e.g. $2,000,000"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Recent Similar Projects / References
          </label>
          <textarea
            rows={3}
            value={formData.pastProjectsSummary}
            onChange={(e) => setFormData({ ...formData, pastProjectsSummary: e.target.value })}
            placeholder="Briefly describe 1-2 recent commercial, institutional, or public projects completed by your team..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white resize-y"
          />
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-bold text-white bg-[#0070e0] hover:bg-[#005bb5] active:bg-[#004f9e] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Checking Status...</span>
            </>
          ) : (
            <>
              <span>Submit Subcontractor Application</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-xs text-slate-500 leading-relaxed">
          * Online subcontractor registration is coming soon for this initial launch. For immediate consideration, please email your company profile to <a href="mailto:estimating@erscon.com" className="text-[#0070e0] font-medium hover:underline">estimating@erscon.com</a>.
        </p>
      </div>
    </form>
  );
}
