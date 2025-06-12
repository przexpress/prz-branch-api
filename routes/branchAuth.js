import express from 'express';
import fs from 'fs';

const router = express.Router();

// Load users from JSON file
const usersPath = './data/branchUsers.json';

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  try {
    const data = fs.readFileSync(usersPath, 'utf-8');
    const users = JSON.parse(data);

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      res.json({ success: true, user: foundUser });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('❌ Error reading users file:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;

