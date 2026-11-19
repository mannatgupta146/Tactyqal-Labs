"use client";

import React from "react";
import { AssessmentToolItem } from "./types";
import { ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";

interface MobileToolAccordionProps {
  tools: AssessmentToolItem[];
  activeIndex: number;
  onActivate: (idx: number) => void;
  onLaunch: (title: string) => void;
}

export function MobileToolAccordion({
  tools,
  activeIndex,
  onActivate,
  onLaunch,
}: MobileToolAccordionProps) {
  return (
    <div className="md:hidden space-y-3">
      {tools.map((tool, idx) => {
        const Icon = tool.icon;
        const isActive = activeIndex === idx;

        return (
          <div
            key={tool.title}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isActive
                ? "bg-white border-stone-300 shadow-md"
                : "bg-white border-stone-200/80 shadow-2xs"
            }`}
          >
            {/* Header / Trigger */}
            <button
              onClick={() => onActivate(isActive ? -1 : idx)}
              className="w-full p-4 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-[#00df82] text-slate-950 shadow-xs"
                      : "bg-emerald-50 text-[#059669] border border-emerald-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {tool.title}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#059669]">
                    {tool.category}
                  </span>
                </div>
              </div>

              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                  isActive ? "rotate-180 text-slate-900" : ""
                }`}
              />
            </button>

            {/* Expandable Body */}
            {isActive && (
              <div className="px-4 pb-4 pt-1 border-t border-stone-100 animate-in fade-in duration-200">
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {tool.tagline}
                </p>

                <div className="space-y-1.5 mb-4 text-[11px] font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Instant In-Browser Scoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>100% Free • Zero Sign-Up</span>
                  </div>
                </div>

                <button
                  onClick={() => onLaunch(tool.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-xs shadow-sm transition active:scale-95"
                >
                  <span>Launch {tool.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
