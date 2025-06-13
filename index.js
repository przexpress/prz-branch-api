 import express from "express";
import cors from "cors";
import branchAuthRoutes from "./routes/branchAuth.js"; // ✅ your route

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Enable CORS for Vercel frontend
app.use(cors({
  origin: "https://prz-dashboard-v2.vercel.app", // your frontend
  credentials: true
}));

app.use(express.json());
app.use("/api/branch", branchAuthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
