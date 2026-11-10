# Implementation Plan & Task Breakdown
## Tactyqal Labs Modern Platform & Blog Architecture

### Tech Stack Overview
- **Frontend:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, GSAP (`gsap`, `@gsap/react`), Redux Toolkit (`@reduxjs/toolkit`, `react-redux`), Lucide React
- **Backend:** Node.js, Express.js REST API, MongoDB + Mongoose, Zod Validation, CORS, Dotenv
- **Tooling:** Concurrently, TSX, Axios

---

### Phase 1: Planning, Documentation & Architecture
- [x] Update PRD (`docs/prd.md`) with Next.js, Tailwind, TypeScript, MongoDB, Express, Node, Redux, GSAP.
- [x] Update TRD (`docs/trd.md`) with Mongoose schemas, Express routes, Redux store slices, GSAP animation hooks.
- [x] Update Design System Guidelines (`docs/design.md`) with GSAP animation rules and component specs.
- [x] Update Implementation Tasks (`docs/tasks.md`).
- [x] Update API Specification (`docs/api-spec.md`).
- [x] Update Project Memory (`docs/memory.md`).
- [x] Update Ongoing Status (`docs/ongoing.md`).

---

### Phase 2: Monorepo & Dependencies Setup
- [x] Configure `package.json` with all required dependencies:
  - Frontend: `next`, `react`, `react-dom`, `tailwindcss`, `lucide-react`, `gsap`, `@gsap/react`, `@reduxjs/toolkit`, `react-redux`, `clsx`, `tailwind-merge`
  - Backend: `express`, `mongoose`, `cors`, `dotenv`, `zod`, `axios`
  - Dev/Build: `typescript`, `@types/node`, `@types/react`, `@types/express`, `@types/cors`, `concurrently`, `tsx`, `nodemon`
- [x] Run `npm install` and verify zero vulnerabilities/conflicts.
- [x] Setup `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.js`.
- [x] Configure `.env` with `PORT=5001`, `MONGODB_URI`, `NEXT_PUBLIC_API_URL=http://localhost:5001/api`.

---

### Phase 3: Express Backend & MongoDB Architecture (Task 2 Core)
- [x] Create MongoDB / Mongoose connection module with automatic in-memory fallback (`backend/config/db.ts`).
- [x] Define Mongoose Models:
  - `backend/models/Post.ts` (title, slug, excerpt, content, coverImage, category, tags, published, views, readTimeMin, author, timestamps).
  - `backend/models/Category.ts` (name, slug, description, postCount).
  - `backend/models/ConsultationLead.ts` (parentName, studentName, email, phone, studentAge, notes, status).
- [x] Implement Express Controllers:
  - `blogController.ts`: `getPosts`, `getPostBySlugOrId`, `createPost`, `updatePost`, `deletePost`, `getStats`.
  - `categoryController.ts`: `getCategories`, `getTags`.
  - `leadController.ts`: `createLead`, `getLeads`.
- [x] Implement Express Routes (`backend/routes/blogRoutes.ts`, `backend/routes/leadRoutes.ts`).
- [x] Implement Express Server (`backend/server.ts`) with CORS, JSON body parser, error middleware.
- [x] Implement Seeder (`backend/seeds/seedData.ts` & `backend/seeds/runSeed.ts`) with all 6 original Tactyqal blog posts.
- [x] Verify backend running and test endpoints.

---

### Phase 4: Redux Toolkit Store Setup
- [x] Create Redux store (`src/store/index.ts`).
- [x] Create `blogSlice.ts` for blog search query, active category, active tag, pagination, and post list caching.
- [x] Create `uiSlice.ts` for consultation booking modal state, active startup tool quiz, and toast notifications.
- [x] Wrap Next.js App in `StoreProvider` (`src/app/providers.tsx`).

---

