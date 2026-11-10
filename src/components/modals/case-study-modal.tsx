"use client";

import React from "react";
import { AppStory } from "../../data/success-stories";
import { useAppDispatch } from "../../store/hooks";
import { openConsultationModal } from "../../store/uiSlice";
import { X, Sparkles, CheckCircle2 } from "lucide-react";

interface CaseStudyModalProps {
  story: AppStory | null;
  onClose: () => void;
}

export default function CaseStudyModal({ story, onClose }: CaseStudyModalProps) {
  const dispatch = useAppDispatch();

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-[#00df82] border border-emerald-500/30">
            {story.age}
          </span>
          <span className="text-xs text-slate-400 font-medium">{story.category}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{story.name}</h3>

        <div className="mt-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase text-slate-400 font-semibold">Key Achievement</div>
            <div className="text-xl font-extrabold text-[#00df82]">{story.metric}</div>
          </div>
          <div className="text-xs text-slate-300 font-medium">{story.metricLabel}</div>
        </div>

        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-[#00df82] mb-2">The Founder Journey</h4>
          <p className="text-sm text-slate-200 leading-relaxed">{story.fullStory}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {story.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700">
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-400 hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              const name = story.name;
              onClose();
              dispatch(openConsultationModal(`Interested in building an app like ${name}`));
            }}
            className="px-6 py-2.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md"
          >
            Build An App Like This
          </button>
        </div>
      </div>
    </div>
  );
}
