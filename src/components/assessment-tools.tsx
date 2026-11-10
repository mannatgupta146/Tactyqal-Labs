"use client";

import React from "react";
import { useAppDispatch } from "../store/hooks";
import { openAssessmentTool } from "../store/uiSlice";
import { assessmentToolsList } from "../data/assessment-tools-data";
import { Sparkles, ArrowRight, Play } from "lucide-react";

export default function AssessmentTools() {
  const dispatch = useAppDispatch();

  return (
    <section id="tools" className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00df82] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Free Interactive Resources
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Free Tools to Get Started
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore our proprietary diagnostic toolkits used by over 1,000+ teen entrepreneurs and startup incubators. Test them right in your browser.
          </p>
        </div>

        {/* 8 Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assessmentToolsList.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.title}
                onClick={() => dispatch(openAssessmentTool(tool.title))}
                className="group relative cursor-pointer rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-[#00df82]/50 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 ${tool.iconColor} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {tool.interactive ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/20 text-[#00df82] border border-emerald-500/30">
                        <Play className="w-2.5 h-2.5 fill-current" /> Live Tool
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-slate-400 bg-slate-800/80 border border-slate-700/60">
                        {tool.category}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#00df82] transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {tool.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#00df82]">
                  <span>Launch Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Access All Tools Free Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={() => dispatch(openAssessmentTool("Startup Idea Generator"))}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
          >
            <Sparkles className="w-4 h-4 text-[#00df82]" />
            <span>Access All Tools Free In Browser</span>
          </button>
        </div>
      </div>
    </section>
  );
}
