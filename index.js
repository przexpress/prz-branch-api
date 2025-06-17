 import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import branchAuthRoutes from "./routes/branchAuth.js";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

// ✅ REGISTER LOGIN ROUTE
app.use("/api/branch", branchAuthRoutes);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("PRZ API is running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
