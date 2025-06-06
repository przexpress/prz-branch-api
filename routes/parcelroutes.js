 import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get('/', (req, res) => {
  const data = fs.readFileSync('./data/parcels.json');
  const parcels = JSON.parse(data);
  res.json(parcels);
});

export default router;
