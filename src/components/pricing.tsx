"use client";

import React from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  HelpCircle,
} from "lucide-react";

export default function Pricing() {
  const dispatch = useAppDispatch();

  const deliverables = [
    "8 weeks of dedicated 1:1 founder mentoring (1 hour weekly live session)",
    "Complete full-stack web/mobile application built & deployed",
    "Product Hunt official launch campaign & marketing strategy",
    "Custom investor & university admissions pitch deck creation",
    "Customer acquisition & monetization setup (Stripe/Razorpay)",
    "PR, young founder grants & media coverage outreach",
    "Lifelong community, alumni network & demo day access",
    "Results guaranteed or 100% money back",
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Start Your Teen&apos;s Entrepreneurial Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A small investment that yields lifelong skills, published applications, revenue potential, and an unmatched university admissions advantage.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto rounded-3xl bg-slate-900 border-2 border-indigo-500/40 p-8 sm:p-10 shadow-2xl shadow-indigo-500/10 relative">
          {/* Top Scarcity Pill */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5" /> Limited Time: Only 15 Spots This Month
          </div>

          <div className="text-center pt-2">
            <h3 className="text-2xl font-bold text-white">Full-Stack Incubator Cohort</h3>
            <p className="text-sm text-slate-400 mt-1">From raw idea to published app in 8 weeks</p>

            {/* Price Tag */}
            <div className="mt-6 flex items-baseline justify-center gap-3">
              <span className="text-2xl text-slate-500 line-through font-semibold">₹25,000</span>
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                ₹16,000
              </span>
              <span className="text-xs uppercase font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                Save 36%
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-2">One-time payment • Flexible installment options available</div>
          </div>

          {/* Checklist */}
          <div className="mt-8 pt-8 border-t border-slate-800 space-y-3.5">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Money Back Guarantee Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-indigo-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white">Results Guaranteed:</span> If your teen attends all sessions and does not have a functional deployed app by week 8, we refund 100% of your tuition.
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8">
            <button
              onClick={() => dispatch(openConsultationModal("Pricing Card Enrollment"))}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-extrabold text-base shadow-xl shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Zap className="w-5 h-5" />
              <span>Enroll Now / Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs text-slate-500">
              No immediate commitment required. Speak with our founder first to evaluate fit.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
