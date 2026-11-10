"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "../../../../lib/api";
import { slugify } from "../../../../lib/utils";
import { useAppDispatch } from "../../../../store/hooks";
import { showToast } from "../../../../store/uiSlice";
import EditorFormInputs from "../../../../components/admin/editor-form-inputs";
import EditorPreviewTab from "../../../../components/admin/editor-preview-tab";
import { ArrowLeft, Save, Eye } from "lucide-react";

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
  const [previewTab, setPreviewTab] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!editId) return;
    const loadPost = async () => {
      setLoading(true);
      try {
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
      } catch (err) {
        console.error("Error loading post:", err);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
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
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>{previewTab ? "Edit Mode" : "Live Preview"}</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 transition disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? "Saving..." : editId ? "Update Article" : "Publish Article"}</span>
            </button>
          </div>
        </div>

        {/* Editor Form */}
        <form onSubmit={handleSave} className="mt-8 space-y-6">
          {!previewTab ? (
            <EditorFormInputs
              title={title}
              slug={slug}
              autoSlug={autoSlug}
              excerpt={excerpt}
              content={content}
              coverImage={coverImage}
              categoryName={categoryName}
              tags={tags}
              published={published}
              featured={featured}
              onTitleChange={handleTitleChange}
              onSlugChange={setSlug}
              onAutoSlugToggle={() => setAutoSlug(!autoSlug)}
              onExcerptChange={setExcerpt}
              onContentChange={setContent}
              onCoverImageChange={setCoverImage}
              onCategoryChange={setCategoryName}
              onTagsChange={setTags}
              onPublishedChange={setPublished}
              onFeaturedChange={setFeatured}
            />
          ) : (
            <EditorPreviewTab title={title} excerpt={excerpt} content={content} />
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
              className="px-6 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 transition disabled:opacity-50"
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
          <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm">Loading editor...</p>
        </div>
      }
    >
      <EditorContent />
    </Suspense>
  );
}
