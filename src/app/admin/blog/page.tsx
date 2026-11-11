"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "../../../lib/api";
import { BlogPost, BlogStats } from "../../../lib/types";
import { useAppDispatch } from "../../../store/hooks";
import { showToast } from "../../../store/uiSlice";
import AdminStatsBar from "../../../components/admin/admin-stats-bar";
import AdminPostsTable from "../../../components/admin/admin-posts-table";
import { Plus, Search, ExternalLink, RefreshCw } from "lucide-react";

export default function AdminBlogPage() {
  const dispatch = useAppDispatch();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [stats, setStats] = useState<BlogStats | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [postsRes, statsRes] = await Promise.all([
        api.getPosts({ status: "all", limit: 50 }),
        api.getStats(),
      ]);
      setPosts(postsRes.posts);
      setStats(statsRes);
    } catch (err) {
      console.error("Error loading admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (post: BlogPost) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${post.title}"?`);
    if (!confirmDelete) return;

    const id = post._id || post.id || post.slug;
    setDeletingId(id);
    try {
      await api.deletePost(id);
      dispatch(showToast({ message: "Post deleted successfully", type: "success" }));
      setPosts((prev) => prev.filter((p) => p._id !== id && p.slug !== id));
      if (stats) {
        setStats({ ...stats, totalPosts: stats.totalPosts - 1 });
      }
    } catch {
      dispatch(showToast({ message: "Failed to delete post", type: "error" }));
    } finally {
      setDeletingId(null);
    }
  };

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-1">
              Content Management Engine
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Blog CMS Dashboard
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Manage, create, and publish knowledge base articles and guides.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-xs font-bold text-slate-700 hover:text-[#059669] transition shadow-xs"
            >
              <ExternalLink className="w-4 h-4 text-[#059669]" /> View Public Blog
            </Link>

            <Link
              href="/admin/blog/editor"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Create New Post
            </Link>
          </div>
        </div>

        {/* Stats Metrics Cards */}
        <AdminStatsBar
          stats={stats}
          totalFallback={posts.length}
          publishedFallback={posts.filter((p) => p.published).length}
          draftsFallback={posts.filter((p) => !p.published).length}
          viewsFallback={posts.reduce((a, b) => a + (b.views || 0), 0)}
        />

        {/* Search & Actions Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-stone-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#059669] shadow-xs"
            />
          </div>

          <button
            onClick={loadData}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-slate-700 hover:text-slate-900 shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh List
          </button>
        </div>

        {/* Posts Table */}
        <AdminPostsTable posts={filteredPosts} deletingId={deletingId} onDelete={handleDelete} />
      </div>
    </div>
  );
}
