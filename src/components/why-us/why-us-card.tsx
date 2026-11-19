"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";

export interface WhyUsReason {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
}

export function WhyUsCard({ reason, index }: { reason: WhyUsReason; index: number }) {
  const Icon = reason.icon;

  return (
    <div
      data-card-index={index}
      className="group relative w-[260px] sm:w-[280px] shrink-0 rounded-2xl bg-white border border-stone-200/90 p-5 sm:p-6 flex flex-col justify-between hover:shadow-[0_20px_45px_-10px_rgba(5,150,105,0.14),0_8px_16px_-4px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:border-stone-300 transition-all duration-300 overflow-hidden cursor-pointer select-none"
    >
      {/* Background Watermark Index - Placed comfortably inside with zero clipping */}
      <span className="absolute top-3.5 right-4 text-4xl font-black leading-none text-stone-200/70 select-none pointer-events-none group-hover:text-emerald-200/70 transition-colors font-mono">
        {reason.id}
      </span>

      {/* Ambient Radial Spotlight Bloom (Zero Outline Border) */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-[#00df82] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Top Bar: Icon + Category Tag */}
        <div className="flex items-center justify-between mb-4 pr-12">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#059669] shadow-2xs group-hover:bg-[#00df82] group-hover:text-slate-950 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-md group-hover:shadow-emerald-500/25 transition-all duration-300">
            <Icon className="w-4.5 h-4.5 transition-transform duration-300" />
          </div>

          <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold tracking-wide uppercase bg-stone-100 text-stone-600 border border-stone-200/70 group-hover:bg-emerald-50 group-hover:text-emerald-800 group-hover:border-emerald-200/60 transition-colors">
            {reason.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#059669] transition-colors mb-2 line-clamp-2">
          {reason.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4 line-clamp-3">
          {reason.description}
        </p>
      </div>

      {/* Bottom Deliverable Chip */}
      <div className="relative z-10 pt-3 border-t border-stone-100 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/60 group-hover:bg-emerald-50/80 group-hover:border-emerald-200/70 transition-all duration-300 max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00df82] group-hover:scale-125 transition-transform shrink-0" />
          <span className="text-[10.5px] font-semibold text-slate-700 group-hover:text-emerald-950 transition-colors truncate">
            {reason.badge}
          </span>
        </div>
        <span className="text-slate-300 group-hover:text-[#059669] group-hover:translate-x-1 transition-all duration-300 text-xs">
          →
        </span>
      </div>
    </div>
  );
}
