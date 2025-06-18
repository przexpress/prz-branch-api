 import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// ✅ Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Path to branchUsers.json
const filePath = path.join(__dirname, "..", "public", "branchUsers.json");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading user file:", err);
      return res.status(500).json({ error: "Error reading user file" });
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (parseErr) {
      console.error("JSON parse error:", parseErr);
      return res.status(500).json({ error: "Invalid JSON format" });
    }

    const user = users.find(
      (u) =>
        u.username.trim().toLowerCase() === username.trim().toLowerCase() &&
        u.password.trim() === password.trim()
    );

    if (user) {
      return res.json({ success: true, user });
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

export default router;
