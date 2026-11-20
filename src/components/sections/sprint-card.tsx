"use client";

import React from "react";
import { CheckCircle2, type LucideIcon } from "lucide-react";

export interface CurriculumSprint {
  weeks: string;
  title: string;
  icon: LucideIcon;
  iconColor: string;
  accentBg: string;
  description: string;
  milestones: string[];
}

interface SprintCardProps {
  sprint: CurriculumSprint;
}

export default function SprintCard({ sprint }: SprintCardProps) {
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
