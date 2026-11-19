"use client";

import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { openAssessmentTool } from "../../store/uiSlice";
import { assessmentToolsList } from "./types";
import { Wrench, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export default function AssessmentTools() {
  const dispatch = useAppDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedTool = assessmentToolsList[selectedIndex] || assessmentToolsList[0];
  const SelectedIcon = selectedTool.icon;

  const handleLaunch = (title: string) => {
    dispatch(openAssessmentTool(title));
  };

  return (
    <section id="tools" className="py-24 bg-[#FAF8F5] relative border-t border-stone-200 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Wrench className="w-3.5 h-3.5 text-[#059669]" />
            <span>Diagnostic Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Free Tools to Get Started
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Select any tool from our proprietary diagnostic suite. Test your startup idea, fundability, and market fit live in your browser.
          </p>
        </div>

        {/* Interactive Tool Console (Split-View Studio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Tool Selector Rail (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {assessmentToolsList.map((tool, idx) => {
              const Icon = tool.icon;
              const isActive = selectedIndex === idx;

              return (
                <button
                  key={tool.title}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`group relative z-20 w-full flex items-center justify-between p-3.5 rounded-2xl transition-all duration-200 text-left border cursor-pointer select-none ${
                    isActive
                      ? "bg-white border-stone-300 shadow-md shadow-emerald-500/10 scale-[1.01]"
                      : "bg-white/70 hover:bg-white border-stone-200/80 hover:border-stone-300 text-slate-600 shadow-2xs hover:scale-[1.005]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isActive
                          ? "bg-[#00df82] text-slate-950 font-bold shadow-xs scale-105"
                          : "bg-emerald-50 text-[#059669] group-hover:bg-emerald-100/70"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className={`text-sm font-bold truncate transition-colors ${isActive ? "text-slate-950" : "text-slate-800 group-hover:text-slate-950"}`}>
                        {tool.title}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {tool.category} • {tool.timeEstimate}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isActive ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#00df82]/15 text-emerald-900 border border-emerald-300/40">
                        Selected
                      </span>
                    ) : (
                      <span className="text-slate-300 group-hover:text-[#059669] group-hover:translate-x-0.5 transition-all text-xs font-semibold">
                        →
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Tool Preview & Launcher (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-white border border-stone-200/90 p-7 sm:p-9 shadow-lg relative overflow-hidden flex flex-col justify-between">
              {/* Luminous Top Sheen & Ambient Spotlights */}
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent" />
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#00df82]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header inside Preview */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#00df82] text-slate-950 flex items-center justify-center shadow-md shadow-emerald-500/25">
                      <SelectedIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-[#059669] border border-emerald-200/80">
                          {selectedTool.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                          <Clock className="w-3 h-3 text-[#059669]" />
                          {selectedTool.timeEstimate}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 font-semibold mt-0.5">
                        Proprietary Founder Diagnostic
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF8F5] text-emerald-800 border border-emerald-200/70">
                    {selectedTool.targetOutcome}
                  </span>
                </div>

                {/* Title & Narrative */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                  {selectedTool.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {selectedTool.tagline}
                </p>

                {/* 4 Tool-Specific Criteria Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                  {selectedTool.keyChecks.map((check) => (
                    <div key={check} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                      <span className="truncate">{check}</span>
                    </div>
                  ))}
                </div>

                {/* Live Diagnostic Sample Preview Widget */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00df82] animate-pulse" />
                      {selectedTool.samplePreview.label}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                      {selectedTool.samplePreview.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {selectedTool.samplePreview.details}
                  </p>
                </div>
              </div>

              {/* Launch Action Bar with Single-Line Button */}
              <div className="relative z-10 pt-5 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Ready to test your startup concept?
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Instant interactive report • Zero sign-up required
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleLaunch(selectedTool.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
                >
                  <span>Launch Free Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
