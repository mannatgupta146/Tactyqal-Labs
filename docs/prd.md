# Product Requirements Document (PRD)
## Tactyqal Labs Platform Modernization & Blog Architecture

### 1. Executive Summary
**Tactyqal Labs** is an EdTech and Startup Incubator platform that mentors aspiring entrepreneurs, teenagers, and young builders to transform ideas into functional, revenue-generating, real-world applications in 8 weeks.
Currently, Tactyqal Labs operates with:
- A legacy frontend built on **CodeIgniter** (PHP).
- A disconnected blog running separately on **WordPress**.

This project modernizes Tactyqal Labs by building:
- **Task 1 — Homepage Redesign:** Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, and **GSAP** for cutting-edge animations and micro-interactions.
- **Task 2 — Blog Backend & Management System:** Powered by **Node.js + Express.js**, **MongoDB (Mongoose)**, **Redux Toolkit** for client state, and a full-featured Admin CMS for creating, reading, updating, and deleting blog content.

---

### 2. Objectives & Goals
1. **Homepage Redesign (Task 1):**
   - Modernize the visual identity with a world-class EdTech/SaaS aesthetic (inspired by Linear, Stripe, Vercel).
   - Retain 100% of the original messaging, social proof, student case studies, and conversion hooks from [tactyqal.com](https://tactyqal.com/).
   - Add **GSAP** animations (staggered hero reveal, interactive 3D card tilt, animated counters, smooth scroll effects).
   - Improve responsive UX, mobile accessibility, page load performance (Core Web Vitals), and conversion rates for "Book Free Consultation" and "Enroll Now".
   - Include interactive elements: interactive curriculum roadmap, success story modal showcases, free startup assessment tools, dynamic pricing calculator, and student reviews.

2. **Blog Backend & Management Architecture (Task 2):**
   - Eliminate WordPress dependency and database fragmentation.
   - Design a normalized MongoDB/Mongoose schema (Posts, Categories, Tags, ConsultationLeads, Analytics).
   - Build a production-ready **Node.js + Express.js REST API** with pagination, full-text search, category/tag filtering, and full CRUD.
   - Utilize **Redux Toolkit** for unified state management across search queries, active categories, modal popups, and toast alerts.
   - Provide both a **Public Blog Reader** (rich typography, reading time estimates, SEO tags) and an **Admin CMS Interface** (post creation, live markdown editing, publishing workflow, delete/edit actions).

3. **Hackathon Deliverables:**
   - Production-ready GitHub Repository with clean Git history and modular architecture.
   - Comprehensive documentation (`/docs`, `README.md`, setup scripts).
   - Deployment ready (Vercel / Railway / Render) and video walkthrough plan.

---

### 3. Target Audience & Personas
| Persona | Profile | Core Motivation | Key Feature Touchpoints |
|---|---|---|---|
| **Parents of Teens (12-18)** | Looking for high-impact extracurriculars and college admission edge. | Wants guaranteed results, safety, 1:1 mentorship, ivy-league credentials. | Pricing guarantee, 1:1 mentoring highlights, university admission badges, FAQ, direct WhatsApp/call booking. |
| **Aspiring Young Builders (13-22)** | Students with app ideas but no tech co-founder or coding background. | Wants to build without spending years learning low-level syntax; wants to launch on Product Hunt and make revenue. | Student success stories (KrishiDrishti, Elenor, One Last Chapter), 8-week roadmap, no-code/fullstack tools. |
| **Startup Enthusiasts & Visitors** | Early-stage founders exploring ideation tools and blog guides. | Free resources, validation tools, insightful articles. | Free Startup Tools (Idea Generator, Pitch Deck Analyzer), high-value Blog articles. |
| **Tactyqal Content Admin / Mentor** | Internal team creating guides, publishing case studies, managing applications. | Fast, reliable publishing without WordPress plugin bloat or maintenance headaches. | Admin Blog CMS dashboard, instant API updates, clean markdown editor. |

---

### 4. Detailed Feature Requirements

#### 4.1 Task 1: Homepage Redesign (Sections & Content)
The homepage must faithfully integrate all original content from tactyqal.com with modern, animated, accessible components:

1. **Header / Navbar:**
   - Brand logo & typography with glow/gradient accent.
   - Nav links: Home, Success Stories, 8-Week Program, Why Us, Free Tools, Blog, Pricing, FAQ.
   - Quick Actions: Phone/WhatsApp contact link, "Book Free Call" CTA button (triggers Redux consultation modal).
   - Mobile responsive slide-over drawer menu.

2. **Hero Section (GSAP Animated):**
   - Badge: *"Limited Time Offer • Results Guaranteed • 15 Spots This Month"*.
   - Headline: *"Empower Your Kid To Build The Next App That Impacts Millions, in 8 Weeks"*.
   - Subheadline: *"1:1 Mentoring • Idea To Full-Stack App • No Coding Required • Admissions To Top Universities • Grants • Media Coverage"*.
   - Metrics Banner (GSAP Counter):
     - **100+** Students Mentored
     - **Top Tier** University Admissions
     - **₹ Millions** Value & Thousands Impacted
     - **1:1** Expert Dedicated Guidance
   - Dual CTAs: "Book Free Consultation" & "Explore Success Stories".
   - Offer banner: *"₹25,000 → ₹16,000 (Save ₹9,000)"*.

3. **Real Students. Real Apps. Real Success (Case Studies Gallery):**
   - Showcase cards with tags, descriptions, revenue/impact stats, and founder age:
     - **KrishiDrishti:** AI-powered soil analysis & crop recommendation impacting local Indian farmers.
     - **Elenor Vegan Handbags:** Corporate gifting platform by a 16-year-old; ₹9,000 generated in week 1.
     - **One Last Chapter:** Kids book subscription service by a 13-year-old; ₹100,000/month recurring revenue.
     - **Paws of Promise:** Virtual pet adoption connecting pet lovers with animal shelters.
     - **AudioNova:** AI music & video generation studio.
     - **Converza:** Spanish learning application featuring Luna, the AI conversational bot.
   - Interactive filtering by category (AI, E-commerce, Social Impact, EdTech).

4. **Curriculum Roadmap ("From Idea to Full App in 8 Weeks"):**
   - Interactive vertical timeline with GSAP progressive highlight:
     - **Week 1-2: Ideation & Market Research:** Problem-solution fit, competitor teardown, user interviews.
     - **Week 3-4: Design & Prototyping:** UI/UX design in Figma, wireframing, clickable high-fidelity prototypes.
     - **Week 5-6: Full-Stack / No-Code Development:** Modern databases, logic, integrations, AI agent workflows.
     - **Week 7-8: Launch & Marketing:** Product Hunt launch, monetization setup, pitch deck & PR distribution.
   - Featured quote card: *"Learn to sell. Learn to build. If you can do both, you will be unstoppable."* — Naval Ravikant.

5. **Why Parents & Students Choose Tactyqal Labs (Value Grid):**
   - 8 distinct feature cards with sleek icons:
     1. 1:1 Personalized Mentoring (No group classes)
     2. Full Stack App with No-Code & Modern AI
     3. Proven Track Record (50+ successful alumni)
     4. University Admission Edge (Standout extracurriculars)
     5. Revenue Generation & Real Customer Acquisition
     6. Lifelong Alumni & Community Support
     7. Pitch & Presentation Mastery (Product Hunt & Demo Day)
     8. Startup Ideas 101 & Founder Validation Framework

6. **Free Startup Assessment Tools (Interactive Widget Section):**
   - 8 interactive diagnostic tools used by 1000+ entrepreneurs:
     - Startup Idea Generator
     - Fundability Assessment Quiz
     - Team Evaluation Tool
     - Pitch Deck Analyzer
     - Top 10 Traits For Business Success
     - Co-founder Compatibility Test
     - Problem-Solution Fit Matrix
     - Website Landing Page Audit
   - Interactive demo / modal allowing visitors to test an assessment live.

7. **Student & Parent Testimonials Carousel:**
   - Verified feedback cards from Aarav Sharma, Isha Patel, Rohan Verma, Simran Kaur, Devansh Mehta, Priya Nair with avatars, ratings, and quotes.

8. **Featured Blog / Knowledge Hub Preview:**
   - Live grid fetching latest posts directly from the new Express + MongoDB Blog API.
   - Includes real articles: "The elevator pitch for business entrepreneurs", "How to build a tech startup team", "11 reasons why startups fail", "50 No-code startup app ideas", etc.

9. **Transparent Pricing Section:**
   - Single comprehensive plan card highlighting:
     - Price: ₹16,000 (strikethrough ₹25,000).
     - Benefits breakdown: 8 weeks of 1:1 mentoring, full-stack app, Product Hunt launch, pitch deck, marketing strategy, ongoing support, money-back results guarantee.
     - Scarcity indicator: "Only 15 spots available for this cohort".
     - Primary Action: "Enroll Now" / "Schedule Parent Call".

10. **Frequently Asked Questions (Accordion):**
    - 8 expandable questions addressing parents' top concerns (no coding experience, university admissions, types of apps, time commitment, revenue feasibility, refund policy).

11. **Lead Generation & Contact Section:**
    - Contact card: `tactyqal.labs@gmail.com`, `+91-98047-72106`, Hours: Mon-Sat 9am-7pm IST.
    - Embedded Consultation Booking Form with real-time feedback and validation.

12. **Footer:**
    - Navigation columns, social links, copyright disclaimer, Devuty hire-a-thon badge.

---

#### 4.2 Task 2: Blog Backend & Management System
1. **Node.js + Express.js API Engine:**
   - Modular architecture: `/backend/routes`, `/backend/controllers`, `/backend/models`, `/backend/config`.
   - REST endpoints:
     - `GET /api/blog/posts` (pagination, search query, category filter, tag filter, status filter).
     - `GET /api/blog/posts/:slugOrId` (fetch single post by slug, increment view counter).
     - `POST /api/blog/posts` (create new post with Zod validation).
     - `PUT /api/blog/posts/:id` (update existing post).
     - `DELETE /api/blog/posts/:id` (safe deletion).
     - `GET /api/blog/categories` & `GET /api/blog/tags`.
     - `GET /api/blog/stats` (total posts, total views, category distribution).
     - `POST /api/consultation` (book lead).
2. **Frontend Public Blog View (`/blog` and `/blog/[slug]`):**
   - Filter by categories and search bar with Redux debounced state.
   - Clean, readable typography (Prose styling, estimated reading time, author card, social sharing buttons).
   - Related articles recommendations.
3. **Frontend Admin CMS Dashboard (`/admin/blog`):**
   - Post list table with statuses (Published, Draft), view counts, quick Edit/Delete actions.
   - Post Editor modal/page with Title, Slug generator, Excerpt, Markdown/Rich content input, Cover image URL, Category selector, Tag multi-input, and Publish toggle.
   - Pre-seeded with the real 6+ Tactyqal Labs blog posts from the original website.