### Phase 5: Modern Homepage Redesign with GSAP (Task 1)
- [x] Build global layout with modern font styling, responsive metadata, and smooth scrolling.
- [x] **Navbar Component:** Glassmorphism, logo mark, navigation links, mobile menu drawer, quick consultation CTA triggering Redux modal.
- [x] **Hero Section (GSAP Staggered Entrance):**
  - Radiant animated background glow.
  - Headline & subheadline reveals.
  - Animated number counters for metrics (100+ students, top universities, ₹ millions value, 1:1 format).
  - Dual CTAs (Consultation Modal trigger, Scroll to Success Stories).
  - Discounted pricing badge snippet (₹16,000 limited offer).
- [x] **Success Stories Section:**
  - Interactive filter tabs (All, AI & ML, E-Commerce, Social Impact, EdTech).
  - Cards with 3D tilt effects for KrishiDrishti, Elenor Vegan Handbags, One Last Chapter, Paws of Promise, AudioNova, Converza.
  - Case study deep-dive modal.
- [x] **8-Week Curriculum Section:**
  - GSAP progressive scroll line draw.
  - 4 milestone sprints: Week 1-2, Week 3-4, Week 5-6, Week 7-8.
  - Naval Ravikant quote card with styled typography.
- [x] **Why Us Section:**
  - 8 distinct feature cards with sleek hover animations.
- [x] **Free Startup Assessment Tools Section:**
  - 8 diagnostic tools grid.
  - Interactive quiz popups for "Startup Idea Generator" and "Fundability Assessment" with instant live score calculation.
- [x] **Testimonials Section:**
  - Student & parent quote cards (Aarav, Isha, Rohan, Simran, Devansh, Priya) with avatars and verified badges.
- [x] **Featured Blog Section:**
  - Live grid fetching latest posts directly from Express + MongoDB backend.
- [x] **Pricing Section:**
  - Limited offer highlight (15 spots left).
  - Discounted pricing card (₹25,000 -> ₹16,000).
  - 8-point deliverable checklist & money-back results guarantee seal.
- [x] **FAQ Section:**
  - Expandable accordion items for 8 top parent questions.
- [x] **Contact & Free Consultation Booking Section:**
  - Direct contact cards (Email, Phone, Operating Hours).
  - Interactive booking form connected to backend lead capture.
- [x] **Footer:** Links, legal, copyright, and Devuty submission badge.

---

### Phase 6: Modern Blog System & Admin CMS (Task 2 Frontend)
- [x] **Public Blog Catalog (`/blog`):**
  - Search bar with instant real-time filtering connected to Redux.
  - Category selector chips.
  - Grid of blog posts with reading time, category tag, and date.
  - Link to Admin CMS.
- [x] **Blog Post Reader (`/blog/[slug]`):**
  - Full article view with prose formatting.
  - Author bio card and share buttons.
  - Related articles recommendation grid.
- [x] **Admin CMS Dashboard (`/admin/blog`):**
  - Live metrics cards (Total Posts, Total Views, Categories, Published).
  - Post management table with status pills (Published / Draft).
  - Actions: Edit, Delete, View.
  - "New Post" button.
- [x] **Admin Post Editor (`/admin/blog/editor`):**
  - Form fields: Title, Auto-generating Slug, Excerpt, Content (Markdown), Cover Image URL, Category, Tags, Published toggle.
  - Live Markdown preview side-by-side.
  - Full CRUD operations connected to Express backend.

---

### Phase 7: Interactive Modals & Lead Capture
- [x] Build global Consultation Booking Modal triggered from any "Book Free Call" button.
- [x] Connect booking modal to Express backend `/api/consultation` with instant validation and Redux toast feedback.
- [x] Build interactive Startup Idea Generator & Fundability diagnostic widget modal.

---

### Phase 8: Polish, Testing, Git & Submission
- [x] Run full build (`npm run client:build`) and test concurrent execution (`npm run dev`).
- [x] Test all Blog CRUD operations and lead submissions via automated test suite (`npm run test:api`).
- [x] Verify responsiveness on Mobile, Tablet, and Desktop.
- [x] Initialize Git repository with clear commit history.
- [x] Comprehensive `README.md` and Video Walkthrough script.
