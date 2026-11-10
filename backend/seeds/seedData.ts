export interface SeedPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: {
    name: string;
    slug: string;
  };
  tags: string[];
  readTimeMin: number;
  views: number;
  published: boolean;
  featured: boolean;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const initialCategories = [
  {
    name: "Startup Strategy",
    slug: "startup-strategy",
    description: "Frameworks, elevator pitches, and strategic playbooks for founders",
  },
  {
    name: "Team & Culture",
    slug: "team-and-culture",
    description: "Building, managing, and inspiring early technical startup teams",
  },
  {
    name: "Startup Validation",
    slug: "startup-validation",
    description: "Idea validation, avoiding fatal pitfalls, and achieving problem-solution fit",
  },
  {
    name: "No-Code & Tech",
    slug: "no-code-and-tech",
    description: "Building production-grade full-stack web and mobile apps without coding",
  },
  {
    name: "Social Impact",
    slug: "social-impact",
    description: "Using technology to solve critical real-world environmental and social challenges",
  },
  {
    name: "Startup Ideas",
    slug: "startup-ideas",
    description: "Curated lists of profitable and high-impact startup concepts for young builders",
  },
];

export const initialPosts: SeedPost[] = [
  {
    title: "The elevator pitch for business entrepreneurs",
    slug: "elevator-pitch-with-examples-for-business-entrepreneurs",
    excerpt: "An elevator pitch is the fastest way to describe what your startup does, who it serves, and why investors should care.",
    content: `# The elevator pitch for business entrepreneurs

An elevator pitch is the fastest way to describe what your startup does, who it serves, and why an investor, customer, or co-founder should care. In the fast-moving tech ecosystem, you rarely get 20 minutes to pitch from a slide deck on first contact. More often, you have 30 to 60 seconds in a hallway, on a Zoom intro, or at a demo day.

## The 4 Essential Pillars of a Winning Elevator Pitch

1. **The Problem:** Who is suffering, and what painful friction do they face today?
2. **The Solution:** What have you built, and what is its core unfair advantage?
3. **The Target Market:** How big is this opportunity in terms of users and revenue potential?
4. **The Traction & Ask:** What have you achieved so far, and what specific help are you seeking?

### Example: KrishiDrishti (Built by a Tactyqal Student)
> "Over 100 million local farmers in India struggle with declining crop yields due to unpredictable soil health. KrishiDrishti is an AI-powered diagnostic app that analyzes soil photos and sensor data on any basic smartphone to recommend precise crop rotations and fertilizers. In our first pilot with 500 farmers, crop yields improved by 22%."

## Common Mistakes to Avoid
- **Jargon Overload:** Avoid buzzwords that obscure what your product actually does.
- **Forgetting the Hook:** Start with an intriguing statistic or question that demands attention.
- **No Clear Call to Action:** Always close with an invitation for a coffee, a product demo, or a follow-up conversation.`,
    coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    category: {
      name: "Startup Strategy",
      slug: "startup-strategy",
    },
    tags: ["Elevator Pitch", "Founders", "Fundraising", "Product Hunt"],
    readTimeMin: 3,
    views: 420,
    published: true,
    featured: true,
    publishedAt: "2024-05-01T10:00:00Z",
    author: {
      name: "Tactyqal Mentors",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Startup Mentors & Founders",
    },
  },
  {
    title: "How to build a tech startup team?",
    slug: "how-to-build-a-tech-startup-team-2",
    excerpt: "In the early days, the fewer employees, the better. Managing people takes up a lot of time. Here is how to assemble a lean, high-velocity team.",
    content: `# How to build a tech startup team?

In the early days of a startup, the fewer employees, the better. Managing people takes up a massive amount of cognitive bandwidth and emotional energy. When you are validating your product-market fit, speed of iteration is everything.

## The Rule of Three: Minimum Viable Team
Every successful early-stage product startup requires three core archetypes:

1. **The Builder:** The person who engineers the software, wires the APIs, and ensures the product functions reliably.
2. **The Designer / Storyteller:** The person who crafts the intuitive UI/UX, translates complex workflows into simple flows, and shapes brand perception.
3. **The Hustler / Seller:** The person who talks to 10 customers a day, drives early sign-ups, and pitches for grants or seed capital.

> *"Learn to sell. Learn to build. If you can do both, you will be unstoppable."* — Naval Ravikant

## Why No-Code & AI Agents Change the Equation
Modern tools allow a single 15-year-old student to perform the work that previously required a 5-person engineering department. By combining modern front-end frameworks with AI backend logic and automated workflows, young entrepreneurs can build functional MVPs in just weeks without waiting months to find a technical co-founder.`,
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    category: {
      name: "Team & Culture",
      slug: "team-and-culture",
    },
    tags: ["Team Building", "Co-Founders", "Hiring", "Productivity"],
    readTimeMin: 4,
    views: 310,
    published: true,
    featured: false,
    publishedAt: "2024-04-20T10:00:00Z",
    author: {
      name: "Tactyqal Mentors",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Startup Mentors & Founders",
    },
  },
  {
    title: "11 reasons why startups fail at the idea stage",
    slug: "11-reasons-why-startups-fail-at-idea-stage",
    excerpt: "The default state of a startup is failure. Learn the 11 critical traps that kill early startup ideas before a single line of code is written.",
    content: `# 11 reasons why startups fail at the idea stage

The default state of a startup is failure. According to industry data, over 90% of new ventures never make it past their first year. Even more tragically, a huge percentage of those failures were doomed from day one—before a single line of code was ever written.

## The Top Traps That Doom Ideas Early

1. **Building a Solution in Search of a Problem:** Starting with cool technology (e.g. "I want to use blockchain and AI") rather than a visceral user frustration.
2. **The 'Tarpit' Idea:** Ideas that sound attractive to beginners (e.g., general social networks, generic music apps) but have brutal network effects and zero monetization.
3. **Targeting Customers Who Have No Budget:** If your intended customer has no discretionary spending power or urgent pain, closing sales is nearly impossible.
4. **Ignoring Unit Economics:** Hoping to make up for negative gross margins by achieving "scale".
5. **Fear of Talking to Users:** Staying locked in a room building for six months without validating hypotheses with real paying customers.
6. **No Moat or Defensibility:** If an incumbent or competitor can replicate your entire feature set in a weekend, your advantage evaporates.

## How We Validate Ideas at Tactyqal Labs
In Week 1-2 of our mentorship program, we run every student's concept through our proprietary **Problem-Solution Fit Matrix**. Students interview at least 15 real potential users before touching Figma or code.`,
    coverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    category: {
      name: "Startup Validation",
      slug: "startup-validation",
    },
    tags: ["Startup Failure", "Validation", "Market Research", "Product Strategy"],
    readTimeMin: 3,
    views: 580,
    published: true,
    featured: false,
    publishedAt: "2024-04-10T10:00:00Z",
    author: {
      name: "Tactyqal Mentors",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Startup Mentors & Founders",
    },
  },
  {
    title: "50 No-code startup app ideas to build without programming skills",
    slug: "50-no-code-startup-ideas-to-build-without-programming-skills",
    excerpt: "Find a list of 50 unique ideas you can explore for your startup today using modern no-code platforms, AI APIs, and automation tools.",
    content: `# 50 No-code startup app ideas to build without programming skills

You no longer need a 4-year computer science degree to build software that impacts thousands of users and generates revenue. With platforms like Next.js templates, Supabase, Bubble, Webflow, and modern AI models, young builders can ship functional web applications in days.

## 5 Highlight Categories from Our Curated List

### 1. Micro-SaaS for Local Businesses
- **Local Gym Class Waitlist & Drop-in Engine:** Auto-SMS notifications when a booked class opens up.
- **Bakery Custom Order Visualizer:** Simple web app allowing customers to configure cake sizes and flavors with instant price quotes.

### 2. Specialized Subscription Boxes (Real Tactyqal Success Story)
> **One Last Chapter:** Created by a 13-year-old student at Tactyqal Labs. A curated book subscription service for kids that grew to **₹100,000/month recurring revenue** using low-code customer portals and Stripe payments.

### 3. AI Copilots for Specific Niches
- **Homework Companion for Foreign Languages:** Like Converza, featuring interactive AI conversation partners.
- **Pet Care & Shelter Matchmaking:** Like Paws of Promise, matching shelter animals with verified local adopters.

### 4. Eco & Sustainability Tools
- **Food Surplus Redistribution Hub:** Connecting local restaurants with discounted end-of-day sales.`,
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    category: {
      name: "No-Code & Tech",
      slug: "no-code-and-tech",
    },
    tags: ["No-Code", "App Ideas", "SaaS", "Teen Builders"],
    readTimeMin: 5,
    views: 890,
    published: true,
    featured: true,
    publishedAt: "2025-07-09T10:00:00Z",
    author: {
      name: "Tactyqal Mentors",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Startup Mentors & Founders",
    },
  },
  {
    title: "30 Startup ideas to solve food waste problems",
    slug: "30-startup-ideas-for-solving-food-waste-problems",
    excerpt: "Food waste is a massive global issue. Every year, one-third of all food produced goes uneaten. Here is how young founders can build tech solutions.",
    content: `# 30 Startup ideas to solve food waste problems

Food waste is a massive global crisis. Every single year, approximately one-third of all food produced for human consumption—roughly 1.3 billion tonnes—is lost or wasted. This not only squanders enormous economic resources but also drives significant greenhouse gas emissions.

## High-Impact Startup Angles for Young Innovators

### 1. Smart Household Pantry Inventory Tracking
A mobile-friendly web app that scans grocery receipts, predicts expiration dates based on typical pantry lifespans, and suggests recipes based strictly on ingredients expiring in the next 48 hours.

### 2. B2B Supermarket Surplus Bidding
Supermarkets frequently discount perishable goods on their final shelf-life days. A platform connecting restaurant kitchens and catering companies directly with supermarket inventory managers can unlock millions in savings while diverting food from landfills.

### 3. College Campus Food Rescue Network
Universities throw away hundreds of kilograms of prepared catering food after conferences and events. An on-demand notification system can alert hungry students within a 5-minute walking radius whenever compliant leftover food is ready for pickup.`,
    coverImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    category: {
      name: "Social Impact",
      slug: "social-impact",
    },
    tags: ["Food Waste", "Sustainability", "GreenTech", "Social Impact"],
    readTimeMin: 4,
    views: 410,
    published: true,
    featured: false,
    publishedAt: "2024-03-15T10:00:00Z",
    author: {
      name: "Tactyqal Mentors",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Startup Mentors & Founders",
    },
  },
  {
    title: "50 Startup ideas for Gen-Z Entrepreneurs",
    slug: "50-startup-ideas-for-generation-z-entrepreneurs",
    excerpt: "Generation Z has native digital fluency, algorithmic intuition, and a passion for autonomy. Here are 50 startup ideas built for this generation.",
    content: `# 50 Startup ideas for Gen-Z Entrepreneurs

Generation Z has distinct structural advantages over previous generations of entrepreneurs:
- Native understanding of creator economies, TikTok algorithms, and community-driven brands.
- Deep passion for authentic, ethical, and eco-friendly products.
- Comfort with rapid prototyping using modern AI copilots and low-code stacks.

## Key Opportunity Arenas

### 1. Sustainable & Ethical E-Commerce
Teenagers are increasingly rejecting fast fashion.
> **Real Student Spotlight:** *Elenor Vegan Handbags*, launched by a 16-year-old student at Tactyqal Labs, generated **INR 9,000 in its very first week** through corporate gifting and ethical cruelty-free positioning.

### 2. Niche AI Content & Media Studios
Like our student project **AudioNova**, which produces high-velocity AI audio tracks and video clips for creators, indie video game developers, and marketing agencies.

### 3. Micro-Communities & Virtual Pet Adoption
Platforms like **Paws of Promise**, bridging the gap between local animal shelters and young animal advocates through gamified virtual pet sponsorship.`,
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    category: {
      name: "Startup Ideas",
      slug: "startup-ideas",
    },
    tags: ["Gen-Z", "Youth Entrepreneurship", "Teen Startups", "Creator Economy"],
    readTimeMin: 6,
    views: 740,
    published: true,
    featured: false,
    publishedAt: "2024-03-05T10:00:00Z",
    author: {
      name: "Tactyqal Mentors",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Startup Mentors & Founders",
    },
  },
];
