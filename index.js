 import express from 'express';
import cors from 'cors';
import branchAuthRoutes from './routes/branchAuth.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ✅ Register branch login route
app.use('/api/branch', branchAuthRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
