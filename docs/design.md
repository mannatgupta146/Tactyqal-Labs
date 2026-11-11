# Design System & UI/UX Guidelines
## Tactyqal Labs Authentic Platform Redesign

### 1. Design Concept & Brand Aesthetic
This design system embraces an elegant **Warm Cream & Off-White aesthetic** (`#FDFCF7` / `#FFFFFF` / `#FAF8F5`) paired with **Tactyqal Labs' authentic signature mint & emerald green** (`#00df82` / `#059669`) and deep charcoal slate typography (`#0f172a` / `#334155`).

This intentionally moves away from dark obsidian slate or generic "AI purple" tones, delivering an authentic, human-centric, high-trust experience tailored for parents, students, and academic evaluators.

#### Core Design Principles:
1. **Warm Cream & Clean White Canvas:** Base background is warm cream (`#FDFCF7`), alternating sections use soft sand (`#FAF8F5`), and surface cards use crisp white (`#FFFFFF`) with warm stone borders (`#E7E5E4`).
2. **Authentic Tactyqal Mint Green:** Solid buttons and badges leverage Tactyqal's signature mint-green (`#00df82`) and deep emerald (`#059669`) for prominent headlines, metrics, and interactive elements.
3. **No AI Clichés (Zero Purple/Indigo):** No generic purple glows, violet cards, or blue-washed backdrops. All hyperlinks enforce explicit `a, a:visited { color: inherit; }` to eliminate default browser visited purple.
4. **Institutional Trust & Credibility:** High-contrast charcoal text (`#0f172a`) on cream/white surfaces exceeds WCAG AAA accessibility, providing an inviting, prestigious educational atmosphere.

---

### 2. Comprehensive Color Palette & Tokens

#### 2.1 Color Tokens & Hex Codes
| Semantic Token | Hex Code | Tailwind Utility | Visual Role / Usage |
|---|---|---|---|
| **Primary Canvas** | `#FDFCF7` | `bg-[#FDFCF7]` | Warm cream primary page background |
| **Section Alternating Surface** | `#FAF8F5` | `bg-[#FAF8F5]` | Soft sand cream for alternate sections (curriculum, contact, pricing) |
| **Card / Modal Surface** | `#FFFFFF` | `bg-white` | Feature cards, testimonials, modals, admin tables |
| **Input / Tag Surface** | `#F5F5F4` | `bg-stone-50` | Form inputs, inactive pill buttons, category badges |
| **Border Subtle** | `#E7E5E4` | `border-stone-200` | Card borders, dividers, subtle separators |
| **Border Active / Mint** | `#059669` / `#00df82` | `border-emerald-500/40` | Focused inputs, active cards, hover borders |
| **Tactyqal Mint (Primary Action)** | `#00df82` | `bg-[#00df82] hover:bg-[#00c975]` | Primary CTA button, contact pills, active filter chips |
| **Tactyqal Emerald (Text Accent)** | `#059669` | `text-[#059669]` | Headline accents, metrics, icons, badges |
| **Text Primary (Headlines)** | `#0f172a` | `text-slate-900` | Main headlines, section titles, card headers |
| **Text Secondary (Body)** | `#475569` | `text-slate-600` | Descriptions, body copy, curriculum breakdowns |
| **Text Muted** | `#64748b` | `text-slate-500` | Meta info, reading times, dates, tags |

