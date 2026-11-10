# Technical Requirements Document (TRD)
## Tactyqal Labs Modern Platform & Blog Architecture

### 1. Technology Stack Specification
The platform replaces the legacy dual-stack setup (PHP CodeIgniter + WordPress) with an end-to-end modern TypeScript architecture:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND LAYER                                 │
│  • Framework: Next.js 14.2 (App Router, React 18, Server Components)        │
│  • Language: TypeScript 5.6 (strict mode)                                  │
│  • Styling: Tailwind CSS 3.4 + @tailwindcss/typography                     │
│  • Animations: GSAP 3.12 + @gsap/react (Timelines & Staggered Reveals)     │
│  • State Management: Redux Toolkit 2.3 + React-Redux 9.1                   │
│  • Iconography: Lucide React 0.454                                         │
│  • HTTP Client: Axios 1.7                                                  │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ HTTP / REST Calls
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                               BACKEND LAYER                                 │
│  • Runtime: Node.js 20+                                                     │
│  • Web Framework: Express.js 4.21                                          │
│  • Middleware: CORS, express.json (10MB payload limit), custom logger       │
│  • Validation: Zod 3.23 (schema validation on mutations)                   │
│  • Execution & Dev: TSX 4.19 (high-speed TypeScript execution & watch)      │
│  • Orchestration: Concurrently 9.1 (runs frontend & backend together)      │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Mongoose ODM
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              DATABASE LAYER                                 │
│  • Primary Database: MongoDB 8.8 (NoSQL Document Store)                     │
│  • Object Data Modeling: Mongoose 8.8                                       │
│  • Collections: posts, categories, tags, consultationLeads, analytics       │
│  • Resilient In-Memory Fallback: Integrated fallback data layer ensuring    │
│    the application runs seamlessly even if local MongoDB is offline         │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Detailed Package Inventory
| Package Name | Version | Role in Project |
|---|---|---|
| `next` | `14.2.16` | React production framework with App Router, SSR, and dynamic route optimization |
| `react` / `react-dom` | `18.3.1` | Core UI rendering library |
| `typescript` | `5.6.3` | Static typing across all client components, API routes, and database models |
| `tailwindcss` | `3.4.15` | Utility-first CSS framework with custom dark theme tokens |
| `@tailwindcss/typography` | `0.5.15` | Prose typography styles for Markdown blog article rendering |
| `gsap` | `3.12.5` | High-performance animation engine for hero entrance and scroll effects |
| `@gsap/react` | `2.1.1` | Official GSAP hook wrapper (`useGSAP`) for safe React lifecycle animations |
| `@reduxjs/toolkit` | `2.3.0` | Global state management for blog search, category filters, and modals |
| `react-redux` | `9.1.2` | React bindings for Redux Toolkit store |
| `express` | `4.21.1` | REST API web server for blog CRUD, categories, and consultation leads |
| `mongoose` | `8.8.0` | Elegant MongoDB object modeling for Node.js |
| `cors` | `2.8.5` | Cross-Origin Resource Sharing middleware |
| `dotenv` | `16.4.5` | Environment variable loader (`.env`) |
| `lucide-react` | `0.454.0` | Comprehensive icon library |
| `axios` | `1.7.7` | Promise-based HTTP client for data fetching |
| `clsx` / `tailwind-merge` | `2.1.1` / `2.5.4` | Conditional and conflict-free Tailwind class composition |
| `concurrently` | `9.1.0` | Runs both client (port 3000) and server (port 5000) concurrently |
| `tsx` | `4.19.2` | TypeScript executor for Express server, seeder, and automated test suite |

---

### 2. Database Schema Design (MongoDB & Mongoose)

#### 2.1 Post Schema (`backend/models/Post.ts`)
```typescript
{
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true }, // Rich Markdown or HTML formatted content
  coverImage: { type: String, default: "https://images.unsplash.com/..." },
  published: { type: Boolean, default: true, index: true },
  featured: { type: Boolean, default: false },
  readTimeMin: { type: Number, default: 3 },
  views: { type: Number, default: 0 },
  author: {
    name: { type: String, default: "Tactyqal Team" },
    avatar: { type: String, default: "https://images.unsplash.com/..." },
    role: { type: String, default: "Mentor & Founder" }
  },
  category: {
    name: { type: String, required: true },
    slug: { type: String, required: true, index: true }
  },
  tags: [{ type: String, index: true }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  publishedAt: { type: Date, default: Date.now }
}
```

