import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const filePath = path.join(process.cwd(), 'data', 'branchUsers.json'); // ✅ correct path

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Failed to read branchUsers.json:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    const users = JSON.parse(data);
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

export default router;

