 import express from 'express';
import cors from 'cors';
import branchRoutes from './routes/branchAuth.js';

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Enable CORS for both local and Vercel
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://prz-dashboard-v2.vercel.app'
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.use('/api/branch', branchRoutes);

app.get('/', (req, res) => {
  res.send('PRZ API is running.');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
