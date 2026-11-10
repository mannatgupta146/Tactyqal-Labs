import mongoose from "mongoose";
import { initialCategories, initialPosts, SeedPost } from "../seeds/seedData";

// Resilient in-memory fallback store in case local MongoDB is not running
export class MemoryStore {
  static posts: (SeedPost & { _id: string; id: string; createdAt: Date; updatedAt: Date })[] = [];
  static categories: { _id: string; id: string; name: string; slug: string; description?: string; postCount: number }[] = [];
  static leads: any[] = [];
  static isInitialized = false;

  static initialize() {
    if (this.isInitialized) return;
    this.categories = initialCategories.map((c, i) => ({
      _id: `cat_${i + 1}`,
      id: `cat_${i + 1}`,
      ...c,
      postCount: initialPosts.filter((p) => p.category.slug === c.slug).length,
    }));

    this.posts = initialPosts.map((p, i) => ({
      _id: `post_${i + 1}`,
      id: `post_${i + 1}`,
      ...p,
      createdAt: new Date(p.publishedAt),
      updatedAt: new Date(p.publishedAt),
    }));
    this.isInitialized = true;
    console.log(`[MemoryStore] Initialized with ${this.posts.length} posts and ${this.categories.length} categories`);
  }
}

export let isMongoConnected = false;

export const connectDB = async (): Promise<boolean> => {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/tactyqal";

  try {
    console.log(`[MongoDB] Attempting connection to: ${uri}`);
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500, // Quick timeout to fallback if daemon is offline
    });
    isMongoConnected = true;
    console.log("✅ [MongoDB] Connected successfully to MongoDB");
    return true;
  } catch (err: any) {
    console.warn("⚠️ [MongoDB] Local MongoDB daemon not reachable. Activating Resilient In-Memory Fallback Store.");
    console.warn(`Reason: ${err?.message || err}`);
    isMongoConnected = false;
    MemoryStore.initialize();
    return false;
  }
};
