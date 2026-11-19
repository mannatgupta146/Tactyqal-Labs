import React from "react";
import { slugify } from "../../../lib/utils";
import EditorMetaInputs from "./editor-meta-inputs";

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

      {/* Content Markdown Area */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Content (Markdown Supported) *
        </label>
        <textarea
          rows={14}
          required
          placeholder="Write in standard Markdown format (## Headings, > Quotes, - Lists, **bold**, etc.)..."
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl bg-white border border-stone-300 text-slate-900 placeholder-slate-400 font-mono text-sm focus:outline-none focus:border-[#059669] leading-relaxed shadow-xs"
        />
      </div>
    </>
  );
}
