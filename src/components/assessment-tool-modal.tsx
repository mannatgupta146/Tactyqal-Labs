"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeAssessmentTool, openConsultationModal } from "../store/uiSlice";
import IdeaGeneratorView from "./tools/idea-generator-view";
import FundabilityQuizView from "./tools/fundability-quiz-view";
import DiagnosticChecklistView from "./tools/diagnostic-checklist-view";
import { X, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function AssessmentToolModal() {
  const dispatch = useAppDispatch();
  const selectedTool = useAppSelector((state) => state.ui.selectedAssessmentTool);

  // Lock background body scrolling when modal is open
  useEffect(() => {
    if (selectedTool) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTool]);

  if (!selectedTool) return null;

  return (
    <div
      onClick={() => dispatch(closeAssessmentTool())}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[92vh] overflow-x-hidden overflow-y-auto no-scrollbar rounded-3xl bg-white border border-stone-200 shadow-2xl p-6 sm:p-7 text-slate-900"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Top Radiant Sheen */}
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent" />
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Circular Close Button */}
        <button
          onClick={() => dispatch(closeAssessmentTool())}
          aria-label="Close diagnostic modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all active:scale-95 z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-[11px] font-bold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00df82]" />
            <span>Interactive Founder Diagnostic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {selectedTool}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
            Proprietary diagnostic used by 1,000+ teen founders and mentors at Tactyqal Labs.
          </p>
        </div>

        {/* Content based on selected tool */}
        <div className="relative z-10">
          {selectedTool.includes("Idea Generator") ? (
            <IdeaGeneratorView />
          ) : selectedTool.includes("Fundability") ? (
            <FundabilityQuizView />
          ) : (
            <DiagnosticChecklistView />
          )}
        </div>

        {/* Subtle, Clean Footer */}
        <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <div className="text-xs font-bold text-slate-900">Want 1:1 founder feedback on your score?</div>
            <div className="text-[11px] text-slate-500">Book a free 30-minute idea validation call</div>
          </div>
          <button
            onClick={() => {
              dispatch(closeAssessmentTool());
              dispatch(openConsultationModal("Startup Assessment & Idea Review"));
            }}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 hover:border-slate-800 bg-white hover:bg-stone-50 text-slate-800 font-bold text-xs transition-all shadow-2xs whitespace-nowrap active:scale-95 shrink-0"
          >
            <span>Review With Founder</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
