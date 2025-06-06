import express from 'express';
import cors from 'cors';
import deliveriesRoutes from './routes/deliveries.js';
import parcelRoutes from './routes/parcels.js'; // ✅ make sure this line is included

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

// ✅ Use routes
app.use('/api/parcels', parcelRoutes); // ✅ connects /api/parcels
app.use('/api/deliveries', deliveriesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







