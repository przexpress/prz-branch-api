 import express from "express";
import cors from "cors";
import branchAuthRoutes from "./routes/branchAuth.js";

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Enable CORS for your Vercel frontend
app.use(cors({
  origin: "https://prz-dashboard-v2.vercel.app",
  credentials: true
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Route for branch login
app.use("/api/branch", branchAuthRoutes);

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
