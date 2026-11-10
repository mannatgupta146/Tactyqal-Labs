# Project Setup & Execution Guide
## Tactyqal Labs Modern Web Platform

### Prerequisites
- Node.js 18.17.0+ or Node.js 20+
- npm or pnpm or yarn
- Git

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
   A `.env` file will be provided with defaults:
   ```env
   DATABASE_URL="mongodb://localhost:27017/tactyqal"
   PORT=5000
   NEXT_PUBLIC_API_URL="http://localhost:5000/api"
   ```

4. **Initialize Database & Seed Data:**
   Run Prisma migrations and populate the database with the original Tactyqal blog posts:
   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed
   ```

5. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Available Routes & Features

- **`http://localhost:3000/`**: Modern Homepage Redesign (Task 1) featuring all 12 sections:
  - Hero with offer badge, metrics, and dual CTAs
  - Real Students & Apps Gallery (KrishiDrishti, Elenor, One Last Chapter, etc.)
  - 8-Week Curriculum Interactive Roadmap & Naval Ravikant quote
  - Why Parents Choose Tactyqal Labs
  - Interactive Startup Assessment Tools
  - Testimonial Carousel & Review Cards
  - Featured Blog Posts Grid (live from DB)
  - Limited Time Pricing Section (₹16,000 offer with money-back guarantee)
  - Interactive FAQ Accordion
  - Contact Section & Consultation Booking Form
- **`http://localhost:3000/blog`**: Public Blog Platform (Task 2) with instant search, category filtering, reading time estimates.
- **`http://localhost:3000/blog/[slug]`**: High-typography Blog Article Reader with related posts.
- **`http://localhost:3000/admin/blog`**: Blog CMS Management Dashboard for creating, editing, publishing, and deleting posts.
- **`http://localhost:3000/admin/blog/new`**: Create Post interface with live preview.
- **`http://localhost:5000/api/blog/posts`**: RESTful API endpoints for blog management.

---

### Switching to PostgreSQL / Supabase for Production
Simply update `prisma/schema.prisma` datasource provider:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
And set `DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"` in your `.env`.
