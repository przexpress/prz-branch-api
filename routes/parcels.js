import express from 'express';
import fs from 'fs';

const router = express.Router();
const PARCEL_FILE = './data/branch_parcels.json';

// Helper functions
const readParcels = () => {
  if (!fs.existsSync(PARCEL_FILE)) return [];
  return JSON.parse(fs.readFileSync(PARCEL_FILE));
};

const writeParcels = (data) => {
  fs.writeFileSync(PARCEL_FILE, JSON.stringify(data, null, 2));
};

// ✅ POST /api/parcel/create – Create new parcel
router.post('/create', (req, res) => {
  const parcel = req.body;
  const parcels = readParcels();

  const barcode = 'PRZ' + Date.now(); // Unique barcode
  const createdAt = new Date().toISOString();

  const newParcel = {
    ...parcel,
    barcode,
    createdAt,
    status: 'Pending',
  };

  parcels.push(newParcel);
  writeParcels(parcels);

  res.json({ success: true, parcel: newParcel });
});

// ✅ GET /api/parcel – Get all parcels
router.get('/', (req, res) => {
  const parcels = readParcels();
  res.json({ success: true, parcels });
});

// ✅ GET /api/parcel/:barcode – Get parcel by barcode
router.get('/:barcode', (req, res) => {
  const parcels = readParcels();
  const found = parcels.find(p => p.barcode === req.params.barcode);

  if (!found) {
    return res.status(404).json({ success: false, message: 'Parcel not found' });
  }

  res.json({ success: true, parcel: found });
});

export default router;











