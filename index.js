 // index.js
import express from 'express';
import cors from 'cors';
import branchRoutes from './routes/branchAuth.js';

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON

// Mount route
app.use('/api/branch', branchRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('PRZ API is running.');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
