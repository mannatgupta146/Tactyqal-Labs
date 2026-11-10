"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeAssessmentTool, openConsultationModal } from "../store/uiSlice";
import IdeaGeneratorView from "./tools/idea-generator-view";
import FundabilityQuizView from "./tools/fundability-quiz-view";
import DiagnosticChecklistView from "./tools/diagnostic-checklist-view";
import { X, Sparkles, ArrowRight } from "lucide-react";

export default function AssessmentToolModal() {
  const dispatch = useAppDispatch();
  const selectedTool = useAppSelector((state) => state.ui.selectedAssessmentTool);

  if (!selectedTool) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-slate-100">
        <button
          onClick={() => dispatch(closeAssessmentTool())}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00df82] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Founder Diagnostic
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {selectedTool}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
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
        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
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
