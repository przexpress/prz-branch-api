 // File: index.js (Entry Point for Express Server)
import express from "express";
import cors from "cors";

import branchAuthRoutes from "./routes/branchAuth.js"; // ✅ Route Import

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

// ✅ Register the /api/branch endpoint
app.use("/api/branch", branchAuthRoutes);

app.get("/", (req, res) => {
  res.send("PRZ API is running.");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
