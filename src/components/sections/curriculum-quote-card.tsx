"use client";

import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { openConsultationModal } from "../../store/uiSlice";
import { Quote, ArrowRight } from "lucide-react";

export default function CurriculumQuoteCard() {
  const dispatch = useAppDispatch();

  return (
    <div className="curriculum-quote mt-12 relative rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-10 text-center max-w-3xl mx-auto shadow-md">
      <Quote className="w-8 h-8 text-[#059669]/30 mx-auto mb-3" />
      <blockquote className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight">
        &ldquo;Learn to sell. Learn to build. If you can do both, you will be unstoppable.&rdquo;
      </blockquote>
      <div className="mt-3 text-xs sm:text-sm font-bold text-[#059669]">
        — Naval Ravikant, Entrepreneur &amp; Investor
      </div>

      <div className="mt-6 flex items-center justify-center">
        <button
          onClick={() => dispatch(openConsultationModal("Curriculum Quote CTA"))}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition hover:scale-105 active:scale-95"
        >
          <span>Start Your Journey Today</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
