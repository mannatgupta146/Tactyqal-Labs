import React from "react";
import { Eye, Clock, Star, Tag } from "lucide-react";
import { renderMarkdown } from "../../../lib/markdown-renderer";

interface EditorPreviewTabProps {
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  categoryName?: string;
  tags?: string;
  featured?: boolean;
}

export default function EditorPreviewTab({
  title,
  excerpt,
  content,
  coverImage,
  categoryName = "Startup Strategy",
  tags = "",
  featured = false,
}: EditorPreviewTabProps) {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  const tagList = tags.split(",").map((t) => t.trim()).filter(Boolean);

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm max-w-4xl mx-auto">
      {/* Top Status & Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-xs font-bold tracking-wide uppercase shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00df82]" />
          </span>
          <Eye className="w-3.5 h-3.5 text-[#059669]" />
          <span>Live Preview Mode</span>
        </div>

        <div className="flex items-center gap-2.5 text-xs font-medium text-slate-500">
          <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 font-semibold border border-stone-200">
            {categoryName}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 font-bold border border-amber-200/80 shadow-2xs">
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              Featured
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {readTime} min read
          </span>
        </div>
      </div>

      {/* Article Header Preview */}
      <div className="mt-6">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          {title || "Untitled Article"}
        </h1>

        {excerpt && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 italic leading-relaxed border-l-3 border-[#059669] pl-4 bg-emerald-50/30 py-2 rounded-r-xl">
            {excerpt}
          </p>
        )}

        {/* Optional Cover Image Preview */}
        {coverImage && (
          <div className="mt-6 rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 max-h-80 shadow-xs">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover max-h-80"
              onError={(e) => {
                // Hide or fallback gracefully if image path isn't loadable
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        )}

        {/* Tags */}
        {tagList.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
            {tagList.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-stone-100 text-slate-600 text-xs font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Rendered Markdown Body */}
      <div className="mt-8 pt-6 border-t border-stone-200/90">
        {content ? (
          renderMarkdown(content, true)
        ) : (
          <p className="text-slate-400 italic text-sm">
            Content is empty. Switch to the Edit tab and start writing your article.
          </p>
        )}
      </div>
    </div>
  );
}
