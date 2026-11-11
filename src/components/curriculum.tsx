"use client";

import React from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import { curriculumSprints } from "../data/curriculum-data";
import {
  CheckCircle2,
  Quote,
  Clock,
  UserCheck,
  Award,
  ArrowRight,
} from "lucide-react";

export default function Curriculum() {
  const dispatch = useAppDispatch();

  return (
    <section id="program" className="py-24 bg-[#FAF8F5] relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Idea to Full App in 8 Weeks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A battle-tested milestone system designed specifically for students. Every student is paired 1:1 with an expert founder-mentor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-slate-700">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-stone-200 shadow-xs">
              <Clock className="w-4 h-4 text-[#059669]" /> Personal 1:1 Live Sessions (1 Hr Each)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-stone-200 shadow-xs">
              <UserCheck className="w-4 h-4 text-[#059669]" /> Dedicated Founder Guidance
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-stone-200 shadow-xs">
              <Award className="w-4 h-4 text-[#059669]" /> College Admissions & Grants Edge
            </span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculumSprints.map((sprint) => {
            const Icon = sprint.icon;
            return (
              <div
                key={sprint.weeks}
                className="relative rounded-3xl bg-white border border-stone-200/90 p-6 flex flex-col justify-between hover:border-[#00df82] transition-all duration-300 group hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-[#059669] border border-emerald-200">
                      {sprint.weeks}
                    </span>
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl bg-[#FAF8F5] border border-stone-200 ${sprint.iconColor} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#059669] transition-colors">
                    {sprint.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {sprint.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Deliverables:
                  </div>
                  {sprint.milestones.map((m) => (
                    <div key={m} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Naval Ravikant Quote Card */}
        <div className="mt-16 relative rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <Quote className="w-10 h-10 text-[#059669]/30 mx-auto mb-4" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight">
            &ldquo;Learn to sell. Learn to build. If you can do both, you will be unstoppable.&rdquo;
          </blockquote>
          <div className="mt-4 text-sm font-semibold text-[#059669]">
            — Naval Ravikant, Entrepreneur & Investor
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => dispatch(openConsultationModal("Curriculum Quote CTA"))}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition hover:scale-105"
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
