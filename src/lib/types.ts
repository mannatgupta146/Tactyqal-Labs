export interface BlogPost {
  _id: string;
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  published: boolean;
  featured?: boolean;
  readTimeMin: number;
  views: number;
  publishedAt: string;
  createdAt?: string;
  updatedAt?: string;
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
  relatedPosts?: Partial<BlogPost>[];
}

export interface BlogCategory {
  _id: string;
  id?: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

export interface ConsultationLeadPayload {
  parentName: string;
  studentName?: string;
  email: string;
  phone: string;
  studentAge?: number;
  goalInterest?: string;
  notes?: string;
}

export interface BlogStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalViews: number;
  categoriesCount: number;
}
