"use client";

import React from "react";
import { AssessmentToolItem } from "../../data/assessment-tools-data";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";

interface ExpandingToolCardProps {
  tool: AssessmentToolItem;
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onLaunch: (title: string) => void;
}

export function ExpandingToolCard({
  tool,
  index,
  isActive,
  onActivate,
  onLaunch,
}: ExpandingToolCardProps) {
  const Icon = tool.icon;
  const num = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      className={`relative rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer select-none ${
        isActive
          ? "flex-[3.5] lg:flex-[4] bg-white border border-stone-300 shadow-2xl shadow-emerald-500/10 cursor-default"
          : "flex-1 bg-[#FAF8F5] border border-stone-200/80 hover:bg-white hover:border-emerald-300/70 shadow-xs"
      }`}
    >
      {/* Active Glowing Sheen & Ambient Spotlight */}
      {isActive && (
        <>
          <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent" />
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#00df82]/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      {/* COLLAPSED STATE (Compact Vertical Ribbon) */}
      {!isActive && (
        <div className="h-full w-full py-6 px-3 flex flex-col justify-between items-center text-center">
          {/* Top: Icon */}
          <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center text-[#059669]">
            <Icon className="w-4.5 h-4.5" />
          </div>

          {/* Middle: Vertical Title */}
          <div className="flex-1 flex items-center justify-center my-4">
            <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-bold text-slate-700 tracking-wider uppercase whitespace-nowrap">
              {tool.title}
            </span>
          </div>

          {/* Bottom: Number Index */}
          <span className="text-xs font-mono font-bold text-slate-400">
            {num}
          </span>
        </div>
      )}

      {/* EXPANDED STATE (Rich Canvas View) */}
      {isActive && (
        <div className="h-full p-6 sm:p-8 flex flex-col justify-between relative z-10 animate-in fade-in duration-300">
          <div>
            {/* Top Row: Icon + Category Badge + Index */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-13 h-13 rounded-2xl bg-[#00df82] text-slate-950 flex items-center justify-center shadow-md shadow-emerald-500/25">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-[#059669] border border-emerald-200/80">
                    {tool.category}
                  </span>
                  <div className="text-[11px] text-slate-400 font-semibold mt-0.5">
                    Interactive Diagnostic
                  </div>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-slate-400 bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
                {num} / 08
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              {tool.title}
            </h3>

            {/* Tagline Narrative */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-6">
              {tool.tagline}
            </p>

            {/* 3 Proof Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Instant In-Browser Scoring</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Founder Framework Tested</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>100% Free • Zero Sign-Up</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Tactyqal Incubator Grade</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Button */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={() => onLaunch(tool.title)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Launch {tool.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">
              Hover adjacent cards to switch
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
