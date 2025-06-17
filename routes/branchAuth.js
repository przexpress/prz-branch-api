 import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Login attempt:", username, password);

  const filePath = path.join(process.cwd(), "data", "branchUsers.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading user file:", err);
      return res.status(500).json({ error: "Error reading user file" });
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (parseErr) {
      console.error("Invalid JSON format:", parseErr);
      return res.status(500).json({ error: "Invalid user file format" });
    }

    console.log("Loaded users:", users);

    const user = users.find(
      (u) =>
        u.username.trim().toLowerCase() === username.trim().toLowerCase() &&
        u.password.trim() === password.trim()
    );

    if (user) {
      console.log("✅ Login success for:", user.username);
      res.json({ success: true, user });
    } else {
      console.log("❌ Invalid credentials - Input:", username, password);
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

export default router;
