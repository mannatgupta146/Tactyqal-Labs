# Project Memory & Context
## Tactyqal Labs Modern Platform & Blog Architecture

### 1. Project Background
- **Client / Organization:** Tactyqal Labs ([https://tactyqal.com/](https://tactyqal.com/)).
- **Domain:** Startup incubation and 1:1 mentorship program for teenagers and young builders (ages 12-18+) to build full-stack apps and generate revenue in 8 weeks.
- **Problem Statement from Challenge Brief:**
  - Existing primary website is built on **CodeIgniter** (PHP).
  - Existing blog runs separately on **WordPress**.
  - Current pain points: Fragmented stacks, maintenance overhead, slow UI/UX, disconnect between blog content and main platform, non-modern frontend aesthetic.
- **Challenge Goal:**
  - **Task 1 — Homepage Redesign:** Modern UI, improved UX, responsive layout, preserving all original content, social proof, and value proposition.
  - **Task 2 — Blog Backend Development:** Scalable database structure, RESTful APIs for CRUD operations, and an integrated frontend interface (public reader + admin CMS) replacing WordPress.

---

### 2. Challenge & Competition Details
- **Hackathon:** Devuty Engineering Hire-a-thon
- **Role:** Fullstack Developer Intern
- **Stipend:** ₹20,000 - ₹25,000
- **Duration:** 2 weeks (Solo format)
- **Cash Prizes:**
  - 1st Place: ₹6,000
  - 2nd Place: ₹3,000
  - 3rd Place: ₹1,000
- **Deadline:** November 20th, 2026
- **Deliverables Required:**
  1. Live Demo / Video Walkthrough URL (1–2 minutes, screen recording + voice).
  2. Public GitHub Repository Link with complete source code.

---

### 3. Key Architectural Decisions (ADRs)

#### ADR-001: Tech Stack Selection
- **Frontend:** Next.js 14+ (App Router), TypeScript, Tailwind CSS.
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) for managing blog search/filters, modal triggers, and toast notifications.
- **Animations:** GSAP (`gsap`, `@gsap/react`) for high-end staggered reveals, scroll effects, and 3D card interactions.
- **Backend:** Node.js + Express.js REST API with CORS, helmet, and Zod validation.
- **Database:** MongoDB + Mongoose ODM.
- **Resilience:** Fallback data layer ensuring zero friction when testing locally even if a local MongoDB instance is not active.

---

### 4. Original Site Content Preservation Reference
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
