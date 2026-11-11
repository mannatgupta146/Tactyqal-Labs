"use client";

import React from "react";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import { whyUsReasons } from "../data/why-us-data";
import { ArrowRight } from "lucide-react";

export default function WhyUs() {
  const dispatch = useAppDispatch();

  return (
    <section id="why" className="py-24 bg-white relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Parents Choose Tactyqal Labs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We bridge the gap between abstract academic theory and tangible real-world execution. Here is why ambitious families trust us.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsReasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group relative rounded-3xl bg-[#FAF8F5] border border-stone-200/90 p-6 sm:p-7 hover:border-[#00df82] hover:bg-white transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-stone-200 shadow-xs ${r.iconColor} mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#059669] transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-[#059669] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => dispatch(openConsultationModal("Why Us Bottom CTA"))}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <span>Book A Free Consultation With Our Founder</span>
          </button>
        </div>
      </div>
    </section>
  );
}
