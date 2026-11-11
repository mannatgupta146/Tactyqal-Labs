"use client";

import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import { successStories, AppStory } from "../data/success-stories";
import CaseStudyModal from "./modals/case-study-modal";
export default function SuccessStories() {
  const dispatch = useAppDispatch();
  const [activeStoryModal, setActiveStoryModal] = useState<AppStory | null>(null);

  return (
    <section id="success" className="py-20 bg-white relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Students. Real Apps. Real Success.
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            See what teenagers aged 13–17 built in just 8 weeks through our 1:1 mentorship program. From idea to launch and revenue.
          </p>
        </div>

        {/* 6 Real Apps Grid - Tight, Natural & Perfectly Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {successStories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryModal(story)}
              className="group cursor-pointer rounded-2xl bg-[#FAF8F5] border border-stone-200/90 p-4 sm:p-5 shadow-xs hover:border-stone-300 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col"
            >
              {/* Natural, Compact Header - Tight Spacing with Zero Empty Gap Below */}
              <div className="text-center min-h-[58px] sm:min-h-[64px] flex flex-col justify-start">
                <h3 className="text-base sm:text-lg font-bold text-[#059669] leading-snug">
                  {story.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-normal">
                  {story.description}
                </p>
              </div>

              {/* Real App Screenshot Frame - Tight to Text & Fully Fitted */}
              <div className="mt-3 rounded-xl overflow-hidden border border-stone-200/90 bg-stone-100 shadow-xs">
                {/* Browser Window Bar */}
                <div className="bg-stone-100 border-b border-stone-200/80 px-2.5 py-1 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-stone-300" />
                  <div className="w-2 h-2 rounded-full bg-stone-300" />
                  <div className="w-2 h-2 rounded-full bg-stone-300" />
                  <span className="ml-1.5 text-[10px] text-slate-400 font-mono truncate">
                    {story.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.tactyqal.app
                  </span>
                </div>

                {/* Screenshot Image */}
                <div className="relative w-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Your teen could be our next spotlight story.</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              No technical or coding background needed. We guide them step-by-step from zero to launch.
            </p>
          </div>
          <button
            onClick={() => dispatch(openConsultationModal("Success Stories Banner"))}
            className="shrink-0 px-6 py-2.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition hover:scale-105"
          >
            Schedule Free Strategy Call
          </button>
        </div>
      </div>

      <CaseStudyModal story={activeStoryModal} onClose={() => setActiveStoryModal(null)} />
    </section>
  );
}
