import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import blogRoutes from "./routes/blogRoutes";
import leadRoutes from "./routes/leadRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL;

// Allowed origins configured via environment variable and local dev
const allowedOrigins = [
  FRONTEND_URL,
  "http://localhost:3000",
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (curl, Postman, health monitors)
      if (!origin) return callback(null, true);
      if (
        !FRONTEND_URL ||
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") ||
        process.env.NODE_ENV !== "production"
      ) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Root & API Welcome Route
const getApiOverview = () => ({
  success: true,
  message: "🚀 Tactyqal Labs Backend API Engine is Live and Operational",
  status: "healthy",
  frontend: process.env.FRONTEND_URL || "configured via FRONTEND_URL",
  endpoints: {
    health: "/api/health",
    blogPosts: "/api/blog/posts",
    categories: "/api/blog/categories",
    tags: "/api/blog/tags",
    stats: "/api/blog/stats",
    consultation: "/api/consultation",
  },
});

app.get("/", (_req, res) => {
  res.json({ ...getApiOverview(), timestamp: new Date().toISOString() });
});

app.get("/api", (_req, res) => {
  res.json({ ...getApiOverview(), timestamp: new Date().toISOString() });
});

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Tactyqal Labs API Engine",
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/blog", blogRoutes);
app.use("/api/consultation", leadRoutes);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({ success: false, error: "Endpoint not found" });
});

// Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 [Tactyqal Backend] API Server listening on http://localhost:${PORT}`);
    console.log(`📡 [Endpoints] /api/blog/posts, /api/blog/categories, /api/consultation`);
  });
};

startServer();
