 import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("🔐 Login attempt:", username); // ✅ Log who is trying to login

  const filePath = path.join(process.cwd(), "data", "branchUsers.json");
  console.log("📂 Reading from:", filePath); // ✅ Confirm file path

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Read file error:", err);
      return res.status(500).json({ error: "Failed to read user data." });
    }

    try {
      const users = JSON.parse(data);
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        console.log("✅ Login success:", user.username);
        res.json({ success: true, user });
      } else {
        console.warn("⚠️ Login failed: Invalid credentials");
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    } catch (e) {
      console.error("❌ JSON parse error:", e);
      res.status(500).json({ error: "Invalid user data format." });
    }
  });
});

export default router;
