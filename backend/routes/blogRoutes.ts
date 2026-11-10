import { Router } from "express";
import {
  getPosts,
  getPostBySlugOrId,
  createPost,
  updatePost,
  deletePost,
  getBlogStats,
} from "../controllers/blogController";
import { getCategories, getTags } from "../controllers/categoryController";

const router = Router();

// Blog Post CRUD
router.get("/posts", getPosts);
router.get("/posts/:slugOrId", getPostBySlugOrId);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

// Taxonomy & Stats
router.get("/categories", getCategories);
router.get("/tags", getTags);
router.get("/stats", getBlogStats);

export default router;
