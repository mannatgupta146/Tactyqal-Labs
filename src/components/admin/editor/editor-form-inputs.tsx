"use client";

import React, { useRef } from "react";
import { slugify } from "../../../lib/utils";
import EditorMetaInputs from "./editor-meta-inputs";
import EditorMarkdownToolbar from "./editor-markdown-toolbar";

interface EditorFormInputsProps {
  title: string;
  slug: string;
  autoSlug: boolean;
  excerpt: string;
  content: string;
  coverImage: string;
  categoryName: string;
  tags: string;
  published: boolean;
  featured: boolean;
  onTitleChange: (val: string) => void;
  onSlugChange: (val: string) => void;
  onAutoSlugToggle: () => void;
  onExcerptChange: (val: string) => void;
  onContentChange: (val: string) => void;
  onCoverImageChange: (val: string) => void;
  onCategoryChange: (val: string) => void;
  onTagsChange: (val: string) => void;
  onPublishedChange: (val: boolean) => void;
  onFeaturedChange: (val: boolean) => void;
}

export default function EditorFormInputs({
  title,
  slug,
  autoSlug,
  excerpt,
  content,
  coverImage,
  categoryName,
  tags,
  published,
  featured,
  onTitleChange,
  onSlugChange,
  onAutoSlugToggle,
  onExcerptChange,
  onContentChange,
  onCoverImageChange,
  onCategoryChange,
  onTagsChange,
  onPublishedChange,
  onFeaturedChange,
}: EditorFormInputsProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      e.preventDefault();
      applyWrap("**", "**", "bold text");
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "i") {
      e.preventDefault();
      applyWrap("*", "*", "italic text");
    }
  };

  const applyWrap = (prefix: string, suffix: string, defaultText: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.substring(start, end);
    const textToInsert = selected || defaultText;

    const nextContent =
      content.substring(0, start) + prefix + textToInsert + suffix + content.substring(end);
    onContentChange(nextContent);

    setTimeout(() => {
      textarea.focus();
      const cursorStart = start + prefix.length;
      const cursorEnd = cursorStart + textToInsert.length;
      textarea.setSelectionRange(cursorStart, cursorEnd);
    }, 0);
  };

  return (
    <>
      {/* Title & Slug */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Article Title *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. 10 Lessons from Launching on Product Hunt"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 placeholder-slate-400 text-base font-semibold focus:outline-none focus:border-[#059669] shadow-xs"
          />
        </div>

        <div>
          <label className="flex items-center justify-between text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            <span>URL Slug</span>
            <button
              type="button"
              onClick={onAutoSlugToggle}
              className="text-[10px] text-[#059669] lowercase font-bold"
            >
              {autoSlug ? "(auto)" : "(custom)"}
            </button>
          </label>
          <input
            type="text"
            placeholder="url-slug"
            value={slug}
            onChange={(e) => onSlugChange(slugify(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-[#059669] text-sm font-mono focus:outline-none focus:border-[#059669] shadow-xs"
          />
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Summary / Excerpt * (1–2 sentences)
        </label>
        <textarea
          rows={2}
          required
          placeholder="Key takeaways and summary displayed on article cards and search..."
          value={excerpt}
          onChange={(e) => onExcerptChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] resize-none shadow-xs"
        />
      </div>

      {/* Extracted Category, Tags, Cover Image & Status Toggles */}
      <EditorMetaInputs
        categoryName={categoryName}
        tags={tags}
        coverImage={coverImage}
        published={published}
        featured={featured}
        onCategoryChange={onCategoryChange}
        onTagsChange={onTagsChange}
        onCoverImageChange={onCoverImageChange}
        onPublishedChange={onPublishedChange}
        onFeaturedChange={onFeaturedChange}
      />

      {/* Content Markdown Area with Rich Toolbar */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Content (Markdown Supported) *
          </label>
          <span className="text-[11px] text-slate-500 font-medium">
            Use the toolbar below for Bold, Headings, Lists, Quotes & Links
          </span>
        </div>

        <div className="rounded-2xl border border-stone-300 bg-white overflow-hidden shadow-xs focus-within:border-[#059669] focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
          <EditorMarkdownToolbar
            textareaRef={textareaRef}
            content={content}
            onContentChange={onContentChange}
          />
          <textarea
            ref={textareaRef}
            rows={15}
            required
            placeholder="Write in standard Markdown format (use the toolbar buttons above for quick formatting)..."
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 bg-white text-slate-900 placeholder-slate-400 font-mono text-sm focus:outline-none leading-relaxed resize-y min-h-[380px]"
          />
        </div>
      </div>
    </>
  );
}
