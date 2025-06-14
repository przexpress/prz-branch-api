import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Required for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // ✅ Use correct absolute path relative to this route file
  const filePath = path.join(__dirname, "../data/branchUsers.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Error reading branchUsers.json:", err);
      return res.status(500).json({ error: "Failed to read user data." });
    }

    try {
      const users = JSON.parse(data);
      const user = users.find((u) => u.username === username && u.password === password);

      if (user) {
        console.log("✅ Login successful:", user.username);
        res.json({ success: true, user });
      } else {
        console.warn("❌ Invalid login attempt for:", username);
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    } catch (parseError) {
      console.error("❌ JSON parse error:", parseError);
      res.status(500).json({ error: "Invalid JSON format." });
    }
  });
});

export default router;


