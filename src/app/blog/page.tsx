"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchQuery, setSelectedCategory } from "../../store/blogSlice";
import { api } from "../../lib/api";
import { BlogPost, BlogCategory } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import {
  Search,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  LayoutDashboard,
  Filter,
  Eye,
} from "lucide-react";

export default function BlogCatalogPage() {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.blog.searchQuery);
  const selectedCategory = useAppSelector((state) => state.blog.selectedCategory);

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // Load categories on mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const cats = await api.getCategories();
        setCategories(cats);
      } catch (err) {
        console.error("Error loading categories:", err);
      }
    };
    loadCategories();
  }, []);

  // Fetch posts when search or category changes
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await api.getPosts({
          search: searchQuery,
          category: selectedCategory === "all" ? undefined : selectedCategory,
          status: "published",
        });
        setPosts(res.posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchPosts, 250);
    return () => clearTimeout(debounce);
  }, [searchQuery, selectedCategory]);

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = posts.filter((p) => p._id !== featuredPost?._id && p.slug !== featuredPost?.slug);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-900">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Tactyqal Insights
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Founder & Builder Knowledge Hub
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
              Curated masterclasses, elevator pitch teardowns, and validation frameworks from the mentors at Tactyqal Labs.
            </p>
          </div>

          <Link
            href="/admin/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-indigo-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-bold transition shadow-sm"
          >
            <LayoutDashboard className="w-4 h-4 text-indigo-400" />
            <span>Manage Content (Admin CMS)</span>
          </Link>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides, ideas, elevator pitches..."
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition shadow-inner"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => dispatch(setSelectedCategory("all"))}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              All Topics
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                onClick={() => dispatch(setSelectedCategory(c.slug))}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === c.slug
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="py-20 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <span>Loading articles from API...</span>
          </div>
        )}

        {/* Featured Post Card */}
        {!loading && featuredPost && !searchQuery && selectedCategory === "all" && (
          <div className="mt-10">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-slate-800 overflow-hidden">
                <img
                  src={featuredPost.coverImage || "https://images.unsplash.com/photo-1551836022-d5d88e9218df"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-lg">
                  Featured Masterclass
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-indigo-400 font-semibold border border-slate-700">
                      {featuredPost.category?.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" /> {featuredPost.readTimeMin} min read
                    </span>
                    <span>•</span>
                    <span>{formatDate(featuredPost.publishedAt)}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
                      alt={featuredPost.author?.name}
                      className="w-8 h-8 rounded-full object-cover border border-slate-700"
                    />
                    <span className="text-xs font-semibold text-slate-300">
                      {featuredPost.author?.name}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        {!loading && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(searchQuery || selectedCategory !== "all" ? posts : regularPosts).map((post) => (
              <Link
                key={post._id || post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                    <img
                      src={post.coverImage || "https://images.unsplash.com/photo-1551836022-d5d88e9218df"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-white/10">
                      {post.category?.name}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" /> {post.readTimeMin} min read
                      </span>
                      <span>•</span>
                      <span>{formatDate(post.publishedAt)}</span>
                      {post.views > 0 && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <Eye className="w-3 h-3" /> {post.views}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-indigo-400">
                  <span className="text-slate-400">By {post.author?.name || "Tactyqal Team"}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && posts.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-xl font-bold text-white">No articles found</h3>
            <p className="text-sm text-slate-400 mt-2">
              Try adjusting your search keyword or clearing the selected category filter.
            </p>
            <button
              onClick={() => {
                dispatch(setSearchQuery(""));
                dispatch(setSelectedCategory("all"));
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
