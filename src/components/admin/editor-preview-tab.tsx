import React from "react";

interface EditorPreviewTabProps {
  title: string;
  excerpt: string;
  content: string;
}

export default function EditorPreviewTab({ title, excerpt, content }: EditorPreviewTabProps) {
  return (
    <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
      <div className="mb-4 text-xs uppercase font-bold text-emerald-400">Live Preview Mode</div>
      <h1 className="text-3xl font-extrabold text-white">{title || "Untitled Article"}</h1>
      <p className="mt-2 text-base text-slate-300 italic">{excerpt}</p>
      <div className="mt-6 pt-6 border-t border-slate-800 prose prose-invert max-w-none text-slate-200">
        {content.split("\n\n").map((block, i) => (
          <p key={i} className="mb-4 leading-relaxed">
            {block}
          </p>
        ))}
      </div>
    </div>
  );
}
