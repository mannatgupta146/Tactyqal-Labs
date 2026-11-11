import React from "react";
import Link from "next/link";
import { BlogPost } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import { CheckCircle2, Clock, ExternalLink, Edit, Trash2 } from "lucide-react";

interface AdminPostsTableProps {
  posts: BlogPost[];
  deletingId: string | null;
  onDelete: (post: BlogPost) => void;
}

export default function AdminPostsTable({ posts, deletingId, onDelete }: AdminPostsTableProps) {
  return (
    <div className="mt-6 rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-stone-50 border-b border-stone-200 text-slate-500 uppercase text-[10px] tracking-wider font-semibold">
            <tr>
              <th className="px-6 py-3.5">Post Title & Excerpt</th>
              <th className="px-6 py-3.5">Category</th>
              <th className="px-6 py-3.5">Status</th>
              <th className="px-6 py-3.5">Views</th>
              <th className="px-6 py-3.5">Date</th>
              <th className="px-6 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {posts.map((post) => {
              const id = post._id || post.id || post.slug;
              return (
                <tr key={id} className="hover:bg-stone-50/70 transition">
                  <td className="px-6 py-4 max-w-md">
                    <div className="font-bold text-slate-900 text-sm line-clamp-1">{post.title}</div>
                    <div className="text-slate-500 text-xs line-clamp-1 mt-0.5">{post.excerpt}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-[#059669] border border-emerald-200/80">
                      {post.category?.name || "General"}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {post.published ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-[#059669] border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        <Clock className="w-3 h-3" /> Draft
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-slate-700 font-mono text-xs">
                    {post.views || 0}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-slate-500 text-xs">
                    {formatDate(post.publishedAt || post.createdAt || "")}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-stone-100"
                        title="Preview Post"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/admin/blog/editor?id=${id}`}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-[#059669] hover:bg-stone-100"
                        title="Edit Post"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={() => onDelete(post)}
                        disabled={deletingId === id}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 disabled:opacity-50"
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

      {posts.length === 0 && (
        <div className="p-12 text-center text-slate-500 text-sm">
          No matching blog posts found.
        </div>
      )}
    </div>
  );
}
