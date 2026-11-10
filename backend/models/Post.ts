import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  published: boolean;
  featured: boolean;
  readTimeMin: number;
  views: number;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  category: {
    name: string;
    slug: string;
  };
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, default: "https://images.unsplash.com/photo-1551836022-d5d88e9218df" },
    published: { type: Boolean, default: true, index: true },
    featured: { type: Boolean, default: false },
    readTimeMin: { type: Number, default: 3 },
    views: { type: Number, default: 0 },
    author: {
      name: { type: String, default: "Tactyqal Team" },
      avatar: { type: String, default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb" },
      role: { type: String, default: "Mentor & Founder" },
    },
    category: {
      name: { type: String, required: true },
      slug: { type: String, required: true, index: true },
    },
    tags: [{ type: String, index: true }],
    publishedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
