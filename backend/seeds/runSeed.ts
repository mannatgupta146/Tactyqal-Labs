import mongoose from "mongoose";
import dotenv from "dotenv";
import { Post } from "../models/Post";
import { Category } from "../models/Category";
import { initialCategories, initialPosts } from "./seedData";

dotenv.config();

const runSeed = async () => {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/tactyqal";
  try {
    console.log(`Connecting to MongoDB at ${uri}...`);
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");

    // Clear existing
    await Post.deleteMany({});
    await Category.deleteMany({});
    console.log("Existing posts and categories cleared.");

    // Seed Categories
    const insertedCategories = await Category.insertMany(initialCategories);
    console.log(`Seeded ${insertedCategories.length} categories.`);

    // Seed Posts
    const insertedPosts = await Post.insertMany(
      initialPosts.map((p) => ({
        ...p,
        publishedAt: new Date(p.publishedAt),
      }))
    );
    console.log(`Seeded ${insertedPosts.length} posts successfully.`);

    // Update Category post counts
    for (const cat of initialCategories) {
      const count = await Post.countDocuments({ "category.slug": cat.slug });
      await Category.updateOne({ slug: cat.slug }, { postCount: count });
    }
    console.log("Updated category post counts.");

    console.log("✅ Database seeding completed successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

runSeed();
