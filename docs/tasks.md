# Comprehensive Implementation Tasks & Master Checklist
## Tactyqal Labs Modern Platform & Blog Architecture

### Tech Stack Overview
- **Frontend Framework:** Next.js 14+ (App Router, React 18, Server & Client Components)
- **Language:** TypeScript 5.6 (strict mode, fully typed interfaces)
- **Styling & Design System:** Tailwind CSS 3.4 (`@tailwindcss/typography`, custom dark/radiant tokens)
- **Animations:** GSAP 3.12 (`@gsap/react`, timeline sequences, staggered reveals)
- **Global State Management:** Redux Toolkit 2.3 (`react-redux`, slices for blog filters & UI modals)
- **Backend Runtime & Framework:** Node.js + Express.js 4.21 REST API
- **Database & ODM:** MongoDB + Mongoose 8.8 (with resilient in-memory fallback store)
- **Iconography:** Lucide React
- **Validation & HTTP Client:** Zod 3.23 + Axios 1.7
- **Process Orchestration:** Concurrently 9.1 + TSX 4.19

---

### Phase 1: Planning, Documentation & Specifications
- [x] Create Product Requirements Document (`docs/prd.md`) covering problem statement, personas, and 12 sections.
- [x] Create Technical Requirements Document (`docs/trd.md`) detailing architecture, Mongoose schemas, and endpoints.
- [x] Create Design System Guidelines (`docs/design.md`) detailing colors, tokens, typography, and GSAP animations.
- [x] Create Master Task List (`docs/tasks.md`) with comprehensive phased checklist.
- [x] Create REST API Specification (`docs/api-spec.md`) documenting request/response payloads.
- [x] Create Ongoing Status Tracker (`docs/ongoing.md`).
- [x] Create Project Memory & Context (`docs/memory.md`) archiving completed deliverables and original content.
- [x] Create Setup & Execution Guide (`docs/setup-guide.md`).
- [x] Create 1–2 Minute Video Walkthrough Script (`docs/walkthrough-script.md`) for Requirement 1.

---

### Phase 2: Monorepo & Environment Setup
- [x] Configure `package.json` with Next.js, Express, Mongoose, Redux Toolkit, GSAP, Tailwind, Lucide.
- [x] Configure npm scripts (`dev`, `client:dev`, `client:build`, `server:dev`, `server:start`, `seed`, `test:api`).
- [x] Install dependencies with `npm install` (zero conflicting peer dependencies).
- [x] Configure `tsconfig.json` with strict type checking and `@/*` path aliases.
- [x] Configure `tailwind.config.ts` with custom brand colors (`tactyqal` indigo, violet, cyan, emerald, amber).
- [x] Configure `postcss.config.js` with Tailwind and Autoprefixer.
- [x] Configure `next.config.js` with remote image domains for Unsplash and Tactyqal.
- [x] Create `.env` and `.env.example` with `PORT=5000`, `MONGODB_URI`, `NEXT_PUBLIC_API_URL`.
- [x] Create `.gitignore` ignoring `node_modules`, `.next`, `build`, and logs.

---

### Phase 3: Express Backend & Database Engine (Task 2 Core)
- [x] Build resilient MongoDB connection with Mongoose and automatic In-Memory Fallback (`backend/config/db.ts`).
- [x] Build Mongoose Models:
  - [x] `Post` Model (`backend/models/Post.ts`): title, unique slug, excerpt, content, category, tags, views, read time, author, dates.
  - [x] `Category` Model (`backend/models/Category.ts`): name, slug, description, postCount.
  - [x] `ConsultationLead` Model (`backend/models/ConsultationLead.ts`): parentName, studentName, email, phone, age, goal, notes, status.
