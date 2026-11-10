import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogPost, BlogCategory } from "../lib/types";

interface BlogState {
  searchQuery: string;
  selectedCategory: string;
  selectedTag: string;
  posts: BlogPost[];
  categories: BlogCategory[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  searchQuery: "",
  selectedCategory: "all",
  selectedTag: "",
  posts: [],
  categories: [],
  isLoading: false,
  error: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSelectedTag: (state, action: PayloadAction<string>) => {
      state.selectedTag = action.payload;
    },
    setPosts: (state, action: PayloadAction<BlogPost[]>) => {
      state.posts = action.payload;
    },
    setCategories: (state, action: PayloadAction<BlogCategory[]>) => {
      state.categories = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setSelectedTag,
  setPosts,
  setCategories,
  setLoading,
  setError,
} = blogSlice.actions;

export default blogSlice.reducer;
