 // backend/index.js
import express from "express";
import cors from "cors";
import path from "path";
import branchAuthRoutes from './routes/branchauth.js';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.use('/api/branch', branchAuthRoutes);

app.get("/", (req, res) => {
  res.send("PRZ API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
