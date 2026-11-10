import { Request, Response } from "express";
import { Category } from "../models/Category";
import { Post } from "../models/Post";
import { isMongoConnected, MemoryStore } from "../config/db";

// GET /api/blog/categories
export const getCategories = async (_req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const categories = await Category.find().sort({ name: 1 });
      return res.json({ success: true, data: categories });
    }

    return res.json({ success: true, data: MemoryStore.categories });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/blog/tags
export const getTags = async (_req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const tags = await Post.distinct("tags");
      return res.json({ success: true, data: tags });
    }

    const tagSet = new Set<string>();
    MemoryStore.posts.forEach((p) => p.tags?.forEach((t) => tagSet.add(t)));
    return res.json({ success: true, data: Array.from(tagSet) });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
