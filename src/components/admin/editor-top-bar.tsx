import React from "react";
import Link from "next/link";
import { ArrowLeft, Save, Eye } from "lucide-react";

interface EditorTopBarProps {
  editId: string | null;
  slug: string;
  previewTab: boolean;
  saving: boolean;
  onTogglePreview: () => void;
  onSave: (e: React.FormEvent) => void;
}

export default function EditorTopBar({
  editId,
  slug,
  previewTab,
  saving,
  onTogglePreview,
  onSave,
}: EditorTopBarProps) {
  return (
    <div className="flex items-center justify-between pb-8 border-b border-stone-200">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/blog"
          className="p-2 rounded-xl bg-white border border-stone-200 text-slate-600 hover:text-slate-900 shadow-xs"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            {editId ? "Edit Article" : "Create New Article"}
          </h1>
          <p className="text-xs text-slate-500">
            {editId ? `Editing: ${slug}` : "Drafting a new knowledge base guide"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onTogglePreview}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-slate-700 hover:text-slate-900 transition shadow-xs"
        >
          <Eye className="w-4 h-4 text-[#059669]" />
          <span>{previewTab ? "Edit Mode" : "Live Preview"}</span>
        </button>

        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 text-xs font-bold shadow-md shadow-emerald-500/20 transition disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? "Saving..." : editId ? "Update Article" : "Publish Article"}</span>
        </button>
      </div>
    </div>
  );
}
