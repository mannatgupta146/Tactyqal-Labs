"use client";

import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { showToast } from "../../store/uiSlice";
import { api } from "../../lib/api";
import { Calendar } from "lucide-react";

export default function ContactBookingForm() {
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
    <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-10 shadow-lg flex flex-col justify-between h-full">
      <div>
        <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Book a Free Appointment</h3>
        <p className="mt-2 text-sm text-slate-600 mb-6 leading-relaxed">
          Fill in your details below and we will confirm a convenient call time with our founder.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Parent&apos;s Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ramesh Verma"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="parent@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              WhatsApp Phone *
            </label>
            <input
              type="tel"
              required
              placeholder="+91-98047-72106"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Student Age
          </label>
          <select
            value={studentAge}
            onChange={(e) => setStudentAge(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition"
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
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            App Idea or Questions
          </label>
          <textarea
            rows={3}
            placeholder="Share any initial thoughts, curiosity, or admission goals..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] focus:bg-white transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition disabled:opacity-50 hover:scale-[1.01]"
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
  );
}
