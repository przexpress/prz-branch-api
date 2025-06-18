 import express from "express";

const router = express.Router();

// ✅ TEMPORARY hardcoded users (skip JSON file for now)
const users = [
  { username: "santarosa001", password: "123456", branch: "Santarosa" },
  { username: "branchcavite", password: "cavite123", branch: "Cavite" }
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

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
});

export default router;
