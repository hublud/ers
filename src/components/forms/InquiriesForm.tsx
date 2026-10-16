"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail, MessageSquare, Info } from "lucide-react";

export default function InquiriesForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
          Online Inquiries Coming Soon
        </h3>
        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
          Online inquiries are currently being configured for our upcoming portal release. To ensure your message is received immediately, please reach out directly:
        </p>
        <div className="bg-[#f9fbff] border border-blue-100 rounded-2xl p-6 max-w-md mx-auto mb-8 text-left text-sm text-slate-700 space-y-3">
          <div className="font-semibold text-slate-900 border-b border-blue-100 pb-2">Direct Contact Information</div>
          <div><strong className="text-slate-900">Email:</strong> <a href="mailto:info@erscon.com" className="text-[#0070e0] hover:underline">info@erscon.com</a></div>
          <div><strong className="text-slate-900">Phone:</strong> <a href="tel:6103766625" className="text-[#0070e0] hover:underline">(610) 376-6625</a></div>
          <div><strong className="text-slate-900">Office Hours:</strong> Mon - Fri: 8:00 AM - 5:00 PM EST</div>
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
          General & Business Inquiries
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1929] tracking-tight">
          Send Us an Inquiry
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
          Have a question about our operations, past project credentials, or general queries? Fill out the form below and we will respond promptly.
        </p>
      </div>

      <div className="space-y-6">
        {/* Name Fields (2 Columns) */}
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

        {/* Email & Phone */}
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
              placeholder="Email Address"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone (optional)"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="Subject"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Your Message..."
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2f6fed] focus:ring-4 focus:ring-blue-100 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 bg-white resize-y"
          />
        </div>

        {/* Submit Button */}
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
