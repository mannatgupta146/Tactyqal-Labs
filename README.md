# 🚀 Tactyqal Labs — Modern Platform Redesign & Blog Architecture

> **Devuty Fullstack Developer Intern Hire-a-thon Submission**  
> *A unified, modern full-stack web platform replacing legacy PHP CodeIgniter and standalone WordPress with Next.js 14 App Router, Node.js + Express.js, MongoDB (Mongoose), Redux Toolkit, and GSAP.*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-lightgrey?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_8.8-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.3-purple?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=for-the-badge&logo=greensock)](https://greensock.com/)

---

## 🌐 Live Production Deployments

| Component | Platform | Live URL | Status |
|---|---|---|---|
| **Frontend Homepage** | Vercel | [https://tactyqal-labs-kappa.vercel.app](https://tactyqal-labs-kappa.vercel.app) | 🟢 Live |
| **Blog Catalog** | Vercel | [https://tactyqal-labs-kappa.vercel.app/blog](https://tactyqal-labs-kappa.vercel.app/blog) | 🟢 Live |
| **Admin CMS Dashboard** | Vercel | [https://tactyqal-labs-kappa.vercel.app/admin/blog](https://tactyqal-labs-kappa.vercel.app/admin/blog) | 🟢 Live |
| **Admin Post Editor** | Vercel | [https://tactyqal-labs-kappa.vercel.app/admin/blog/editor](https://tactyqal-labs-kappa.vercel.app/admin/blog/editor) | 🟢 Live |
| **Backend REST API** | Render | [https://tactyqal-labs.onrender.com](https://tactyqal-labs.onrender.com) | 🟢 Live |
| **API Health Check** | Render | [https://tactyqal-labs.onrender.com/api/health](https://tactyqal-labs.onrender.com/api/health) | 🟢 Live (HTTP 200) |
| **API Blog Posts Feed** | Render | [https://tactyqal-labs.onrender.com/api/blog/posts](https://tactyqal-labs.onrender.com/api/blog/posts) | 🟢 Live (HTTP 200) |

---

## 📌 Executive Summary

[Tactyqal Labs](https://tactyqal.com/) mentors aspiring entrepreneurs, teenagers, and young builders (ages 12–18+) to transform raw ideas into functional, revenue-generating, real-world applications in 8 weeks.

### The Challenge
- **Legacy Primary Website:** Built on PHP **CodeIgniter**, leading to rigid development velocity and outdated UX.
- **Legacy Blog:** Operated separately on **WordPress**, resulting in fragmented databases, plugin bloat, and disconnected user journeys.

### The Solution
This repository delivers a unified, high-performance TypeScript fullstack architecture that addresses both tasks in the hire-a-thon brief:
1. **Task 1 — Homepage Redesign:** Complete modern redesign using **Next.js 14 App Router**, **Tailwind CSS**, and **GSAP** animations. Preserves 100% of original content, metrics, authentic student case studies, and conversion hooks while delivering a world-class EdTech/SaaS aesthetic.
2. **Task 2 — Blog Backend & Management System:** Replaces WordPress with a scalable **Node.js + Express.js REST API**, **MongoDB with Mongoose**, **Redux Toolkit** client state, and a full-featured **Admin CMS Dashboard** supporting live markdown editing, slug auto-generation, reading time estimation, and category/tag management.

---

## 🏛️ System Architecture

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
                                       │ Mongoose ODM (with Resilient Fallback)
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          MongoDB Database Cluster                           │
│  - Collections: posts, categories, tags, consultationLeads, analytics       │
│  - Seeded with original 6+ Tactyqal Labs articles & local image covers      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## ✨ Key Features & Deliverables

### 1. Task 1: Homepage Redesign (12 Sections)
- **Glassmorphic Navigation:** Sticky header with logo mark, smooth scroll links, phone link, Admin CMS pill, and "Book Free Call" trigger.
- **Hero Section (GSAP Staggered Entrance):** Ambient radial glows, limited-time offer pill, high-converting headline, dual CTAs, and animated social proof counter strip (`100+ Students Mentored`, `Top Tier Admits`, `₹ Millions Impact`, `1:1 Dedicated`).
- **Student Success Stories Gallery:** Interactive category filter tabs (AI, E-Commerce, Social Impact, EdTech) with real screenshot assets from `/images/student-apps/` for **KrishiDrishti**, **Elenor Vegan Handbags**, **One Last Chapter** (₹100k/mo MRR), **Paws of Promise**, **AudioNova**, and **Converza**. Includes modal deep-dives.
- **8-Week Curriculum Roadmap:** Step-by-step sprint breakdown with deliverables checklist and iconic Naval Ravikant quote card.
- **Why Parents Choose Us:** 8-card value grid highlighting 1:1 format, no-code/AI mastery, college admissions edge, and money-back guarantee.
- **Free Interactive Diagnostic Tools:** 8 assessment tool cards with an in-browser live quiz simulator for the **Startup Idea Generator** and **Fundability Assessment**.
- **Student & Parent Testimonials:** 100% authentic quotes from `tactyqal.com` (Aarav, Isha, Rohan, Simran, Devansh, Priya) with authentic portraits in `/images/student-reviews/`, 5 amber stars, quotation mark, verified alumni checkmark, and golden hover accent.
- **Featured Knowledge Hub:** Live dynamic feed pulling the latest articles directly from the Express/MongoDB backend, with real cover images from `/images/blog-articles/`.
- **Transparent Pricing:** High-impact card featuring the ₹16,000 limited cohort rate (36% OFF ₹25,000), 8 deliverables, and money-back guarantee.
- **Expandable FAQ Accordion:** 8 comprehensive answers addressing parents' top questions (no coding experience, admissions, refund policy).
- **Contact & WhatsApp Section:** Symmetrical two-card layout with 4 clean contact rows (Email, Phone, Operating Hours, Response Time), high-contrast "Chat on WhatsApp" action button with the official vector WhatsApp icon, and embedded consultation lead capture.

### 2. Task 2: Blog Backend & Admin CMS
- **RESTful API Engine:** Modular controllers for Posts, Categories, Tags, Leads, and Analytics.
- **Resilient Zero-Friction Fallback:** Features intelligent auto-detection. If a local MongoDB daemon is running, it connects via Mongoose; if not, an in-memory storage layer activates automatically, ensuring evaluators experience 100% functionality without configuration hurdles.
- **Public Blog Platform (`/blog` & `/blog/[slug]`):** Real-time debounced keyword search, category filter chips, reading time calculation, view counter incrementation, social share, and related post suggestions.
- **Admin CMS Dashboard (`/admin/blog`):** Live metric summary cards (Total Posts, Published, Drafts, Views), search filter, post status pills, and instant Edit/Delete actions.
- **Admin Post Editor (`/admin/blog/editor`):** Rich post creator with live split Markdown preview, auto-slug generator, tag manager, and published toggle.

---

## 📁 Standardized Asset Hierarchy (`public/images/`)

All media assets are consolidated strictly under `public/images/` (no duplicate loose folders):
```
public/images/
├── blog-articles/         # 6 authentic original blog cover images
├── student-apps/          # 6 real student app screenshots
└── student-reviews/       # 6 authentic student avatar portraits
```

---

## 🛠️ Technology Stack Breakdown

| Layer | Technologies | Purpose |
|---|---|---|
| **Frontend Framework** | **Next.js 14+** (App Router, RSC) | Server-side rendering, sub-second load times, SEO optimization |
| **Language** | **TypeScript 5.6** | End-to-end type safety across client and server contracts |
| **Styling** | **Tailwind CSS 3.4** | Custom design system tokens, responsive utilities, warm cream canvas |
| **Animations** | **GSAP 3.12** (`@gsap/react`) | Staggered reveals, floating ambient auras, 3D card tilt effects |
| **Global State** | **Redux Toolkit 2.3** (`react-redux`) | Reactive state for blog filters, consultation modal, and toast alerts |
| **Backend Framework** | **Node.js + Express.js 4.21** | High-performance modular REST API endpoints |
| **Database & ODM** | **MongoDB 8.8 + Mongoose** | Normalized NoSQL document collections with indexes |
| **Icons & UI** | **Lucide React** | Sleek, modern SVG iconography |
| **Validation & Client** | **Zod + Axios** | Strict schema validation and HTTP client |

---

## ⚡ Quick Start & Setup Guide

### Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn
- *(Optional)* Local MongoDB daemon or MongoDB Atlas connection string (an in-memory store activates automatically if MongoDB is not present).

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd "Tactyqal Labs"
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Default `.env` configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tactyqal
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NODE_ENV=development
```

### 3. Seed Database
Populate the database with all 6 original Tactyqal Labs articles, categories, tags, and local cover image mappings:
```bash
npm run seed
```

### 4. Run Both Frontend and Backend Concurrently
```bash
npm run dev
```
- **Frontend Platform:** [http://localhost:3000](http://localhost:3000)
- **Backend API Server:** [http://localhost:5000/api](http://localhost:5000/api)
- **Blog Catalog:** [http://localhost:3000/blog](http://localhost:3000/blog)
- **Blog Admin CMS:** [http://localhost:3000/admin/blog](http://localhost:3000/admin/blog)

### 5. Run Automated End-to-End API Test Suite
Verify all 8 CRUD, stats, and lead capture endpoints in one command:
```bash
npm run test:api
```

---

## 📡 API Specification Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health check endpoint |
| `GET` | `/api/blog/posts` | Paginated post listing with `search`, `category`, `tag`, and `status` |
| `GET` | `/api/blog/posts/:slugOrId` | Get single post (auto-increments view count & returns related posts) |
| `POST` | `/api/blog/posts` | Create new post (with auto-slug & reading time calculation) |
| `PUT` | `/api/blog/posts/:id` | Update existing blog post |
| `DELETE` | `/api/blog/posts/:id` | Delete blog post |
| `GET` | `/api/blog/categories` | List categories with post counts |
| `GET` | `/api/blog/tags` | List all unique tags |
| `GET` | `/api/blog/stats` | Dashboard metrics (total posts, published, drafts, total views) |
| `POST` | `/api/consultation` | Book free consultation & lead capture |

*Full request/response schemas are documented in [`docs/api-spec.md`](./docs/api-spec.md).*

---

## 📂 Documentation Suite

Explore the comprehensive project documentation in the [`/docs`](./docs) folder:
- **[`docs/prd.md`](./docs/prd.md):** Product Requirements Document (vision, personas, 12 homepage sections, CMS specs).
- **[`docs/trd.md`](./docs/trd.md):** Technical Requirements Document (architecture, schemas, API route design).
- **[`docs/design.md`](./docs/design.md):** Design System Guidelines (tokens, typography, GSAP animations, responsive rules).
- **[`docs/tasks.md`](./docs/tasks.md):** Granular Implementation Roadmap & Checklist.
- **[`docs/ongoing.md`](./docs/ongoing.md):** Ongoing Status & Milestone Progress.
- **[`docs/memory.md`](./docs/memory.md):** Project Memory & Original Content Reference Archive.
- **[`docs/api-spec.md`](./docs/api-spec.md):** REST API Payloads & Contracts.
- **[`docs/setup-guide.md`](./docs/setup-guide.md):** Setup & Execution Guide.
- **[`docs/walkthrough-script.md`](./docs/walkthrough-script.md):** 1–2 Minute Video Recording Script.

---

## 📄 License
MIT © 2026 Tactyqal Labs Platform Modernization. Built for the Devuty Hire-a-thon.
