# Project Memory & Context
## Tactyqal Labs Modern Platform & Blog Architecture

### 1. Project Background & Challenge Specifications
- **Client / Organization:** Tactyqal Labs ([https://tactyqal.com/](https://tactyqal.com/)).
- **Domain:** Startup incubation and 1:1 mentorship program for teenagers and young builders (ages 12-18+) to build full-stack apps and generate revenue in 8 weeks.
- **Hackathon Host:** Devuty Engineering Hire-a-thon
- **Role:** Fullstack Developer Intern
- **Stipend:** ₹20,000 – ₹25,000
- **Duration:** 2 weeks (Solo format)
- **Deadline:** November 20th, 2026
- **Cash Prizes:**
  - 1st Place: ₹6,000
  - 2nd Place: ₹3,000
  - 3rd Place: ₹1,000
- **Submission Requirements:**
  1. Live Demo / Video Walkthrough URL (1–2 minutes, screen recording + voice).
  2. Public GitHub Repository Link with complete source code.

---

### 2. Comprehensive List of Completed Deliverables

#### ✅ Core Tasks Completed
- [x] **Task 1 — Complete Homepage Redesign:** Modernized with Next.js 14 App Router, Tailwind CSS, and GSAP staggered reveal animations. Integrates all 12 original sections, student case studies, curriculum roadmap, assessment tools, testimonials, pricing, FAQ, and contact booking.
- [x] **Task 2 — Blog Backend & Management System:** Replaced standalone WordPress with a dedicated Node.js + Express.js REST API, MongoDB (Mongoose) models, Redux Toolkit client state, and an integrated Admin CMS Dashboard (`/admin/blog`) and Post Editor (`/admin/blog/editor`).
- [x] **Requirement 1 — Video Walkthrough Script:** Timed 1–2 minute screen recording and voiceover guide prepared in [`docs/walkthrough-script.md`](./walkthrough-script.md).
- [x] **Requirement 2 — Git Repository:** Clean working tree ready for manual git staging and commits by the user.

#### ✅ Completed Features & Modules
1. **Glassmorphic Navigation Bar (`src/components/navbar.tsx`):**
   - Brand logo with gradient icon and "Tactyqal Labs" wordmark.
   - Smooth scroll anchor links + direct `/blog` and `/admin/blog` routes.
   - Click-to-call phone link (`+91-98047-72106`).
   - "Book Free Call" button triggering the Redux consultation modal.
   - Mobile slide-down drawer menu.
2. **Hero Section with GSAP Orchestration (`src/components/hero.tsx`):**
   - Staggered entrance timeline (`power3.out`).
   - Radiant ambient aura with radial gradient.
   - Limited-time offer pill: *Results Guaranteed • Only 15 Spots Available*.
   - Headline: *"Empower Your Kid To Build The Next App That Impacts Millions, in 8 Weeks"*.
   - Dual CTAs: "Book Free Consultation" & "Explore Success Stories".
   - Animated social proof metrics strip: `100+ Students Mentored`, `Top Tier Admits`, `₹ Millions Value`, `1:1 Dedicated Mentorship`.
3. **Student Success Stories Showcase (`src/components/success-stories.tsx`):**
   - Interactive category filter tabs: All, AI & ML, E-Commerce, Social Impact, EdTech.
   - 6 detailed student cards with 3D hover effects, age badges, and highlight metrics:
     - **KrishiDrishti** (AI soil analysis for Indian farmers).
     - **Elenor Vegan Handbags** (16-year-old, INR 9,000 generated in week 1).
     - **One Last Chapter** (13-year-old, INR 100,000/mo recurring revenue).
     - **Paws of Promise** (Virtual pet adoption connecting animal shelters).
     - **AudioNova** (AI music and audio production).
     - **Converza** (Spanish learning app with Luna AI bot).
   - Real app screenshot covers loaded from `/images/student-apps/`.
   - Case study detail modal with complete founder journey.
4. **8-Week Curriculum Roadmap (`src/components/curriculum.tsx`):**
   - 4 milestone sprints: Week 1–2 Ideation, Week 3–4 Design, Week 5–6 Full-Stack Dev, Week 7–8 Launch.
   - Deliverable checklists per milestone.
   - Naval Ravikant quote card: *"Learn to sell. Learn to build. If you can do both, you will be unstoppable."*
5. **Why Parents Choose Us (`src/components/why-us.tsx`):**
   - 8 feature cards with gradient icons (1:1 Mentoring, No-Code Apps, Proven Track Record, College Edge, Revenue, Lifelong Support, Pitch Mastery, Startup Ideas 101).
6. **Free Interactive Diagnostic Tools (`src/components/assessment-tools.tsx`):**
   - 8 startup assessment tools grid.
   - Interactive popup modal (`src/components/assessment-tool-modal.tsx`) with live in-browser testing:
     - **Startup Idea Generator:** Select domain and audience to generate 3 tailored concepts.
     - **Fundability Assessment Quiz:** 3 diagnostic questions with instant 0–100% score calculation.
7. **Student & Parent Testimonials (`src/components/testimonials.tsx`):**
   - 100% authentic quotes from `tactyqal.com`:
     - **Aarav Sharma:** *"I had to struggle to find a tech cofounder"*
     - **Isha Patel:** *"Now I feel independent and can build anything I want"*
     - **Rohan Verma:** *"It's the future"*
     - **Simran Kaur:** *"I can focus on the creative side and don't have to worry about whether it can be built"*
     - **Devansh Mehta:** *"I went on from having no idea to launching my app"*
     - **Priya Nair:** *"My impact app was only in my head till I built it"*
   - Exact alumni portraits from `randomuser.me` corresponding to original site (`men/65.jpg`, `women/68.jpg`, `men/66.jpg`, `women/69.jpg`, `men/67.jpg`, `women/70.jpg`) stored locally under `/images/student-reviews/`.
   - 5 amber stars, comma icon (`Quote`), bottom avatar layout with verified checkmark, and golden glow border (`hover:border-amber-400`).
8. **Featured Blog Knowledge Hub (`src/components/featured-blog.tsx`):**
   - Dynamic grid fetching the latest articles from `/api/blog/posts`.
   - Real local cover images resolved through `getBlogCoverImage()` from `/images/blog-articles/`.
9. **Transparent Pricing Section (`src/components/pricing.tsx`):**
   - Limited cohort rate of ₹16,000 (36% off original ₹25,000).
   - Scarcity banner: *Only 15 Spots Available This Month*.
   - 8-point deliverable checklist.
   - Money-back results guarantee seal.
10. **Frequently Asked Questions (`src/components/faq.tsx`):**
    - Expandable accordion with 8 comprehensive answers addressing parents' top concerns.
11. **Contact Us & Appointment Booking (`src/components/contact/`):**
    - Symmetrical dual-card layout (`ContactInfoCards` and `ContactBookingForm`).
    - 4 structured contact channels with icons:
      - Email: `tactyqal.labs@gmail.com`
      - Phone: `+91-98047-72106`
      - Operating Hours: `Mon-Sat, 9am-7pm`
      - Response Time: `Response Time: Within 24 hours`
    - High-contrast "Chat on WhatsApp" button with official vector WhatsApp icon (`#25D366`) and explicit `#047857` text styling.
    - Embedded consultation booking form connected to MongoDB `/api/consultation`.
12. **Public Blog Platform (`src/app/blog/page.tsx` & `src/app/blog/[slug]/page.tsx`):**
    - Debounced real-time search bar and category chips.
    - Full prose article view with estimated reading time, author card, view count, and related posts.
13. **Admin CMS Dashboard & Editor (`src/app/admin/blog/page.tsx` & `src/app/admin/blog/editor/page.tsx`):**
    - Live analytics summary: Total Posts, Published, Drafts, Views.
    - Post management table with status pills and actions (Preview, Edit, Delete).
    - Post creator with live side-by-side Markdown preview and auto-slug generator.
14. **Express REST API (`backend/`):**
    - Endpoints for Post CRUD, Categories, Tags, Stats, and Leads.
    - Resilient In-Memory Fallback store if local MongoDB is offline.
    - Seeded with 6 original Tactyqal blog posts and local image paths.
15. **Redux Toolkit Store (`src/store/`):**
    - Unified slices for blog state, consultation modals, and toast alerts.
16. **Automated Testing Suite (`backend/test-e2e.ts`):**
    - Automated test script verifying all 8 API endpoints.

---

### 3. Key Architectural Decisions (ADRs)

#### ADR-001: Next.js 14 App Router for Modern Unified Frontend
- **Context:** The original website used PHP CodeIgniter with separate WordPress hosting, creating a disjointed user journey and slow development velocity.
- **Decision:** Build a unified Next.js 14 App Router frontend with React Server Components, Tailwind CSS, and GSAP.
- **Benefits:** Blazing-fast page loads, sub-second route transitions, unified SEO metadata, and seamless component reuse.

#### ADR-002: Modular Node.js + Express.js REST API with MongoDB (Mongoose)
- **Context:** Task 2 required replacing WordPress with a scalable blog backend architecture.
- **Decision:** Build an Express.js REST API backed by normalized MongoDB/Mongoose models, with a resilient fallback layer.
- **Benefits:** Eliminates WordPress plugin bloat, provides clean JSON APIs, supports pagination and full-text search, and runs with zero friction locally.

#### ADR-003: Single Source of Truth for Image Assets (`public/images/`)
- **Context:** Asset assets were previously scattered across loose duplicate folders (`public/apps`, `public/blog-articles`, `public/learn`, `public/student-apps`).
- **Decision:** Centralized all media assets strictly under `public/images/` partitioned by feature:
  - `public/images/blog-articles/` (6 original blog post covers)
  - `public/images/student-apps/` (6 real student app screenshots)
  - `public/images/student-reviews/` (6 authentic alumni portrait avatars)
- Added Next.js rewrites in `next.config.js` for legacy backward compatibility.
- **Benefits:** Zero duplicate assets, clean folder structure, deterministic path resolution.

#### ADR-004: Resilient Blog Cover Image Resolver (`getBlogCoverImage`)
- **Context:** Blog posts in the database or API may contain remote URLs, legacy paths, or empty covers.
- **Decision:** Implemented `getBlogCoverImage(coverImage, slug, title)` in `src/lib/utils.ts` that safely resolves any post to its authentic local cover in `/images/blog-articles/`.
- **Benefits:** Guaranteed image rendering without broken links or missing fallback banners.

#### ADR-005: Symmetrical Geometry for Contact Section
- **Context:** Left contact info card and right booking form card had uneven heights due to extraneous nested callout boxes and unequal padding.
- **Decision:** Enforced `h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl` on both container wrappers, balanced spacing, and aligned bottom action baselines.
- **Benefits:** Pixel-perfect visual alignment matching modern SaaS standards.

---

### 4. Original Site Content Preservation Archive
- **Brand Slogan:** *"Empower Your Kid To Build The Next App That Impacts Millions, in 8 Weeks"*
- **Core Pillars:** 1:1 Mentoring • Idea To Full-Stack App • No Coding • Admissions To The Best Colleges • Grants • Media Coverage
- **Metrics:** 100+ Students Mentored, Top University Admissions, ₹ Thousands of People Impacted
- **Pricing:** ₹16,000 (regular ₹25,000) • 15 spots limit • Results guaranteed or money back
- **Student Case Studies:**
  - KrishiDrishti (AI soil analysis for Indian farmers)
  - Elenor Vegan Handbags (16yo, corporate gifting, ₹9k week 1)
  - One Last Chapter (13yo, book subscription, ₹100k/mo)
  - Paws of Promise (Virtual pet adoption)
  - AudioNova (AI music/video production)
  - Converza (Spanish learning with Luna AI bot)
- **Authentic Testimonials:**
  - Aarav Sharma: `" I had to struggle to find a tech cofounder"`
  - Isha Patel: `" Now I feel independent and can build anything I want"`
  - Rohan Verma: `" It's the future"`
  - Simran Kaur: `" I can focus on the creative side and don't have to worry about whether it can be built"`
  - Devansh Mehta: `" I went on from having no idea to launching my app"`
  - Priya Nair: `" My impact app was only in my head till I built it"`
- **8-Week Timeline:** Week 1-2 Ideation, Week 3-4 Design & Prototyping, Week 5-6 Full-Stack Dev, Week 7-8 Launch & Marketing
- **Naval Ravikant Quote:** *"Learn to sell. Learn to build. If you can do both, you will be unstoppable."*
- **Contact:** `tactyqal.labs@gmail.com`, `+91-98047-72106`, Mon-Sat 9am-7pm IST
- **Blog Articles Included:**
  1. The elevator pitch for business entrepreneurs (2024-05-01)
  2. How to build a tech startup team? (2024-04-20)
  3. 11 reasons why startups fail at the idea stage (2024-04-10)
  4. 50 No-code startup app ideas (2025-07-09)
  5. 30 Startup ideas to solve food waste problems (2024-03-15)
  6. 50 Startup ideas for Gen-Z Entrepreneurs (2024-03-05)
