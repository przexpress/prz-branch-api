 import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import branchLogin from "./routes/branchLogin.js";

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/branch", branchLogin);

// Optional test route
app.get("/", (req, res) => {
  res.send("✅ PRZ API is working!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
