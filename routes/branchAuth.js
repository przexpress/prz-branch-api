import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // ✅ Correct path to branchUsers.json
  const filePath = path.join(process.cwd(), "data", "branchUsers.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read user data." });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

export default router;

