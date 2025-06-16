 import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ API routes
import branchAuthRoutes from "./routes/branchAuth.js";
app.use("/api/branch", branchAuthRoutes);

// ✅ Serve frontend from /public
app.use(express.static(path.join(process.cwd(), "public")));

// ✅ Catch-all to support frontend routing (React)
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

// ✅ Start server
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
