"use client";

import React, { useEffect } from "react";
import { AppStory } from "../sections/success-stories";
import { useAppDispatch } from "../../store/hooks";
import { openConsultationModal } from "../../store/uiSlice";
import { X } from "lucide-react";

interface CaseStudyModalProps {
  story: AppStory | null;
  onClose: () => void;
}

export default function CaseStudyModal({ story, onClose }: CaseStudyModalProps) {
  const dispatch = useAppDispatch();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (story) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [story]);

  if (!story) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-x-hidden overflow-y-auto no-scrollbar rounded-3xl bg-white border border-stone-200 p-5 sm:p-8 text-slate-900 shadow-2xl flex flex-col justify-between"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Top Radiant Accent Line */}
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent" />

        {/* Circular Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all active:scale-95 z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Header */}
        <div className="pr-8">
          <h3 className="text-xl sm:text-3xl font-black text-[#059669]">{story.name}</h3>
          <p className="mt-1.5 text-xs sm:text-base text-slate-600 leading-relaxed">
            {story.description}
          </p>
        </div>

        {/* Real App Screenshot in Modal - Constrained height so it fits viewport */}
        {story.image && (
          <div className="mt-4 sm:mt-6 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-xs">
            <div className="bg-stone-100 border-b border-stone-200/80 px-3 py-1.5 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-400/80" />
              <div className="w-2 h-2 rounded-full bg-amber-400/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
              <span className="ml-2 text-[10px] text-slate-500 font-mono truncate">
                {story.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.tactyqal.app
              </span>
            </div>
            <div className="relative w-full max-h-[46vh] sm:max-h-[50vh] overflow-hidden bg-stone-50 flex items-center justify-center">
              <img
                src={story.image}
                alt={story.name}
                className="w-full max-h-[46vh] sm:max-h-[50vh] object-contain block"
              />
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="mt-5 sm:mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
            Built by a real student in Tactyqal Labs 8-Week 1:1 Incubator
          </span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              Close
            </button>
            <button
              onClick={() => {
                const name = story.name;
                onClose();
                dispatch(openConsultationModal(`Interested in building an app like ${name}`));
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all active:scale-98 text-center"
            >
              Build An App Like This
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
