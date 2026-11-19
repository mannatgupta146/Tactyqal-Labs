"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "../../../../lib/api";
import { slugify } from "../../../../lib/utils";
import { useAppDispatch } from "../../../../store/hooks";
import { showToast } from "../../../../store/uiSlice";
import { EditorFormInputs, EditorPreviewTab, EditorTopBar } from "@/components/admin";

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
      <div className="pt-40 pb-32 min-h-screen bg-[#FDFCF7] text-center text-slate-500">
        <p className="text-sm">Loading post details...</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF7] text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditorTopBar
          editId={editId}
          slug={slug}
          previewTab={previewTab}
          saving={saving}
          onTogglePreview={() => setPreviewTab(!previewTab)}
          onSave={handleSave}
        />

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

          <div className="pt-4 flex items-center justify-end gap-3">
            <Link
              href="/admin/blog"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 text-xs font-bold shadow-md shadow-emerald-500/20 transition disabled:opacity-50"
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
        <div className="pt-40 pb-32 min-h-screen bg-[#FDFCF7] text-center text-slate-500">
          <div className="w-6 h-6 border-2 border-[#059669] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm">Loading editor...</p>
        </div>
      }
    >
      <EditorContent />
    </Suspense>
  );
}
