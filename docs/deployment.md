# Simple Deployment Guide
## Tactyqal Labs Platform (Frontend & Backend)

This guide provides the **simplest, zero-headache, 100% free** deployment method for the Tactyqal Labs challenge submission using **Vercel** (Frontend) and **Render** (Backend).

---

### Architecture at a Glance

```
[ User Browser ]
       │
       ▼
[ Vercel CDN ] ─── Next.js 14 App Router (Homepage, Blog Reader, Admin CMS)
       │
       ▼ (REST API calls)
[ Render.com ] ─── Express.js Engine (/api/blog, /api/consultation)
       │
       ▼
[ MongoDB Atlas ] ─── Managed M0 Database (or built-in In-Memory Fallback)
```

---

### Step 1: Database (MongoDB Atlas — Free Forever)
*(Takes 2 minutes)*

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and sign in.
2. Create a free **M0 Shared Cluster** (0$/mo forever).
3. Under **Database Access**, create a user (e.g. `tactyqal_admin` / password).
4. Under **Network Access**, click **Add IP Address** → choose **Allow Access from Anywhere (`0.0.0.0/0`)**.
5. Click **Connect** → **Drivers** → copy your connection string:
   ```env
   mongodb+srv://tactyqal_admin:<password>@cluster0.abcde.mongodb.net/tactyqal?retryWrites=true&w=majority
   ```
> **Note:** If you skip MongoDB Atlas, the backend automatically activates its built-in **Resilient In-Memory Fallback Store** pre-seeded with all 6 authentic Tactyqal posts, so the server never crashes!

---

### Step 2: Deploy Backend to Render
*(Takes 2 minutes — Free Web Service)*

1. Go to [render.com](https://render.com) and log in with GitHub.
2. Click **New +** → **Web Service**.
3. Connect your GitHub repository: `Tactyqal Labs`.
4. Configure these 3 fields:
   - **Name:** `tactyqal-backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm run server:start`
5. Under **Environment Variables**, add:
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = *(your MongoDB Atlas URI from Step 1, or leave blank for auto in-memory fallback)*
6. Click **Create Web Service**.
7. Once deployed, copy your live backend URL (e.g. `https://tactyqal-backend.onrender.com`).
   - You can test it by opening `https://tactyqal-backend.onrender.com/api/health` in your browser.

---

### Step 3: Deploy Frontend to Vercel
*(Takes 1 minute — 1-Click Zero Config)*

1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New...** → **Project**.
3. Import your `Tactyqal Labs` repository.
4. Vercel automatically detects **Next.js**. Leave all build settings at default (`next build`).
5. Under **Environment Variables**, add:
   - **Name:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://tactyqal-backend.onrender.com/api` *(your Render backend URL + `/api`)*
6. Click **Deploy**.

---

### Done!
Your site is live with:
- **Live Next.js Platform:** `https://tactyqal-labs.vercel.app`
- **Live Blog Platform:** `https://tactyqal-labs.vercel.app/blog`
- **Live Admin CMS:** `https://tactyqal-labs.vercel.app/admin/blog`
- **Live Express REST API:** `https://tactyqal-backend.onrender.com/api/health`
