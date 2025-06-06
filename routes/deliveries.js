import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const deliveriesFile = path.join(process.cwd(), 'data', 'deliveries.json');

// ✅ GET all deliveries
router.get('/', (req, res) => {
  try {
    const data = fs.readFileSync(deliveriesFile, 'utf-8');
    const deliveries = JSON.parse(data);
    res.json(deliveries);
  } catch (err) {
    console.error('Failed to read deliveries:', err);
    res.status(500).json({ error: 'Failed to read deliveries' });
  }
});

export default router;








