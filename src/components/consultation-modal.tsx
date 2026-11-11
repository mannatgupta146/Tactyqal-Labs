"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeConsultationModal, showToast } from "../store/uiSlice";
import { api } from "../lib/api";
import { X, Calendar, CheckCircle2, Phone, Mail, User } from "lucide-react";

export default function ConsultationModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isConsultationModalOpen);
  const initialInterest = useAppSelector((state) => state.ui.consultationInitialInterest);

  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [studentAge, setStudentAge] = useState("15");
  const [goalInterest, setGoalInterest] = useState(initialInterest || "1:1 App Building & Mentoring");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !email || !phone) {
      dispatch(showToast({ message: "Please fill in all required fields (Name, Email, Phone).", type: "error" }));
      return;
    }

    setIsSubmitting(true);
    try {
      await api.bookConsultation({
        parentName,
        studentName,
        email,
        phone,
        studentAge: parseInt(studentAge) || 15,
        goalInterest,
        notes,
      });

      dispatch(
        showToast({
          message: "🎉 Success! Your free 1:1 consultation has been scheduled. Our team will reach out within 24 hours.",
          type: "success",
        })
      );
      dispatch(closeConsultationModal());
      setParentName("");
      setStudentName("");
      setEmail("");
      setPhone("");
      setNotes("");
    } catch (err: any) {
      dispatch(
        showToast({
          message: err?.response?.data?.error || "Failed to book consultation. Please try again or call us directly.",
          type: "error",
        })
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-stone-200 shadow-2xl p-6 sm:p-8 text-slate-900">
        {/* Close Button */}
        <button
          onClick={() => dispatch(closeConsultationModal())}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-3">
            Free 30-Minute Consultation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Start Your Kid&apos;s Success Story
          </h2>
          <p className="text-slate-600 text-sm mt-1.5">
            Speak 1:1 with our founder to evaluate your teen&apos;s app idea, admission goals, and personalized 8-week roadmap.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Parent&apos;s Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunita Sharma"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Student&apos;s Name
              </label>
              <input
                type="text"
                placeholder="e.g. Aarav Sharma"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="parent@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                WhatsApp / Phone *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98047 72106"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Student Age
              </label>
              <select
                value={studentAge}
                onChange={(e) => setStudentAge(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
              >
                <option value="12">12 years old (Grade 7)</option>
                <option value="13">13 years old (Grade 8)</option>
                <option value="14">14 years old (Grade 9)</option>
                <option value="15">15 years old (Grade 10)</option>
                <option value="16">16 years old (Grade 11)</option>
                <option value="17">17 years old (Grade 12)</option>
                <option value="18">18+ years old (College / Gap Year)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Primary Goal
              </label>
              <select
                value={goalInterest}
                onChange={(e) => setGoalInterest(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
              >
                <option value="1:1 App Building & Mentoring">1:1 App Building & Mentoring</option>
                <option value="Top University Admissions Edge">Top University Admissions Edge</option>
                <option value="Revenue & Monetization">Generating Real Revenue</option>
                <option value="Product Hunt & Startup Launch">Product Hunt Launch</option>
                <option value="Ideation & Validation">Validating an Early Idea</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Tell us about their idea or curiosity (optional)
            </label>
            <textarea
              rows={3}
              placeholder="Does your teen have an interest in gaming, sustainability, AI, or an app idea they want to bring to life?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-base shadow-md shadow-emerald-500/20 transition disabled:opacity-50 hover:scale-[1.01]"
            >
              {isSubmitting ? (
                <span>Scheduling Consultation...</span>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation (15 Spots Left)</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-600 pt-2">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> 100% Free & No Obligation
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Results Guaranteed
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
