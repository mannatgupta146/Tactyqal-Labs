# Design System & UI/UX Guidelines
## Tactyqal Labs Modern Platform Redesign

### 1. Design Concept & Philosophy
The redesign transforms Tactyqal Labs from a dated PHP CodeIgniter and WordPress layout into a world-class, premium EdTech and Startup Incubator platform. The aesthetic bridges the authority of an elite educational accelerator (such as Y Combinator or Stanford d.school) with the sleek, high-velocity energy of modern developer tools (inspired by Linear, Stripe, and Vercel).

#### Core Design Principles:
1. **Credibility & Trust First:** Prominent social proof, verified student revenue figures (e.g. ₹100k/mo MRR), top university badges, and clear refund guarantees build immediate confidence for ambitious parents.
2. **Deep Midnight Canvas with Radiant Glows:** A deep slate backdrop (`#020617`) paired with luminous indigo/violet gradients, crisp white typography, and high-contrast card borders creates high visual hierarchy and eliminates eye strain.
3. **Interactive & Tangible:** Visitors do not just read—they interact. The platform features an interactive curriculum roadmap, 3D card tilt effects, in-browser startup assessment tools, dynamic pricing calculation, and instant search across articles.
4. **Frictionless Conversion:** Sticky glassmorphic navigation, accessible Redux-powered consultation booking modals, and direct phone/WhatsApp contact links provide zero-friction entry points.

---

### 2. Comprehensive Color Palette & Tokens

#### 2.1 Color Tokens & Hex Codes
| Semantic Token | Hex Code | Tailwind Utility | Visual Role / Usage |
|---|---|---|---|
| **Canvas Background** | `#020617` | `bg-slate-950` | Primary application backdrop |
| **Card Surface (Deep)** | `#0f172a` | `bg-slate-900` | Section cards, modal containers, table surfaces |
| **Card Surface (Elevated)**| `#1e293b` | `bg-slate-800` | Input fields, active badges, dropdown surfaces |
| **Surface Hover / Active** | `#334155` | `bg-slate-700` | Button hover states, divider lines |
| **Border Subtle** | `rgba(255,255,255,0.08)` | `border-slate-800` | Card borders, table dividers |
| **Border Active / Glow** | `rgba(99,102,241,0.4)` | `border-indigo-500/40`| Focused cards, highlighted pricing border |
| **Primary Brand Indigo** | `#6366f1` | `text-indigo-500`, `bg-indigo-500` | Main buttons, brand highlights, active tabs |
| **Primary Deep Indigo** | `#4f46e5` | `bg-indigo-600` | Button gradient start, solid CTAs |
| **Accent Violet** | `#8b5cf6` | `text-violet-500`, `bg-violet-500`| Gradient transitions, secondary icons |
| **Cyan Highlight** | `#06b6d4` | `text-cyan-400`, `bg-cyan-500/10` | Free Tools, interactive quizzes, tech pills |
| **Emerald Highlight** | `#10b981` | `text-emerald-400`, `bg-emerald-500/10` | Student revenue stats, success badges, verified checkmarks |
| **Amber Scarcity / Rating**| `#f59e0b` | `text-amber-400`, `bg-amber-500/10` | Star ratings, limited spots pills, draft status |
| **Rose / Coral Accent** | `#f43f5e` | `text-rose-400`, `bg-rose-500/10` | Social impact tags, delete actions, errors |
| **Text Primary** | `#f8fafc` | `text-white` / `text-slate-50` | Primary headlines, titles, active labels |
| **Text Secondary** | `#cbd5e1` | `text-slate-300` | Body copy, descriptions, testimonials |
| **Text Muted** | `#94a3b8` | `text-slate-400` | Captions, metadata, reading time |
| **Text Subtle** | `#64748b` | `text-slate-500` | Dates, placeholders, breadcrumb arrows |

#### 2.2 Gradients & Radiant Auras
```css
/* Ambient Top Hero Glow */
background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 100%);

/* Primary Brand Button Gradient */
background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #7c3aed 100%);

/* Emerald Metric Card Gradient */
background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%);
```

---

### 3. Typography Hierarchy & Scales

- **Font Family:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif.
- **Monospace Family (Slugs, Code, Metrics):** `ui-monospace`, `SFMono-Regular`, `Menlo`, monospace.