- [x] Build Express Controllers:
  - [x] `getPosts` (`backend/controllers/blogController.ts`): pagination, debounced search, category filter, tag filter, status filter.
  - [x] `getPostBySlugOrId` (`backend/controllers/blogController.ts`): view counter auto-increment, related posts recommendation.
  - [x] `createPost` (`backend/controllers/blogController.ts`): input validation, automatic slug uniqueness, reading time calculation.
  - [x] `updatePost` (`backend/controllers/blogController.ts`): update title, content, excerpt, category, tags, status.
  - [x] `deletePost` (`backend/controllers/blogController.ts`): permanent post deletion and taxonomy synchronization.
  - [x] `getBlogStats` (`backend/controllers/blogController.ts`): total posts, published, drafts, total views.
  - [x] `getCategories` & `getTags` (`backend/controllers/categoryController.ts`).
  - [x] `createLead` & `getLeads` (`backend/controllers/leadController.ts`).
- [x] Build Express Routes (`backend/routes/blogRoutes.ts`, `backend/routes/leadRoutes.ts`).
- [x] Build Express Server Entrypoint (`backend/server.ts`): CORS, JSON parser, health check endpoint.
- [x] Build Database Seeder (`backend/seeds/seedData.ts` & `backend/seeds/runSeed.ts`) with all 6 original Tactyqal blog posts:
  - [x] "The elevator pitch for business entrepreneurs"
  - [x] "How to build a tech startup team?"
  - [x] "11 reasons why startups fail at the idea stage"
  - [x] "50 No-code startup app ideas"
  - [x] "30 Startup ideas to solve food waste problems"
  - [x] "50 Startup ideas for Gen-Z Entrepreneurs"
- [x] Build Automated End-to-End API Test Suite (`backend/test-e2e.ts`) verifying all 8 endpoints.

---

### Phase 4: Redux Toolkit Global State Management
- [x] Configure Redux Store (`src/store/index.ts`).
- [x] Implement Typed Redux Hooks (`src/store/hooks.ts` with `useAppDispatch` and `useAppSelector`).
- [x] Implement `blogSlice.ts`:
  - [x] `searchQuery` (real-time debounced query state).
  - [x] `selectedCategory` (active category filter tab).
  - [x] `selectedTag` (tag filtering).
  - [x] `posts`, `categories`, `isLoading`, `error` state.
- [x] Implement `uiSlice.ts`:
  - [x] `isConsultationModalOpen` and `consultationInitialInterest`.
  - [x] `selectedAssessmentTool` (active interactive startup tool popup).
  - [x] `toast` notifications state (message, type: success/error/info).
  - [x] `mobileNavOpen` drawer toggle.
- [x] Create Global `Providers` wrapper (`src/app/providers.tsx`) mounting store and global modals.

---

### Phase 5: Modern Homepage Redesign (Task 1)
- [x] Global layout and styling (`src/app/layout.tsx` & `src/app/globals.css`).
- [x] **Section 1 — Glassmorphic Navbar (`src/components/navbar.tsx`):**
  - [x] Gradient logo mark with rocket icon and "Tactyqal Labs" wordmark.
  - [x] Responsive navigation links (Home, Stories, Program, Why Us, Tools, Blog, Pricing, FAQ, Contact).
  - [x] Admin CMS direct link.
  - [x] Direct phone link (`+91-98047-72106`).
  - [x] "Book Free Call" high-contrast CTA button triggering Redux modal.
  - [x] Mobile drawer slide-down menu.
- [x] **Section 2 — Hero Section with GSAP Animations (`src/components/hero.tsx`):**
  - [x] Ambient radial radiant glow backdrop.
  - [x] Scarcity pill (*Limited Time Offer • Results Guaranteed • 15 Spots*).
  - [x] High-impact headline: *"Empower Your Kid To Build The Next App That Impacts Millions, in 8 Weeks"*.
  - [x] Subtitle with 1:1 format, no coding, top admissions, and grants.
  - [x] Dynamic pricing discount banner: *₹25,000 → ₹16,000 (Save 36%)*.
  - [x] Dual CTAs: "Book Free Consultation" & "Explore Success Stories".
  - [x] Metrics social proof cards (`100+ Students Mentored`, `Top Tier Admits`, `₹ Millions Impact`, `1:1 Dedicated`).
  - [x] GSAP staggered entrance animation with `power3.out` easing.
