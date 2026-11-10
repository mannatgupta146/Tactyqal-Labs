# Technical Requirements Document (TRD)
## Tactyqal Labs Modern Platform & Blog Architecture

### 1. Technology Stack Architecture
Based on the project requirements and modern full-stack standards, the application leverages:

- **Frontend:**
  - **Framework:** Next.js 14+ (App Router, React 18, React Server Components + Client Components)
  - **Language:** TypeScript 5.x
  - **Styling:** Tailwind CSS with custom dark/radiant theme tokens and `@tailwindcss/typography`
  - **Animations & Micro-interactions:** **GSAP** (`gsap`, `@gsap/react`) for smooth reveals, glowing cursor effects, timeline transitions, and scroll animations
  - **State Management:** **Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)** for global state (blog filters, consultation modal, active quiz assessment, toast notifications)
  - **Icons & UI Primitives:** Lucide React icons, Radix-style UI components
- **Backend & API:**
  - **Runtime & Server:** **Node.js + Express.js** REST API server (with modular controllers, routers, error handling, CORS, and logging)
  - **Next.js API Integration:** Direct API route handlers & proxying to ensure seamless deployment and server-side rendering
  - **Database:** **MongoDB** with **Mongoose ODM**
  - **Resilience / Zero-Friction Demo Mode:** Intelligent fallback & in-memory database support so evaluators can run the project immediately with or without a local MongoDB daemon running
  - **Validation:** Zod validation schemas on both frontend and backend contracts
- **Tooling & Orchestration:**
  - `concurrently` for running Next.js frontend and Express backend concurrently with `npm run dev`
  - `tsx` for high-speed TypeScript execution of server and seed scripts

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Frontend: Next.js 14 + React 18                       │
│  ┌─────────────────────────┐  ┌─────────────────────┐  ┌─────────────────┐  │
│  │ Modern Homepage (GSAP)  │  │ Blog Reader & Admin │  │ Redux Toolkit   │  │
│  │ 12 Interactive Sections │  │ CMS Dashboard       │  │ (Filters/Modal) │  │
│  └────────────┬────────────┘  └──────────┬──────────┘  └────────┬────────┘  │
└───────────────┼──────────────────────────┼──────────────────────┼───────────┘
                │                          │                      │
                │ HTTP API Calls (Axios / Fetch)                  │
                ▼                          ▼                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    Backend API: Node.js + Express.js                        │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ Express Router: /api/blog/posts, /api/blog/categories, /api/leads     │  │
│  │ Middleware: CORS, JSON parser, Zod Validation, Error Handler          │  │
│  └───────────────────────────────────┬───────────────────────────────────┘  │
└──────────────────────────────────────┼──────────────────────────────────────┘
                                       │ Mongoose ODM
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          MongoDB Database Cluster                           │
│  - Collections: posts, categories, tags, consultationLeads, analytics       │
│  - Seeded with original Tactyqal Labs articles & case studies               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 2. Database Schema Design (MongoDB & Mongoose)

