 import express from 'express';
import cors from 'cors';
import path from 'path';

// ROUTES
import branchAuthRoutes from './routes/branchAuth.js';
import parcelRoutes from './routes/parcels.js';
import deliveryRoutes from './routes/deliveries.js';
import ridersRoutes from './routes/riders.js';
import unsuccessfulRoutes from './routes/unsuccessful.js';
import membersRoutes from './routes/members.js';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// ✅ REGISTER ROUTES HERE
app.use('/api/branch', branchAuthRoutes);
app.use('/api/parcels', parcelRoutes);
app.use('/api/deliveries', deliveryRoutes);
app.use('/api/riders', ridersRoutes);
app.use('/api/unsuccessful', unsuccessfulRoutes);
app.use('/api/members', membersRoutes);

// ✅ BASIC ROOT CHECK
app.get('/', (req, res) => {
  res.send('PRZ API is running...');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
