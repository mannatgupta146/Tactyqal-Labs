"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Mail, Phone, Heart, Sparkles, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-md shadow-indigo-500/20">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-white">
                Tactyqal<span className="text-indigo-400">Labs</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We empower aspiring young entrepreneurs and teen builders to turn ideas into functional, revenue-generating, real-world applications in 8 weeks.
            </p>
            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>tactyqal.labs@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91-98047-72106</span>
              </div>
            </div>
          </div>

          {/* Column 1: Program */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Program</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/#program" className="hover:text-indigo-400 transition">
                  8-Week Curriculum
                </a>
              </li>
              <li>
                <a href="/#success" className="hover:text-indigo-400 transition">
                  Student Success Stories
                </a>
              </li>
              <li>
                <a href="/#why" className="hover:text-indigo-400 transition">
                  Why Parents Choose Us
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-indigo-400 transition">
                  Pricing & Guarantee
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-indigo-400 transition">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Free Tools & Blog */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/blog" className="hover:text-indigo-400 transition">
                  Founder Knowledge Hub
                </Link>
              </li>
              <li>
                <a href="/#tools" className="hover:text-indigo-400 transition">
                  Startup Idea Generator
                </a>
              </li>
              <li>
                <a href="/#tools" className="hover:text-indigo-400 transition">
                  Fundability Assessment
                </a>
              </li>
              <li>
                <a href="/#tools" className="hover:text-indigo-400 transition">
                  Pitch Deck Analyzer
                </a>
              </li>
              <li>
                <Link href="/admin/blog" className="hover:text-indigo-400 transition flex items-center gap-1">
                  <span>Blog Admin CMS</span>
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Challenge */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Hire-a-thon</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tactyqal Labs Fullstack Developer Challenge hosted on Devuty.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="font-bold text-white block">Devuty Hire-a-thon</span>
              Modern Next.js 14 + Node/Express + MongoDB Solution.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2026 Tactyqal Labs. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Built with Next.js 14, Tailwind, TypeScript, Express & MongoDB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
