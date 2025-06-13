 import express from "express";
import cors from "cors";

import branchAuthRoutes from "./routes/branchAuth.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ✅ MOUNT ROUTE CORRECTLY
app.use("/api/branch", branchAuthRoutes);

app.get("/", (req, res) => {
  res.send("PRZ API is running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
