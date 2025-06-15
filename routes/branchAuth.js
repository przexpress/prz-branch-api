 import express from "express";
const router = express.Router();

// ✅ TEMP: Hardcoded users (safe for now)
const users = [
  { id: 1, username: "branchadmin", password: "admin123", branch: "Santa Rosa" },
  { id: 2, username: "branchcavite", password: "cavite123", branch: "Cavite" },
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

export default router;
