"use client";

import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { showToast } from "../store/uiSlice";
import { api } from "../lib/api";
import {
  Mail,
  Phone,
  Clock,
  Calendar,
} from "lucide-react";

export default function ContactSection() {
  const dispatch = useAppDispatch();

  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [studentAge, setStudentAge] = useState("15");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !email || !phone) {
      dispatch(
        showToast({
          message: "Please fill in all required fields (Name, Email, Phone).",
          type: "error",
        })
      );
      return;
    }

    setIsSubmitting(true);
    try {
      await api.bookConsultation({
        parentName,
        email,
        phone,
        studentAge: parseInt(studentAge) || 15,
        goalInterest: "Direct Contact Form Booking",
        notes,
      });

      dispatch(
        showToast({
          message: "🎉 Thank you! Your consultation request has been received. We will contact you within 24 hours.",
          type: "success",
        })
      );
      setParentName("");
      setEmail("");
      setPhone("");
      setNotes("");
    } catch (err: any) {
      dispatch(
        showToast({
          message: err?.response?.data?.error || "Error submitting form. Please call or email us directly.",
          type: "error",
        })
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Start Your Teen&apos;s Success Story?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Reach out to our dedicated mentoring team for any inquiries, curriculum questions, or admissions roadmap planning.
            </p>

            {/* Direct Cards */}
            <div className="mt-8 space-y-4">
              <a
                href="mailto:tactyqal.labs@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    tactyqal.labs@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+919804772106"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Phone & WhatsApp
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91-98047-72106
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-teal-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Office Hours & Response Time
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Mon–Sat, 9:00 AM – 7:00 PM IST (Response within 24h)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Booking Form */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Book a Free Appointment</h3>
            <p className="text-sm text-slate-400 mb-6">
              Fill in your details below and we will confirm a convenient call time with our founder.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Parent&apos;s Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Verma"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91-98047-72106"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Student Age
                </label>
                <select
                  value={studentAge}
                  onChange={(e) => setStudentAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 transition"
                >
                  <option value="12">12 years old</option>
                  <option value="13">13 years old</option>
                  <option value="14">14 years old</option>
                  <option value="15">15 years old</option>
                  <option value="16">16 years old</option>
                  <option value="17">17 years old</option>
                  <option value="18">18+ years old</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  App Idea or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any initial thoughts, curiosity, or admission goals..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 transition disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Free Consultation Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
