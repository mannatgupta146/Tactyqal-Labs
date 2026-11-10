"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "../store/hooks";
import { openConsultationModal } from "../store/uiSlice";
import {
  Rocket,
  Menu,
  X,
  Phone,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Success Stories", href: "/#success" },
    { label: "Program", href: "/#program" },
    { label: "Why Us", href: "/#why" },
    { label: "Tools", href: "/#tools" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-xl shadow-black/40"
          : "bg-slate-950/40 backdrop-blur-md py-4 border-b border-slate-900/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - As in Tactyqal.com */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-400 shadow-md shadow-emerald-500/10 group-hover:scale-105 transition duration-200">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Tactyqal <span className="text-[#00df82]">Labs</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || (link.href === "/blog" && pathname.startsWith("/blog"));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-[#00df82] font-bold"
                    : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Admin CMS Shortcut */}
          <Link
            href="/admin/blog"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-300 bg-slate-900 border border-slate-800 hover:text-[#00df82] hover:border-slate-700 transition"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-[#00df82]" />
            <span>Admin CMS</span>
          </Link>

          {/* Phone Link */}
          <a
            href="tel:+919804772106"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#00df82] transition px-2 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#00df82]" />
            <span className="font-medium">+91-98047-72106</span>
          </a>

          {/* Contact Pill - Exact Mint Green as in tactyqal.com screenshot */}
          <button
            onClick={() => dispatch(openConsultationModal("Navbar Contact"))}
            className="px-5 py-2 rounded-full text-xs font-bold text-slate-950 bg-[#00df82] hover:bg-[#00c975] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-emerald-500/20"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => dispatch(openConsultationModal("Mobile Header"))}
            className="px-3.5 py-1.5 rounded-full bg-[#00df82] text-slate-950 text-xs font-bold"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/98 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              href="/admin/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200"
            >
              <span className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-emerald-400" /> Blog Admin CMS
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                dispatch(openConsultationModal("Mobile Drawer"));
              }}
              className="w-full py-3 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
