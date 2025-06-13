import express from "express";
import fs from "fs";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  fs.readFile("data/branchUsers.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read user data." });

    const users = JSON.parse(data);
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

export default router;



