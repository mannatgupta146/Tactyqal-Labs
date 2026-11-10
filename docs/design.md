# Design System & UI/UX Guidelines
## Tactyqal Labs Modern Platform Redesign

### 1. Design Concept & Philosophy
The redesign transforms Tactyqal Labs from a dated PHP/WordPress layout into a world-class, premium EdTech & Startup Incubator platform. The aesthetic bridges the authority of an elite educational incubator (like Y Combinator / Stanford d.school) with the playful, modern energy of teen builders (inspired by Linear, Vercel, and Stripe).

#### Core Principles:
1. **Credibility & Trust First:** Prominent social proof, verified student revenue figures, top university badges, and clear refund guarantees build immediate confidence for skeptical parents.
2. **Clarity & High-Contrast Visuals:** Dark slate backdrop with luminous indigo/violet gradients, crisp typography, and high-contrast card borders deliver modern elegance.
3. **Interactive & Tangible:** Don't just tell—show. Interactive curriculum breakdown, live startup diagnostic tools, dynamic pricing calculator, and instant search on the blog make the site feel alive.
4. **Frictionless Conversion:** Sticky consultation CTAs, accessible modal bookings, and clear communication channels (WhatsApp, direct phone, email).

---

### 2. Color Palette & Tokens

```css
:root {
  /* Backgrounds */
  --bg-primary: #090d16;        /* Deep midnight navy/slate */
  --bg-secondary: #0f172a;      /* Slate 900 card surface */
  --bg-tertiary: #1e293b;       /* Slate 800 hover/active surface */
  --bg-glass: rgba(15, 23, 42, 0.75);

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-highlight: rgba(99, 102, 241, 0.3);

  /* Primary Brand Accents */
  --primary-500: #6366f1;       /* Indigo 500 */
  --primary-600: #4f46e5;       /* Indigo 600 */
  --accent-violet: #8b5cf6;     /* Purple / Violet accent */
  --accent-cyan: #06b6d4;       /* Cyan highlight */
  --accent-emerald: #10b981;    /* Emerald for verified badges & revenue */
  --accent-amber: #f59e0b;      /* Amber for limited time deals & ratings */

  /* Text Colors */
  --text-primary: #f8fafc;      /* Slate 50 */
  --text-secondary: #94a3b8;    /* Slate 400 */
  --text-muted: #64748b;        /* Slate 500 */
  --text-inverse: #0f172a;      /* Slate 900 */
}
```

---

### 3. Typography Scale & Hierarchy

- **Font Family:** `Inter`, `Plus Jakarta Sans`, system-ui fallback.
- **Font Scale:**
  - **Hero Display:** `text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]`
  - **Section Headings:** `text-3xl md:text-4xl font-bold tracking-tight text-white`
  - **Subheadings / Card Titles:** `text-xl md:text-2xl font-semibold text-slate-100`
  - **Body Text:** `text-base text-slate-300 leading-relaxed`
  - **Meta / Badges / Captions:** `text-xs uppercase tracking-wider font-medium text-indigo-400`

---

### 4. Key Component Specifications

#### 4.1 Navigation Bar
- **Style:** Sticky glassmorphism (`backdrop-blur-md bg-slate-950/80 border-b border-white/10`).
- **Elements:**
  - Brand logo with gradient icon mark & "Tactyqal Labs" wordmark.
  - Links: Stories, Program, Why Us, Tools, Blog, Pricing, FAQ.
  - Right CTAs: Phone link (+91-98047-72106), "Book Free Call" high-contrast button.
  - Mobile: Slide-over drawer with smooth transition.

#### 4.2 Hero Section
- **Visuals:** Ambient radiant background glow (radial gradient violet/indigo at top-center).
- **Offer Pill:** Subtle animated pill with glowing border (`Limited Time Offer • Results Guaranteed`).
- **Headline:** High impact: *"Empower Your Kid To Build The Next App That Impacts Millions, in 8 Weeks"*.
- **Metrics Strip:** Glass cards showing `100+ Students Mentored`, `Top University Admits`, `₹ Millions Impact`, `1:1 Dedicated Mentorship`.
- **Primary Actions:**
  - Solid gradient button: `Book Free Consultation` (triggers modal).
  - Secondary ghost button: `View Success Stories ↓`.

#### 4.3 Student App Showcase (Success Stories)
- **Grid:** 3-column responsive card grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
- **Card Anatomy:**
  - Top: Category pill (AI / E-commerce / Social Impact / EdTech) + Founder Age badge (e.g., "Built by 13-year-old").
  - Title: App name (e.g. *One Last Chapter*, *KrishiDrishti*).
  - Description: Impact statement.
  - Highlight metric chip: Emerald pill (e.g. `₹100,000/mo Revenue`, `Impacting local farmers`).

#### 4.4 8-Week Interactive Curriculum Timeline
- **Layout:** Alternating / stepped timeline representing 4 distinct two-week sprints.
- **Milestones:**
  1. *Week 1-2:* Ideation & Market Research
  2. *Week 3-4:* Design & Prototyping
  3. *Week 5-6:* Full-Stack No-Code & AI Development
  4. *Week 7-8:* Product Hunt Launch & Marketing
- **Naval Ravikant Quote Card:** Centered elegant card with subtle quotation marks and typography.

#### 4.5 Free Startup Diagnostic Tools
- **Display:** 8 interactive tool cards with preview modal.
- **Tools Included:** Idea Generator, Fundability Assessment, Team Evaluator, Pitch Deck Analyzer, Co-founder Test, Problem-Solution Fit.
- **Interactivity:** Clicking "Try Tool" launches an interactive in-browser diagnostic quiz generating an instant score.

#### 4.6 Pricing Card
- **Layout:** High-focus single tier card with radiant border effect.
- **Elements:**
  - "Limited Offer: Only 15 Spots Available This Month" badge.
  - Strikethrough original price: `₹25,000` -> **`₹16,000`** (36% OFF).
  - Checklist with 7 core value deliverables.
  - Money-back Guarantee seal: *"Results guaranteed or 100% money back"*.

#### 4.7 Blog System UI
- **Catalog View (`/blog`):**
  - Search input with instant filtering.
  - Horizontal category chips (All, Startup Ideas, Strategy, No-Code, Team Building).
  - Featured article card with wide banner + 3-column standard article grid.
- **Article Reader View (`/blog/[slug]`):**
  - Breadcrumb navigation (`Home > Blog > Post Title`).
  - Author info header with estimated read time and publish date.
  - Clean markdown typography with syntax highlighting and blockquotes.
  - Related articles grid at the bottom.
- **Admin CMS Dashboard (`/admin/blog`):**
  - Metric counters: Total Posts, Published, Drafts, Total Reads.
  - Post management table with search, category filtering, and Action menu (Edit, Delete, Preview).
  - Clean Modal/Page editor supporting title, slug auto-generation, excerpt, markdown body, cover image, and category/tag selection.

---

### 5. Responsive Breakpoints
- **Mobile (< 640px):** Single column, collapsible navigation drawer, horizontal scroll chips, sticky mobile CTA bar.
- **Tablet (640px - 1024px):** 2-column grids for cards and blog posts, compact timeline.
- **Desktop (1024px+):** Full 3-column card layouts, expanded navigation, side-by-side hero and metrics.
