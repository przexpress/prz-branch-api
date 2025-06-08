 import express from 'express';
import cors from 'cors'; // ✅ ADD THIS

import branchAuthRoutes from './routes/branchAuth.js';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors()); // ✅ ALLOW CORS FOR FRONTEND
app.use(express.json());

app.use('/api/branch', branchAuthRoutes);

// Optional home route
app.get('/', (req, res) => {
  res.send('PRZ API is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
