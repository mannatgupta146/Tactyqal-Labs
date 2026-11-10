import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import blogRoutes from "./routes/blogRoutes";
import leadRoutes from "./routes/leadRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

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
