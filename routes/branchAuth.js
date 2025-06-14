import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("🟡 Received login request:", username, password); // ✅ Step 1

  const filePath = path.join(process.cwd(), "data", "branchUsers.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Failed to read user data:", err); // ✅ Step 2
      return res.status(500).json({ error: "Failed to read user data." });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u.username === username && u.password === password);

    console.log("🔍 Matching user:", user); // ✅ Step 3

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

export default router;

