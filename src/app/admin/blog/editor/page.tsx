"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "../../../../lib/api";
import { BlogPost, BlogCategory } from "../../../../lib/types";
import { slugify } from "../../../../lib/utils";
import { useAppDispatch } from "../../../../store/hooks";
import { showToast } from "../../../../store/uiSlice";
import {
  ArrowLeft,
  Save,
  Eye,
  CheckCircle2,
  Sparkles,
  FileText,
  Image as ImageIcon,
  Tag,
  Folder,
} from "lucide-react";

function EditorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams?.get("id");
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [autoSlug, setAutoSlug] = useState(true);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [categoryName, setCategoryName] = useState("Startup Strategy");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [previewTab, setPreviewTab] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load categories and post if in edit mode
  useEffect(() => {
    const init = async () => {
      try {
        const cats = await api.getCategories();
        setCategories(cats);

        if (editId) {
          setLoading(true);
          const post = await api.getPostBySlug(editId);
          if (post) {
            setTitle(post.title);
            setSlug(post.slug);
            setAutoSlug(false);
            setExcerpt(post.excerpt);
            setContent(post.content);
            setCoverImage(post.coverImage || "");
            setCategoryName(post.category?.name || "Startup Strategy");
            setTags(post.tags?.join(", ") || "");
            setPublished(post.published);
            setFeatured(Boolean(post.featured));
          }
        }
      } catch (err) {
        console.error("Error initializing editor:", err);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [editId]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (autoSlug) {
      setSlug(slugify(val));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !excerpt || !content) {
      dispatch(showToast({ message: "Title, excerpt, and content are required.", type: "error" }));
      return;
    }

    setSaving(true);
    const postPayload = {
      title,
      slug: slug || slugify(title),
      excerpt,
      content,
      coverImage:
        coverImage ||
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      categoryName,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      published,
      featured,
    };

    try {
      if (editId) {
        await api.updatePost(editId, postPayload);
        dispatch(showToast({ message: "Article updated successfully!", type: "success" }));
      } else {
        await api.createPost(postPayload);
        dispatch(showToast({ message: "New article published successfully!", type: "success" }));
      }
      router.push("/admin/blog");
    } catch (err: any) {
      dispatch(
        showToast({
          message: err?.response?.data?.error || "Failed to save article.",
          type: "error",
        })
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-40 pb-32 min-h-screen bg-slate-950 text-center text-slate-400">
        <p className="text-sm">Loading post details...</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/blog"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {editId ? "Edit Article" : "Create New Article"}
              </h1>
              <p className="text-xs text-slate-400">
                {editId ? `Editing: ${slug}` : "Drafting a new knowledge base guide"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPreviewTab(!previewTab)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition"
            >
              <Eye className="w-4 h-4 text-indigo-400" />
              <span>{previewTab ? "Edit Mode" : "Live Preview"}</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? "Saving..." : editId ? "Update Article" : "Publish Article"}</span>
            </button>
          </div>
        </div>

        {/* Editor Form */}
        <form onSubmit={handleSave} className="mt-8 space-y-6">
          {!previewTab ? (
            <>
              {/* Title & Slug */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 10 Lessons from Launching on Product Hunt"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-base font-semibold focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>URL Slug</span>
                    <button
                      type="button"
                      onClick={() => setAutoSlug(!autoSlug)}
                      className="text-[10px] text-indigo-400 lowercase"
                    >
                      {autoSlug ? "(auto)" : "(custom)"}
                    </button>
                  </label>
                  <input
                    type="text"
                    placeholder="url-slug"
                    value={slug}
                    onChange={(e) => {
                      setAutoSlug(false);
                      setSlug(slugify(e.target.value));
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-indigo-300 text-sm font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Summary / Excerpt * (1–2 sentences)
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Key takeaways and summary displayed on article cards and search..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              {/* Category, Tags, Cover Image */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Category
                  </label>
                  <select
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
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
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="No-Code, AI, Pitch Deck"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Cover Image URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Status Toggles */}
              <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-200">
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    className="w-4 h-4 rounded text-indigo-600 bg-slate-800 border-slate-700 focus:ring-0"
                  />
                  <span>Published (visible to public)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-200">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="w-4 h-4 rounded text-indigo-600 bg-slate-800 border-slate-700 focus:ring-0"
                  />
                  <span>Feature as Top Masterclass Banner</span>
                </label>
              </div>

              {/* Content Markdown Area */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Content (Markdown Supported) *
                </label>
                <textarea
                  rows={14}
                  required
                  placeholder="Write in standard Markdown format (## Headings, > Quotes, - Lists, **bold**, etc.)..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 font-mono text-sm focus:outline-none focus:border-indigo-500 leading-relaxed"
                />
              </div>
            </>
          ) : (
            /* Live Preview Mode */
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="mb-4 text-xs uppercase font-bold text-indigo-400">Preview Mode</div>
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
          )}

          {/* Bottom Save Action */}
          <div className="pt-4 flex items-center justify-end gap-3">
            <Link
              href="/admin/blog"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition disabled:opacity-50"
            >
              {saving ? "Saving..." : editId ? "Update Article" : "Publish Article"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AdminBlogEditorPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-40 pb-32 min-h-screen bg-slate-950 text-center text-slate-400">
          <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm">Loading editor...</p>
        </div>
      }
    >
      <EditorContent />
    </Suspense>
  );
}
