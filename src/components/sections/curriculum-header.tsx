"use client";

import React from "react";
import { Clock, UserCheck, Award } from "lucide-react";

export default function CurriculumHeader() {
  return (
    <div className="curriculum-header text-center max-w-3xl mx-auto mb-12">
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
  );
}
