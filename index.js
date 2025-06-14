 import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import branchAuthRoutes from "./routes/branchAuth.js";

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Allow all CORS (for now, for testing)
app.use(cors());

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Register routes
app.use("/api/branch", branchAuthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
