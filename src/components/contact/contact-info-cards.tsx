"use client";

import React from "react";
import { Mail, Phone, Clock, Zap } from "lucide-react";

export default function ContactInfoCards() {
  return (
    <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#00df82] to-[#059669] text-white shadow-xl flex flex-col justify-between border border-emerald-400/30">
      <div>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Contact Us
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-white/90 leading-relaxed max-w-md">
          Reach out to our dedicated team for any inquiries, assistance, or information you need.
        </p>

        <div className="mt-8 space-y-0 divide-y divide-white/20">
          {/* Email Row */}
          <div className="py-4.5 flex items-center justify-between gap-4">
            <a
              href="mailto:tactyqal.labs@gmail.com"
              className="text-sm sm:text-base font-semibold text-white hover:underline transition"
            >
              tactyqal.labs@gmail.com
            </a>
            <div className="w-10 h-10 rounded-full bg-white text-[#059669] flex items-center justify-center shrink-0 shadow-sm">
              <Mail className="w-5 h-5" />
            </div>
          </div>

          {/* Phone Row */}
          <div className="py-4.5 flex items-center justify-between gap-4">
            <a
              href="tel:+919804772106"
              className="text-sm sm:text-base font-semibold text-white hover:underline transition"
            >
              +91-98047-72106
            </a>
            <div className="w-10 h-10 rounded-full bg-white text-[#059669] flex items-center justify-center shrink-0 shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
          </div>

          {/* Working Hours Row */}
          <div className="py-4.5 flex items-center justify-between gap-4">
            <span className="text-sm sm:text-base font-semibold text-white">
              Mon-Sat, 9am-7pm
            </span>
            <div className="w-10 h-10 rounded-full bg-white text-[#059669] flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          {/* Response Time Row */}
          <div className="py-4.5 flex items-center justify-between gap-4">
            <span className="text-sm sm:text-base font-semibold text-white">
              Response Time: Within 24 hours
            </span>
            <div className="w-10 h-10 rounded-full bg-white text-[#059669] flex items-center justify-center shrink-0 shadow-sm">
              <Zap className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
