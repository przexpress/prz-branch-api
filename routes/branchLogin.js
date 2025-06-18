 import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await fetch("https://prz-api-1.onrender.com/branchUsers.json");
    const users = await response.json();

    const user = users.find(
      (u) =>
        u.username.trim().toLowerCase() === username.trim().toLowerCase() &&
        u.password.trim() === password.trim()
    );

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("❌ Error fetching user file:", err);
    res.status(500).json({ error: "Error reading user file" });
  }
});

export default router;