#### 2.2 Category Schema (`backend/models/Category.ts`)
```typescript
{
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true, index: true },
  description: { type: String, default: "" },
  postCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
}
```

#### 2.3 Consultation Lead Schema (`backend/models/ConsultationLead.ts`)
```typescript
{
  parentName: { type: String, required: true, trim: true },
  studentName: { type: String, default: "" },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  studentAge: { type: Number },
  goalInterest: { type: String, default: "1:1 App Building & Mentoring" },
  notes: { type: String, default: "" },
  status: { type: String, enum: ["NEW", "CONTACTED", "SCHEDULED", "CLOSED"], default: "NEW" },
  createdAt: { type: Date, default: Date.now }
}
```

---

### 3. Redux Toolkit State Architecture
The global client state is organized into two primary slices:

1. **`blogSlice` (`src/store/blogSlice.ts`):**
   - `searchQuery`: Debounced string bound to the live search bar on `/blog`.
   - `selectedCategory`: Active category slug for instant client-side filtering.
   - `selectedTag`: Tag filter selection.
   - `posts` & `categories`: Cache of retrieved blog entities.
   - `isLoading` & `error`: Status flags for asynchronous operations.

2. **`uiSlice` (`src/store/uiSlice.ts`):**
   - `isConsultationModalOpen`: Boolean controlling the global consultation appointment popup.
   - `consultationInitialInterest`: Contextual pre-fill string passed from the calling CTA button.
   - `selectedAssessmentTool`: Name of the active interactive startup diagnostic tool (Idea Generator vs Fundability Quiz).
   - `toast`: Notification payload (`message`, `type: success | error | info`) with automatic 5-second timer dismissal.
   - `mobileNavOpen`: Responsive navigation drawer toggle state.

---

### 4. GSAP Animation Architecture
GSAP is implemented cleanly using the modern `@gsap/react` hook with scoped references:
- **Hero Entrance Timeline:** Staggered sequence animating the scarcity badge, headline, subtitle, offer pill, CTA buttons, and metric cards with `power3.out` easing.
- **Micro-Interactions:** 3D card tilt transitions, floating ambient radiant glows, and interactive hover states.

---

### 5. Backend REST API Structure & Endpoints

| Method | Endpoint | Query / Body Parameters | Response |
|---|---|---|---|
| `GET` | `/api/health` | None | `{ status: "ok", timestamp: "..." }` |
| `GET` | `/api/blog/posts` | `?page=1&limit=10&search=&category=&tag=&status=published` | Paginated posts array + pagination metadata |
| `GET` | `/api/blog/posts/:slugOrId`| Post slug or UUID in path | Full post object + related posts (auto-increments views) |
| `POST` | `/api/blog/posts` | `{ title, excerpt, content, categoryName, tags, published, coverImage }` | 201 Created with new post object |
| `PUT` | `/api/blog/posts/:id` | Partial or complete post fields | 200 OK with updated post object |
| `DELETE` | `/api/blog/posts/:id` | Post ID in path | 200 OK with success confirmation |
| `GET` | `/api/blog/categories` | None | Array of all categories with post counts |
| `GET` | `/api/blog/tags` | None | Array of all unique tag strings |
| `GET` | `/api/blog/stats` | None | `{ totalPosts, publishedPosts, draftPosts, totalViews, categoriesCount }` |
| `POST` | `/api/consultation` | `{ parentName, email, phone, studentAge, studentName, notes }` | 201 Created with booked lead confirmation |

---

### 6. Automated Verification & Testing
- **Client Build Test:** Verified via `npm run client:build` compiling all 7 routes without errors.
- **End-to-End API Test:** Automated test suite in `backend/test-e2e.ts` (`npm run test:api`) verifying all 8 endpoints (health, list, get single, create, update, delete, stats, lead capture).
