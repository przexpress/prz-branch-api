 import express from "express";
import cors from "cors";
import branchAuthRoutes from "./routes/branchAuth.js"; // ✅ Import your branch auth route

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// ✅ Mount your branch login route under /api/branch
app.use("/api/branch", branchAuthRoutes);

app.get("/", (req, res) => {
  res.send("PRZ API is running.");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
