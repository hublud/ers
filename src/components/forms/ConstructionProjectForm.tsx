"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Send, CheckCircle2, Building2, Landmark, GraduationCap, Cross, Factory, Hotel, Info } from "lucide-react";

export default function ConstructionProjectForm() {
  const [userType, setUserType] = useState<string>("Private");
  const [projectType, setProjectType] = useState<string>("Build");
  const [buildingType, setBuildingType] = useState<string>("Education");

  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    mobilePhone: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          Online Submissions Coming Soon
        </h3>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          Thank you for your interest! Online form transmission is currently being configured for our upcoming portal release. To ensure your project details and RFPs are received immediately, please contact our estimation team directly.
        </p>
        <div className="bg-[#f9fbff] border border-blue-100 rounded-2xl p-6 max-w-md mx-auto mb-8 text-left text-sm text-slate-700 space-y-3">
          <div className="font-semibold text-slate-900 border-b border-blue-100 pb-2">Direct Contact Information</div>
          <div><strong className="text-slate-900">Phone:</strong> <a href="tel:6103766625" className="text-[#0070e0] hover:underline">(610) 376-6625</a></div>
          <div><strong className="text-slate-900">Email:</strong> <a href="mailto:info@erscon.com" className="text-[#0070e0] hover:underline">info@erscon.com</a></div>
          <div><strong className="text-slate-900">Address:</strong> 1550 Cross Keys Road, Reading, PA 19605</div>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-[#0070e0] hover:bg-[#005bb5] transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
          Return to Form
        </button>
      </div>
    );
  }

  const userTypeOptions = [
    { id: "Private", label: "Private", icon: "/images/form-icons/home.png", fallbackIcon: Landmark },
    { id: "Public", label: "Public", icon: "/images/form-icons/marker.png", fallbackIcon: Building2 },
  ];

  const projectTypeOptions = [
    { id: "Build", label: "Build", icon: "/images/form-icons/under-construction.png" },
    { id: "Design / Build", label: "Design / Build", icon: "/images/form-icons/design.png" },
    { id: "Renovate", label: "Renovate", icon: "/images/form-icons/maintenance.png" },
    { id: "Fit Out", label: "Fit Out", icon: "/images/form-icons/interior.png" },
  ];

  const buildingTypeOptions = [
    { id: "Education", label: "Education", icon: "/images/form-icons/education.png" },
    { id: "Healthcare", label: "Healthcare", icon: "/images/form-icons/healthcare.png" },
    { id: "Industrial", label: "Industrial", icon: "/images/form-icons/industrial.png" },
    { id: "Hospitality", label: "Hospitality" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl max-w-5xl mx-auto transition-all"
    >
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs uppercase tracking-widest font-bold text-[#0070e0] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Step-by-Step Project Scope
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1929] tracking-tight">
          I Have a Construction Project
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
          Select your project criteria below, then provide your contact information. Our team will tailor a response specific to your timeline and building requirements.
        </p>
      </div>

      {/* 1. I AM */}
      <div className="mb-10">
        <label className="block text-lg font-bold text-slate-800 mb-4">
          I am <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {userTypeOptions.map((opt) => {
            const isChecked = userType === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setUserType(opt.id)}
                className={`relative flex flex-col items-center justify-center p-6 min-h-[130px] rounded-[22px] border-2 cursor-pointer transition-all duration-300 text-center select-none ${
                  isChecked
                    ? "border-[#2f6fed] bg-[#eef4ff] shadow-[0_15px_30px_rgba(47,111,237,0.2)] -translate-y-1"
                    : "border-[#cfd8e3] bg-[#f9fbff] hover:border-[#2f6fed] hover:shadow-[0_12px_25px_rgba(47,111,237,0.15)] hover:-translate-y-1"
                }`}
              >
                {/* Checkmark bubble */}
                {isChecked && (
                  <div className="absolute top-3 right-3 w-7 h-7 bg-[#2f6fed] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
                {/* Icon */}
                <div className="w-12 h-12 mb-3 relative flex items-center justify-center">
                  <Image
                    src={opt.icon}
                    alt={opt.label}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                </div>
                {/* Label */}
                <span className="text-xl font-bold text-[#1e293b] tracking-tight">
                  {opt.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. I HAVE A PROJECT */}
      <div className="mb-10">
        <label className="block text-lg font-bold text-slate-800 mb-4">
          I have a project <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projectTypeOptions.map((opt) => {
            const isChecked = projectType === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setProjectType(opt.id)}
                className={`relative flex flex-col items-center justify-center p-6 min-h-[130px] rounded-[22px] border-2 cursor-pointer transition-all duration-300 text-center select-none ${
                  isChecked
                    ? "border-[#2f6fed] bg-[#eef4ff] shadow-[0_15px_30px_rgba(47,111,237,0.2)] -translate-y-1"
                    : "border-[#cfd8e3] bg-[#f9fbff] hover:border-[#2f6fed] hover:shadow-[0_12px_25px_rgba(47,111,237,0.15)] hover:-translate-y-1"
                }`}
              >
                {/* Checkmark bubble */}
                {isChecked && (
                  <div className="absolute top-3 right-3 w-7 h-7 bg-[#2f6fed] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
                {/* Icon */}
                <div className="w-12 h-12 mb-3 relative flex items-center justify-center">
                  <Image
                    src={opt.icon}
                    alt={opt.label}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                </div>
                {/* Label */}
                <span className="text-lg font-bold text-[#1e293b] tracking-tight">
                  {opt.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. TYPE OF BUILDING */}
      <div className="mb-12">
        <label className="block text-lg font-bold text-slate-800 mb-4">
          Type of building <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {buildingTypeOptions.map((opt) => {
            const isChecked = buildingType === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setBuildingType(opt.id)}
                className={`relative flex flex-col items-center justify-center p-6 min-h-[130px] rounded-[22px] border-2 cursor-pointer transition-all duration-300 text-center select-none ${
                  isChecked
                    ? "border-[#2f6fed] bg-[#eef4ff] shadow-[0_15px_30px_rgba(47,111,237,0.2)] -translate-y-1"
                    : "border-[#cfd8e3] bg-[#f9fbff] hover:border-[#2f6fed] hover:shadow-[0_12px_25px_rgba(47,111,237,0.15)] hover:-translate-y-1"
                }`}
              >
                {/* Checkmark bubble */}
                {isChecked && (
                  <div className="absolute top-3 right-3 w-7 h-7 bg-[#2f6fed] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
                {/* Optional Icon if present */}
                {opt.icon ? (
                  <div className="w-12 h-12 mb-3 relative flex items-center justify-center">
                    <Image
                      src={opt.icon}
                      alt={opt.label}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain opacity-80 transition-opacity"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 mb-3 flex items-center justify-center text-slate-700">
                    <Building2 className="w-9 h-9 stroke-[1.5]" />
                  </div>
                )}
                {/* Label */}
                <span className="text-lg font-bold text-[#1e293b] tracking-tight">
                  {opt.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION BREAK: PERSONAL DETAILS */}
      <div className="pt-6 border-t border-slate-200 mb-8">
        <h3 className="text-2xl font-bold text-[#0f1929] mb-1">
          Personal Details
        </h3>
        <p className="text-slate-500 text-sm">
          Please provide your contact information so our project managers can reach you.
        </p>
      </div>

      {/* FORM INPUTS */}
      <div className="space-y-6">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="Your Company / Organization"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
          />
        </div>

        {/* First Name & Last Name (2 Cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="Enter Your First Name"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Enter Your Last Name"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
        </div>

        {/* Mobile Phone */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Mobile Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.mobilePhone}
            onChange={(e) => setFormData({ ...formData, mobilePhone: e.target.value })}
            placeholder="e.g. +1 (610) 000-0000"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
          />
        </div>

        {/* Project Details */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            value={formData.projectDetails}
            onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
            placeholder="Please share project location, estimated square footage, target start/completion date, or any specific requirements..."
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white resize-y"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
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
                <span>Submit Form</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-xs text-slate-500 leading-relaxed">
            * Online form submission is coming soon for this initial launch. For immediate response, please call <a href="tel:6103766625" className="text-[#0070e0] font-medium hover:underline">(610) 376-6625</a> or email <a href="mailto:info@erscon.com" className="text-[#0070e0] font-medium hover:underline">info@erscon.com</a>.
          </p>
        </div>
      </div>
    </form>
  );
}
