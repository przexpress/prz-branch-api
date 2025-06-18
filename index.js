 // index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import branchLoginRoutes from "./routes/branchLogin.js";
 // ✅ this path must match your folder

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/branch", branchLoginRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
