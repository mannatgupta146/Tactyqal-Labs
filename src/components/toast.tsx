"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearToast } from "../store/uiSlice";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function Toast() {
  const dispatch = useAppDispatch();
  const toast = useAppSelector((state) => state.ui.toast);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        dispatch(clearToast());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, dispatch]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl border backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-5 bg-slate-900/95 border-slate-700 text-white max-w-md">
      {toast.type === "success" && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
      {toast.type === "error" && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
      {toast.type === "info" && <Info className="w-5 h-5 text-indigo-400 shrink-0" />}

      <p className="text-sm font-medium leading-relaxed">{toast.message}</p>

      <button
        onClick={() => dispatch(clearToast())}
        className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
