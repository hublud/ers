"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Briefcase, Upload, FileText, Info } from "lucide-react";

export default function CareersForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "Construction Project Manager",
    experience: "3-5 years",
    linkedin: "",
    notes: "",
  });

  const [fileName, setFileName] = useState<string>("");
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
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
          Online Applications Coming Soon
        </h3>
        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
          Our online careers portal is currently being finalized for launch. No application was submitted through this form. To apply immediately for the <span className="font-semibold text-slate-900">{formData.position}</span> position, please email your resume and cover letter directly:
        </p>
        <div className="bg-[#f9fbff] border border-blue-100 rounded-2xl p-6 max-w-md mx-auto mb-8 text-left text-sm text-slate-700 space-y-3">
          <div className="font-semibold text-slate-900 border-b border-blue-100 pb-2">Direct HR & Hiring Contact</div>
          <div><strong className="text-slate-900">Email:</strong> <a href="mailto:careers@erscon.com" className="text-[#0070e0] hover:underline">careers@erscon.com</a></div>
          <div><strong className="text-slate-900">Phone:</strong> <a href="tel:6103766625" className="text-[#0070e0] hover:underline">(610) 376-6625</a></div>
          <div><strong className="text-slate-900">Subject Line:</strong> Application: {formData.position}</div>
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
      className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl max-w-4xl mx-auto transition-all"
    >
      <div className="mb-8 text-center sm:text-left">
        <span className="text-xs uppercase tracking-widest font-bold text-[#0070e0] bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Careers & Opportunities
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1929] tracking-tight">
          Apply for a Job at E.R. Stuebner
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
          Join a 75-year tradition of building excellence. We provide competitive compensation, comprehensive healthcare, retirement benefits, and career advancement.
        </p>
      </div>

      <div className="space-y-6">
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
              placeholder="First Name"
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
              placeholder="Last Name"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
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
              placeholder="your.email@example.com"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
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
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Position of Interest <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 bg-white cursor-pointer"
            >
              <option value="Construction Project Manager">Construction Project Manager (Open Position)</option>
              <option value="General Application">General Inquiry / Future Openings</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Relevant Experience
            </label>
            <select
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 bg-white cursor-pointer"
            >
              <option value="Entry-level">Entry Level (0 - 2 years)</option>
              <option value="3-5 years">Mid Level (3 - 5 years)</option>
              <option value="6-10 years">Experienced (6 - 10 years)</option>
              <option value="10+ years">Senior Level (10+ years)</option>
            </select>
          </div>
        </div>

        {/* Resume upload */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Upload Resume (PDF, DOCX)
          </label>
          <div className="relative border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-[#2f6fed] hover:bg-blue-50/30 transition-all cursor-pointer">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center">
              <Upload className="w-8 h-8 text-[#0070e0] mb-2" />
              {fileName ? (
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>Selected: {fileName}</span>
                </div>
              ) : (
                <>
                  <span className="text-sm font-semibold text-slate-800">
                    Click to browse or drag and drop your resume
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    PDF, DOC, DOCX up to 10MB
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Message / Cover Letter */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Brief Introduction or Cover Message
          </label>
          <textarea
            rows={4}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Tell us about yourself, your career background, and why you would like to work with E.R. Stuebner..."
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white resize-y"
          />
        </div>

        {/* Submit */}
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
                <span>Submit Application</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-xs text-slate-500 leading-relaxed">
            * Online applications are coming soon for this initial launch. For immediate consideration, please email your resume directly to <a href="mailto:careers@erscon.com" className="text-[#0070e0] font-medium hover:underline">careers@erscon.com</a>.
          </p>
        </div>
      </div>
    </form>
  );
}
