 import express from "express";
import cors from "cors";
import branchAuthRoutes from "./routes/branchAuth.js";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.use("/api/branch", branchAuthRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
