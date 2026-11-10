"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "../../../lib/api";
import { BlogPost, BlogStats } from "../../../lib/types";
import { formatDate } from "../../../lib/utils";
import { useAppDispatch } from "../../../store/hooks";
import { showToast } from "../../../store/uiSlice";
import {
  Plus,
  Search,
  FileText,
  Eye,
  CheckCircle2,
  Clock,
  Trash2,
  Edit,
  ExternalLink,
  Sparkles,
  ArrowLeft,
  RefreshCw,
  FolderOpen,
} from "lucide-react";

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
    } catch (err: any) {
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
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Content Management Engine
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Blog CMS Dashboard
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Manage, create, and publish knowledge base articles and guides.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition"
            >
              <ExternalLink className="w-4 h-4 text-indigo-400" /> View Public Blog
            </Link>

            <Link
              href="/admin/blog/editor"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 transition hover:scale-105"
            >
              <Plus className="w-4 h-4" /> Create New Post
            </Link>
          </div>
        </div>

        {/* Stats Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>Total Articles</span>
              <FileText className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {stats?.totalPosts || posts.length}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>Published</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {stats?.publishedPosts || posts.filter((p) => p.published).length}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>Drafts</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {stats?.draftPosts || posts.filter((p) => !p.published).length}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>Total Views</span>
              <Eye className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {stats?.totalViews || posts.reduce((a, b) => a + (b.views || 0), 0)}
            </div>
          </div>
        </div>

        {/* Search & Actions Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            onClick={loadData}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh List
          </button>
        </div>

        {/* Posts Table */}
        <div className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-850/80 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider font-semibold">
                <tr>
                  <th className="px-6 py-3.5">Post Title & Excerpt</th>
                  <th className="px-6 py-3.5">Category</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Views</th>
                  <th className="px-6 py-3.5">Date</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredPosts.map((post) => {
                  const id = post._id || post.id || post.slug;
                  return (
                    <tr key={id} className="hover:bg-slate-850/50 transition">
                      <td className="px-6 py-4 max-w-md">
                        <div className="font-bold text-white text-sm line-clamp-1">{post.title}</div>
                        <div className="text-slate-400 text-xs line-clamp-1 mt-0.5">{post.excerpt}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-indigo-300 border border-slate-700">
                          {post.category?.name || "General"}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {post.published ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <CheckCircle2 className="w-3 h-3" /> Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            <Clock className="w-3 h-3" /> Draft
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-slate-300 font-mono text-xs">
                        {post.views || 0}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-slate-400 text-xs">
                        {formatDate(post.publishedAt || post.createdAt || "")}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                            title="Preview Post"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>

                          <Link
                            href={`/admin/blog/editor?id=${id}`}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-800"
                            title="Edit Post"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>

                          <button
                            onClick={() => handleDelete(post)}
                            disabled={deletingId === id}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 disabled:opacity-50"
                            title="Delete Post"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {!loading && filteredPosts.length === 0 && (
            <div className="p-12 text-center text-slate-400 text-sm">
              No matching blog posts found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
