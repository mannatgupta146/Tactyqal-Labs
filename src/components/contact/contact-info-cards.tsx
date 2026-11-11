"use client";

import React from "react";
import { Mail, Phone, Clock, Zap, ArrowRight } from "lucide-react";

// Official WhatsApp Vector Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactInfoCards() {
  return (
    <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#00df82] to-[#059669] text-white shadow-xl flex flex-col justify-between border border-emerald-400/30 h-full">
      <div>
        <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Contact Us
        </h3>
        <p className="mt-2 text-sm text-white/95 leading-relaxed">
          Reach out to our dedicated team for any inquiries, assistance, or information you need.
        </p>

        {/* 4 Spacious Contact Channels */}
        <div className="mt-8 space-y-4 sm:space-y-5">
          {/* Email Row */}
          <div className="flex items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-white/20">
            <a
              href="mailto:tactyqal.labs@gmail.com"
              className="text-base sm:text-lg font-bold text-white hover:underline transition truncate"
            >
              tactyqal.labs@gmail.com
            </a>
            <div className="w-11 h-11 rounded-full bg-white text-[#059669] flex items-center justify-center shrink-0 shadow-md">
              <Mail className="w-5 h-5 text-[#059669]" />
            </div>
          </div>

          {/* Phone Row */}
          <div className="flex items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-white/20">
            <a
              href="tel:+919804772106"
              className="text-base sm:text-lg font-bold text-white hover:underline transition"
            >
              +91-98047-72106
            </a>
            <div className="w-11 h-11 rounded-full bg-white text-[#059669] flex items-center justify-center shrink-0 shadow-md">
              <Phone className="w-5 h-5 text-[#059669]" />
            </div>
          </div>

          {/* Operating Hours Row */}
          <div className="flex items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-white/20">
            <span className="text-base sm:text-lg font-bold text-white">
              Mon-Sat, 9am-7pm
            </span>
            <div className="w-11 h-11 rounded-full bg-white text-[#059669] flex items-center justify-center shrink-0 shadow-md">
              <Clock className="w-5 h-5 text-[#059669]" />
            </div>
          </div>

          {/* Response Time Row */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-base sm:text-lg font-bold text-white">
              Response Time: Within 24 hours
            </span>
            <div className="w-11 h-11 rounded-full bg-white text-[#059669] flex items-center justify-center shrink-0 shadow-md">
              <Zap className="w-5 h-5 fill-current text-[#059669]" />
            </div>
          </div>
        </div>
      </div>

      {/* Symmetrical Bottom Action: Chat on WhatsApp */}
      <div className="mt-8 pt-6 border-t border-white/20">
        <a
          href="https://wa.me/919804772106"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-white hover:bg-stone-50 font-bold text-sm shadow-md transition hover:scale-[1.01]"
          style={{ color: "#047857" }}
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0 text-[#25D366] fill-[#25D366]" />
          <span className="font-extrabold text-sm sm:text-base" style={{ color: "#047857" }}>
            Chat on WhatsApp
          </span>
          <ArrowRight className="w-4 h-4 shrink-0" style={{ color: "#047857" }} />
        </a>
      </div>
    </div>
  );
}
