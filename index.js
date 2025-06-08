 import express from 'express';
import cors from 'cors';
import branchRoutes from './routes/branchAuth.js';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors()); // ✅ enable CORS
app.use(express.json()); // ✅ enable JSON body parsing

// ✅ use branch login routes
app.use('/api/branch', branchRoutes);

app.get('/', (req, res) => {
  res.send('PRZ API is running.');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
