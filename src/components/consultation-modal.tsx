"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeConsultationModal } from "../store/uiSlice";
import ConsultationModalForm from "./modals/consultation-modal-form";
import { X } from "lucide-react";

export default function ConsultationModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isConsultationModalOpen);
  const initialInterest = useAppSelector((state) => state.ui.consultationInitialInterest);

  if (!isOpen) return null;

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

        {/* Modular Form */}
        <ConsultationModalForm initialInterest={initialInterest || ""} />
      </div>
    </div>
  );
}
