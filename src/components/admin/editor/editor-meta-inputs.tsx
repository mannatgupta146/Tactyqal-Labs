import React from "react";

interface EditorMetaInputsProps {
  categoryName: string;
  tags: string;
  coverImage: string;
  published: boolean;
  featured: boolean;
  onCategoryChange: (val: string) => void;
  onTagsChange: (val: string) => void;
  onCoverImageChange: (val: string) => void;
  onPublishedChange: (val: boolean) => void;
  onFeaturedChange: (val: boolean) => void;
}

export default function EditorMetaInputs({
  categoryName,
  tags,
  coverImage,
  published,
  featured,
  onCategoryChange,
  onTagsChange,
  onCoverImageChange,
  onPublishedChange,
  onFeaturedChange,
}: EditorMetaInputsProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Category
          </label>
          <select
            value={categoryName}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 text-sm focus:outline-none focus:border-[#059669] shadow-xs"
          >
            <option value="Startup Strategy">Startup Strategy</option>
            <option value="Team & Culture">Team & Culture</option>
            <option value="Startup Validation">Startup Validation</option>
            <option value="No-Code & Tech">No-Code & Tech</option>
            <option value="Social Impact">Social Impact</option>
            <option value="Startup Ideas">Startup Ideas</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Tags (comma separated)
          </label>
          <input
            type="text"
            placeholder="No-Code, AI, Pitch Deck"
            value={tags}
            onChange={(e) => onTagsChange(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] shadow-xs"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Cover Image URL / Path
          </label>
          <input
            type="text"
            placeholder="/images/blog-articles/... or https://..."
            value={coverImage}
            onChange={(e) => onCoverImageChange(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#059669] shadow-xs"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
        <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-800">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => onPublishedChange(e.target.checked)}
            className="w-4 h-4 rounded text-[#059669] border-stone-300 focus:ring-0"
          />
          <span>Published (visible to public)</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-800">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => onFeaturedChange(e.target.checked)}
            className="w-4 h-4 rounded text-[#059669] border-stone-300 focus:ring-0"
          />
          <span>Feature as Top Masterclass Banner</span>
        </label>
      </div>
    </>
  );
}
