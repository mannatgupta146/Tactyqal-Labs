"use client";

import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { openConsultationModal } from "../../store/uiSlice";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
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
    <section id="pricing" className="py-20 sm:py-24 bg-[#FAF8F5] relative border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-3">
            Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Start Your Teen&apos;s Entrepreneurial Journey
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed">
            A small investment that yields lifelong skills, published applications, revenue potential, and an unmatched university admissions advantage.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto rounded-3xl bg-white border-2 border-emerald-500/30 p-4 sm:p-8 md:p-10 shadow-xl relative hover:border-emerald-500/50 transition-colors overflow-hidden">
          {/* Top Scarcity Pill */}
          <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-[#00df82] text-slate-950 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 max-w-[94%] whitespace-nowrap">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="truncate">Limited Time: Only 15 Spots This Month</span>
          </div>

          <div className="text-center pt-2 sm:pt-1">
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900">Full-Stack Incubator Cohort</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">From raw idea to published app in 8 weeks</p>

            {/* Price Tag - Fluid, Responsive & Overflow-Safe */}
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-sm sm:text-xl md:text-2xl text-slate-400 line-through font-semibold">
                ₹25,000
              </span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-black text-[#059669] tracking-tight">
                ₹16,000
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-emerald-200 shrink-0">
                Save 36%
              </span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-2">
              One-time payment • Flexible installment options available
            </div>
          </div>

          {/* Checklist */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-stone-100 space-y-3 sm:space-y-3.5">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#059669] shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Money Back Guarantee Banner */}
          <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#059669] shrink-0" />
            <div className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900">Results Guaranteed:</span> If your teen attends all sessions and does not have a functional deployed app by week 8, we refund 100% of your tuition.
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-6 sm:mt-8">
            <button
              onClick={() => dispatch(openConsultationModal("Pricing Card Enrollment"))}
              className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 px-4 sm:px-6 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-black text-xs sm:text-base shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="truncate">Enroll Now / Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

          <div className="mt-3.5 sm:mt-4 text-center">
            <span className="text-[11px] sm:text-xs text-slate-500">
              Zero risk • Full 100% money-back guarantee • Flexible installments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