| Element | Size & Weight | Tailwind Class String | Leading & Tracking |
|---|---|---|---|
| **Display Hero H1** | 48px – 72px / Black | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold` | `leading-[1.1] tracking-tight` |
| **Section Headings (H2)** | 32px – 48px / Extrabold | `text-3xl sm:text-4xl md:text-5xl font-extrabold text-white` | `leading-tight tracking-tight` |
| **Card Titles (H3)** | 20px – 24px / Bold | `text-xl sm:text-2xl font-bold text-white` | `leading-snug` |
| **Subheadings & Lead Copy** | 16px – 20px / Medium | `text-base sm:text-lg text-slate-300` | `leading-relaxed` |
| **Standard Body Text** | 14px – 16px / Regular | `text-sm sm:text-base text-slate-300` | `leading-relaxed` |
| **Caption & Meta Bar** | 12px – 13px / Medium | `text-xs sm:text-sm text-slate-400` | `leading-normal` |
| **Badges & Overlines** | 10px – 11px / Bold | `text-[10px] sm:text-xs font-bold uppercase tracking-wider` | `tracking-wider` |

---

### 4. UI/UX Component Specifications

#### 4.1 Glassmorphic Sticky Header (`Navbar`)
- **Behavior:** `position: fixed; top: 0; width: 100%;` transitions background from `bg-slate-950/30` to `bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80` on scroll (>20px).
- **Navigation:** Pill container with active link indicator (`bg-indigo-600/30 text-indigo-300`).
- **Interactive Action:** "Book Free Call" button triggers Redux consultation modal with glowing shadow.
- **Mobile Drawer:** Full-screen slide-down drawer with smooth enter/exit animations.

#### 4.2 Hero Section with GSAP Orchestration
- **Visuals:** Ambient top radiant aura with radial gradient and subtle grid overlay.
- **Scarcity Pill:** `bg-indigo-500/10 border-indigo-500/30 text-indigo-300` with animated pulsing sparkle.
- **Metrics Strip:** 4 glassmorphic cards with animated number counters (`100+`, `Top Tier`, `₹ Millions`, `1:1 Live`).
- **GSAP Sequence:** Staggered sequence animating the badge, headline, subtitle, offer pill, CTA buttons, and metric cards with `power3.out` easing.

#### 4.3 Student Success Stories Gallery
- **Category Filter Tabs:** `All`, `AI & ML`, `E-Commerce`, `Social Impact`, `EdTech`.
- **Card Anatomy:**
  - Icon badge with custom gradient background.
  - Founder age pill (e.g. `Built by a 13-year-old`).
  - Student app title & category.
  - 3-line impact description.
  - Emerald highlight metric chip (`INR 100,000/mo Recurring Revenue`, `INR 9,000 in Week 1`).
- **Interaction:** Clicking any card opens a full Case Study Detail Modal with complete founder journey and an action button to "Build An App Like This".

#### 4.4 8-Week Curriculum Roadmap & Naval Quote
- **Sprint Stepper:** 4 sequential milestone cards representing Weeks 1–2, Weeks 3–4, Weeks 5–6, and Weeks 7–8.
- **Deliverables Checklist:** Emerald checkmark bullets for concrete tangible deliverables.
- **Naval Ravikant Quote Card:** Ambient indigo border with quotation marks and high-contrast typography.

#### 4.5 Free Startup Diagnostic Tools
- **8 Tool Cards:** Idea Generator, Fundability Assessment, Team Evaluator, Pitch Deck Analyzer, Top 10 Traits, Co-founder Test, Problem-Solution Fit, Landing Page Audit.
- **Live In-Browser Simulation:** Clicking "Startup Idea Generator" or "Fundability Assessment" opens an interactive modal calculating personalized ideas and grant readiness scores live in the browser.

#### 4.6 Transparent Pricing Card
- **Layout:** High-contrast card with dual-border gradient highlight.
- **Price Anchor:** Strikethrough `₹25,000` with large `₹16,000` (Save 36%).
- **Scarcity Hook:** "Limited Time: Only 15 Spots This Month" top pill.
- **Guarantee Badge:** Shield icon with 100% money-back result guarantee.

#### 4.7 Blog Platform & Admin CMS
- **Public Catalog (`/blog`):** Instant debounced search bar, category chips, featured masterclass banner, and standard 3-column card grid.
- **Reader View (`/blog/[slug]`):** Breadcrumbs, estimated reading time, author card, rich typography prose, tag chips, social sharing, and related articles.
- **Admin Dashboard (`/admin/blog`):** Live metric cards, data table with status pills (Published/Draft), view counter, and quick Edit/Delete/Preview actions.
- **Admin Post Editor (`/admin/blog/editor`):** Title, auto-slug generator, excerpt, cover image URL, category dropdown, tag pills, published toggle, and live side-by-side Markdown preview.

---

### 5. GSAP Animation Specifications

```typescript
// Timeline Easing & Stagger Rules
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

// 1. Hero Badge Reveal
tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 });

// 2. Main Title Entrance
tl.from(".hero-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.3");

// 3. Subtitle Entrance
tl.from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.7 }, "-=0.4");

// 4. Offer Pill Scale-Up
tl.from(".hero-offer-pill", { opacity: 0, scale: 0.9, duration: 0.5 }, "-=0.3");

// 5. Dual Action Buttons
tl.from(".hero-ctas", { opacity: 0, y: 20, duration: 0.6 }, "-=0.2");

// 6. Metrics Grid Stagger
tl.from(".hero-metric-card", { opacity: 0, y: 30, stagger: 0.12, duration: 0.7 }, "-=0.3");
```

---

### 6. Responsive Breakpoint Rules

| Viewport | Width Range | Layout Adaptation |
|---|---|---|
| **Mobile** | `< 640px` | Single-column cards, hamburger drawer, full-width buttons, horizontal scroll filter chips, 14px body text |
| **Tablet** | `640px – 1024px` | 2-column card grids, compact 2x2 metrics strip, adapted modal sizes |
| **Desktop** | `1024px – 1280px`| 3-column card grids, expanded glassmorphism navbar, side-by-side contact layout |
| **Large Desktop**| `> 1280px` | Max container width `1280px` (`max-w-7xl`), 4-column metrics & features grid, comfortable 24px padding |
