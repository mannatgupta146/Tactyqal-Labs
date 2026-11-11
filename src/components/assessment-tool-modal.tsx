"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeAssessmentTool, openConsultationModal } from "../store/uiSlice";
import IdeaGeneratorView from "./tools/idea-generator-view";
import FundabilityQuizView from "./tools/fundability-quiz-view";
import DiagnosticChecklistView from "./tools/diagnostic-checklist-view";
import { X, ArrowRight } from "lucide-react";

export default function AssessmentToolModal() {
  const dispatch = useAppDispatch();
  const selectedTool = useAppSelector((state) => state.ui.selectedAssessmentTool);

  if (!selectedTool) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-stone-200 shadow-2xl p-6 sm:p-8 text-slate-900">
        <button
          onClick={() => dispatch(closeAssessmentTool())}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-stone-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-2">
            Interactive Founder Diagnostic
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {selectedTool}
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Free diagnostic tool used by 1,000+ teen founders and mentors at Tactyqal Labs.
          </p>
        </div>

        {/* Content based on selected tool */}
        {selectedTool.includes("Idea Generator") ? (
          <IdeaGeneratorView />
        ) : selectedTool.includes("Fundability") ? (
          <FundabilityQuizView />
        ) : (
          <DiagnosticChecklistView />
        )}

        {/* Modal Footer CTA */}
        <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            Want us to analyze your idea in depth?
          </span>
          <button
            onClick={() => {
              dispatch(closeAssessmentTool());
              dispatch(openConsultationModal("Startup Assessment & Idea Review"));
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md transition"
          >
            Review With A Mentor 1:1 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
