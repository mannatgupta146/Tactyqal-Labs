# Project Setup & Execution Guide
## Tactyqal Labs Modern Web Platform & Blog Architecture

### Prerequisites
- Node.js 18.17.0+ or Node.js 20+
- npm, pnpm, or yarn
- Git
- *(Optional)* Local MongoDB daemon or MongoDB Atlas URI (a zero-configuration in-memory fallback activates automatically if MongoDB is not running locally).

---

### Quick Start (Local Development)

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd "Tactyqal Labs"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   A `.env` file is provided with sensible development defaults:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/tactyqal
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NODE_ENV=development
   ```

4. **Initialize Database & Seed Real Tactyqal Data:**
   Populate the database with all 6 original Tactyqal blog posts, categories, tags, and local cover image mappings:
   ```bash
   npm run seed
   ```

5. **Start Frontend & Backend Development Servers:**
   ```bash
   npm run dev
   ```
   - **Frontend Platform:** [http://localhost:3000](http://localhost:3000)
   - **Backend REST API:** [http://localhost:5000/api](http://localhost:5000/api)
   - **Public Blog Feed:** [http://localhost:3000/blog](http://localhost:3000/blog)
   - **Admin CMS Dashboard:** [http://localhost:3000/admin/blog](http://localhost:3000/admin/blog)

6. **Run Automated End-to-End API Test Suite:**
   ```bash
   npm run test:api
   ```
   Executes automated tests validating all 8 REST endpoints (health, CRUD operations, analytics stats, lead capture).

7. **Production Build Verification:**
   ```bash
   npm run client:build
   ```

---

### Available Routes & Features

- **`http://localhost:3000/`**: Modern Homepage Redesign (Task 1) featuring all 12 sections:
  - Hero with offer badge, metrics, and dual CTAs
  - Real Students & Apps Gallery (KrishiDrishti, Elenor, One Last Chapter, etc.) with screenshots in `/images/student-apps/`
  - 8-Week Curriculum Interactive Roadmap & Naval Ravikant quote
  - Why Parents Choose Tactyqal Labs (8 feature cards)
  - Interactive Startup Assessment Tools (Idea Generator & Fundability Quiz)
  - Student & Parent Testimonials (100% authentic quotes & photos in `/images/student-reviews/`)
  - Featured Blog Posts Grid (live dynamic feed from backend)
  - Limited Time Pricing Section (₹16,000 offer with money-back guarantee)
  - Interactive FAQ Accordion
  - Contact Section (Symmetric cards, WhatsApp action button, and consultation form)
- **`http://localhost:3000/blog`**: Public Blog Platform (Task 2) with instant search, category filtering, reading time estimates.
- **`http://localhost:3000/blog/[slug]`**: High-typography Blog Article Reader with related posts and share triggers.
- **`http://localhost:3000/admin/blog`**: Blog CMS Management Dashboard for monitoring, editing, publishing, and deleting posts.
- **`http://localhost:3000/admin/blog/editor`**: Create/Edit Post interface with live Markdown preview and auto-slug generator.
- **`http://localhost:5000/api/blog/posts`**: RESTful API endpoints for blog management.
