 import express from 'express';
import cors from 'cors';
import branchRoutes from './routes/branchAuth.js';

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Allow frontend from Vercel to access the backend
app.use(cors({
  origin: 'https://prz-dashboard-v2.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Register routes
app.use('/api/branch', branchRoutes);

// ✅ Test base route
app.get('/', (req, res) => {
  res.send('PRZ API is running.');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
