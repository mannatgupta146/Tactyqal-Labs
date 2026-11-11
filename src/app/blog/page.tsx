"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchQuery, setSelectedCategory } from "../../store/blogSlice";
import { api } from "../../lib/api";
import { BlogPost, BlogCategory } from "../../lib/types";
import BlogSearchFilter from "../../components/blog/blog-search-filter";
import BlogCard from "../../components/blog/blog-card";
import FeaturedBlogCard from "../../components/blog/featured-blog-card";
import { Sparkles, LayoutDashboard } from "lucide-react";

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
  const regularPosts = posts.filter(
    (p) => p._id !== featuredPost?._id && p.slug !== featuredPost?.slug
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF7] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Tactyqal Insights
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Founder & Builder Knowledge Hub
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Curated masterclasses, elevator pitch teardowns, and validation frameworks from the mentors at Tactyqal Labs.
            </p>
          </div>

          <Link
            href="/admin/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-slate-700 hover:text-[#059669] border border-stone-200 text-xs font-bold transition shadow-xs"
          >
            <LayoutDashboard className="w-4 h-4 text-[#059669]" />
            <span>Manage Content (Admin CMS)</span>
          </Link>
        </div>

        {/* Search & Filter Toolbar */}
        <BlogSearchFilter
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          categories={categories}
          onSearchChange={(val) => dispatch(setSearchQuery(val))}
          onCategorySelect={(slug) => dispatch(setSelectedCategory(slug))}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className="py-20 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-[#059669] border-t-transparent rounded-full animate-spin" />
            <span>Loading articles from API...</span>
          </div>
        )}

        {/* Featured Post Card */}
        {!loading && featuredPost && !searchQuery && selectedCategory === "all" && (
          <FeaturedBlogCard post={featuredPost} />
        )}

        {/* Regular Posts Grid */}
        {!loading && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(searchQuery || selectedCategory !== "all" ? posts : regularPosts).map((post) => (
              <BlogCard key={post._id || post.slug} post={post} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && posts.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-xl font-bold text-slate-900">No articles found</h3>
            <p className="text-sm text-slate-600 mt-2">
              Try adjusting your search keyword or clearing the selected category filter.
            </p>
            <button
              onClick={() => {
                dispatch(setSearchQuery(""));
                dispatch(setSelectedCategory("all"));
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