- [x] **Section 3 — Real Students & Apps Gallery (`src/components/success-stories.tsx`):**
  - [x] Category filter tabs (All, AI & ML, E-Commerce, Social Impact, EdTech).
  - [x] 6 Real Student App cards with 3D hover effects, age badges, and highlight metrics:
    - [x] KrishiDrishti (AI soil analysis, 500+ farmers).
    - [x] Elenor Vegan Handbags (16yo, INR 9,000 week 1).
    - [x] One Last Chapter (13yo, INR 100,000/mo MRR).
    - [x] Paws of Promise (Virtual pet adoption, 50+ pets).
    - [x] AudioNova (AI music & video, 12,000+ tracks).
    - [x] Converza (AI language bot Luna, Product Hunt top 5).
  - [x] Interactive Case Study Modal for reading full founder stories.
- [x] **Section 4 — 8-Week Curriculum Roadmap (`src/components/curriculum.tsx`):**
  - [x] 4 sequential milestone cards (Week 1–2, Week 3–4, Week 5–6, Week 7–8).
  - [x] Checklists for key deliverables per milestone.
  - [x] Naval Ravikant quote card: *"Learn to sell. Learn to build. If you can do both, you will be unstoppable."*
  - [x] Personal 1:1 Live sessions, 1 hour each, expert founder guidance.
- [x] **Section 5 — Why Parents Choose Tactyqal Labs (`src/components/why-us.tsx`):**
  - [x] 8 feature cards with gradient icons (1:1 Mentoring, No-Code Apps, Track Record, College Edge, Revenue, Lifelong Support, Pitch Mastery, Startup Ideas 101).
- [x] **Section 6 — Free Startup Assessment Tools (`src/components/assessment-tools.tsx`):**
  - [x] 8 diagnostic tools grid (Idea Generator, Fundability, Team Evaluation, Pitch Deck Analyzer, Top 10 Traits, Co-founder Test, Problem-Solution Fit, Landing Page Audit).
  - [x] Interactive popup modal (`src/components/assessment-tool-modal.tsx`) with in-browser live generators:
    - [x] Startup Idea Generator (domain + audience picker -> generates 3 custom concepts).
    - [x] Fundability Assessment Quiz (diagnostic questions -> live 0–100% score calculation).
- [x] **Section 7 — Student & Parent Testimonials (`src/components/testimonials.tsx`):**
  - [x] Verified quote cards from Aarav Sharma, Isha Patel, Rohan Verma, Simran Kaur, Devansh Mehta, Priya Nair.
  - [x] 5-star ratings, student avatars, verified badges, and roles.
- [x] **Section 8 — Featured Blog Knowledge Base (`src/components/featured-blog.tsx`):**
  - [x] Dynamic API fetch pulling the latest 3 articles from `/api/blog/posts`.
  - [x] Cover images, reading time, publish dates, and category pills.
  - [x] "Read All Articles" link to `/blog`.
- [x] **Section 9 — Transparent Pricing Section (`src/components/pricing.tsx`):**
  - [x] Price anchor: ₹16,000 (strikethrough ₹25,000, 36% discount).
  - [x] Top scarcity pill: *Only 15 Spots Available for the Month*.
  - [x] 8-item comprehensive deliverable checklist.
  - [x] Money-back results guarantee seal.
  - [x] "Enroll Now / Schedule Consultation" CTA button.
- [x] **Section 10 — Frequently Asked Questions (`src/components/faq.tsx`):**
  - [x] Interactive accordion with 8 comprehensive answers addressing parents' top questions (no coding, admissions guarantee, app types, time commitment, revenue, alumni universities, ongoing support).
