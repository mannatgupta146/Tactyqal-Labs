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
- **Accent Details:** Mint founder age badges, emerald revenue stats (`INR 100,000/mo Recurring Revenue`, `INR 9,000 in Week 1`).
- **Category Filter Tabs:** Active tab highlighted with solid mint green (`bg-[#00df82] text-slate-950 font-bold`).

#### 4.4 Diagnostic Tools, Pricing, Blog & Contact
- **Diagnostic Tools:** White cards on `#FAF8F5` surface with interactive modal views.
- **Pricing Card:** Crisp white card with emerald accent border, clear feature list, and money-back guarantee badge.
- **Featured Blog & Catalog:** White cards with high-res cover images, crisp typography, and stone border styling.
- **Contact Form:** Warm sand `#FAF8F5` section with white card booking form and direct email/phone cards.
- **Footer:** Warm cream `#FDFCF7` border-t `#E7E5E4` with clean navigation links and Devuty Hire-a-thon badge.
