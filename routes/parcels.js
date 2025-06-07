import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/parcels', (req, res) => {
  const filePath = path.join(process.cwd(), 'data', 'parcels.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load parcels' });
    res.json(JSON.parse(data));
  });
});

export default router;








