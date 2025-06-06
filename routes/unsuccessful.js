const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../data/unsuccessful.json');

// Log a new unsuccessful delivery
router.post('/', (req, res) => {
  const { barcode, reason, updatedBy } = req.body;
  const newEntry = {
    barcode,
    reason,
    updatedBy,
    date: new Date().toISOString(),
  };

  fs.readFile(filePath, 'utf8', (err, data) => {
    let logs = [];
    if (!err && data) {
      logs = JSON.parse(data);
    }

    logs.push(newEntry);

    fs.writeFile(filePath, JSON.stringify(logs, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error saving log' });
      }
      res.status(201).json({ message: 'Unsuccessful delivery logged' });
    });
  });
});

// Get logs for a specific barcode
router.get('/:barcode', (req, res) => {
  const barcode = req.params.barcode;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Error reading logs' });

    const logs = JSON.parse(data);
    const filtered = logs.filter((entry) => entry.barcode === barcode);
    res.json(filtered);
  });
});

module.exports = router;

