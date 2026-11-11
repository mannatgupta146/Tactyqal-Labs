"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function DiagnosticChecklistView() {
  return (
    <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-4">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-[#059669] shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-slate-900 text-base">Tactyqal Founder Diagnostic Checklist</h4>
          <p className="text-sm text-slate-600 mt-1">
            In our 1:1 sessions, every student uses this assessment framework to evaluate their competitive advantage, moat, and target unit economics before writing code.
          </p>
        </div>
      </div>
      <ul className="space-y-2 text-sm text-slate-700 pl-4 list-disc marker:text-[#059669]">
        <li>Identifies high-margin monetization hooks early</li>
        <li>Exposes customer acquisition blindspots</li>
        <li>Prepares students for college admissions essays & pitch competitions</li>
      </ul>
    </div>
  );
}
