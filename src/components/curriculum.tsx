"use client";

import React from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import { curriculumSprints, CurriculumSprint } from "../data/curriculum-data";
import {
  CheckCircle2,
  Quote,
  Clock,
  UserCheck,
  Award,
  ArrowRight,
} from "lucide-react";

function SprintCard({ sprint }: { sprint: CurriculumSprint }) {
  const Icon = sprint.icon;
  return (
    <div className="relative w-full rounded-2xl bg-white border border-stone-200/90 p-4 sm:p-5 shadow-xs group-hover:border-emerald-300/80 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-emerald-50/50 group-hover:shadow-xl group-hover:shadow-emerald-500/15 group-hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {/* Top Luminous Accent Sheen */}
      <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header: Week Pill & Milestone Icon */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-[#059669] border border-emerald-200/80 group-hover:bg-[#00df82] group-hover:text-slate-950 group-hover:border-[#00df82] transition-colors duration-300">
          {sprint.weeks}
        </span>
        <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#059669] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white group-hover:shadow-xs transition-all duration-300">
          <Icon className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#059669] transition-colors mb-1.5">
        {sprint.title}
      </h3>

      {/* Crisp Description */}
      <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
        {sprint.description}
      </p>

      {/* Deliverables: Animated micro-slide on hover */}
      <div className="pt-2.5 border-t border-stone-100 space-y-1">
        {sprint.milestones.slice(0, 3).map((m) => (
          <div
            key={m}
            className="flex items-center gap-1.5 text-[11px] text-slate-600 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300"
          >
            <CheckCircle2 className="w-3 h-3 text-[#059669] group-hover:text-[#00df82] group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Curriculum() {
  const dispatch = useAppDispatch();

  return (
    <section id="program" className="py-20 bg-[#FAF8F5] relative border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            From Idea to Full App in 8 Weeks
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            A battle-tested milestone system designed specifically for students. Every student is paired 1:1 with an expert founder-mentor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-5 text-xs text-slate-700">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-2xs font-medium">
              <Clock className="w-3.5 h-3.5 text-[#059669]" /> Personal 1:1 Live Sessions
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-2xs font-medium">
              <UserCheck className="w-3.5 h-3.5 text-[#059669]" /> Dedicated Founder Guidance
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-2xs font-medium">
              <Award className="w-3.5 h-3.5 text-[#059669]" /> College Admissions &amp; Grants Edge
            </span>
          </div>
        </div>

        {/* Desktop Alternating -|_|-|_ Stepped Timeline (Compact & Short) */}
        <div className="hidden lg:block relative max-w-6xl mx-auto my-8">
          {/* Continuous -|_|-|_ Stepped Connecting Line passing through nodes */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 340"
            preserveAspectRatio="none"
          >
            <path
              d="M 60 16 H 250 V 64 H 500 V 16 H 750 V 64 H 940"
              fill="none"
              stroke="#00df82"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />
          </svg>

          {/* 4 Cards in 4 columns: One UP (pt-0), One DOWN (pt-12) */}
          <div className="grid grid-cols-4 gap-6 items-start relative z-10">
            {/* Col 1: Phase 01 (UP) */}
            <div className="group pt-0 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-stone-300 text-slate-800 font-extrabold text-xs flex items-center justify-center shadow-xs mx-auto mb-3 group-hover:border-[#00df82] group-hover:bg-[#00df82] group-hover:text-slate-950 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-emerald-500/20 transition-all duration-300">
                01
              </div>
              <SprintCard sprint={curriculumSprints[0]} />
            </div>

            {/* Col 2: Phase 02 (DOWN) */}
            <div className="group pt-12 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-stone-300 text-slate-800 font-extrabold text-xs flex items-center justify-center shadow-xs mx-auto mb-3 group-hover:border-[#00df82] group-hover:bg-[#00df82] group-hover:text-slate-950 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-emerald-500/20 transition-all duration-300">
                02
              </div>
              <SprintCard sprint={curriculumSprints[1]} />
            </div>

            {/* Col 3: Phase 03 (UP) */}
            <div className="group pt-0 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-stone-300 text-slate-800 font-extrabold text-xs flex items-center justify-center shadow-xs mx-auto mb-3 group-hover:border-[#00df82] group-hover:bg-[#00df82] group-hover:text-slate-950 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-emerald-500/20 transition-all duration-300">
                03
              </div>
              <SprintCard sprint={curriculumSprints[2]} />
            </div>

            {/* Col 4: Phase 04 (DOWN) */}
            <div className="group pt-12 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-stone-300 text-slate-800 font-extrabold text-xs flex items-center justify-center shadow-xs mx-auto mb-3 group-hover:border-[#00df82] group-hover:bg-[#00df82] group-hover:text-slate-950 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-emerald-500/20 transition-all duration-300">
                04
              </div>
              <SprintCard sprint={curriculumSprints[3]} />
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (< lg) */}
        <div className="lg:hidden relative pl-6 space-y-5 my-8 border-l-2 border-emerald-300 ml-3">
          {curriculumSprints.map((sprint, idx) => (
            <div key={sprint.weeks} className="group relative">
              <div className="absolute -left-[35px] top-4 w-7 h-7 rounded-full bg-white border-2 border-stone-300 text-slate-800 font-extrabold text-[11px] flex items-center justify-center shadow-xs group-hover:border-[#00df82] group-hover:bg-[#00df82] group-hover:text-slate-950 transition-all">
                0{idx + 1}
              </div>
              <SprintCard sprint={sprint} />
            </div>
          ))}
        </div>

        {/* Naval Ravikant Quote Card */}
        <div className="mt-12 relative rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-10 text-center max-w-3xl mx-auto shadow-md">
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
      </div>
    </section>
  );
}
