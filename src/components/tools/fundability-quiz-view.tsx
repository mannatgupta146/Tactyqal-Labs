"use client";

import React, { useState } from "react";
import { BarChart3 } from "lucide-react";

export default function FundabilityQuizView() {
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [hasWorkingPrototype, setHasWorkingPrototype] = useState("yes");
  const [customerInterviews, setCustomerInterviews] = useState("10-30");
  const [monetizationReady, setMonetizationReady] = useState("yes");

  const calculateFundability = () => {
    let score = 50;
    if (hasWorkingPrototype === "yes") score += 25;
    if (customerInterviews === "10-30" || customerInterviews === "30+") score += 15;
    if (monetizationReady === "yes") score += 10;
    setQuizScore(score);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          1. Do you have a clickable prototype or functioning app?
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setHasWorkingPrototype("yes")}
            className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
              hasWorkingPrototype === "yes"
                ? "bg-emerald-50 border-[#059669] text-[#059669] font-bold shadow-xs"
                : "bg-stone-50 border-stone-200 text-slate-600 hover:text-slate-900 hover:bg-stone-100"
            }`}
          >
            Yes (Functional / Clickable)
          </button>
          <button
            type="button"
            onClick={() => setHasWorkingPrototype("no")}
            className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
              hasWorkingPrototype === "no"
                ? "bg-emerald-50 border-[#059669] text-[#059669] font-bold shadow-xs"
                : "bg-stone-50 border-stone-200 text-slate-600 hover:text-slate-900 hover:bg-stone-100"
            }`}
          >
            No (Idea Stage Only)
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          2. How many prospective users have you interviewed?
        </label>
        <div className="grid grid-cols-3 gap-3">
          {["0-5", "10-30", "30+"].map((tier) => (
            <button
              key={tier}
              type="button"
              onClick={() => setCustomerInterviews(tier)}
              className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
                customerInterviews === tier
                  ? "bg-emerald-50 border-[#059669] text-[#059669] font-bold shadow-xs"
                  : "bg-stone-50 border-stone-200 text-slate-600 hover:text-slate-900 hover:bg-stone-100"
              }`}
            >
              {tier} interviews
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          3. Can this startup charge users or sponsors immediately?
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setMonetizationReady("yes")}
            className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
              monetizationReady === "yes"
                ? "bg-emerald-50 border-[#059669] text-[#059669] font-bold shadow-xs"
                : "bg-stone-50 border-stone-200 text-slate-600 hover:text-slate-900 hover:bg-stone-100"
            }`}
          >
            Yes (Clear Revenue Model)
          </button>
          <button
            type="button"
            onClick={() => setMonetizationReady("no")}
            className={`py-2 px-4 rounded-xl border text-sm font-medium transition ${
              monetizationReady === "no"
                ? "bg-emerald-50 border-[#059669] text-[#059669] font-bold shadow-xs"
                : "bg-stone-50 border-stone-200 text-slate-600 hover:text-slate-900 hover:bg-stone-100"
            }`}
          >
            Not Yet (Free / Ads)
          </button>
        </div>
      </div>

      <button
        onClick={calculateFundability}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md transition"
      >
        <BarChart3 className="w-4 h-4" /> Calculate Fundability & Grant Readiness
      </button>

      {quizScore !== null && (
        <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-center shadow-xs">
          <div className="text-4xl font-extrabold text-[#059669]">{quizScore} / 100</div>
          <div className="text-sm font-semibold text-slate-900 mt-1">
            {quizScore >= 80 ? "High Fundability & Grant Potential" : "Needs Rapid Prototype & Validation"}
          </div>
          <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
            Our 8-week 1:1 mentorship program equips teens to build functional apps, launch on Product Hunt, and qualify for young founder grants.
          </p>
        </div>
      )}
    </div>
  );
}
