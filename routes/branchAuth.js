 // routes/branchAuth.js
import express from 'express';
import fs from 'fs';

const router = express.Router();

// Load user data from JSON file
const users = JSON.parse(fs.readFileSync('./data/branchUsers.json', 'utf8'));

// POST /api/branch/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        branch: user.branch
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid username or password'
    });
  }
});

export default router;
