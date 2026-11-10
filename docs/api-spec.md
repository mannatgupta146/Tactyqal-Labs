# REST API Specification
## Tactyqal Labs Modern Platform & Blog Engine

Base URL: `/api`  
Content-Type: `application/json`

---

### 1. Blog Posts Endpoints

#### 1.1 List Posts
- **Endpoint:** `GET /api/blog/posts`
- **Description:** Retrieve a paginated list of blog articles with optional keyword search, category, tag, and publish status filters.
- **Query Parameters:**
  - `page` (integer, optional, default: `1`): Page number.
  - `limit` (integer, optional, default: `10`): Items per page.
  - `search` (string, optional): Search keyword matched against `title`, `excerpt`, and `content`.
  - `category` (string, optional): Category slug filter.
  - `tag` (string, optional): Tag slug filter.
  - `status` (string, optional, values: `all` | `published` | `draft`, default: `published`).
- **Response 200 OK:**
```json
{
  "success": true,
  "data": {
    "posts": [
      {
        "id": "cm3e7...",
        "title": "The elevator pitch for business entrepreneurs",
        "slug": "the-elevator-pitch-for-business-entrepreneurs",
        "excerpt": "An elevator pitch is the fastest way to describe what your startup does...",
        "coverImage": "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
        "published": true,
        "readTimeMin": 3,
        "views": 42,
        "publishedAt": "2024-05-01T00:00:00.000Z",
        "authorName": "Tactyqal Team",
        "authorRole": "Founder & Mentor",
        "category": {
          "id": "cat_1",
          "name": "Startup Strategy",
          "slug": "startup-strategy"
        },
        "tags": [
          { "id": "tag_1", "name": "Pitching", "slug": "pitching" }
        ]
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 6,
      "totalPages": 1
    }
  }
}
```

---

#### 1.2 Get Post by Slug or ID
- **Endpoint:** `GET /api/blog/posts/[slug]`
- **Description:** Retrieve a single post by slug (for reader) or ID (for editor). Automatically increments view counter when fetched by slug.
- **Path Parameters:**
  - `slug` (string, required): The URL slug or UUID of the post.
- **Response 200 OK:**
```json
{
  "success": true,
  "data": {
    "id": "cm3e7...",
    "title": "The elevator pitch for business entrepreneurs",
    "slug": "the-elevator-pitch-for-business-entrepreneurs",
    "excerpt": "An elevator pitch is the fastest way to describe...",
    "content": "Full Markdown/HTML content...",
    "coverImage": "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    "published": true,
    "readTimeMin": 3,
    "views": 43,
    "createdAt": "2024-05-01T00:00:00.000Z",
    "updatedAt": "2024-05-01T00:00:00.000Z",
    "authorName": "Tactyqal Team",
    "authorRole": "Founder & Mentor",
    "category": {
      "id": "cat_1",
      "name": "Startup Strategy",
      "slug": "startup-strategy"
    },
    "tags": [
      { "id": "tag_1", "name": "Pitching", "slug": "pitching" }
    ],
    "relatedPosts": [
      {
        "id": "cm3e8...",
        "title": "How to build a tech startup team?",
        "slug": "how-to-build-a-tech-startup-team",
        "excerpt": "In the early days, the fewer employees, the better...",
        "coverImage": "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
      }
    ]
  }
}
```
- **Response 404 Not Found:**
```json
{
  "success": false,
  "error": "Post not found"
}
```

---

#### 1.3 Create Post
- **Endpoint:** `POST /api/blog/posts`
- **Description:** Create a new blog post. Automatically generates slug if not provided and calculates estimated reading time.
- **Request Body (JSON):**
```json
{
  "title": "10 Lessons from Launching on Product Hunt",
  "slug": "10-lessons-from-launching-on-product-hunt",
  "excerpt": "Key takeaways from helping our teen builders reach the top 5 on Product Hunt.",
  "content": "Detailed markdown content with tips and strategies...",
  "coverImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  "published": true,
  "authorName": "Tactyqal Team",
  "categoryId": "cat_1",
  "tags": ["Product Hunt", "Marketing", "Launch"]
}
```
- **Validation Rules (Zod):**
  - `title`: required, min 3 characters, max 150 characters.
  - `excerpt`: required, min 10 characters, max 300 characters.
  - `content`: required, min 20 characters.
  - `categoryId`: optional string.
  - `tags`: optional array of strings (auto-upserted as tags).
