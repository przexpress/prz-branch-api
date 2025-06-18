 import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const filePath = path.resolve("public/branchUsers.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ FILE READ ERROR", err);
      return res.status(500).json({ error: "File missing or unreadable" });
  }

    try {
      const users = JSON.parse(data);
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        return res.json({
          success: true,
          user: {
            username: user.username,
            branch: user.branch,
          },
        });
      } else {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      return res.status(500).json({ error: "Invalid JSON format" });
    }
  });
});

export default router;
