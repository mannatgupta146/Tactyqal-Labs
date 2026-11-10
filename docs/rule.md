# Code Architecture & Modularity Rules
## Anti-Bloat, Modularity, and Code Reusability Guidelines

> **Primary Objective:** Prevent bloated, monolithic files ("hotch-potch" code) by enforcing strict separation of concerns, maximum file length limits, atomic component extraction, and shared reusable primitives.

---

### 1. File Length & Conciseness Thresholds (Anti-Bloat)
- **Target File Length:** Maintain component and page files between **50 to 180 lines of code**.
- **Hard Review Threshold:** Any file exceeding **200 lines** must be inspected and refactored into smaller, modular sub-components, extracted hooks, or shared helper modules.
- **No Monolithic Kitchen-Sinks:** A single file must **NEVER** contain a full page layout, inline dummy data arrays, multiple modal dialogs, and low-level form controls all lumped together.

---

### 2. Component Modularity & Extraction (Anti-"Hotch-Potch")
1. **Extract Sub-Components & Modals:**
   - If a component renders a modal (e.g. a Case Study Detail Modal, Consultation Popup, or Quiz Modal), that modal **MUST** live in its own separate file in `src/components/` or `src/components/modals/`.
   - Never embed a 100-line modal markup block at the bottom of a 200-line section component.
2. **Extract Static Content & Seed Data:**
   - Never declare 50–100 lines of static JSON/object arrays directly inside a React component file.
   - Extract data arrays (e.g. FAQ questions, feature lists, student stories, navigation links) into dedicated files such as `src/data/` or `src/lib/constants.ts`.
3. **Extract Shared UI Primitives (`src/components/ui/`):**
   - Reusable elements like Section Header Badges, Pill Chips, Modal Backdrops, Action Buttons, and Metric Counter Cards should be extracted into reusable primitives rather than copy-pasting the same 15-class Tailwind string across 6 different sections.

---

### 3. Separation of Concerns (SoC)
Every file must adhere to the **Single Responsibility Principle (SRP)**:

| Layer | Dedicated Location | What Belongs Here | What Does NOT Belong Here |
|---|---|---|---|
| **Page Routes** | `src/app/**/page.tsx` | High-level page assembly, layouts, and route metadata | Inline API business logic, raw SQL/database calls, lengthy modal templates |
| **Feature Components** | `src/components/*.tsx` | Presentation and interactive UI for a specific feature | Raw mock data definitions, duplicate styling blocks |
| **State Management** | `src/store/*Slice.ts` | Redux actions, reducers, and selectors | Direct DOM manipulation or inline JSX |
| **API & Networking** | `src/lib/api.ts` | Axios/fetch client calls, query params, error parsing | React hook state or component JSX |
| **Data Types & Models** | `src/lib/types.ts`, `backend/models/*.ts` | TypeScript interfaces, type definitions, Mongoose schemas | UI components or rendering functions |
| **Static Data / Copy** | `src/data/*.ts` | Static arrays, feature lists, FAQs, alumni stories | JSX components or mutation logic |

---

### 4. Code Reuse & DRY Guidelines
1. **Reuse Before Rewriting:**
   - If two or more components need the same layout pattern (e.g. a gradient badge with an icon, an article card, or an author avatar badge), build a reusable sub-component.
2. **Clean Component Hierarchy:**
   ```
   src/
   ├── components/
   │   ├── hero/               # Modularized hero sub-elements
   │   │   ├── hero-badge.tsx
   │   │   └── hero-metrics.tsx
   │   ├── success-stories/
   │   │   ├── story-card.tsx
   │   │   └── case-study-modal.tsx
   │   ├── ui/                 # Atomic design primitives
   │   │   ├── badge.tsx
   │   │   ├── button.tsx
   │   │   └── modal.tsx
   │   └── ...
   ```
3. **Avoid Deep Inline Nesting:**
   - If an inline conditional block or nested ternary expression spans more than 15 lines, extract it into a dedicated child component or helper render function.

---

### 5. Developer Self-Audit Checklist (Before Merging / Committing)
Before committing any new code, verify:
- [ ] Is this file under 180 lines?
- [ ] Can any sub-section, modal, or repeated card pattern be extracted into its own reusable component?
- [ ] Are all types and interfaces located in `types.ts` rather than inlined in the component?
- [ ] Are long static data arrays moved to a constants/data module?
- [ ] Does this file have one clear, singular responsibility?
- [ ] Is there any duplicate logic that could be handled by a shared utility or Redux action?
