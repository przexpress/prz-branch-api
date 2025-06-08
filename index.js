 import express from 'express';
import cors from 'cors'; // ✅ add this
import branchRoutes from './routes/branchAuth.js';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors()); // ✅ enable CORS
app.use(express.json());

app.use('/api/branch', branchRoutes);

app.get('/', (req, res) => {
  res.send('PRZ API is running.');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