#### 2.1 Post Schema (`models/Post.ts`)
```typescript
{
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true }, // Rich markdown or HTML content
  coverImage: { type: String, default: "" },
  published: { type: Boolean, default: true, index: true },
  featured: { type: Boolean, default: false },
  readTimeMin: { type: Number, default: 3 },
  views: { type: Number, default: 0 },
  author: {
    name: { type: String, default: "Tactyqal Team" },
    avatar: { type: String, default: "/avatars/tactyqal.png" },
    role: { type: String, default: "Mentor & Builder" }
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

#### 2.2 Category Schema (`models/Category.ts`)
```typescript
{
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  postCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
}
```

#### 2.3 Consultation Lead Schema (`models/ConsultationLead.ts`)
```typescript
{
  parentName: { type: String, required: true },
  studentName: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  studentAge: { type: Number },
  goalInterest: { type: String },
  notes: { type: String },
  status: { type: String, enum: ["NEW", "CONTACTED", "SCHEDULED", "CLOSED"], default: "NEW" },
  createdAt: { type: Date, default: Date.now }
}
```

---

### 3. State Management Architecture (Redux Toolkit)
The application utilizes Redux Toolkit for clean, reactive global state:
1. **`blogSlice`**:
   - `searchQuery`: Debounced search string for instant post filtering.
   - `selectedCategory`: Active category filter.
   - `selectedTag`: Active tag filter.
   - `currentPage`, `totalPages`, `posts`: Cached blog listing.
   - `activePost`: Currently viewed or edited post.
2. **`uiSlice`**:
   - `isConsultationModalOpen`: Visibility toggle for the "Book Free Consultation" modal.
   - `selectedAssessmentTool`: Currently active interactive startup tool quiz.
   - `toastMessage`: Notification snackbars (success/error alerts).
   - `mobileMenuOpen`: Responsive drawer state.

---

### 4. Animation Architecture (GSAP & ScrollTrigger)
GSAP powers rich, smooth animations across the homepage and blog:
- **Hero Reveal:** Staggered headline, subtitle, metrics strip, and floating background glow orbs.
- **Curriculum Roadmap Timeline:** Progressive milestone line draw and card reveals as the user scrolls.
- **Interactive Hover & Card Tilts:** Subtle 3D tilt effects on student success stories and free startup tool cards.
- **Counters & Stats:** Animated number counting for `100+ Students Mentored`, `₹100,000/mo Revenue`, etc.

---

### 5. Backend Express REST API Structure

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/blog/posts` | Paginated posts with search query, category, tag, status |
| `GET` | `/api/blog/posts/:slugOrId` | Fetch post by slug/ID, increments view count |
| `POST` | `/api/blog/posts` | Create new blog post with Zod validation |
| `PUT` | `/api/blog/posts/:id` | Update existing blog post |
| `DELETE` | `/api/blog/posts/:id` | Delete blog post |
| `GET` | `/api/blog/categories` | List all categories with post counts |
| `GET` | `/api/blog/tags` | List all unique tags |
| `GET` | `/api/blog/stats` | Admin metrics (total posts, total views, drafts) |
| `POST` | `/api/consultation` | Lead capture & consultation booking |

---

### 6. Directory Structure
```
Tactyqal Labs/
├── backend/                    # Node.js + Express + Mongoose Backend
│   ├── config/
│   │   └── db.ts               # MongoDB Mongoose connection & in-memory fallback
│   ├── controllers/
│   │   ├── blogController.ts   # CRUD logic for blog posts
│   │   ├── categoryController.ts
│   │   └── leadController.ts   # Consultation leads
│   ├── models/
│   │   ├── Post.ts             # Mongoose schema
│   │   ├── Category.ts
│   │   └── ConsultationLead.ts
│   ├── routes/
│   │   ├── blogRoutes.ts
│   │   └── leadRoutes.ts
│   ├── seeds/
│   │   └── seedData.ts         # Original Tactyqal blog posts & alumni
│   └── server.ts               # Express application entrypoint
├── src/                        # Next.js 14 Frontend
│   ├── app/
│   │   ├── layout.tsx          # Providers (Redux), fonts, layout
│   │   ├── page.tsx            # Modern Homepage (All 12 sections with GSAP)
│   │   ├── blog/
│   │   │   ├── page.tsx        # Public Blog Catalog
│   │   │   └── [slug]/page.tsx # Blog Post Reader
│   │   └── admin/
│   │       └── blog/
│   │           ├── page.tsx    # Blog CMS Dashboard
│   │           └── editor/page.tsx # Create & Edit Post Editor
│   ├── components/
│   │   ├── navbar.tsx          # Glassmorphism header & Redux modal trigger
│   │   ├── footer.tsx
│   │   ├── hero.tsx            # Hero with GSAP staggered entrance
│   │   ├── success-stories.tsx # Interactive alumni cards
│   │   ├── curriculum.tsx      # 8-week timeline
│   │   ├── why-us.tsx          # Value props grid
│   │   ├── assessment-tools.tsx# Interactive diagnostic tools
│   │   ├── testimonials.tsx    # Parent & student reviews
│   │   ├── pricing.tsx         # Limited offer & guarantee
│   │   ├── faq.tsx             # Accordion
│   │   ├── consultation-modal.tsx
│   │   └── blog/               # Blog UI components
│   ├── store/                  # Redux Toolkit
│   │   ├── index.ts            # Store configuration
│   │   ├── blogSlice.ts        # Blog state & filters
│   │   └── uiSlice.ts          # Modal & UI state
│   ├── lib/
│   │   ├── api.ts              # Axios API client
│   │   └── gsap.ts             # GSAP animation helpers
│   └── styles/
│       └── globals.css
├── docs/                       # Comprehensive documentation suite
├── package.json                # Unified monorepo / fullstack scripts
└── tsconfig.json
```
