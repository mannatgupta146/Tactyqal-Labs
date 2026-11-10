# Design System & UI/UX Guidelines
## Tactyqal Labs Authentic Platform Redesign

### 1. Design Concept & Brand Aesthetic
This design system moves away from generic "AI purple" gradients and faithfully adopts **Tactyqal Labs' authentic brand palette**: a high-contrast combination of deep obsidian slate (`#070a11` / `#0b0f19`) and **signature vibrant mint / emerald green** (`#00df82` / `#10b981` / `#14b8a6`), inspired by top developer tools like Supabase and Linear.

#### Design Principles:
1. **Authentic Tactyqal Brand Colors:** Replace generic AI purple/violet glows with Tactyqal's signature vibrant mint-green (`#00df82`), emerald (`#10b981`), and subtle cyan-teal (`#14b8a6`).
2. **Clean & Human, Not Artificial:** Avoid overpowering neon streaks or AI cliché purple hues. Rely on crisp typography, generous whitespace, subtle glassmorphic borders, and polished micro-interactions.
3. **High Credibility for Parents & Students:** High-contrast text readability (WCAG AAA compliant on headlines), verified outcome chips, and clear conversion pathways.

---

### 2. Comprehensive Color Palette & Tokens

#### 2.1 Color Tokens & Hex Codes
| Semantic Token | Hex Code | Tailwind Utility | Visual Role / Usage |
|---|---|---|---|
| **Canvas Background** | `#070a11` | `bg-slate-950` | Primary deep obsidian backdrop |
| **Card Surface (Deep)** | `#0d131f` | `bg-slate-900` | Section cards, modal containers, data tables |
| **Card Surface (Elevated)**| `#151e2e` | `bg-slate-800` | Input fields, active badges, dropdown surfaces |
| **Surface Hover / Active** | `#1e293b` | `bg-slate-700` | Button hover states, elevated pill surfaces |
| **Border Subtle** | `rgba(255,255,255,0.08)` | `border-slate-800` | Card borders, dividers |
| **Border Active / Mint** | `rgba(0,223,130,0.35)` | `border-emerald-500/40`| Focused inputs, active cards, hover borders |
| **Tactyqal Mint (Primary)** | `#00df82` | `text-emerald-400`, `bg-emerald-400` | Brand logo mark, primary CTA button, active tabs |
| **Tactyqal Emerald (Deep)** | `#10b981` | `text-emerald-500`, `bg-emerald-500` | Gradients, badges, verified checkmarks |
| **Cyan-Teal Accent** | `#14b8a6` | `text-teal-400`, `bg-teal-500/10` | Metric icons, tools badges, secondary pills |
| **Text Primary (Headlines)** | `#ffffff` | `text-white` | Primary display headlines and titles |
| **Headline Accent** | `#00df82` | `text-emerald-400` | Key value proposition phrases in headlines |
| **Text Secondary (Body)** | `#cbd5e1` | `text-slate-300` | Descriptions, curriculum breakdowns, reviews |
| **Text Muted** | `#94a3b8` | `text-slate-400` | Captions, reading times, metadata |
| **Text Subtle** | `#64748b` | `text-slate-500` | Form labels, dates, breadcrumbs |

#### 2.2 Gradients & Brand Auras
```css
/* Ambient Mint Brand Aura (Replacing Generic AI Purple) */
background: radial-gradient(ellipse 60% 45% at 50% 0%, rgba(0, 223, 130, 0.14) 0%, rgba(20, 184, 166, 0.06) 50%, transparent 100%);

/* Primary Mint CTA Button */
background: linear-gradient(135deg, #00df82 0%, #10b981 100%);
color: #020617; /* High-contrast dark text on vibrant mint */

/* Secondary Outline CTA Button */
background: rgba(13, 19, 31, 0.8);
border: 1.5px solid rgba(0, 223, 130, 0.6);
color: #00df82;
```

---

### 3. Typography Scale & Hierarchy

- **Font Family:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif.
- **Font Scale:**
  - **Hero Display H1:** `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]` in clean mint (`#00df82` or gradient mint-to-white)
  - **Section Headings (H2):** `text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight`
  - **Card Titles (H3):** `text-xl sm:text-2xl font-bold text-white`
  - **Subheadings & Lead Copy:** `text-base sm:text-lg text-slate-300 leading-relaxed`
  - **Badges & Overlines:** `text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400`

---

### 4. UI/UX Component Specifications

#### 4.1 Navigation Bar (`Navbar`)
- **Brand Wordmark:** Crisp white with vibrant mint text: `Tactyqal` `<span class="text-emerald-400">Labs</span>`.
- **Nav Links:** Sleek rounded pill links (`text-slate-300 hover:text-white`).
- **Contact / Action Button:** Solid mint green pill button (`bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold`) matching the live tactyqal.com site.

#### 4.2 Hero Section (Matching tactyqal.com)
- **Visuals:** Deep obsidian backdrop with subtle top-center emerald ambient glow.
- **Main Headline:**
  *"Empower Your Kid To Build The Next App That Impacts Millions, in 8 Weeks"* rendered in prominent **mint green** (`text-emerald-400`).
- **Subheadline:**
  *1:1 Mentoring • Idea To Full-Stack App • No Coding • Admissions To The Best Colleges • Grants • Media Coverage* in clean white/slate-300.
- **Metric Pill Badges (Exact arrangement as original site):**
  - `[ 🎓 100+ Students Mentored ]`
  - `[ 🏛️ Top University Admissions ]`
  - `[ 👥 ₹Thousands of People Impacted ]`
  (Clean dark glass pills with subtle borders and mint icons).
- **Dual CTA Buttons:**
  - **Primary CTA:** Solid mint green button: `[ Book Free Consultation ]` (`bg-emerald-400 text-slate-950 font-extrabold`).
  - **Secondary CTA:** Outlined dark pill: `[ ▶ Success Stories ]` (`border-emerald-500/60 text-emerald-400`).
- **Pricing Anchor:** `₹25,000` (strikethrough) `₹16,000` in vibrant mint green.

#### 4.3 Student Success Stories & Cards
- **Card Surface:** Obsidian slate (`#0d131f`) with clean 1px borders (`border-slate-800`).
- **Accent Details:** Mint green founder age badges, emerald revenue stats (`INR 100,000/mo Recurring Revenue`, `INR 9,000 in Week 1`).
- **Category Filter Tabs:** Active tab highlighted with solid mint green (`bg-emerald-500 text-slate-950 font-bold`).

#### 4.4 Diagnostic Tools, Pricing & FAQ
- **Tools:** Clean cards with emerald/teal diagnostic launch pills.
- **Pricing Card:** Radiant emerald border (`border-emerald-500/40`), money-back guarantee badge with green shield icon.
- **FAQ:** Clean accordion with mint numbers (`01.`, `02.`).
