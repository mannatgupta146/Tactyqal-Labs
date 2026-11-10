"use client";

import React, { useState } from "react";
import { Lightbulb } from "lucide-react";

export default function IdeaGeneratorView() {
  const [selectedIndustry, setSelectedIndustry] = useState("AI & Automation");
  const [targetUser, setTargetUser] = useState("Gen-Z & Students");
  const [generatedIdeas, setGeneratedIdeas] = useState<string[]>([]);

  const handleGenerateIdeas = () => {
    const ideas = [
      `AI-powered ${selectedIndustry} workflow tailored for ${targetUser} that automates repetitive daily tasks with zero learning curve.`,
      `A curated micro-marketplace connecting ${targetUser} with pre-vetted service providers in ${selectedIndustry} with built-in escrow.`,
      `Gamified community platform helping ${targetUser} build verified portfolio credentials in ${selectedIndustry}.`,
    ];
    setGeneratedIdeas(ideas);
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Select Industry Domain
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00df82]"
          >
            <option value="AI & Automation">AI & Automation</option>
            <option value="EdTech & Learning">EdTech & Learning</option>
            <option value="Climate & Food Waste">Climate & Food Waste</option>
            <option value="Sustainable E-Commerce">Sustainable E-Commerce</option>
            <option value="Creator Economy">Creator Economy</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Target Audience
          </label>
          <select
            value={targetUser}
            onChange={(e) => setTargetUser(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00df82]"
          >
            <option value="Gen-Z & High Schoolers">Gen-Z & High Schoolers</option>
            <option value="Local Farmers & Agriculture">Local Farmers & Agriculture</option>
            <option value="Pet Lovers & Shelters">Pet Lovers & Shelters</option>
            <option value="Parents & Kids">Parents & Kids</option>
            <option value="Early Stage Founders">Early Stage Founders</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerateIdeas}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-md transition"
      >
        <Lightbulb className="w-4 h-4" /> Generate Validated Startup Ideas
      </button>

      {generatedIdeas.length > 0 && (
        <div className="space-y-3 pt-2">
          <h4 className="text-xs uppercase font-bold tracking-wider text-[#00df82]">
            Tailored Concepts for 8-Week Build:
          </h4>
          {generatedIdeas.map((idea, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-[#00df82] font-bold text-xs shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">{idea}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
