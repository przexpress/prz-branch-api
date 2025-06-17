 import express from "express";
import cors from "cors";
import branchAuth from "./routes/branchAuth.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/branch", branchAuth); // ✅ This must be correct

app.get("/", (req, res) => {
  res.send("PRZ API is running...");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
