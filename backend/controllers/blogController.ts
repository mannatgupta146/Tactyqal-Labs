import { Request, Response } from "express";
import { Post, IPost } from "../models/Post";
import { Category } from "../models/Category";
import { isMongoConnected, MemoryStore } from "../config/db";

// Helper: calculate reading time in minutes
const calcReadingTime = (content: string): number => {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

// Helper: generate URL slug
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// GET /api/blog/posts
export const getPosts = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string) || "";
    const category = (req.query.category as string) || "";
    const tag = (req.query.tag as string) || "";
    const status = (req.query.status as string) || "published";

    if (isMongoConnected) {
      const filter: any = {};
      if (status === "published") filter.published = true;
      if (status === "draft") filter.published = false;
      if (category && category !== "all") filter["category.slug"] = category;
      if (tag) filter.tags = tag;
      if (search) {
        filter.$or = [
          { title: { $regex: search, $options: "i" } },
          { excerpt: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
        ];
      }

      const total = await Post.countDocuments(filter);
      const posts = await Post.find(filter)
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);

      return res.json({
        success: true,
        data: {
          posts,
          pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit) || 1,
          },
        },
      });
    }

    // MemoryStore fallback
    let filtered = [...MemoryStore.posts];
    if (status === "published") filtered = filtered.filter((p) => p.published);
    if (status === "draft") filtered = filtered.filter((p) => !p.published);
    if (category && category !== "all") filtered = filtered.filter((p) => p.category.slug === category);
    if (tag) filtered = filtered.filter((p) => p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q)
      );
    }

    const total = filtered.length;
    const start = (page - 1) * limit;
    const paginated = filtered.slice(start, start + limit);

    return res.json({
      success: true,
      data: {
        posts: paginated,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit) || 1,
        },
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/blog/posts/:slugOrId
export const getPostBySlugOrId = async (req: Request, res: Response) => {
  try {
    const rawSlugOrId = req.params.slugOrId;
    const slugOrId = Array.isArray(rawSlugOrId) ? rawSlugOrId[0] : rawSlugOrId;

    if (isMongoConnected) {
      let post = await Post.findOne({ slug: slugOrId });
      if (!post && typeof slugOrId === "string" && slugOrId.match(/^[0-9a-fA-F]{24}$/)) {
        post = await Post.findById(slugOrId);
      }

      if (!post) {
        return res.status(404).json({ success: false, error: "Post not found" });
      }

      // Increment view count
      post.views += 1;
      await post.save();

      // Related posts
      const relatedPosts = await Post.find({
        _id: { $ne: post._id },
        "category.slug": post.category.slug,
        published: true,
      })
        .limit(3)
        .select("title slug excerpt coverImage readTimeMin publishedAt");

      return res.json({
        success: true,
        data: {
          ...post.toObject(),
          relatedPosts,
        },
      });
    }

    // MemoryStore fallback
    const post = MemoryStore.posts.find(
      (p) => p.slug === slugOrId || p._id === slugOrId || p.id === slugOrId
    );
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    post.views += 1;
    const relatedPosts = MemoryStore.posts
      .filter((p) => p.slug !== post.slug && p.category.slug === post.category.slug && p.published)
      .slice(0, 3);

    return res.json({
      success: true,
      data: {
        ...post,
        relatedPosts,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// POST /api/blog/posts
export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, excerpt, content, coverImage, categoryName, tags, published, authorName } = req.body;

    if (!title || !excerpt || !content) {
      return res.status(400).json({
        success: false,
        error: "Title, excerpt, and content are required.",
      });
    }

    let generatedSlug = req.body.slug ? slugify(req.body.slug) : slugify(title);
    if (isMongoConnected) {
      const existing = await Post.findOne({ slug: generatedSlug });
      if (existing) {
        generatedSlug = `${generatedSlug}-${Date.now().toString().slice(-4)}`;
      }
    }
    const catSlug = slugify(categoryName || "Startup Strategy");
    const catName = categoryName || "Startup Strategy";
    const readTimeMin = calcReadingTime(content);
    const parsedTags = Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((t) => t.trim()) : [];

    const newPostData = {
      title,
      slug: generatedSlug,
      excerpt,
      content,
      coverImage: coverImage || "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      published: published !== undefined ? published : true,
      featured: Boolean(req.body.featured),
      readTimeMin,
      views: 0,
      author: {
        name: authorName || "Tactyqal Team",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        role: "Startup Mentor",
      },
      category: {
        name: catName,
        slug: catSlug,
      },
      tags: parsedTags,
      publishedAt: new Date(),
    };

    if (isMongoConnected) {
      const created = await Post.create(newPostData);
      
      const existingCategory = await Category.findOne({
        $or: [{ slug: catSlug }, { name: catName }],
      });
      if (existingCategory) {
        existingCategory.postCount += 1;
        await existingCategory.save();
      } else {
        await Category.create({ name: catName, slug: catSlug, postCount: 1 });
      }

      return res.status(201).json({
        success: true,
        message: "Post created successfully",
        data: created,
      });
    }

    // MemoryStore fallback
    const id = `post_${Date.now()}`;
    const saved = {
      _id: id,
      id,
      ...newPostData,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: new Date().toISOString(),
    };
    MemoryStore.posts.unshift(saved as any);

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: saved,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// PUT /api/blog/posts/:id
export const updatePost = async (req: Request, res: Response) => {
  try {
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;
    const { title, excerpt, content, coverImage, categoryName, tags, published, featured } = req.body;

    const updateFields: any = { updatedAt: new Date() };
    if (title) updateFields.title = title;
    if (req.body.slug) updateFields.slug = slugify(req.body.slug);
    if (excerpt) updateFields.excerpt = excerpt;
    if (content) {
      updateFields.content = content;
      updateFields.readTimeMin = calcReadingTime(content);
    }
    if (coverImage !== undefined) updateFields.coverImage = coverImage;
    if (published !== undefined) updateFields.published = published;
    if (featured !== undefined) updateFields.featured = Boolean(featured);
    if (categoryName) {
      updateFields.category = {
        name: categoryName,
        slug: slugify(categoryName),
      };
    }
    if (tags) {
      updateFields.tags = Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((t) => t.trim()) : [];
    }

    if (isMongoConnected) {
      let updated = await Post.findByIdAndUpdate(id, updateFields, { new: true });
      if (!updated) {
        updated = await Post.findOneAndUpdate({ slug: id }, updateFields, { new: true });
      }

      if (!updated) {
        return res.status(404).json({ success: false, error: "Post not found" });
      }

      return res.json({
        success: true,
        message: "Post updated successfully",
        data: updated,
      });
    }

    // MemoryStore fallback
    const index = MemoryStore.posts.findIndex((p) => p._id === id || p.id === id || p.slug === id);
    if (index === -1) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    MemoryStore.posts[index] = {
      ...MemoryStore.posts[index],
      ...updateFields,
    };

    return res.json({
      success: true,
      message: "Post updated successfully",
      data: MemoryStore.posts[index],
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE /api/blog/posts/:id
export const deletePost = async (req: Request, res: Response) => {
  try {
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;

    if (isMongoConnected) {
      let deleted = await Post.findByIdAndDelete(id);
      if (!deleted) {
        deleted = await Post.findOneAndDelete({ slug: id });
      }

      if (!deleted) {
        return res.status(404).json({ success: false, error: "Post not found" });
      }

      return res.json({
        success: true,
        message: "Post deleted successfully",
      });
    }

    // MemoryStore fallback
    const index = MemoryStore.posts.findIndex((p) => p._id === id || p.id === id || p.slug === id);
    if (index === -1) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    MemoryStore.posts.splice(index, 1);
    return res.json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/blog/stats
export const getBlogStats = async (_req: Request, res: Response) => {
  try {
    if (isMongoConnected) {
      const totalPosts = await Post.countDocuments();
      const publishedPosts = await Post.countDocuments({ published: true });
      const draftPosts = totalPosts - publishedPosts;
      const categoriesCount = await Category.countDocuments();
      const aggregateViews = await Post.aggregate([
        { $group: { _id: null, totalViews: { $sum: "$views" } } },
      ]);
      const totalViews = aggregateViews[0]?.totalViews || 0;

      return res.json({
        success: true,
        data: {
          totalPosts,
          publishedPosts,
          draftPosts,
          totalViews,
          categoriesCount,
        },
      });
    }

    // MemoryStore fallback
    const totalPosts = MemoryStore.posts.length;
    const publishedPosts = MemoryStore.posts.filter((p) => p.published).length;
    const draftPosts = totalPosts - publishedPosts;
    const totalViews = MemoryStore.posts.reduce((sum, p) => sum + (p.views || 0), 0);
    const categoriesCount = MemoryStore.categories.length;

    return res.json({
      success: true,
      data: {
        totalPosts,
        publishedPosts,
        draftPosts,
        totalViews,
        categoriesCount,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