#### 2.2 Accent Badges & CTAs
```css
/* Subtle Mint Glow on Warm Canvas */
background: radial-gradient(circle at 50% 0%, rgba(0, 223, 130, 0.12) 0%, transparent 70%);

/* Primary Mint CTA Button */
background-color: #00df82;
color: #020617; /* High-contrast dark charcoal text */
box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2);

/* Secondary White Pill Button */
background-color: #FFFFFF;
border: 2px solid #D6D3D1;
color: #1E293B;

/* WhatsApp CTA Button */
background-color: #FFFFFF;
color: #047857;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

---

### 3. Typography Scale & Hierarchy

- **Font Family:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif.
- **Font Scale:**
  - **Hero Display H1:** `text-3xl sm:text-5xl md:text-6xl font-black text-slate-900` with emerald accent (`text-[#059669]`).
  - **Section Headings (H2):** `text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight`.
  - **Card Titles (H3):** `text-lg sm:text-xl font-bold text-slate-900`.
  - **Subheadings & Lead Copy:** `text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium`.
  - **Badges & Overlines:** `text-xs font-semibold uppercase tracking-wider text-[#059669] bg-emerald-50 border border-emerald-200/80`.

---

### 4. UI/UX Component Specifications

#### 4.1 Navigation Bar (`Navbar`)
- **Background:** Frosted warm cream glass (`bg-[#FDFCF7]/90 backdrop-blur-xl border-b border-stone-200/90`).
- **Brand Logo:** Crisp white square with emerald rocket icon + `Tactyqal` `<span class="text-[#059669]">Labs</span>`.
- **Nav Links:** `text-slate-600 hover:text-slate-900 hover:bg-stone-100/80`.
- **Contact Pill:** Solid mint green pill button (`bg-[#00df82] hover:bg-[#00c975] text-slate-950 font-bold`).

#### 4.2 Hero Section (Matching tactyqal.com)
- **Canvas:** Warm cream (`#FDFCF7`) with subtle dot pattern and mint ambient glow.
- **Headline:** *"Empower Your Kid To Build The Next App That Impacts Millions, in 8 Weeks"* in deep charcoal with emerald key phrase.
- **3 Metric Badges:** Crisp white cards with stone borders:
  - `[ 🎓 100+ Students Mentored ]`
  - `[ 🏛️ Top University Admissions ]`
  - `[ 👥 ₹Thousands of People Impacted ]`
- **Dual CTAs:**
  - **Primary CTA:** Solid mint green button: `[ Book Free Consultation ]`.
  - **Secondary CTA:** White outlined pill: `[ ▶ Success Stories ]`.
- **Pricing Anchor:** `₹25,000` (strikethrough) `₹16,000` in deep emerald (`#059669`) with `Limited Time Offer` badge.

#### 4.3 Student Success Stories & Cards
- **Card Surface:** Crisp white (`#FFFFFF`) with warm stone borders (`border-stone-200`).
- **Real App Images:** Loaded directly from `/images/student-apps/`.
- **Accent Details:** Mint founder age badges, emerald revenue stats (`INR 100,000/mo Recurring Revenue`, `INR 9,000 in Week 1`).
- **Category Filter Tabs:** Active tab highlighted with solid mint green (`bg-[#00df82] text-slate-950 font-bold`).

#### 4.4 Student & Parent Testimonials
- **Grid Layout:** 3 columns on desktop, 2 on tablet, 1 on mobile (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`).
- **Card Structure:**
  - Top header row: 5 amber rating stars (`fill-amber-400 text-amber-400`) + quotation icon (`Quote`).
  - Body: Authentic student quote in high-contrast charcoal text.
  - Bottom row: High-res student avatar circle (52×52px) loaded from `/images/student-reviews/`, student name in bold slate, and verified green checkmark badge (`CheckCircle2`).
- **Hover Micro-Interaction:** Subtle lift (`hover:-translate-y-1.5`) with golden amber border glow (`hover:border-amber-400`).

#### 4.5 Contact Us Section & WhatsApp CTA
- **Layout:** Symmetrical two-column grid (`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch`).
- **Both Cards Geometry:** Balanced with `h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl` ensuring identical height.
- **Left Contact Info Card:**
  - Gradient surface: `bg-gradient-to-br from-[#00df82] to-[#059669] text-white shadow-xl`.
  - 4 Contact Rows:
    1. Email: `tactyqal.labs@gmail.com` with circular icon button.
    2. Phone: `+91-98047-72106` with circular icon button.
    3. Operating Hours: `Mon-Sat, 9am-7pm` with circular clock button.
    4. Response Time: `Response Time: Within 24 hours` with circular lightning badge.
  - Bottom Action Pill: White pill button with official WhatsApp SVG icon (`#25D366`), "Chat on WhatsApp" text in `#047857`, and forward arrow icon.
- **Right Booking Form Card:** Crisp white surface (`bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xl`), form fields, and submit CTA button.

---

### 5. Standardized Asset Directory Structure

All media assets are consolidated strictly under `public/images/`:
```
public/images/
├── blog-articles/
│   ├── the-elevator-pitch-for-business-entrepreneurs.png
│   ├── how-to-build-a-tech-startup-team.png
│   ├── 11-reasons-why-startups-fail-at-the-idea-stage.png
│   ├── 50-no-code-startup-app-ideas.png
│   ├── 30-startup-ideas-to-solve-food-waste-problems.png
│   └── 50-startup-ideas-for-gen-z-entrepreneurs.png
├── student-apps/
│   ├── krishidrishti.png
│   ├── elenor.png
│   ├── one-last-chapter.png
│   ├── paws-of-promise.png
│   ├── audionova.png
│   └── converza.png
└── student-reviews/
    ├── aarav-sharma.jpg
    ├── isha-patel.jpg
    ├── rohan-verma.jpg
    ├── simran-kaur.jpg
    ├── devansh-mehta.jpg
    └── priya-nair.jpg
```
No loose duplicate folders (`public/apps`, `public/blog-articles`, `public/learn`, `public/student-apps`) exist.