- **Response 201 Created:**
```json
{
  "success": true,
  "message": "Post created successfully",
  "data": {
    "id": "cm3e9...",
    "slug": "10-lessons-from-launching-on-product-hunt",
    "title": "10 Lessons from Launching on Product Hunt"
  }
}
```
- **Response 400 Bad Request:**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    { "field": "title", "message": "Title must be at least 3 characters" }
  ]
}
```

---

#### 1.4 Update Post
- **Endpoint:** `PUT /api/blog/posts/[id]`
- **Description:** Update an existing post by ID.
- **Path Parameters:**
  - `id` (string, required): The UUID of the post.
- **Request Body (JSON):** Partial or full post fields.
- **Response 200 OK:**
```json
{
  "success": true,
  "message": "Post updated successfully",
  "data": {
    "id": "cm3e9...",
    "title": "Updated Title",
    "slug": "updated-slug"
  }
}
```

---

#### 1.5 Delete Post
- **Endpoint:** `DELETE /api/blog/posts/[id]`
- **Description:** Permanently delete a blog post and its tag relationships.
- **Path Parameters:**
  - `id` (string, required): The UUID of the post.
- **Response 200 OK:**
```json
{
  "success": true,
  "message": "Post deleted successfully"
}
```

---

### 2. Categories & Tags Endpoints

#### 2.1 List Categories
- **Endpoint:** `GET /api/blog/categories`
- **Response 200 OK:**
```json
{
  "success": true,
  "data": [
    {
      "id": "cat_1",
      "name": "Startup Strategy",
      "slug": "startup-strategy",
      "description": "Guides on ideation, business models, and team building",
      "postCount": 4
    },
    {
      "id": "cat_2",
      "name": "No-Code Development",
      "slug": "no-code-development",
      "description": "Building full-stack apps without traditional coding",
      "postCount": 2
    }
  ]
}
```

#### 2.2 List Tags
- **Endpoint:** `GET /api/blog/tags`
- **Response 200 OK:**
```json
{
  "success": true,
  "data": [
    { "id": "tag_1", "name": "Ideation", "slug": "ideation", "postCount": 3 },
    { "id": "tag_2", "name": "Team", "slug": "team", "postCount": 1 }
  ]
}
```

---

### 3. Admin & Analytics Endpoints

#### 3.1 Get Blog Dashboard Stats
- **Endpoint:** `GET /api/blog/stats`
- **Response 200 OK:**
```json
{
  "success": true,
  "data": {
    "totalPosts": 6,
    "publishedPosts": 6,
    "draftPosts": 0,
    "totalViews": 1420,
    "totalCategories": 4,
    "totalTags": 8
  }
}
```

---

### 4. Consultation & Lead Capture Endpoints

#### 4.1 Book Free Consultation
- **Endpoint:** `POST /api/consultation`
- **Description:** Submit a parent/student consultation request.
- **Request Body (JSON):**
```json
{
  "parentName": "Sunita Sharma",
  "studentName": "Aarav Sharma",
  "email": "sunita.sharma@example.com",
  "phone": "+91-9876543210",
  "studentAge": 15,
  "goalInterest": "College Admissions & App Building",
  "notes": "Looking to build an AI app for environmental science"
}
```
- **Response 201 Created:**
```json
{
  "success": true,
  "message": "Consultation request booked successfully! Our team will contact you within 24 hours.",
  "data": {
    "id": "lead_123",
    "status": "NEW"
  }
}
```
