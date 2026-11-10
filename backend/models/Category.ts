import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  description?: string;
  postCount: number;
  createdAt: Date;
}

const CategorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, default: "" },
    postCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.models.Category || mongoose.model<ICategory>("Category", CategorySchema);
