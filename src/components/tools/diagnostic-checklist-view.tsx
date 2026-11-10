"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function DiagnosticChecklistView() {
  return (
    <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-4">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-white text-base">Tactyqal Founder Diagnostic Checklist</h4>
          <p className="text-sm text-slate-300 mt-1">
            In our 1:1 sessions, every student uses this assessment framework to evaluate their competitive advantage, moat, and target unit economics before writing code.
          </p>
        </div>
      </div>
      <ul className="space-y-2 text-sm text-slate-300 pl-4 list-disc marker:text-indigo-400">
        <li>Identifies high-margin monetization hooks early</li>
        <li>Exposes customer acquisition blindspots</li>
        <li>Prepares students for college admissions essays & pitch competitions</li>
      </ul>
    </div>
  );
}
