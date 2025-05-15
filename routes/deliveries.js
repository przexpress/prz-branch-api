const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data", "deliveries.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to load deliveries" });

    try {
      const parsed = JSON.parse(data);
      res.json(parsed);
    } catch (e) {
      console.error("JSON parse error:", e.message);
      res.status(500).json({ error: "Invalid JSON format in deliveries.json" });
    }
  });
});

module.exports = router;






