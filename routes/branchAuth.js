 import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// POST /api/branch/login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN ATTEMPT:", username, password);

  const filePath = path.join(process.cwd(), "data", "branchUsers.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Failed to read user data." });
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return res.status(500).json({ error: "Invalid user data format." });
    }

    console.log("USERS FOUND:", users);

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      return res.json({ success: true, user });
    } else {
      console.log("NO MATCH FOUND for:", username, password);
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

export default router;
