"use client";

import React from "react";
import { AppStory } from "../sections/success-stories";
import { useAppDispatch } from "../../store/hooks";
import { openConsultationModal } from "../../store/uiSlice";
import { X, ExternalLink } from "lucide-react";

interface CaseStudyModalProps {
  story: AppStory | null;
  onClose: () => void;
}

export default function CaseStudyModal({ story, onClose }: CaseStudyModalProps) {
  const dispatch = useAppDispatch();

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 text-slate-900 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-stone-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl sm:text-3xl font-black text-[#059669]">{story.name}</h3>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">{story.description}</p>

        {/* Real App Screenshot in Modal */}
        {story.image && (
          <div className="mt-6 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm">
            <div className="bg-stone-100 border-b border-stone-200/80 px-3 py-1.5 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-400/80" />
              <div className="w-2 h-2 rounded-full bg-amber-400/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
              <span className="ml-2 text-[10px] text-slate-500 font-mono truncate">
                {story.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.tactyqal.app
              </span>
            </div>
            <div className="relative w-full overflow-hidden bg-stone-50 flex items-center justify-center">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            Built by a real student in Tactyqal Labs 8-Week 1:1 Incubator
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              Close
            </button>
            <button
              onClick={() => {
                const name = story.name;
                onClose();
                dispatch(openConsultationModal(`Interested in building an app like ${name}`));
              }}
              className="px-6 py-2.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20"
            >
              Build An App Like This
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
