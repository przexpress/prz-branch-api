 import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust path
const filePath = path.join(__dirname, "..", "data", "branchUsers.json");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("🔍 Received:", req.body); // 🧪

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Error reading branchUsers.json:", err);
      return res.status(500).json({ error: "File read error" });
    }

    try {
      const users = JSON.parse(data);
      const user = users.find(
        (u) =>
          u.username.trim().toLowerCase() === username.trim().toLowerCase() &&
          u.password.trim() === password.trim()
      );

      if (user) {
        console.log("✅ Matched user:", user);
        return res.json({ success: true, user });
      } else {
        console.log("❌ No user matched");
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    } catch (parseErr) {
      console.error("❌ JSON parse error:", parseErr);
      return res.status(500).json({ error: "Invalid JSON format" });
    }
  });
});

export default router;
