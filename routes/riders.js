const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data", "riders.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to load riders" });

    try {
      const parsed = JSON.parse(data);
      res.json(parsed);
    } catch (e) {
      console.error("JSON parse error:", e.message);
      res.status(500).json({ error: "Invalid JSON format in riders.json" });
    }
  });
});

module.exports = router;






