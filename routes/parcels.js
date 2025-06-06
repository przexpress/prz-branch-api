import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

// === Routes ===

// Deliveries route
app.get('/api/deliveries', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'deliveries.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load deliveries' });
    res.json(JSON.parse(data));
  });
});

// Parcels route
app.get('/api/parcels', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'parcels.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load parcels' });
    res.json(JSON.parse(data));
  });
});

app.get('/api/parcels/:barcode', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'parcels.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load parcel' });
    const parcels = JSON.parse(data);
    const parcel = parcels.find(p => p.barcode === req.params.barcode);
    if (!parcel) return res.status(404).json({ error: 'Parcel not found' });
    res.json(parcel);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




