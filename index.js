 import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

import branchLogin from "./routes/branchLogin.js"; // ✅ Must match filename exactly

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ __dirname fix for ES Modules (optional)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Routes
app.use("/api/branch", branchLogin);

// ✅ Optional test route
app.get("/", (req, res) => {
  res.send("✅ PRZ API is running!");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
