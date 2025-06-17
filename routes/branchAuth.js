 import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/login", (req, res) => {
  console.log("✅ POST /api/branch/login called");
  const { username, password } = req.body;

  const filePath = path.join(process.cwd(), "data", "branchUsers.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Error reading user data:", err);
      return res.status(500).json({ error: "Failed to read user data" });
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (parseErr) {
      console.error("❌ JSON parse error:", parseErr);
      return res.status(500).json({ error: "Corrupted user data" });
    }

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      console.log("✅ Login successful:", foundUser.username);
      return res.json({ success: true, user: foundUser });
    } else {
      console.warn("⚠️ Invalid credentials");
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

export default router;
