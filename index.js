import express from 'express';
import cors from 'cors';
import parcelRoutes from './routes/parcels.js'; // ✅ make sure file exists and path is correct

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

// ✅ All API routes mounted under /api
app.use('/api', parcelRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});











