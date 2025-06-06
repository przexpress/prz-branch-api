// PRZ API/routes/unsuccessful.js
import express from 'express';
const router = express.Router();
import fs from 'fs';
import path from 'path';

const dataFile = path.join(__dirname, '../Data/unsuccessful.json');

router.post('/', (req, res) => {
  const newEntry = req.body;

  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) return res.status(500).send("Error reading file");
    const parsed = JSON.parse(data || '[]');

    parsed.push({ ...newEntry, date: new Date().toISOString() });

    fs.writeFile(dataFile, JSON.stringify(parsed, null, 2), (err) => {
      if (err) return res.status(500).send("Error saving data");
      res.status(200).send("Unsuccessful delivery recorded");
    });
  });
});

export default router;
