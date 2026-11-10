"use client";

import React from "react";
import { useAppDispatch } from "../store/hooks";
import { openAssessmentTool } from "../store/uiSlice";
import {
  Sparkles,
  Lightbulb,
  DollarSign,
  Users2,
  FileText,
  Trophy,
  HeartHandshake,
  Target,
  Layout,
  ArrowRight,
  Play,
} from "lucide-react";

export default function AssessmentTools() {
  const dispatch = useAppDispatch();

  const tools = [
    {
      title: "Startup Idea Generator",
      tagline: "Generate validated startup concepts based on your domain and target user.",
      icon: Lightbulb,
      iconColor: "text-amber-400",
      category: "Ideation",
      interactive: true,
    },
    {
      title: "Fundability Assessment",
      tagline: "Score your startup's readiness for angel funding, grants, and accelerators.",
      icon: DollarSign,
      iconColor: "text-emerald-400",
      category: "Funding",
      interactive: true,
    },
    {
      title: "Team Evaluation Tool",
      tagline: "Audit your founding team's skill distribution and uncover critical skill gaps.",
      icon: Users2,
      iconColor: "text-cyan-400",
      category: "Team",
      interactive: false,
    },
    {
      title: "Pitch Deck Analyzer",
      tagline: "Evaluate your 10-slide deck against standard VC and judge evaluation criteria.",
      icon: FileText,
      iconColor: "text-indigo-400",
      category: "Storytelling",
      interactive: false,
    },
    {
      title: "Top 10 Traits For Business Success",
      tagline: "Benchmark your founder mindset, resilience score, and execution velocity.",
      icon: Trophy,
      iconColor: "text-yellow-400",
      category: "Mindset",
      interactive: false,
    },
    {
      title: "Cofounder Compatibility Test",
      tagline: "Assess values alignment, equity distribution expectations, and work ethics.",
      icon: HeartHandshake,
      iconColor: "text-pink-400",
      category: "Partnership",
      interactive: false,
    },
    {
      title: "Problem-Solution Fit",
      tagline: "Confirm whether customers genuinely care about the problem you are solving.",
      icon: Target,
      iconColor: "text-red-400",
      category: "Validation",
      interactive: false,
    },
    {
      title: "Website Landing Page Assessment",
      tagline: "Audit conversion rate friction, copy clarity, and user action triggers.",
      icon: Layout,
      iconColor: "text-violet-400",
      category: "Growth",
      interactive: false,
    },
  ];

  return (
    <section id="tools" className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
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
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.title}
                onClick={() => dispatch(openAssessmentTool(tool.title))}
                className="group relative cursor-pointer rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 ${tool.iconColor} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {tool.interactive ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <Play className="w-2.5 h-2.5 fill-current" /> Live Tool
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-slate-400 bg-slate-800/80 border border-slate-700/60">
                        {tool.category}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {tool.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Access All Tools Free In Browser</span>
          </button>
        </div>
      </div>
    </section>
  );
}