- [x] **Section 11 — Contact & Appointment Booking (`src/components/contact-section.tsx`):**
  - [x] Direct contact cards (tactyqal.labs@gmail.com, +91-98047-72106, Mon-Sat 9am-7pm).
  - [x] Embedded Consultation Booking Form with instant API submission and toast feedback.
- [x] **Section 12 — Footer (`src/components/footer.tsx`):**
  - [x] Brand description, directory navigation links, legal, Devuty hire-a-thon badge.

---

### Phase 6: Modern Blog Platform & Admin CMS (Task 2 Frontend)
- [x] **Public Blog Catalog (`src/app/blog/page.tsx`):**
  - [x] Debounced search bar with real-time input.
  - [x] Category selector chips (All Topics, Startup Strategy, Team & Culture, etc.).
  - [x] Featured masterclass highlight banner card.
  - [x] 3-column article cards with reading time, category pill, view count, and author.
  - [x] Direct shortcut button to Admin CMS.
- [x] **Blog Post Reader (`src/app/blog/[slug]/page.tsx`):**
  - [x] Breadcrumb navigation (`Home > Blog > Title`).
  - [x] Full prose article styling with markdown headings, blockquotes, lists.
  - [x] View counter incrementation on visit.
  - [x] Author avatar & bio card, publish date, reading time.
  - [x] Copy link and social share button.
  - [x] Related articles recommendation grid.
  - [x] Bottom CTA card to book 1:1 consultation.
- [x] **Admin CMS Dashboard (`src/app/admin/blog/page.tsx`):**
  - [x] Metric summary cards (Total Articles, Published, Drafts, Total Views).
  - [x] Search filter box and refresh button.
  - [x] Posts data table with title, excerpt, category, status pill, views, and date.
  - [x] Action buttons: Preview live article, Edit article, Delete article with confirmation.
  - [x] "Create New Post" primary action.
- [x] **Admin Post Editor (`src/app/admin/blog/editor/page.tsx`):**
  - [x] Suspense-wrapped for Next.js 14 client-side query parameters.
  - [x] Form inputs: Title, auto-generating URL Slug, Excerpt, Category dropdown, Tags, Cover Image URL.
  - [x] Markdown content textarea.
  - [x] Published toggle (Published vs Draft) & Featured toggle.
  - [x] Live Markdown Preview tab for real-time formatting verification.
  - [x] Handles both Create new and Update existing post flows.

---

### Phase 7: Interactive Modals & Lead Capture
- [x] **Global Consultation Modal (`src/components/consultation-modal.tsx`):**
  - [x] Triggered from any "Book Free Call" button across the platform.
  - [x] Form inputs: Parent Name, Student Name, Email, Phone, Age dropdown, Goal dropdown, Notes.
  - [x] Connects to `/api/consultation` with Redux toast notification.
- [x] **Interactive Assessment Tool Modal (`src/components/assessment-tool-modal.tsx`):**
  - [x] Interactive idea generator: Industry + Target Audience -> 3 custom startup concepts.
  - [x] Interactive fundability quiz: 3 diagnostic questions -> 0-100% score calculation.
- [x] **Toast Notifications Component (`src/components/toast.tsx`):**
  - [x] Displays floating alerts for API successes and errors with auto-dismiss timer.

---

### Phase 8: Quality Assurance, Verification & Submission
- [x] Next.js Client Production Build (`npm run client:build`): 7/7 routes compiled with zero errors.
- [x] Automated End-to-End API Test Suite (`npm run test:api`): All 8 CRUD, stats, and lead endpoints verified 100%.
- [x] Database seeding verified with clean reset script (`npm run seed`).
- [x] Concurrently dev runner tested (`npm run dev`).
- [x] Comprehensive documentation created: `prd.md`, `trd.md`, `design.md`, `tasks.md`, `ongoing.md`, `memory.md`, `api-spec.md`, `setup-guide.md`, `walkthrough-script.md`.
- [x] Comprehensive `README.md` written with architecture diagram, feature summary, and setup guide.
- [x] Initialized Git repository, verified clean working tree, and committed all code.
