"use client";

import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import { successStories, AppStory } from "../data/success-stories";
import CaseStudyModal from "./modals/case-study-modal";
import { Sparkles } from "lucide-react";

export default function SuccessStories() {
  const dispatch = useAppDispatch();
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeStoryModal, setActiveStoryModal] = useState<AppStory | null>(null);

  const categories = ["All", "AI & ML", "E-Commerce", "Social Impact", "EdTech"];

  const filteredStories =
    activeFilter === "All"
      ? successStories
      : successStories.filter((s) => s.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="success" className="py-24 bg-white relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Students. Real Apps. Real Success.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            See what teenagers aged 13–17 built in just 8 weeks through our 1:1 mentorship program. From idea to launch and revenue.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  activeFilter === cat
                    ? "bg-[#00df82] text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                    : "bg-stone-100 text-slate-600 hover:text-slate-900 border border-stone-200 hover:bg-stone-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.map((story) => {
            const Icon = story.icon;
            return (
              <div
                key={story.id}
                onClick={() => setActiveStoryModal(story)}
                className="group relative cursor-pointer rounded-3xl bg-[#FAF8F5] border border-stone-200/90 p-6 sm:p-7 hover:border-[#00df82] hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-stone-200 shadow-xs ${story.iconColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-slate-600 border border-stone-200 shadow-xs">
                      {story.age}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-[#059669] uppercase tracking-wider mb-1">
                    {story.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#059669] transition-colors">
                    {story.name}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {story.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-[#059669]">
                      {story.metric}
                    </div>
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                      {story.metricLabel}
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#059669] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Story →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Your teen could be our next spotlight story.</h3>
            <p className="text-sm text-slate-600 mt-1">
              No technical or coding background needed. We guide them step-by-step from zero to launch.
            </p>
          </div>
          <button
            onClick={() => dispatch(openConsultationModal("Success Stories Banner"))}
            className="shrink-0 px-7 py-3 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition hover:scale-105"
          >
            Schedule Free Strategy Call
          </button>
        </div>
      </div>

      <CaseStudyModal story={activeStoryModal} onClose={() => setActiveStoryModal(null)} />
    </section>
  );
}
