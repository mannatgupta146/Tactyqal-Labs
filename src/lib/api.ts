import axios from "axios";
import { BlogPost, BlogCategory, BlogStats, ConsultationLeadPayload } from "./types";
import { initialPosts, initialCategories } from "../../backend/seeds/seedData";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  // Posts
  async getPosts(params?: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    tag?: string;
    status?: string;
  }): Promise<{ posts: BlogPost[]; pagination: { page: number; limit: number; total: number; totalPages: number } }> {
    try {
      const res = await apiClient.get("/blog/posts", { params });
      return res.data.data;
    } catch (err) {
      console.warn("API fallback to static seed data:", err);
      // Fallback
      let posts: any[] = initialPosts.map((p, i) => ({
        _id: `seed_${i}`,
        id: `seed_${i}`,
        ...p,
      }));

      if (params?.category && params.category !== "all") {
        posts = posts.filter((p) => p.category.slug === params.category);
      }
      if (params?.search) {
        const q = params.search.toLowerCase();
        posts = posts.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q)
        );
      }
      return {
        posts,
        pagination: {
          page: 1,
          limit: posts.length,
          total: posts.length,
          totalPages: 1,
        },
      };
    }
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const res = await apiClient.get(`/blog/posts/${slug}`);
      return res.data.data;
    } catch (err) {
      console.warn("API fallback to static seed data for slug:", slug);
      const post = initialPosts.find((p) => p.slug === slug);
      if (!post) return null;
      return {
        _id: `seed_${slug}`,
        ...post,
        relatedPosts: initialPosts.filter((p) => p.slug !== slug).slice(0, 3),
      } as any;
    }
  },

  async createPost(data: Partial<BlogPost>): Promise<BlogPost> {
    const res = await apiClient.post("/blog/posts", data);
    return res.data.data;
  },

  async updatePost(id: string, data: Partial<BlogPost>): Promise<BlogPost> {
    const res = await apiClient.put(`/blog/posts/${id}`, data);
    return res.data.data;
  },

  async deletePost(id: string): Promise<void> {
    await apiClient.delete(`/blog/posts/${id}`);
  },

  // Categories & Tags
  async getCategories(): Promise<BlogCategory[]> {
    try {
      const res = await apiClient.get("/blog/categories");
      return res.data.data;
    } catch {
      return initialCategories.map((c, i) => ({
        _id: `cat_${i}`,
        ...c,
        postCount: initialPosts.filter((p) => p.category.slug === c.slug).length,
      }));
    }
  },

  async getTags(): Promise<string[]> {
    try {
      const res = await apiClient.get("/blog/tags");
      return res.data.data;
    } catch {
      const tagSet = new Set<string>();
      initialPosts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
      return Array.from(tagSet);
    }
  },

  async getStats(): Promise<BlogStats> {
    try {
      const res = await apiClient.get("/blog/stats");
      return res.data.data;
    } catch {
      return {
        totalPosts: initialPosts.length,
        publishedPosts: initialPosts.length,
        draftPosts: 0,
        totalViews: 3430,
        categoriesCount: initialCategories.length,
      };
    }
  },

  // Leads
  async bookConsultation(payload: ConsultationLeadPayload) {
    const res = await apiClient.post("/consultation", payload);
    return res.data;
  },
};
