// routes/branchAuth.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// ✅ Get __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Absolute path to branchUsers.json
const dataPath = path.join(__dirname, '../data/branchUsers.json');

// ✅ POST /api/branch/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Server error' });

    const users = JSON.parse(data);
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    res.json({ success: true, user });
  });
});

export default router;


