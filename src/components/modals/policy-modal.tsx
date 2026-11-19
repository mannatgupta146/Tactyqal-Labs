"use client";

import React, { useState, useEffect } from "react";
import { X, ShieldCheck, FileText } from "lucide-react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "privacy" | "terms";
}

export default function PolicyModal({
  isOpen,
  onClose,
  initialTab = "privacy",
}: PolicyModalProps) {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header with Tabs */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5]">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === "privacy"
                  ? "bg-white text-[#059669] shadow-xs border border-stone-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === "terms"
                  ? "bg-white text-[#059669] shadow-xs border border-stone-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileText className="w-4 h-4 text-[#059669]" />
              <span>Terms & Conditions</span>
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200/60 text-slate-500 hover:text-slate-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          {activeTab === "privacy" ? (
            <>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Student & Parent Privacy Commitment
              </h3>
              <p>
                At Tactyqal Labs, student safety, intellectual property, and parent privacy are our highest priorities. All student project ideas, proprietary concepts, codebases, and consultation notes are strictly confidential.
              </p>
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200/60 text-emerald-950 space-y-2">
                <p className="font-semibold">Key Privacy Highlights:</p>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>Zero data sharing or selling to third-party ad networks.</li>
                  <li>100% intellectual property ownership remains with the student founder.</li>
                  <li>Parent contact details and WhatsApp discussions are strictly encrypted and used solely for program scheduling.</li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                8-Week Incubation Cohort Terms
              </h3>
              <p>
                By enrolling in Tactyqal Labs, students commit to an 8-week structured 1:1 venture roadmap covering ideation, prototyping, no-code/full-stack development, and market launch.
              </p>
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200/60 text-emerald-950 space-y-2">
                <p className="font-semibold">100% Money-Back Guarantee Terms:</p>
                <p className="text-xs">
                  If your student attends all scheduled 1:1 sessions, completes weekly milestones, and does not have a live functional app deployed by Week 8, we provide a full 100% refund without hesitation.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-[#FAF8F5] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
