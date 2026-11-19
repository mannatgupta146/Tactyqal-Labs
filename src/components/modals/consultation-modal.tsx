"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeConsultationModal } from "../../store/uiSlice";
import ConsultationModalForm from "./consultation-modal-form";
import { X } from "lucide-react";

export default function ConsultationModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isConsultationModalOpen);
  const initialInterest = useAppSelector((state) => state.ui.consultationInitialInterest);

  // Lock background body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={() => dispatch(closeConsultationModal())}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[92vh] overflow-x-hidden overflow-y-auto no-scrollbar rounded-3xl bg-white border border-stone-200 shadow-2xl p-6 sm:p-7 text-slate-900"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Top Radiant Sheen */}
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent" />

        {/* Circular Close Button */}
        <button
          onClick={() => dispatch(closeConsultationModal())}
          aria-label="Close consultation modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all active:scale-95 z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-[11px] font-bold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00df82]" />
            <span>Free 30-Minute Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Start Your Kid&apos;s Success Story
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
            Speak 1:1 with our founder to evaluate your teen&apos;s app idea, admission goals, and personalized 8-week roadmap.
          </p>
        </div>

        {/* Modular Form */}
        <ConsultationModalForm initialInterest={initialInterest || ""} />
      </div>
    </div>
  );
}
