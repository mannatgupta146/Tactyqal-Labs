import React from "react";

interface EditorPreviewTabProps {
  title: string;
  excerpt: string;
  content: string;
}

export default function EditorPreviewTab({ title, excerpt, content }: EditorPreviewTabProps) {
  return (
    <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm">
      <div className="mb-4 text-xs uppercase font-bold text-[#059669]">Live Preview Mode</div>
      <h1 className="text-3xl font-black text-slate-900">{title || "Untitled Article"}</h1>
      <p className="mt-2 text-base text-slate-600 italic">{excerpt}</p>
      <div className="mt-6 pt-6 border-t border-stone-200 prose max-w-none text-slate-700">
        {content.split("\n\n").map((block, i) => (
          <p key={i} className="mb-4 leading-relaxed">
            {block}
          </p>
        ))}
      </div>
    </div>
  );
}
