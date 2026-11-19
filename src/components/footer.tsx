"use client";

import React, { useState } from "react";
import Link from "next/link";
import PolicyModal from "./modals/policy-modal";

export default function Footer() {
  const [policyTab, setPolicyTab] = useState<"privacy" | "terms" | null>(null);

  return (
    <footer className="bg-[#FDFCF7] border-t border-stone-200 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-xl sm:text-2xl font-black text-slate-900 group-hover:opacity-90 transition">
                Tactyqal <span className="text-[#059669]">Labs</span>
              </span>
            </Link>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              We empower aspiring young entrepreneurs and teen builders to turn ideas into functional, revenue-generating, real-world applications in 8 weeks.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#00df82] animate-pulse" />
                <span>1:1 Founder Mentorship • 15 Spots Only</span>
              </div>
            </div>
          </div>

          {/* Column 1: Program */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Program</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/#program" className="hover:text-[#059669] transition">
                  8-Week Curriculum
                </a>
              </li>
              <li>
                <a href="/#success" className="hover:text-[#059669] transition">
                  Student Success Stories
                </a>
              </li>
              <li>
                <a href="/#why" className="hover:text-[#059669] transition">
                  Why Parents Choose Us
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-[#059669] transition">
                  Pricing & Guarantee
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-[#059669] transition">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/blog" className="hover:text-[#059669] transition">
                  Founder Knowledge Hub
                </Link>
              </li>
              <li>
                <a href="/#tools" className="hover:text-[#059669] transition">
                  Interactive Startup Tools
                </a>
              </li>
              <li>
                <a href="/#success" className="hover:text-[#059669] transition">
                  Student Case Studies
                </a>
              </li>
              <li>
                <Link href="/admin/blog" className="hover:text-[#059669] transition">
                  Blog Admin CMS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Trust & Policies</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/#pricing" className="hover:text-[#059669] transition">
                  100% Results Guarantee
                </a>
              </li>
              <li>
                <a href="/#why" className="hover:text-[#059669] transition">
                  University Admissions Edge
                </a>
              </li>
              <li>
                <button
                  onClick={() => setPolicyTab("privacy")}
                  className="hover:text-[#059669] transition text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPolicyTab("terms")}
                  className="hover:text-[#059669] transition text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/919804772106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#059669] transition font-medium"
                >
                  WhatsApp: +91-98047-72106
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2020 – 2026 Tactyqal Labs. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-stone-100 text-slate-600 font-medium">
              Devuty Hire-a-thon Submission
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Privacy / Terms Policy Modal */}
      <PolicyModal
        isOpen={policyTab !== null}
        onClose={() => setPolicyTab(null)}
        initialTab={policyTab ?? "privacy"}
      />
    </footer>
  );
}
