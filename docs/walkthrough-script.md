# Video Walkthrough Script (1–2 Minutes)
## Tactyqal Labs Platform Modernization & Blog Architecture

> **Format:** 1–2 minute screen recording + voiceover  
> **Key Goal:** Demonstrate Task 1 (Homepage Redesign) and Task 2 (Blog Backend & Admin CMS) cleanly, highlighting technical depth.

---

### [0:00 – 0:25] Introduction & Task 1: Homepage Redesign
**Screen:** Open `http://localhost:3000/`. Reload to show the smooth GSAP entrance animation.

**Voiceover:**
> "Hi everyone, this is my submission for the Tactyqal Labs Fullstack Developer Challenge.
>
> Previously, Tactyqal ran on a legacy PHP CodeIgniter setup with a separate WordPress blog. I've re-architected the entire platform into a unified, high-performance stack using **Next.js 14 App Router**, **Tailwind CSS**, **TypeScript**, and **GSAP**.
>
> Looking at the redesigned homepage:
> - Notice the smooth GSAP staggered reveals on our hero headline and animated metrics: 100+ students mentored, top university admits, and dedicated 1:1 format.
> - In the **Success Stories** section, we have interactive category filters and 3D cards highlighting real student apps like *KrishiDrishti*, *Elenor Vegan Handbags*, and *One Last Chapter* making ₹100,000/month recurring revenue.
> - Down here, we feature an interactive **8-Week Curriculum Roadmap** with the Naval Ravikant quote, **Why Parents Choose Us** value grid, real alumni reviews, the transparent **₹16,000 limited offer pricing card** with a money-back guarantee, and an expandable FAQ."

---

### [0:25 – 0:45] Interactive Diagnostic Tools & Lead Capture
**Screen:** Click on **"Startup Idea Generator"** in the Free Tools section. Generate an idea. Then click **"Book Free Consultation"** on the hero or navbar to open the modal.

**Voiceover:**
> "We've also built interactive in-browser diagnostic tools. Visitors can launch the **Startup Idea Generator** or take the **Fundability Assessment** with instant score calculation.
>
> Clicking 'Book Free Consultation' launches our global modal powered by **Redux Toolkit**, which directly submits consultation leads to our Express and MongoDB backend with instant validation."

---

### [0:45 – 1:20] Task 2: Modern Blog Architecture & Admin CMS
**Screen:** Navigate to `http://localhost:3000/blog`. Show real-time search typing "elevator pitch". Then navigate to `http://localhost:3000/admin/blog`.

**Voiceover:**
> "Now moving to Task 2: replacing the detached WordPress blog.
>
> We engineered a modular **Node.js and Express.js REST API** backed by **MongoDB and Mongoose**, with a resilient in-memory fallback for zero-friction local testing.
>
> On the public **Knowledge Hub** (`/blog`), we have debounced instant search and category filtering connected via Redux Toolkit. Opening any post shows clean typography, calculated reading time, view counters, and related posts.
>
> And here is the **Admin CMS Dashboard** (`/admin/blog`):
> - Real-time metrics tracking total posts, published articles, drafts, and view counts.
> - A complete management table with quick actions.
> - Clicking **'Create New Post'** opens our editor featuring auto-generating slugs, category/tag pickers, and live side-by-side Markdown preview. When published, it immediately updates the database and the public blog."

---

### [1:20 – 1:35] Conclusion & Codebase Quality
**Screen:** Briefly show the VSCode / directory structure with `backend/`, `src/`, and `/docs`.

**Voiceover:**
> "The repository includes comprehensive documentation in `/docs`, normalized Mongoose models, and an automated end-to-end API test suite running with `npm run test:api`.
>
> Thank you to the Tactyqal Labs and Devuty team for this challenge!"
